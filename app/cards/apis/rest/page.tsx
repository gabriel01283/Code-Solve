import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function RestPage() {
  return (
    <div className={`${styles.page} ${styles.rest}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>REST</h1>

          <p>
            REST é um estilo arquitetural usado para criar APIs simples,
            organizadas e escaláveis. Ele utiliza o protocolo HTTP para permitir
            a comunicação entre cliente e servidor.
          </p>

          <p>
            Em uma API REST, os dados são tratados como recursos, acessados por
            endpoints e manipulados por métodos HTTP.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Conceitos principais</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Cliente e servidor</span>
            <span className={styles.card}>Stateless</span>
            <span className={styles.card}>Recursos</span>
            <span className={styles.card}>Endpoints</span>
            <span className={styles.card}>Métodos HTTP</span>
            <span className={styles.card}>JSON</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Exemplo de recurso</h2>

          <pre className={styles.codeBlock}>
            <code>{`/usuarios
/produtos
/pedidos
/comentarios`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Métodos HTTP</h2>

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
                <td>Atualizar recurso inteiro.</td>
              </tr>
              <tr>
                <td>PATCH</td>
                <td>Atualizar parte de um recurso.</td>
              </tr>
              <tr>
                <td>DELETE</td>
                <td>Excluir recursos.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Exemplo de API REST</h2>

          <pre className={styles.codeBlock}>
            <code>{`GET /usuarios
POST /usuarios
GET /usuarios/1
PUT /usuarios/1
PATCH /usuarios/1
DELETE /usuarios/1`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Stateless</h2>

          <p>
            REST é stateless, ou seja, o servidor não guarda o estado da
            requisição anterior. Cada requisição precisa conter todas as
            informações necessárias para ser processada.
          </p>
        </section>

        <section className={styles.section}>
          <h2>REST x RESTful</h2>

          <p>
            REST é o estilo arquitetural. RESTful é o termo usado para uma API
            que segue bem os princípios REST.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            REST é uma das formas mais comuns de criar APIs. Ele organiza a
            comunicação usando recursos, endpoints, métodos HTTP e respostas
            geralmente em JSON.
          </p>
        </section>
      </main>
    </div>
  );
}