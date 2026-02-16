import { color, style, html } from "../../dist/ansi.mjs";

var str = {
  gray: color.fgBright.black('Gray'),
  underline: style.underline('Underline'),
  rgb: color.fgRGB([0,255,0], 'RGB')
};

console.log(`before ${html(str.gray)} after`);
console.log(`before ${html(str.underline)} after`);
console.log(`before ${html(str.rgb)} after`);
