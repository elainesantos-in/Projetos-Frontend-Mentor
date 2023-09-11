var quantidadeNotificacao = document.querySelector('.textoquantidadeNotificacao');
var marcarTodos = document.querySelector('.marcaTodos');
var notificacao = document.querySelectorAll('.divNotificacao');
var bolinhaNotificacao = document.querySelector('.sinalizandoNotificacao');

notificacao.forEach(usuarioNotifica =>{
    usuarioNotifica.addEventListener('click', () => {
        notificacao.forEach(notificacaoClicadaa  => {
            notificacaoClicadaa.classList.add('semBackground')
            //bolinhaNotificacao[].style.display = 'none';
        })
    //usuarioNotifica.classList.add('backgroud');
    })
});