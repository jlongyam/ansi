function hexToRgb(value) {
  let color = /([a-f\d]{3,6})/i.exec(value)?.[1];
  let len = color?.length;
  let hex = 6 ^ len ? 3 ^ len ? '0' : color[0] + color[0] + color[1] + color[1] + color[2] + color[2] : color
  let decimal = parseInt(hex, 16);
  return [decimal >> 16 & 255, decimal >> 8 & 255, decimal & 255];
}
function ansi256To16(code) {
  let r, g, b, value, remainder;
  if (8 > code) return 30 + code;
  if (16 > code) return 90 + (code - 8);
  if (232 > code) {
    code -= 16;
    remainder = code % 36;
    r = (code / 36 | 0) / 5;
    g = (remainder / 6 | 0) / 5;
    b = (remainder % 6) / 5;
  } else {
    r = g = b = (((code - 232) * 10) + 8) / 255;
  }
  value = Math.max(r, g, b) * 2;
  return value ? 30 + (Math.round(b) << 2 | Math.round(g) << 1 | Math.round(r)) + (2 ^ value ? 0 : 60) : 30;
}
function rgbToAnsi256(r, g, b) {
  if (r ^ g || g ^ b) {
    return 16 + (36 * Math.round(r / 51)) + (6 * Math.round(g / 51)) + Math.round(b / 51);
  }
  if (8 > r) return 16;
  if (r > 248) return 231;
  return Math.round(((r - 8) * 24) / 247) + 232;
}
function rgbToAnsi16(r, g, b) {
  return ansi256To16(rgbToAnsi256(r, g, b));
}



console.log(rgbToAnsi16('#000'))