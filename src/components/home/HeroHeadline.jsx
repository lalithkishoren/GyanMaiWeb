import { motion } from 'framer-motion';
import gyanmaiLogo from '../../assets/logos/gyanmai-logo.png';

export default function HeroHeadline() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: 600,
        background: '#EDE8DE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Warm amber radial glow — very subtle, bottom-center */}
      <div style={{
        position: 'absolute', bottom: '-10%', left: '50%',
        transform: 'translateX(-50%)',
        width: '140%', height: '70%',
        background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(255,179,0,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top border — subtle amber line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent 10%, rgba(255,179,0,0.28) 50%, transparent 90%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center',
        padding: '0 clamp(24px, 6vw, 80px)',
        maxWidth: 1000, margin: '0 auto',
      }}>

        {/* Eyebrow badge */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: 24,
          }}
        >
          Research-Driven EdTech
        </motion.p>

        {/* Brand logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.7 }}
          style={{ marginBottom: 20 }}
        >
          <img
            src={gyanmaiLogo}
            alt="Gyanmai"
            style={{
              height: 'clamp(60px, 8vw, 100px)',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              mixBlendMode: 'multiply',
            }}
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 7vw, 88px)',
            fontWeight: 900,
            lineHeight: 0.94,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            margin: '0 auto',
          }}
        >
          Makes every child's{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>learning visible.</em>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            marginTop: 28,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(17px, 2vw, 26px)',
            fontStyle: 'normal',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Every Day · Every Time · Every Concept · Every Subject
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.7 }}
          style={{
            marginTop: 18,
            fontSize: 'clamp(13px, 1.3vw, 15px)',
            color: 'var(--text-muted)',
            fontWeight: 400,
            maxWidth: 460,
            margin: '18px auto 0',
            lineHeight: 1.75,
          }}
        >
          Built on the highest-impact interventions in education research — not opinion, not trend.
        </motion.p>
      </div>

    </section>
  );
}
