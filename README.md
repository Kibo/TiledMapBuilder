# TiledMapBuilder v0.8.6

A Tiled map (http://mapeditor.org) importer for Crafty.js (http://craftyjs.com)

###The main features:
- Draw orthogonal map (see [orthogonal1](http://crafty.kibo.cz/tiled2Demo/examples/EasterIsland), [orthogonal2](http://crafty.kibo.cz/tiled2Demo/examples/Sea)).
- Draw isometric diamond map (see [diamond](http://htmlpreview.github.com/?https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/examples/IsometricDiamond/index.html) )
- Draw isometric staggered map (see [staggered](http://htmlpreview.github.com/?https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/examples/IsometricStaggered/index.html) )

###Advantage:
- no depending on the third party library
- [documented code](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/tiledmapbuilder.js)
- [tested code](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/test/tests.html)

###Todo:
Trasfer Tiled Map editor object to Crafty.polygon, Crafty.circle.

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

Get all layers
```
var layers = TiledMapBuilder.getLayers();
```

Get the tile
```
var tile = TiledMapBuilder.getTile( layerName, row, column );
```

Get render method: DOM or Canvas
```
var renderMethod = TiledMapBuilder.getRenderMethod();
```

Get source object
```
var source = TiledMapBuilder.getSource();
```

Get orientation: orthogonal. isometric, staggered
```
var source = TiledMapBuilder.getOrientation();
```

Determine isometric
```
if (TiledMapBuilder.isIsometric() ){
	//do something
};
```

Get Crafty.isometric object
```
var iso = TiledMapBuilder.getIsometric();
```

###Work procedure:

1) Create tiled map in [Tiled map editor](http://mapeditor.org)

![Tiled Map Editor](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/editor.png)

2) Export your tiled map as JSON

![Tiled Map Editor](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/export.png)

3) Use [Crafty.js](http://craftyjs.com) for building your amazing HTML5 game.

![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/game1.png)
![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/game2.png)
![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/deamond.png)
![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/staggered.png)


###Examples
- [Demo orthogonal: EasterIsland](http://crafty.kibo.cz/tiled2Demo/examples/EasterIsland)
- [Demo orthogonal: Sea](http://crafty.kibo.cz/tiled2Demo/examples/Sea)
- [Demo isometric: Meadow](http://htmlpreview.github.com/?https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/examples/IsometricDiamond/index.html)
- [Demo staggered: Forest](http://htmlpreview.github.com/?https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/examples/IsometricStaggered/index.html)


**Contact me**

I will be grateful for constructive comments.

- [Crafty group thread](https://groups.google.com/d/msg/craftyjs/63eQ0SRw40I/tk5cGKRCME0J)
- tomasjurman@gmail.com


