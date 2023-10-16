function sons (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const som = tecla.classList[1];
    const idAudio = `#som_${som}`;

    tecla.onclick = function (){
        sons(idAudio);
    }
}
