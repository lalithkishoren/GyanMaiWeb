import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence, animate, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { acatStages } from '../../data/acatFramework';

// 5 nodes evenly spaced on a circle, starting from top (270°), clockwise
const CIRCLE_R = 34;
const ANGLES = [270, 342, 54, 126, 198]; // 72° apart
// textAnchor per node: top=middle, right=start, left=end
const TEXT_ANCHORS = ['middle', 'start', 'start', 'end', 'end'];

function toXY(angleDeg, radius = CIRCLE_R) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
}

const positions = ANGLES.map((a) => toXY(a));

export default function AcatFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [clicked, setClicked] = useState(null);
  const [hovered, setHovered] = useState(null);
  const active = clicked !== null ? clicked : hovered;

  // Animated dot traveling around the circle
  const progress = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(progress, 1, { duration: 9, repeat: Infinity, ease: 'linear' });
    return controls.stop;
  }, [inView]);

  const dotCx = useTransform(progress, (p) =>
    50 + CIRCLE_R * Math.cos(p * 2 * Math.PI - Math.PI / 2)
  );
  const dotCy = useTransform(progress, (p) =>
    50 + CIRCLE_R * Math.sin(p * 2 * Math.PI - Math.PI / 2)
  );

  const activeStage = active !== null ? acatStages[active] : null;

  return (
    <section id="acatt" style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Amber radial ambient — very subtle on cream */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 900, height: 900,
        background: 'radial-gradient(ellipse, rgba(255,179,0,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 32px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14,
          }}>
            How It Works
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 900, color: 'var(--text-primary)',
            lineHeight: 1.05, letterSpacing: '-0.025em',
            marginBottom: 14,
          }}>
            The ACATT Framework
          </h2>
          <p style={{
            fontSize: 16, color: 'var(--text-secondary)',
            maxWidth: 480, margin: '0 auto', lineHeight: 1.75, fontWeight: 300,
          }}>
            Five products. One continuous cycle. Data flows from each stage into the next — and back to the beginning.
          </p>
        </motion.div>

        {/* Loop layout */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          {/* Left — circle SVG */}
          <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <svg
                viewBox="-18 -8 136 120"
                style={{ width: '100%', height: '100%', overflow: 'visible' }}
              >
                {/* Outer glow ring */}
                <motion.circle
                  cx="50" cy="50" r={CIRCLE_R + 2}
                  fill="none"
                  stroke="rgba(255,179,0,0.14)"
                  strokeWidth="3"
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />

                {/* Dashed circle ring — forest green tint */}
                <motion.circle
                  cx="50" cy="50" r={CIRCLE_R}
                  fill="none"
                  stroke="rgba(27,67,50,0.18)"
                  strokeWidth="0.4"
                  strokeDasharray="2.5 1.8"
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                {/* Animated amber dot */}
                {inView && (
                  <motion.circle
                    r="1.1"
                    fill="var(--gold)"
                    opacity={0.95}
                    cx={dotCx}
                    cy={dotCy}
                  />
                )}

                {/* Stage nodes */}
                {acatStages.map((stage, i) => {
                  const pos = positions[i];
                  const isActive = active === i;
                  const isClicked = clicked === i;

                  const angle = ANGLES[i];
                  const anchor = TEXT_ANCHORS[i];
                  // Labels placed outside the node
                  const labelR = CIRCLE_R + 13;
                  const lx = 50 + labelR * Math.cos((angle * Math.PI) / 180);
                  const ly = 50 + labelR * Math.sin((angle * Math.PI) / 180);

                  return (
                    <g
                      key={stage.slug}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setClicked(clicked === i ? null : i)}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Clicked lock ring — solid outer ring when pinned */}
                      {isClicked && (
                        <motion.circle
                          cx={pos.x} cy={pos.y} r="14.5"
                          fill="none"
                          stroke={stage.color}
                          strokeWidth="0.7"
                          strokeDasharray="2 1.2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.25 }}
                        />
                      )}

                      {/* Outer glow halo */}
                      <motion.circle
                        cx={pos.x} cy={pos.y}
                        fill={isActive ? `${stage.color}14` : 'transparent'}
                        stroke={isActive ? stage.color : `${stage.color}50`}
                        strokeWidth={isActive ? '0.6' : '0.35'}
                        animate={{ r: isActive ? 12 : 10, opacity: inView ? 1 : 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                      />

                      {/* Node core — warm white when idle, product colour when active */}
                      <motion.circle
                        cx={pos.x} cy={pos.y}
                        fill={isActive ? stage.color : '#FFFEF8'}
                        stroke={stage.color}
                        strokeWidth={isActive ? '0' : '0.8'}
                        animate={{
                          fill: isActive ? stage.color : '#FFFEF8',
                          r: isActive ? 8 : 6.5,
                          opacity: inView ? 1 : 0,
                        }}
                        transition={{ delay: i * 0.1, duration: 0.35 }}
                      />

                      {/* Step number */}
                      <motion.text
                        x={pos.x} y={pos.y + 1.6}
                        textAnchor="middle"
                        fontSize="4.2"
                        fontWeight="800"
                        fill={isActive ? '#fff' : stage.color}
                        fontFamily="var(--font-body)"
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        {stage.step}
                      </motion.text>

                      {/* Product name label — outside node */}
                      <motion.text
                        x={lx} y={ly + 1.2}
                        textAnchor={anchor}
                        fontSize="3.6"
                        fontWeight={isActive ? '800' : '600'}
                        fill={isActive ? stage.color : 'rgba(27,67,50,0.75)'}
                        fontFamily="var(--font-display)"
                        animate={{ opacity: inView ? 1 : 0, fill: isActive ? stage.color : 'rgba(27,67,50,0.75)' }}
                        transition={{ delay: i * 0.1 + 0.15, duration: 0.35 }}
                      >
                        {stage.product}
                      </motion.text>

                    </g>
                  );
                })}

                {/* Centre labels */}
                <motion.text
                  x="50" y="47"
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="800"
                  letterSpacing="2"
                  fill="rgba(27,67,50,0.72)"
                  fontFamily="var(--font-display)"
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 0.6 }}
                >
                  ACATT
                </motion.text>
                <motion.text
                  x="50" y="54"
                  textAnchor="middle"
                  fontSize="2.8"
                  fill="rgba(27,67,50,0.12)"
                  fontFamily="var(--font-body)"
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ delay: 0.65 }}
                >
                  continuous cycle
                </motion.text>
              </svg>
            </div>
          </div>

          {/* Right — stage detail */}
          <div>
            <AnimatePresence mode="wait">
              {activeStage ? (
                <motion.div
                  key={activeStage.slug}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: activeStage.color, flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: activeStage.color,
                    }}>
                      Step {activeStage.step} — {activeStage.action}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(28px, 3.5vw, 44px)',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: 16,
                  }}>
                    {activeStage.product}
                  </h3>

                  <p style={{
                    fontSize: 16, color: 'var(--text-secondary)',
                    lineHeight: 1.75, fontWeight: 300, marginBottom: 18,
                  }}>
                    {activeStage.description}
                  </p>

                  <p style={{
                    fontSize: 14, color: 'var(--text-muted)',
                    lineHeight: 1.7, fontWeight: 300, marginBottom: 28,
                  }}>
                    {activeStage.detail}
                  </p>

                  <Link
                    to={`/products/${activeStage.slug}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '10px 20px', borderRadius: 999,
                      background: activeStage.color,
                      color: '#fff', fontSize: 13, fontWeight: 600,
                      textDecoration: 'none', letterSpacing: '0.01em',
                      transition: 'opacity 0.2s',
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.20em',
                    textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20,
                  }}>
                    The Cycle
                  </p>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(26px, 3vw, 40px)',
                    fontWeight: 900, color: 'var(--text-primary)',
                    letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 18,
                  }}>
                    Author → Capture → Analyse → Teach → Test — and Repeat.
                  </h3>
                  <p style={{
                    fontSize: 15, color: 'var(--text-secondary)',
                    lineHeight: 1.8, fontWeight: 300, marginBottom: 24,
                  }}>
                    Every stage feeds the next. GyanTest results inform the next round of authoring in GyanBank — meaning each cycle produces sharper diagnostics than the last.
                  </p>
                  <p style={{
                    fontSize: 13, color: 'var(--text-muted)',
                    fontStyle: 'italic',
                  }}>
                    Hover to preview · Click to pin a stage
                  </p>

                  {/* Stage list */}
                  <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {acatStages.map((stage, i) => (
                      <motion.div
                        key={stage.slug}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 12,
                          padding: '8px 0',
                          borderBottom: i < acatStages.length - 1 ? '1px solid var(--border)' : 'none',
                        }}
                      >
                        <div style={{
                          width: 28, height: 28, borderRadius: '50%',
                          border: `1px solid ${stage.color}60`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <span style={{ fontSize: 9, fontWeight: 700, color: stage.color }}>
                            {String(stage.step).padStart(2, '0')}
                          </span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
                            {stage.product}
                          </span>
                          <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 8 }}>
                            {stage.action}
                          </span>
                        </div>
                        <Link
                          to={`/products/${stage.slug}`}
                          style={{
                            fontSize: 11, color: stage.color, textDecoration: 'none',
                            fontWeight: 600, opacity: 0.7,
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                        >
                          →
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
