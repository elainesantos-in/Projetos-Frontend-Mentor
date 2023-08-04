let subtrair = document.querySelector('.botao--subtracao');
let quantidade = document.querySelector('.quantidade');
let adicao = document.querySelector('.botao--adicao');
let alerta = document.querySelector('.alerta')
console.log('aqui')
let subtrairCarrinho = Number(subtrair.value);
let quantidadeCarrinho = Number(quantidade.value);
let adicaoCarrinho = Number(adicao.value);
console.log('aqui')

adicaoCarrinho.addEventListener('click', aumentarQuantidade);
subtrairCarrinho.addEventListener('click', diminuirQuantidade);

function aumentarQuantidade() {
    if (quantidade >= 5){
       alerta.style.display = 'block';
   } else {
       quantidadeCarrinho = quantidadeCarrinho + 1
   }
   }
function diminuirQuantidade() {
    if (quantidadeCarrinho > 0 ){
        quantidadeCarrinho =  quantidadeCarrinho - 1
        console.log('aqui')
    }else if(quantidade > 5){
        quantidade = 5
        alerta.style.display = 'block';
    }

}

