import Navbar from "../../../components/Navbar";
import styles from "../gitGithub.module.css";

export default function ControleDeVersaoPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Controle de Versão</h1>

          <p>
            Controle de versão é uma prática fundamental no desenvolvimento de
            software. Ele permite registrar, organizar e acompanhar todas as
            mudanças feitas em um projeto ao longo do tempo.
          </p>

          <p>
            Com ele, é possível saber quem alterou um arquivo, quando a
            alteração foi feita, o que foi modificado e por qual motivo.
          </p>
        </section>

        <section className={styles.section}>
          <h1>O que é controle de versão?</h1>

          <p>
            Controle de versão é um sistema usado para gerenciar alterações em
            arquivos. Na programação, ele é usado principalmente para controlar
            mudanças no código-fonte de um projeto.
          </p>

          <p>Sem controle de versão, é comum encontrar arquivos como:</p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>projeto_final.zip</span>
            <span className={styles.card}>projeto_final_corrigido.zip</span>
            <span className={styles.card}>projeto_final_agora_vai.zip</span>
            <span className={styles.card}>projeto_final_definitivo_2.zip</span>
          </div>

          <p>
            Esse tipo de organização é perigoso, porque torna difícil saber qual
            versão está correta e como voltar para uma versão anterior.
          </p>
        </section>

        <section className={styles.section}>
          <h1>Para que serve?</h1>

          <p>
            O controle de versão serve para manter o projeto seguro, organizado
            e rastreável.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Registrar mudanças</span>
            <span className={styles.card}>Voltar versões antigas</span>
            <span className={styles.card}>Trabalhar em equipe</span>
            <span className={styles.card}>Evitar perda de código</span>
            <span className={styles.card}>Organizar histórico</span>
            <span className={styles.card}>Publicar projetos</span>
          </div>
        </section>

        <section className={styles.section}>
          <h1>Git e GitHub são a mesma coisa?</h1>

          <p>Não. Git e GitHub estão relacionados, mas não são a mesma coisa.</p>

          <h2>Git</h2>
          <p>
            Git é o sistema de controle de versão. Ele funciona no computador do
            desenvolvedor e registra o histórico do projeto.
          </p>

          <h2>GitHub</h2>
          <p>
            GitHub é uma plataforma online onde repositórios Git podem ser
            armazenados e compartilhados.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Git: ferramenta local</span>
            <span className={styles.card}>GitHub: plataforma online</span>
            <span className={styles.card}>Git controla versões</span>
            <span className={styles.card}>GitHub hospeda repositórios</span>
          </div>
        </section>

        <section className={styles.section}>
          <h1>Conceitos principais</h1>

          <h2>Repositório</h2>
          <p>
            Local onde o projeto é armazenado junto com todo o histórico de
            alterações.
          </p>

          <h2>Commit</h2>
          <p>
            Um commit é como um ponto salvo na história do projeto. Ele registra
            uma alteração ou conjunto de alterações.
          </p>

          <h2>Branch</h2>
          <p>
            Uma branch é uma linha separada de desenvolvimento. Ela permite
            criar ou testar funcionalidades sem alterar diretamente a versão
            principal.
          </p>

          <h2>Merge</h2>
          <p>
            Merge é o processo de juntar o conteúdo de uma branch com outra.
          </p>

          <h2>Remote</h2>
          <p>
            Remote é o repositório remoto, ou seja, a versão online do projeto.
          </p>
        </section>

        <section className={styles.section}>
          <h1>Fluxo básico de uso</h1>

          <h2>1. Verificar o estado</h2>
          <pre className={styles.codeBlock}>
            <code>git status</code>
          </pre>

          <h2>2. Adicionar arquivos</h2>
          <pre className={styles.codeBlock}>
            <code>git add .</code>
          </pre>

          <h2>3. Criar commit</h2>
          <pre className={styles.codeBlock}>
            <code>{`git commit -m "Mensagem explicando a alteração"`}</code>
          </pre>

          <h2>4. Enviar para o GitHub</h2>
          <pre className={styles.codeBlock}>
            <code>git push</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h1>Como iniciar um projeto com Git</h1>

          <pre className={styles.codeBlock}>
            <code>{`git init

git add .

git commit -m "Primeiro commit"

git remote add origin URL_DO_REPOSITORIO

git push -u origin main`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h1>Branches na prática</h1>

          <h2>Criar uma branch</h2>
          <pre className={styles.codeBlock}>
            <code>git switch -c nome-da-branch</code>
          </pre>

          <h2>Trocar de branch</h2>
          <pre className={styles.codeBlock}>
            <code>git switch nome-da-branch</code>
          </pre>

          <h2>Listar branches</h2>
          <pre className={styles.codeBlock}>
            <code>git branch</code>
          </pre>

          <h2>Voltar para a main</h2>
          <pre className={styles.codeBlock}>
            <code>git switch main</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h1>Merge</h1>

          <p>
            Merge é usado para juntar o conteúdo de uma branch em outra.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`git switch main

git pull

git merge nome-da-branch

git push`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h1>Pull e Push</h1>

          <h2>Push</h2>
          <p>Envia os commits locais para o repositório remoto.</p>

          <pre className={styles.codeBlock}>
            <code>git push</code>
          </pre>

          <h2>Pull</h2>
          <p>Baixa as alterações do repositório remoto para sua máquina.</p>

          <pre className={styles.codeBlock}>
            <code>git pull</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h1>Boas práticas</h1>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Fazer commits pequenos</span>
            <span className={styles.card}>Escrever mensagens claras</span>
            <span className={styles.card}>Criar branches por tarefa</span>
            <span className={styles.card}>Não enviar arquivos sensíveis</span>
            <span className={styles.card}>Atualizar antes de alterar</span>
            <span className={styles.card}>Usar .gitignore</span>
          </div>

          <h2>Mensagem ruim</h2>
          <pre className={styles.codeBlock}>
            <code>{`git commit -m "coisas"`}</code>
          </pre>

          <h2>Mensagem melhor</h2>
          <pre className={styles.codeBlock}>
            <code>{`git commit -m "Adiciona página de comentários"`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h1>Arquivos que não devem ir para o GitHub</h1>

          <p>
            Arquivos locais, pesados ou sensíveis devem ficar fora do
            repositório.
          </p>

          <pre className={styles.codeBlock}>
            <code>{`.env
.venv/
venv/
__pycache__/
*.pyc
node_modules/
.vscode/`}</code>
          </pre>
        </section>

        <section className={styles.section}>
          <h1>Resumo profissional</h1>

          <p>
            Controle de versão é uma das bases do desenvolvimento moderno. Ele
            permite que projetos cresçam com organização, segurança e
            colaboração.
          </p>

          <div className={styles.cardsContainer}>
            <span className={styles.card}>Organização</span>
            <span className={styles.card}>Segurança</span>
            <span className={styles.card}>Histórico</span>
            <span className={styles.card}>Colaboração</span>
            <span className={styles.card}>Profissionalismo</span>
          </div>
        </section>
      </main>
    </div>
  );
}