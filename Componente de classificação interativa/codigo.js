let notas = document.querySelectorAll('.nota');

parseInt(notas[index]).addEventListener('onclick', selecionandoNota )

function indexnotas() {
    for ( let i=0; i<notas.length; i++){
        var index = notas[i]
    };
    return index
};

function selecionandoNota(){
    parseInt(notas[index]).style.backgroudcolor='#ff6619'

}