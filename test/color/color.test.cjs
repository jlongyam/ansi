var ansi = require("../../dist/ansi.cjs");

var fg = ansi.color.fg;
var fgBright = ansi.color.fgBright;
var bg = ansi.color.bg;
var bgBright = ansi.color.bgBright;

for (var name in fg) {
  var s_fg = `fg.${name}`;
  var s_fgBright = `fgBright.${name}`;
  var s_bg = `bg.${name}`;
  var s_bgBright = `bgBright.${name}`;

  console.log('before', fg[name](s_fg), 'after');
  console.log('before', fgBright[name](s_fgBright), 'after');
  console.log('before', bg[name](s_bg), 'after');
  console.log('before', bgBright[name](s_bgBright), 'after\n');

}
