import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function RateLimitPage() {
  return (
    <div className={`${styles.page} ${styles.rateLimit}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Rate Limit</h1>

          <p>
            Rate Limit é um mecanismo utilizado para limitar a quantidade de
            requisições que um cliente pode fazer para uma API em um determinado
            período de tempo.
          </p>

          <p>
            Seu principal objetivo é proteger o servidor contra abusos,
            sobrecarga e ataques automatizados, garantindo estabilidade para
            todos os usuários.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Cliente
     ↓
100 requisições por minuto
     ↓
API

✔ Até 100 → Permitido
✖ Acima de 100 → Bloqueado (429)`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Por que utilizar?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Evitar sobrecarga</span>
            <span className={styles.card}>Proteger a API</span>
            <span className={styles.card}>Reduzir ataques</span>
            <span className={styles.card}>Uso justo</span>
            <span className={styles.card}>Controlar custos</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Exemplo</h2>

          <p>
            Imagine que uma API permita apenas <strong>60 requisições por
            minuto</strong>.
          </p>

          <ul>
            <li>Primeiras 60 requisições → aceitas.</li>
            <li>61ª requisição → recusada.</li>
            <li>Após o tempo expirar → o contador é reiniciado.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Status HTTP 429</h2>

          <p>
            Quando o limite é excedido, normalmente a API responde com o código:
          </p>

          <pre className={styles.codeBlock}>
            <code>{`HTTP/1.1 429 Too Many Requests`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Headers comuns</h2>

          <pre className={styles.codeBlock}>
            <code>{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 35
X-RateLimit-Reset: 1712345678`}</code>
          </pre>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Header</th>
                <th>Descrição</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>X-RateLimit-Limit</td>
                <td>Quantidade máxima de requisições.</td>
              </tr>

              <tr>
                <td>X-RateLimit-Remaining</td>
                <td>Requisições ainda disponíveis.</td>
              </tr>

              <tr>
                <td>X-RateLimit-Reset</td>
                <td>Momento em que o limite será reiniciado.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Estratégias de limitação</h2>

          <ul>
            <li>Por endereço IP.</li>
            <li>Por usuário autenticado.</li>
            <li>Por chave de API (API Key).</li>
            <li>Por plano de assinatura.</li>
            <li>Por endpoint específico.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Boas práticas</h2>

          <ul>
            <li>Informe claramente os limites da API.</li>
            <li>Utilize respostas HTTP apropriadas.</li>
            <li>Retorne headers com informações do limite.</li>
            <li>Implemente limites diferentes para usuários premium.</li>
            <li>Monitore tentativas de abuso.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Rate Limit é uma técnica fundamental para proteger APIs e garantir
            disponibilidade. Ao limitar a quantidade de requisições por cliente,
            é possível evitar sobrecarga, reduzir ataques e oferecer um serviço
            mais estável para todos os usuários.
          </p>
        </section>
      </main>
    </div>
  );
}