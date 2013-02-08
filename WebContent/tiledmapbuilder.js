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
	
	 /**
	 * Default renderer method 		
	 * @see TiledMapBuilder.getRenderMethod  			 
	 */
	_renderMethod: 'DOM',
	_layers: {},
	
    init: function() {    			    	  			    
    	if( this.has("Canvas") ){
    		this._renderMethod = 'Canvas';
    	}  			    	
    	return this;
    },
	      			   	     
    /**@
	 * #TiledMapBuilder.createWorld
	 * Renders a tiled world based on the source file.
	 * 
	 * @param	Object source - object from JSON file exported by Tiled Map Editor	
	 * @param 	Function callback - callback function call when world is done 
	 * @throws	Error - when source is not valid 	
	 * @return	Object this  
	 * @see http://www.mapeditor.org/ - Tiled Map Editor, export to JSON			 
	 */
    createWorld: function( source, callback ) {     	    	   
    	if(!this.isValid(source)){    	
    		throw new Error("Source is not valid.");    		
    	}
    	
    	this._source = source;	
    	this.makeSprites( source );
    	this.makeLayers( source );    
           
    	if(typeof callback != 'undefined'){
    		callback.call(this, this);
    	}
    	
    	return this;
	},
			
	/**@
	 * #TiledMapBuilder.getLayer
	 * Contains all tiles as Crafty.entity in layer
	 * 
	 * @param	String layername - name of layer, The name will be defined in the Tiled Map Editor
	 * @return	Array<Crafty.e>[] - all tiles from layer
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
	 * @param	Integer row - number of row from tiled matrix, range: 1-n	
	 * @param	Integer column - number of column from tiled matrix, range: 1-n	
	 * @return	Object<Crafty.e> tile 
	 */
	getTile: function( layerName, row, column){
		
		if(!this.isLayer( layerName )){
			return null;
		}
							
		return this._layers[layerName][this.getTileIndex(layerName, row, column)];
	},
		
	/**@
	 * #TiledMapBuilder.getLayers	
	 * Contains all tiles as Crafty.entity divided into layers
	 * 
	 * @return	Array<Array<Crafty.e>[]>[] layers - [ [tile1, tile2], [tile3, tile4], ...] 		
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
     
	/**
	 * Validate source object
	 * 
	 * @param source - object from JSON file exported by Tiled Map Editor	
	 * @return boolean
	 */
	isValid: function( source ){
		var isValid = true;
				
		if(typeof source == 'undefined' || 						// is not undefined
		   !(source.width && source.height) ||					// has width and height property
		   !(source.layers && source.layers.length >=1) ||		// has no empty layer property
		   !(source.tilesets && source.tilesets.length >=1)){	// has no empty tilesets property
			isValid = false;
		}
		
		return isValid;
	},
	
	/**
	 * Create Crafty.sprite() for each source image	
	 * 
	 * @param Object source - object from JSON file exported by Tiled Map Editor	
	 * @return Object this
	 */
	makeSprites: function( source ){
		
		for(var idx = 0; idx < source.tilesets.length; idx++ ){
			this.makeSprite( source.tilesets[idx] );			
		}		
	},
	
	/**
	 * Create Crafty.sprite() from tileset	
	 * 
	 * @param Object tileset	
	 * @return Object Crafty.sprite()	
	 * @see http://craftyjs.com/api/Crafty-sprite.html - Crafty.sprite() documentation
	 */
	makeSprite:function( tileset ){				
		return Crafty.sprite(tileset.tilewidth, tileset.tileheight, tileset.image, this.makeTilesMap( tileset ));										
	},
	
	/**
	 * Create tiles map from tileset
	 * Every tile´s name is: 'Tile' + index
	 *  
	 * @param Object tileset	
	 * @return Object map - {tile1:[posX, posY], tile2:[posX, posY], ...}	
	 */
	makeTilesMap:function(tileset){	

		var numberOfColumns = tileset.imagewidth / tileset.tilewidth;
		var numberOfRows = tileset.imageheight / tileset.tileheight;
		
		var tilesMap = {};		
		for(var row = 0; row < numberOfRows; row++ ){
			
			for( var column = 0; column < numberOfColumns; column++ ){								
				var name = "Tile" + ((parseInt(tileset.firstgid) + column) + (numberOfColumns * row ));								
				tilesMap[name] = [column, row];
			}			
		}	
				
		return tilesMap;
	},
	
	/**
	 * Create layers with Crafty.entity for every tile
	 * 
	 * @param Object source - object from JSON file exported by Tiled Map Editor		
	 */
	makeLayers: function( source ){				
		for(var layer = 0; layer < source.layers.length; layer++){
			var entities = this.createEntities( source.layers[layer] );
			this._layers[source.layers[layer].name] = entities;			
		}				
	},
	
	/**
	 * Create Crafty.entities in layer
	 * 
	 * @param Object layer		
	 */
	createEntities: function( layer ){
		var entities = [];
		for(var idx = 0; idx < layer.data.length; idx++){	
			
			if( layer.data[idx] == 0 ){
				entities.push(0);
			}else{
				entities.push( this.createEntity( layer, idx ) );
			}						
		}				
		return entities;
	},
	
	/**
	 * Create Crafty.entity
	 * 
	 * @param Object layer
	 * @param int dataIndex	
	 * @return Object Crafty.entity
	 * @see http://craftyjs.com/api/Crafty-e.html - Crafty.entity
	 */
	createEntity:function(layer, dataIndex){	
		var posX = (dataIndex % layer.width) * this._source.tilewidth;
		var posY = Math.floor((dataIndex / layer.height)) * this._source.tileheight;	
		return Crafty.e("2D," + this.getRenderMethod() + ", " + "Tile" + layer.data[dataIndex]).attr({x:posX, y:posY});	
	},
	
	/**
	 * Determine if layer with layerName exists
	 * 
	 * @param String layerName	
	 * @return boolean
	 */
	isLayer: function( layerName){
		return typeof this._layers[layerName] != 'undefined';
	},
	
	/**
	 * Get index of tile from this._layers array
	 * 
	 * @param String layerName	
	 * @param int row, range: 1-n
	 * @param int column, range: 1-n
	 * @throws	Error OutOfRangeException - column or row is out of range 
	 * @return int index
	 */
	getTileIndex:function(layerName, row, column){
		if(row <= 0 || column <= 0){
			throw new Error("Row number range: 1-n; Column number range: 1-n."); 
		}
		
		return (column-1) + (this.getLayerFromSource( layerName ).width * (row -1));	
	},
	
	/**
	 * Get Layer property(Object) from source object
	 * Source object is object from JSON file exported by Tiled Map Editor
	 * 
	 * @param String layerName		
	 * @return Object layer
	 */
	getLayerFromSource:function(layerName){
		for(var idx = 0; idx < this._source.layers.length; idx++){
			if(this._source.layers[idx].name == layerName){
				return this._source.layers[idx]; 
			}
		}
		return null;		
	}	
});

