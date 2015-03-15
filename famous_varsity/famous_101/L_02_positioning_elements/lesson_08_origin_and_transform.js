/*
   Origin and Transform

   Changing origin does more than just change the anchor point on the child element. Origin is also the point about which transforms get applied.

   Since by default, origin is set to [0, 0], a rotation transform defaults to rotating about the top left corner.

   If you set the origin to [1, 1], what do you think will happen? Give it a try and see if you're right! */

var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var mainContext = Engine.createContext();

var surface = new Surface({
    size: [200, 200],
    properties: {
        color: 'white',
        backgroundColor: '#FA5C4F'
    }
});

var modifier = new StateModifier({
    align: [0.5, 0.5],
    // apply an origin below
    // origin:
    transform: Transform.rotateZ(Math.PI/6)
});

mainContext.add(modifier).add(surface);
