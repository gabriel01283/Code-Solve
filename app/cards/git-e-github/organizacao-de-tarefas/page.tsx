import Navbar from "../../../components/Navbar";
import styles from "../gitGithub.module.css";

export default function OrganizacaoDeTarefasPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Organização de Tarefas</h1>

          <p>
            Organizar tarefas é uma das etapas mais importantes durante o
            desenvolvimento de software. Uma equipe organizada consegue
            acompanhar o progresso do projeto, distribuir responsabilidades e
            entregar funcionalidades de forma mais eficiente.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Objetivos</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Planejamento</span>
            <span className={styles.card}>Organização</span>
            <span className={styles.card}>Produtividade</span>
            <span className={styles.card}>Controle</span>
            <span className={styles.card}>Colaboração</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>O que é uma tarefa?</h2>

          <p>
            Uma tarefa representa uma atividade que precisa ser realizada durante
            o desenvolvimento do projeto.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Exemplos:

• Criar tela de login
• Implementar cadastro
• Corrigir bug de autenticação
• Escrever documentação
• Criar testes`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Backlog</h2>

          <p>
            O backlog reúne todas as funcionalidades, melhorias e correções que
            ainda precisam ser desenvolvidas.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Funcionalidades</span>
            <span className={styles.card}>Melhorias</span>
            <span className={styles.card}>Correções</span>
            <span className={styles.card}>Documentação</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Fluxo de Trabalho</h2>

          <pre className={styles.codeBlock}>
            <code>{`Backlog
↓
A Fazer
↓
Em Desenvolvimento
↓
Em Revisão
↓
Em Testes
↓
Concluído`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Priorização</h2>

          <p>
            Nem todas as tarefas possuem a mesma importância. A equipe deve
            definir prioridades para entregar primeiro aquilo que gera mais
            valor.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Alta</span>
            <span className={styles.card}>Média</span>
            <span className={styles.card}>Baixa</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Responsáveis</h2>

          <p>
            Cada tarefa deve possuir um responsável para evitar dúvidas sobre
            quem está executando determinada atividade.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Login → Gabriel
Cadastro → João
Dashboard → Maria
Documentação → Ana`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Ferramentas Populares</h2>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>GitHub Projects</span>
            <span className={styles.card}>Trello</span>
            <span className={styles.card}>Jira</span>
            <span className={styles.card}>Notion</span>
            <span className={styles.card}>ClickUp</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Boas Práticas</h2>

          <ul>
            <li>Dividir tarefas grandes em pequenas atividades.</li>
            <li>Definir prioridade.</li>
            <li>Manter o backlog atualizado.</li>
            <li>Registrar o andamento.</li>
            <li>Concluir uma tarefa antes de iniciar outra.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Relacionando Git e Tarefas</h2>

          <p>
            Cada tarefa normalmente gera uma branch específica durante o
            desenvolvimento.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`Tarefa:
Criar login

↓

Branch:
feature/login

↓

Commit:
feat: cria autenticação

↓

Pull Request

↓

Merge`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h2>Conclusão</h2>

          <p>
            Uma boa organização de tarefas melhora a produtividade da equipe,
            reduz retrabalho e facilita o acompanhamento do projeto durante todo
            o seu desenvolvimento.
          </p>
        </section>
      </main>
    </div>
  );
}