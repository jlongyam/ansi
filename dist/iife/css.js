var css = function(code_mjs) {
  var theme_normal = {
    black: "#000",
    red: "#ef476f",
    green: "#06d6a0",
    yellow: "#ffd166",
    blue: "#118ab2",
    magenta: "#8338ec",
    cyan: "#00b4d8",
    white: "#fff"
  }, theme_bright = {
    black: "rgb(85,85,85)",
    red: "rgb(255,85,85)",
    green: "rgb(85,255,85)",
    yellow: "rgb(255,255,85)",
    blue: "rgb(85,85,255)",
    magenta: "rgb(255,85,255)",
    cyan: "rgb(85, 255, 255)",
    white: "rgb(255,255,255)"
  }, css = {};
  for (var i in css[code_mjs.reset] = "all: initial", css[code_mjs.textStyle.bold] = "font-weight: 700", 
  css[code_mjs.textStyle.dim] = "opacity: .8", css[code_mjs.textStyle.italic] = "font-style: italic", 
  css[code_mjs.textStyle.underline] = "text-decoration: italic", css[code_mjs.textStyle.blink] = "", 
  css[code_mjs.textStyle.rapid] = "", css[code_mjs.textStyle.inverse] = "filter: invert(100%)", 
  css[code_mjs.textStyle.invisible] = "visibility: hidden", css[code_mjs.textStyle.strike] = "text-decoration: line-through", 
  code_mjs.fg) css[code_mjs.fg[i]] = "color: " + theme_normal[i], css[code_mjs.fgBright[i]] = "color: " + theme_bright[i], 
  css[code_mjs.bg[i]] = "background-color: " + theme_normal[i], css[code_mjs.bgBright[i]] = "background-color: " + theme_bright[i];
  return css;
}(code);
