import { hexToRgb } from "./toRgb.mjs";
import { rgbToHex } from "./toHex.mjs";

function hexToRgbCss(str) {
  str.trim();
  var rgb = hexToRgb(str)
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function rgbToHexCss(str) {
  str.trim()
  var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(str);
  var red = parseInt(digits[2]);
  var green = parseInt(digits[3]);
  var blue = parseInt(digits[4]);
  return rgbToHex(red, green, blue)
}

export { hexToRgbCss, rgbToHexCss }
