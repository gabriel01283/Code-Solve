import Navbar from "../../../components/Navbar";
import styles from "../bancoDados.module.css";

export default function NoSqlPage() {
  return (
    <div className={`${styles.page} ${styles.nosql}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>NoSQL</h1>

          <p>
            NoSQL significa "Not Only SQL". É uma categoria de bancos de dados
            criada para lidar com dados flexíveis, grandes volumes de informação
            e aplicações que precisam escalar com facilidade.
          </p>

          <p>
            Diferente dos bancos relacionais, bancos NoSQL não dependem
            obrigatoriamente de tabelas fixas com linhas e colunas.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Por que surgiu?</h2>

          <p>
            O NoSQL ganhou força com aplicações modernas como redes sociais,
            sistemas distribuídos, Big Data, plataformas em tempo real e
            aplicações com grande volume de usuários.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Escalabilidade</span>
            <span className={styles.card}>Schema flexível</span>
            <span className={styles.card}>Alta performance</span>
            <span className={styles.card}>Dados distribuídos</span>
            <span className={styles.card}>Alta disponibilidade</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>SQL x NoSQL</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>SQL</th>
                <th>NoSQL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tabelas, linhas e colunas.</td>
                <td>Documentos, chave-valor, grafos ou colunas.</td>
              </tr>

              <tr>
                <td>Schema mais rígido.</td>
                <td>Schema mais flexível.</td>
              </tr>

              <tr>
                <td>JOINs são comuns.</td>
                <td>Dados podem ser embutidos ou referenciados.</td>
              </tr>

              <tr>
                <td>Escala vertical com frequência.</td>
                <td>Escala horizontal com mais facilidade.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Tipos de bancos NoSQL</h2>

          <ul>
            <li><strong>Documentos:</strong> armazenam dados em JSON/BSON, como MongoDB.</li>
            <li><strong>Chave-valor:</strong> armazenam pares de chave e valor, como Redis.</li>
            <li><strong>Colunar:</strong> organizam dados por famílias de colunas, como Cassandra.</li>
            <li><strong>Grafos:</strong> focam em relacionamentos complexos, como Neo4j.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Exemplo de documento</h2>

          <pre className={styles.codeBlock}>
            <code>{`{
  "_id": 1,
  "nome": "Maria",
  "idade": 22,
  "cidade": "Recife",
  "interesses": ["Python", "Banco de Dados"]
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>CRUD em banco documental</h2>

          <pre className={styles.codeBlock}>
            <code>{`db.clientes.insertOne({
  nome: "Maria",
  idade: 22
});

db.clientes.find();

db.clientes.updateOne(
  { nome: "Maria" },
  { $set: { idade: 23 } }
);

db.clientes.deleteOne({
  nome: "Maria"
});`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Quando usar NoSQL?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Dados flexíveis</span>
            <span className={styles.card}>Alto volume</span>
            <span className={styles.card}>Tempo real</span>
            <span className={styles.card}>Escala horizontal</span>
            <span className={styles.card}>Protótipos rápidos</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Maior flexibilidade na estrutura dos dados.</li>
            <li>Boa escalabilidade horizontal.</li>
            <li>Alta performance em cenários específicos.</li>
            <li>Boa adaptação a dados não estruturados ou semiestruturados.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Nem sempre substitui bancos relacionais.</li>
            <li>Modelagem errada pode gerar dados duplicados demais.</li>
            <li>Consultas complexas podem ser mais difíceis dependendo do banco.</li>
            <li>Consistência e relacionamento precisam ser bem planejados.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Bancos NoSQL são excelentes para aplicações que precisam de
            flexibilidade, escalabilidade e desempenho em cenários modernos.
            Eles não substituem SQL em tudo, mas são ferramentas poderosas
            quando usados no problema certo.
          </p>
        </section>
      </main>
    </div>
  );
}