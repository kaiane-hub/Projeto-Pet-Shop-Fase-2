function atualizarRelogio() {

    const elementoRelogio = document.getElementById("relogio");

    if (elementoRelogio) {

        const agora = new Date();

        const dataHora = agora.toLocaleString("pt-BR");

        elementoRelogio.innerHTML =
            "Data e hora atual: " + dataHora;
    }
}

/* Executa a função a cada segundo */
setInterval(atualizarRelogio, 1000);

/* Executa ao carregar a página */
atualizarRelogio();

const campoAgendamento =
    document.getElementById("agendamento");

if (campoAgendamento) {

    const agora = new Date();

    agora.setMinutes(
        agora.getMinutes() - agora.getTimezoneOffset()
    );

    campoAgendamento.min =
        agora.toISOString().slice(0, 16);
}

const formularioCadastro =
    document.getElementById("formCadastro");

if (formularioCadastro) {

    formularioCadastro.addEventListener(
        "submit",
        function(evento) {

            /* Evita o recarregamento da página */
            evento.preventDefault();

            const nomeCliente =
                document.getElementById("nomeCliente").value;

            const nomePet =
                document.getElementById("nomePet").value;

            const mensagem =
                document.getElementById("mensagemCadastro");

            mensagem.innerHTML =
                "<strong>Cadastro realizado!</strong><br>" +
                "Cliente: " + nomeCliente + "<br>" +
                "Pet: " + nomePet + "<br>" +
                "O agendamento foi registrado para demonstração.";

            mensagem.style.display = "block";

            /* Move a tela até a mensagem */
            mensagem.scrollIntoView({
                behavior: "smooth"
            });
        }
    );
}


const formularioContato =
    document.getElementById("formContato");

if (formularioContato) {

    formularioContato.addEventListener(
        "submit",
        function(evento) {

            evento.preventDefault();

            const mensagem =
                document.getElementById("mensagemContato");

            mensagem.innerHTML =
                "<strong>Mensagem registrada!</strong> " +
                "Obrigado por entrar em contato conosco.";

            mensagem.style.display = "block";
        }
    );
}