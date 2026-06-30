import Navbar from "../../../components/Navbar";
import styles from "../bancoDados.module.css";

export default function PostgreSqlPage() {
  return (
    <div className={`${styles.page} ${styles.postgresql}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>PostgreSQL</h1>

          <p>
            PostgreSQL é um sistema gerenciador de banco de dados relacional de
            código aberto, conhecido por sua robustez, segurança e suporte a
            recursos avançados.
          </p>

          <p>
            Ele é muito usado em aplicações web, APIs, sistemas corporativos,
            plataformas financeiras e projetos que precisam de alta
            confiabilidade.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Open Source</span>
            <span className={styles.card}>SQL</span>
            <span className={styles.card}>Transações</span>
            <span className={styles.card}>Extensível</span>
            <span className={styles.card}>Seguro</span>
            <span className={styles.card}>Robusto</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Banco relacional</h2>

          <pre className={styles.codeBlock}>
            <code>{`Banco de Dados
↓
Tabelas
↓
Colunas
↓
Linhas / Registros`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Criando banco e tabela</h2>

          <pre className={styles.codeBlock}>
            <code>{`CREATE DATABASE empresa;

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(150)
);`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>CRUD básico</h2>

          <pre className={styles.codeBlock}>
            <code>{`INSERT INTO clientes (nome, email)
VALUES ('Maria', 'maria@email.com');

SELECT *
FROM clientes;

UPDATE clientes
SET nome = 'Maria Silva'
WHERE id = 1;

DELETE FROM clientes
WHERE id = 1;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Tipos comuns</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>INTEGER</span>
            <span className={styles.card}>SERIAL</span>
            <span className={styles.card}>VARCHAR</span>
            <span className={styles.card}>TEXT</span>
            <span className={styles.card}>BOOLEAN</span>
            <span className={styles.card}>DATE</span>
            <span className={styles.card}>TIMESTAMP</span>
            <span className={styles.card}>JSONB</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Chaves e relacionamentos</h2>

          <pre className={styles.codeBlock}>
            <code>{`CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(id),
    valor NUMERIC(10,2)
);`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>JOINS</h2>

          <pre className={styles.codeBlock}>
            <code>{`SELECT clientes.nome, pedidos.valor
FROM clientes
INNER JOIN pedidos
ON clientes.id = pedidos.cliente_id;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Índices</h2>

          <p>
            Índices melhoram o desempenho de consultas em colunas muito usadas
            em filtros, ordenações e relacionamentos.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`CREATE INDEX idx_clientes_email
ON clientes(email);`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>PostgreSQL x MySQL</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>PostgreSQL</th>
                <th>MySQL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mais forte em recursos avançados.</td>
                <td>Mais simples para iniciar.</td>
              </tr>

              <tr>
                <td>Excelente para sistemas complexos.</td>
                <td>Muito usado em aplicações web tradicionais.</td>
              </tr>

              <tr>
                <td>Suporte poderoso a JSONB e extensões.</td>
                <td>Grande popularidade e fácil hospedagem.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Gratuito e Open Source.</li>
            <li>Alta confiabilidade.</li>
            <li>Boa conformidade com SQL.</li>
            <li>Suporte a transações robustas.</li>
            <li>Ótimo para sistemas grandes e críticos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Curva de aprendizado um pouco maior.</li>
            <li>Configurações avançadas podem ser complexas.</li>
            <li>Exige boa modelagem para aproveitar todo o potencial.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            PostgreSQL é um banco relacional poderoso, seguro e extensível. Ele
            é uma ótima escolha para aplicações que precisam de consistência,
            recursos avançados e confiabilidade no armazenamento de dados.
          </p>
        </section>
      </main>
    </div>
  );
}