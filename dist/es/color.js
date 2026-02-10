import { fgBright, bg as name } from "./code.js";

const color = {};
const bg = {};

for( let i in name ) {
  color[i] = txt => `\x1b[${fgBright[i]}m${txt}\x1b[0m`;
  bg[i] = txt => `\x1b[${name[i]}m${txt}\x1b[0m`;
}

export { color, bg };