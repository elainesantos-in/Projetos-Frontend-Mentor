var valorTotal = document.querySelector('.entrada--valor');
var porcentagens = document.querySelectorAll('.valor--porcentagem');
var quantidadedePessoas = document.querySelector('.entrada--pessoas');
var valorTotalGorjeta = document.querySelector('.resultadoTotal--gorjeta');
var valorTotalGorjetaporPessoa = document.querySelector('.resultadoporPessoa--gorjeta');

//valorTotal.addEventListener('keyup', valorReal);
//quantidadedePessoas.quantidadedePessoas

/*function valorReal(){
    var valor = parseFloat(valorTotal.value); // Converte o valor para número

    // Atualiza os resultados
    resultadoporPessoa.innerText = valor.toFixed(2);
    resultadoTotal.innerText = valor.toFixed(2);
}
*/
quantidadedePessoas.addEventListener('keyup', porPessoas)

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
        valorTotalGorjetaporPessoa.innerText = gorjetaTotal / parseFloat(quantidadedePessoas)

    });
});  

function porPessoas()

    porcentagens.forEach(valorporcentagem =>{
        var porcentagemSelecionada = parseFloat(valorporcentagem.innerText) / 100
        var gorjetaTotal= parseFloat(valorTotal.value) * porcentagemSelecionada;
        
        valorTotalGorjetaporPessoa.innerText = gorjetaTotal / parseFloat(quantidadedePessoas)


}
    porPessoas(valorTotal.value,)
)




