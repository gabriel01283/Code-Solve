import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function CrudPage() {
  return (
    <div className={`${styles.page} ${styles.crud}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>CRUD</h1>

          <p>
            CRUD é um conjunto de quatro operações fundamentais usadas para
            manipular dados em sistemas e APIs: Create, Read, Update e Delete.
          </p>

          <p>
            Essas operações aparecem em praticamente qualquer sistema que cria,
            consulta, altera ou remove informações.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Operações do CRUD</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Create</span>
            <span className={styles.card}>Read</span>
            <span className={styles.card}>Update</span>
            <span className={styles.card}>Delete</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>CRUD em APIs REST</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>CRUD</th>
                <th>Método HTTP</th>
                <th>Função</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Create</td>
                <td>POST</td>
                <td>Criar um novo recurso.</td>
              </tr>
              <tr>
                <td>Read</td>
                <td>GET</td>
                <td>Consultar recursos.</td>
              </tr>
              <tr>
                <td>Update</td>
                <td>PUT / PATCH</td>
                <td>Atualizar dados.</td>
              </tr>
              <tr>
                <td>Delete</td>
                <td>DELETE</td>
                <td>Excluir um recurso.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Exemplo com usuários</h2>

          <pre className={styles.codeBlock}>
            <code>{`POST /api/usuarios
GET /api/usuarios
GET /api/usuarios/1
PUT /api/usuarios/1
PATCH /api/usuarios/1
DELETE /api/usuarios/1`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Create</h2>

          <p>Cria um novo registro.</p>

          <pre className={styles.codeBlock}>
            <code>{`POST /api/produtos

{
  "nome": "Notebook",
  "preco": 3500
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Read</h2>

          <p>Consulta informações existentes.</p>

          <pre className={styles.codeBlock}>
            <code>{`GET /api/produtos

GET /api/produtos/5`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Update</h2>

          <p>Atualiza informações já cadastradas.</p>

          <pre className={styles.codeBlock}>
            <code>{`PUT /api/produtos/5

{
  "nome": "Notebook Gamer",
  "preco": 5200
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Delete</h2>

          <p>Remove um recurso existente.</p>

          <pre className={styles.codeBlock}>
            <code>{`DELETE /api/produtos/5`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            CRUD é a base da manipulação de dados em APIs. Entender essa relação
            com os métodos HTTP deixa o desenvolvimento de endpoints muito mais
            organizado.
          </p>
        </section>
      </main>
    </div>
  );
}