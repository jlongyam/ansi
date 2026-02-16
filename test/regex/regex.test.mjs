import { color, find } from '../../dist/ansi.mjs';

let words = `Hi ${color.fg.red('there')}, how are ${color.fg.green('you')} ?`;

// console.log(words);
// console.log(find(words));

var code = `${color.fg256(100,'red')}`;

console.log(find(code));