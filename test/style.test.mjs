import { style as code } from "../src/code.mjs";
import style from "../src/style.mjs";

for( let i in code ) {
  console.log(`start ${style[i](String(i))} end`);
}
