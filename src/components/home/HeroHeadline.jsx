import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import gyanmaiLogo from '../../assets/logos/gyanmai-final-logo-2.png';
import useMobile from '../../hooks/useMobile';

// ── Slide definitions ─────────────────────────────────────────────────────
const SLIDES = ['welcome', 'hero', 'school'];
const CYCLE_INTERVAL = 10000;

const slideVariants = {
  enter: (dir) => ({ opacity: 0, y: dir > 0 ? 32 : -32 }),
  center: { opacity: 1, y: 0 },
  exit: (dir) => ({ opacity: 0, y: dir > 0 ? -32 : 32 }),
};

const SLIDE_PAD = 'clamp(32px, 7vw, 100px)';

// PNG is 500×500 — logo content is the middle ~42%, with ~29% whitespace top & bottom.
function SlideLogo() {
  return (
    <div style={{
      width: 'clamp(200px, 30vw, 400px)',
      aspectRatio: '500 / 180',
      overflow: 'hidden',
      marginBottom: 8,
      flexShrink: 0,
    }}>
      <img
        src={gyanmaiLogo}
        alt="Gyanmai"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          transform: 'translateY(-31%)',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}

// ── Slide 1: Welcome ──────────────────────────────────────────────────────
function SlideWelcome() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-start',
      textAlign: 'center', width: '100%', minHeight: '100%',
      padding: `96px ${SLIDE_PAD} clamp(48px, 7vh, 88px)`,
    }}>
      <SlideLogo />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55 }}
        style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 28 }}
      >
        Research-Driven EdTech
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          maxWidth: 820,
        }}
      >
        <span style={{ display: 'block', fontSize: 'clamp(16px, 2.4vw, 32px)', fontWeight: 500, opacity: 0.75, marginBottom: 6 }}>
          Welcome to the new era of
        </span>
        <span style={{ display: 'block', fontSize: 'clamp(36px, 6.5vw, 88px)', fontWeight: 900, color: 'var(--gold)' }}>
          Academic Intelligence.
        </span>
      </motion.h1>
    </div>
  );
}

// ── Slide 2: Original Hero ────────────────────────────────────────────────
function SlideHero() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-start',
      textAlign: 'center', width: '100%', minHeight: '100%',
      padding: `96px ${SLIDE_PAD} clamp(48px, 7vh, 88px)`,
    }}>
      <SlideLogo />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55 }}
        style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 28 }}
      >
        Research-Driven EdTech
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(32px, 5.2vw, 72px)', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.032em', color: 'var(--text-primary)', margin: '0 auto', maxWidth: 760 }}
      >
        Makes every child&apos;s
        <br />
        <span style={{ color: 'var(--gold)' }}>learning visible.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.65 }}
        style={{ marginTop: 24, fontWeight: 600, fontSize: 'clamp(13px, 1.4vw, 17px)', color: 'var(--text-primary)', opacity: 0.7, letterSpacing: '0.005em' }}
      >
        Every child. · Every concept. · Every day.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.52, duration: 0.65 }}
        style={{ marginTop: 14, fontSize: 'clamp(12px, 1.1vw, 14px)', color: 'var(--text-muted)', fontWeight: 400, maxWidth: 500, margin: '14px auto 0', lineHeight: 1.8 }}
      >
        Built on the highest-impact interventions in education research — not opinion, not trend.
      </motion.p>
    </div>
  );
}

// ── Slide 3: School Owners ────────────────────────────────────────────────
function SlideSchool() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', width: '100%', minHeight: '100%',
      padding: `96px ${SLIDE_PAD} clamp(48px, 7vh, 88px)`,
      overflowY: 'auto',
    }}>
      <SlideLogo />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.55 }}
        style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#16A34A', marginBottom: 28 }}
      >
        For School Chairmen &amp; Owners
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontSize: 'clamp(26px, 4.5vw, 62px)', fontWeight: 800, lineHeight: 1.07, letterSpacing: '-0.03em', color: 'var(--text-primary)', maxWidth: 820 }}
      >
        Multiply your school brand value and be
        <br />
        <span style={{ color: '#16A34A', fontSize: 'clamp(32px, 5.5vw, 74px)' }}>competition-proof.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.65 }}
        style={{ marginTop: 18, fontSize: 'clamp(13px, 1.3vw, 16px)', color: 'var(--text-muted)', fontWeight: 400, lineHeight: 1.7, maxWidth: 540 }}
      >
        Leverage world's first ACATT framework. Enjoy steep growth in new admissions. Benefit from our research-backed Academic Intelligence platform.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.46, duration: 0.5 }}
        style={{ marginTop: 28 }}
      >
        <Link to="/school-management" className="btn-gold">Learn More →</Link>
      </motion.div>
    </div>
  );
}

