# TiledMapBuilder v0.9.0

A Tiled map (http://mapeditor.org) importer for Crafty.js (http://craftyjs.com)

###The main features:
- Draw orthogonal map (see [orthogonal1](http://kibo.github.com/TiledMapBuilder/examples/OrthogonalEasterIsland/index.html), [orthogonal2](http://kibo.github.com/TiledMapBuilder/examples/OrthogonalSea/index.html)).
- Draw isometric diamond map (see [diamond](http://kibo.github.com/TiledMapBuilder/examples/IsometricDiamond/index.html))
- Draw isometric staggered map (see [staggered](http://kibo.github.com/TiledMapBuilder/examples/IsometricStaggered/index.html) )

###Advantage:
- no depending on the third party library
- [documented code](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/tiledmapbuilder.js)
- [tested code](https://github.com/Kibo/TiledMapBuilder/blob/master/WebContent/test/tests.html)

###Todo:
Trasfer Tiled Map editor objects to Crafty.polygon, Crafty.circle.

###Usage:

Attach two script files. There are two files because builder uses [background thread](http://www.w3.org/TR/2009/WD-workers-20091029/) for lazy rendering. It is suitable for rendering views of large tiled map in the background.
```
<script src="modules/create_mocks_module.js"></script>
<script src="tiledmapbuilder.js"></script>   
```


Set data source
```
Crafty.e("2D, DOM, TiledMapBuilder").setMapDataSource( SOURCE_FROM_TILED_MAP_EDITOR );    
```


Create world
```
TiledMapBuilder.createWorld( function( map ){
	console.log("done");
	});    
```


Create a view. For large tiled map and lazy loading.
```
TiledMapBuilder.createView( startRow, startColumn, viewWidth, viewHeight, function( map ){
	console.log("done");
	});    
```

Get all entities from layer
```
var entities = TiledMapBuilder.getEntitiesInLayer( layerName );
```

Get all layers
```
var layers = TiledMapBuilder.getLayers();
```

Get the tile
```
var tile = TiledMapBuilder.getTile( row, column, layerName );
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

[![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/game1.png)](http://kibo.github.com/TiledMapBuilder/examples/OrthogonalEasterIsland/index.html)
[![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/game2.png)](http://kibo.github.com/TiledMapBuilder/examples/OrthogonalSea/index.html)
[![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/diamondDemo.png)](http://kibo.github.com/TiledMapBuilder/examples/IsometricDiamond/index.html)
[![Crafty HTML5 game](https://raw.github.com/Kibo/TiledMapBuilder/master/WebContent/img/staggered.png)](http://kibo.github.com/TiledMapBuilder/examples/IsometricStaggered/index.html)


###Examples
- [Demo orthogonal: EasterIsland](http://kibo.github.com/TiledMapBuilder/examples/OrthogonalEasterIsland/index.html)
- [Demo orthogonal: Sea](http://kibo.github.com/TiledMapBuilder/examples/OrthogonalSea/index.html)
- [Demo isometric: Meadow](http://kibo.github.com/TiledMapBuilder/examples/IsometricDiamond/index.html)
- [Demo staggered: River](http://kibo.github.com/TiledMapBuilder/examples/IsometricStaggered/index.html)


**Contact me**

I will be grateful for constructive comments.

- [Crafty group thread](https://groups.google.com/d/msg/craftyjs/63eQ0SRw40I/tk5cGKRCME0J)
- tomasjurman@gmail.com


