var icon = {
  ok: "√",
  notOk: "×",
  notEqual: "≠",
  warning: "‼",
  arrow: {
    left: "‹",
    right: "›",
    double: {
      left: "«",
      right: "»"
    }
  },
  bullet: {
    on: "•",
    off: "◦"
  },
  dot: "·",
  method: "ƒ",
  summary: "∑",
  block: "█",
  love: "❤",
  menu: "≡",
  mark: "※",
  select: "↕",
  star: {
    on: "★",
    off: "☆"
  },
  section: "§",
  para: "¶",
  radio: {
    on: "◉",
    off: "◯"
  },
  pointer: "▸"
}, textStyle = {
  bold: 1,
  dim: 2,
  italic: 3,
  underline: 4,
  blink: 5,
  rapid: 6,
  inverse: 7,
  invisible: 8,
  strike: 9
}, fg = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37
}, fgBright = {
  black: 90,
  red: 91,
  green: 92,
  yellow: 93,
  blue: 94,
  magenta: 95,
  cyan: 96,
  white: 97
}, bg$1 = {
  black: 40,
  red: 41,
  green: 42,
  yellow: 43,
  blue: 44,
  magenta: 45,
  cyan: 46,
  white: 47
}, bgBright = {
  black: 100,
  red: 101,
  green: 102,
  yellow: 103,
  blue: 104,
  magenta: 105,
  cyan: 106,
  white: 107
}, code = Object.freeze({
  __proto__: null,
  bg: bg$1,
  bgBright: bgBright,
  fg: fg,
  fgBright: fgBright,
  reset: 0,
  textStyle: textStyle
}), style = {}, _loop$1 = function(i) {
  style[i] = function(txt) {
    return `[${textStyle[i]}m${txt}[0m`;
  };
};

for (var i$2 in textStyle) _loop$1(i$2);

var color = {}, bg = {}, _loop = function(i) {
  color[i] = function(txt) {
    return `[${fgBright[i]}m${txt}[0m`;
  }, bg[i] = function(txt) {
    return `[${bg$1[i]}m${txt}[0m`;
  };
};

for (var i$1 in bg$1) _loop(i$1);

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
}, css = {
  0: "all: initial"
};

for (var i in css[textStyle.bold] = "font-weight: 700", css[textStyle.dim] = "opacity: .8", 
css[textStyle.italic] = "font-style: italic", css[textStyle.underline] = "text-decoration: italic", 
css[textStyle.blink] = "", css[textStyle.rapid] = "", css[textStyle.inverse] = "filter: invert(100%)", 
css[textStyle.invisible] = "visibility: hidden", css[textStyle.strike] = "text-decoration: line-through", 
fg) css[fg[i]] = `color: ${theme_normal[i]}`, css[fgBright[i]] = `color: ${theme_bright[i]}`, 
css[bg$1[i]] = `background-color: ${theme_normal[i]}`, css[bgBright[i]] = `background-color: ${theme_bright[i]}`;

var regex = /\x1b\[([0-9;]*)m/g;

function find(str) {
  for (var match, a = []; null !== (match = regex.exec(str)); ) a.push(match);
  var filter = [];
  for (var i in a) filter.push({
    escape: a[i][0].replace(/\x1b/g, "\\x1b"),
    code: a[i][1],
    index: a[i].index
  });
  return filter;
}

export { bg, code, color, css, find, icon, regex, style };
