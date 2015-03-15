/*
   L06. Align and Origin

   Here's another set of properties you can use to position elements in Famo.us: align sets the anchor point on the parent element, while origin sets the anchor point on the child element. These tell the Engine what anchor points to use to determine where the elements are placed when they are rendered.

   They can be set in the format [x, y], where each variable ranges from 0 (top or left) to 1 (bottom or right).

   The default value for origin is [0, 0]. The default value for align is [0, 0]. You can see this when you compare defaultSquare to centerCircle.

 */

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var defaultSquare = new Surface({
    size: [100, 100],
    properties: {
        backgroundColor: '#444444'
    }
});

var centerCircle = new Surface({
    size: [15, 15],
    properties: {
        border: '1px solid #dddddd',
        borderRadius: '7px'
    }
});

var horizontalRule = new Surface({
    size: [undefined, 1],
    properties: {
        backgroundColor: '#ffffff'
    }
});

var verticalRule = new Surface({
    size: [1, undefined],
    properties: {
        backgroundColor: '#ffffff'
    }
});

var originModifier = new StateModifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
});

mainContext.add(defaultSquare);

/* Bonus section! */
// Constructing this crosshair involves
// adding multiple surfaces to originModifier.
// To do this correctly, declare the modifier's
// place in the scene graph as a variable.

var node = mainContext.add(originModifier);
node.add(verticalRule);
node.add(horizontalRule);
node.add(centerCircle);
