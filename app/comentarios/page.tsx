"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL, getToken, isLoggedIn } from "@/lib/api";
import Navbar from "../components/Navbar";
import styles from "./comentarios.module.css";

interface Reply {
  id: number;
  comment_id: number;
  user_id: number;
  username: string;
  content: string;
  created_at: string;
}

interface Comment {
  id: number;
  username: string;
  content: string;
  created_at: string;
}

function formatarData(data: string): string {
  if (!data) return "Data não informada";

  return new Date(data).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ComentariosPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [replies, setReplies] = useState<Record<number, Reply[]>>({});
  const [replyTexts, setReplyTexts] = useState<Record<number, string>>({});
  const [texto, setTexto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    carregarComentarios();
  }, []);

  function mostrarMensagem(texto: string, tipo: "sucesso" | "erro") {
    setMensagem(texto);
    setTipoMensagem(tipo);

    setTimeout(() => {
      setMensagem("");
      setTipoMensagem("");
    }, 4000);
  }

  async function carregarComentarios() {
    try {
      const res = await fetch(`${API_URL}/comments`);
      const data = await res.json();
      const comentariosRecebidos = data.comments || [];

      setComments(comentariosRecebidos);

      await Promise.all(
        comentariosRecebidos.map((comment: Comment) =>
          carregarRespostas(comment.id),
        ),
      );
    } catch {
      setComments([]);
    } finally {
      setLoading(false);
    }
  }

  async function carregarRespostas(commentId: number) {
    try {
      const res = await fetch(`${API_URL}/comments/${commentId}/replies`);
      const data = await res.json();

      setReplies((prev) => ({
        ...prev,
        [commentId]: data.replies || [],
      }));
    } catch {
      setReplies((prev) => ({
        ...prev,
        [commentId]: [],
      }));
    }
  }

  async function criarComentario(e: React.FormEvent) {
    e.preventDefault();

    const token = getToken();

    if (!token) {
      mostrarMensagem("Você precisa estar logado para comentar.", "erro");
      return;
    }

    if (!texto.trim()) {
      mostrarMensagem("Digite um comentário antes de publicar.", "erro");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: texto.trim() }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        mostrarMensagem("Erro ao publicar comentário.", "erro");
        return;
      }

      setTexto("");
      mostrarMensagem("Comentário publicado com sucesso.", "sucesso");
      await carregarComentarios();
    } catch {
      mostrarMensagem("Erro de conexão com o servidor.", "erro");
    }
  }

  async function criarResposta(commentId: number) {
    const token = getToken();
    const textoResposta = replyTexts[commentId] || "";

    if (!token) {
      mostrarMensagem("Você precisa estar logado para responder.", "erro");
      return;
    }

    if (!textoResposta.trim()) {
      mostrarMensagem("Digite uma resposta antes de enviar.", "erro");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/comments/${commentId}/replies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: textoResposta.trim() }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        mostrarMensagem("Erro ao publicar resposta.", "erro");
        return;
      }

      setReplyTexts((prev) => ({
        ...prev,
        [commentId]: "",
      }));

      mostrarMensagem("Resposta publicada com sucesso.", "sucesso");
      await carregarRespostas(commentId);
    } catch {
      mostrarMensagem("Erro de conexão com o servidor.", "erro");
    }
  }

  async function deletarComentario(id: number) {
    const token = getToken();

    if (!token) {
      mostrarMensagem("Você precisa estar logado.", "erro");
      return;
    }

    if (!confirm("Tem certeza que deseja excluir este comentário?")) return;

    try {
      const res = await fetch(`${API_URL}/comments/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        mostrarMensagem(
          "Você só pode excluir seus próprios comentários.",
          "erro",
        );
        return;
      }

      mostrarMensagem("Comentário excluído com sucesso.", "sucesso");
      await carregarComentarios();
    } catch {
      mostrarMensagem("Erro de conexão com o servidor.", "erro");
    }
  }

  async function deletarResposta(replyId: number, commentId: number) {
    const token = getToken();

    if (!token) {
      mostrarMensagem("Você precisa estar logado.", "erro");
      return;
    }

    if (!confirm("Tem certeza que deseja excluir esta resposta?")) return;

    try {
      const res = await fetch(`${API_URL}/replies/${replyId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        mostrarMensagem(
          "Você só pode excluir suas próprias respostas.",
          "erro",
        );
        return;
      }

      mostrarMensagem("Resposta excluída com sucesso.", "sucesso");
      await carregarRespostas(commentId);
    } catch {
      mostrarMensagem("Erro de conexão com o servidor.", "erro");
    }
  }

  async function denunciarComentario(commentId: number) {
    const token = getToken();

    if (!token) {
      mostrarMensagem("Você precisa estar logado.", "erro");
      return;
    }

    const motivo = prompt("Informe o motivo da denúncia:");

    if (!motivo || !motivo.trim()) return;

    try {
      const res = await fetch(`${API_URL}/reports/${commentId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          reason: motivo.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        mostrarMensagem(data.error || "Erro ao denunciar comentário.", "erro");
        return;
      }

      mostrarMensagem("Comentário denunciado com sucesso.", "sucesso");
    } catch {
      mostrarMensagem("Erro de conexão com o servidor.", "erro");
    }
  }

  return (
    <>
      <Navbar />

      <main>
        <section className={styles.comentariosHero}>
          <span className={styles.tag}>Solve Community</span>
          <h1>Comentários</h1>
          <p>
            Compartilhe dúvidas, ideias, sugestões e experiências sobre
            programação. Este espaço foi criado para troca de conhecimento entre
            estudantes.
          </p>
        </section>

        <section className={styles.comentariosContainer}>
          <div className={styles.comentarioFormArea}>
            <h2>Adicionar comentário</h2>
            <p>Escreva uma mensagem para participar da discussão.</p>

            {!loggedIn ? (
              <div className={styles.loginAviso}>
                <p>Para publicar um comentário, você precisa estar logado.</p>
                <div className={styles.loginAcoes}>
                  <Link href="/login">Entrar</Link>
                  <Link href="/cadastro">Criar conta</Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={criarComentario}
                className={styles.comentarioForm}
              >
                <label htmlFor="comentarioTexto">Seu comentário</label>
                <textarea
                  id="comentarioTexto"
                  placeholder="Digite seu comentário aqui..."
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                />
                <button type="submit" className={styles.btnComentar}>
                  Publicar comentário
                </button>
              </form>
            )}

            {mensagem && (
              <p
                className={`${styles.mensagem} ${
                  tipoMensagem === "sucesso" ? styles.sucesso : styles.erro
                }`}
              >
                {mensagem}
              </p>
            )}
          </div>

          <div className={styles.comentariosListaArea}>
            <h2>Comentários recentes</h2>

            <div className={styles.comentariosLista}>
              {loading ? (
                <p className={styles.emptyMessage}>Carregando comentários...</p>
              ) : comments.length === 0 ? (
                <p className={styles.emptyMessage}>
                  Nenhum comentário publicado ainda.
                </p>
              ) : (
                comments.map((c) => (
                  <article key={c.id} className={styles.comentarioCard}>
                    <div className={styles.comentarioHeader}>
                      <div>
                        <h3>{c.username || "Usuário"}</h3>
                        <span>{formatarData(c.created_at)}</span>
                      </div>
                    </div>

                    <p>{c.content}</p>

                    <div className={styles.comentarioAcoes}>
                      {loggedIn && (
                        <>
                          <button
                            type="button"
                            className={styles.btnDeletar}
                            onClick={() => deletarComentario(c.id)}
                          >
                            Excluir
                          </button>
                          
                          <button
                            type="button"
                            className={styles.btnReport}
                            onClick={() => denunciarComentario(c.id)}
                          >
                            Denunciar
                          </button>
                        </>
                      )}
                    </div>

                    <div className={styles.respostasArea}>
                      <h4>Respostas</h4>

                      {(replies[c.id] || []).length === 0 ? (
                        <p className={styles.semRespostas}>
                          Nenhuma resposta ainda.
                        </p>
                      ) : (
                        <div className={styles.respostasLista}>
                          {(replies[c.id] || []).map((reply) => (
                            <div key={reply.id} className={styles.respostaCard}>
                              <div className={styles.respostaHeader}>
                                <strong>{reply.username || "Usuário"}</strong>
                                <span>{formatarData(reply.created_at)}</span>
                              </div>

                              <p>{reply.content}</p>

                              {loggedIn && (
                                <button
                                  type="button"
                                  className={styles.btnDeletarResposta}
                                  onClick={() =>
                                    deletarResposta(reply.id, c.id)
                                  }
                                >
                                  Excluir resposta
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {loggedIn ? (
                        <div className={styles.respostaForm}>
                          <textarea
                            placeholder="Escreva uma resposta..."
                            value={replyTexts[c.id] || ""}
                            onChange={(e) =>
                              setReplyTexts((prev) => ({
                                ...prev,
                                [c.id]: e.target.value,
                              }))
                            }
                          />
                          <button
                            type="button"
                            onClick={() => criarResposta(c.id)}
                          >
                            Responder
                          </button>
                        </div>
                      ) : (
                        <p className={styles.loginRespostaAviso}>
                          Entre para responder este comentário.
                        </p>
                      )}
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
