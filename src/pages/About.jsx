import { motion } from 'framer-motion';

const teamHeritage = ['Microsoft', 'IIM Calcutta', 'BITS Pilani'];

const badges = [
  { label: 'GDPR Compliant', desc: 'Meets EU data protection standards' },
  { label: 'DPDP Act (India) Aligned', desc: 'India Digital Personal Data Protection Act 2023' },
  { label: 'Student Data Privacy-First', desc: 'No advertising, no third-party data sharing' },
  { label: 'Encrypted at Rest & in Transit', desc: 'End-to-end encryption on all student data' },
];

export default function About() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* Mission */}
      <section className="px-5 md:px-10 py-12 md:py-[60px]" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>About Gyanmai</span>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 16 }}>
            We are a research-driven EdTech<br />product development company.
          </h1>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 32px' }}>
            Our mission: Beyond Marks. Into Understanding. We build tools that make learning visible — not as a metric, but as a lived experience in every classroom.
          </p>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {teamHeritage.map((h) => (
              <span key={h} className="badge" style={{ fontSize: 13 }}>Veterans from {h}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Patent */}
      <section className="px-5 md:px-10 pb-12 md:pb-[60px]" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="card" style={{ padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" stroke="var(--accent-dark)" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginBottom: 6 }}>Patent Pending</h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Custom marker-cube system · Scan-flow architecture · Proprietary diagnostic-distractor question framework.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="px-5 md:px-10 pb-16 md:pb-20" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <span className="section-label">Data & compliance</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 26px)', fontWeight: 700, marginTop: 6, color: 'var(--text-primary)' }}>Student data, protected</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {badges.map((b) => (
            <div key={b.label} className="card" style={{ padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2DC4A2', marginTop: 5, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{b.label}</p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
