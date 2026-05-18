import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { schools, curricula } from '../../data/schools';
import { schoolStats } from '../../data/stats';

export default function SchoolsStrip() {
  return (
    <section className="px-5 md:px-8 py-16 md:py-20" style={{ background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: 10 }}>Trusted by schools across India</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
            }}>
              Real classrooms. Real results.
            </h2>
          </div>

          <div className="gap-5 md:gap-8" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {[
              { val: schoolStats.total,            label: 'Schools' },
              { val: schoolStats.live,              label: 'Live customer' },
              { val: schoolStats.confirmedPilots,   label: 'Pilots AY 26–27' },
              { val: schoolStats.softCommitments,   label: 'Commitments' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 36, fontWeight: 900,
                  color: 'var(--text-primary)', lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>
                  {s.val}
                </p>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* School name chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}
        >
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              style={{
                padding: '8px 16px',
                borderRadius: 999,
                border: '1px solid var(--border)',
                background: 'var(--bg-base)',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              {school.status === 'live' && (
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2DC4A2', flexShrink: 0 }} />
              )}
              {school.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Curriculum + CTA row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', marginRight: 4 }}>Curricula supported:</span>
            {curricula.map((c) => (
              <span key={c} className="badge" style={{ fontSize: 11 }}>{c}</span>
            ))}
          </div>
          <Link to="/about" style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', textDecoration: 'none' }}>
            View all partners →
          </Link>
        </div>
      </div>
    </section>
  );
}
