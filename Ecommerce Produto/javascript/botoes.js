let subtrair = document.querySelector('.botao--subtracao');
let quantidade = document.querySelector('.quantidade');
let adicao = document.querySelector('.botao--adicao');
let alerta = document.querySelector('.alerta');
let addcarrinhoButton = document.querySelector('.add--carrinho')
let divNumero = document.querySelector('.nQuatidadeCarrinho')
let quantidadeNoCarrinho = document.querySelector('.numero--nocarrinho')


adicao.addEventListener('click', aumentarQuantidade);
subtrair.addEventListener('click', diminuirQuantidade);
addcarrinhoButton.addEventListener('click', addAoCarrinho);

function aumentarQuantidade() {
    if (quantidade.innerText >= 5) {
        alerta.style.display = 'block';
    } else {
        quantidade.innerText = parseInt(quantidade.innerText) + 1;
    }
}

function diminuirQuantidade() {
    if (parseInt(quantidade.innerText) > 0) {
        quantidade.innerText = parseInt(quantidade.innerText) - 1;
    } if (parseInt(quantidade.innerText) < 5) {
        alerta.style.display = 'none';
    }
}

function addAoCarrinho() {
    if(parseInt(quantidade.innerText) > 0 ){
        divNumero.style.display='block'
        quantidadeNoCarrinho.innerText = parseInt(quantidade.innerText)

    }
}

