"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";
import styles from "../login/login.module.css";
import regStyles from "./cadastro.module.css";

export default function CadastroPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState<"sucesso" | "erro" | "">("");

  async function cadastrar() {
    setMensagem("");
    setTipo("");

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), email: email.trim(), password }),
      });

      const data = await response.json();

      if (data.error) {
        setMensagem(data.error);
        setTipo("erro");
        return;
      }

      setMensagem("Cadastro realizado com sucesso!");
      setTipo("sucesso");

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
      setTipo("erro");
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <Link href="/" className={styles.voltarHome}>Home</Link>

      <div className={styles.container}>
        <h1>Cadastro</h1>

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
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
        />

        {mensagem && (
          <p className={tipo === "sucesso" ? regStyles.sucesso : styles.erro}>
            {mensagem}
          </p>
        )}

        <button type="button" onClick={cadastrar}>
          Cadastrar
        </button>

        <div className={styles.bottomText}>
          Já possui conta?{" "}
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
