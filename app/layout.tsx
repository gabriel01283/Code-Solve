import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solve Code",
  description: "Aprenda programação de forma simples e direta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
