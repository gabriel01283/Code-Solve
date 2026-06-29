"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL, setToken } from "@/lib/api";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  async function fazerLogin() {
    setError("");

    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.access_token) {
      setToken(data.access_token);
      router.push("/perfil");
    } else {
      setError(data.error || "Login inválido");
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <Link href="/" className={styles.voltarHome}>Home</Link>

      <div className={styles.container}>
        <h1>Login</h1>

        <label htmlFor="usuario">Email</label>
        <input
          type="text"
          id="usuario"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fazerLogin()}
        />

        {error && <p className={styles.erro}>{error}</p>}

        <button type="button" onClick={fazerLogin}>
          Entrar
        </button>

        <div className={styles.bottomText}>
          Não possui conta?{" "}
          <Link href="/cadastro">Cadastrar</Link>
        </div>
      </div>
    </div>
  );
}
