window.onload = function(){
    let saudacao = document.createElement('p');
    let horaAtual = new Date().getHours();

    if (horaAtual < 12) {
        saudacao.innerText='Bom Dia!';
    } else if (horaAtual < 18){
        saudacao.innerText='Boa Tarde!';
    } else {
        saudacao.innerText='Boa Noite!';
    }

    document.querySelector('header').appendChild(saudacao);

};