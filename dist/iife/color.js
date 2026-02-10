// require code.js

var color = (function() {
  var name = code.fgBright;
  var color = {};
  for( var i in name ) {
    color[i] = (function(i, name) {
      return function(txt) {
        return `\x1b[${name[i]}m${txt}\x1b[0m`;
      }
    })(i, name);
  }
  return color;
})();

var bg = (function() {
  var name = code.bg;
  var bg = {};
  for( var i in name ) {
    bg[i] = (function(i, name) {
      return function(txt) {
        return `\x1b[${name[i]}m${txt}\x1b[0m`;
      }
    })(i, name);
  }
  return bg;
})();

