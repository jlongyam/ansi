const reset = 0;
const style = {
  bold: 1,
  dim: 2,
  italic: 3,
  underline: 4,
  blink: 5,
  rapid: 6,
  inverse: 7,
  invisible: 8,
  strike: 9
};
// 10 : default, same as 0
// 11 - 19 : select alternative font
// 20 : gothic font
const unstyle = {
  bold: 21,
  dim: 22,
  italic: 23,
  underline: 24,
  blink: 25,
  rapid: 26,
  inverse: 27,
  invisible: 28,
  strike: 29
}
const color = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37
  // 38 is extend: add 2 to RGB, add 5 to 256Color
  // example: 256: '\x1b[38;5;208m%s\x1b[0m' // 208 is number, max is 256
  // example: RGB: \x1b[38;2;128;0;128m%s\x1b[0m' // R:128 G:0 B:128 // range 0-255
  // 39 is default color
};
const back = {
  black: 40,
  red: 41,
  green: 42,
  yellow: 43,
  blue: 44,
  magenta: 45,
  cyan: 46,
  white: 47
  // 48 is extend but for background
  // 49 is default
};

const bright = {
  black: 90,
  red: 91,
  green: 92,
  yellow: 93,
  blue: 94,
  magenta: 95,
  cyan: 96,
  white: 97
  // 98: extend
  // 99: default
};
const bgBright = {
  black: 100,
  red: 101,
  green: 102,
  yellow: 103,
  blue: 104,
  magenta: 105,
  cyan: 106,
  white: 107
  // 108 and 109, idem
}
const styleText = (text, styleCode) => {
  const resetCode = '\x1b[0m';
  return `\x1b[${styleCode}m${text}${resetCode}`;
};

// Example usage: italic, bold, and underline
const italicAndBoldText = styleText('This is italic and bold text.', '3;1');
const underlinedAndInversedText = styleText('This text is underlined and inverted.', '4;7');
const combinedStyles = styleText('Bold, red, and underlined!', '1;31;4');

console.log(italicAndBoldText);
console.log(underlinedAndInversedText);
console.log(combinedStyles);

console.log(styleText('Should green bold', color.green+';'+style.bold));
