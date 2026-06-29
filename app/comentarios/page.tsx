"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL, getToken, isLoggedIn } from "@/lib/api";
import Navbar from "../components/Navbar";
import styles from "./comentarios.module.css";

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
      setComments(data.comments || []);
    } catch {
      setComments([]);
    } finally {
      setLoading(false);
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
        mostrarMensagem("Você só pode excluir seus próprios comentários.", "erro");
        return;
      }

      mostrarMensagem("Comentário excluído com sucesso.", "sucesso");
      await carregarComentarios();
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
            Compartilhe dúvidas, ideias, sugestões e experiências sobre programação.
            Este espaço foi criado para troca de conhecimento entre estudantes.
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
              <form onSubmit={criarComentario} className={styles.comentarioForm}>
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
              <p className={`${styles.mensagem} ${tipoMensagem === "sucesso" ? styles.sucesso : styles.erro}`}>
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
                <p className={styles.emptyMessage}>Nenhum comentário publicado ainda.</p>
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
                    {loggedIn && (
                      <button
                        type="button"
                        className={styles.btnDeletar}
                        onClick={() => deletarComentario(c.id)}
                      >
                        Excluir
                      </button>
                    )}
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
