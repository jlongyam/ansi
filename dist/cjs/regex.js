var regex = /\x1b\[([0-9;]*)m/g;

exports.find = function(str) {
  for (var match, a = []; null !== (match = regex.exec(str)); ) a.push(match);
  var filter = [];
  for (var i in a) filter.push({
    escape: a[i][0].replace(/\x1b/g, "\\x1b"),
    code: a[i][1],
    index: a[i].index
  });
  return filter;
}, exports.regex = regex;
