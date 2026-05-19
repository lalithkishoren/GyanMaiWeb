import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stakeholders } from '../../data/stakeholders';
import { products } from '../../data/products';
import cctvVideo from '../../assets/videos/cctv.mp4';
import schoolVideo from '../../assets/videos/school-video.mp4';

const school = stakeholders.find((s) => s.slug === 'school-management');

const stageColors = {
  gyanbank: '#4F7EF5', gyanscan: '#2DC4A2', gyananalytx: '#F5A623', gyanguru: '#E85C7A', gyantest: '#9B6EF5',
};

const problemIcons = [
  <svg key="a" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="#F5A623" strokeWidth="1.5"/><path d="M9 5v5M9 13h.01" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="b" width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="5" width="14" height="10" rx="2" stroke="#F5A623" strokeWidth="1.5"/><path d="M6 5V4a3 3 0 016 0v1" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="c" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="#F5A623" strokeWidth="1.5"/><path d="M9 5v4l2.5 2.5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="d" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 14l3-4 3 2 3-5 3 3" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="1" y="1" width="16" height="16" rx="2" stroke="#F5A623" strokeWidth="1.5"/></svg>,
];

const CYCLE_INTERVAL = 6000;

// ── Hero slides ───────────────────────────────────────────────────────────
const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};

function HeroSlide1() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',
      height: '100%', padding: 'clamp(80px, 10vw, 112px) clamp(32px, 6vw, 80px) clamp(64px, 8vw, 96px)',
      maxWidth: 900,
    }}>
      <motion.span
        initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        style={{
          display: 'inline-block', fontSize: 10, fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: '#16A34A', background: 'rgba(34,197,94,0.10)',
          border: '1px solid rgba(34,197,94,0.30)',
          padding: '5px 16px', borderRadius: 999, marginBottom: 36,
        }}
      >
        For School Chairmen &amp; Owners
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ lineHeight: 0.95, marginBottom: 32, letterSpacing: '-0.03em' }}
      >
        <span style={{ display: 'block', fontSize: 'clamp(48px, 7.5vw, 92px)', fontWeight: 900, color: '#16A34A' }}>BRAND VALUE</span>
        <span style={{ display: 'block', fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 300, color: '#F5A623', letterSpacing: '0.02em', margin: '8px 0' }}>∝</span>
        <span style={{ display: 'block', fontSize: 'clamp(48px, 7.5vw, 92px)', fontWeight: 900, color: '#16A34A' }}>LEARNING OUTCOMES</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.42, duration: 0.7 }}
        style={{ fontSize: 'clamp(18px, 2.2vw, 28px)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 18, lineHeight: 1.3 }}
      >
        The brand value your competitors <span style={{ color: '#F5A623' }}>can't fake.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56, duration: 0.7 }}
        style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 520, fontWeight: 400, marginBottom: 36 }}
      >
        In 2026, brand value isn't built on a handful of toppers in March. It's built on demonstrated learning — every child, every concept, every day. Sophisticated parents now ask new questions. Gyanmai gives you the answers.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
      >
        <Link to="/contact" className="btn-gold">Book a Demo →</Link>
        <Link to="/#acatt" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '11px 24px', borderRadius: 999,
          border: '1px solid var(--border-strong)',
          color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500,
          textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.35)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          See the Platform
        </Link>
      </motion.div>
    </div>
  );
}

