let language = require('./prefixLanguage');
let parser = require('./prefixParser');

const input = "- + 9 + 4 5 6".replace(/\s/g, '');

let result = parser(language, input)

console.log(result);

debugger;