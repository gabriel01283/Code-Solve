import Navbar from "../../../components/Navbar";
import styles from "../bancoDados.module.css";

export default function SqlPage() {
  return (
    <div className={`${styles.page} ${styles.sql}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>SQL</h1>

          <p>
            SQL (Structured Query Language) é a linguagem padrão utilizada para
            criar, consultar, modificar e administrar bancos de dados
            relacionais.
          </p>

          <p>
            Atualmente ela é utilizada por diversos SGBDs, como MySQL,
            PostgreSQL, SQL Server, Oracle e SQLite.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Para que serve?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Criar bancos</span>
            <span className={styles.card}>Criar tabelas</span>
            <span className={styles.card}>Inserir dados</span>
            <span className={styles.card}>Consultar informações</span>
            <span className={styles.card}>Atualizar registros</span>
            <span className={styles.card}>Excluir dados</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Aplicação
      ↓
Comando SQL
      ↓
Banco de Dados
      ↓
Resultado`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Principais comandos</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Comando</th>
                <th>Função</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>SELECT</td>
                <td>Consulta dados.</td>
              </tr>

              <tr>
                <td>INSERT</td>
                <td>Insere registros.</td>
              </tr>

              <tr>
                <td>UPDATE</td>
                <td>Atualiza registros.</td>
              </tr>

              <tr>
                <td>DELETE</td>
                <td>Remove registros.</td>
              </tr>

              <tr>
                <td>CREATE</td>
                <td>Cria objetos no banco.</td>
              </tr>

              <tr>
                <td>ALTER</td>
                <td>Modifica estruturas.</td>
              </tr>

              <tr>
                <td>DROP</td>
                <td>Remove tabelas ou bancos.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Criando uma tabela</h2>

          <pre className={styles.codeBlock}>
            <code>{`CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(150)
);`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Inserindo dados</h2>

          <pre className={styles.codeBlock}>
            <code>{`INSERT INTO usuarios (id, nome, email)
VALUES (1, 'Gabriel', 'gabriel@email.com');`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Consultando dados</h2>

          <pre className={styles.codeBlock}>
            <code>{`SELECT *
FROM usuarios;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Filtrando resultados</h2>

          <pre className={styles.codeBlock}>
            <code>{`SELECT nome, email
FROM usuarios
WHERE id = 1;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Atualizando registros</h2>

          <pre className={styles.codeBlock}>
            <code>{`UPDATE usuarios
SET nome = 'Carlos'
WHERE id = 1;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Removendo registros</h2>

          <pre className={styles.codeBlock}>
            <code>{`DELETE FROM usuarios
WHERE id = 1;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Categorias da SQL</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>DDL</span>
            <span className={styles.card}>DML</span>
            <span className={styles.card}>DQL</span>
            <span className={styles.card}>DCL</span>
            <span className={styles.card}>TCL</span>
          </div>

          <ul>
            <li><strong>DDL:</strong> CREATE, ALTER, DROP.</li>
            <li><strong>DML:</strong> INSERT, UPDATE, DELETE.</li>
            <li><strong>DQL:</strong> SELECT.</li>
            <li><strong>DCL:</strong> GRANT e REVOKE.</li>
            <li><strong>TCL:</strong> COMMIT, ROLLBACK e SAVEPOINT.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Padronizada internacionalmente.</li>
            <li>Fácil de aprender.</li>
            <li>Alta compatibilidade entre bancos relacionais.</li>
            <li>Excelente desempenho para consultas estruturadas.</li>
            <li>Grande adoção no mercado.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Não é ideal para todos os tipos de dados.</li>
            <li>Bancos relacionais exigem estrutura bem definida.</li>
            <li>Escalabilidade horizontal pode ser mais complexa.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            SQL é a principal linguagem para manipulação de bancos de dados
            relacionais. Ela permite criar estruturas, armazenar informações,
            realizar consultas e administrar dados de forma eficiente, sendo uma
            das habilidades mais importantes para qualquer desenvolvedor.
          </p>
        </section>
      </main>
    </div>
  );
}