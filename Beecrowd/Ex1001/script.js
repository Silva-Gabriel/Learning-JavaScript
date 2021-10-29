const input = require('fs').readFileSync("stdin","utf8");
var valores = input.split('\n');

var a = parseInt(valores.shift());
var b = parseInt(valores.shift());
var X = a + b;
console.log(`X = ${X}`)
