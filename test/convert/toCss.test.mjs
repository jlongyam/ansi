import { hexToRgbCss, rgbToHexCss } from "../../src/convert/toCss.mjs";

console.log(
  hexToRgbCss("#3498db"),
  '=== rgb(52, 152, 219)'
);

console.log(
  rgbToHexCss("rgb(52, 152, 219)"),
  '=== #3498db'
);
