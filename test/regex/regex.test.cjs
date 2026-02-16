var ansi = require("../../dist/ansi.cjs");

var color = ansi.color;
var find = ansi.find;

var words = `Hi ${color.red('there')}, how are ${color.green('you')} ?`;

console.log(words);
console.log(find(words));
