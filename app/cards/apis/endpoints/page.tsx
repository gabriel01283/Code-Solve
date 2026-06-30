import Navbar from "../../../components/Navbar";
import styles from "../apis.module.css";

export default function EndpointsPage() {
  return (
    <div className={`${styles.page} ${styles.endpoints}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Endpoints</h1>

          <p>
            Um endpoint é um ponto de acesso de uma API. É por meio dele que o
            cliente envia requisições para criar, consultar, atualizar ou remover
            informações.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Estrutura de um endpoint</h2>

          <pre className={styles.codeBlock}>
            <code>{`GET https://api.loja.com/produtos/15`}</code>
          </pre>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Parte</th>
                <th>Função</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>GET</td>
                <td>Método HTTP.</td>
              </tr>
              <tr>
                <td>https://api.loja.com</td>
                <td>Servidor da API.</td>
              </tr>
              <tr>
                <td>/produtos</td>
                <td>Recurso acessado.</td>
              </tr>
              <tr>
                <td>/15</td>
                <td>Identificador do recurso.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Exemplos</h2>

          <pre className={styles.codeBlock}>
            <code>{`GET /usuarios
GET /usuarios/5
POST /usuarios
PUT /usuarios/5
PATCH /usuarios/5
DELETE /usuarios/5`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Rotas estáticas e dinâmicas</h2>

          <pre className={styles.codeBlock}>
            <code>{`/produtos
/clientes
/categorias

/usuarios/:id
/produtos/:id
/pedidos/:id`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Boas práticas</h2>

          <ul>
            <li>Use substantivos nas URLs.</li>
            <li>Evite verbos no endpoint.</li>
            <li>Use nomes claros.</li>
            <li>Mantenha padrão em toda a API.</li>
            <li>Use plural para coleções.</li>
          </ul>

          <pre className={styles.codeBlock}>
            <code>{`Correto:
/usuarios
/produtos
/pedidos

Evite:
/buscarUsuarios
/cadastrarProduto
/removerPedido`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Endpoints são os endereços que permitem acessar recursos de uma API.
            Quando bem organizados, deixam a API mais clara, previsível e fácil
            de manter.
          </p>
        </section>
      </main>
    </div>
  );
}