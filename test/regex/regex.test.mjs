import { color } from '../../src/color.mjs';
import { find } from '../../src/regex.mjs';

let words = `Hi ${color.red('there')}, how are ${color.green('you')} ?`;
console.log(words);
console.log(find(words));
