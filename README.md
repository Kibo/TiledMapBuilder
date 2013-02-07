# TiledMapBulder v0.3

A Tiled map (http://mapeditor.org) importer for Crafty.js (http://craftyjs.com)

###Work procedure:

1. Create tiled map in [Tiled map editor](http://mapeditor.org)
2. Export your tiled map as JSON
3. Use [Crafty.js](http://craftyjs.com) for building your first HTML5 game.


###Usage:

Build a tiled map
```
Crafty.e("2D, DOM, TiledMapBuilder").createWorld( SOURCE_FROM_TILED_MAP_EDITOR )    
```
or

```
Crafty.e("2D, DOM, TiledMapBuilder")
	.createWorld( SOURCE_FROM_TILED_MAP_EDITOR, function( map ){
		console.log("done");
	} )    
```

Get all entities from layer
```
var entities = TiledMapBuilder.getLayer( layerName );
```

Get the tile
```
var tile = TiledMapBuilder.getTile( layerName, row, column );
```

###Advantage:
- no depending on the third party library
- [documented code](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/tiledmap.js)
- [tested](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/test/tests.html, "Tests")
- [example code](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/example/index.html, "Example code")


**Contact me**

[Crafty group thread](#) TODO

I will be grateful for the constructive comments.
- tomasjurman@gmail.com






