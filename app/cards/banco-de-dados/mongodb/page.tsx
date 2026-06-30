import Navbar from "../../../components/Navbar";
import styles from "../bancoDados.module.css";

export default function MongoDbPage() {
  return (
    <div className={`${styles.page} ${styles.mongodb}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>MongoDB</h1>

          <p>
            MongoDB é um banco de dados NoSQL orientado a documentos. Em vez de
            usar tabelas e linhas, ele organiza os dados em coleções e
            documentos.
          </p>

          <p>
            Ele é muito usado em aplicações modernas que precisam de
            flexibilidade, escalabilidade e armazenamento de dados em formato
            parecido com JSON.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Conceitos principais</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Database</span>
            <span className={styles.card}>Collection</span>
            <span className={styles.card}>Document</span>
            <span className={styles.card}>BSON</span>
            <span className={styles.card}>Indexes</span>
            <span className={styles.card}>Aggregation</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Documento</h2>

          <pre className={styles.codeBlock}>
            <code>{`{
  "_id": 1,
  "nome": "Maria",
  "idade": 22,
  "cidade": "Recife"
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>CRUD básico</h2>

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
          <h2>Consultas com filtros</h2>

          <pre className={styles.codeBlock}>
            <code>{`db.clientes.find({ nome: "Maria" });

db.clientes.find({ idade: { $gt: 18 } });

db.clientes.find({ idade: { $lt: 30 } });`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Operadores comuns</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>$eq</span>
            <span className={styles.card}>$ne</span>
            <span className={styles.card}>$gt</span>
            <span className={styles.card}>$gte</span>
            <span className={styles.card}>$lt</span>
            <span className={styles.card}>$lte</span>
            <span className={styles.card}>$and</span>
            <span className={styles.card}>$or</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Índices</h2>

          <p>
            Índices melhoram o desempenho de consultas em campos muito
            pesquisados.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`db.clientes.createIndex({
  email: 1
});

db.clientes.getIndexes();`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Aggregation</h2>

          <p>
            Aggregation permite processar, agrupar, filtrar e transformar dados
            dentro do MongoDB.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`db.vendas.aggregate([
  {
    $group: {
      _id: null,
      total: { $sum: "$valor" }
    }
  }
]);`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>MongoDB x SQL</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>MongoDB</th>
                <th>Banco Relacional</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Coleções e documentos.</td>
                <td>Tabelas, linhas e colunas.</td>
              </tr>

              <tr>
                <td>Schema flexível.</td>
                <td>Schema mais rígido.</td>
              </tr>

              <tr>
                <td>Bom para dados semiestruturados.</td>
                <td>Bom para dados altamente relacionais.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            MongoDB é um banco NoSQL poderoso para aplicações que precisam
            armazenar dados flexíveis em documentos. Ele é ótimo para sistemas
            modernos, APIs, aplicações escaláveis e cenários onde o modelo
            relacional tradicional pode ser rígido demais.
          </p>
        </section>
      </main>
    </div>
  );
}