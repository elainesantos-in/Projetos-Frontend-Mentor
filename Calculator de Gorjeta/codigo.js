var valorTotal = document.getElementsByClassName('entrada--valor');
var porcentagens = document.querySelectorAll('.valor--porcentagem');
var quantidadedePessoas = document.getElementsByClassName('entrada--pessoas');

porcentagens.forEach((porcent) => {
    porcent.addEventListener('click', () => {
        porcent.classList.add('valorclicado');
    });
});
  
  /*// Função para destacar a nota selecionada
  function selecionandoPorcentagem(index) {
    // Remover a classe "nota-selecionada" de todas as notas
    notas.forEach(nota => {
      nota.classList.remove('nota-selecionada');
    });
  
    // Adicionar a classe "nota-selecionada" à nota clicada
    notas[index].classList.add('nota-selecionada');
  }

  */