import { color, bg } from "../../dist/ansi.mjs";

for (let name in color) {
  let s_color = `color.${name}`;
  let s_bg = `bg.${name}`;
  console.log('before', color[name](s_color), 'after');
  console.log('before', bg[name](s_bg), 'after');
}
