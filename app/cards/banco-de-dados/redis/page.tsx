import Navbar from "../../../components/Navbar";
import styles from "../bancoDados.module.css";

export default function RedisPage() {
  return (
    <div className={`${styles.page} ${styles.redis}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Redis</h1>

          <p>
            Redis é um banco de dados NoSQL do tipo chave-valor que armazena
            dados principalmente em memória RAM. Isso faz com que ele seja
            extremamente rápido quando comparado aos bancos tradicionais.
          </p>

          <p>
            Ele é muito utilizado para cache, sessões de usuários, filas,
            rankings, contadores e armazenamento temporário de informações.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Chave-Valor</span>
            <span className={styles.card}>Em memória</span>
            <span className={styles.card}>Altíssima velocidade</span>
            <span className={styles.card}>Cache</span>
            <span className={styles.card}>Pub/Sub</span>
            <span className={styles.card}>Persistência opcional</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Aplicação
      ↓
Consulta Redis
      ↓
Resposta imediata

(se não existir)

      ↓
Banco principal
      ↓
Redis armazena o resultado
      ↓
Próximas consultas ficam muito mais rápidas`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura chave-valor</h2>

          <pre className={styles.codeBlock}>
            <code>{`usuario:1
↓

{
  "nome": "Gabriel",
  "idade": 21
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Comandos básicos</h2>

          <pre className={styles.codeBlock}>
            <code>{`SET usuario "Gabriel"

GET usuario

DEL usuario

EXISTS usuario`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Definindo tempo de expiração</h2>

          <pre className={styles.codeBlock}>
            <code>{`SET token "abc123"

EXPIRE token 300`}</code>
          </pre>

          <p>
            Nesse exemplo, a chave será removida automaticamente após
            <strong> 300 segundos</strong>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Estruturas suportadas</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Strings</span>
            <span className={styles.card}>Lists</span>
            <span className={styles.card}>Sets</span>
            <span className={styles.card}>Hashes</span>
            <span className={styles.card}>Sorted Sets</span>
            <span className={styles.card}>Streams</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Exemplo usando Hash</h2>

          <pre className={styles.codeBlock}>
            <code>{`HSET usuario:1
nome Gabriel
idade 21

HGETALL usuario:1`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Casos de uso</h2>

          <ul>
            <li>Cache de consultas.</li>
            <li>Autenticação e sessões.</li>
            <li>Filas de processamento.</li>
            <li>Chats em tempo real.</li>
            <li>Rankings e placares.</li>
            <li>Contadores de visualizações.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Redis x Banco Relacional</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Redis</th>
                <th>SQL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Dados em memória.</td>
                <td>Dados em disco.</td>
              </tr>

              <tr>
                <td>Extremamente rápido.</td>
                <td>Mais completo para armazenamento permanente.</td>
              </tr>

              <tr>
                <td>Ideal para cache.</td>
                <td>Ideal para persistência.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Altíssima velocidade.</li>
            <li>Baixa latência.</li>
            <li>Excelente para cache.</li>
            <li>Estruturas de dados variadas.</li>
            <li>Fácil integração com diversas linguagens.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Consome memória RAM.</li>
            <li>Não substitui bancos relacionais na maioria dos casos.</li>
            <li>Grandes volumes de dados podem exigir muita memória.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Redis é um banco NoSQL extremamente rápido, ideal para armazenar
            informações temporárias e acelerar aplicações através de cache,
            sessões e processamento em tempo real.
          </p>
        </section>
      </main>
    </div>
  );
}