/*
   L02. setTransform

   In the Positioning module, we passed in the transform during the instantiation of our state modifier. We can also set the transform using the .setTransform() method.

   .setTransform() takes in a transform argument and can also be passed two additional arguments: a transition object and a callback function.

   The transition object is what defines the animation; it specifies how the transform should transition from its current value to the value specified.

   Here we define the duration of the transition to be 1000 ms and the easing curve to be a standard ease in, ease out.
 */

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var surface = new Surface({
    size: [100, 100],
    properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
    }
});

var stateModifier = new StateModifier();

mainContext.add(stateModifier).add(surface);

stateModifier.setTransform(
    Transform.translate(200, 300, 0),
    { duration : 1000, curve: 'easeInOut' }
);
