"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { API_URL, getToken, isLoggedIn } from "@/lib/api";
import styles from "./cards.module.css";

const linguagens = [
  { nome: "Python", slug: "python" },
  { nome: "Java", slug: "java" },
  { nome: "JavaScript", slug: "javascript" },
  { nome: "HTML", slug: "html" },
  { nome: "CSS", slug: "css" },
  { nome: "C++", slug: "cpp" },
  { nome: "C#", slug: "csharp" },
  { nome: "Go", slug: "go" },
  { nome: "Rust", slug: "rust" },
  { nome: "Kotlin", slug: "kotlin" },
  { nome: "Swift", slug: "swift" },
];

const frameworks = [
  "React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt",
  "Spring Boot", "Django", "Flask", "Express"
];

const git = [
  "Controle de Versão", "Repositórios", "Fluxo de Desenvolvimento",
  "Revisão de Código", "Organização de Tarefas", "Automação", "Boas Práticas"
];

const apis = [
  "REST", "JSON", "HTTP Methods", "Authentication", "Rate Limits",
  "GraphQL", "Webhooks", "Endpoints", "CRUD", "Swagger"
];

const banco = [
  "SQL", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "NoSQL",
  "Redis", "Indexes", "Joins", "ORM"
];

async function adicionarInteresse(nome: string) {
  if (!isLoggedIn()) {
    alert("Você precisa estar logado para adicionar interesses.");
    window.location.href = "/login";
    return;
  }

  const token = getToken();

  // Buscar language por nome
  const res = await fetch(`${API_URL}/languages`);
  const data = await res.json();
  const language = data.languages?.find(
    (item: { name: string; id: number }) =>
      item.name.toLowerCase() === nome.toLowerCase()
  );

  if (!language) {
    alert("Conteúdo não encontrado no banco.");
    return;
  }

  const resp = await fetch(`${API_URL}/interests/${language.id}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

  const result = await resp.json();

  if (result.error) {
    alert(result.error);
    return;
  }

  alert(`${language.name} foi adicionado aos seus interesses.`);
}

function CardItem({ nome, href }: { nome: string; href?: string }) {
  return (
    <div className={styles.cardWrapper}>
      {href ? (
        <Link href={href} className={styles.card}>{nome}</Link>
      ) : (
        <span className={styles.card}>{nome}</span>
      )}
      <button type="button" onClick={() => adicionarInteresse(nome)}>
        Adicionar aos interesses
      </button>
    </div>
  );
}

export default function CardsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.section}>
          <h1>Linguagens de Programação</h1>
          <p>Principais linguagens para começar no desenvolvimento.</p>
          <div className={styles.cardsContainer}>
            {linguagens.map((l) => (
              <CardItem key={l.slug} nome={l.nome} href={`/cards/linguagens/${l.slug}`} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1>Frameworks</h1>
          <p>Ferramentas para acelerar o desenvolvimento.</p>
          <div className={styles.cardsContainer}>
            {frameworks.map((f) => (
              <CardItem key={f} nome={f} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1>Git & GitHub</h1>
          <p>Controle de versão, colaboração e organização de projetos.</p>
          <div className={styles.cardsContainer}>
            {git.map((g) => (
              <CardItem key={g} nome={g} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1>APIs</h1>
          <p>Comunicação entre sistemas e serviços.</p>
          <div className={styles.cardsContainer}>
            {apis.map((a) => (
              <CardItem key={a} nome={a} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1>Banco de Dados</h1>
          <p>Tecnologias de armazenamento e consulta de dados.</p>
          <div className={styles.cardsContainer}>
            {banco.map((b) => (
              <CardItem key={b} nome={b} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
