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
            O Solve Code é uma plataforma web criada com o objetivo de apoiar o
            aprendizado de programação de forma simples, organizada e acessível.
            O site reúne conteúdos sobre linguagens de programação, permitindo
            que o usuário navegue entre temas, consulte explicações e utilize o
            sistema como apoio nos estudos.
          </p>

          <p>
            A proposta do projeto é ajudar estudantes e iniciantes na área de
            tecnologia a entenderem melhor conceitos importantes da programação,
            como sintaxe, lógica, estrutura de código e características de cada
            linguagem.
          </p>

          <p>
            Além dos conteúdos organizados em cards, o Solve Code também conta
            com recursos de interação entre usuários, como comentários, respostas
            e interesses personalizados. Dessa forma, a plataforma não funciona
            apenas como uma página de consulta, mas também como um ambiente de
            participação e troca de informações.
          </p>

          <p>
            O usuário pode criar uma conta, fazer login, acessar seu perfil,
            adicionar linguagens aos seus interesses e participar da área de
            comentários. Também é possível denunciar comentários quando
            necessário, ajudando a manter o ambiente mais organizado.
          </p>

          <p>
            O foco do Solve Code não é apenas apresentar conteúdos sobre
            programação, mas também oferecer uma experiência prática de navegação,
            autenticação, interação e organização de informações dentro de uma
            aplicação web completa.
          </p>
        </section>

        <section className={styles.section}>
          <h1>O que tem no site e como usar?</h1>

          <ol>
            <li>
              <strong>Home</strong> — É a página inicial do site. Nela o usuário
              encontra uma apresentação geral do Solve Code e pode acessar as
              principais áreas da plataforma.
            </li>

            <li>
              <strong>Cards</strong> — Reúnem conteúdos sobre
              linguagens de programação, Banco de dados, APIs e Frameworks. Ao clicar em um card, o usuário acessa
              uma página com informações específicas sobre o tema abordado nele.
            </li>

            <li>
              <strong>Comentários</strong> — Área onde usuários autenticados
              podem publicar comentários, visualizar comentários de outros
              usuários e interagir com respostas.
            </li>

            <li>
              <strong>Respostas</strong> — Permitem responder comentários,
              criando uma conversa mais organizada dentro da plataforma.
            </li>

            <li>
              <strong>Interesses</strong> — O usuário pode adicionar linguagens
              ao seu perfil como interesses, facilitando a organização dos
              assuntos que mais chamam sua atenção.
            </li>

            <li>
              <strong>Perfil</strong> — Página protegida por login, onde são
              exibidas informações do usuário, quantidade de comentários e
              interesses cadastrados.
            </li>

            <li>
              <strong>Denúncias</strong> — Funcionalidade usada para denunciar
              comentários inadequados, ajudando na organização e moderação do
              ambiente.
            </li>

            <li>
              <strong>Desenvolvedores</strong> — Página com informações sobre os
              criadores do projeto, incluindo descrição e formas de contato.
            </li>

            <li>
              <strong>Sobre o Site</strong> — Página atual, onde é explicada a
              proposta do Solve Code, suas funcionalidades e o objetivo do
              projeto.
            </li>
          </ol>
        </section>
      </main>
    </>
  );
}