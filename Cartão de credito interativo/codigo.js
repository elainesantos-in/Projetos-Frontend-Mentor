var nomeCliente = document.querySelector('.digiteNomeCliente');
var numeroCartao = document.querySelector('.digiteNumeroCartao');
var mesCartao = document.querySelector('.mesCartao');
var anoCartao = document.querySelector('.anoCartao');
var codigodeSeguranca = document.querySelector('.cvcCartao');

var desenhoNumeroCartao = document.querySelector('.numerodoCartao');
var desenhoNomedoCliente = document.querySelector('.nomedoCliente--docartao');
var desenhoMesVencimento = document.querySelector('.dataDeVencimento--docartao');
var desenhoAnoVencimento = document.querySelector('.dataDeVencimento--docartao2');
var desenhoCodigoSeguranca = document.querySelector('.codigodeSegurança---docartao');

nomeCliente.addEventListener('input', () => {

    desenhoNomedoCliente.innerText = nomeCliente.value.toUpperCase();

        if (typeof nomeCliente.value ==! "text"){
            var paragrafoAviso1 = document.createElement('p');
            paragrafoAviso1.innerText = 'Caracter invavlidos, digite apenas letras';
            paragrafoAviso1.style.color = 'rgb(255, 0, 0)';
            nomeCliente.appendChild(paragrafoAviso1);
        }
    });

numeroCartao.addEventListener('input', () => {
    desenhoNumeroCartao.innerText = numeroCartao.value;
});

mesCartao.addEventListener('input', () => {
    desenhoMesVencimento.innerText = mesCartao.value;
});

anoCartao.addEventListener('input', () => {
    desenhoAnoVencimento.innerText = anoCartao.value;
});

codigodeSeguranca.addEventListener('input', () => {
    desenhoCodigoSeguranca.innerText = codigodeSeguranca.value;
});


