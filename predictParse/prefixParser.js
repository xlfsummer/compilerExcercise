module.exports = function parse(language, inputs) {
    //   var language = require("./prefixLanguage.js");

    let ii = 0;

    let nonterminal = language.start;


    let production = findProduction(nonterminal, language.grammars, inputs[ii]);

    return parseProduction(production, language.grammars)

    function parseProduction(production, grammar) {

        let node = {
            type: "nonterminal",
            head: production.head.name,
            name: production.name,
            body: [],
            calc: production.calc,
        }

        for (let si = 0, sl = production.body.length; si < sl; si++) {
            let symbol = production.body[si];

            node.body.push(function (){
                if (symbol.type == "terminal") {
                    if (symbol.symbol == inputs[ii]) {
                        return {
                            type: "terminal",
                            text: inputs[ii++]
                        };
                    }
                    else {
                        throw new Error(`expect ${symbol.symbol} at ${ii}, but get ${inputs[ii]}`);
                    }
                }
                else /* nonterminal */ {
                    let production = findProduction(symbol, grammar, inputs[ii]);
                    return parseProduction(production, grammar);
                }
            }());

        }

        return node;
    }

    function findProduction(nonterminal, grammar, char) {
        for (let gi = 0, gl = grammar.length; gi < gl; gi++) {

            let prod = grammar[gi];

            if (nonterminal != prod.head) continue;

            if (prod.body[0].type == "terminal") {
                if (char == prod.body[0].symbol) {
                    return prod;
                }
            }
            else if (prod.body[0].type == "nonterminal") {
                return findProduction(prod.body[0], grammar, char)
            }
        }

        return null;
    }
};
