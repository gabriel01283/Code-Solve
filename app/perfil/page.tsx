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

  if (loading) {
    return (
      <div className={styles.pageWrapper}>
        <p style={{ color: "white", textAlign: "center", paddingTop: "100px" }}>
          Carregando...
        </p>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <a href="/" className={styles.voltarHome}>Home</a>

      <main className={styles.perfilPage}>
        <section className={styles.perfilHeader}>
          <div className={styles.fotoPerfil}>👤</div>
        </section>

        <section className={styles.perfilBox}>
          <h2>Informações do Perfil</h2>
          <label>Nome</label>
          <input type="text" value={username} readOnly />
          <label>Email</label>
          <input type="email" value={email} readOnly />
        </section>

        <section className={styles.perfilBox}>
          <h2>Meus Interesses</h2>
          <div className={styles.interessesLista}>
            {interests.length === 0 ? (
              <p>Você ainda não adicionou interesses.</p>
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
          <button onClick={() => logout()}>Sair</button>
        </section>
      </main>
    </div>
  );
}
