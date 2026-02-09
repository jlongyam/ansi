const redValue = 255; // Max red intensity
const greenValue = 0;
const blueValue = 0;

const redHex = redValue.toString(16).padStart(2, '0').toUpperCase(); // "FF"
const greenHex = greenValue.toString(16).padStart(2, '0').toUpperCase(); // "00"
const blueHex = blueValue.toString(16).padStart(2, '0').toUpperCase(); // "00"

const hexColor = `#${redHex}${greenHex}${blueHex}`; // "#FF0000"
console.log(hexColor);