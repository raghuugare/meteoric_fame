/*
   L02. State Modifiers

   The easiest and most common way to move or translate a surface is to use a State Modifier.

   In this example, we have translated a surface 150px to the right and 100px from the top.

   We created the surface just as we did before but instead of calling mainContext.add(surface), we're now adding a state modifier between the context and the surface.

   The state modifier has a transform property where the x- and y-translation values are defined.

   Try experimenting with the translation values.
 */

ar Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var stateModifier = new StateModifier({
    transform: Transform.translate(150, 100, 0)
 /* transform: Transform.translate(-50, -50, 0) */
});

var surface = new Surface({
    size: [100, 100],
    properties: {
        backgroundColor: '#FA5C4F'
    }
});

mainContext.add(stateModifier).add(surface);
