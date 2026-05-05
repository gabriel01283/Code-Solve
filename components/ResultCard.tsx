import { ExternalLink, Globe } from 'lucide-react';

interface ResultCardProps {
  title: string;
  link: string;
  snippet: string;
  displayLink: string;
  index: number;
}

export default function ResultCard({
  title,
  link,
  snippet,
  displayLink,
  index,
}: ResultCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 rounded-xl border transition-all duration-200 group"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
        animationDelay: `${index * 50}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
        (e.currentTarget as HTMLElement).style.boxShadow =
          '0 0 20px rgba(0,212,255,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Globe size={12} style={{ color: 'var(--text-muted)' }} />
            <span className="text-xs mono" style={{ color: 'var(--text-muted)' }}>
              {displayLink}
            </span>
          </div>

          <h3
            className="font-semibold text-base mb-2 leading-snug group-hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            {title}
          </h3>

          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-primary)', opacity: 0.8 }}
          >
            {snippet}
          </p>
        </div>

        <ExternalLink
          size={16}
          style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: 4 }}
        />
      </div>
    </a>
  );
}