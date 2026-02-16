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
}, bg = {
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
  bg: bg,
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

var color = {
  fg: {},
  fgBright: {},
  bg: {},
  bgBright: {}
}, _loop = function(i) {
  color.fg[i] = function(txt) {
    return `[${fg[i]}m${txt}[0m`;
  }, color.fgBright[i] = function(txt) {
    return `[${fgBright[i]}m${txt}[0m`;
  }, color.bg[i] = function(txt) {
    return `[${bg[i]}m${txt}[0m`;
  }, color.bgBright[i] = function(txt) {
    return `[${bgBright[i]}m${txt}[0m`;
  };
};

for (var i$1 in fg) _loop(i$1);

color.fg256 = function(n, text) {
  return `[38;5;${n}m${text}[0m`;
}, color.bg256 = function(n, text) {
  return `[48;5;${n}m${text}[0m`;
}, color.fgRGB = function(arr, txt) {
  return `[38;2;${arr[0]};${arr[1]};${arr[2]}m${txt}[0m`;
}, color.bgRGB = function(arr, txt) {
  return `[48;2;${arr[0]};${arr[1]};${arr[2]}m${txt}[0m`;
};

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
css[bg[i]] = `background-color: ${theme_normal[i]}`, css[bgBright[i]] = `background-color: ${theme_bright[i]}`;

var escapeHtml_1, hasRequiredEscapeHtml, regex = /\x1b\[([0-9;]*)m/g;

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

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}

var escapeHtmlExports = function() {
  if (hasRequiredEscapeHtml) return escapeHtml_1;
  hasRequiredEscapeHtml = 1;
  var matchHtmlRegExp = /["'&<>]/;
  return escapeHtml_1 = function(string) {
    var escape, str = "" + string, match = matchHtmlRegExp.exec(str);
    if (!match) return str;
    var html = "", index = 0, lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
       case 34:
        escape = "&quot;";
        break;

       case 38:
        escape = "&amp;";
        break;

       case 39:
        escape = "&#39;";
        break;

       case 60:
        escape = "&lt;";
        break;

       case 62:
        escape = "&gt;";
        break;

       default:
        continue;
      }
      lastIndex !== index && (html += str.substring(lastIndex, index)), lastIndex = index + 1, 
      html += escape;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }, escapeHtml_1;
}(), y = getDefaultExportFromCjs(escapeHtmlExports), e$1 = {
  black: "#2e3436",
  red: "#cc0000",
  green: "#4e9a06",
  yellow: "#c4a000",
  blue: "#3465a4",
  magenta: "#75507b",
  cyan: "#06989a",
  white: "#d3d7cf",
  "bright-black": "#555753",
  "bright-red": "#ef2929",
  "bright-green": "#8ae234",
  "bright-yellow": "#fce94f",
  "bright-blue": "#729fcf",
  "bright-magenta": "#ad7fa8",
  "bright-cyan": "#34e2e2",
  "bright-white": "#eeeeec"
};

function g() {
  var _ref$onlyFirst = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).onlyFirst, l = void 0 !== _ref$onlyFirst && _ref$onlyFirst, r = [ "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))" ].join("|");
  return new RegExp(r, l ? void 0 : "g");
}

var $ = /^(?:\x1b\[([\x3c-\x3f]?)([\d;]*)([\x20-\x2f]?[\x40-\x7e]))|(?:\x1b\[[\x20-\x7e]*([\x00-\x1f:]))/, p = /^\x1b\]8;[\x20-\x3a\x3c-\x7e]*;([\x21-\x7e]{0,512})(?:(?:\x1b\\)|(?:\x07))([\x20-\x7e]+)\x1b\]8;;(?:(?:\x1b\\)|(?:\x07))/, m = /(?:(\x1b\\)|(\x07))|([\x00-\x06]|[\x08-\x1a]|[\x1c-\x1f])/g;

