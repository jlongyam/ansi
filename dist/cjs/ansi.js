var code_mjs = require("./code.js");

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

for (var i$1 in code_mjs.textStyle) loop$1(i$1);

var color = {}, bg = {}, loop = function(i) {
  color[i] = function(txt) {
    return "[" + code_mjs.fgBright[i] + "m" + txt + "[0m";
  }, bg[i] = function(txt) {
    return "[" + code_mjs.bg[i] + "m" + txt + "[0m";
  };
};

for (var i in code_mjs.bg) loop(i);

exports.code = code_mjs__namespace, exports.bg = bg, exports.color = color, exports.icon = {
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
}, exports.style = style;
