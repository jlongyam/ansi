var ansi = require("../../dist/ansi.cjs");

var color = ansi.color;
var bg = ansi.bg;

for (var name in color) {
  var s_color = `color.${name}`;
  var s_bg = `bg.${name}`;
  console.log('before', color[name](s_color), 'after');
  console.log('before', bg[name](s_bg), 'after');
}
