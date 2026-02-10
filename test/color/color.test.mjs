import { fg } from "../../src/code.mjs";
import { color, bg } from "../../src/color.mjs";

for (let name in fg) {
  let s_color = `color.${name}`;
  let s_bg = `bg.${name}`;
  console.log('before', color[name](s_color), 'after');
  console.log('before', bg[name](s_bg), 'after');
}
