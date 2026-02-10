var textStyle = require('./code.js').textStyle;

var style = {};
for(i in textStyle) {
  style[i] = function(txt) {
    return `\x1b[${textStyle[i]}m${txt}\x1b[0m`;
  }
}

module.exports = style;