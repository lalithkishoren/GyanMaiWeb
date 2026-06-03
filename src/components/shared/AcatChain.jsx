import { Link } from 'react-router-dom';
import { acatStages } from '../../data/acatFramework';
import { products } from '../../data/products';
import useMobile from '../../hooks/useMobile';

import gyanBankLogo    from '../../assets/logos/GyanBank-logo.png';
import gyanScanLogo    from '../../assets/logos/GyanScan-Logo.png';
import gyanAnalytxLogo from '../../assets/logos/GyanAnalytics-logo.png';
import gyanGuruLogo    from '../../assets/logos/GyanGuru-logo.png';
import gyanTestLogo    from '../../assets/logos/Gyantesta-logo.png';

const logos = {
  gyanbank:    gyanBankLogo,
  gyanscan:    gyanScanLogo,
  gyananalytx: gyanAnalytxLogo,
  gyanguru:    gyanGuruLogo,
  gyantest:    gyanTestLogo,
};

export default function AcatChain({ activeSlug }) {
  const isMobile = useMobile();

  return (
    <div style={{
      display: isMobile ? 'flex' : 'grid',
      gridTemplateColumns: isMobile ? undefined : 'repeat(5, 1fr)',
      gap: isMobile ? 8 : 8,
      width: '100%',
      overflowX: isMobile ? 'auto' : 'visible',
      scrollSnapType: isMobile ? 'x mandatory' : 'none',
      WebkitOverflowScrolling: 'touch',
      // Bleed the cards slightly beyond the section padding on mobile
      paddingBottom: isMobile ? 6 : 0,
    }}>
      {acatStages.map((stage) => {
        const isActive = stage.slug === activeSlug;
        const product = products.find((p) => p.slug === stage.slug);
        return (
          <Link
            key={stage.slug}
            to={`/products/${stage.slug}`}
            style={{
              textDecoration: 'none',
              display: 'block',
              height: '100%',
              minWidth: isMobile ? 200 : 160,
              flexShrink: isMobile ? 0 : undefined,
              scrollSnapAlign: isMobile ? 'start' : undefined,
            }}
          >
            <div
              style={{
                padding: '18px 20px 16px',
                borderRadius: 14,
                background: isActive ? `${stage.color}09` : 'rgba(245,241,232,0.82)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `1.5px solid ${isActive ? `${stage.color}45` : 'rgba(0,0,0,0.07)'}`,
                borderBottom: `3px solid ${isActive ? stage.color : 'transparent'}`,
                boxShadow: isActive
                  ? `0 8px 36px ${stage.color}20, 0 2px 8px rgba(0,0,0,0.06)`
                  : '0 2px 12px rgba(0,0,0,0.05)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.12)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = `${stage.color}30`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                }
              }}
            >
              {/* Top row: label */}
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: stage.color,
              }}>
                {stage.action}
              </span>

              {/* Logo full width */}
              <img
                src={logos[stage.slug]}
                alt={stage.product}
                style={{
                  height: 38,
                  width: 'auto',
                  maxWidth: '100%',
                  display: 'block',
                  opacity: isActive ? 1 : 0.72,
                  transition: 'opacity 0.2s',
                }}
              />

              <p style={{
                fontSize: 13,
                color: isActive ? 'var(--text-secondary)' : 'var(--text-muted)',
                lineHeight: 1.55,
                fontWeight: 400,
                flex: 1,
                margin: 0,
              }}>
                {product?.tagline}
              </p>

              <span style={{
                fontSize: 12,
                fontWeight: 700,
                color: stage.color,
                letterSpacing: '0.06em',
              }}>
                EXPLORE →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
