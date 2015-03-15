/*

   L07. Align Versus Origin

   With our crosshair to show where the center of the context is, we can get a clear look at how align and origin interact.

   lightSquare has its align set to [0.5, 0.5]. Since the origin defaults to [0, 0], this square shows up with its left corner aligned to the center of the context.

   darkSquare, on the other hand, has its default origin overridden. While its align is the same as lightSquare, setting the origin to [1, 1] positions its bottom right corner in the context center.

 */

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var lightSquare = new Surface({
    size: [100, 100],
    properties: {
        color: '#000000',
        backgroundColor: '#aaaaaa'
    }
});

var darkSquare = new Surface({
    size: [100, 100],
    properties: {
        color: '#dddddd',
        backgroundColor: '#666666'
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

var alignModifier = new StateModifier({
    align: [0.5, 0.5]
});

var alignOriginModifier = new StateModifier({
    align: [0.5, 0.5],
    origin: [1, 1]
});

mainContext.add(alignModifier).add(lightSquare);
mainContext.add(alignOriginModifier).add(darkSquare);

/* Bonus section! */
// Constructing this crosshair involves
// adding multiple surfaces to originModifier.
// To do this correctly, declare the modifier's
// place in the scene graph as a variable.

var node = mainContext.add(originModifier);
node.add(verticalRule);
node.add(horizontalRule);
node.add(centerCircle);
