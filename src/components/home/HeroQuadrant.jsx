import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import studentsVid from '../../assets/videos/quad-students.mp4';
import teachersVid from '../../assets/videos/quad-teachers.mp4';
import schoolsVid  from '../../assets/videos/quad-schools.mp4';
import parentsVid  from '../../assets/videos/quad-parents.mp4';

const quadrants = [
  { id: 'students',  label: 'Students',          path: '/students',         video: studentsVid, pain: 'Your wrong answers are data, not defeats.',                accent: '#4F7EF5' },
  { id: 'teachers',  label: 'Teachers',           path: '/teachers',         video: teachersVid, pain: 'Know who failed. Finally know why.',                      accent: '#2DC4A2' },
  { id: 'schools',   label: 'School Management',  path: '/school-management',video: schoolsVid,  pain: 'Brand value is learning outcomes, not toppers.',          accent: '#FFB400' },
  { id: 'parents',   label: 'Parents',            path: '/parents',          video: parentsVid,  pain: '60% in Maths — but what does that actually mean?',        accent: '#E85C7A' },
];

const CYCLE_INTERVAL = 4200;

export default function HeroQuadrant() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setActiveIdx((i) => (i + 1) % quadrants.length), CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = quadrants[activeIdx];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        minHeight: 520,
        background: '#05070E',
        overflow: 'hidden',
      }}
    >
      {/* Section label — top left */}
      <div style={{
        position: 'absolute', top: 36, left: 'clamp(28px, 4vw, 56px)',
        zIndex: 20,
      }}>
        <span style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
        }}>
          Who we serve
        </span>
      </div>

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
            bottom: 'clamp(76px, 11vh, 108px)',
            left: 'clamp(28px, 4vw, 56px)',
            zIndex: 10, maxWidth: 540,
          }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 2.8vw, 36px)',
            fontWeight: 700, color: '#fff',
            lineHeight: 1.2,
            textShadow: '0 2px 24px rgba(0,0,0,0.55)',
            marginBottom: 14,
          }}>
            {active.pain}
          </p>
          <Link
            to={active.path}
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
              <button
                key={q.id}
                onClick={() => { setActiveIdx(i); setIsPaused(true); }}
                onMouseEnter={(e) => { setIsPaused(true); setActiveIdx(i); if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onMouseLeave={(e) => { setIsPaused(false); if (!isActive) e.currentTarget.style.background = 'none'; }}
                style={{
                  flex: 1, background: isActive ? `${q.accent}15` : 'none',
                  border: 'none',
                  borderRight: i < quadrants.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  padding: '14px 16px 20px',
                  cursor: 'pointer', position: 'relative', textAlign: 'left',
                  transition: 'background 0.3s',
                }}
              >
                {isActive && (
                  <motion.div
                    key={`p-${q.id}-${activeIdx}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: CYCLE_INTERVAL / 1000, ease: 'linear' }}
                    style={{
                      position: 'absolute', top: -1, left: 0, right: 0,
                      height: 2, background: q.accent, transformOrigin: 'left',
                    }}
                  />
                )}
                <div style={{
                  width: 4, height: 4, borderRadius: '50%',
                  background: isActive ? q.accent : 'rgba(255,255,255,0.18)',
                  marginBottom: 6, transition: 'background 0.35s',
                }} />
                <span style={{
                  display: 'block', fontSize: 11, fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.32)',
                  letterSpacing: '0.02em', transition: 'color 0.3s', whiteSpace: 'nowrap',
                }}>
                  {q.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
