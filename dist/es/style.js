import { textStyle } from "./code.js";

let style = {};
for(let i in textStyle) {
  style[i] = txt=> `\x1b[${textStyle[i]}m${txt}\x1b[0m`;
}

export default style;