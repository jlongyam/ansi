import { color, find } from '../../dist/ansi.mjs';

let words = `Hi ${color.red('there')}, how are ${color.green('you')} ?`;
console.log(words);
console.log(find(words));
