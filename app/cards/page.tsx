"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { API_URL, getToken, isLoggedIn } from "@/lib/api";
import styles from "./cards.module.css";

const linguagens = [
  { nome: "Python", href: "/cards/linguagens/python" },
  { nome: "Java", href: "/cards/linguagens/java" },
  { nome: "JavaScript", href: "/cards/linguagens/javascript" },
  { nome: "HTML", href: "/cards/linguagens/html" },
  { nome: "CSS", href: "/cards/linguagens/css" },
  { nome: "C++", href: "/cards/linguagens/cpp" },
  { nome: "C#", href: "/cards/linguagens/csharp" },
  { nome: "Go", href: "/cards/linguagens/go" },
  { nome: "Rust", href: "/cards/linguagens/rust" },
  { nome: "Kotlin", href: "/cards/linguagens/kotlin" },
  { nome: "Swift", href: "/cards/linguagens/swift" },
];

const frameworks = [
  { nome: "React", href: "/cards/frameworks/react" },
  { nome: "Vue", href: "/cards/frameworks/vue" },
  { nome: "Svelte", href: "/cards/frameworks/svelte" },
  { nome: "Next.js", href: "/cards/frameworks/next" },
  { nome: "Nuxt", href: "/cards/frameworks/nuxt" },
  { nome: "Spring Boot", href: "/cards/frameworks/spring" },
  { nome: "Django", href: "/cards/frameworks/django" },
  { nome: "Flask", href: "/cards/frameworks/flask" },
  { nome: "Express", href: "/cards/frameworks/express" },
];

const git = [
  { nome: "Controle de Versão", href: "/cards/git-e-github/controle-de-versao" },
  { nome: "Repositórios", href: "/cards/git-e-github/repositorios" },
  { nome: "Fluxo de Desenvolvimento", href: "/cards/git-e-github/fluxo-de-desenvolvimento" },
  { nome: "Revisão de Código", href: "/cards/git-e-github/revisao-de-codigo" },
  { nome: "Organização de Tarefas", href: "/cards/git-e-github/organizacao-de-tarefas" },
  { nome: "Boas Práticas", href: "/cards/git-e-github/boas-praticas" },
];

const apis = [
  { nome: "REST", href: "/cards/apis/rest" },
  { nome: "JSON", href: "/cards/apis/json" },
  { nome: "HTTP Methods", href: "/cards/apis/http-methods" },
  { nome: "Rate Limit", href: "/cards/apis/rate-limit" },
  { nome: "GraphQL", href: "/cards/apis/graphql" },
  { nome: "Webhooks", href: "/cards/apis/webhooks" },
  { nome: "Endpoints", href: "/cards/apis/endpoints" },
  { nome: "CRUD", href: "/cards/apis/crud" },
  { nome: "Swagger", href: "/cards/apis/swagger" },
];

const banco = [
  { nome: "SQL", href: "/cards/banco-de-dados/sql" },
  { nome: "PostgreSQL", href: "/cards/banco-de-dados/postgresql" },
  { nome: "MySQL", href: "/cards/banco-de-dados/mysql" },
  { nome: "MongoDB", href: "/cards/banco-de-dados/mongodb" },
  { nome: "NoSQL", href: "/cards/banco-de-dados/nosql" },
  { nome: "Redis", href: "/cards/banco-de-dados/redis" },
  { nome: "Joins", href: "/cards/banco-de-dados/joins" },
  { nome: "ORM", href: "/cards/banco-de-dados/orm" },
];

async function adicionarInteresse(nome: string) {
  if (!isLoggedIn()) {
    alert("Você precisa estar logado para adicionar interesses.");
    window.location.href = "/login";
    return;
  }

  const token = getToken();

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

function CardItem({ nome, href }: { nome: string; href: string }) {
  return (
    <div className={styles.cardWrapper}>
      <Link href={href} className={styles.card}>
        {nome}
      </Link>

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
            {linguagens.map((item) => (
              <CardItem key={item.nome} nome={item.nome} href={item.href} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1>Frameworks</h1>
          <p>Ferramentas para acelerar o desenvolvimento.</p>

          <div className={styles.cardsContainer}>
            {frameworks.map((item) => (
              <CardItem key={item.nome} nome={item.nome} href={item.href} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1>Git & GitHub</h1>
          <p>Controle de versão, colaboração e organização de projetos.</p>

          <div className={styles.cardsContainer}>
            {git.map((item) => (
              <CardItem key={item.nome} nome={item.nome} href={item.href} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1>APIs</h1>
          <p>Comunicação entre sistemas e serviços.</p>

          <div className={styles.cardsContainer}>
            {apis.map((item) => (
              <CardItem key={item.nome} nome={item.nome} href={item.href} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1>Banco de Dados</h1>
          <p>Tecnologias de armazenamento e consulta de dados.</p>

          <div className={styles.cardsContainer}>
            {banco.map((item) => (
              <CardItem key={item.nome} nome={item.nome} href={item.href} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}