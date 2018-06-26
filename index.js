// import PNode from "./parseTree.mjs";

const str = "5+3";

let i = 0;
let root = { children: null };
let result = parseExpr.call(root);

debugger;
console.log(result);

function parseExpr() {
    let node = {
        type: "expression",
        parent: this,
        expr: null
    };
    node.expr = parsePlusExpr.call(node);
    return node;
}

function parsePlusExpr() {
    let node = {
        parent: this,
        type: "plus expression",
        nt1: null,
        "+": null,
        nt2: null,
        text: null
    };

    node.nt1 = parseDigit.call(node);
    node["+"] = match.call(node, "+");
    node.nt2 = parseDigit.call(node);

    return node;
}

function parseDigit() {
    if (!/\d/.test(str[i])) throw new SyntaxError(`digit expect in position ${i}.`);
    let node = {
        type: "digit",
        parent: this,
        text: str[i++]
    };
    return node
}

function match(char) {
    if (char != str[i]) throw new SyntaxError(`'${char}' expect in position ${i}.`)
    return str[i++];
}