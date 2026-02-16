import { rgbToAnsi256 } from '../../../src/convert/ansi/toAnsi256.mjs';

console.log('red', rgbToAnsi256(255,0, 0));
console.log('green', rgbToAnsi256(0,255,0));
console.log('blue', rgbToAnsi256(0,0,255))