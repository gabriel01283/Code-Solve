import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function SveltePage() {
  return (
    <div className={`${styles.page} ${styles.svelte}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Svelte</h1>

          <p>
            Svelte é um framework JavaScript moderno usado para criar interfaces
            web rápidas, leves e reativas.
          </p>

          <p>
            Diferente de React e Vue, o Svelte faz grande parte do trabalho
            durante a compilação, gerando JavaScript otimizado para o navegador.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Componente Svelte
↓
Compilação
↓
JavaScript otimizado
↓
Navegador
↓
Interface atualizada`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Reatividade nativa</span>
            <span className={styles.card}>Menos código</span>
            <span className={styles.card}>Sem Virtual DOM</span>
            <span className={styles.card}>Alta performance</span>
            <span className={styles.card}>Componentes</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Exemplo básico</h2>

          <pre className={styles.codeBlock}>
            <code>{`<script>
  let contador = 0;
</script>

<button on:click={() => contador++}>
  Cliques: {contador}
</button>`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Criando um projeto</h2>

          <pre className={styles.codeBlock}>
            <code>{`npm create vite@latest

# selecione Svelte

npm install

npm run dev`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Gera aplicações leves.</li>
            <li>Possui sintaxe simples.</li>
            <li>Tem ótima performance.</li>
            <li>Escreve menos código para criar interatividade.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Comunidade menor que React.</li>
            <li>Menos vagas no mercado em comparação com React e Angular.</li>
            <li>Ecossistema menor, apesar de estar crescendo.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Svelte é uma ótima opção para criar interfaces rápidas e modernas,
            reduzindo a quantidade de código executado no navegador e
            simplificando a escrita de componentes.
          </p>
        </section>
      </main>
    </div>
  );
}