function HeroSlide2() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={cctvVideo} type="video/mp4" />
      </video>
      {/* Overlay — lighter to let video breathe */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,8,15,0.35) 0%, rgba(6,8,15,0.18) 40%, rgba(6,8,15,0.55) 80%, rgba(6,8,15,0.85) 100%)' }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(64px, 8vw, 96px) clamp(32px, 6vw, 80px)',
        maxWidth: 780,
      }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}
        >
          The blind spot
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(22px, 3.2vw, 42px)', fontWeight: 300, color: 'rgba(255,255,255,0.70)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 28 }}
        >
          CCTVs watch your classrooms.
          <br />
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '1em', letterSpacing: '-0.03em' }}>But, who monitors kids' learning efficacy?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, maxWidth: 520, fontWeight: 400, marginBottom: 28 }}
        >
          Every classroom has a camera. None of them watch the learning — the thinking, the gaps, the growth.
          <br /><br />
          <strong style={{ color: '#fff', fontWeight: 600 }}>Gyanmai makes daily learning visible.</strong>
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.5 }}>
          <Link to="/contact" className="btn-gold">Book a Demo →</Link>
        </motion.div>
      </div>
    </div>
  );
}

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => go((current + 1) % 2), [current, go]);

  useEffect(() => {
    const t = setTimeout(next, CYCLE_INTERVAL);
    return () => clearTimeout(t);
  }, [current, next]);

  const slides = [HeroSlide1, HeroSlide2];
  const Slide = slides[current];

  return (
    <section style={{ position: 'relative', minHeight: '85vh', background: '#F2EDE3', overflow: 'hidden' }}>
      {/* Dot grid (only on slide 1) */}
      {current === 0 && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          backgroundImage: 'radial-gradient(circle, rgba(7,15,10,0.09) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />
      )}

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0, zIndex: 2 }}
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      {/* Progress dot indicators */}
      <div style={{ position: 'absolute', bottom: 56, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
        {[0, 1].map((i) => (
          <button key={i} onClick={() => go(i)}
            style={{
              position: 'relative',
              width: i === current ? 32 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0,
              background: current === 0 ? 'rgba(27,67,50,0.15)' : 'rgba(255,255,255,0.2)',
              transition: 'width 0.3s ease', overflow: 'hidden',
            }}>
            {i === current && (
              <motion.div key={`prog-${current}`} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: CYCLE_INTERVAL / 1000, ease: 'linear' }}
                style={{ position: 'absolute', inset: 0, background: '#FFB400', transformOrigin: 'left', borderRadius: 4 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Arrows — gold tinted */}
      {[{ label: '‹', fn: () => go((current - 1 + 2) % 2), side: 'left' }, { label: '›', fn: next, side: 'right' }].map(({ label, fn, side }) => (
        <button key={side} onClick={fn}
          style={{
            position: 'absolute', top: '50%', [side]: 20, transform: 'translateY(-50%)',
            width: 40, height: 40, borderRadius: '50%', zIndex: 10,
            background: 'rgba(255,179,0,0.88)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,179,0,0.6)', fontSize: 20, color: '#1A1200',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s, transform 0.15s', fontWeight: 700,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,179,0,1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,179,0,0.88)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >
          {label}
        </button>
      ))}
    </section>
  );
}

function ProblemCard({ problem, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32, y: 8 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: 'var(--bg-card)', borderRadius: 12, borderLeft: '3px solid rgba(245,166,35,0.5)', padding: '24px 22px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
        {problemIcons[index % problemIcons.length]}
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{problem.title}</h3>
      </div>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65, fontWeight: 400 }}>{problem.body}</p>
    </motion.div>
  );
}

function ProductCard({ slug, index, inView }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  const color = stageColors[slug];
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/products/${slug}`} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
        <div
          style={{ background: 'var(--bg-card)', borderRadius: 12, borderLeft: `3px solid ${color}`, padding: '22px 20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 0.2s, transform 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 28px ${color}20`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color }}>{product.acatAction}</span>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', margin: '7px 0', letterSpacing: '-0.01em' }}>{product.name}</h3>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 14, fontWeight: 400 }}>{product.tagline}</p>
          <span style={{ fontSize: 12, fontWeight: 600, color }}>Explore →</span>
        </div>
      </Link>
    </motion.div>
  );
}

// ── Defend Fee Tier cards ─────────────────────────────────────────────────
const defenseCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 6v5c0 3.55 3.05 6.87 7 7.93 3.95-1.06 7-4.38 7-7.93V6L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
    ),
    title: 'Defend Your Fee Tier',
    body: 'Daily proof of teaching turns marketing claims into evidence. When parents ask "what is my child actually learning?", your school has a real answer — and your competitors don\'t.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 3H3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.5"/><path d="M7 8h6M7 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
    title: 'Win Admissions',
    body: 'PTM reports parents trust. Personalised misconception diagnoses. Real-time heatmaps. The kind of evidence-backed institution today\'s parents pay premium fees for — and recommend to others.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/></svg>
    ),
    title: 'De-risk the Audit',
    body: "NEP 2020's Continuous &amp; Holistic Assessment isn't a suggestion — it's the law. Be the school that already runs it daily, not the school scrambling to retrofit when the audit arrives.",
  },
];

