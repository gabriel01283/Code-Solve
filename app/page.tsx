import SearchBar from '@/components/SearchBar';
import { Code2, Zap, BookOpen } from 'lucide-react';
import Link from 'next/link';

const TRENDING = [
  { label: 'O que é uma classe em Java?', icon: '☕' },
  { label: 'Como funciona async/await?', icon: '⚡' },
  { label: 'O que é REST API?', icon: '🌐' },
  { label: 'Diferença entre == e === em JS', icon: '🔍' },
  { label: 'O que é recursão?', icon: '♾️' },
  { label: 'Como funciona o Git?', icon: '🌿' },
  { label: 'O que é Big O notation?', icon: '📊' },
  { label: 'O que é um ponteiro em C?', icon: '➡️' },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="p-2 rounded-lg"
          style={{
            background: 'rgba(0,212,255,0.1)',
            border: '1px solid var(--accent)',
          }}
        >
          <Code2 size={28} style={{ color: 'var(--accent)' }} />
        </div>
        <h1
          className="text-4xl font-bold mono"
          style={{ color: 'var(--text-primary)' }}
        >
          Dev<span style={{ color: 'var(--accent)' }}>Quest</span>
        </h1>
      </div>

      <p
        className="text-sm mono mb-10"
        style={{ color: 'var(--text-muted)' }}
      >
        // tire suas dúvidas de programação
      </p>

      {/* Search */}
      <SearchBar />

      {/* Trending */}
      <div className="w-full max-w-2xl mt-12">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={14} style={{ color: 'var(--accent-green)' }} />
          <span
            className="text-xs mono uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            trending queries
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {TRENDING.map((item) => (
            <Link
              key={item.label}
              href={`/search?q=${encodeURIComponent(item.label)}`}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 text-sm hover:border-purple-400"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              <span>{item.icon}</span>
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer hint */}
      <div className="mt-16 flex items-center gap-2">
        <BookOpen size={12} style={{ color: 'var(--text-muted)' }} />
        <span
          className="text-xs mono"
          style={{ color: 'var(--text-muted)' }}
        >
          powered by Google Custom Search API
        </span>
      </div>
    </main>
  );
}