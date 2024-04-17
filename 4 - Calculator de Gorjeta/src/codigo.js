const inputDinheiro = document.getElementById('input--dinheiro')
const inputPessoas = document.getElementById('input--pessoas');

const todosBotoes = document.querySelectorAll('button--card-one');
const botao5 = document.getElementById('botao5');
const botao10 = document.getElementById('botao10');
const botao15 = document.getElementById('botao15');
const botao25 = document.getElementById('botao25');
const botao50 = document.getElementById('botao50');

const inputCustom = document.getElementById('input--custom');
const valorGorjeta = document.getElementById('valor--gorjeta');
const valorTotal = document.getElementById('valor--total');

const botaoReset = document.querySelector('.button--reset')

function acaoBotao(){
todosBotoes.forEach(botao => {
    //botao.addEventListener('click', ()=>{
    if(botao){
    const dinheiro = Number(inputDinheiro.value); 
    const calcValorGorjeta = (dinheiro * (Number(botao.value) + Number(inputCustom.value))) / 100 //valor gorjeta
    const gorjetaPorPessoa = (Number(calcValorGorjeta) / Number(inputPessoas.value));
    const somaTudoEDividiPorPessoas = (dinheiro + Number(calcValorGorjeta)) / Number(inputPessoas.value);
    
    valorGorjeta.innerText = gorjetaPorPessoa.toFixed(2)
    valorTotal.innerText = somaTudoEDividiPorPessoas.toFixed(2)
    }
}
)
}
//)
//}
botao5.addEventListener('click', acaoBotao)
botao10.addEventListener('click', acaoBotao)

/*
inputDinheiro.addEventListener('input', () => {
    const dinheiro = Number(inputDinheiro.value); // Mova a declaração aqui dentro
    valorGorjeta.innerText = dinheiro.toFixed(2);
    valorTotal.innerText = dinheiro.toFixed(2);
});

botao5.addEventListener('click', ()=>{
        const dinheiro = Number(inputDinheiro.value); 
        const calcValorGorjeta = (dinheiro * botao5.value) / 100 
        valorGorjeta.innerText = calcValorGorjeta
        valorTotal.innerText = calcValorGorjeta
})
const todosBotoes
botao10.addEventListener('click', ()=>{
    const dinheiro = Number(inputDinheiro.value); 
    const calcValorGorjeta = (dinheiro * (Number(botao10.value) + Number(inputCustom.value))) / 100 //valor gorjeta
    const gorjetaPorPessoa = (Number(calcValorGorjeta) / Number(inputPessoas.value));
    const somaTudoEDividiPorPessoas = (dinheiro + Number(calcValorGorjeta)) / Number(inputPessoas.value);
    
    valorGorjeta.innerText = gorjetaPorPessoa.toFixed(2)
    valorTotal.innerText = somaTudoEDividiPorPessoas.toFixed(2)
})

botao15.addEventListener('click', ()=>{
    const dinheiro = Number(inputDinheiro.value); 
    const custom = Number(inputCustom.value)
    const calcValorGorjeta = (dinheiro * (botao15.value + custom)) / 100 
    valorGorjeta.innerText = calcValorGorjeta
    valorTotal.innerText = calcValorGorjeta
})

botao25.addEventListener('click', ()=>{
    const dinheiro = Number(inputDinheiro.value); 
    const calcValorGorjeta = (dinheiro * botao25.value) / 100 
    valorGorjeta.innerText = calcValorGorjeta
    valorTotal.innerText = calcValorGorjeta
})

botao50.addEventListener('click', ()=>{
    const dinheiro = Number(inputDinheiro.value); 
    const calcValorGorjeta = (dinheiro * (botao50.value + inputCustom)) / 100 //valor gorjeta
    const gorjetaPorPessoa = (Number(calcValorGorjeta) / Number(inputPessoas.value));
    const somaTudoEDividiPorPessoas = (dinheiro + Number(calcValorGorjeta)) / Number(inputPessoas.value);
    
    valorGorjeta.innerText = gorjetaPorPessoa.toFixed(2)
    valorTotal.innerText = somaTudoEDividiPorPessoas.toFixed(2)

    
})
*/
/*inputCustom.addEventListener('input', ()=>{
    const dinheiro = Number(inputDinheiro.value); 
    const calcValorGorjeta = (dinheiro * inputCustom.value) / 100 //valor gorjeta
    const gorjetaPorPessoa = (Number(calcValorGorjeta) / Number(inputPessoas.value));
    const somaTudoEDividiPorPessoas = (dinheiro + Number(calcValorGorjeta)) / Number(inputPessoas.value);
    
    valorGorjeta.innerText = gorjetaPorPessoa.toFixed(2)
    valorTotal.innerText = somaTudoEDividiPorPessoas.toFixed(2)
})*/
/*inputPessoas.addEventListener('input', () => {
    const dinheiro = Number(inputDinheiro.value);
    const gorjetaPorPessoa = (Number(valorGorjeta.innerText) / Number(inputPessoas.value));
    const somaTudoEDividiPorPessoas = (dinheiro + Number(valorTotal.innerText)) / Number(inputPessoas.value);
    valorGorjeta.innerText = gorjetaPorPessoa.toFixed(2); // Formate para exibir com 2 casas decimais
    valorTotal.innerText = somaTudoEDividiPorPessoas.toFixed(2); // Formate para exibir com 2 casas decimais
});*/

