import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { acatStages } from '../../data/acatFramework';
import useMobile from '../../hooks/useMobile';

import gyanBankLogo    from '../../assets/logos/GyanBank-logo.png';
import gyanScanLogo    from '../../assets/logos/GyanScan-Logo.png';
import gyanAnalytxLogo from '../../assets/logos/GyanAnalytics-logo.png';
import gyanGuruLogo    from '../../assets/logos/GyanGuru-logo.png';
import gyanTestLogo    from '../../assets/logos/Gyantesta-logo.png';

const productLogos = {
  gyanbank:    gyanBankLogo,
  gyanscan:    gyanScanLogo,
  gyananalytx: gyanAnalytxLogo,
  gyanguru:    gyanGuruLogo,
  gyantest:    gyanTestLogo,
};

const VB = 520;
const CX = 260, CY = 260;
const ORBIT_R = 185;
const NODE_R = 50;
const LOGO_W = 62, LOGO_H = 30;

const nodePos = acatStages.map((_, i) => {
  const angle = (-90 + i * 72) * (Math.PI / 180);
  return {
    x: +(CX + ORBIT_R * Math.cos(angle)).toFixed(2),
    y: +(CY + ORBIT_R * Math.sin(angle)).toFixed(2),
  };
});

function arcD(i) {
  const p1 = nodePos[i];
  const p2 = nodePos[(i + 1) % 5];
  return `M ${p1.x} ${p1.y} A ${ORBIT_R} ${ORBIT_R} 0 0 1 ${p2.x} ${p2.y}`;
}

