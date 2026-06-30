import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function NextPage() {
  return (
    <div className={`${styles.page} ${styles.next}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Next.js</h1>

          <p>
            Next.js é um framework baseado em React utilizado para criar
            aplicações web modernas, performáticas e escaláveis.
          </p>

          <p>
            Ele adiciona recursos importantes ao React, como roteamento
            automático, renderização no servidor, geração de páginas estáticas,
            otimização de imagens e suporte para aplicações full stack.
          </p>
        </section>

        <section className={styles.section}>
          <h2>O que é Next.js?</h2>

          <p>
            Next.js é uma ferramenta que facilita o desenvolvimento de aplicações
            React completas. Enquanto o React cuida principalmente da interface,
            o Next.js fornece uma estrutura pronta para organizar páginas,
            rotas, layouts, carregamento de dados e deploy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>App Router</span>
            <span className={styles.card}>Server Components</span>
            <span className={styles.card}>Client Components</span>
            <span className={styles.card}>SSR</span>
            <span className={styles.card}>SSG</span>
            <span className={styles.card}>API Routes</span>
            <span className={styles.card}>Otimização de imagens</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Roteamento automático</h2>

          <p>
            No Next.js, as rotas são criadas com base na estrutura de pastas.
            Cada pasta dentro de <strong>app</strong> pode representar uma rota,
            desde que tenha um arquivo <strong>page.tsx</strong>.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`app/
├── page.tsx
├── sobre/
│   └── page.tsx
└── perfil/
    └── page.tsx

/        → Home
/sobre   → Sobre
/perfil  → Perfil`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Layouts</h2>

          <p>
            Layouts permitem criar estruturas reutilizáveis entre páginas, como
            cabeçalhos, menus, rodapés e containers principais.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`app/
├── layout.tsx
├── page.tsx
└── dashboard/
    ├── layout.tsx
    └── page.tsx`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Server Components</h2>

          <p>
            Por padrão, componentes no App Router são executados no servidor.
            Isso ajuda a reduzir JavaScript enviado para o navegador e melhora o
            desempenho da aplicação.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Client Components</h2>

          <p>
            Quando um componente precisa de interatividade no navegador, como
            estado, eventos ou acesso ao localStorage, usamos a diretiva{" "}
            <strong>"use client"</strong>.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`"use client";

import { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <button onClick={() => setValor(valor + 1)}>
      Cliques: {valor}
    </button>
  );
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>SSR</h2>

          <p>
            SSR significa Server Side Rendering. Nesse modelo, a página é gerada
            no servidor no momento da requisição, o que pode melhorar SEO e
            carregamento inicial em alguns cenários.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Usuário acessa a página
↓
Servidor gera o HTML
↓
HTML é enviado ao navegador
↓
Página é exibida`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>SSG</h2>

          <p>
            SSG significa Static Site Generation. Nesse modelo, páginas são
            geradas durante o build e servidas como arquivos estáticos.
          </p>

          <p>
            É uma boa opção para páginas que não mudam com frequência, como
            documentação, blogs e páginas institucionais.
          </p>
        </section>

        <section className={styles.section}>
          <h2>API Routes</h2>

          <p>
            Next.js também permite criar rotas de API dentro do próprio projeto,
            possibilitando funcionalidades back-end simples.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`app/
└── api/
    └── users/
        └── route.ts`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Como criar um projeto Next.js</h2>

          <pre className={styles.codeBlock}>
            <code>{`npx create-next-app@latest

npm install

npm run dev`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`app/
├── layout.tsx
├── page.tsx
├── globals.css
└── components/

public/
package.json
next.config.ts
tsconfig.json`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Next.js x React</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tecnologia</th>
                <th>Descrição</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>React</td>
                <td>Biblioteca para construir interfaces.</td>
              </tr>

              <tr>
                <td>Next.js</td>
                <td>
                  Framework que adiciona rotas, renderização, otimização e
                  estrutura ao React.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Melhor organização de projeto.</li>
            <li>Roteamento automático.</li>
            <li>Boa performance.</li>
            <li>Melhor suporte a SEO.</li>
            <li>Otimização de imagens e fontes.</li>
            <li>Permite criar aplicações full stack.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Pode ser mais complexo para iniciantes.</li>
            <li>Exige entender diferenças entre cliente e servidor.</li>
            <li>Algumas configurações dependem do ambiente de deploy.</li>
            <li>Projetos simples podem não precisar de todos os recursos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Onde o Next.js é usado?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Sites institucionais</span>
            <span className={styles.card}>E-commerce</span>
            <span className={styles.card}>Blogs</span>
            <span className={styles.card}>Dashboards</span>
            <span className={styles.card}>Sistemas web</span>
            <span className={styles.card}>Aplicações full stack</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Next.js é um framework que amplia o poder do React, oferecendo
            estrutura, roteamento, renderização no servidor, geração estática,
            otimizações e recursos full stack para aplicações modernas.
          </p>
        </section>
      </main>
    </div>
  );
}