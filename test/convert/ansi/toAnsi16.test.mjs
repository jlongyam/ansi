import { ansi256ToAnsi16, rgbToAnsi16, hexToAnsi16 } from '../../../src/convert/ansi/toAnsi16.mjs';

for( var i = 0; i < 256; i++ ) {
  console.log(i, ansi256ToAnsi16(i))
}

console.log('red', rgbToAnsi16(255,0, 0));
console.log('green', rgbToAnsi16(0,255,0));
console.log('blue', rgbToAnsi16(0,0,255));

console.log('#FF0000', hexToAnsi16('#FF0000'))