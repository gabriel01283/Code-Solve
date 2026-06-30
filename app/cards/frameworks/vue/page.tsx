import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function VuePage() {
  return (
    <div className={`${styles.page} ${styles.vue}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Vue.js</h1>

          <p>
            Vue.js é um framework JavaScript progressivo utilizado para construir
            interfaces de usuário e aplicações web modernas.
          </p>

          <p>
            Ele é conhecido por sua simplicidade, curva de aprendizado suave e
            ótima organização baseada em componentes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>O que é Vue?</h2>

          <p>
            Vue é uma tecnologia front-end que ajuda a criar interfaces
            interativas. Ele pode ser usado em pequenas partes de uma página ou
            em aplicações completas.
          </p>

          <p>
            Por ser progressivo, o Vue permite começar de forma simples e
            adicionar recursos mais avançados conforme o projeto cresce.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Componentes</span>
            <span className={styles.card}>Reatividade</span>
            <span className={styles.card}>Diretivas</span>
            <span className={styles.card}>Single File Components</span>
            <span className={styles.card}>Vue Router</span>
            <span className={styles.card}>Pinia</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Componentes</h2>

          <p>
            Assim como React e Angular, o Vue organiza a interface em
            componentes reutilizáveis.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Aplicação
↓
Página
↓
Componentes
↓
Elementos da interface`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Single File Component</h2>

          <p>
            No Vue, é comum criar componentes em arquivos <strong>.vue</strong>,
            reunindo template, script e estilo no mesmo arquivo.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`<template>
  <h1>{{ titulo }}</h1>
</template>

<script setup>
const titulo = "Olá Vue";
</script>

<style scoped>
h1 {
  color: #42b883;
}
</style>`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Reatividade</h2>

          <p>
            A reatividade permite que a interface seja atualizada
            automaticamente quando os dados mudam.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`<script setup>
import { ref } from "vue";

const contador = ref(0);
</script>

<template>
  <button @click="contador++">
    Cliques: {{ contador }}
  </button>
</template>`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Diretivas</h2>

          <p>
            Diretivas são recursos especiais do Vue usados diretamente no
            template para controlar comportamento e renderização.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>v-if</span>
            <span className={styles.card}>v-for</span>
            <span className={styles.card}>v-model</span>
            <span className={styles.card}>v-bind</span>
            <span className={styles.card}>v-on</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Exemplo com v-if</h2>

          <pre className={styles.codeBlock}>
            <code>{`<template>
  <p v-if="logado">Usuário logado</p>
  <p v-else>Usuário visitante</p>
</template>`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Exemplo com v-for</h2>

          <pre className={styles.codeBlock}>
            <code>{`<template>
  <ul>
    <li v-for="item in itens" :key="item.id">
      {{ item.nome }}
    </li>
  </ul>
</template>`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Vue Router</h2>

          <p>
            Vue Router é a biblioteca oficial para criação de rotas em
            aplicações Vue.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`/
 /sobre
 /perfil
 /dashboard`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Pinia</h2>

          <p>
            Pinia é a biblioteca oficial recomendada para gerenciamento de estado
            em aplicações Vue modernas.
          </p>

          <p>
            Ela permite compartilhar informações entre diferentes componentes de
            forma organizada.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Como criar um projeto Vue</h2>

          <pre className={styles.codeBlock}>
            <code>{`npm create vue@latest

npm install

npm run dev`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`src/
├── assets/
├── components/
├── App.vue
└── main.js

public/
package.json`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Vue x React x Angular</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tecnologia</th>
                <th>Característica</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Vue</td>
                <td>Framework progressivo, simples e flexível.</td>
              </tr>

              <tr>
                <td>React</td>
                <td>Biblioteca focada em interfaces.</td>
              </tr>

              <tr>
                <td>Angular</td>
                <td>Framework completo e mais estruturado.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Curva de aprendizado amigável.</li>
            <li>Boa documentação.</li>
            <li>Ótima organização com componentes.</li>
            <li>Reatividade simples de entender.</li>
            <li>Funciona bem para projetos pequenos e grandes.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Menor mercado que React em algumas regiões.</li>
            <li>Projetos grandes ainda exigem boa arquitetura.</li>
            <li>Algumas decisões dependem do ecossistema escolhido.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Onde o Vue é usado?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Dashboards</span>
            <span className={styles.card}>Sistemas administrativos</span>
            <span className={styles.card}>SPAs</span>
            <span className={styles.card}>Sites interativos</span>
            <span className={styles.card}>Painéis internos</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Vue.js é um framework progressivo, simples e poderoso para criar
            interfaces modernas. Sua reatividade, componentização e organização
            tornam o desenvolvimento front-end mais produtivo e acessível.
          </p>
        </section>
      </main>
    </div>
  );
}