const btEnviar = document.getElementById('btEnviar');
btEnviar.addEventListener('click', function () {
    let container = document.querySelector('.formulario');

    container.classList.add('esconder');

    let garf = document.querySelector('.grafico');

    garf.classList.add('mostrar');
});


function coletaDados() {

    let qtdOne = document.getElementById('qtdOne');
    let qtdTwo = document.getElementById('qtdOne');
    let qtdThree = document.getElementById('qtdOne');
    let qtdFour = document.getElementById('qtdOne');
    let qtdFive = document.getElementById('qtdOne');
    let qtdSix = document.getElementById('qtdOne');
    let qtdSeven = document.getElementById('qtdOne');


    let qtdJan = Number(qtdOne.value);
    let qtdFev = Number(qtdTwo.value);
    let qtdMar = Number(qtdThree.value);
    let qtdAbr = Number(qtdFour.value);
    let qtdMai = Number(qtdFive.value);
    let qtdJun = Number(qtdSix.value);
    let qtdJul = Number(qtdSeven.value);

    processamento(qtdJan, qtdFev, qtdMar);
}

function processamento(y, z, j) {
    let colunaJan = document.getElementById('j-bar');
    let colunaFev = document.getElementById('f-bar');
    let colunaMar = document.getElementById('m-bar');

    if (y == 10) {
        colunaJan.style.height = '100px';
    } else if (z == 10) {
        colunaFev.style.height = '100px';
    } else if (j == 10) {
        colunaMar.style.height = '100px';
    }

    if (y == 20) {
        coluna.style.height = '200px';
    } else if (z == 20) {
        colunadois.style.height = '200px';
    } else if (j == 20) {
        colunatres.style.height = '200px';
    }

    if (y == 30) {
        coluna.style.height = '300px';
    } else if (z == 30) {
        colunadois.style.height = '300px';
    } else if (j == 30) {
        colunatres.style.height = '300px';
    }

}

