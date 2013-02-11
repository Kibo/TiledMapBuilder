# TiledMapBuilder v0.8

A Tiled map (http://mapeditor.org) importer for Crafty.js (http://craftyjs.com)

###Work procedure:

1) Create tiled map in [Tiled map editor](http://mapeditor.org)

![Tiled Map Editor](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/editor.png)

2) Export your tiled map as JSON

![Tiled Map Editor](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/export.png)

3) Use [Crafty.js](http://craftyjs.com) for building your amazing HTML5 game (see [demo1](http://crafty.kibo.cz/tiled2Demo/example1/), [demo2](http://crafty.kibo.cz/tiled2Demo/example2/)).

![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/game1.png)
![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/game2.png)


###Usage:

Build a tiled map
```
Crafty.e("2D, DOM, TiledMapBuilder").createWorld( SOURCE_FROM_TILED_MAP_EDITOR );    
```
or with callback

```
Crafty.e("2D, DOM, TiledMapBuilder")
	.createWorld( SOURCE_FROM_TILED_MAP_EDITOR, function( map ){
		console.log("done");
	});    
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
- [documented code](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/tiledmapbuilder.js)
- [tested code](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/test/tests.html)


###Examples
- [Demo: EasterIsland](http://crafty.kibo.cz/tiled2Demo/example1/)
- [Demo: Sea](http://crafty.kibo.cz/tiled2Demo/example2/)


**Contact me**

[Crafty group thread](https://groups.google.com/d/msg/craftyjs/63eQ0SRw40I/tk5cGKRCME0J)

I will be grateful for constructive comments.
- tomasjurman@gmail.com






