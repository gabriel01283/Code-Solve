// Configuração
const API_URL = "https://code-solve.onrender.com";

// Elementos
const comentarioForm = document.getElementById("comentarioForm");
const comentarioTexto = document.getElementById("comentarioTexto");
const comentariosLista = document.getElementById("comentariosLista");
const mensagemComentario = document.getElementById("mensagemComentario");
const loginAviso = document.getElementById("loginAviso");

// Token
function getToken() {
    return localStorage.getItem("access_token") || localStorage.getItem("token");
}

function usuarioEstaLogado() {
    const token = getToken();
    
    return token !== null && token !== "";
} 

// Permissão
function controlarPermissaoComentario() {
    if (usuarioEstaLogado()) {
        comentarioForm.style.display = "flex";
        loginAviso.style.display = "none";
    } else {
        comentarioForm.style.display = "none";
        loginAviso.style.display = "block";
    }
}

// Mensagens
function mostrarMensagem(texto, tipo) {
    mensagemComentario.textContent = texto;
    mensagemComentario.className = "mensagem";
    
    if (tipo === "sucesso") {
        mensagemComentario.classList.add("sucesso");
    }
    
    if (tipo === "erro") {
        mensagemComentario.classList.add("erro");
    }
}

// Data
function formatarData(data) {
    if (!data) {
        return "Data não informada";
    }
    
    const dataFormatada = new Date(data);
    
    return dataFormatada.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

// Segurança
function escaparHTML(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    
    return div.innerHTML;
}

// Listar comentários
async function carregarComentarios() {
    try {
        const resposta = await fetch(`${API_URL}/comments`);
        const dados = await resposta.json();

        comentariosLista.innerHTML = "";

        if (!dados.comments || dados.comments.length === 0) {
            comentariosLista.innerHTML = `
                <p class="empty-message">
                    Nenhum comentário publicado ainda.
                </p>
            `;
            return;
        }

        dados.comments.forEach((comentario) => {
            const card = document.createElement("article");
            card.classList.add("comentario-card");

            const id = comentario.id;
            const usuario = escaparHTML(comentario.username || "Usuário");
            const conteudo = escaparHTML(comentario.content || "");
            const data = formatarData(comentario.created_at);

            card.innerHTML = `
                <div class="comentario-header">
                    <div>
                        <h3>${usuario}</h3>
                        <span>${data}</span>
                    </div>
                </div>

                <p>${conteudo}</p>
            `;

            if (usuarioEstaLogado()) {
                const botaoDeletar = document.createElement("button");
                botaoDeletar.type = "button";
                botaoDeletar.classList.add("btn-deletar");
                botaoDeletar.textContent = "Excluir";

                botaoDeletar.addEventListener("click", () => {
                    deletarComentario(id);
                });

                card.appendChild(botaoDeletar);
            }

            comentariosLista.appendChild(card);
        });

    } catch (erro) {
        comentariosLista.innerHTML = `
            <p class="empty-message">
                Erro ao carregar comentários.
            </p>
        `;
    }
}

// Criar comentário
async function criarComentario(event) {
    event.preventDefault();

    const token = getToken();
    const conteudo = comentarioTexto.value.trim();

    if (!token) {
        mostrarMensagem("Você precisa estar logado para comentar.", "erro");
        return;
    }

    if (!conteudo) {
        mostrarMensagem("Digite um comentário antes de publicar.", "erro");
        return;
    }

    try {
        const resposta = await fetch(`${API_URL}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                content: conteudo
            })
        });

        const dados = await resposta.json();

        if (!resposta.ok || dados.error) {
            mostrarMensagem("Erro ao publicar comentário.", "erro");
            return;
        }

        comentarioTexto.value = "";
        mostrarMensagem("Comentário publicado com sucesso.", "sucesso");

        await carregarComentarios();

    } catch (erro) {
        mostrarMensagem("Erro de conexão com o servidor.", "erro");
    }
}

// Deletar comentário
async function deletarComentario(id) {
    const token = getToken();

    if (!token) {
        mostrarMensagem("Você precisa estar logado para excluir comentários.", "erro");
        return;
    }

    const confirmar = confirm("Tem certeza que deseja excluir este comentário?");

    if (!confirmar) {
        return;
    }

    try {
        const resposta = await fetch(`${API_URL}/comments/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const dados = await resposta.json();

        if (!resposta.ok || dados.error) {
            mostrarMensagem("Você só pode excluir seus próprios comentários.", "erro");
            return;
        }

        mostrarMensagem("Comentário excluído com sucesso.", "sucesso");

        await carregarComentarios();

    } catch (erro) {
        mostrarMensagem("Erro de conexão com o servidor.", "erro");
    }
}

// Inicialização
comentarioForm.addEventListener("submit", criarComentario);

controlarPermissaoComentario();
carregarComentarios();