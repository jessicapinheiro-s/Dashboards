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
        let colunas = document.querySelectorAll('[id *=bar]');

        if (Number(qtds[i].value <= 10)) {
            colunas[i].classList.add("colTamDez");

        } else if (Number(qtds[i].value <= 25)) {
            document.getElementById('j-bar').style.height = '30px';
            document.getElementById('f-bar').style.height = '20px';
            document.getElementById('m-bar').style.height = '20px';
            document.getElementById('a-bar').style.height = '20px';
            document.getElementById('mai-bar').style.height = '20px';
            document.getElementById('jun-bar').style.height = '20px';
        } else if (Number(qtds[i].value) <= 50) {
            document.getElementById('j-bar').style.height = '40px';
            document.getElementById('f-bar').style.height = '40px';
            document.getElementById('m-bar').style.height = '40px';
            document.getElementById('a-bar').style.height = '40px';
            document.getElementById('mai-bar').style.height = '40px';
            document.getElementById('jun-bar').style.height = '40px';
        } else if (Number(qtds[i].value) <= 100) {
            document.getElementById('j-bar').style.height = '80px';
            document.getElementById('f-bar').style.height = '80px';
            document.getElementById('m-bar').style.height = '80px';
            document.getElementById('a-bar').style.height = '80px';
            document.getElementById('mai-bar').style.height = '80px';
            document.getElementById('jun-bar').style.height = '80px';
        }


    }

    alert(soma);
})



function processamento(y, z, j) {
    let colunas = document.querySelectorAll('[id *=bar]');



}

