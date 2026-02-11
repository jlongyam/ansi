var color = function(exports, code_mjs) {
  var color = {}, bg = {}, loop = function(i) {
    color[i] = function(txt) {
      return "[" + code_mjs.fgBright[i] + "m" + txt + "[0m";
    }, bg[i] = function(txt) {
      return "[" + code_mjs.bg[i] + "m" + txt + "[0m";
    };
  };
  for (var i in code_mjs.bg) loop(i);
  return exports.bg = bg, exports.color = color, exports;
}({}, code);
