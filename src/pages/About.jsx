import { motion } from 'framer-motion';

/* ── Founder/team bios — Rohan to fill in ── */
const founders = [
  { name: '— To be added —', title: '', bio: '' },
  { name: '— To be added —', title: '', bio: '' },
];

const teamHeritage = ['Microsoft', 'IIM Calcutta', 'BITS Pilani'];

const badges = [
  { label: 'GDPR Compliant', desc: 'Meets EU data protection standards' },
  { label: 'DPDP Act (India) Aligned', desc: 'India Digital Personal Data Protection Act 2023' },
  { label: 'Student Data Privacy-First', desc: 'No advertising, no third-party data sharing' },
  { label: 'Encrypted at Rest & in Transit', desc: 'End-to-end encryption on all student data' },
];

function EmptyFounderCard({ founder }) {
  return (
    <div className="card" style={{ padding: '28px 24px', opacity: founder.name.startsWith('—') ? 0.5 : 1 }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--bg-base)', border: '2px dashed var(--border-strong)', marginBottom: 16 }} />
      {founder.name.startsWith('—') ? (
        <div style={{ height: 16, width: 140, borderRadius: 4, background: 'var(--bg-base)', marginBottom: 8 }} />
      ) : (
        <p style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: 4 }}>{founder.name}</p>
      )}
      {founder.title ? (
        <p style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, marginBottom: 10 }}>{founder.title}</p>
      ) : (
        <div style={{ height: 12, width: 100, borderRadius: 4, background: 'var(--bg-base)', marginBottom: 10 }} />
      )}
      {founder.bio ? (
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{founder.bio}</p>
      ) : (
        <p style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic' }}>Bio to be added</p>
      )}
    </div>
  );
}

export default function About() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* Mission */}
      <section style={{ padding: '60px 40px 60px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>About Gyanmai</span>
          <h1 style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 16 }}>
            We are a research-driven EdTech<br />product development company.
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 32px' }}>
            Our mission: Beyond Marks. Into Understanding. We build tools that make learning visible — not as a metric, but as a lived experience in every classroom.
          </p>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {teamHeritage.map((h) => (
              <span key={h} className="badge" style={{ fontSize: 13 }}>Veterans from {h}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founders */}
      <section style={{ padding: '0 40px 60px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 28 }}>
          <span className="section-label">The team</span>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginTop: 6, color: 'var(--text-primary)' }}>Founders & Promoters</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {founders.map((f, i) => <EmptyFounderCard key={i} founder={f} />)}
        </div>
      </section>

      {/* Patent */}
      <section style={{ padding: '0 40px 60px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="card" style={{ padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" stroke="var(--accent-dark)" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginBottom: 6 }}>Patent Filed</h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Custom marker-cube system · Scan-flow architecture · Proprietary diagnostic-distractor question framework.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section style={{ padding: '0 40px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <span className="section-label">Data & compliance</span>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginTop: 6, color: 'var(--text-primary)' }}>Student data, protected</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {badges.map((b) => (
            <div key={b.label} className="card" style={{ padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2DC4A2', marginTop: 5, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{b.label}</p>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