class w {
  constructor(n) {
    this.lastIndex = 0, this.input = n;
  }
  next() {
    var n = this.input.substring(this.lastIndex), r = n.length;
    if (0 === r) return {
      value: null,
      done: !0
    };
    var t = {
      kind: 0,
      text: "",
      url: ""
    }, a = n.indexOf("");
    if (-1 === a) return t.kind = 1, t.text = n, this.lastIndex += r, {
      value: t,
      done: !1
    };
    if (a > 0) return t.kind = 1, t.text = n.slice(0, a), this.lastIndex += a, {
      value: t,
      done: !1
    };
    if (r < 3) return {
      value: null,
      done: !0
    };
    var s = n.charAt(1);
    if ("[" !== s && "]" !== s && "(" !== s) return t.kind = 2, t.text = n[0], this.lastIndex += 1, 
    {
      value: t,
      done: !1
    };
    if ("[" === s) {
      var o = n.match($);
      return null === o ? {
        value: null,
        done: !0
      } : o[4] ? (t.kind = 2, t.text = n[0], this.lastIndex += 1, {
        value: t,
        done: !1
      }) : ("" !== o[1] || "m" !== o[3] ? t.kind = 3 : t.kind = 4, t.text = o[2], this.lastIndex += o[0].length, 
      {
        value: t,
        done: !1
      });
    }
    if ("]" === s) {
      if (r < 4) return {
        value: null,
        done: !0
      };
      if ("8" !== n.charAt(2) || ";" !== n.charAt(3)) return t.kind = 2, t.text = n[0], 
      this.lastIndex += 1, {
        value: t,
        done: !1
      };
      var _o = new RegExp(m), d = _o.exec(n);
      if (null === d) return {
        value: null,
        done: !0
      };
      if (d[3]) return t.kind = 2, t.text = n[0], this.lastIndex += 1, {
        value: t,
        done: !1
      };
      var _d = _o.exec(n);
      if (null === _d) return {
        value: null,
        done: !0
      };
      if (_d[3]) return t.kind = 2, t.text = n[0], this.lastIndex += 1, {
        value: t,
        done: !1
      };
      var f = n.match(p);
      return null === f ? (t.kind = 2, t.text = n[0], this.lastIndex += 1, {
        value: t,
        done: !1
      }) : (t.kind = 5, t.url = f[1], t.text = f[2], this.lastIndex += f[0].length, {
        value: t,
        done: !1
      });
    }
    return "(" === s ? (t.kind = 3, this.lastIndex += 3, {
      value: t,
      done: !1
    }) : {
      value: null,
      done: !0
    };
  }
  [Symbol.iterator]() {
    return this;
  }
}

var h = new Array(14);

h[0] = "background-color", h[1] = "color", h[2] = "font-family", h[3] = "font-size", 
h[4] = "font-style", h[5] = "font-weight", h[6] = "opacity", h[7] = "outline", h[8] = "text-decoration", 
h[9] = "text-decoration-color", h[10] = "text-decoration-line", h[11] = "text-decoration-style", 
h[12] = "vertical-align", h[13] = "visibility";

class u {
  constructor() {
    this.attrArray = new Array(14), this._size = 0;
  }
  get(n) {
    return this.attrArray[n];
  }
  set(n, r) {
    var t = this.attrArray[n];
    this.attrArray[n] = r, void 0 === t && void 0 !== r && (this._size += 1);
  }
  delete(n) {
    var r = this.attrArray[n];
    this.attrArray[n] = void 0, void 0 !== r && (this._size -= 1);
  }
  update(n) {
    for (var r in n) if (n.hasOwnProperty(r)) {
      var t = n[r];
      this.attrArray[r] = t, void 0 !== t && (this._size += 1);
    }
  }
  clear() {
    this.attrArray.fill(void 0), this._size = 0;
  }
  get size() {
    return this._size;
  }
  toString() {
    var n = "";
    return this.attrArray.forEach(function(r, t) {
      void 0 !== r && (n += `${h[t]}:${r};`);
    }), n;
  }
  static delete() {
    for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) n[_key] = arguments[_key];
    return function(r) {
      n.forEach(function(t) {
        r.delete(t);
      });
    };
  }
  static appendVal(n, r) {
    return function(t) {
      var a = t.get(n), s = a ? a.split(" ") : [];
      s.includes(r) || s.push(r), t.set(n, s.join(" "));
    };
  }
  static removeVal(n, r) {
    return function(t) {
      var a = t.get(n), s = a ? a.split(" ") : [];
      (s = s.filter(function(o) {
        return o !== r;
      })).length ? t.set(n, s.join(" ")) : t.delete(n);
    };
  }
}

