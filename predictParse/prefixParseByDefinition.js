let language = require('./prefixLanguage');
let parser = require('./prefixParser');

// const input = "- 8 + 2 - 7 3".replace(/\s/g, '');

// let result = parser(language, input)

// console.log(result);
// console.log(result.calc());


let readline = require('readline');

(async ()=>{
    while (await new Promise(function(resolve){
        let interface = readline.createInterface(process.stdin, process.stdout);
        interface.question('>', function(input){
            input=input.replace(/\s/g, '');
            console.log(parser(language, input).calc());
            interface.close();
            resolve(true);
        })
    }));
})();