var code = require('./code.js');

var fgBright = code.fgBright;
var name = code.bg
var color = {};
var bg = {};

for( i in name ) {
  color[i] = (function(i) {
    return function(txt) {
      return `\x1b[${fgBright[i]}m${txt}\x1b[0m`;
    }
  })(i);
  bg[i] = (function(name,i) {
    return function(txt) {
      return `\x1b[${name[i]}m${txt}\x1b[0m`;
    }
  })(name,i)
}

module.exports = { color, bg };