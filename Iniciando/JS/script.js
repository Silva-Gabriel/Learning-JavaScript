var modifyTitle = document.getElementById('titulo');
var total = document.getElementById('resultado');
var button = document.querySelector('.btn');
var simboloOperacao = document.getElementById('operacao');
var tn1 = document.getElementById('txt1');
var tn2 = document.querySelector('input#txt2');

//Criando menu
var operacao = prompt('Escolha uma operação:\n[1] Soma\n[2] Subtração\n[3] Divisão\n[4] Resto da divisão\n[5] Multiplicação\n[6] Potenciação\n');

switch(operacao){
    case '1':
        modifyTitle.innerText = 'Somar';
        simboloOperacao.innerText = '+';
        button.addEventListener("click",somar);
        button.addEventListener("click",mostrarResultado);
        break;
    case '2':
        modifyTitle.innerText = 'Subtrair';
        simboloOperacao.innerText = '-';
        button.addEventListener('click',subtrair);
        button.addEventListener("click",mostrarResultado);
        break;
    case '3':
        modifyTitle.innerText = 'Dividir';
        simboloOperacao.innerText = '÷';
        button.addEventListener('click',divisao);
        button.addEventListener("click",mostrarResultado);
        break;
    case '4':
        modifyTitle.innerText = 'Resto da divisão';
        simboloOperacao.innerText = '%';
        button.addEventListener('click',divisaoResto);
        button.addEventListener("click",mostrarResultado);
        break;
    case '5':
        modifyTitle.innerText = 'multiplicação';
        simboloOperacao.innerText = 'x';
        button.addEventListener('click',multiplicacao);
        button.addEventListener("click",mostrarResultado);
        break;
    case '6':
        modifyTitle.innerText = 'Potencia';
        simboloOperacao.innerText = '^';
        button.addEventListener('click',potencia);
        button.addEventListener("click",mostrarResultado);
        break;
}

function mostrarResultado()
{
    total.style.display = 'flex';
    total.style.backgroundColor = 'lightskyblue;';
    total.style.justifyContent = 'center';
    total.style.alignItems = 'center';
    total.style.width = '100%';
    total.style.height = '2.5rem'
    total.style.marginTop = '10px';
}

function somar(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var resultado = n1 + n2;
    total.innerHTML = `${resultado}`;
    return resultado;
}

function subtrair(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var resultado = n1 - n2;
    total.innerHTML = `${resultado}`;
    return resultado;
}

function divisao(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var resultado = n1 / n2;
    total.innerHTML = `${resultado}`;
    return resultado;
}

function divisaoResto(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var resultado = n1 % 2;
    total.innerHTML = `${resultado}`;
    return resultado;
}

function multiplicacao(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var resultado = n1 * n2;
    total.innerHTML = `${resultado}`;
    return resultado;
}

function potencia(){
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var valorN1 = n1;
    for(let i = 0; i < n2-1;i++)
        n1 *= valorN1;
    total.innerHTML = `${n1}`;
}