export default function SchoolManagement() {
  const problemsRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);
  const navRef = useRef(null);
  const problemsInView = useInView(problemsRef, { once: true, margin: '-60px' });
  const productsInView = useInView(productsRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });
  const navInView = useInView(navRef, { once: true, margin: '-40px' });

  return (
    <main style={{ paddingTop: 90 }}>

      {/* ── Hero carousel ──────────────────────────────────── */}
      <HeroCarousel />

      {/* ── Problems ──────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-subtle)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} style={{ marginBottom: 36 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16A34A', display: 'block', marginBottom: 10 }}>The problem</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>What the current system gets wrong</h2>
          </motion.div>
          <div ref={problemsRef} className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {school.problems.map((p, i) => <ProblemCard key={p.title} problem={p} index={i} inView={problemsInView} />)}
          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-base)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} style={{ marginBottom: 36 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16A34A', display: 'block', marginBottom: 10 }}>The solution</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{school.productIntro}</h2>
          </motion.div>
          <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5" style={{ marginBottom: 48 }}>
            {school.products.map((slug, i) => <ProductCard key={slug} slug={slug} index={i} inView={productsInView} />)}
          </div>
          <motion.div ref={ctaRef} initial={{ opacity: 0, y: 20 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginTop: 16 }}>
            <Link to="/contact" className="btn-gold">Book a Demo for School Management →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── Defend Your Fee Tier ──────────────────────────── */}
      <section style={{ background: 'var(--bg-subtle)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} style={{ marginBottom: 36 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16A34A', display: 'block', marginBottom: 10 }}>Why Gyanmai</span>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>What Gyanmai does for your school's brand</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: 36 }}>
            {defenseCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 12, padding: '28px 24px',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(22,163,74,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A', marginBottom: 16 }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, letterSpacing: '-0.01em' }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 400 }}>{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Brand statement banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="liquid-glass"
            style={{
              borderRadius: 16,
              border: '1px solid rgba(22,163,74,0.25)',
              padding: 'clamp(28px, 4vw, 44px) clamp(24px, 4vw, 40px)',
              borderLeft: '4px solid #16A34A',
            }}
          >
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', fontWeight: 700, color: '#1B4332', lineHeight: 1.35, marginBottom: 12 }}>
              In 2026, brand value isn't built on toppers. It's built on{' '}
              <span style={{ color: '#FFB400' }}>demonstrated learning.</span>
            </p>
            <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', color: 'var(--text-secondary)', fontStyle: 'italic', fontWeight: 400 }}>
              The schools that show learning — keep their brand. The schools that don't — become commodities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Let's partner ─────────────────────────────────── */}
      <section style={{ background: 'var(--bg-base)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#16A34A', display: 'block', marginBottom: 16 }}>Let's partner</span>
            <p style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.85, fontWeight: 400, marginBottom: 36,
            }}>
              Building daily, evidence-backed learning at scale isn't a feature you procure once — it's a capability your school grows with. Gyanmai is your tech partner: a patent-filed, cutting-edge, sophisticated, complete Academic Assessment and Intelligence platform — surfacing every student's thinking, gaps, and misconceptions across daily classroom checks, summative exams, and AI tutoring. So your school can act every day — not just after the exam.
            </p>
            <Link to="/contact" className="btn-gold">Start the Conversation →</Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stakeholder nav ───────────────────────────────── */}
      <section style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)', padding: 'clamp(56px, 6vw, 80px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div ref={navRef} initial={{ opacity: 0, y: 16 }} animate={navInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Also built for</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {stakeholders.filter((s) => s.slug !== 'school-management').map((s) => {
                const accent = s.gradient.includes('#4F7EF5') ? '#4F7EF5' : s.gradient.includes('#F5A623') ? '#F5A623' : '#2DC4A2';
                return (
                  <Link key={s.slug} to={s.path}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '10px 20px', borderRadius: 999,
                      border: `1px solid ${accent}35`, background: `${accent}08`,
                      color: 'var(--text-primary)', fontSize: 14, fontWeight: 600,
                      textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = `${accent}15`; e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = `${accent}08`; e.currentTarget.style.borderColor = `${accent}35`; e.currentTarget.style.color = 'var(--text-primary)'; }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent, flexShrink: 0 }} />
                    {s.label}
                    <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 400 }}>→</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
