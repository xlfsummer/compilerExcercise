class NT {
  constructor(name) {
    this.type = "nonterminal";
    this.name = name;
  }
}
class T {
  constructor(symbol) {
    this.type = "terminal";
    this.symbol = symbol;
  }
}

let expr = new NT("expression");
let a = new NT("a");

let grammars = [
  {
    name: "plus expression",
    head: expr,
    body: [new T("+"), expr, expr]
  },
  {
    name: "minus expression",
    head: expr,
    body: [new T("-"), expr, expr]
  },
  {
    name: "digit expression",
    head: expr,
    body: [a]
  },
  ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => ({
    name: "digit " + n,
    head: a,
    body: [new T(n + "")]
  }))
];

module.exports = {
  start: expr,
  grammars: grammars
};