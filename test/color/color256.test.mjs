import {color} from "../../dist/ansi.mjs";

for( var i = 0; i < 256; i++ ) {
  console.log(
    color.fg256(i, 'color.fg256('+String(i)+')') + ' ' + color.bg256(i, 'color.bg256('+ String(i)+')')
  );
}
