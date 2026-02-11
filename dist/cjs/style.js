var code_mjs = require("./code.js"), style = {}, loop = function(i) {
  style[i] = function(txt) {
    return "[" + code_mjs.textStyle[i] + "m" + txt + "[0m";
  };
};

for (var i in code_mjs.textStyle) loop(i);

module.exports = style;
