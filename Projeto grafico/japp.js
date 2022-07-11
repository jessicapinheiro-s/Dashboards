const btEnviar = document.getElementById('btEnviar');
btEnviar.addEventListener('click', function () {
    let container = document.querySelector('.formulario');

    container.classList.add('esconder');

    let garf = document.querySelector('.grafico');

    garf.classList.add('mostrar');
});


function processamentoDados() {

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

    let colunaJan = document.getElementById('j-bar');
    let colunaFev = document.getElementById('f-bar');
    let colunaMar = document.getElementById('m-bar');

    if (qtdJan == 10) {
        colunaJan.style.height = '40px';
    } else if (qtdFev == 10) {
        colunaFev.style.height = '40px';
    } else if(qtdMar == 10){
        colunaMar.style.height = '40px';
    }
/*
    if (numeroM == 20) {
        coluna.style.height = '200px';
    } else if (numeroH == 20) {
        colunadois.style.height = '200px';
    } else if (numThree == 20) {
        colunatres.style.height = '200px';
    }

    if (numeroM == 30) {
        coluna.style.height = '300px';
    } else if (numeroH == 30) {
        colunadois.style.height = '300px';
    } else if (numThree == 30) {
        colunatres.style.height = '300px';
    }*/
    se(qtdJan, qtdFev, qtdMar);
}

function se(y, z, j) {
    let coluna = document.getElementById('col');
    let colunadois = document.getElementById('colTwo');
    let colunatres = document.getElementById('colThree');

    if (y == 10) {
        coluna.style.height = '100px';
    } else if (z == 10) {
        colunadois.style.height = '100px';
    } else if (j == 10) {
        colunatres.style.height = '100px';
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

