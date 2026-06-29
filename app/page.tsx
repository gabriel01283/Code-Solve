import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <h2>Aprenda programação de forma simples e direta</h2>
          <p>Escolha uma dessas linguagens mais famosas e comece pelos fundamentos.</p>
        </section>

        <section className="cards-container">
          <Link href="/cards/linguagens/java" className="card java">
            <Image src="/java-original.svg" alt="Java" width={102} height={102} />
            <h2>Java</h2>
          </Link>

          <Link href="/cards/linguagens/python" className="card python">
            <Image src="/python-original.svg" alt="Python" width={102} height={102} />
            <h2>Python</h2>
          </Link>

          <Link href="/cards/linguagens/cpp" className="card cpp">
            <Image src="/cplusplus-original.svg" alt="C++" width={102} height={102} />
            <h2>C++</h2>
          </Link>
        </section>

        <div className="cards-more">
          <Link href="/cards">Todos os Cards</Link>
        </div>
      </main>
    </>
  );
}
