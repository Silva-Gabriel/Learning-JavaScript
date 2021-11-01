//declarando globais
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var olho = document.getElementById('eye');


function mostrarSenha()
{
    olho.addEventListener('click',() =>{
        if(senha.getAttribute('type') == 'password')
        {
            senha.setAttribute('type','text');
        }
        else{
            senha.setAttribute('type','password');
        }
    })
}

function borderInput()
{
    email.addEventListener('focus',() => {
        email.style.borderColor = 'rgba(0,0,0,.95)'
    });
    
    email.addEventListener('blur',() => {
        email.style.borderColor = '#ccc';
    });
    
    senha.addEventListener('focus',() => {
        senha.style.borderColor = 'rgba(0,0,0,.95)'
    });
    
    senha.addEventListener('blur',() =>{
        senha.style.borderColor = '#ccc';
    });
}

//Inicializando as funções
borderInput();
mostrarSenha();
