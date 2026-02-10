var textStyle = require('../../dist/cjs/code.js').textStyle;
var style = require('../../dist/cjs/style.js');

for( i in textStyle ) {
  console.log(`start ${style[i](String(i))} end`);
}
