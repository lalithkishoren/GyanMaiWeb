import { motion } from 'framer-motion';

const researchCards = [
  {
    institution: 'Prof. John Hattie',
    source: 'Visible Learning · University of Melbourne',
    badge: '1,500+ meta-analyses · 300M+ students',
    headline: 'Formative assessment delivers the highest learning impact of any intervention ever studied — more than twice the threshold for meaningful change.',
    stat: '0.70+', statLabel: 'effect size',
    context: 'Effect sizes above 0.40 are meaningful. Formative assessment scores 0.70. No other single classroom intervention comes close.',
    accent: '#4F7EF5',
  },
  {
    institution: 'National Education Policy',
    source: 'Government of India · Ministry of Education',
    badge: 'Active national mandate · 2020',
    headline: 'AI-integrated continuous assessment and holistic progress tracking is now enshrined as national education policy across all 1M+ schools in India.',
    stat: 'NEP 2020', statLabel: 'active mandate',
    context: 'The NEP explicitly mandates formative, competency-based, and technology-enabled assessment reform. Gyanmai executes it at classroom speed.',
    accent: '#2DC4A2',
  },
  {
    institution: 'NITI Aayog',
    source: 'Government of India · 2025 Education Report',
    badge: 'Priority intervention · 2025',
    headline: 'Data-driven improvement of learning quality is the primary lever prescribed for achieving educational equity at national scale.',
    stat: '#1', statLabel: 'priority intervention',
    context: 'Most schools acknowledge the mandate. Gyanmai is built to execute it — with research-grade precision, at the speed of a classroom.',
    accent: '#E85C7A',
  },
];

export default function ResearchSection() {
  return (
    <section style={{
      background: 'var(--bg-subtle)',
      padding: 'clamp(64px, 8vw, 96px) clamp(20px, 5vw, 64px)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 40 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>Why it works</p>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 46px)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.07 }}>
              The science is settled.<br />
              <span style={{ fontWeight: 300, fontSize: '0.82em', color: 'var(--text-secondary)' }}>The policies confirm it.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300, alignSelf: 'end' }}
          >
            Gyanmai is not built on opinion or trend. Every design decision traces back to peer-reviewed research and active government mandates — not the kind most edtech companies only cite as marketing.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {researchCards.map((card, i) => (
            <motion.div
              key={card.institution}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 10,
                border: `1px solid rgba(0,0,0,0.07)`,
                borderTopWidth: 3,
                borderTopColor: card.accent,
                borderTopStyle: 'solid',
                padding: '22px 20px',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: card.accent, marginBottom: 10 }}>{card.badge}</p>
              <h3 style={{ fontSize: 'clamp(15px, 1.6vw, 20px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 4 }}>{card.institution}</h3>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 300, marginBottom: 14 }}>{card.source}</p>
              <div style={{ height: 1, background: 'var(--border)', marginBottom: 14 }} />
              <p style={{ fontSize: 12, fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.7, flexGrow: 1, marginBottom: 16 }}>{card.headline}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, paddingTop: 12, borderTop: '1px solid var(--border)', marginBottom: 8 }}>
                <span style={{ fontSize: 26, fontWeight: 900, color: card.accent, letterSpacing: '-0.03em', lineHeight: 1 }}>{card.stat}</span>
                <span style={{ fontSize: 10, color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.statLabel}</span>
              </div>
              <p style={{ fontSize: 11, color: 'var(--text-primary)', lineHeight: 1.65, fontWeight: 500 }}>{card.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
