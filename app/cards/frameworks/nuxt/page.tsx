import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function NuxtPage() {
  return (
    <div className={`${styles.page} ${styles.nuxt}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Nuxt.js</h1>

          <p>
            Nuxt.js é um framework baseado em Vue.js que facilita o
            desenvolvimento de aplicações web modernas, oferecendo uma estrutura
            pronta, otimizações automáticas e recursos para aplicações
            full-stack.
          </p>

          <p>
            Assim como o Next.js faz para o React, o Nuxt amplia o Vue com
            roteamento automático, renderização no servidor, geração de sites
            estáticos e muito mais.
          </p>
        </section>

        <section className={styles.section}>
          <h2>O que é o Nuxt?</h2>

          <p>
            O Nuxt organiza automaticamente a estrutura do projeto, reduzindo a
            quantidade de configuração necessária para começar um novo sistema.
          </p>

          <p>
            Ele também melhora SEO, desempenho e experiência de desenvolvimento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Baseado em Vue</span>
            <span className={styles.card}>SSR</span>
            <span className={styles.card}>SSG</span>
            <span className={styles.card}>Auto Routing</span>
            <span className={styles.card}>Layouts</span>
            <span className={styles.card}>Server API</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Roteamento automático</h2>

          <p>
            Cada arquivo criado dentro da pasta <strong>pages</strong> gera uma
            rota automaticamente.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`pages/
├── index.vue
├── sobre.vue
└── contato.vue

/
/sobre
/contato`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Layouts</h2>

          <p>
            Layouts permitem compartilhar menus, cabeçalhos, rodapés e outras
            partes comuns entre várias páginas.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`layouts/
default.vue

pages/
index.vue
perfil.vue`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>SSR</h2>

          <p>
            No Server Side Rendering, o HTML é gerado no servidor antes de ser
            enviado ao navegador.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Usuário
↓
Servidor
↓
HTML pronto
↓
Navegador`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>SSG</h2>

          <p>
            Na geração estática, as páginas são produzidas durante o build e
            entregues rapidamente ao usuário.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Server API</h2>

          <p>
            O Nuxt permite criar APIs diretamente dentro do projeto utilizando a
            pasta <strong>server/api</strong>.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`server/
└── api/
    └── users.ts`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Como criar um projeto</h2>

          <pre className={styles.codeBlock}>
            <code>{`npx nuxi@latest init projeto

cd projeto

npm install

npm run dev`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`app.vue
pages/
components/
layouts/
server/
assets/
public/
nuxt.config.ts`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Nuxt x Vue</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Vue</th>
                <th>Nuxt</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Framework progressivo.</td>
                <td>Framework baseado em Vue.</td>
              </tr>

              <tr>
                <td>Precisa configurar rotas.</td>
                <td>Rotas automáticas.</td>
              </tr>

              <tr>
                <td>SPA por padrão.</td>
                <td>SSR, SSG e SPA.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Excelente SEO.</li>
            <li>Estrutura organizada.</li>
            <li>Ótima performance.</li>
            <li>Renderização híbrida.</li>
            <li>Integração completa com Vue.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Mais complexo que Vue puro.</li>
            <li>Alguns recursos exigem conhecimento de SSR.</li>
            <li>Pode ser excessivo para aplicações pequenas.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Onde é utilizado?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Blogs</span>
            <span className={styles.card}>Portais</span>
            <span className={styles.card}>E-commerce</span>
            <span className={styles.card}>Dashboards</span>
            <span className={styles.card}>Sistemas Web</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Nuxt.js é um framework moderno baseado em Vue que facilita o
            desenvolvimento de aplicações escaláveis, rápidas e preparadas para
            SEO, oferecendo uma estrutura pronta e diversos recursos nativos.
          </p>
        </section>
      </main>
    </div>
  );
}