// ── Dot indicator (shared between mobile/desktop layouts) ─────────────────
function DotIndicator({ i, current, isMobile, onClick, isPaused }) {
  const isActive = i === current;
  const trackW = isMobile ? (isActive ? 26 : 6) : 5;
  const trackH = isMobile ? 5 : (isActive ? 26 : 6);
  return (
    <button
      onClick={() => onClick(i)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        minWidth: 20, minHeight: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: isMobile ? 'width 0.3s ease' : 'height 0.3s ease',
      }}
      aria-label={`Go to slide ${i + 1}`}
    >
      <div style={{
        width: trackW, height: trackH,
        borderRadius: 99,
        background: isActive ? 'rgba(27,67,50,0.18)' : 'rgba(27,67,50,0.12)',
        overflow: 'hidden',
        transition: isMobile ? 'width 0.3s ease' : 'height 0.3s ease',
        position: 'relative',
      }}>
        {isActive && (
          <motion.div
            key={`prog-${current}-${isPaused}`}
            initial={isMobile ? { scaleX: 0 } : { scaleY: 0 }}
            animate={isMobile ? { scaleX: isPaused ? 0 : 1 } : { scaleY: isPaused ? 0 : 1 }}
            transition={{ duration: isPaused ? 0 : CYCLE_INTERVAL / 1000, ease: 'linear' }}
            style={{
              position: 'absolute', inset: 0,
              background: '#FFB400',
              transformOrigin: isMobile ? 'left' : 'top',
              borderRadius: 99,
            }}
          />
        )}
      </div>
    </button>
  );
}

// ── Main component ────────────────────────────────────────────────────────
export default function HeroHeadline() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useMobile();
  const touchStartX = useRef(null);

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => go((current + 1) % SLIDES.length), [current, go]);
  const prev = useCallback(() => go((current - 1 + SLIDES.length) % SLIDES.length), [current, go]);

  useEffect(() => {
    if (isPaused) return;
    const t = setTimeout(next, CYCLE_INTERVAL);
    return () => clearTimeout(t);
  }, [current, next, isPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const slideComponents = [SlideWelcome, SlideHero, SlideSchool];
  const SlideContent = slideComponents[current];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        height: '100dvh', minHeight: 620,
        background: '#F2EDE3',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(7,15,10,0.09) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Warm amber glow */}
      <div style={{
        position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)',
        width: '130%', height: '60%',
        background: 'radial-gradient(ellipse 65% 100% at 50% 100%, rgba(255,179,0,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent 10%, rgba(255,179,0,0.30) 50%, transparent 90%)',
        pointerEvents: 'none',
      }} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto' }}
        >
          <SlideContent />
        </motion.div>
      </AnimatePresence>

      {/* Desktop: progress dots on right side, vertical */}
      {!isMobile && (
        <div style={{
          position: 'absolute', right: 72, top: '50%', transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', gap: 6, zIndex: 10, alignItems: 'center',
        }}>
          {SLIDES.map((_, i) => (
            <DotIndicator key={i} i={i} current={current} isMobile={false} onClick={go} isPaused={isPaused} />
          ))}
          <button onClick={() => setIsPaused(p => !p)} style={{
            marginTop: 6, width: 22, height: 22, borderRadius: '50%',
            background: 'rgba(255,179,0,0.12)', border: '1px solid rgba(255,179,0,0.3)',
            color: '#FFB400', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>
            {isPaused ? '▶' : '⏸'}
          </button>
        </div>
      )}

      {/* Mobile: progress dots at bottom center, horizontal */}
      {isMobile && (
        <div style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'row', gap: 8, zIndex: 10,
          alignItems: 'center',
        }}>
          {SLIDES.map((_, i) => (
            <DotIndicator key={i} i={i} current={current} isMobile={true} onClick={go} isPaused={isPaused} />
          ))}
          <button onClick={() => setIsPaused(p => !p)} style={{
            width: 22, height: 22, borderRadius: '50%', marginLeft: 4,
            background: 'rgba(255,179,0,0.12)', border: '1px solid rgba(255,179,0,0.3)',
            color: '#FFB400', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>
            {isPaused ? '▶' : '⏸'}
          </button>
        </div>
      )}

      {/* Prev / Next arrows — desktop only (mobile uses swipe) */}
      {!isMobile && [
        { label: '‹', fn: prev, side: 'left' },
        { label: '›', fn: next, side: 'right' },
      ].map(({ label, fn, side }) => (
        <button
          key={side}
          onClick={fn}
          style={{
            position: 'absolute', top: '50%', [side]: 20, transform: 'translateY(-50%)',
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(255,179,0,0.88)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,179,0,0.6)',
            fontSize: 20, color: '#1A1200',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10, transition: 'background 0.2s, transform 0.15s',
            fontWeight: 700,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,179,0,1)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,179,0,0.88)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >
          {label}
        </button>
      ))}

      {/* Mobile swipe hint — fades after first interaction */}
      {isMobile && current === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          style={{
            position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.14em',
            color: 'rgba(27,67,50,0.35)', whiteSpace: 'nowrap',
            pointerEvents: 'none', zIndex: 10,
          }}
        >
          ← SWIPE →
        </motion.div>
      )}
    </section>
  );
}
