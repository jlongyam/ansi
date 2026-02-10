var ansi = (function() {
  var icon = {
    ok: '√',
    notOk: '×',
    notEqual: '≠',
    warning: '‼',
    arrow: {
      left:  '‹',
      right: '›',
      double: {
        left:  '«',
        right: '»'
      }
    },
    bullet: {
      on:  '•',
      off: '◦'
    },
    dot: '·',
    method: 'ƒ',
    summary: '∑',
    block: '█',
    love: '❤',
    menu: '≡',
    mark: '※',
    select: '↕',
    star: {
      on:   '★',
      off:  '☆'
    },
    section: '§',
    para: '¶',
    radio: {
      on:   '◉',
      off:  '◯'
    },
    pointer: '▸'
  };
  var code = (function() {
    var reset = 0;
    var textStyle = {
      bold: 1,
      dim: 2,
      italic: 3,
      underline: 4,
      blink: 5,
      rapid: 6,
      inverse: 7,
      invisible: 8,
      strike: 9
    };
    var fg = {
      black: 30,
      red: 31,
      green: 32,
      yellow: 33,
      blue: 34,
      magenta: 35,
      cyan: 36,
      white: 37
    };
    var fgBright = {
      black: 90,
      red: 91,
      green: 92,
      yellow: 93,
      blue: 94,
      magenta: 95,
      cyan: 96,
      white: 97
    };
    var bg = {
      black: 40,
      red: 41,
      green: 42,
      yellow: 43,
      blue: 44,
      magenta: 45,
      cyan: 46,
      white: 47
    };
    var bgBright = {
      black: 100,
      red: 101,
      green: 102,
      yellow: 103,
      blue: 104,
      magenta: 105,
      cyan: 106,
      white: 107
    };
    return {
      reset,
      textStyle,
      fg,
      fgBright,
      bg,
      bgBright
    };
  })();
  var style = (function() {
    var textStyle = code.textStyle;
    var style = {};
    for(i in textStyle) {
      style[i] = function(txt) {
        return `\x1b[${textStyle[i]}m${txt}\x1b[0m`;
      }
    }
    return style;
  })();
  var color = (function() {
    var name = code.fgBright;
    var color = {};
    for( var i in name ) {
      color[i] = (function(i, name) {
        return function(txt) {
          return `\x1b[${name[i]}m${txt}\x1b[0m`;
        }
      })(i, name);
    }
    return color;
  })();
  var bg = (function() {
    var name = code.bg;
    var bg = {};
    for( var i in name ) {
      bg[i] = (function(i, name) {
        return function(txt) {
          return `\x1b[${name[i]}m${txt}\x1b[0m`;
        }
      })(i, name);
    }
    return bg;
  })();
  return {
    icon: icon,
    code: code,
    style: style,
    color: color,
    bg: bg
  }
})();
