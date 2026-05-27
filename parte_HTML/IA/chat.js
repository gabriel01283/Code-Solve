const input = document.getElementById("chat-input");

const button = document.getElementById("send-btn");

const messages = document.getElementById("messages");

async function enviarMensagem() {
    
    const texto = input.value;

    if (texto.trim() === "") return;

    // container da mensagem do usuário
    const userContainer = document.createElement("div");

    userContainer.classList.add("message-container", "user-container");

    // mensagem do usuário
    const userMessage = document.createElement("div");

    userMessage.classList.add("message", "user-message");

    userMessage.textContent = texto;

    userContainer.appendChild(userMessage);

    messages.appendChild(userContainer);

    // limpa input
    input.value = "";

    // scroll automático
    messages.scrollTop = messages.scrollHeight;

    // envia pro backend
    const resposta = await fetch("http://127.0.0.1:8000/chat", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            texto: texto
        })

    });

    const data = await resposta.json();

    // container da IA
    const iaContainer = document.createElement("div");

    iaContainer.classList.add("message-container", "ia-container");

    // mensagem IA
    const iaMessage = document.createElement("div");

    iaMessage.classList.add("message", "ia-message");

    iaMessage.textContent = data.resposta;

    iaContainer.appendChild(iaMessage);

    messages.appendChild(iaContainer);

    // scroll automático
    messages.scrollTop = messages.scrollHeight;

}

// clique botão
button.addEventListener("click", enviarMensagem);

// Enter
input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        enviarMensagem();

    }

});