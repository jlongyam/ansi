import {style} from "../../dist/ansi.mjs";

for( let i in style ) {
  console.log(`start ${style[i](String(i))} end`);
}
