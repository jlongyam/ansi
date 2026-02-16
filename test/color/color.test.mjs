import { color } from "../../dist/ansi.mjs";

var fg = color.fg;
var fgBright = color.fgBright;
var bg = color.bg;
var bgBright = color.bgBright;

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
