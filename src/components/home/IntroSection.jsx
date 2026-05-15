import { motion } from 'framer-motion';

const pillars = [
  {
    number: '0.70+',
    label: 'Hattie Effect Size',
    note: 'Highest of 1,500+ meta-analyses',
  },
  {
    number: '30K+',
    label: 'Diagnostic questions',
    note: 'Bloom-mapped, distractor-built',
  },
];

export default function IntroSection() {
  return (
    <section style={{
      background: 'var(--bg-subtle)',
      borderBottom: '1px solid var(--border)',
      padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 64px)',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 6vw, 96px)',
            alignItems: 'end',
            marginBottom: 72,
          }}
        >
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 20,
            }}>
              Why Gyanmai
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
            }}>
              Most schools track marks.<br />Gyanmai tracks<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>understanding.</em>
            </h2>
          </div>

          <div>
            <p style={{
              fontSize: 'clamp(16px, 1.6vw, 20px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: 28,
            }}>
              Gyanmai is built on the highest-impact interventions in education research — not opinion, not trend. Every product in our ecosystem is designed around one principle: a wrong answer is not a failure, it is data.
            </p>
            <p style={{
              fontSize: 'clamp(15px, 1.3vw, 17px)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              fontWeight: 300,
              borderLeft: '2px solid var(--gold)',
              paddingLeft: 18,
            }}>
              "70% of students leave a lesson still carrying the misconception that caused their error. Gyanmai changes that."
            </p>
          </div>
        </motion.div>

        {/* Stat pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 1,
          background: 'var(--border)',
          borderRadius: 4,
          overflow: 'hidden',
        }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass"
              style={{
                padding: 'clamp(28px, 3.5vw, 44px) clamp(24px, 3vw, 40px)',
                borderTop: '2px solid var(--text-primary)',
                borderRadius: 0,
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 4.5vw, 60px)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: 10,
              }}>
                {p.number}
              </p>
              <p style={{
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 6,
              }}>
                {p.label}
              </p>
              <p style={{
                fontSize: 12,
                color: 'var(--text-muted)',
                fontWeight: 300,
              }}>
                {p.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
