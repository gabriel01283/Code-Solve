const API_URL = "https://code-solve.onrender.com";

function getToken() {
    return localStorage.getItem("token");
}

async function buscarLanguagePorNome(nome) {
    const response = await fetch(`${API_URL}/languages`);
    const data = await response.json();

    return data.languages.find((item) => item.name.toLowerCase() === nome.toLowerCase());
}

async function adicionarInteressePorNome(nome) {
    const token = getToken();

    if (!token) {
        alert("Você precisa estar logado para adicionar interesses.");
        window.location.href = "/parte_HTML/usuario/login.html";
        return;
    }

    const language = await buscarLanguagePorNome(nome);

    if (!language) {
        alert("Conteúdo não encontrado no banco.");
        return;
    }

    const response = await fetch(`${API_URL}/interests/${language.id}`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();

    if (data.error) {
        alert(data.error);
        return;
    }

    alert(`${language.name} foi adicionado aos seus interesses.`);
}