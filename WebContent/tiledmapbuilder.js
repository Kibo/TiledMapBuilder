/**@
* #TiledMapBuilder
* @category Graphics
* A Tiled map (http://mapeditor.org) importer for Crafty.js ( http://craftyjs.com)
* It creates a tiled world on the basis of exported JSON file from Tiled Map Editor.
* It also provides methods to access to tiles, layers, tilesets. 
* @example
* ~~~
* Crafty.e("2D, DOM, TiledMapBuilder")
* 	.createWorld( tiledMapEditorSourceObject )
* ~~~
* @see http://www.mapeditor.org/ - Tiled Map Editor
* @author Tomas Jurman (tomasjurman@gmail.com)
*/
Crafty.c("TiledMapBuilder", {  	  				
		
	 constant: {
		 ISOMETRIC_DIAMOND		:'isometric',
		 ISOMETRIC_STAGGERED	:'staggered',
		 ORTHOGONAL				:'orthogonal',
		 RENDER_METHOD_CANVAS	:'Canvas',
	     RENDER_METHOD_DOM		:'DOM'
	 },
	
	_renderMethod: null,
	_isometric:null,
	_layers: {},	
	_startRow:null,
	_startColumn:null,
	_viewWidth:null,
	_viewHeight:null,	
    init: function() {    			    	  			    
    	this._renderMethod = this.has(this.constant.RENDER_METHOD_CANVAS) ? 
    			this.constant.RENDER_METHOD_CANVAS : 
    			this.constant.RENDER_METHOD_DOM;	
    			    	
    	return this;
    },
    
    
    /**@
	 * #TiledMapBuilder.setMapDataSource
	 * Set a data source for tiled map.
	 * 
	 * @param {Object} source - object from JSON file exported by Tiled Map Editor		
	 * @throws {Error} - when source is not valid 	
	 * @return {Object} this
	 *   
	 * @see http://www.mapeditor.org/ - Tiled Map Editor, export to JSON			 
	 */
    setMapDataSource:function( source ){
    	if(!this.isValid(source)){    	
    		throw new Error("Source is not valid.");    		
    	}
    	
    	this._source = source;
    	if( this.isIsometric() ){
    		this.setIsometric( source );
    	}
    	
    	this.createTiles( source );
    	
    	return this;
    },
    
    /**@
	 * #TiledMapBuilder.createWorld
	 * Renders a tiled world based on the source file.
	 * 	
	 * @param {Function} callback - callback function call when world is done 	
	 * @return {Object} this   	 	
	 */
    createWorld: function( callback ) {     	    	       	
    	return this.createView( 0, 0, this._source.width, this._source.height, callback );
	},
	
	/**@
	 * #TiledMapBuilder.createView
	 * Renders a tiled view based on the source file.
	 * 	
	 * @param {Integer} startRow - start row, start from 0 to N
	 * @param {Integer} startColumn - start column, start from 0 to N
	 * @param {Integer} viewWidth - view width in tiles 
	 * @param {Integer} viewHeight - view height in tiles
	 * @param {Function} callback - callback function call when world is done	
	 * @return {Object} this   			
	 */
	createView: function( startRow, startColumn, viewWidth, viewHeight, callback ){
		
    	this._startRow = startRow;
    	this._startColumn = startColumn;
    	this._viewWidth = viewWidth;
    	this._viewHeight = viewHeight;
    	    	            	  
    	this.createEntities( this._source );
        	    	     	            
    	if(typeof callback != 'undefined'){
    		callback.call(this, this);
    	}
    	
    	return this;    	
    },
       	
	/**@
	 * #TiledMapBuilder.getLayer
	 * Contains all tiles as Crafty.entity in layer
	 * 
	 * @param	{String} layerName - name of layer, The name will be defined in the Tiled Map Editor
	 * @return	{Array} entities
	 *
	 * @see http://www.mapeditor.org/ - Tiled Map Editor		
	 */
	getLayer:function( layerName ){
		
		if(!this.isLayer( layerName )){
			return null;
		}
		
		var entities = [];		
		for( var idx = 0; idx < this._layers[layerName].length; idx++){
			if( this._layers[layerName][idx] != 0 ){
				entities.push( this._layers[layerName][idx] );
			};					
		}
		
		return entities;
	},
	
	/**@
	 * #TiledMapBuilder.getTile	
	 *
	 * @param	String layerName - number of layer
	 * @param	Integer row - number of row from tiled matrix, range: 0-n	
	 * @param	Integer column - number of column from tiled matrix, range: 0-n	
	 * @return	Object<Crafty.e> tile 
	 */
	getTile: function( row, column, layerName ){
		
		if(!this.isLayer( layerName )){
			return null;
		}
				
		return this._layers[layerName][this.getTileIndex( row, column, this.getLayerFromSource(layerName))];
	},
		
	/**@
	 * #TiledMapBuilder.getLayers	
	 * Object with layerNames as key and Array of loaded Entities as value
	 * Key - layerName
	 * Value - Array<Etities>
	 * 
	 * @return {Object} layers		
	 */
    getLayers: function(){
    	return this._layers;
    },
		
	 /**@
	 * #TiledMapBuilder.getRenderMethod 	
	 *
	 * @example
	 * RenderMethod depends on parent Entity:
	 * ~~~	
	 * Crafty.e("2D, Canvas, TiledMapBuilder")
	 * return -> Canvas	 
	 * 	 
	 * Crafty.e("2D, DOM, TiledMapBuilder")
	 * return -> DOM	 
	 * ~~~
	 * 
	 * @return	String renderMethod - DOM or Canvas				
	 */
    getRenderMethod: function(){
    	return this._renderMethod;
    },
    
    /**@
	 * #TiledMapBuilder.getSource	
	 * 
	 * @return	Object source	
	 * @see TiledMap.load 			
	 */
    getSource: function(){
    	return this._source;
    },
        
    /**@
	 * #TiledMapBuilder.getIsometric
	 * 
	 * @return Object Crafty.isometric or null if map is not isometric
	 * 
	 * @see http://craftyjs.com/api/Crafty-isometric.html		
	 */
    getIsometric:function(){
    	return this._isometric;
    },
    
    /**@
	 * #TiledMapBuilder.isIsometric
	 * 
	 * @return	boolean true or false		
	 */
    isIsometric:function(){
    	return this._source.orientation == this.constant.ISOMETRIC_DIAMOND || 
    		this._source.orientation == this.constant.ISOMETRIC_STAGGERED;
    },
    
    /**@
	 * #TiledMapBuilder.getOrientation
	 * Map orientation.
	 * 
	 * @return {String} (orthogonal || isometric || staggered)		
	 */
    getOrientation:function(){
    	return this._source.orientation;
    },
           
	/*
	 * Validate source object
	 * 
	 * @param {Object} source - object from JSON file exported by Tiled Map Editor	
	 * @return {boolean} true or false
	 */
	isValid: function( source ){
		var isValid = true;
				
		if(!source || 											// is not undefined
		   !(source.width && source.height) ||					// has width and height property
		   !(source.layers && source.layers.length >=1) ||		// has no empty layer property
		   !(source.tilesets && source.tilesets.length >=1)){	// has no empty tilesets property
			isValid = false;
		}
		
		return isValid;
	},
	
	/*
	 * Create Crafty.sprite() for each source image	
	 * 
	 * @param {Object} source - object from JSON file exported by Tiled Map Editor	
	 * @return {Object} this
	 */
	createTiles: function( source ){		
		for(var idx = 0; idx < source.tilesets.length; idx++ ){
			this.createSprite( source.tilesets[idx] );			
		}		
	},
	
	/*
	 * Create Crafty.sprite() from tileset	
	 * 
	 * @param {Object} tileset	
	 * @return {Object} Crafty.sprite()
	 * 	
	 * @see http://craftyjs.com/api/Crafty-sprite.html - Crafty.sprite() documentation
	 */
	createSprite:function( tileset ){		
		return Crafty.sprite(tileset.tilewidth, tileset.tileheight, tileset.image, this.arrangeTiles( tileset ), tileset.margin, tileset.margin);										
	},
	
	/*
	 * Create tiles map from tileset
	 * Every tile´s name is: 'Tile' + index
	 *  
	 * @param {Object} tileset	
	 * @return {Object} map - {tile1:[posX, posY], tile2:[posX, posY], ...}	
	 */
	arrangeTiles:function(tileset){	
			
		var numberOfColumns = Math.round(tileset.imagewidth / (tileset.tilewidth+tileset.margin));
	    var numberOfRows = Math.round(tileset.imageheight / (tileset.tileheight+tileset.margin));
		
		var tilesMap = {};		
		for(var row = 0; row < numberOfRows; row++ ){
			
			for( var column = 0; column < numberOfColumns; column++ ){								
				var name = "Tile" + ((parseInt(tileset.firstgid) + column) + (numberOfColumns * row ));								
				tilesMap[name] = [column, row];
			}			
		}	
				
		return tilesMap;
	},
	
	 /*
	 * #TiledMapBuilder.setIsometric
	 * Create Crafty.isometric object and set it as private field.
	 * 
	 * @param {Object} source - object from JSON file exported by Tiled Map Editor			
	 */
    setIsometric:function( source ){
    	this._isometric = Crafty.isometric.size(source.tilewidth, source.tileheight);
    },
	
	/*
	 * Create Crafty.entities
	 * 
	 * @param {Object} source - object from JSON file exported by Tiled Map Editor		
	 */
    createEntities: function( source ){				
		for(var layer = 0; layer < source.layers.length; layer++){
			var entities = this.createEntitiesInLayer( source.layers[layer] );
			this._layers[source.layers[layer].name] = entities;			
		}				
	},
	
	/*
	 * Create Crafty.entities in layer
	 * 
	 * @param {Object} layer		
	 */
	createEntitiesInLayer: function( layer ){			
		var indexes = this.getIndexes(this._startRow, this._startColumn, this._viewWidth, this._viewHeight, layer);
		
		var entities = [];
		for(var i = 0; i < indexes.length; i++){	
			
			if( layer.data[indexes[i]] == 0 ){
				entities.push(0);
			}else{
				var entity = this.createEntity( layer, indexes[i] );										
				entities.push( entity );
			}						
		}				
		return entities;
	},
		
	/*
	 * Create Crafty.entity
	 * 
	 * @param {Object} layer
	 * @param {Integer} dataIndex	
	 * @return {Object} Crafty.entity
	 * 
	 * @see http://craftyjs.com/api/Crafty-e.html - Crafty.entity
	 */
	createEntity:function(layer, dataIndex){			
		var column = dataIndex % layer.width;
		var row = Math.floor((dataIndex / layer.width));								
		var entity = Crafty.e("2D," + this.getRenderMethod() + ", Tile" + layer.data[dataIndex] + ", " + layer.name);
		this.setPosition( entity, column, row);
		return entity;
	},
			
	/*
	 * Set position of entity
	 * 
	 * @param {Object} Crafty.entity
	 * @param {Integer} column
	 * @param {Integer} row
	 
	 */
	setPosition:function( entity, column, row){		
		
		switch(this.getOrientation()){
			case this.constant.ORTHOGONAL:
				entity.x = column * this._source.tilewidth;
				entity.y = row * this._source.tileheight;
				break;
			case this.constant.ISOMETRIC_DIAMOND:				
				var x = (column - row) * (this._source.tilewidth/2);
				var y = (column + row) * (this._source.tileheight/2);					
				var positions = this.getIsometric().px2pos(x,y);
				
				//TODO - do custom px2pos for diamond map
				this.getIsometric().place( -positions.x, -positions.y, 0, entity);					
				break;
				
			case this.constant.ISOMETRIC_STAGGERED:
				this.getIsometric().place( column, row, 0, entity);				
				break;
											
			default:
				 throw new Error("Orientation of map " + this.getOrientation() + "is not supported.");
		}						
	},
			
	/*
	 * Determine if layer with layerName exists
	 * 
	 * @param String layerName	
	 * @return boolean
	 */
	isLayer: function( layerName){
		return this._layers[layerName] ? true : false;
	},
	
	/*
	 * Get index of tile from this._layers array
	 * 	 
	 * @param {Integer} row, start from 0 to N
	 * @param {Integer} column, start from 0 to N
	 * @param {Object} layer
	 * @throws	Error OutOfRangeException - column or row is out of range 
	 * @return {Integer} index
	 */
	getTileIndex:function( row, column, layer){
		if( isNaN(row) || isNaN(column) ){
			throw new Error("Illegal argument exception: " + row + ", " + column); 
		}
		
		return ((layer.width) * row) + column;	
	},
	
	/*
	 * Get Layer object from source object
	 * Source object is object from JSON file exported by Tiled Map Editor
	 * 
	 * @param {String} layerName		
	 * @return {Object} layer
	 */
	getLayerFromSource:function(layerName){
		for(var idx = 0; idx < this._source.layers.length; idx++){
			if(this._source.layers[idx].name == layerName){
				return this._source.layers[idx];
				break;
			}
		}
		return null;				
	},
	

    
    /*
	* Return indexes from source data
	* 
	* @param {Integer} startRow, 0-n
	* @param {Integer} startColumn, 0-n
	* @param {Integer} width in tile
	* @param {Integer} height in tile
	* @param {Object} layer
	* @return {Array} indexes - [0,1,10,11,12,15,20,21,22,23,24,25,26]	
	*/
    getIndexes:function( startRow, startColumn, viewWidth, viewHeight, layer ){
    	var idxs = [];
    	
    	for(var row = startRow ; row < (startRow + viewHeight); row++ ){
    		var indexOfStartTile = this.getTileIndex(row, startColumn, layer);     		
    		idxs = idxs.concat(  this.makeSequence(indexOfStartTile, indexOfStartTile + viewWidth));    		
    	}    	   
    	return idxs;
    },
    
    /*
	* Create sequence of numbers
	* from is in
	* to is out
	* 
	* @param {Integer} from
	* @param {Integer} to
	* @return {Array} indexes - [0,1,2,3,4,5,6,7,8,9,..]	
	*/
    makeSequence:function(from, to){       	    
    	var numbers = [];       
    	for(var idx = from; idx < to; idx++){
    		numbers.push(idx);
    	}    	      
    	return numbers;	
    },            
});