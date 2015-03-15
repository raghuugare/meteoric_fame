/*

   L06. EXERCISE !!

   Create a surface that:

   -displays your name
   -is 200px wide and 100% in height
   -has #FA5C4F background color
   -has white, center aligned text
   -has 40px font size
   -has 15px border radius

 */

var Engine = require("famous/core/Engine");
var Surface = require("famous/core/Surface");

var mainContext = Engine.createContext();

var surface = new Surface({
    content: 'Raj! :~)',
    size: [200, true],
    properties: {
        color: 'white',
        backgroundColor: '#FA5C4F',
        fontSize: '40px',
        borderRadius: '15px',
        textAlign: 'center'
    }
});

// Now simply add the surface to the context! :)
mainContext.add(surface);
