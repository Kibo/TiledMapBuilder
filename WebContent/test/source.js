//http://www.mapeditor.org/
/*
 * Don´t like it?
 * use jQuery, Prototype, raw XMLHttpRequest, your favorite JS library for it.
 */
var ORTHOGONAL = { "height":10,
 "layers":[
         {
          "data":[0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          "height":10,
          "name":"ground",
          "opacity":1,
          "type":"tilelayer",
          "visible":true,
          "width":10,
          "x":0,
          "y":0
         }, 
         {
          "data":[28, 28, 28, 28, 0, 0, 28, 28, 28, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 0, 0, 0, 0, 0, 0, 0, 0, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
          "height":10,
          "name":"fence",
          "opacity":1,
          "type":"tilelayer",
          "visible":true,
          "width":10,
          "x":0,
          "y":0
         }, 
         {
          "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 84, 85, 0, 84, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "height":10,
          "name":"obstacles",
          "opacity":1,
          "type":"tilelayer",
          "visible":true,
          "width":10,
          "x":0,
          "y":0
         }, 
         {
          "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 69, 0, 68, 69, 0, 0, 0, 0, 0, 76, 77, 0, 76, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "height":10,
          "name":"head",
          "opacity":1,
          "type":"tilelayer",
          "visible":true,
          "width":10,
          "x":0,
          "y":0
         }],
  "orientation":"orthogonal",
  "properties":
     {

     },
  "tileheight":32,
  "tilesets":[
         {
          "firstgid":1,
          "image":"../examples/OrthogonalSea/img/ground.png",
          "imageheight":32,
          "imagewidth":96,
          "margin":0,
          "name":"ground",
          "properties":
             {

             },
          "spacing":0,
          "tileheight":32,
          "tilewidth":32
         }, 
         {
          "firstgid":4,
          "image":"../examples/OrthogonalSea/img/obstacles.png",
          "imageheight":416,
          "imagewidth":256,
          "margin":0,
          "name":"obstacles",
          "properties":
             {

             },
          "spacing":0,
          "tileheight":32,
          "tilewidth":32
         }],
  "tilewidth":32,
  "version":1,
  "width":10
 };


var ISOMETRIC = { "height":10,
		 "layers":[
		           {
		            "data":[1, 1, 1, 3, 1, 2, 8, 12, 24, 24, 1, 3, 1, 4, 1, 1, 1, 16, 24, 24, 1, 1, 1, 1, 1, 5, 13, 9, 23, 11, 1, 4, 1, 5, 17, 9, 23, 24, 11, 7, 13, 17, 17, 9, 23, 23, 24, 23, 18, 4, 24, 23, 23, 24, 11, 12, 24, 24, 18, 4, 24, 24, 24, 23, 10, 9, 23, 11, 7, 1, 24, 23, 23, 24, 24, 23, 11, 7, 3, 2, 19, 19, 19, 19, 19, 19, 7, 3, 1, 3, 1, 2, 4, 2, 2, 3, 3, 2, 1, 3],
		            "height":10,
		            "name":"Tile Layer 1",
		            "opacity":1,
		            "type":"tilelayer",
		            "visible":true,
		            "width":10,
		            "x":0,
		            "y":0
		           }],
		    "orientation":"isometric",
		    "properties":
		       {

		       },
		    "tileheight":32,
		    "tilesets":[
		           {
		            "firstgid":1,
		            "image":"../examples/IsometricDiamond/img/isometric_grass_and_water.png",
		            "imageheight":384,
		            "imagewidth":256,
		            "margin":0,
		            "name":"example",
		            "properties":
		               {

		               },
		            "spacing":0,
		            "tileheight":64,
		            "tilewidth":64
		           }],
		    "tilewidth":64,
		    "version":1,
		    "width":10
};

var STAGGERED = { "height":10,
	 "layers":[
	        {
	         "data":[11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
	         "height":10,
	         "name":"ground",
	         "opacity":1,
	         "type":"tilelayer",
	         "visible":true,
	         "width":5,
	         "x":0,
	         "y":0
	        }, 
	        {
	         "data":[0, 0, 141, 0, 140, 0, 0, 141, 0, 140, 0, 0, 151, 141, 0, 0, 0, 151, 141, 140, 141, 0, 0, 151, 141, 141, 0, 0, 151, 140, 151, 141, 0, 0, 151, 151, 141, 0, 0, 151, 0, 151, 0, 0, 0, 0, 151, 0, 0, 0],
	         "height":10,
	         "name":"stones",
	         "opacity":1,
	         "type":"tilelayer",
	         "visible":true,
	         "width":5,
	         "x":0,
	         "y":0
	        }, 
	        {
	         "data":[254, 0, 0, 243, 0, 0, 0, 0, 243, 0, 264, 0, 0, 253, 243, 0, 0, 0, 253, 0, 274, 0, 0, 263, 253, 0, 0, 0, 263, 0, 0, 0, 0, 273, 263, 0, 0, 0, 273, 0, 0, 0, 0, 0, 273, 0, 0, 0, 0, 0],
	         "height":10,
	         "name":"three",
	         "opacity":1,
	         "type":"tilelayer",
	         "visible":true,
	         "width":5,
	         "x":0,
	         "y":0
	        }, 
	        {
	         "data":[0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	         "height":10,
	         "name":"wood",
	         "opacity":1,
	         "type":"tilelayer",
	         "visible":true,
	         "width":5,
	         "x":0,
	         "y":0
	        }],
	 "orientation":"staggered",
	 "properties":
	    {

	    },
	 "tileheight":20,
	 "tilesets":[
	        {
	         "firstgid":1,
	         "image":"../examples/IsometricStaggered/img/Terrain_tileset.png",
	         "imageheight":640,
	         "imagewidth":400,
	         "margin":0,
	         "name":"Terrain_tileset",
	         "properties":
	            {

	            },
	         "spacing":0,
	         "tileheight":20,
	         "tilewidth":40
	        }],
	 "tilewidth":40,
	 "version":1,
	 "width":5
	};

