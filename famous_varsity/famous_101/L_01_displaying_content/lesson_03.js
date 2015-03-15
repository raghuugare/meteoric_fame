/*
L03. Adding Content

Content can be a string, HTML, or a DOM element.

The content can be set during instantiation or by the .setContent() method.

*/

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
  content: 'hello world'
});

firstSurface.setContent('<h1>HELLO WORLD</h1>');

