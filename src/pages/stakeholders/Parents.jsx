import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stakeholders } from '../../data/stakeholders';
import { products } from '../../data/products';
import parentsWorriedVideo from '../../assets/videos/parents-worried.mp4';

const parent = stakeholders.find((s) => s.slug === 'parents');
const COLOR = '#F5A623';

const stageColors = {
  gyanbank: '#4F7EF5', gyanscan: '#2DC4A2', gyananalytx: '#F5A623', gyanguru: '#E85C7A', gyantest: '#9B6EF5',
};

const CYCLE_INTERVAL = 6000;

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};

// ── Slide 1: The Worry ────────────────────────────────────────────────────
function Slide1() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <video autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={parentsWorriedVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,8,15,0.35) 0%, rgba(6,8,15,0.20) 40%, rgba(6,8,15,0.55) 80%, rgba(6,8,15,0.85) 100%)' }} />
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(48px, 7vw, 96px) clamp(32px, 6vw, 80px)',
        maxWidth: 820,
      }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: COLOR, marginBottom: 24 }}
        >
          THE WORRY
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 24 }}
        >
          "My kid scored 60 in Maths."
          <br />
          <span style={{ color: 'rgba(255,255,255,0.82)', fontWeight: 600, fontSize: '0.75em' }}>But what does that actually mean?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.7 }}
          style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85, maxWidth: 520, fontWeight: 400, marginBottom: 24 }}
        >
          A mark tells you where your child ranks. It doesn't tell you what my kid misunderstood, how to help, or what to do before the next exam.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.6 }}
          style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontStyle: 'italic', letterSpacing: '0.02em', marginBottom: 28 }}
        >
          — Parent experience surveys · 2024–26
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.5 }}>
          <Link to="/contact" className="btn-gold">Book a Demo →</Link>
        </motion.div>
      </div>
    </div>
  );
}

