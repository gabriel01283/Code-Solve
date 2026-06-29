import Navbar from "../components/Navbar";
import styles from "./sobre.module.css";

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Sobre o Solve Code</h1>
        </section>

        <section className={styles.section}>
          <p>
            O Solve Code foi criado com o objetivo de facilitar o aprendizado de programação
            para pessoas em qualquer nível de conhecimento, desde iniciantes até usuários mais avançados.
            Nosso site serve como uma plataforma de apoio ao estudo, reunindo explicações claras,
            exemplos práticos e conteúdos organizados sobre as principais linguagens de programação
            e tecnologias utilizadas no desenvolvimento de software.
          </p>
          <p>
            A ideia principal do projeto é sanar dúvidas comuns que surgem durante o aprendizado,
            oferecendo uma base sólida de entendimento sobre lógica de programação, estrutura de código
            e funcionamento das linguagens.
          </p>
          <p>
            Além da parte educacional já estruturada com conteúdos fixos, o Solve Code também contará
            com uma seção inteligente, onde o usuário poderá tirar dúvidas em tempo real.
          </p>
          <p>
            Essa parte será alimentada por inteligência artificial utilizando a API do Gemini,
            além de consultas a fontes confiáveis voltadas ao universo da programação.
          </p>
          <p>
            Dessa forma, o site não se limita apenas a conteúdo estático, mas também evolui para uma
            ferramenta interativa de aprendizado, capaz de responder perguntas e auxiliar o usuário
            de forma dinâmica.
          </p>
          <p>
            O foco do Solve Code não é apenas ensinar sintaxe, mas também desenvolver o pensamento lógico,
            ajudando o usuário a entender como resolver problemas e estruturar soluções como um programador.
          </p>
        </section>

        <section className={styles.section}>
          <h1>O que tem no site e como usar?</h1>
          <ol>
            <li>
              <strong>Home</strong> — É a página inicial do site. Aqui você encontra uma introdução ao Solve Code
              e acessos rápidos para todas as outras partes do sistema.
            </li>
            <li>
              <strong>Cards de Programação</strong> — Os cards servem para ensinar linguagens como Java, Python e C++.
              Basta clicar em um card para acessar o conteúdo daquela linguagem.
            </li>
            <li>
              <strong>Cards Gerais</strong> — A seção de cards gerais reúne todos os conteúdos organizados do site,
              permitindo navegar entre diferentes assuntos de forma rápida.
            </li>
            <li>
              <strong>Desenvolvedores</strong> — Mostra os criadores do projeto, contendo foto, descrição e links de contato
              como WhatsApp, GitHub e Email.
            </li>
            <li>
              <strong>Sobre o Site</strong> — Explica o objetivo do Solve Code, sua proposta e como a plataforma funciona.
            </li>
            <li>
              <strong>Pesquisa com IA</strong> — O ícone de robô na barra de navegação representa a futura área de inteligência artificial.
              Essa função permitirá tirar dúvidas sobre programação utilizando IA integrada ao site.
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}
