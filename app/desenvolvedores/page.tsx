import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "./desenvolvedores.module.css";

export default function DesenvolvedoresPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>Desenvolvedores</h1>
        </section>

        <section className={styles.creatorsGrid}>
          {/* Gabriel */}
          <div className={styles.creatorCard}>
            <Image src="/Gabriel_icon.png" alt="Gabriel" width={120} height={120} className={styles.avatar} />
            <h2>Gabriel Saraiva Sampaio</h2>
            <p>
              Estudante de Engenharia de Software na UPE (Universidade de Pernambuco).
              Desenvolvedor do projeto.
            </p>
            <div className={styles.links}>
              <a href="https://wa.me/558191106394" target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp_logo.png" alt="WhatsApp" width={28} height={28} />
              </a>
              <a href="https://github.com/gabriel01283" target="_blank" rel="noopener noreferrer">
                <Image src="/icons8-github-logo-24.png" alt="GitHub" width={28} height={28} />
              </a>
              <a href="mailto:gabrielsaraivasampaio13@gmail.com">
                <Image src="/icons8-gmail-logo-48.png" alt="Email" width={28} height={28} />
              </a>
            </div>
          </div>

          {/* Clara */}
          <div className={styles.creatorCard}>
            <Image src="/Clara_icon.png" alt="Maria Clara" width={120} height={120} className={styles.avatar} />
            <h2>Maria Clara Nascimento Silva</h2>
            <p>
              Estudante de Engenharia de Software na UPE (Universidade de Pernambuco).
              Desenvolvedora do projeto.
            </p>
            <div className={styles.links}>
              <a href="https://wa.me/5581988991534" target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp_logo.png" alt="WhatsApp" width={28} height={28} />
              </a>
              <a href="https://www.instagram.com/clara.n_" target="_blank" rel="noopener noreferrer">
                <Image src="/icons8-instagram-48.png" alt="Instagram" width={28} height={28} />
              </a>
              <a href="https://github.com/clarrinha" target="_blank" rel="noopener noreferrer">
                <Image src="/icons8-github-logo-24.png" alt="GitHub" width={28} height={28} />
              </a>
              <a href="mailto:claranascimento166@gmail.com">
                <Image src="/icons8-gmail-logo-48.png" alt="Email" width={28} height={28} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
