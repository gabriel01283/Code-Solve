import Navbar from "../../../components/Navbar";
import styles from "../frameworks.module.css";

export default function FlaskPage() {
  return (
    <div className={`${styles.page} ${styles.flask}`}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Flask</h1>

          <p>
            Flask é um microframework web desenvolvido em Python. Ele é usado
            para criar aplicações web, APIs REST, microsserviços e sistemas
            simples ou complexos.
          </p>

          <p>
            Por ser leve e flexível, o Flask entrega apenas a base principal da
            aplicação, deixando o desenvolvedor escolher bibliotecas adicionais
            conforme a necessidade do projeto.
          </p>
        </section>

        <section className={styles.section}>
          <h2>O que é um microframework?</h2>

          <p>
            Um microframework oferece os recursos essenciais para criar uma
            aplicação web, como rotas, requisições e respostas, mas não impõe
            uma estrutura completa como frameworks maiores.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Principais características</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Python</span>
            <span className={styles.card}>Rotas</span>
            <span className={styles.card}>APIs REST</span>
            <span className={styles.card}>Templates</span>
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
Flask
↓
Rota
↓
Função Python
↓
Resposta`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Instalação</h2>

          <pre className={styles.codeBlock}>
            <code>{`python -m venv venv

venv\\Scripts\\activate

pip install flask`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Primeira aplicação</h2>

          <pre className={styles.codeBlock}>
            <code>{`from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Olá, Flask!"

if __name__ == "__main__":
    app.run(debug=True)`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Rotas</h2>

          <p>
            Rotas definem qual função será executada quando determinada URL for
            acessada.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`@app.route("/")
def home():
    return "Página inicial"

@app.route("/sobre")
def sobre():
    return "Página sobre"`}</code>
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
          <h2>Retornando JSON</h2>

          <pre className={styles.codeBlock}>
            <code>{`from flask import jsonify

@app.route("/usuarios")
def usuarios():
    return jsonify([
        {"id": 1, "nome": "Ana"},
        {"id": 2, "nome": "Carlos"}
    ])`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Templates</h2>

          <p>
            Flask pode renderizar páginas HTML usando templates, geralmente com
            Jinja2.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`from flask import render_template

@app.route("/perfil")
def perfil():
    return render_template("perfil.html")`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Estrutura básica</h2>

          <pre className={styles.codeBlock}>
            <code>{`meu_projeto/
├── app.py
├── templates/
│   └── index.html
├── static/
│   └── style.css
└── requirements.txt`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Flask x Django x FastAPI</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Framework</th>
                <th>Característica</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Flask</td>
                <td>Leve, flexível e simples.</td>
              </tr>

              <tr>
                <td>Django</td>
                <td>Completo, estruturado e com muitos recursos prontos.</td>
              </tr>

              <tr>
                <td>FastAPI</td>
                <td>Focado em APIs modernas, rápidas e tipadas.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Vantagens</h2>

          <ul>
            <li>Fácil de aprender.</li>
            <li>Leve e flexível.</li>
            <li>Ótimo para APIs pequenas e médias.</li>
            <li>Permite escolher a arquitetura do projeto.</li>
            <li>Boa integração com bibliotecas Python.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Desvantagens</h2>

          <ul>
            <li>Não vem com tantos recursos prontos quanto Django.</li>
            <li>Projetos grandes exigem boa organização.</li>
            <li>Autenticação, ORM e validações precisam ser adicionados.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Onde é usado?</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>APIs REST</span>
            <span className={styles.card}>Microsserviços</span>
            <span className={styles.card}>Sistemas Web</span>
            <span className={styles.card}>Painéis internos</span>
            <span className={styles.card}>Protótipos rápidos</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Resumo</h2>

          <p>
            Flask é uma ótima opção para criar aplicações web e APIs com Python
            de forma simples e flexível. Ele é leve, direto e permite que o
            desenvolvedor escolha como estruturar o projeto.
          </p>
        </section>
      </main>
    </div>
  );
}