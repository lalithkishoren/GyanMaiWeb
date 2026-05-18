import { motion } from 'framer-motion';

const pillars = [];

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
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
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
              Normal schools track marks.<br />Best schools track<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Quality learning.</em>
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

      </div>
    </section>
  );
}
