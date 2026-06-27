protectPage();

async function carregarPerfil() {
    const user = await getProfile();

    document.getElementById("nome").value = user.username || "";
    document.getElementById("email").value = user.email || "";
}

async function carregarInteresses() {
    const dados = await getProfileInterests();
    const lista = document.getElementById("interessesLista");

    lista.innerHTML = "";

    if (!dados.interests || dados.interests.length === 0) {
        lista.innerHTML = "<p>Você ainda não adicionou interesses.</p>";
        return;
    }

    dados.interests.forEach((interesse) => {
        const card = document.createElement("div");
        card.classList.add("interesse-card");

        card.innerHTML = `
            <div>
                <h3>${interesse.name}</h3>
                <p>${interesse.description}</p>
            </div>

            <button type="button" onclick="removerInteresse(${interesse.language_id})">
                Remover
            </button>
        `;

        lista.appendChild(card);
    });
}

async function removerInteresse(languageId) {
    await removeInterest(languageId);
    await carregarInteresses();
}

async function load() {
    await carregarPerfil();
    await carregarInteresses();
}

load();