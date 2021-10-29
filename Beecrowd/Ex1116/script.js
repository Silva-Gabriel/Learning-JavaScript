const input = require('fs').readFileSync('stdin','utf-8')
var valor = input.split('\n')
let n = parseInt(valor[0])


for(let i = 1;i <= n;i++)
{
    var valores = valor[i].split(' ');
    var n1 = parseFloat(valores.shift());
    var n2 = parseFloat(valores.shift());
    if(n2 === 0)
        console.log('divisao impossivel');
    else
        console.log(`${(n1/n2).toFixed(1)}`);
}


