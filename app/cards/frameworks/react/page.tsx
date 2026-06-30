import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function ReactPage() {
  return (
    <div className={`${styles.page} ${styles.react}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>React</h1>

          <p>
            React é uma biblioteca JavaScript utilizada para construir interfaces
            de usuário modernas, interativas e reutilizáveis. Ela é muito usada
            no desenvolvimento front-end, principalmente em aplicações web
            dinâmicas.
          </p>

          <p>
            Seu principal objetivo é facilitar a criação de componentes, que são
            partes independentes da interface, como botões, menus, cards,
            formulários e páginas completas.
          </p>
        </section>

        <section className={styles.section}>
          <h2>O que é React?</h2>

          <p>
            React é uma biblioteca focada na camada visual da aplicação. Ele não
            define sozinho toda a estrutura de um projeto, mas oferece uma forma
            eficiente de criar telas a partir de componentes.
          </p>

          <p>
            Por isso, é comum usar React junto com outras ferramentas, como
            roteadores, bibliotecas de requisição, gerenciadores de estado e
            frameworks como Next.js.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Componentização</span>
            <span className={styles.card}>JSX</span>
            <span className={styles.card}>Props</span>
            <span className={styles.card}>Estado</span>
            <span className={styles.card}>Hooks</span>
            <span className={styles.card}>Virtual DOM</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Arquitetura baseada em componentes</h2>

          <p>
            No React, a interface é dividida em pequenos blocos reutilizáveis.
            Cada componente pode receber dados, ter comportamento próprio e ser
            reutilizado em várias partes do sistema.
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
          <h2>JSX</h2>

          <p>
            JSX é uma sintaxe que permite escrever uma estrutura parecida com
            HTML dentro do JavaScript. Ele deixa a criação de interfaces mais
            intuitiva.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`function Saudacao() {
  return <h1>Olá, React!</h1>;
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Componentes</h2>

          <p>
            Um componente é uma função que retorna uma parte da interface. Ele
            pode ser simples, como um botão, ou mais complexo, como uma página
            inteira.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`function Botao() {
  return <button>Clique aqui</button>;
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Props</h2>

          <p>
            Props são dados enviados de um componente pai para um componente
            filho. Elas permitem reutilizar o mesmo componente com informações
            diferentes.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`function Usuario({ nome }) {
  return <p>Bem-vindo, {nome}</p>;
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estado</h2>

          <p>
            Estado representa informações que podem mudar durante o uso da
            aplicação. Quando o estado muda, o React atualiza a interface.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
      Cliques: {contador}
    </button>
  );
}`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Hooks</h2>

          <p>
            Hooks são funções especiais do React que permitem usar recursos como
            estado, efeitos e contexto dentro de componentes funcionais.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>useState</span>
            <span className={styles.card}>useEffect</span>
            <span className={styles.card}>useContext</span>
            <span className={styles.card}>useRef</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Virtual DOM</h2>

          <p>
            O Virtual DOM é uma representação em memória da interface. Quando
            algo muda, o React compara a versão antiga com a nova e atualiza
            apenas o necessário no DOM real.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Estado muda
↓
React atualiza o Virtual DOM
↓
React compara diferenças
↓
DOM real é atualizado`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Como criar um projeto React</h2>

          <p>
            Uma forma comum de criar projetos React atualmente é utilizando o
            Vite.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`npm create vite@latest

npm install

npm run dev`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`src/
├── components/
├── assets/
├── App.jsx
└── main.jsx

public/
package.json`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Facilita a criação de interfaces reutilizáveis.</li>
            <li>Possui grande comunidade e ecossistema.</li>
            <li>É muito usado no mercado.</li>
            <li>Ajuda a organizar aplicações grandes.</li>
            <li>Funciona bem com TypeScript e Next.js.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Não é um framework completo por si só.</li>
            <li>Pode exigir várias bibliotecas externas.</li>
            <li>O ecossistema muda rápido.</li>
            <li>Iniciantes podem se confundir com estados, hooks e props.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Onde o React é usado?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Dashboards</span>
            <span className={styles.card}>E-commerce</span>
            <span className={styles.card}>Redes sociais</span>
            <span className={styles.card}>Sistemas internos</span>
            <span className={styles.card}>SPAs</span>
            <span className={styles.card}>Interfaces administrativas</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>React x Next.js</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tecnologia</th>
                <th>Função principal</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>React</td>
                <td>Biblioteca para construir interfaces.</td>
              </tr>

              <tr>
                <td>Next.js</td>
                <td>Framework baseado em React com rotas, SSR, SSG e otimizações.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            React é uma das principais tecnologias do front-end moderno. Ele
            facilita a criação de interfaces por meio de componentes, estados,
            props e hooks, sendo uma base importante para frameworks como
            Next.js.
          </p>
        </section>
      </main>
    </div>
  );
}