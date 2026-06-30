import Navbar from "../../../components/Navbar";
import styles from "../gitGithub.module.css";

export default function FluxoDeDesenvolvimentoPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Fluxo de Desenvolvimento</h1>

          <p>
            Fluxo de desenvolvimento é o conjunto de etapas que uma equipe segue
            para planejar, desenvolver, testar e entregar software.
          </p>

          <p>
            Um fluxo bem definido aumenta a produtividade, reduz erros e melhora
            a organização do projeto.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Objetivos</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Organizar o trabalho</span>
            <span className={styles.card}>Melhorar colaboração</span>
            <span className={styles.card}>Reduzir conflitos</span>
            <span className={styles.card}>Garantir qualidade</span>
            <span className={styles.card}>Facilitar manutenção</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Ciclo Básico</h2>

          <pre className={styles.codeBlock}>
            <code>{`Planejamento
↓
Análise
↓
Desenvolvimento
↓
Testes
↓
Deploy
↓
Manutenção`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Requisitos</h2>

          <p>
            Requisitos são necessidades e funcionalidades que o sistema deve
            atender.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Funcionais</span>
            <span className={styles.card}>Não funcionais</span>
          </div>

          <pre className={styles.codeBlock}>
            <code>{`RF01
Usuário deve realizar login.

RF02
Usuário deve recuperar senha.`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Planejamento</h2>

          <p>
            Após definir os requisitos, as tarefas devem ser divididas entre os
            membros da equipe.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Backlog
↓
Em Desenvolvimento
↓
Em Teste
↓
Concluído`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Configuração Inicial</h2>

          <p>O projeto deve ser armazenado em um repositório Git.</p>

          <pre className={styles.codeBlock}>
            <code>{`git init

git add .

git commit -m "chore: projeto inicial"

git remote add origin URL

git push -u origin main`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Organização das Branches</h2>

          <pre className={styles.codeBlock}>
            <code>{`main
develop
feature/login
feature/cadastro
feature/dashboard
hotfix/login`}</code>
          </pre>

          <ul>
            <li>
              <strong>Main</strong> — produção.
            </li>
            <li>
              <strong>Develop</strong> — desenvolvimento.
            </li>
            <li>
              <strong>Feature</strong> — funcionalidades.
            </li>
            <li>
              <strong>Hotfix</strong> — correções urgentes.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Fluxo da Feature</h2>

          <pre className={styles.codeBlock}>
            <code>{`git checkout develop

git pull origin develop

git checkout -b feature/login`}</code>
          </pre>

          <p>
            A funcionalidade é implementada de forma isolada sem impactar o
            restante do sistema.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Commits Frequentes</h2>

          <p>
            Pequenas alterações devem ser registradas através de commits
            organizados.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`feat: cria tela de login
feat: adiciona validação
fix: corrige autenticação
test: adiciona testes`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Validação da Funcionalidade</h2>

          <p>
            Antes do envio ao repositório remoto, o código deve ser testado.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Unitários</span>
            <span className={styles.card}>Integração</span>
            <span className={styles.card}>Funcionais</span>
            <span className={styles.card}>E2E</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Enviar Alterações</h2>

          <pre className={styles.codeBlock}>
            <code>{`git add .

git commit -m "feat: finaliza login"

git push origin feature/login`}</code>
          </pre>

          <p>O objetivo é compartilhar as alterações com o restante da equipe.</p>
        </section>

        <section className={styles.section}>
          <h2>Pull Request</h2>

          <p>
            Após concluir a funcionalidade, deve-se abrir um Pull Request para
            revisão.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`feature/login
↓
Pull Request
↓
develop`}</code>
          </pre>

          <ul>
            <li>Objetivo da tarefa.</li>
            <li>Alterações realizadas.</li>
            <li>Como testar.</li>
            <li>Possíveis impactos.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Revisão de Código</h2>

          <p>Outro desenvolvedor analisa o código antes do merge.</p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Qualidade</span>
            <span className={styles.card}>Legibilidade</span>
            <span className={styles.card}>Performance</span>
            <span className={styles.card}>Segurança</span>
            <span className={styles.card}>Padrões do projeto</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Deploy</h2>

          <p>
            Deploy é o processo de disponibilizar a aplicação em ambiente de
            produção.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`develop
↓
release
↓
main
↓
Produção`}</code>
          </pre>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Manual</span>
            <span className={styles.card}>Automático</span>
            <span className={styles.card}>CI/CD</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Fluxo Completo</h2>

          <pre className={styles.codeBlock}>
            <code>{`Requisito
↓
Task
↓
Branch
↓
Desenvolvimento
↓
Commit
↓
Teste
↓
Push
↓
Pull Request
↓
Code Review
↓
Merge
↓
Deploy
↓
Produção`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Conclusão</h2>

          <p>
            O fluxo de desenvolvimento define como uma equipe transforma
            requisitos em software funcional.
          </p>

          <p>
            A utilização correta de Git, GitHub, branches, commits, Pull
            Requests, testes e deploy garante organização, qualidade e segurança
            durante todo o ciclo de desenvolvimento.
          </p>
        </section>
      </main>
    </div>
  );
}