g(), g({
  onlyFirst: !0
});

var e = new Array(108);

e[0] = {
  5: "var(--ansi-bold-font-weight, 600)"
}, e[1] = {
  5: "var(--ansi-bold-font-weight, 600)"
}, e[2] = {
  6: "var(--ansi-dim-opacity, 0.7)"
}, e[3] = {
  4: "italic"
}, e[4] = u.appendVal(8, "underline"), e[8] = {
  13: "hidden"
}, e[9] = u.appendVal(8, "line-through"), e[10] = u.delete(2), e[11] = {
  2: "var(--ansi-font-1)"
}, e[12] = {
  2: "var(--ansi-font-2)"
}, e[13] = {
  2: "var(--ansi-font-3)"
}, e[14] = {
  2: "var(--ansi-font-4)"
}, e[15] = {
  2: "var(--ansi-font-5)"
}, e[16] = {
  2: "var(--ansi-font-6)"
}, e[17] = {
  2: "var(--ansi-font-7)"
}, e[18] = {
  2: "var(--ansi-font-8)"
}, e[19] = {
  2: "var(--ansi-font-9)"
}, e[21] = {
  10: "underline",
  11: "double"
}, e[22] = u.delete(5), e[23] = u.delete(4), e[24] = u.removeVal(8, "underline"), 
e[28] = u.delete(13), e[29] = u.removeVal(8, "line-through"), e[30] = {
  1: `var(--ansi-black, ${e$1.black})`
}, e[31] = {
  1: `var(--ansi-red, ${e$1.red})`
}, e[32] = {
  1: `var(--ansi-green, ${e$1.green})`
}, e[33] = {
  1: `var(--ansi-yellow, ${e$1.yellow})`
}, e[34] = {
  1: `var(--ansi-blue, ${e$1.blue})`
}, e[35] = {
  1: `var(--ansi-magenta, ${e$1.magenta})`
}, e[36] = {
  1: `var(--ansi-cyan, ${e$1.cyan})`
}, e[37] = {
  1: `var(--ansi-white, ${e$1.white})`
}, e[39] = u.delete(1), e[40] = {
  0: `var(--ansi-black, ${e$1.black})`
}, e[41] = {
  0: `var(--ansi-red, ${e$1.red})`
}, e[42] = {
  0: `var(--ansi-green, ${e$1.green})`
}, e[43] = {
  0: `var(--ansi-yellow, ${e$1.yellow})`
}, e[44] = {
  0: `var(--ansi-blue, ${e$1.blue})`
}, e[45] = {
  0: `var(--ansi-magenta, ${e$1.magenta})`
}, e[46] = {
  0: `var(--ansi-cyan, ${e$1.cyan})`
}, e[47] = {
  0: `var(--ansi-white, ${e$1.white})`
}, e[49] = u.delete(0), e[51] = {
  7: "var(--ansi-frame-outline, 1px solid)"
}, e[53] = u.appendVal(8, "overline"), e[54] = u.delete(7), e[55] = u.removeVal(8, "overline"), 
e[59] = u.delete(9), e[73] = {
  12: "super",
  3: "var(--ansi-superscript-font-size, 80%)"
}, e[74] = {
  12: "sub",
  3: "var(--ansi-subscript-font-size, 80%)"
}, e[75] = u.delete(12, 3), e[90] = {
  1: `var(--ansi-bright-black, ${e$1["bright-black"]})`
}, e[91] = {
  1: `var(--ansi-bright-red, ${e$1["bright-red"]})`
}, e[92] = {
  1: `var(--ansi-bright-green, ${e$1["bright-green"]})`
}, e[93] = {
  1: `var(--ansi-bright-yellow, ${e$1["bright-yellow"]})`
}, e[94] = {
  1: `var(--ansi-bright-blue, ${e$1["bright-blue"]})`
}, e[95] = {
  1: `var(--ansi-bright-magenta, ${e$1["bright-magenta"]})`
}, e[96] = {
  1: `var(--ansi-bright-cyan, ${e$1["bright-cyan"]})`
}, e[97] = {
  1: `var(--ansi-bright-white, ${e$1["bright-white"]})`
}, e[100] = {
  0: `var(--ansi-bright-black, ${e$1["bright-black"]})`
}, e[101] = {
  0: `var(--ansi-bright-red, ${e$1["bright-red"]})`
}, e[102] = {
  0: `var(--ansi-bright-green, ${e$1["bright-green"]})`
}, e[103] = {
  0: `var(--ansi-bright-yellow, ${e$1["bright-yellow"]})`
}, e[104] = {
  0: `var(--ansi-bright-blue, ${e$1["bright-blue"]})`
}, e[105] = {
  0: `var(--ansi-bright-magenta, ${e$1["bright-magenta"]})`
}, e[106] = {
  0: `var(--ansi-bright-cyan, ${e$1["bright-cyan"]})`
}, e[107] = {
  0: `var(--ansi-bright-white, ${e$1["bright-white"]})`
};

