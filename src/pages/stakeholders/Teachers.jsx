import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stakeholders } from '../../data/stakeholders';
import { products } from '../../data/products';
import silentMajorityVideo from '../../assets/videos/silent-majority.mp4';
import teachersVideo from '../../assets/videos/quad-teachers.mp4';

const teacher = stakeholders.find((s) => s.slug === 'teachers');
const COLOR = '#2DC4A2';

const stageColors = {
  gyanbank: '#4F7EF5', gyanscan: '#2DC4A2', gyananalytx: '#F5A623', gyanguru: '#E85C7A', gyantest: '#9B6EF5',
};

const slideVariants = {
  enter: (d) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
  center: { opacity: 1, y: 0 },
  exit: (d) => ({ opacity: 0, y: d > 0 ? -40 : 40 }),
};

const CYCLE_INTERVAL = 6000;

// ── Slide 1: Current landing ──────────────────────────────────────────────
function Slide1() {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      background: '#06080F',
    }}>
      <video autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}>
        <source src={teachersVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,8,15,0.35) 0%, rgba(6,8,15,0.18) 40%, rgba(6,8,15,0.55) 80%, rgba(6,8,15,0.85) 100%)' }} />
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', height: '100%',
        padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 64px)',
      }}>
        <motion.span
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: 'inline-block', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: COLOR, background: `${COLOR}20`, border: `1px solid ${COLOR}40`,
            padding: '5px 16px', borderRadius: 999, marginBottom: 28,
          }}
        >
          Built for Teachers
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 18, maxWidth: 760 }}
        >
          {teacher.heroHeadline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.7 }}
          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, maxWidth: 500, fontWeight: 400, marginBottom: 36 }}
        >
          {teacher.heroSub}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.5 }}>
          <Link to="/contact" className="btn-gold">Book a Demo →</Link>
        </motion.div>
      </div>
    </div>
  );
}

// ── Slide 2: Stop Grading Papers ──────────────────────────────────────────
function Slide2() {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%',
      background: 'var(--bg-base)',
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',
      padding: 'clamp(80px, 10vw, 112px) clamp(32px, 6vw, 80px) clamp(48px, 7vw, 96px)',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(45,196,162,0.06) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent 10%, rgba(45,196,162,0.30) 50%, transparent 90%)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLOR, marginBottom: 24 }}
        >
          Built for Teachers
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(36px, 6.5vw, 80px)', fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.035em', marginBottom: 28 }}
        >
          <span style={{ color: '#1B4332' }}>Stop Grading Papers.</span>
          <br />
          <span style={{ color: '#FFB400' }}>Start Understanding Students.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 560, fontWeight: 400, marginBottom: 36 }}
        >
          GyanScan transforms your classroom assessments from a marks-counting exercise into a powerful diagnostic tool — showing you exactly which concepts each student has mastered, which they're struggling with, and why.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
          <Link to="/contact" className="btn-gold">Book a Demo →</Link>
        </motion.div>
      </div>
    </div>
  );
}

