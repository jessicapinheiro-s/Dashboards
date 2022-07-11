const btEnviar = document.getElementById('btEnviar');
btEnviar.addEventListener('click', function () {
    let container = document.querySelector('.formulario');

    container.classList.add('esconder');

    let garf = document.querySelector('.grafico');

    garf.classList.add('mostrar');
});


function am() {
    let homensNum = document.getElementById('homensNum');
    let mulheresNum = document.getElementById('mulheresNum');

    let numeroM = Number(homensNum.value);
    let numeroH = Number(mulheresNum.value);

    let numThree = 30;
    let coluna = document.getElementById('col');
    let colunadois = document.getElementById('colTwo');
    let colunatres = document.getElementById('colThree');

    if (numeroM == 10) {
        coluna.style.height = '100px';
    } else if (numeroH == 10) {
        colunadois.style.height = '100px';
    } else if (numThree == 10) {
        colunatres.style.height = '100px';
    }

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
    }
    se(numeroM, numeroH, numThree);
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

