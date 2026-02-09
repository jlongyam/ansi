function trueColorForeground(r, g, b) {
  return `\x1b[38;2;${r};${g};${b}m`;
}

// Function to generate TrueColor background ANSI escape code
function trueColorBackground(r, g, b) {
  return `\x1b[48;2;${r};${g};${b}m`;
}

// ANSI reset code to revert to default terminal colors
const RESET = '\x1b[0m';

// Example usage:
const redText = trueColorForeground(255, 0, 0) + 'This is red text.' + RESET;
const blueBackground = trueColorBackground(0, 0, 255) + 'This has a blue background.' + RESET;
const customColorText = trueColorForeground(128, 0, 128) + 'This is a custom purple color.' + RESET;

console.log(redText);
console.log(blueBackground);
console.log(customColorText);