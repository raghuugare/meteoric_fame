/*
L01. Displaying Content

In this lesson, you will learn how to display and style content in Famo.us using JavaScript, HTML, and CSS.

In Famo.us, any content that can be displayed by the rendering engine is called a renderable. 
The most basic renderable in Famo.us is called a surface, which maps to a <div> element in the DOM. 
You can put any content in a surface that could normally go inside a <div>.

But a renderable like a surface needs someplace to live for the Engine to actually show it. 
Contexts themselves are not displayed. 
They are isolated rendering environments that tell the Engine where renderables live.

A Famo.us app can have more than one context, but a mobile app or full-page web app usually just uses one!

*/

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

var firstSurface = new Surface({
  content: "<h3>Hi!</h3><p>I'm a surface!<br>I live inside a context.</p><p>You can add <b>HTML</b> content to me and style me with <b>CSS!</b></p>",
  size: [200, 200],
  properties: {
    backgroundColor: 'rgb(240, 238, 233)',
    textAlign: 'center',
    padding: '5px',
    border: '2px solid rgb(210, 208, 203)',
    marginTop: '50px',
    marginLeft: '50px'
  }
});

mainContext.add(firstSurface);
