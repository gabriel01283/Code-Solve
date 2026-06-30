import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function JsonPage() {
  return (
    <div className={`${styles.page} ${styles.json}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>JSON</h1>

          <p>
            JSON (JavaScript Object Notation) é um formato leve de troca de
            dados, utilizado para enviar e receber informações entre sistemas,
            APIs, aplicações web e bancos de dados.
          </p>

          <p>
            Apesar do nome fazer referência ao JavaScript, JSON é independente
            de linguagem e pode ser utilizado em praticamente qualquer
            tecnologia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`{
  "nome": "Gabriel",
  "idade": 21,
  "ativo": true
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Tipos de dados</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>String</span>
            <span className={styles.card}>Number</span>
            <span className={styles.card}>Boolean</span>
            <span className={styles.card}>Array</span>
            <span className={styles.card}>Object</span>
            <span className={styles.card}>null</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Objeto</h2>

          <pre className={styles.codeBlock}>
            <code>{`{
  "nome": "Notebook",
  "preco": 4500,
  "estoque": 15
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Array</h2>

          <pre className={styles.codeBlock}>
            <code>{`{
  "linguagens": [
    "Java",
    "Python",
    "C++",
    "JavaScript"
  ]
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Objeto dentro de objeto</h2>

          <pre className={styles.codeBlock}>
            <code>{`{
  "usuario": {
    "nome": "Gabriel",
    "email": "gabriel@email.com"
  }
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Resposta de uma API</h2>

          <pre className={styles.codeBlock}>
            <code>{`{
  "id": 5,
  "nome": "Mouse Gamer",
  "preco": 199.90,
  "disponivel": true
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Boas práticas</h2>

          <ul>
            <li>Utilize nomes de propriedades claros.</li>
            <li>Mantenha a estrutura organizada.</li>
            <li>Evite informações desnecessárias.</li>
            <li>Utilize arrays quando houver listas.</li>
            <li>Padronize a nomenclatura das chaves.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>JSON x XML</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>JSON</th>
                <th>XML</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mais simples.</td>
                <td>Mais verboso.</td>
              </tr>

              <tr>
                <td>Mais leve.</td>
                <td>Mais pesado.</td>
              </tr>

              <tr>
                <td>Fácil de ler.</td>
                <td>Estrutura mais extensa.</td>
              </tr>

              <tr>
                <td>Muito usado em APIs REST.</td>
                <td>Mais comum em sistemas antigos.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            JSON é o formato de dados mais utilizado em APIs modernas. Sua
            simplicidade, leveza e compatibilidade fazem dele a principal forma
            de comunicação entre aplicações.
          </p>
        </section>
      </main>
    </div>
  );
}