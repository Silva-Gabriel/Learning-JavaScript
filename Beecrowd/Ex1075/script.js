const input = require('fs').readFileSync('stdin','utf-8')
var n = input
for(let i = 0; i < 10000;i++)
{
    if(i%n == 2)
    {
        console.log(i);
    }
}