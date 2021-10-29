const input = require('fs').readFileSync("stdin","utf-8");
const valores = input.split('\n');
let a = parseFloat(valores[0]);
let b = parseFloat(valores[1]);

var resultado = ((a*3.5)+(b*7.5))/ 11.0;
console.log(`MEDIA = ${resultado.toFixed(5)}`)