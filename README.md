# TiledMapBulder v0.3

A Tiled map (http://mapeditor.org) importer for Crafty.js ( http://craftyjs.com)


###Usage:

Build a map
```
Crafty.e("2D, DOM, TiledMapBuilder")
    .load( tiledMapEditorSourceObject )
    .bind("TiledMapLoaded", function(){
	this.createWorld()
    })
```

Get all tiles from layer
```
var tiles = TiledMapBuilder.getTiles( layer )
```

Get the tile
```
var tile = TiledMapBuilder.getTile( layer, row, column )
```

###Advantage:
- does not depend on jQuery
- documented
- tested


**Contact me**

I will be grateful for the constructive comments.
- tomasjurman@gmail.com






