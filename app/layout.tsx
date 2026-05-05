import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevQuest — tire suas dúvidas de programação',
  description: 'Pesquise conceitos de programação e encontre as melhores fontes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}