import { fg, fgBright, bg, bgBright } from "./code.mjs";

const color = {
  fg: {},
  fgBright: {},
  bg: {},
  bgBright: {}
};

for( let i in fg ) {
  color.fg[i] = txt => `\x1b[${fg[i]}m${txt}\x1b[0m`;
  color.fgBright[i] = txt => `\x1b[${fgBright[i]}m${txt}\x1b[0m`;
  color.bg[i] = txt => `\x1b[${bg[i]}m${txt}\x1b[0m`;
  color.bgBright[i] = txt => `\x1b[${bgBright[i]}m${txt}\x1b[0m`;
}

export default color;