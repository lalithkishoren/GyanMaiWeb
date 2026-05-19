import { motion } from 'framer-motion';

const cards = [
  {
    institution: 'Prof. John Hattie',
    source: 'Visible Learning · University of Melbourne',
    badge: '1,500+ meta-analyses · 300M+ students',
    headline: 'Formative assessment delivers the highest learning impact of any intervention ever studied — more than twice the threshold for meaningful change.',
    stat: '0.70+',
    statLabel: 'effect size',
    context: 'Effect sizes above 0.40 are meaningful. Formative assessment scores 0.70. No other single classroom intervention comes close.',
    accent: '#4F7EF5',
  },
  {
    institution: 'National Education Policy',
    source: 'Government of India · Ministry of Education',
    badge: 'Active national mandate · 2020',
    headline: 'AI-integrated continuous assessment and holistic progress tracking is now enshrined as national education policy across all 1M+ schools in India.',
    stat: 'NEP 2020',
    statLabel: 'active mandate',
    context: 'The NEP explicitly mandates formative, competency-based, and technology-enabled assessment reform. Gyanmai executes it at classroom speed.',
    accent: '#2DC4A2',
  },
  {
    institution: 'NITI Aayog',
    source: 'Government of India · 2025 Education Report',
    badge: 'Priority intervention · 2025',
    headline: 'Data-driven improvement of learning quality is the primary lever prescribed for achieving educational equity at national scale.',
    stat: '#1',
    statLabel: 'priority intervention',
    context: 'Most schools acknowledge the mandate. Gyanmai is built to execute it — with research-grade precision, at the speed of a classroom.',
    accent: '#E85C7A',
  },
];

export default function ResearchStrip() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: 'clamp(72px, 8vw, 112px) clamp(24px, 5vw, 64px)' }}>
      {/* Gradient blobs so the liquid-glass blur effect is visible */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(79,126,245,0.10) 0%, rgba(45,196,162,0.08) 40%, rgba(232,92,122,0.08) 80%, transparent 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-10%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(79,126,245,0.12)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '5%', width: 360, height: 360, borderRadius: '50%', background: 'rgba(232,92,122,0.10)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          style={{
            alignItems: 'end',
            marginBottom: 56,
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: 12 }}>Why it works</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 52px)',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              lineHeight: 1.08,
            }}>
              The science is settled.<br />
              <span style={{ fontWeight: 300, fontSize: '0.85em', color: 'var(--text-secondary)' }}>
                The policies confirm it.
              </span>
            </h2>
          </div>
          <p style={{
            fontSize: 16, color: 'var(--text-secondary)',
            lineHeight: 1.75, fontWeight: 300,
          }}>
            Gyanmai is not built on opinion or trend. Every design decision traces back to peer-reviewed research and active government mandates — not the kind most edtech companies only cite as marketing.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="liquid-glass"
              style={{
                borderRadius: 8,
                borderTop: `3px solid ${card.accent}`,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Badge */}
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: card.accent, marginBottom: 14,
              }}>
                {card.badge}
              </p>

              {/* Institution — the visual hero */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 2vw, 26px)',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: 6,
              }}>
                {card.institution}
              </h3>
              <p style={{
                fontSize: 11, color: 'var(--text-muted)',
                fontWeight: 300, marginBottom: 20,
              }}>
                {card.source}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />

              {/* Key finding */}
              <p style={{
                fontSize: 14, fontWeight: 400,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                flexGrow: 1,
                marginBottom: 24,
              }}>
                {card.headline}
              </p>

              {/* Stat — bold supporting metric */}
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 8,
                paddingTop: 18, borderTop: '1px solid var(--border)',
                marginBottom: 12,
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 32, fontWeight: 900,
                  color: card.accent,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}>
                  {card.stat}
                </span>
                <span style={{
                  fontSize: 11, color: 'var(--text-secondary)',
                  fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  {card.statLabel}
                </span>
              </div>

              {/* Context */}
              <p style={{
                fontSize: 13, color: 'var(--text-primary)',
                lineHeight: 1.65, fontWeight: 500,
              }}>
                {card.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
