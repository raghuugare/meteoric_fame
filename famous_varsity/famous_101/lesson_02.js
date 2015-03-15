/*

L02. Our First Surface

In our first example, the content we're displaying is a simple "hello world" message inside of our first surface.

We use our Famo.us Engine to create a new context. Then we create a new surface by instantiating it from the Surface class.

In the instantiation, we pass in an options object that defines the content property of our new surface.

Finally, we add the surface to the context using the .add() method.

*/

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
  content: "hello world"
});

mainContext.add(firstSurface);

