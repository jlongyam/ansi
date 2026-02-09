const color256 = (code, text) => `\x1b[38;5;${code}m${text}\x1b[0m`;
const bgColor256 = (code, text) => `\x1b[48;5;${code}m${text}\x1b[0m`;

console.log(color256(239, "This is red (256-color)"));
console.log(bgColor256(201, "This has a pink background (256-color)"));