var c = new Array(16);

function b(l) {
  switch (l) {
   case "38":
    return 1;

   case "48":
    return 0;

   case "58":
    return 9;

   default:
    throw new Error("not implemented");
  }
}

function R(l, n) {
  /^(38|48|58);(2|5);/.test(l.text) ? "2" === l.text[3] ? function(l, n) {
    var r = l.text.split(";");
    if (5 === r.length) {
      var t = b(r[0]), _r = function(r, e) {
        return function(r) {
          if (Array.isArray(r)) return r;
        }(r) || function(r, l) {
          var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
          if (null != t) {
            var e, n, i, u, a = [], f = !0, o = !1;
            try {
              if (i = (t = t.call(r)).next, 0 === l) ; else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), 
              a.length !== l); f = !0) ;
            } catch (r) {
              o = !0, n = r;
            } finally {
              try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
              } finally {
                if (o) throw n;
              }
            }
            return a;
          }
        }(r, e) || function(r, a) {
          if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
          }
        }(r, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }(r, 5), a = _r[2], s = _r[3], o = _r[4];
      n.set(t, `rgb(${a},${s},${o})`);
    }
  }(l, n) : function(l, n) {
    var r = l.text.split(";");
    if (3 === r.length) {
      var t = b(r[0]), a = parseInt(r[2], 10);
      if (0 <= a && a <= 15) {
        var s = c[a];
        n.set(t, `var(--ansi-${s}, ${e$1[s]})`);
      } else if (16 <= a && a <= 231) {
        var _s = a - 16, o = [ 0, 95, 135, 175, 215, 255 ], f = o[_s / 36 % 6 | 0], d = o[_s / 6 % 6 | 0], v = o[_s % 6];
        n.set(t, `rgb(${f},${d},${v})`);
      } else if (232 <= a && a <= 255) {
        var _s2 = 8 + 10 * (a - 232);
        n.set(t, `var(--ansi-gray-${256 - a}, rgb(${_s2},${_s2},${_s2}))`);
      }
    }
  }(l, n) : l.text.split(";").forEach(function(r) {
    var t = parseInt(r || "0", 10);
    if (0 !== t) {
      var a = e[t];
      a && ("function" == typeof a ? a(n) : n.update(a));
    } else n.clear();
  });
}

c[0] = "black", c[1] = "red", c[2] = "green", c[3] = "yellow", c[4] = "blue", c[5] = "magenta", 
c[6] = "cyan", c[7] = "white", c[8] = "bright-black", c[9] = "bright-red", c[10] = "bright-green", 
c[11] = "bright-yellow", c[12] = "bright-blue", c[13] = "bright-magenta", c[14] = "bright-cyan", 
c[15] = "bright-white";

var fancy = new class {
  toHtml(n) {
    var r = new u, t = "", a = !1;
    return Array.from(new w(n)).forEach(function(s) {
      switch (s.kind) {
       case 1:
        t += y(s.text);
        break;

       case 4:
        a && (t += "</span>", a = !1), R(s, r), r.size && (t += `<span style="${r.toString()}">`, 
        a = !0);
      }
    }), a && (t += "</span>"), t;
  }
}, html = function(str) {
  return fancy.toHtml(str);
};

export { code, color, css, find, html, icon, regex, style };
