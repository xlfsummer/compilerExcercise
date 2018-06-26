// import PNode from "./parseTree.mjs";

const str = "- + 9 7 4".replace(/\s/g,'');

let i = 0;
let result = parseExpr.call(null);

console.log(result);
debugger;

function parseExpr() {
    let node = {
        type: "expression",
        parent: this,
        expr: null
    };

    if (str[i] == '+') {
        node.expr = parsePlusExpr.call(node);
    }

    else if (str[i] == '-') {
        node.expr = parseMinusExpr.call(node);
    }

    else if (str[i].match(/^\d$/)) {
        node.expr = str[i++];
    }

    return node;
}

function parsePlusExpr() {
    let node = {
        parent: this,
        type: "plus expression",
        "+": null,
        nt1: null,
        nt2: null,
    };

    node["+"] = match.call(node, "+");
    node.nt1 = parseExpr.call(node);
    node.nt2 = parseExpr.call(node);

    return node;
}

function parseMinusExpr() {
    let node = {
        parent: this,
        type: "minus expression",
        "-": null,
        nt1: null,
        nt2: null,
    };

    node["-"] = match.call(node, "-");
    node.nt1 = parseExpr.call(node);
    node.nt2 = parseExpr.call(node);

    return node;
}

// function parseDigit() {
//     if (!/\d/.test(str[i])) throw new SyntaxError(`digit expect in position ${i}.`);

//     let node = {
//         type: "digit",
//         parent: this,
//         text: str[i++]
//     };

//     return node
// }

function match(char) {
    if (char != str[i]) throw new SyntaxError(`'${char}' expect in position ${i}.`)
    return str[i++];
}