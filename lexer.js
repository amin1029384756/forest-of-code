const moo = require("moo");
const fs = require("mz/fs");

let lexer = moo.compile({
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  var_passed_string: /`(?:\\["\\]|[^\n"\\])*`/,
  plus: "+",
  minus: "-",
  multipliedby: "*",
  dividedby: "/",
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  booltru: "True",
  boolfals: "False",
  assign: "Is",
  Determiner: "The",
  fatarrow: "Push",
  plead: "Please.",
  identifier: /[A-Z][a-zA-Z_0-9]*/,
  lparen: "(",
  rparen: ")",
  lbrace: "{",
  rbrace: "}",
  NL: { match: /\n/, lineBreaks: true },
});

module.exports = lexer;