botaoReset.addEventListener('click', () =>{
    inputDinheiro.value = '';
    inputPessoas.value = '';
    inputCustom.value = '';
    valorGorjeta.innerText = '0.00'
    valorTotal.innerText = '0.00'
});




// o primeiro valortotalgorjeta / por pessoas
// é o total da compra com gorjeta /por pessoas



/*const inputDinheiro = document.getElementById('input--dinheiro').value;
const inputPessoas = document.getElementById('input--pessoas');

const botao5 = document.getElementById('botao5');
const botao10 = document.getElementById('botao10');
const botao15 = document.getElementById('botao15');
const botao25 = document.getElementById('botao25');
const botao50 = document.getElementById('botao50');

const inputCustom = document.getElementById('input--custom');
const valorGorjeta = document.getElementById('valor--gorjeta');
const valorTotal = document.getElementById('valor--total');

function calcular() {
    const dinheiro = parseFloat(inputDinheiro.value);
    const pessoas = parseFloat(inputPessoas.value);
    let gorjetaPercentual;

    // Verifica qual botão de porcentagem foi clicado // se esse botão que foi clicado e disparou o evento tiver o id ===
    if (this.id === 'botao5') {
        gorjetaPercentual = parseFloat(botao5.value);
    } else if (this.id === 'botao10') {
        gorjetaPercentual = parseFloat(botao10.value);
    } else if (this.id === 'botao15') {
        gorjetaPercentual = parseFloat(botao15.value);
    } else if (this.id === 'botao25') {
        gorjetaPercentual = parseFloat(botao25.value);
    } else if (this.id === 'botao50') {
        gorjetaPercentual = parseFloat(botao50.value);
    } else if (this.id === 'input--custom') {
        gorjetaPercentual = parseFloat(inputCustom.value);
    }

    const resultadoGorjeta = (dinheiro * gorjetaPercentual) / 100;
    console.log(resultadoGorjeta)
    const resultadoTotal = (dinheiro + resultadoGorjeta) / pessoas;

    valorGorjeta.innerText = resultadoGorjeta.toFixed(2);
    valorTotal.innerText = resultadoTotal.toFixed(2);
}

// Adiciona o evento input ao campo de dinheiro e ao campo de pessoas
inputDinheiro.addEventListener('input', calcular);
inputPessoas.addEventListener('input', calcular);

// Adiciona o evento de clique a cada botão de porcentagem
botao5.addEventListener('click', calcular);
botao10.addEventListener('click', calcular);
botao15.addEventListener('click', calcular);
botao25.addEventListener('click', calcular);
botao50.addEventListener('click', calcular);

// Adiciona o evento input ao campo de entrada personalizado
inputCustom.addEventListener('input', calcular);

const buttons = document.querySelectorAll('.button--card-one');

// Adiciona o evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe 'active' apenas ao botão clicado
        this.classList.add('active');
        // Chama a função calcular
        calcular();
    });
});*/