var color = require('../../dist/cjs/color.js').color;
var find = require('../../dist/cjs/regex.js').find;

var words = `Hi ${color.red('there')}, how are ${color.green('you')} ?`;

console.log(words);
console.log(find(words));
