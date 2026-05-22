import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import useMobile from '../../hooks/useMobile';

import studentsVid from '../../assets/videos/quad-students.mp4';
import teachersVid from '../../assets/videos/quad-teachers.mp4';
import schoolsVid  from '../../assets/videos/school-video.mp4';
import parentsVid  from '../../assets/videos/parents-worried.mp4';

const quadrants = [
  { id: 'students',  label: 'Students',     mobileLabel: 'Students',  path: '/students',         video: studentsVid, pain: 'Your wrong answers are data, not defeats.',                accent: '#4F7EF5' },
  { id: 'teachers',  label: 'Teachers',     mobileLabel: 'Teachers',  path: '/teachers',         video: teachersVid, pain: 'Know who failed. Finally know why.',                      accent: '#2DC4A2' },
  { id: 'schools',   label: 'School Management',  mobileLabel: 'Schools',   path: '/school-management',video: schoolsVid,  pain: 'Brand value is learning outcomes, not toppers.',          accent: '#FFB400' },
  { id: 'parents',   label: 'Parents',      mobileLabel: 'Parents',   path: '/parents',          video: parentsVid,  pain: '60% in Maths — but what does that actually mean?',        accent: '#E85C7A' },
];

const CYCLE_INTERVAL = 10000;

export default function HeroQuadrant() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useMobile();
  const navigate = useNavigate();
  const touchStartX = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setActiveIdx((i) => (i + 1) % quadrants.length), CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = quadrants[activeIdx];

  const handleSectionClick = () => navigate(active.path);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) {
      e.stopPropagation();
      setIsPaused(true);
      if (diff > 0) setActiveIdx((i) => (i + 1) % quadrants.length);
      else setActiveIdx((i) => (i - 1 + quadrants.length) % quadrants.length);
    }
    touchStartX.current = null;
  };

  return (
    <section
      onClick={handleSectionClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '80vh' : '85vh',
        minHeight: 480,
        background: '#05070E',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Section label — top left */}
      <div style={{
        position: 'absolute', top: 28, left: 'clamp(20px, 4vw, 56px)',
        zIndex: 20,
      }}>
        <span style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
        }}>
          Who we serve
        </span>
      </div>

      {/* Pause / resume button — top right */}
      <button
        onClick={(e) => { e.stopPropagation(); setIsPaused(p => !p); }}
        style={{
          position: 'absolute', top: 24, right: 'clamp(20px, 4vw, 56px)', zIndex: 20,
          width: 28, height: 28, borderRadius: '50%',
          background: 'rgba(255,179,0,0.12)', border: '1px solid rgba(255,179,0,0.3)',
          color: '#FFB400', fontSize: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        }}
      >
        {isPaused ? '▶' : '⏸'}
      </button>

      {/* Stacked video panels — crossfade */}
      {quadrants.map((q, i) => (
        <motion.div
          key={q.id}
          animate={{ opacity: i === activeIdx ? 1 : 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        >
          <video autoPlay muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={q.video} type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(5,7,14,0.55) 0%, rgba(5,7,14,0.18) 40%, rgba(5,7,14,0.65) 70%, rgba(5,7,14,0.94) 100%)',
          }} />
          {/* Accent bottom line */}
          <motion.div
            animate={{ opacity: i === activeIdx ? 0.7 : 0 }}
            transition={{ duration: 0.7 }}
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: 2, background: q.accent,
              boxShadow: `0 0 32px 6px ${q.accent}`,
            }}
          />
        </motion.div>
      ))}

      {/* Pain statement */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45 }}
          style={{
            position: 'absolute',
            bottom: isMobile ? 'clamp(80px, 16vh, 120px)' : 'clamp(104px, 14vh, 136px)',
            left: 'clamp(20px, 4vw, 56px)',
            right: isMobile ? 'clamp(20px, 4vw, 56px)' : 'auto',
            zIndex: 10,
            maxWidth: isMobile ? 'none' : 540,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? 'clamp(15px, 3.8vw, 22px)' : 'clamp(14px, 1.5vw, 18px)',
            fontWeight: 700, color: '#fff',
            lineHeight: 1.2,
            textShadow: '0 2px 24px rgba(0,0,0,0.55)',
            marginBottom: 14,
          }}>
            {active.pain}
          </p>
          <Link
            to={active.path}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '9px 18px', borderRadius: 999,
              background: `${active.accent}20`,
              border: `1px solid ${active.accent}55`,
              backdropFilter: 'blur(10px)',
              color: active.accent,
              fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
              textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = `${active.accent}38`; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = `${active.accent}20`; }}
          >
            {active.label} — Explore how →
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Audience tab bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20 }}>
        <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {quadrants.map((q, i) => {
            const isActive = i === activeIdx;
            return (
              <motion.button
                key={q.id}
                onClick={(e) => { e.stopPropagation(); navigate(q.path); }}
                onMouseEnter={() => { setIsPaused(true); setActiveIdx(i); }}
                onMouseLeave={() => setIsPaused(false)}
                animate={{ background: isActive ? `${q.accent}22` : 'rgba(0,0,0,0)' }}
                transition={{ duration: 0.3 }}
                style={{
                  flex: 1,
                  border: 'none',
                  borderRight: i < quadrants.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  padding: isMobile ? '12px 6px 16px' : '16px 16px 22px',
                  cursor: 'pointer', position: 'relative', textAlign: 'left',
                  // Minimum touch target height
                  minHeight: isMobile ? 56 : 'auto',
                }}
              >
                {/* Progress bar */}
                {isActive && (
                  <motion.div
                    key={`p-${q.id}-${activeIdx}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: CYCLE_INTERVAL / 1000, ease: 'linear' }}
                    style={{
                      position: 'absolute', top: -1, left: 0, right: 0,
                      height: 3, background: q.accent,
                      boxShadow: `0 0 12px 2px ${q.accent}`,
                      transformOrigin: 'left',
                    }}
                  />
                )}
                {/* Dot indicator */}
                <motion.div
                  animate={{
                    width: isActive ? 8 : 4,
                    height: isActive ? 8 : 4,
                    background: isActive ? q.accent : 'rgba(255,255,255,0.22)',
                    boxShadow: isActive ? `0 0 8px 2px ${q.accent}80` : 'none',
                  }}
                  transition={{ duration: 0.25 }}
                  style={{ borderRadius: '50%', marginBottom: 8 }}
                />
                <span style={{
                  display: 'block',
                  fontSize: isMobile ? 11 : 12,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.38)',
                  letterSpacing: '0.02em', transition: 'color 0.25s',
                  lineHeight: 1.3,
                }}>
                  {isMobile ? q.mobileLabel : q.label}
                </span>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: 10, color: q.accent, fontWeight: 600, display: 'block', marginTop: 3 }}
                  >
                    Active ↑
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
