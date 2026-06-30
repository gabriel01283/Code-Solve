import Navbar from "../../../components/Navbar";
import styles from "../bancoDados.module.css";

export default function MysqlPage() {
  return (
    <div className={`${styles.page} ${styles.mysql}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>MySQL</h1>

          <p>
            MySQL é um sistema gerenciador de banco de dados relacional usado
            para armazenar, organizar e consultar informações através da
            linguagem SQL.
          </p>

          <p>
            Ele é muito utilizado em sites, sistemas web, APIs, lojas virtuais e
            aplicações que precisam guardar dados estruturados.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Banco relacional</span>
            <span className={styles.card}>SQL</span>
            <span className={styles.card}>Open Source</span>
            <span className={styles.card}>Alta performance</span>
            <span className={styles.card}>Grande comunidade</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Conceitos básicos</h2>

          <ul>
            <li><strong>Banco de dados:</strong> conjunto organizado de informações.</li>
            <li><strong>Tabela:</strong> estrutura formada por linhas e colunas.</li>
            <li><strong>Registro:</strong> cada linha da tabela.</li>
            <li><strong>Campo:</strong> cada coluna da tabela.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Exemplo de tabela</h2>

          <pre className={styles.codeBlock}>
            <code>{`CLIENTES

ID | NOME    | EMAIL
1  | Maria   | maria@email.com
2  | Gabriel | gabriel@email.com`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Criando banco e tabela</h2>

          <pre className={styles.codeBlock}>
            <code>{`CREATE DATABASE loja;

USE loja;

CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(150)
);`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>CRUD básico</h2>

          <pre className={styles.codeBlock}>
            <code>{`INSERT INTO clientes (id, nome, email)
VALUES (1, 'Maria', 'maria@email.com');

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
          <h2>Chaves</h2>

          <p>
            Chaves são usadas para identificar registros e criar relacionamentos
            entre tabelas.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Primary Key</span>
            <span className={styles.card}>Foreign Key</span>
            <span className={styles.card}>Unique</span>
            <span className={styles.card}>Index</span>
          </div>

          <pre className={styles.codeBlock}>
            <code>{`CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    valor DECIMAL(10,2),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
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
            Índices ajudam a acelerar consultas em colunas muito pesquisadas.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`CREATE INDEX idx_nome
ON clientes(nome);`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>MySQL x PostgreSQL</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>MySQL</th>
                <th>PostgreSQL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mais simples para começar.</td>
                <td>Mais robusto para recursos avançados.</td>
              </tr>

              <tr>
                <td>Muito usado em aplicações web.</td>
                <td>Muito usado em sistemas complexos.</td>
              </tr>

              <tr>
                <td>Popular em hospedagens tradicionais.</td>
                <td>Forte em integridade e extensibilidade.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Fácil de aprender.</li>
            <li>Muito popular no mercado.</li>
            <li>Boa performance.</li>
            <li>Grande comunidade.</li>
            <li>Integração com várias linguagens.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Alguns recursos avançados são mais fortes no PostgreSQL.</li>
            <li>Projetos grandes exigem boa modelagem.</li>
            <li>Consultas mal otimizadas podem perder desempenho.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            MySQL é um dos bancos relacionais mais usados do mundo. Ele é uma
            ótima escolha para aplicações web, APIs e sistemas que precisam
            armazenar dados estruturados usando SQL.
          </p>
        </section>
      </main>
    </div>
  );
}