import { Link } from 'react-router-dom';
import { acatStages } from '../../data/acatFramework';

export default function AcatChain({ activeSlug }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
      {acatStages.map((stage, i) => {
        const isActive = stage.slug === activeSlug;
        return (
          <div key={stage.slug} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Link
              to={`/products/${stage.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '5px 12px',
                borderRadius: 3,
                fontSize: 12,
                fontWeight: isActive ? 600 : 400,
                textDecoration: 'none',
                background: isActive ? stage.color : 'transparent',
                color: isActive ? '#fff' : 'var(--text-muted)',
                border: `1px solid ${isActive ? stage.color : 'var(--border-strong)'}`,
                transition: 'all 0.18s',
                letterSpacing: isActive ? '0.01em' : 0,
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.borderColor = stage.color;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-strong)';
                }
              }}
            >
              {isActive && (
                <span style={{
                  width: 5, height: 5,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.8)',
                  flexShrink: 0,
                }} />
              )}
              {stage.product}
            </Link>

            {i < acatStages.length - 1 && (
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M0 4H10M10 4L7 1M10 4L7 7" stroke="var(--border-strong)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
