import Navbar from "../../../components/Navbar";
import styles from "../gitGithub.module.css";

export default function RevisaoDeCodigoPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Revisão de Código (Code Review)</h1>

          <p>
            A revisão de código é o processo em que outro desenvolvedor analisa
            as alterações realizadas antes que elas sejam integradas ao projeto.
          </p>

          <p>
            O objetivo não é apenas encontrar erros, mas também melhorar a
            qualidade do código, compartilhar conhecimento entre a equipe e
            garantir que os padrões do projeto sejam seguidos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Objetivos</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Encontrar erros</span>
            <span className={styles.card}>Melhorar qualidade</span>
            <span className={styles.card}>Padronizar código</span>
            <span className={styles.card}>Compartilhar conhecimento</span>
            <span className={styles.card}>Reduzir bugs</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Quando acontece?</h2>

          <p>
            Normalmente a revisão ocorre após o desenvolvedor concluir uma
            funcionalidade e abrir um Pull Request.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Desenvolvimento
↓
Commit
↓
Push
↓
Pull Request
↓
Code Review
↓
Merge`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>O que deve ser analisado?</h2>

          <ul>
            <li>Legibilidade do código.</li>
            <li>Organização dos arquivos.</li>
            <li>Lógica implementada.</li>
            <li>Possíveis bugs.</li>
            <li>Segurança.</li>
            <li>Performance.</li>
            <li>Padrões definidos pela equipe.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Exemplo</h2>

          <h2>Código ruim</h2>

          <pre className={styles.codeBlock}>
            <code>{`if(a==true){
x=1;
}`}</code>
          </pre>

          <h2>Código melhor</h2>

          <pre className={styles.codeBlock}>
            <code>{`if (isAuthenticated) {
    userLevel = 1;
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Boas práticas</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Seja respeitoso</span>
            <span className={styles.card}>Explique sugestões</span>
            <span className={styles.card}>Revise com atenção</span>
            <span className={styles.card}>Evite críticas pessoais</span>
            <span className={styles.card}>Mantenha objetividade</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Comentários úteis</h2>

          <pre className={styles.codeBlock}>
            <code>{`"Esse método pode ser dividido em funções menores."

"Essa variável poderia ter um nome mais descritivo."

"Existe risco de NullPointerException aqui."

"Essa consulta pode ser otimizada."`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>O que evitar</h2>

          <ul>
            <li>Comentários ofensivos.</li>
            <li>Críticas sem justificativa.</li>
            <li>Aprovar sem revisar.</li>
            <li>Alterar código sem compreender o contexto.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Benefícios</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Mais qualidade</span>
            <span className={styles.card}>Menos bugs</span>
            <span className={styles.card}>Padronização</span>
            <span className={styles.card}>Aprendizado</span>
            <span className={styles.card}>Maior segurança</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Conclusão</h2>

          <p>
            A revisão de código é uma etapa fundamental no desenvolvimento de
            software profissional. Ela aumenta a qualidade do projeto, facilita a
            manutenção do código e promove o compartilhamento de conhecimento
            entre os membros da equipe.
          </p>
        </section>
      </main>
    </div>
  );
}