// require code.js

var style = (function() {
  var textStyle = code.textStyle;
  var style = {};
  for(i in textStyle) {
    style[i] = function(txt) {
      return `\x1b[${textStyle[i]}m${txt}\x1b[0m`;
    }
  }
  return style;
})();