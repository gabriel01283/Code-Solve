import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import styles from "./linguagem.module.css";
import languageContent from "@/lib/languageContent.json";

const languageNames: Record<string, string> = {
  python: "Python",
  java: "Java",
  javascript: "JavaScript",
  cpp: "C++",
  csharp: "C#",
  css: "CSS",
  go: "Go",
  html: "HTML",
  kotlin: "Kotlin",
  rust: "Rust",
  swift: "Swift",
};

export function generateStaticParams() {
  return Object.keys(languageNames).map((slug) => ({ slug }));
}

export default async function LinguagemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = (languageContent as Record<string, string>)[slug];

  if (!content) {
    notFound();
  }

  const name = languageNames[slug] || slug;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </>
  );
}
