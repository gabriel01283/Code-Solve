import Navbar from "../../../components/Navbar";
import styles from "../gitGithub.module.css";

export default function RepositoriosPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Repositórios</h1>

          <p>
            Um repositório é o local onde os arquivos de um projeto são
            armazenados e versionados. Ele guarda o código, a documentação, as
            configurações e todo o histórico de alterações.
          </p>

          <p>
            Em projetos com Git e GitHub, o repositório é a base para organizar,
            acompanhar e compartilhar o desenvolvimento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Objetivos</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Armazenar código</span>
            <span className={styles.card}>Controlar versões</span>
            <span className={styles.card}>Facilitar colaboração</span>
            <span className={styles.card}>Registrar histórico</span>
            <span className={styles.card}>Gerenciar projetos</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Por que utilizar?</h2>

          <p>
            Repositórios permitem acompanhar toda a evolução de um software,
            recuperar versões anteriores e trabalhar em equipe com mais
            segurança.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Backup do projeto</span>
            <span className={styles.card}>Trabalho em equipe</span>
            <span className={styles.card}>Histórico de alterações</span>
            <span className={styles.card}>Recuperação de versões</span>
            <span className={styles.card}>Mais segurança</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Exemplo de estrutura</h2>

          <pre className={styles.codeBlock}>
            <code>{`meu-projeto/
├── src/
├── docs/
├── tests/
├── assets/
├── README.md
├── .gitignore
└── package.json`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Principais arquivos</h2>

          <ul>
            <li>
              <strong>README.md</strong> — documentação principal do projeto.
            </li>
            <li>
              <strong>.gitignore</strong> — define arquivos que não devem ser
              enviados ao Git.
            </li>
            <li>
              <strong>LICENSE</strong> — informa a licença do projeto.
            </li>
            <li>
              <strong>Arquivos fonte</strong> — código principal da aplicação.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Repositório Local</h2>

          <p>
            É o repositório armazenado na máquina do desenvolvedor. Ele é criado
            quando o Git começa a controlar uma pasta.
          </p>

          <pre className={styles.codeBlock}>
            <code>git init</code>
          </pre>

          <p>
            Esse comando cria a pasta oculta <strong>.git</strong>, onde fica o
            histórico do projeto.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Repositório Remoto</h2>

          <p>
            É um repositório hospedado em uma plataforma online, permitindo que
            outras pessoas acessem e colaborem no projeto.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>GitHub</span>
            <span className={styles.card}>GitLab</span>
            <span className={styles.card}>Bitbucket</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Criando um repositório no GitHub</h2>

          <ol>
            <li>Criar uma conta no GitHub.</li>
            <li>Clicar em New Repository.</li>
            <li>Definir o nome do repositório.</li>
            <li>Escolher se será público ou privado.</li>
            <li>Criar o repositório.</li>
          </ol>

          <pre className={styles.codeBlock}>
            <code>{`Repositório:
sistema-copa

Visibilidade:
Public`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Adicionar repositório remoto</h2>

          <pre className={styles.codeBlock}>
            <code>{`git remote add origin URL

git remote -v

git push -u origin main`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Clonar um repositório</h2>

          <p>
            Clonar significa copiar um repositório remoto para a máquina local.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`git clone URL

git clone https://github.com/usuario/projeto.git`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>README</h2>

          <p>
            O README é o documento principal do repositório. Ele apresenta o
            projeto para outras pessoas.
          </p>

          <ul>
            <li>Descrição do projeto.</li>
            <li>Tecnologias utilizadas.</li>
            <li>Instalação.</li>
            <li>Execução.</li>
            <li>Autores.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>.gitignore</h2>

          <p>
            O arquivo <strong>.gitignore</strong> informa quais arquivos não
            devem ser enviados ao Git.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`node_modules/
.env
dist/
build/
target/`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Público ou privado</h2>

          <ul>
            <li>
              <strong>Público</strong> — qualquer pessoa pode visualizar o
              código.
            </li>
            <li>
              <strong>Privado</strong> — apenas usuários autorizados podem
              acessar.
            </li>
          </ul>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Público: portfólio</span>
            <span className={styles.card}>Público: open source</span>
            <span className={styles.card}>Privado: projetos internos</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Trabalho em equipe</h2>

          <p>
            Vários desenvolvedores podem colaborar em um mesmo repositório
            utilizando recursos como branches, pull requests, issues e code
            review.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Branches</span>
            <span className={styles.card}>Pull Requests</span>
            <span className={styles.card}>Issues</span>
            <span className={styles.card}>Code Review</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Boas práticas</h2>

          <ul>
            <li>Utilizar README completo.</li>
            <li>Manter commits organizados.</li>
            <li>Usar branches.</li>
            <li>Atualizar documentação.</li>
            <li>Utilizar .gitignore.</li>
            <li>Evitar arquivos desnecessários.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Fluxo de trabalho</h2>

          <pre className={styles.codeBlock}>
            <code>{`Criar Repositório
↓
git init
↓
git add
↓
git commit
↓
git remote add origin
↓
git push
↓
Colaboração
↓
Pull Request
↓
Merge`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Conclusão</h2>

          <p>
            Repositórios são a base do controle de versão e da colaboração em
            projetos de software.
          </p>

          <p>
            Dominar o uso de repositórios é essencial para qualquer
            desenvolvedor que utilize Git, GitHub ou outras plataformas de
            versionamento.
          </p>
        </section>
      </main>
    </div>
  );
}