import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function HttpMethodsPage() {
  return (
    <div className={`${styles.page} ${styles.httpMethods}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>HTTP Methods</h1>

          <p>
            HTTP Methods são comandos usados em requisições para indicar ao
            servidor qual operação deve ser realizada sobre um recurso.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais métodos</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Método</th>
                <th>Função</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>GET</td>
                <td>Consultar dados.</td>
              </tr>
              <tr>
                <td>POST</td>
                <td>Criar recursos.</td>
              </tr>
              <tr>
                <td>PUT</td>
                <td>Atualizar completamente um recurso.</td>
              </tr>
              <tr>
                <td>PATCH</td>
                <td>Atualizar parcialmente um recurso.</td>
              </tr>
              <tr>
                <td>DELETE</td>
                <td>Remover recursos.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Exemplos</h2>

          <pre className={styles.codeBlock}>
            <code>{`GET /usuarios
POST /usuarios
PUT /usuarios/1
PATCH /usuarios/1
DELETE /usuarios/1`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Relação com CRUD</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Create → POST</span>
            <span className={styles.card}>Read → GET</span>
            <span className={styles.card}>Update → PUT/PATCH</span>
            <span className={styles.card}>Delete → DELETE</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Os métodos HTTP padronizam a comunicação entre cliente e servidor,
            deixando claro se a requisição quer consultar, criar, atualizar ou
            excluir um recurso.
          </p>
        </section>
      </main>
    </div>
  );
}