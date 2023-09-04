var valorTotal = document.querySelector('.entrada--valor');
var porcentagens = document.querySelectorAll('.valor--porcentagem');
var quantidadedePessoas = document.querySelector('.entrada--pessoas');
var valorTotalGorjeta = document.querySelector('.resultadoTotal--gorjeta');
var valorTotalGorjetaporPessoa = document.querySelector('.resultadoporPessoa--gorjeta');
var buttomLimpar = document.querySelector('.reset');

porcentagens.forEach(valor => {
    valor.addEventListener('click', () => {
        porcentagens.forEach(valorUm => {
            valorUm.classList.remove('botaoPorcentagemClicado');
        });

        valor.classList.add('botaoPorcentagemClicado');
        
        var porcentagemSelecionada = parseFloat(valor.innerText) / 100; // Converte a porcentagem para um número decimal

        var gorjetaTotal= parseFloat(valorTotal.value) * porcentagemSelecionada;
        
        // Atualiza os resultados
        valorTotalGorjeta.innerText = gorjetaTotal.toFixed(2);

    });
});  


function porPessoas(valorTotalGorjeta, quantidadedePessoas) {
    var gorjetaPorPessoa = parseFloat(valorTotalGorjeta) / parseFloat(quantidadedePessoas);
    
    // Verifica se a divisão resultou em "NaN" ou é indefinida
    if (isNaN(gorjetaPorPessoa) || !isFinite(gorjetaPorPessoa)) {
        return 0; // Retorna 0 em vez de "NaN"
    }
    
    return gorjetaPorPessoa;
}

quantidadedePessoas.addEventListener('keyup', function() {
    var gorjetaPorPessoa = porPessoas(valorTotalGorjeta.innerText, quantidadedePessoas.value);
    valorTotalGorjetaporPessoa.innerText = gorjetaPorPessoa.toFixed(2);
});

buttomLimpar.addEventListener('click',reset);

function reset(){
    valorTotal.value = '';
    quantidadedePessoas.value = '';
    valorTotalGorjeta.innerText = '0,00';
    valorTotalGorjetaporPessoa.innerText = '0,00';

    porcentagens.forEach(valorUm => {
                valorUm.classList.remove('botaoPorcentagemClicado');
            });
}