// ── Slide 3: Silent Majority ──────────────────────────────────────────────
function Slide3() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <video autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={silentMajorityVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,8,15,0.62)' }} />
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        height: '100%', padding: 'clamp(48px, 7vw, 96px) clamp(32px, 6vw, 80px)',
        maxWidth: 760,
      }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: COLOR, marginBottom: 24 }}
        >
          THE SILENT MAJORITY
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 28 }}
        >
          Some hands never go up.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.7 }}
          style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, maxWidth: 520, fontWeight: 400, marginBottom: 32 }}
        >
          Fear. Peer pressure. Cultural deference. These students stay invisible to the formative loop — and walk into the exam carrying gaps no one knew about.
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
  const next = useCallback(() => go((current + 1) % 3), [current, go]);

  useEffect(() => { const t = setTimeout(next, CYCLE_INTERVAL); return () => clearTimeout(t); }, [current, next]);

  const slides = [Slide1, Slide2, Slide3];
  const Slide = slides[current];
  const isDark = current !== 1;

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
      <div style={{ position: 'absolute', bottom: 56, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
        {[0, 1, 2].map((i) => (
          <button key={i} onClick={() => go(i)} style={{
            position: 'relative',
            width: i === current ? 32 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0,
            background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(27,67,50,0.15)',
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
      {[{ label: '‹', fn: () => go((current - 1 + 3) % 3), side: 'left' }, { label: '›', fn: next, side: 'right' }].map(({ label, fn, side }) => (
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

// ── Superpowers data ──────────────────────────────────────────────────────
const superpowers = [
  {
    color: COLOR,
    title: 'Instant Answer Capture',
    body: 'Students hold up GyanScan Cube Markers — one scan captures the entire class\'s answers in under 10 seconds. No OMR sheets, no manual counting, no wasted paper.',
    tag: '10 seconds to capture 40 answers',
  },
  {
    color: '#E85C7A',
    title: 'Diagnostic Distractor Analysis',
    body: 'Every wrong option is mapped to a specific misconception. When a student picks "B" instead of "C", you don\'t just see "wrong" — you see exactly which concept they confused and why.',
    tag: 'Know the WHY behind every mistake',
  },
  {
    color: '#4F7EF5',
    title: 'Class-Level Intelligence',
    body: 'See your entire class on one screen: who understood, who partially grasped, and who needs intervention. Filter by subtopic, difficulty, and comprehension level — all in real time.',
    tag: 'One screen, full class picture',
  },
  {
    color: '#9B6EF5',
    title: 'Progress Tracking Across Exams',
    body: 'Conduct multiple assessments on the same topic and watch the class trend line. Identify top improvers, students who need attention, and subtopics that are finally clicking — or still stuck.',
    tag: 'Track growth, not just grades',
  },
  {
    color: '#F5A623',
    title: 'Subtopic × Exam Heatmap',
    body: 'A color-coded grid showing how each subtopic\'s accuracy changes exam over exam. Instantly see which concepts the class is mastering and which need re-teaching.',
    tag: 'Precision re-teaching targets',
  },
  {
    color: '#E85C7A',
    title: 'GyanGuru AI Tutor',
    body: 'Students who got answers wrong can tap \'Explain This\' and get a personalised, Socratic explanation from our AI tutor — in the language of their textbook, referencing the exact page and section.',
    tag: 'Every student gets a personal tutor',
  },
  {
    color: '#4F7EF5',
    title: 'Smart Question Bank',
    body: 'Build questions with diagnostic distractors, subtopic tags, difficulty levels, and concept references. Reuse them across exams. The bank grows smarter as you teach.',
    tag: 'Build once, diagnose forever',
  },
  {
    color: COLOR,
    title: 'Automated Student Reports',
    body: 'Generate beautiful PDF reports per student with score breakdowns, subtopic analysis, strengths, weaknesses, and AI mentor commentary — in one click. Bulk download or email to parents.',
    tag: 'Parent-ready reports in 1 click',
  },
];

// ── How it works steps ────────────────────────────────────────────────────
const howItWorks = [
  { n: 1, title: 'Create & Tag Questions', body: 'Add questions with subtopics, difficulty, and diagnostic distractors. Each wrong option maps to a specific misconception.' },
  { n: 2, title: 'Run the Exam', body: 'Start a live session. Students show their GyanScan Cube Markers. You scan with any camera — phone, tablet, or webcam.' },
  { n: 3, title: 'Get Instant Analytics', body: 'The moment the exam ends, you see class-level comprehension bands, subtopic accuracy, and individual student breakdowns.' },
  { n: 4, title: 'Track Progress Over Time', body: 'Conduct multiple exams on the same topic. Watch trend lines, identify improvers and decliners, and see which subtopics are improving.' },
  { n: 5, title: 'Let AI Help Students', body: 'Students who got answers wrong can ask GyanGuru for an explanation. It uses Socratic questioning, referencing their exact textbook.' },
  { n: 6, title: 'Share Reports', body: 'Generate PDF reports per student — with scores, subtopic analysis, strengths, weaknesses, and AI commentary. Email to parents or download as ZIP.' },
];

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

export default function Teachers() {
  const productsRef = useRef(null);
  const productsInView = useInView(productsRef, { once: true, margin: '-60px' });

  return (
    <main style={{ paddingTop: 90 }}>

      {/* ── Hero carousel ─────────────────────────────────── */}
      <HeroCarousel />

      {/* ── What gets it wrong ────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} style={{ marginBottom: 36 }}>
          <span className="section-label" style={{ marginBottom: 10, color: COLOR }}>The problem</span>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>What the current system gets wrong</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {teacher.problems.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24, y: 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className="liquid-glass"
              style={{ borderRadius: 12, borderLeft: `2px solid ${COLOR}`, padding: '24px 22px' }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em', marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 400 }}>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── The solution ──────────────────────────────────── */}
      <section style={{ background: 'var(--bg-subtle)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} style={{ marginBottom: 36 }}>
            <span className="section-label" style={{ marginBottom: 10, color: COLOR }}>The solution</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{teacher.productIntro}</h2>
          </motion.div>
          <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5" style={{ alignItems: 'stretch', marginBottom: 48 }}>
            {teacher.products.map((slug, i) => <ProductCard key={slug} slug={slug} index={i} inView={productsInView} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <Link to="/contact" className="btn-gold">Book a Demo for Teachers →</Link>
          </div>
        </div>
      </section>

      {/* ── Your tools ────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-base)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} style={{ marginBottom: 40, textAlign: 'center' }}>
            <span className="section-label" style={{ marginBottom: 10, color: COLOR }}>Your tools</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: 10 }}>How it works — step by step</h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', fontWeight: 300 }}>From question creation to parent reports in 6 simple steps</p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {howItWorks.map((step, i) => (
              <motion.div key={step.n}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                style={{ display: 'flex', gap: 20, padding: '20px 0', borderBottom: i < howItWorks.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'flex-start' }}
              >
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${COLOR}18`, border: `2px solid ${COLOR}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: COLOR }}>{step.n}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em', marginBottom: 6 }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 400 }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stakeholder nav ───────────────────────────────── */}
      <section style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)', padding: 'clamp(56px, 6vw, 80px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }}>
            <p className="section-label" style={{ marginBottom: 20 }}>Also built for</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {stakeholders.filter((s) => s.slug !== 'teachers').map((s) => {
                const accent = s.gradient.includes('#4F7EF5') ? '#4F7EF5' : s.gradient.includes('#F5A623') ? '#F5A623' : s.gradient.includes('#0D0F1A') ? '#4F7EF5' : '#2DC4A2';
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
