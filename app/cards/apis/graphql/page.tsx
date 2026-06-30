import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function GraphQLPage() {
  return (
    <div className={`${styles.page} ${styles.graphql}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>GraphQL</h1>

          <p>
            GraphQL é uma linguagem de consulta para APIs e também uma tecnologia
            para execução dessas consultas. Foi desenvolvida pelo Facebook para
            tornar a comunicação entre cliente e servidor mais eficiente.
          </p>

          <p>
            Diferente de uma API REST, onde normalmente existem vários
            endpoints, uma API GraphQL geralmente possui apenas um endpoint,
            permitindo que o cliente escolha exatamente quais dados deseja
            receber.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Cliente
    ↓
Consulta GraphQL
    ↓
Servidor
    ↓
Resposta apenas com os dados solicitados`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>REST x GraphQL</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>REST</th>
                <th>GraphQL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Vários endpoints.</td>
                <td>Normalmente um único endpoint.</td>
              </tr>

              <tr>
                <td>Resposta fixa.</td>
                <td>Cliente escolhe os campos.</td>
              </tr>

              <tr>
                <td>Pode enviar dados em excesso.</td>
                <td>Retorna apenas o necessário.</td>
              </tr>

              <tr>
                <td>Mais simples para APIs pequenas.</td>
                <td>Excelente para consultas complexas.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Exemplo de consulta</h2>

          <pre className={styles.codeBlock}>
            <code>{`query {
  usuario(id: 1) {
    nome
    email
  }
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Resposta</h2>

          <pre className={styles.codeBlock}>
            <code>{`{
  "data": {
    "usuario": {
      "nome": "Gabriel",
      "email": "gabriel@email.com"
    }
  }
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Mutations</h2>

          <p>
            Enquanto as queries consultam dados, as mutations servem para criar,
            atualizar ou remover informações.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`mutation {
  criarUsuario(
    nome: "Gabriel"
    email: "gabriel@email.com"
  ) {
    id
    nome
  }
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Principais vantagens</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Menos requisições</span>
            <span className={styles.card}>Mais flexível</span>
            <span className={styles.card}>Consulta personalizada</span>
            <span className={styles.card}>Melhor desempenho</span>
            <span className={styles.card}>Tipagem forte</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Curva de aprendizado maior.</li>
            <li>Cache mais complexo que REST.</li>
            <li>Pode ser excessivo para APIs simples.</li>
            <li>Exige maior planejamento da estrutura.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Onde é utilizado?</h2>

          <ul>
            <li>Aplicações SPA.</li>
            <li>Aplicações mobile.</li>
            <li>Dashboards.</li>
            <li>Grandes plataformas web.</li>
            <li>Sistemas com muitos relacionamentos entre dados.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            GraphQL oferece uma forma flexível de consumir APIs, permitindo que
            o cliente solicite apenas os dados necessários. Isso reduz tráfego,
            melhora o desempenho em muitos cenários e facilita consultas
            complexas.
          </p>
        </section>
      </main>
    </div>
  );
}