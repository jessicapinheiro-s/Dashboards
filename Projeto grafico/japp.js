const btEnviar = document.getElementById('btEnviar');
btEnviar.addEventListener('click', function () {
    let container = document.querySelector('.formulario');

    container.classList.add('esconder');

    let garf = document.querySelector('.grafico');

    garf.classList.add('mostrar');
});


function coletaDados() {
    let qtds = document.querySelectorAll('[id *=qtd]');
    let soma = 0;


    for (let i = 0; i < qtds.length; i++) {
        soma += Number(qtds[i].value);
    
        if(Number(qtds[i].value) <= 50){
            document.getElementById('j-bar').style.height = '40px';
            document.getElementById('f-bar').style.height = '40px';
            document.getElementById('m-bar').style.height = '40px';
            document.getElementById('a-bar').style.height = '40px';
            document.getElementById('mai-bar').style.height = '40px';
        }else if(Number(qtds[i].value) <= 100){
            document.getElementById('j-bar').style.height = '80px';
        }
    }



}




    //processamento(qtdJan, qtdFev, qtdMar);


function processamento(y, z, j) {
    let colunas = document.querySelectorAll('[id *=bar]');



}