export default function AcatFlow() {
  const ref = useRef(null);
  const detailRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [clicked, setClicked] = useState(null);
  const [hovered, setHovered] = useState(null);
  const isMobile = useMobile();

  // On mobile only use click/tap — hover state stays null
  const active = (!isMobile && hovered !== null) ? hovered : clicked;
  const activeStage = active !== null ? acatStages[active] : null;

  // Auto-scroll detail panel into view when a stage is tapped on mobile
  useEffect(() => {
    if (isMobile && activeStage && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 80);
    }
  }, [isMobile, activeStage]);

  const detailPanel = (
    <AnimatePresence mode="wait">
      {activeStage ? (
        <motion.div
          key={activeStage.slug}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="liquid-glass"
          style={{
            borderRadius: 24,
            padding: isMobile ? '28px 24px' : '36px 32px',
            border: `1.5px solid ${activeStage.color}45`,
            boxShadow: `0 8px 48px ${activeStage.color}22, 0 2px 8px rgba(20,44,32,0.06)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: activeStage.color, flexShrink: 0 }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: activeStage.color }}>
              Stage {activeStage.step} — {activeStage.action}
            </span>
          </div>
          <img
            src={productLogos[activeStage.slug]}
            alt={activeStage.product}
            style={{ height: 44, width: 'auto', display: 'block', marginBottom: 20 }}
          />
          <p style={{ fontSize: 17, color: 'var(--text-primary)', lineHeight: 1.55, fontWeight: 600, fontFamily: 'var(--font-display)', marginBottom: 12, letterSpacing: '-0.01em' }}>
            {activeStage.description}
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
            {activeStage.detail}
          </p>
          <Link
            to={`/products/${activeStage.slug}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 22px', borderRadius: 999,
              background: activeStage.color, color: '#fff',
              fontSize: 13, fontWeight: 600, textDecoration: 'none',
              transition: 'opacity 0.2s',
              boxShadow: `0 4px 20px ${activeStage.color}45`,
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Explore {activeStage.product} →
          </Link>
        </motion.div>
      ) : (
        <motion.div
          key="default"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="liquid-glass"
          style={{
            borderRadius: 24,
            padding: isMobile ? '28px 24px' : '36px 32px',
            borderTop: '3px solid var(--gold)',
          }}
        >
          <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
            A Perpetual Cycle
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(21px, 2.4vw, 32px)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 18 }}>
            Author → Capture → Analyse → Teach → Test —{' '}
            <span style={{ color: 'var(--gold)', fontWeight: 800 }}>and repeat for next topic.</span>
          </h3>
          <p style={{ fontSize: 15, color: 'var(--text-primary)', lineHeight: 1.85, marginBottom: 24, fontWeight: 600, opacity: 0.82 }}>
            Every stage feeds the next. GyanTest results inform the next round of authoring in GyanBank — meaning each cycle produces sharper diagnostics than the last.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>
            {isMobile ? 'Tap a stage above to explore it' : 'Hover to preview · Click to pin a stage'}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Shared SVG orbital diagram — used on both desktop and mobile
  const orbitalSvg = (
    <svg
      viewBox={`0 0 ${VB} ${VB}`}
      style={{ width: '100%', maxWidth: isMobile ? 400 : 520, display: 'block', margin: '0 auto', overflow: 'visible' }}
    >
      <defs>
        <filter id="particle-glow-lm" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {acatStages.map((_, i) => (
          <path key={i} id={`lm-arc-${i}`} d={arcD(i)} />
        ))}
      </defs>

      {/* Orbit ring */}
      <circle cx={CX} cy={CY} r={ORBIT_R} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth={1} />
      {/* Inner dashed guide ring */}
      <circle cx={CX} cy={CY} r={105} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth={1} strokeDasharray="4 10" />

      {/* Arc segments */}
      {acatStages.map((stage, i) => (
        <g key={`arc-group-${i}`}>
          <path d={arcD(i)} fill="none" stroke={stage.color} strokeWidth={22} opacity={0.07} strokeLinecap="round" />
          <path d={arcD(i)} fill="none" stroke={stage.color} strokeWidth={2} opacity={0.45} />
          {inView && (
            <circle r={5} fill={stage.color} filter="url(#particle-glow-lm)" opacity={0.9}>
              <animateMotion dur="3.2s" repeatCount="indefinite" begin={`${i * 0.64}s`}>
                <mpath href={`#lm-arc-${i}`} />
              </animateMotion>
            </circle>
          )}
        </g>
      ))}

      {/* Center disc */}
      <circle cx={CX} cy={CY} r={72} fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth={1} />
      {/* Rotating dashed ring */}
      <circle cx={CX} cy={CY} r={84} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth={1} strokeDasharray="5 12">
        <animateTransform attributeName="transform" type="rotate"
          from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`}
          dur="28s" repeatCount="indefinite" />
      </circle>
      <text x={CX} y={CY - 10} textAnchor="middle" fill="rgba(0,0,0,0.75)" fontSize={13} fontWeight={700} letterSpacing={4} fontFamily="system-ui, sans-serif">ACATT</text>
      <text x={CX} y={CY + 10} textAnchor="middle" fill="rgba(0,0,0,0.28)" fontSize={8} letterSpacing={2.5} fontFamily="system-ui, sans-serif">FRAMEWORK</text>

      {/* Nodes */}
      {acatStages.map((stage, i) => {
        const pos = nodePos[i];
        const isHovered = !isMobile && hovered === i;
        const isPinned = clicked === i;
        const isActive = active === i;
        return (
          <g
            key={stage.slug}
            onClick={() => setClicked(clicked === i ? null : i)}
            onMouseEnter={!isMobile ? () => setHovered(i) : undefined}
            onMouseLeave={!isMobile ? () => setHovered(null) : undefined}
            style={{ cursor: 'pointer' }}
          >
            {/* Larger invisible touch target on mobile */}
            {isMobile && (
              <circle cx={pos.x} cy={pos.y} r={NODE_R + 20} fill="transparent" />
            )}

            {/* Pinned ring */}
            {isPinned && (
              <>
                <circle cx={pos.x} cy={pos.y} r={NODE_R + 16} fill={`${stage.color}12`} stroke={stage.color} strokeWidth={1.5}>
                  <animate attributeName="r" values={`${NODE_R + 12};${NODE_R + 20};${NODE_R + 12}`} dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.35;1" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx={pos.x + NODE_R - 4} cy={pos.y - NODE_R + 4} r={6} fill={stage.color} stroke="white" strokeWidth={1.5} />
                <text x={pos.x + NODE_R - 4} y={pos.y - NODE_R + 8} textAnchor="middle" fill="white" fontSize={7} fontWeight={700} fontFamily="system-ui, sans-serif">✓</text>
              </>
            )}
            {/* Hover ring — desktop only */}
            {isHovered && !isPinned && (
              <circle cx={pos.x} cy={pos.y} r={NODE_R + 10} fill={`${stage.color}0A`} stroke={`${stage.color}40`} strokeWidth={1} strokeDasharray="4 4">
                <animateTransform attributeName="transform" type="rotate"
                  from={`0 ${pos.x} ${pos.y}`} to={`360 ${pos.x} ${pos.y}`}
                  dur="4s" repeatCount="indefinite" />
              </circle>
            )}
            {/* Active glow ring on mobile */}
            {isMobile && isActive && !isPinned && (
              <circle cx={pos.x} cy={pos.y} r={NODE_R + 10} fill={`${stage.color}10`} stroke={`${stage.color}50`} strokeWidth={1.5} />
            )}
            <circle
              cx={pos.x} cy={pos.y} r={NODE_R}
              fill={isPinned ? `${stage.color}14` : isHovered ? `${stage.color}09` : 'white'}
              stroke={stage.color}
              strokeWidth={isPinned ? 2.5 : isHovered ? 2 : 1.5}
              style={{ transition: 'all 0.2s' }}
            />
            <image
              href={productLogos[stage.slug]}
              x={pos.x - LOGO_W / 2}
              y={pos.y - LOGO_H / 2 - 4}
              width={LOGO_W}
              height={LOGO_H}
              preserveAspectRatio="xMidYMid meet"
              style={{ opacity: isActive ? 1 : 0.75 }}
            />
            <text
              x={pos.x}
              y={pos.y + NODE_R + 20}
              textAnchor="middle"
              fill={isPinned ? stage.color : isHovered ? stage.color : 'rgba(0,0,0,0.45)'}
              fontSize={isMobile ? 12 : 9}
              fontWeight={isPinned || isHovered ? 800 : 700}
              letterSpacing={isMobile ? 1.5 : 2.5}
              fontFamily="system-ui, sans-serif"
            >
              {stage.action.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );

  return (
    <section
      id="acatt"
      style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Dot grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(7,15,10,0.08) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />
      {/* Warm amber glow from bottom */}
      <div style={{
        position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)',
        width: '120%', height: '50%',
        background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(255,179,0,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Colorful gradient blobs */}
      <div style={{
        position: 'absolute', top: '5%', left: '-8%', width: '50%', height: '55%',
        background: 'radial-gradient(ellipse at center, rgba(79,126,245,0.14) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '15%', right: '-8%', width: '45%', height: '50%',
        background: 'radial-gradient(ellipse at center, rgba(232,92,122,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '25%', width: '40%', height: '45%',
        background: 'radial-gradient(ellipse at center, rgba(45,196,162,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '64px 20px 56px' : '96px 40px 80px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 72 }}
        >
          <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>
            How It Works
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 14 }}>
            The ACATT Framework
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-primary)', maxWidth: 480, margin: '0 auto', lineHeight: 1.75, fontWeight: 600, opacity: 0.8 }}>
            Five stages. A perpetual cycle. Data flows from each stage into the next — and loops back.
          </p>
        </motion.div>

        {/* Orbital diagram + detail panel — unified layout, stacked on mobile, side-by-side on desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 24 : 72,
          alignItems: isMobile ? 'start' : 'center',
          marginBottom: isMobile ? 40 : 80,
        }}>
          <div ref={ref}>
            {orbitalSvg}
            {/* Instruction hint that fades out once a stage is selected */}
            <motion.p
              animate={{ opacity: activeStage ? 0 : 0.55 }}
              transition={{ duration: 0.3 }}
              style={{
                textAlign: 'center', fontSize: 12, fontWeight: 500,
                color: 'var(--text-muted)', marginTop: 10,
                pointerEvents: 'none',
              }}
            >
              {isMobile ? 'Tap a stage to explore it' : 'Hover to preview · Click to pin a stage'}
            </motion.p>
          </div>

          <div ref={detailRef}>{detailPanel}</div>
        </div>

        {/* Data flow callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="liquid-glass"
          style={{
            padding: isMobile ? '28px 24px' : '36px 40px',
            borderRadius: 24,
            marginBottom: isMobile ? 48 : 72,
          }}
        >
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 16 : 40, alignItems: isMobile ? 'flex-start' : 'center' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'var(--font-display)' }}>
                Data flows through every stage
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 560, fontWeight: 500 }}>
                GyanScan captures the data. GyanAnalytix surfaces the pattern. GyanGuru addresses the misconception. GyanTest confirms mastery. Results feed back into GyanBank — closing the loop.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flexShrink: 0 }}>
              {acatStages.map((s) => (
                <Link key={s.slug} to={`/products/${s.slug}`} style={{
                  padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600,
                  textDecoration: 'none', color: s.color,
                  border: `1px solid ${s.color}45`,
                  background: `${s.color}0C`,
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = `${s.color}1E`}
                  onMouseLeave={(e) => e.currentTarget.style.background = `${s.color}0C`}
                >
                  {s.product}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Role picker */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 10 }}>
            Which parts of ACATT are right for you?
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 36 }}>
            Pick your role to see which parts of the ACATT framework apply.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: 12 }}>
            {[
              { label: 'Students',          path: '/students' },
              { label: 'Teachers',          path: '/teachers' },
              { label: 'Parents',           path: '/parents' },
              { label: 'School Management', path: '/school-management' },
              { label: 'Policy Makers',     path: '/policy-makers' },
            ].map((role, i) => (
              <motion.div key={role.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.07, duration: 0.4 }}>
                <Link to={role.path} style={{ display: 'block', textDecoration: 'none' }}>
                  <div
                    className="liquid-glass"
                    style={{
                      borderRadius: 16, padding: '28px 16px 22px',
                      textAlign: 'center',
                      transition: 'transform 0.2s',
                      borderTop: '3px solid var(--gold)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>
                      {role.label}
                    </p>
                    <p style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 600 }}>View →</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
