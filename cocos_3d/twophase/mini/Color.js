
var enums = require('./enums');
console.log(enums);

//++++++++++++++++++++++++++++++ Names the colors of the cube facelets ++++++++++++++++++++++++++++++++++++++++++++++++
module.exports = new enums.Enum('U', 'R', 'F', 'D', 'L', 'B');