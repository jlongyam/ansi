var style = require('../../dist/ansi.cjs').style;

for( i in style ) {
  console.log(`start ${style[i](String(i))} end`);
}
