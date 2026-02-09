var color = {
  n: { start: 0, end: 7 },
  esc: '\x1b[',
  name: ['black', 'red', 'green', 'yellow', 'blue', 'purple', 'cyan', 'white'],
  code: {
    standard: (n)=> '\x1b[0;3'+n+'m',
    contrast: (n)=> '\x1b[0;9'+n+'m'
  },
  bold: {
    standard: (n)=> '\x1b[1;3'+n+'m',
    contrast: (n)=> '\x1b[1;9'+n+'m'
  },
  back: {
    standard: (n)=> '\x1b[4'+n+'m',
    contrast: (n)=> '\x1b[0;10'+n+'m'
  },
  line: (n)=> '\x1b[4;3'+n+'m',
  end: '\x1b[0m'
}, i;
console.log('\n=== code [standard:contrast] ===\n')
for(i = 0; i < 8; i++ ) {
  var standard = color.code.standard(i)+color.name[i]+color.end;
  var contrast = color.code.contrast(i)+color.name[i]+color.end;
  console.log(standard+'\t: '+contrast);
}
console.log('\n=== bold [standard:contrast] ===\n')
for(i = 0; i < 8; i++ ) {
  var standard = color.bold.standard(i)+color.name[i]+color.end;
  var contrast = color.bold.contrast(i)+color.name[i]+color.end;
  console.log(standard+'\t: '+contrast);
}
console.log('\n=== back [standard:contrast] ===\n')
for(i = 0; i < 8; i++ ) {
  var standard = color.back.standard(i)+color.name[i]+color.end;
  var contrast = color.back.contrast(i)+color.name[i]+color.end;
  console.log(standard+'\t: '+contrast);
}
console.log('\n=== line ===\n')
for(i = 0; i < 8; i++ ) {
  console.log(color.line(i)+color.name[i]+color.end);
}