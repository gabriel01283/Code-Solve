import Navbar from "../../../components/Navbar";
import styles from "../gitGithub.module.css";

export default function BoasPraticasPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Boas Práticas com Git e GitHub</h1>

          <p>
            Boas práticas são recomendações que ajudam equipes e desenvolvedores
            a manterem um histórico organizado, seguro e fácil de manter dentro
            dos projetos.
          </p>

          <p>
            Utilizar Git e GitHub corretamente reduz conflitos, facilita a
            colaboração e melhora a qualidade do código.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Objetivos</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Organização</span>
            <span className={styles.card}>Rastreabilidade</span>
            <span className={styles.card}>Segurança</span>
            <span className={styles.card}>Padronização</span>
            <span className={styles.card}>Colaboração</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Evite Trabalhar Diretamente na Main</h2>

          <p>
            A branch <strong>main</strong> deve conter apenas versões estáveis e
            prontas para produção.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`main
develop
feature/login
feature/cadastro
hotfix/correcao-login
release/v1.0`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Função de Cada Branch</h2>

          <ul>
            <li>
              <strong>main</strong> — versão estável ou produção.
            </li>
            <li>
              <strong>develop</strong> — área de desenvolvimento.
            </li>
            <li>
              <strong>feature</strong> — novas funcionalidades.
            </li>
            <li>
              <strong>release</strong> — preparação de versão.
            </li>
            <li>
              <strong>hotfix</strong> — correções urgentes.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Padronização de Branches</h2>

          <p>Utilize nomes claros e objetivos.</p>

          <h2>Bons exemplos</h2>

          <pre className={styles.codeBlock}>
            <code>{`feature/login
feature/cadastro-usuario
bugfix/erro-relatorio
hotfix/token-expirado
release/v2.0`}</code>
          </pre>

          <h2>Evite</h2>

          <pre className={styles.codeBlock}>
            <code>{`teste
nova
maria
alteracao1
coisa`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Importância dos Commits</h2>

          <p>
            O commit registra alterações realizadas no projeto. Um bom histórico
            permite entender rapidamente a evolução do sistema.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Claros</span>
            <span className={styles.card}>Objetivos</span>
            <span className={styles.card}>Pequenos</span>
            <span className={styles.card}>Específicos</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Conventional Commits</h2>

          <p>
            Conventional Commits é um padrão usado para escrever mensagens de
            commit de forma mais organizada.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`tipo: descrição`}</code>
          </pre>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>feat</span>
            <span className={styles.card}>fix</span>
            <span className={styles.card}>docs</span>
            <span className={styles.card}>refactor</span>
            <span className={styles.card}>test</span>
            <span className={styles.card}>style</span>
            <span className={styles.card}>chore</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Commits Corretos</h2>

          <pre className={styles.codeBlock}>
            <code>{`feat: adiciona tela de login
fix: corrige erro na autenticação
docs: atualiza README
refactor: melhora validação de usuário
test: adiciona testes do serviço`}</code>
          </pre>

          <h2>Commits Ruins</h2>

          <pre className={styles.codeBlock}>
            <code>{`teste
arrumei
mudança
ajuste
update`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Commite Pequenas Alterações</h2>

          <p>
            Não espere terminar todo o sistema para realizar commits. Commits
            menores são mais fáceis de revisar e corrigir.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Commit 1 → Tela Login
Commit 2 → Serviço Login
Commit 3 → Integração API
Commit 4 → Correção Bug`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Pull Request</h2>

          <p>
            Pull Request é uma solicitação para integrar alterações de uma branch
            para outra. Ele permite revisar e discutir o código antes do merge.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Code Review</span>
            <span className={styles.card}>Discussão técnica</span>
            <span className={styles.card}>Controle de qualidade</span>
            <span className={styles.card}>Menos bugs</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>O que revisar?</h2>

          <ul>
            <li>Lógica do código.</li>
            <li>Performance.</li>
            <li>Segurança.</li>
            <li>Legibilidade.</li>
            <li>Padrões do projeto.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Sincronização</h2>

          <p>
            Atualize sua branch regularmente para evitar conflitos com o código
            principal.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`git checkout main
git pull origin main
git checkout feature/login
git merge main`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Conflitos</h2>

          <p>
            Conflitos ocorrem quando duas pessoas alteram a mesma parte do
            código. Eles devem ser resolvidos com atenção antes do merge.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Comunicação</span>
            <span className={styles.card}>Pull frequente</span>
            <span className={styles.card}>Branches pequenas</span>
            <span className={styles.card}>Revisão cuidadosa</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>README e Documentação</h2>

          <p>
            Todo projeto deve ter um README com descrição, tecnologias,
            instalação, execução, autores e licença.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Nunca Envie Dados Sensíveis</h2>

          <ul>
            <li>Senhas.</li>
            <li>Tokens.</li>
            <li>Chaves de API.</li>
            <li>Credenciais de banco.</li>
          </ul>

          <pre className={styles.codeBlock}>
            <code>{`.env
node_modules
target
dist
build`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>GitHub Actions</h2>

          <p>
            GitHub Actions é uma ferramenta de automação integrada ao GitHub,
            muito usada para build, testes, deploy e análise de código.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Build automático</span>
            <span className={styles.card}>Testes automáticos</span>
            <span className={styles.card}>Deploy automático</span>
            <span className={styles.card}>Análise de código</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Fluxo Recomendado</h2>

          <pre className={styles.codeBlock}>
            <code>{`1. Atualizar main
git pull origin main

2. Criar branch
git checkout -b feature/login

3. Desenvolver

4. Commitar
git commit

5. Push
git push

6. Pull Request

7. Code Review

8. Merge`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Evite Estes Erros</h2>

          <ul>
            <li>Trabalhar diretamente na main.</li>
            <li>Commits sem descrição.</li>
            <li>Branches gigantes.</li>
            <li>Ignorar code review.</li>
            <li>Não atualizar branch.</li>
            <li>Enviar arquivos sensíveis.</li>
            <li>Fazer merge sem testar.</li>
            <li>Não documentar o projeto.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Conclusão</h2>

          <p>
            Git e GitHub não servem apenas para armazenar código, mas também para
            organizar o desenvolvimento de software.
          </p>

          <p>
            Seguir boas práticas como branches, commits padronizados, Pull
            Requests, Code Review, automação e segurança melhora a qualidade dos
            projetos e o trabalho em equipe.
          </p>
        </section>
      </main>
    </div>
  );
}