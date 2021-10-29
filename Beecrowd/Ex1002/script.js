const input = require('fs').readFileSync("stdin","utf8");
var raio = parseFloat(input);
var a = 3.14159 * (raio*raio);
console.log(`A=${a.toFixed(4)}`);