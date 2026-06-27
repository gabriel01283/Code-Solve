async function cadastrar() {

    const username = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    try {

        const response = await fetch("https://code-solve.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const data = await response.json();

        if (data.error) {
            mensagem.textContent = data.error;
            mensagem.className = "erro";
            return;
        }

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.className = "sucesso";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);

    } catch (error) {
        console.error(error);

        mensagem.textContent = "Erro ao conectar com o servidor.";
        mensagem.className = "erro";
    }
}