// ── Slide 2: Original hero ────────────────────────────────────────────────
function Slide2() {
  return (
    <div style={{
      position: 'relative',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', height: '100%',
      background: 'var(--bg-base)',
      padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 64px)',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(245,166,35,0.07) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 10%, rgba(255,180,0,0.30) 50%, transparent 90%)' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.span
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: 'inline-block', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: COLOR, background: `${COLOR}14`, border: `1px solid ${COLOR}30`,
            padding: '5px 16px', borderRadius: 999, marginBottom: 28,
          }}
        >
          Built for Parents
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(34px, 6vw, 72px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 18, maxWidth: 700, margin: '0 auto 18px' }}
        >
          {parent.heroHeadline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.7 }}
          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 480, fontWeight: 400, margin: '0 auto 36px' }}
        >
          {parent.heroSub}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.5 }}>
          <Link to="/contact" className="btn-gold">Book a Demo →</Link>
        </motion.div>
      </div>
    </div>
  );
}

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const go = useCallback((idx) => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }, [current]);
  const next = useCallback(() => go((current + 1) % 2), [current, go]);

  useEffect(() => { const t = setTimeout(next, CYCLE_INTERVAL); return () => clearTimeout(t); }, [current, next]);

  const slides = [Slide1, Slide2];
  const Slide = slides[current];

  return (
    <section style={{ position: 'relative', minHeight: '88vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={current} custom={direction} variants={slideVariants}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0 }}>
          <Slide />
        </motion.div>
      </AnimatePresence>
      <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
        {[0, 1].map((i) => (
          <button key={i} onClick={() => go(i)} style={{
            position: 'relative',
            width: i === current ? 32 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0,
            background: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(27,67,50,0.15)',
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
      {[{ label: '‹', fn: () => go((current - 1 + 2) % 2), side: 'left' }, { label: '›', fn: next, side: 'right' }].map(({ label, fn, side }) => (
        <button key={side} onClick={fn} style={{
          position: 'absolute', top: '50%', [side]: 20, transform: 'translateY(-50%)',
          width: 40, height: 40, borderRadius: '50%', zIndex: 10,
          background: 'rgba(255,179,0,0.88)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,179,0,0.6)', fontSize: 20, color: '#1A1200',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s, transform 0.15s', fontWeight: 700,
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,179,0,1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,179,0,0.88)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >{label}</button>
      ))}
    </section>
  );
}

function ProductCard({ slug, index, inView }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  const color = stageColors[slug];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%' }}
    >
      <Link to={`/products/${slug}`} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
        <div
          style={{ background: 'var(--bg-card)', borderRadius: 4, borderLeft: `2px solid ${color}`, padding: '22px 20px', boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 0.2s, transform 0.2s', height: '100%' }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color }}>{product.acatAction}</span>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', margin: '7px 0', letterSpacing: '-0.01em' }}>{product.name}</h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: 14, fontWeight: 400 }}>{product.tagline}</p>
          <span style={{ fontSize: 12, fontWeight: 600, color }}>Explore →</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Parents() {
  const productsRef = useRef(null);
  const productsInView = useInView(productsRef, { once: true, margin: '-60px' });

  return (
    <main style={{ paddingTop: 90 }}>

      <HeroCarousel />

      {/* ── What parents actually need ───────────────────── */}
      <section style={{ padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)', background: 'var(--bg-base)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} style={{ marginBottom: 36 }}>
            <span className="section-label" style={{ marginBottom: 10, color: COLOR }}>What a report should tell you</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Not 60%. The reason behind 60%.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 540, lineHeight: 1.75, fontWeight: 400, marginTop: 10 }}>
              GyanAnalytix gives you a subtopic-level breakdown — which concepts your child owns, which ones are slipping, and exactly what to focus on next.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'Subtopic mastery', body: 'Instead of one overall mark, you see how my kid did on each concept — addition, simplification, fractions — separately.', icon: '📊' },
              { label: 'Named misconceptions', body: '"Confuses LCM with product" is more actionable than "struggles with fractions." You know exactly what\'s wrong.', icon: '🔍' },
              { label: 'Clear next steps', body: 'Each report ends with recommendations — specific topics to revisit, and how to support your child at home.', icon: '✅' },
            ].map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ background: 'var(--bg-card)', borderRadius: 4, borderLeft: `2px solid ${COLOR}`, padding: '24px 22px', boxShadow: 'var(--shadow-sm)' }}
              >
                <div style={{ fontSize: 24, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em', marginBottom: 8 }}>{item.label}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 400 }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problems ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)', background: 'var(--bg-subtle)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} style={{ marginBottom: 36 }}>
            <span className="section-label" style={{ marginBottom: 10, color: COLOR }}>The problem</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>What the current system fails to show you</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {parent.problems.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24, y: 8 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                style={{ background: 'var(--bg-card)', borderRadius: 4, borderLeft: `2px solid ${COLOR}`, padding: '24px 22px', boxShadow: 'var(--shadow-sm)' }}
              >
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em', marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 400 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products / CTA ────────────────────────────────── */}
      <section style={{ background: 'var(--bg-base)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} style={{ marginBottom: 36 }}>
            <span className="section-label" style={{ marginBottom: 10, color: COLOR }}>The solution</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{parent.productIntro}</h2>
          </motion.div>
          <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-1 gap-2.5" style={{ maxWidth: 480, marginBottom: 48 }}>
            {parent.products.map((slug, i) => <ProductCard key={slug} slug={slug} index={i} inView={productsInView} />)}
          </div>
          <div style={{ marginTop: 16 }}>
            <Link to="/contact" className="btn-gold">Book a Demo →</Link>
          </div>
        </div>
      </section>

      {/* ── Stakeholder nav ───────────────────────────────── */}
      <section style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)', padding: 'clamp(56px, 6vw, 80px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}>
            <p className="section-label" style={{ marginBottom: 20 }}>Also built for</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {stakeholders.filter((s) => s.slug !== 'parents').map((s) => {
                const accent = s.gradient.includes('#2DC4A2') ? '#2DC4A2' : s.gradient.includes('#4F7EF5') ? '#4F7EF5' : s.gradient.includes('#0D0F1A') ? '#4F7EF5' : '#9B6EF5';
                return (
                  <Link key={s.slug} to={s.path}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 999, border: `1px solid ${accent}30`, background: `${accent}08`, color: 'var(--text-primary)', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s, color 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = `${accent}18`; e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = `${accent}08`; e.currentTarget.style.borderColor = `${accent}30`; e.currentTarget.style.color = 'var(--text-primary)'; }}
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
