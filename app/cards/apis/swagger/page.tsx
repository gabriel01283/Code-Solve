import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function SwaggerPage() {
  return (
    <div className={`${styles.page} ${styles.swagger}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Swagger</h1>

          <p>
            Swagger é um conjunto de ferramentas utilizado para documentar,
            testar e visualizar APIs de forma interativa. Atualmente ele faz
            parte da especificação OpenAPI.
          </p>

          <p>
            Com o Swagger é possível visualizar todos os endpoints de uma API,
            seus parâmetros, respostas esperadas e até realizar testes
            diretamente pelo navegador.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Para que serve?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Documentação</span>
            <span className={styles.card}>Testes</span>
            <span className={styles.card}>Exploração da API</span>
            <span className={styles.card}>OpenAPI</span>
            <span className={styles.card}>Integração</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Código da API
      ↓
OpenAPI
      ↓
Swagger UI
      ↓
Documentação interativa`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Exemplo</h2>

          <pre className={styles.codeBlock}>
            <code>{`GET /usuarios

POST /usuarios

DELETE /usuarios/{id}`}</code>
          </pre>

          <p>
            Cada endpoint aparece com seus parâmetros, exemplos de requisição,
            respostas e códigos HTTP possíveis.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Exemplo com FastAPI</h2>

          <pre className={styles.codeBlock}>
            <code>{`from fastapi import FastAPI

app = FastAPI()`}</code>
          </pre>

          <p>
            Apenas criando a aplicação, o FastAPI já gera automaticamente a
            documentação Swagger.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Rotas da documentação</h2>

          <pre className={styles.codeBlock}>
            <code>{`/docs

/redoc

/openapi.json`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Informações exibidas</h2>

          <ul>
            <li>Endpoints.</li>
            <li>Métodos HTTP.</li>
            <li>Parâmetros.</li>
            <li>Corpo da requisição.</li>
            <li>Respostas possíveis.</li>
            <li>Códigos HTTP.</li>
            <li>Modelos de dados.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Documentação automática.</li>
            <li>Facilita testes.</li>
            <li>Melhora a comunicação entre equipes.</li>
            <li>Reduz erros de integração.</li>
            <li>Interface simples e intuitiva.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Swagger x ReDoc</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Swagger UI</th>
                <th>ReDoc</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Interativo.</td>
                <td>Mais focado em documentação.</td>
              </tr>

              <tr>
                <td>Permite testar endpoints.</td>
                <td>Visual mais limpo.</td>
              </tr>

              <tr>
                <td>Ideal para desenvolvimento.</td>
                <td>Ideal para leitura da documentação.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Swagger facilita o desenvolvimento e o consumo de APIs ao gerar uma
            documentação interativa automaticamente. Ele é amplamente utilizado
            em projetos modernos e possui excelente integração com frameworks
            como FastAPI, Spring Boot e NestJS.
          </p>
        </section>
      </main>
    </div>
  );
}