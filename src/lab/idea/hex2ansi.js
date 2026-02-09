function hexToAscii(hexString) {
  let str = '';
  // Process two characters at a time (each pair is one byte/character)
  for (let n = 0; n < hexString.length; n += 2) {
    // Extract a two-character hex pair
    const hexPair = hexString.substr(n, 2);
    // Convert the hex pair to an integer (base 16)
    const decimalValue = parseInt(hexPair, 16);
    // Convert the decimal value to its corresponding ASCII character
    str += String.fromCharCode(decimalValue);
  }
  return str;
}

// Example usage
console.log(hexToAscii('48656c6c6f')); // Output: 'Hello'


const hexToAnsi = (hex) => {
  const rgb = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `\u001b[38;2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};