const input = require('fs').readFileSync("stdin","utf8");
var valores = input.split('\n');
var a = parseInt(valores[0]);
var b = parseInt(valores[1]);
var produto = a * b
console.log(`PROD = ${produto}`)