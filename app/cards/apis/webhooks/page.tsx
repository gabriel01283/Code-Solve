import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function WebhooksPage() {
  return (
    <div className={`${styles.page} ${styles.webhooks}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Webhooks</h1>

          <p>
            Webhooks são mecanismos que permitem que uma aplicação envie
            informações automaticamente para outra quando um determinado evento
            acontece.
          </p>

          <p>
            Diferente das APIs tradicionais, nas quais o cliente precisa ficar
            perguntando constantemente se houve alguma mudança, os Webhooks
            notificam a aplicação apenas quando o evento realmente ocorre.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Evento acontece
        ↓
Servidor detecta o evento
        ↓
Webhook envia uma requisição HTTP
        ↓
Aplicação recebe os dados automaticamente`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Exemplo prático</h2>

          <p>
            Imagine uma loja virtual integrada com um sistema de pagamentos.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Cliente realiza o pagamento
        ↓
Gateway confirma o pagamento
        ↓
Webhook envia os dados
        ↓
Loja atualiza o pedido automaticamente`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Exemplo de requisição</h2>

          <pre className={styles.codeBlock}>
            <code>{`POST /webhook

{
  "evento": "pagamento_aprovado",
  "pedido": 1548,
  "valor": 299.90
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Principais usos</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Pagamentos</span>
            <span className={styles.card}>GitHub</span>
            <span className={styles.card}>Discord</span>
            <span className={styles.card}>Slack</span>
            <span className={styles.card}>CI/CD</span>
            <span className={styles.card}>Notificações</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Webhook x API</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>API</th>
                <th>Webhook</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>O cliente faz a requisição.</td>
                <td>O servidor envia a requisição.</td>
              </tr>

              <tr>
                <td>Modelo de consulta (polling).</td>
                <td>Modelo baseado em eventos.</td>
              </tr>

              <tr>
                <td>Pode gerar muitas consultas desnecessárias.</td>
                <td>Envia informações somente quando necessário.</td>
              </tr>

              <tr>
                <td>Cliente inicia a comunicação.</td>
                <td>Servidor inicia a comunicação.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Cuidados de segurança</h2>

          <ul>
            <li>Validar a origem da requisição.</li>
            <li>Utilizar HTTPS.</li>
            <li>Verificar assinaturas (signatures) quando disponíveis.</li>
            <li>Tratar requisições duplicadas.</li>
            <li>Registrar logs para auditoria.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Comunicação em tempo real.</li>
            <li>Reduz consultas desnecessárias.</li>
            <li>Menor consumo de recursos.</li>
            <li>Integração simples entre sistemas.</li>
            <li>Automação de processos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Exigem um endpoint público para receber as requisições.</li>
            <li>Precisam de validação para evitar chamadas maliciosas.</li>
            <li>É necessário tratar falhas e tentativas de reenvio.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Webhooks permitem que sistemas se comuniquem automaticamente quando
            eventos acontecem. Eles são amplamente utilizados em integrações
            modernas, reduzindo consultas constantes e tornando aplicações mais
            rápidas e eficientes.
          </p>
        </section>
      </main>
    </div>
  );
}