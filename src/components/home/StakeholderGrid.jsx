import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import VideoBackground from '../ui/VideoBackground';
import { stakeholders } from '../../data/stakeholders';

function StakeholderCard({ stakeholder, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <Link
        to={stakeholder.path}
        style={{ display: 'block', textDecoration: 'none', position: 'relative', borderRadius: 20, overflow: 'hidden', height: 220 }}
      >
        <VideoBackground gradient={stakeholder.gradient} />
        <div style={{ position: 'relative', zIndex: 2, padding: '20px 22px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            padding: '4px 12px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            fontSize: 11,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.9)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            {stakeholder.label}
          </div>
          <div>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1.3, marginBottom: 8 }}>
              {stakeholder.painTeaser}
            </p>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 4 }}>
              See how GyanMai helps
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Hover overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255,255,255,0)',
          transition: 'background 0.3s',
        }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0)'}
        />
      </Link>
    </motion.div>
  );
}

export default function StakeholderGrid() {
  return (
    <section style={{ padding: '24px 24px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 24 }}>
        <span className="section-label">Who GyanMai is for</span>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginTop: 6, color: 'var(--text-primary)' }}>
          Built for everyone in the learning loop
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
        {stakeholders.map((s, i) => (
          <StakeholderCard key={s.slug} stakeholder={s} index={i} />
        ))}
      </div>
    </section>
  );
}
