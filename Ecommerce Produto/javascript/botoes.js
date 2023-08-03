let subtrairCarrinho = Number(document.querySelector('.botao--subtracao'));
let quantidadeCarrinho = Number(document.querySelector('.quantidade'));
let adicaoCarrinho = Number(document.querySelector('.botao--adicao'));

subtrairCarrinho.addEventListener('click', diminuirQuantidade);
adicaoCarrinho.addEventListener('click', aumentarQuantidade);


function diminuirQuantidade() {
    if (quantidadeCarrinho > 0 ){
        quantidadeCarrinho =  quantidadeCarrinho - 1
        console.log(aqui)
    }

}

function aumentarQuantidade() {
    quantidadeCarrinho = quantidadeCarrinho + 1
}