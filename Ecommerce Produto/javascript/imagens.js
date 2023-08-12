var miniImagens = document.querySelector('.imagem-thumbnail');console.log('aqui')
var carroselImagens = document.querySelector('.imagens--grande');console.log('aqui')


miniImagens.addEventListener('click', abrirImagens); console.log('aqui')

function abrirImagens() {

    for (let i = 0; i < miniImagens.length; i++) {
    const img = document.createElement("img");
    img.src = miniImagens[i];
    }
carroselImagens.appendChild(img);
carroselImagens.style.display ='block';
}

console.log('aqui')




