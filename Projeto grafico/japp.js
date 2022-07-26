const btEnviar = document.getElementById('btEnviar');
btEnviar.addEventListener('click', function () {
    let container = document.querySelector('.formulario');

    container.classList.add('esconder');

    let garf = document.querySelector('.grafico');

    garf.classList.add('mostrar');
});

document.getElementById('btEnviar').addEventListener('click', function coletaDados() {
    let qtds = document.querySelectorAll('[id *=qtd]');
    let soma = 0;

    for (let i = 0; i < qtds.length; i++) {
        soma += Number(qtds[i].value);

        if (qtds[i].value == '') {
            alert('Os campos vazios valerão 0 ..');
            return;
        }

        let colunas = document.querySelectorAll('[class *=barCol]');

        if (Number(qtds[i].value > 0 && Number(qtds[i].value <= 10))) {
            colunas[i].classList.add("colTamDez");
        } else if (Number(qtds[i].value > 10 && Number(qtds[i].value <= 25))) {
            colunas[i].classList.add("colTamVin");
        } else if (Number(qtds[i].value) > 25 && Number(qtds[i].value <= 50)) {
            colunas[i].classList.add("colTamCin");
        } else if (Number(qtds[i].value) > 50 && Number(qtds[i].value <= 100)) {
            colunas[i].classList.add("colTamCem");
        } else if (Number(qtds[i].value) > 100 && Number(qtds[i].value <= 200)) {
            colunas[i].classList.add("colTamDuz");
        } else if (Number(qtds[i].value) > 200 && Number(qtds[i].value <= 300)) {
            colunas[i].classList.add("colTamTre");
        } else if (Number(qtds[i].value) > 300 && Number(qtds[i].value <= 400)) {
            colunas[i].classList.add("colTamQua");
        } else if (Number(qtds[i].value) > 400 && Number(qtds[i].value <= 500)) {
            colunas[i].classList.add("colTamQui");
        }


    }


})



function processamento(y, z, j) {
    let colunas = document.querySelectorAll('[id *=bar]');



}

