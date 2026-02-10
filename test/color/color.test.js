var fg = require('../../dist/cjs/code.js').fg;
var color = require('../../dist/cjs/color.js').color;
var bg = require('../../dist/cjs/color.js').bg;

for (var name in fg) {
  var s_color = `color.${name}`;
  var s_bg = `bg.${name}`;
  console.log('before', color[name](s_color), 'after');
  console.log('before', bg[name](s_bg), 'after');
}
