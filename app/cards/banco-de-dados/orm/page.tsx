import Navbar from "../../../components/Navbar";
import styles from "../bancoDados.module.css";

export default function OrmPage() {
  return (
    <div className={`${styles.page} ${styles.orm}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>ORM</h1>

          <p>
            ORM significa Object Relational Mapping, ou Mapeamento Objeto
            Relacional. Ele permite trabalhar com bancos relacionais usando
            classes e objetos da linguagem de programação.
          </p>

          <p>
            Em vez de escrever SQL manualmente para tudo, o desenvolvedor
            manipula objetos, e o ORM traduz essas operações para comandos SQL.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Classe Usuario
↓
ORM
↓
Tabela usuarios
↓
Banco de Dados`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Exemplo conceitual</h2>

          <pre className={styles.codeBlock}>
            <code>{`class Usuario {
  Long id;
  String nome;
  String email;
}

Tabela usuarios:
id | nome | email`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Operações básicas</h2>

          <pre className={styles.codeBlock}>
            <code>{`repository.save(usuario);

repository.findById(1L);

repository.deleteById(1L);`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>ORMs populares</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Hibernate</span>
            <span className={styles.card}>JPA</span>
            <span className={styles.card}>Entity Framework</span>
            <span className={styles.card}>Sequelize</span>
            <span className={styles.card}>TypeORM</span>
            <span className={styles.card}>Prisma</span>
            <span className={styles.card}>SQLAlchemy</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Entity</h2>

          <p>
            Uma Entity representa uma tabela do banco de dados dentro da
            aplicação.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`@Entity
public class Usuario {

    @Id
    @GeneratedValue
    private Long id;

    private String nome;
    private String email;
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Relacionamentos</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>One To One</span>
            <span className={styles.card}>One To Many</span>
            <span className={styles.card}>Many To One</span>
            <span className={styles.card}>Many To Many</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>ORM x SQL manual</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>ORM</th>
                <th>SQL Manual</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mais produtivo.</td>
                <td>Mais controle direto.</td>
              </tr>

              <tr>
                <td>Trabalha com objetos.</td>
                <td>Trabalha com comandos SQL.</td>
              </tr>

              <tr>
                <td>Facilita CRUD simples.</td>
                <td>Melhor para consultas muito específicas.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Reduz repetição de SQL.</li>
            <li>Aumenta produtividade.</li>
            <li>Facilita operações CRUD.</li>
            <li>Ajuda a organizar entidades e relacionamentos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Pode gerar consultas ineficientes se usado sem cuidado.</li>
            <li>Abstrai detalhes importantes do banco.</li>
            <li>Consultas complexas ainda podem exigir SQL manual.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            ORM é uma técnica que facilita a comunicação entre aplicação e banco
            relacional, permitindo manipular dados usando objetos. Ele aumenta a
            produtividade, mas deve ser usado com atenção para não esconder
            problemas de desempenho.
          </p>
        </section>
      </main>
    </div>
  );
}