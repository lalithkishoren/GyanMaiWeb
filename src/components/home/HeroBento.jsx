import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoBackground from '../ui/VideoBackground';
import { stats } from '../../data/stats';
import { acatStages } from '../../data/acatFramework';

export default function HeroBento() {
  return (
    <section style={{ padding: '80px 24px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: 12,
        minHeight: 560,
      }}>
        {/* Left — Brand + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="card"
          style={{ padding: '36px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridRow: 'span 2' }}
        >
          <div>
            <span className="section-label" style={{ marginBottom: 16, display: 'block' }}>Research-Driven EdTech</span>
            <h1 style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1px', color: 'var(--text-primary)', marginBottom: 16 }}>
              Beyond<br />Marks.<br />
              <span style={{ color: 'var(--accent)' }}>Into<br />Understanding.</span>
            </h1>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 28 }}>
              Gyanmai makes daily learning visible — every child, every concept, every day.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link to="/contact" className="btn-primary" style={{ justifyContent: 'center' }}>
              Book a Platform Demo
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/#acatt" className="btn-ghost" style={{ justifyContent: 'center' }}>
              Explore the Platform
            </Link>
          </div>
        </motion.div>

        {/* Center — Media hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            borderRadius: 20,
            position: 'relative',
            overflow: 'hidden',
            minHeight: 340,
            gridRow: 'span 2',
          }}
        >
          <VideoBackground gradient="linear-gradient(135deg, #1a2a6c 0%, #2DC4A2 50%, #4F7EF5 100%)" />

          {/* Overlay content */}
          <div style={{ position: 'relative', zIndex: 2, padding: 28, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['CBSE', 'ICSE', 'Cambridge', 'State Boards'].map((c) => (
                <span key={c} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}>{c}</span>
              ))}
            </div>

            <div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 8 }}>
                Gyanmai makes<br />daily learning visible
              </h2>

              {/* Frosted sub-card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{
                  marginTop: 16,
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 14,
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontFamily: 'var(--font-display)' }}>Every child. Every concept. Every day.</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Live schools · 2 confirmed pilots AY 2026–27</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right top — Stats widget */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="card"
          style={{ padding: '24px 20px' }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>By the numbers</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p style={{ fontSize: 26, fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--text-primary)', lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right bottom — ACAT mini preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="card"
          style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 8 }}
        >
          <p className="section-label">ACAT Framework</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
            {acatStages.map((stage, i) => (
              <div key={stage.slug} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: stage.color, flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>{stage.action}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 'auto' }}>{stage.product}</span>
              </div>
            ))}
          </div>
          <Link to="/#acatt" style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, textDecoration: 'none', marginTop: 4 }}>
            Explore the cycle →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
