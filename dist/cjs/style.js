import {
  style as code,
  styleReset as reset
} from "./code.mjs";

let style = {};
const esc = '\x1b[';
for(let i in code) {
  style[i] = txt=> `${esc}${code[i]}m${txt}${esc}${reset[i]}m`;
}

export default style;