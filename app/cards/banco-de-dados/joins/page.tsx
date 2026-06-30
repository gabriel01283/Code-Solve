import Navbar from "../../../components/Navbar";
import styles from "../bancoDados.module.css";

export default function JoinsPage() {
  return (
    <div className={`${styles.page} ${styles.joins}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>JOINS</h1>

          <p>
            JOIN é uma operação usada em bancos relacionais para combinar dados
            de duas ou mais tabelas em uma única consulta.
          </p>

          <p>
            Normalmente os relacionamentos acontecem por meio de chaves
            primárias e chaves estrangeiras.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Exemplo de tabelas</h2>

          <pre className={styles.codeBlock}>
            <code>{`clientes

id | nome
1  | Maria
2  | João
3  | Ana

pedidos

id | cliente_id | valor
1  | 1          | 250
2  | 2          | 500
3  | 1          | 150`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>INNER JOIN</h2>

          <p>
            Retorna apenas os registros que possuem correspondência nas duas
            tabelas.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`SELECT clientes.nome, pedidos.valor
FROM clientes
INNER JOIN pedidos
ON clientes.id = pedidos.cliente_id;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>LEFT JOIN</h2>

          <p>
            Retorna todos os registros da tabela da esquerda, mesmo quando não
            existe correspondência na tabela da direita.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`SELECT clientes.nome, pedidos.valor
FROM clientes
LEFT JOIN pedidos
ON clientes.id = pedidos.cliente_id;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>RIGHT JOIN</h2>

          <p>
            Retorna todos os registros da tabela da direita, mesmo quando não
            existe correspondência na tabela da esquerda.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`SELECT clientes.nome, pedidos.valor
FROM clientes
RIGHT JOIN pedidos
ON clientes.id = pedidos.cliente_id;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>FULL JOIN</h2>

          <p>
            Retorna todos os registros das duas tabelas, existindo ou não
            correspondência entre elas.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`SELECT clientes.nome, pedidos.valor
FROM clientes
FULL JOIN pedidos
ON clientes.id = pedidos.cliente_id;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>CROSS JOIN</h2>

          <p>
            Gera o produto cartesiano entre duas tabelas, combinando cada linha
            da primeira tabela com cada linha da segunda.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`SELECT *
FROM cores
CROSS JOIN tamanhos;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>SELF JOIN</h2>

          <p>
            Acontece quando uma tabela é relacionada com ela mesma, muito comum
            em estruturas hierárquicas.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`SELECT f.nome, g.nome AS gerente
FROM funcionarios f
LEFT JOIN funcionarios g
ON f.gerente_id = g.id;`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Resumo dos tipos</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>JOIN</th>
                <th>Resultado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>INNER JOIN</td>
                <td>Apenas registros com correspondência.</td>
              </tr>

              <tr>
                <td>LEFT JOIN</td>
                <td>Todos da esquerda e correspondências da direita.</td>
              </tr>

              <tr>
                <td>RIGHT JOIN</td>
                <td>Todos da direita e correspondências da esquerda.</td>
              </tr>

              <tr>
                <td>FULL JOIN</td>
                <td>Todos os registros das duas tabelas.</td>
              </tr>

              <tr>
                <td>CROSS JOIN</td>
                <td>Produto cartesiano.</td>
              </tr>

              <tr>
                <td>SELF JOIN</td>
                <td>Tabela relacionada com ela mesma.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Boas práticas</h2>

          <ul>
            <li>Use aliases para deixar a consulta mais limpa.</li>
            <li>Evite JOINs desnecessários.</li>
            <li>Crie índices em chaves usadas nos relacionamentos.</li>
            <li>Confira se a condição do ON está correta.</li>
            <li>Teste o resultado antes de usar em produção.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            JOINS são essenciais para trabalhar com bancos relacionais. Eles
            permitem combinar informações de várias tabelas e montar consultas
            mais completas, organizadas e úteis.
          </p>
        </section>
      </main>
    </div>
  );
}