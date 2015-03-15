/*

   L05. Sizing

   There are multiple ways to size a surface. In our previous examples where the size property wasn't specified, the surface inherits the size of its parent--the context.

   Here are the ways to size your surface:

   Specify size in pixels with [x, y]
   Specify size in only one dimension with [undefined, y] or [x, undefined]
   Have the surface auto-size according to the content with [true, true]

 */

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
    size: [200, 400],
    content: 'hello world',
    properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
    }
});

mainContext.add(firstSurface);
