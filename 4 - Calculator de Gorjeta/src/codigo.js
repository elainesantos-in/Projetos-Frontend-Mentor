const valorGorjetaPorPessoa = document.getElementById('valor--gorjeta');
const valorTotalPorPessoa = document.getElementById('valor--total');
const error = document.querySelector('erro')

const botoesPorcentagem = [botao5, botao10, botao15, botao25, botao50];

botoesPorcentagem.forEach(botao => {
    botao.addEventListener('click', calcularGorjeta);
});

function calcularGorjeta(event){
    const inputDinheiro = parseFloat(document.getElementById('input--dinheiro').value);
    const inputPessoas = parseFloat(document.getElementById('input--pessoas').value);
    const inputCustom = parseFloat(document.getElementById('input--custom').value);

    const porcentagem = parseFloat(event.target.value);
    if(inputPessoas == 0){
        inputPessoas.style.borderColor = "rgb(223, 6, 6)"
        error.style.display='block'

    }

    if(!isNaN(inputCustom) && inputCustom !== 0) {
        const totalGorjeta = (inputDinheiro * (inputCustom + porcentagem)) / 100;
        const porcentPorPessoa = totalGorjeta / inputPessoas;
        const totalPessoas = (inputDinheiro + totalGorjeta) / inputPessoas;
        valorGorjetaPorPessoa.innerText = porcentPorPessoa.toFixed(2);
        valorTotalPorPessoa.innerText = totalPessoas.toFixed(2);
    } else {
        const totalGorjeta = inputDinheiro * (porcentagem / 100);
        const porcentPorPessoa = totalGorjeta / inputPessoas;
        const totalPessoas = (inputDinheiro + totalGorjeta) / inputPessoas;
        valorGorjetaPorPessoa.innerText = porcentPorPessoa.toFixed(2);
        valorTotalPorPessoa.innerText = totalPessoas.toFixed(2);
    }
}