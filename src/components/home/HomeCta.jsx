import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomeCta() {
  return (
    <section style={{ background: 'var(--bg-dark)', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
      {/* Gold radial */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(255,179,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative' }}
      >
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
          Ready to start
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(30px, 4.5vw, 56px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          color: '#fff',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Let's build a world-class learning and assessment framework for your school.
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
          A 30-minute walkthrough, personalised for your school's curriculum, class size, and assessment methods. No generic slides.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-gold" style={{ padding: '13px 28px' }}>
            Book a Platform Demo
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 10.5L10.5 2.5M10.5 2.5H4.5M10.5 2.5V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/#acatt" className="btn-ghost-light" style={{ fontSize: 15, padding: '13px 28px' }}>
            Explore the Platform
          </Link>
        </div>

        <p style={{ marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>
          GDPR Compliant · DPDP Act (India) Aligned · Student Data Privacy-First
        </p>
      </motion.div>
    </section>
  );
}
