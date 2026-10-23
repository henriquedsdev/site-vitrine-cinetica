const botaoMenu = document.getElementById('burguer')
const menu = document.querySelector('header nav ul')
const linksMenu = menu.querySelectorAll('a')

botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('ativo')
})

linksMenu.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('ativo')
    })
})

window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
        menu.classList.remove('ativo')
    }
})

const url = 'http://localhost:5678/webhook-test/form'

const formEl = document.getElementById('forms')
const mensagemEnvio = document.getElementById('mensagem-envio')

formEl.addEventListener('submit', async evento => {
    evento.preventDefault();

    const formData = new FormData(formEl)
    const data = Object.fromEntries(formData)

    try {
        const resposta = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        if(!resposta.ok) {
            throw new Error('Falha no envio');
        }

        mensagemEnvio.textContent = 'Mensagem enviada com sucesso!'
        mensagemEnvio.classList.remove('erro', 'sucesso');
        mensagemEnvio.classList.add('sucesso')
        formEl.reset();
    }
    catch(erro) {
        mensagemEnvio.textContent = 'Erro ao enviar mensagem. Tente novamente!'
        mensagemEnvio.classList.remove('erro', 'sucesso');
        mensagemEnvio.classList.add('erro')
        console.error('Erro no envio: ', erro);
    }
})