/*
   Transforms

   Let's take a closer look at what Famo.us is doing when calling .add().

   You're familiar with the DOM tree where DOM elements nest and positions are set relative to parent positions. However Famo.us surfaces are styled with position:absolute and their positions are defined by matrix3d webkit transforms. This is what makes Famo.us performant.

   The transform matrix is what the Transform.translate() method returns. And as you saw in the previous example, we can use a state modifier to apply the transform on to Famo.us renderables.

   For more detail on transform matrices, check out the Layout reference guide
 */

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

createSurface();
createModifiedSurface();

function createSurface() {
    var surface = new Surface({
        size: [100, 100],
        content: 'surface',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F'
        }
    });

    mainContext.add(surface);
}

function createModifiedSurface() {
    var modifiedSurface = new Surface({
        size: [100, 100],
        content: 'modified surface',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F'
        }
    });

    var stateModifier = new StateModifier({
        transform: Transform.translate(150, 100, 0)
    });

    mainContext.add(stateModifier).add(modifiedSurface);
}
