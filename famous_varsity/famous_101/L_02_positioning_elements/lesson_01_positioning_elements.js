/*
L01. Positioning Elements

Previously, we learned how to create surfaces. In this lesson you'll learn how to position elements in Famo.us.

 */

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
  size: [100, 100],
  content:'Hello!',
  
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

mainContext.add(firstSurface);
