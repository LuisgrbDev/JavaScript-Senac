

//é um termo usado na programação para descrever uma ação que permite que um elemento da página da web (como um botão, uma imagem ou qualquer outra coisa que você possa interagir) "ouça" ou "esteja ciente" de eventos, como um clique do mouse, uma tecla pressionada ou uma mudança na página.

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form');
    const nomeusuario = document.getElementById('nomeusuario');
    const nomeEmail = document.getElementById('nomeEmail');
    const erroElement = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');

    form.addEventListener('submit', function (event) {
        if (nomeusuario.value.trim() === '') {
            event.preventDefault();//impede o envio do formulário
            //exibe a mensagem de erro

            erroElement.style.display = 'block';

        } else {
            //se o campo não estiver vazio, oculta a mensagem erro
            erroElement.style.display = 'none';

        }
        const emailRegex = /^[A-Za-z0-9._%]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        
        if (!emailRegex.test(nomeEmail.value.trim())) {
            event.preventDefault();//impede o envio do formulário
            //exibe a mensagem de erro

            erroEmail.style.display = 'block';

        } else {
            //se o campo não estiver vazio, oculta a mensagem erro
            erroEmail.style.display = 'none';

        }
    })


})