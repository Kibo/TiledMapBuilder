# TiledMapBulder v0.3

A Tiled map (http://mapeditor.org) importer for Crafty.js ( http://craftyjs.com)


###Usage:

Build a tiled map
```
Crafty.e("2D, DOM, TiledMapBuilder").createWorld( SOURCE_FROM_TILED_MAP_EDITOR )    
```
or

```
Crafty.e("2D, DOM, TiledMapBuilder")
	.createWorld( SOURCE_FROM_TILED_MAP_EDITOR, function( tiled ){
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
- documented
- tested


**Contact me**

[Crafty group thread](#) TODO

I will be grateful for the constructive comments.
- tomasjurman@gmail.com






