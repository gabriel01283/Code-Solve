'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ResultCard from '@/components/ResultCard';
import SearchBar from '@/components/SearchBar';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results || []);
        setLoading(false);
      });
  }, [query]);

  return (
    <main className="min-h-screen px-4 py-10">
      <SearchBar initialQuery={query || ''} />

      {loading && <p className="mt-10">Buscando...</p>}

      {!loading && results.length === 0 && query && (
        <p className="mt-10">Nada encontrado.</p>
      )}

      <div className="mt-10 space-y-4 max-w-2xl mx-auto">
        {results.map((item, i) => (
          <ResultCard key={i} {...item} index={i} />
        ))}
      </div>
    </main>
  );
}