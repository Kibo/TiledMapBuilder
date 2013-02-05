# TiledMapBulder v0.3

Module for [Crafty HTML5 game engine](http://craftyjs.com/ "Crafty HTML5 game engine").

It builds a tiled map on the basis of exported JSON file from [Tiled Map Editor](http://www.mapeditor.org/ "Tiled Map Editor"). It also provides methods to access to tiles.

###Usage:

Build a map
```
Crafty.e("2D, DOM, TiledMap")
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






