function somar(){
    var tn1 = window.document.getElementById('txt1')
    var tn2 = window.document.querySelector('input#txt2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var resultado = n1 + n2
    var result = window.document.getElementById('resultado')
    result.innerHTML = `${resultado}`
}
