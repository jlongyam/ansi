var ansi = function(exports, code_mjs) {
  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    return e && Object.keys(e).forEach(function(k) {
      if ("default" !== k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: !0,
          get: function() {
            return e[k];
          }
        });
      }
    }), n.default = e, Object.freeze(n);
  }
  var code_mjs__namespace = _interopNamespaceDefault(code_mjs), style = {}, loop$1 = function(i) {
    style[i] = function(txt) {
      return "[" + code_mjs.textStyle[i] + "m" + txt + "[0m";
    };
  };
  for (var i$2 in code_mjs.textStyle) loop$1(i$2);
  var color = {}, bg = {}, loop = function(i) {
    color[i] = function(txt) {
      return "[" + code_mjs.fgBright[i] + "m" + txt + "[0m";
    }, bg[i] = function(txt) {
      return "[" + code_mjs.bg[i] + "m" + txt + "[0m";
    };
  };
  for (var i$1 in code_mjs.bg) loop(i$1);
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
  var regex = /\x1b\[([0-9;]*)m/g;
  return exports.code = code_mjs__namespace, exports.bg = bg, exports.color = color, 
  exports.css = css, exports.find = function(str) {
    for (var match, a = []; null !== (match = regex.exec(str)); ) a.push(match);
    var filter = [];
    for (var i in a) filter.push({
      escape: a[i][0].replace(/\x1b/g, "\\x1b"),
      code: a[i][1],
      index: a[i].index
    });
    return filter;
  }, exports.icon = {
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
  }, exports.regex = regex, exports.style = style, exports;
}({}, code);
