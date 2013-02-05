/**@
* #TiledMapBuilder
* @category Graphics
* Tool for creating tiled map
* @trigger WorldCreated - WorldCreated - when world is done.
* It builds a tiled map on the basis of exported JSON file from Tiled Map Editor.
* It also provides methods to access to tiles. 
* @example
* ~~~
* Crafty.e("2D, DOM, TiledMap")
* 	.load( tiledMapEditorSourceObject )
* 	.bind("TiledMapLoaded", function(){
* 		this.createWorld()
* 	 })
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
	_layers: [],
	
    init: function() {    			    	  			    
    	if( this.has("Canvas") ){
    		this._renderMethod = 'Canvas';
    	}  			    	
    	return this;
    },
	      			   	     
    /**@
	 * #TiledMapBuilder.load	
	 * 
	 * @param	Object source - object from JSON file exported by Tiled Map Editor	
	 * @throws	Error - when source is not valid 
	 * @trigger TiledMapLoaded - when map is loaded. 
	 * @return	Object this  
	 * @see http://www.mapeditor.org/ - Tiled Map Editor, export to JSON			 
	 */
    load: function( source ) {     	    	   
    	if(!this.isValid(source)){    	
    		throw new Error("Source is not valid.");    		
    	}
    	
    	this._source = source;	    	
    	this.make( source );
    	this.trigger("TiledMapLoaded", this);
    	return this;
	},
		
	/**@
	 * #TiledMapBuilder.getTile	
	 *
	 * @param	Integer layer - number of layer
	 * @param	Integer row - number of row from tiled matrix	
	 * @param	Integer column - number of column from tiled matrix	
	 * @return	Object<Crafty.sprite()> tile 
	 */
	getTile: function( layer, row, column){
		
		if( typeof this._layers[layer] == 'undefined' || 
			typeof this._layers[layer].tiles[row] == 'undefined' || 
			typeof this._layers[layer].tiles[column] == 'undefined'){
			return null;
		}
				
		return this._layers[layer].tiles[row][column];
	},
	
	/**@
	 * #TiledMapBuilder.getTiles	
	 * 
	 * @param	Integer layer - number of layer
	 * @return	Array<Crafty.sprite>[] - all tiles from layer
	 */
	getTiles: function( layer ){		
		return this._layers[layer];
	},
	
	/**@
	 * #TiledMapBuilder.createWorld
	 * Renders the world based on the source file.
	 * 	
	 * @return	Object this  
	 * @see TiledMap.load 			 
	 */
	createWorld: function() {
		// TODO			
		return this;
	},
	
	 /**@
	 * #TiledMapBuilder.getRenderMethod 	
	 *
	 * @example
	 * RenderMethod depends on parent Entity:
	 * ~~~	
	 * Crafty.e("2D, Canvas, TiledMap")
	 * return -> Canvas	 
	 * 	 
	 * Crafty.e("2D, DOM, TiledMap")
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
	 * Create Sprites<Crafty.sprite>
	 * 
	 * @param source - object from JSON file exported by Tiled Map Editor	
	 * @return Object this
	 */
	make: function( source ){
		//TODO		
		return null;
	}
});

