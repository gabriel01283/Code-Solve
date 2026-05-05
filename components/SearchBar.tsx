'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Terminal } from 'lucide-react';

export default function SearchBar({ initialQuery = '' }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-xl border transition-all duration-300"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--accent)',
          boxShadow: '0 0 30px rgba(0,212,255,0.1)',
        }}
      >
        <Terminal size={18} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
        <span className="mono text-sm" style={{ color: 'var(--text-muted)' }}>$</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="o que é classes em java? / como funciona async/await?"
          className="flex-1 bg-transparent outline-none mono text-sm"
          style={{ color: 'var(--text-primary)', caretColor: 'var(--accent)' }}
          autoFocus
        />
        <button
          type="submit"
          className="p-2 rounded-lg transition-all"
          style={{ background: 'var(--accent)', color: '#0a0e1a' }}
        >
          <Search size={16} />
        </button>
      </div>
    </form>
  );
}