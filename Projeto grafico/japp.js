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
    let qtdEight = document.getElementById('qtdOne');
    let qtdNine = document.getElementById('qtdOne');
    let qtdTen = document.getElementById('qtdOne');
    let qtdEleven = document.getElementById('qtdOne');
    let qtdTen = document.getElementById('qtdOne');


    let qtdJan = Number(qtdOne.value);
    let qtdFev = Number(qtdTwo.value);
    let qtdMar = Number(qtdThree.value);
    let qtdAbr = Number(qtdFour.value);
    let qtdMai = Number(qtdFive.value);
    let qtdJun = Number(qtdSix.value);
    let qtdJul = Number(qtdSeven.value);
    let qtdAug = Number(qtdEight.value);
    let qtdSet = Number(qtdNine.value);
    let qtdOut = Number(qtdTen.value);
    let qtdNov = Number(qtdEleven.value);
    let qtdDez = Number(qtdTen.value);

    processamento(qtdJan, qtdFev, qtdMar);
}

function processamento(y, z, j) {
    let colunaJan = document.getElementById('j-bar');
    let colunaFev = document.getElementById('f-bar');
    let colunaMar = document.getElementById('m-bar');
    let colunaAbr = document.getElementById('j-bar');
    let colunaMai = document.getElementById('f-bar');
    let colunaJun = document.getElementById('m-bar');
    let colunaJul = document.getElementById('j-bar');
    let colunaAug = document.getElementById('f-bar');
    let colunaSet = document.getElementById('m-bar');
    let colunaOut = document.getElementById('j-bar');
    let colunaNov = document.getElementById('f-bar');
    let colunaDez = document.getElementById('m-bar');


}

