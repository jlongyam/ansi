import { textStyle } from "../../src/code.mjs";
import style from "../../src/style.mjs";

for( let i in textStyle ) {
  console.log(`start ${style[i](String(i))} end`);
}
