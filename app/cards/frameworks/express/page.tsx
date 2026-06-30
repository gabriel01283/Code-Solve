import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function ExpressPage() {
  return (
    <div className={`${styles.page} ${styles.express}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Express.js</h1>

          <p>
            Express.js é um framework web para Node.js usado para criar
            aplicações back-end, APIs REST e servidores HTTP de forma simples e
            flexível.
          </p>

          <p>
            Ele é muito utilizado por quem desenvolve com JavaScript no
            back-end, principalmente por ser leve, rápido e fácil de configurar.
          </p>
        </section>

        <section className={styles.section}>
          <h2>O que é Express?</h2>

          <p>
            Express é uma camada construída sobre o Node.js para facilitar o
            trabalho com rotas, requisições, respostas, middlewares e integração
            com bancos de dados.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Rotas</span>
            <span className={styles.card}>Middlewares</span>
            <span className={styles.card}>APIs REST</span>
            <span className={styles.card}>Node.js</span>
            <span className={styles.card}>Flexibilidade</span>
            <span className={styles.card}>Leveza</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Como funciona?</h2>

          <pre className={styles.codeBlock}>
            <code>{`Cliente
↓
Requisição HTTP
↓
Servidor Express
↓
Rota
↓
Controller
↓
Resposta`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Instalando o Express</h2>

          <pre className={styles.codeBlock}>
            <code>{`npm init -y

npm install express`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Primeiro servidor</h2>

          <pre className={styles.codeBlock}>
            <code>{`const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Rotas</h2>

          <p>
            Rotas definem qual código será executado quando determinada URL for
            acessada.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`app.get("/usuarios", (req, res) => {
  res.json(["Ana", "Carlos", "Maria"]);
});

app.post("/usuarios", (req, res) => {
  res.json({ message: "Usuário criado" });
});`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Métodos HTTP</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>GET</span>
            <span className={styles.card}>POST</span>
            <span className={styles.card}>PUT</span>
            <span className={styles.card}>PATCH</span>
            <span className={styles.card}>DELETE</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Middlewares</h2>

          <p>
            Middlewares são funções executadas entre a requisição e a resposta.
            Eles podem validar dados, autenticar usuários, registrar logs ou
            tratar erros.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`meu-projeto/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── server.js
├── package.json
└── .env`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Express x Node.js</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tecnologia</th>
                <th>Função</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Node.js</td>
                <td>Ambiente que executa JavaScript fora do navegador.</td>
              </tr>

              <tr>
                <td>Express.js</td>
                <td>Framework usado para criar servidores e APIs com Node.js.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Simples de aprender.</li>
            <li>Leve e flexível.</li>
            <li>Ótimo para APIs REST.</li>
            <li>Grande ecossistema npm.</li>
            <li>Funciona bem com bancos SQL e NoSQL.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Não impõe uma arquitetura padrão.</li>
            <li>Projetos grandes exigem boa organização.</li>
            <li>Muitas funcionalidades precisam de bibliotecas externas.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Onde é usado?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>APIs REST</span>
            <span className={styles.card}>Back-end Web</span>
            <span className={styles.card}>Microserviços</span>
            <span className={styles.card}>Sistemas em tempo real</span>
            <span className={styles.card}>Aplicações Node.js</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Express.js é uma das ferramentas mais populares para criar
            back-ends com Node.js. Ele oferece simplicidade, flexibilidade e uma
            base poderosa para construir APIs e aplicações web.
          </p>
        </section>
      </main>
    </div>
  );
}