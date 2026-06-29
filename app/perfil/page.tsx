"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL, getToken, isLoggedIn, logout } from "@/lib/api";
import styles from "./perfil.module.css";

interface Interest {
  language_id: number;
  name: string;
  description: string;
}

export default function PerfilPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [commentsCount, setCommentsCount] = useState(0);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
      return;
    }

    load();
  }, []);

  async function carregarPerfil() {
    const token = getToken();

    const response = await fetch(`${API_URL}/perfil`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();

    setUsername(data.username || "");
    setEmail(data.email || "");
    setCommentsCount(data.comments_count || 0);
  }

  async function carregarInteresses() {
    const token = getToken();

    const response = await fetch(`${API_URL}/perfil/interests`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();

    setInterests(data.interests || []);
  }

  async function removerInteresse(languageId: number) {
    const token = getToken();

    await fetch(`${API_URL}/interests/${languageId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    await carregarInteresses();
  }

  async function load() {
    await carregarPerfil();
    await carregarInteresses();
    setLoading(false);
  }

  function sairDaConta() {
    logout();
    router.push("/login");
  }

  if (loading) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.loadingBox}>Carregando perfil...</div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <a href="/" className={styles.voltarHome}>
        Home
      </a>

      <main className={styles.perfilPage}>
        <section className={styles.perfilHeader}>
          <div className={styles.avatarArea}>
            <div className={styles.fotoPerfil}>👤</div>
          </div>

          <div className={styles.headerInfo}>
            <p className={styles.subtitulo}>Perfil do usuário</p>
            <h1>{username || "Usuário"}</h1>
            <p>{email}</p>
          </div>
        </section>

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span>💬</span>
            <strong>{commentsCount}</strong>
            <p>Comentários</p>
          </div>

          <div className={styles.statCard}>
            <span>💻</span>
            <strong>{interests.length}</strong>
            <p>Interesses</p>
          </div>

          <div className={styles.statCard}>
            <span>👤</span>
            <strong>{username || "Usuário"}</strong>
            <p>Conta ativa</p>
          </div>
        </section>

        <section className={styles.perfilBox}>
          <h2>Informações do Perfil</h2>

          <label>Nome</label>
          <input type="text" value={username} readOnly />

          <label>Email</label>
          <input type="email" value={email} readOnly />
        </section>

        <section className={styles.perfilBox}>
          <div className={styles.boxHeader}>
            <h2>Meus Interesses</h2>
            <span>{interests.length} cadastrados</span>
          </div>

          <div className={styles.interessesLista}>
            {interests.length === 0 ? (
              <p className={styles.emptyText}>
                Você ainda não adicionou interesses.
              </p>
            ) : (
              interests.map((interesse) => (
                <div key={interesse.language_id} className={styles.interesseCard}>
                  <div>
                    <h3>{interesse.name}</h3>
                    <p>{interesse.description}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removerInteresse(interesse.language_id)}
                  >
                    Remover
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <section className={styles.salvarBox}>
          <button type="button" onClick={sairDaConta}>
            Sair da conta
          </button>
        </section>
      </main>
    </div>
  );
}