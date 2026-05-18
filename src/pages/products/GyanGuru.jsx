import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import AcatChain from '../../components/shared/AcatChain';
import ExpandableFeature from '../../components/shared/ExpandableFeature';
import { products } from '../../data/products';
import gyanGuruLogo from '../../assets/logos/GyanGuru-logo.png';

const COLOR = '#E85C7A';

// â”€â”€ Learning loop — 4 steps â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const loopSteps = [
  {
    num: '01',
    label: 'Assess',
    body: 'Teacher conducts a formative assessment via GyanScan. Every wrong answer is immediately mapped to the misconception behind it.',
    product: 'GyanScan',
    productColor: '#2DC4A2',
  },
  {
    num: '02',
    label: 'Diagnose',
    body: 'GyanAnalytix generates subtopic-level diagnostic reports in seconds — not a score, a learning map for every student.',
    product: 'GyanAnalytix',
    productColor: '#F5A623',
  },
  {
    num: '03',
    label: 'Teach',
    body: 'GyanGuru is assigned by the teacher, armed with the exact misconceptions. Three intelligent agents adapt in real time.',
    product: 'GyanGuru',
    productColor: COLOR,
  },
  {
    num: '04',
    label: 'Master',
    body: 'The student works through Guru, Prashna, or Chunauty until misconceptions are cleared — not timed out.',
    product: 'Verified',
    productColor: '#9B6EF5',
  },
];

// â”€â”€ Three agent modes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const agents = [
  {
    name: 'Guru',
    mode: 'Fix My Mistakes',
    tagline: 'Targeted correction, not generic feedback.',
    body: 'Guru receives the student\'s exact error data from GyanScan and walks them through why they were wrong — building correct understanding from the misconception outward, not from a generic lesson plan.',
    badge: 'For misconception repair',
  },
  {
    name: 'Prashna',
    mode: 'Known to Unknown',
    tagline: 'Scaffolded from what they already know.',
    body: 'Prashna diagnoses prior knowledge first, then builds a Socratic bridge to the new concept. Every question uses something the student already understands as a foothold.',
    badge: 'For introducing new concepts',
  },
  {
    name: 'Chunauty',
    mode: 'Challenge Me',
    tagline: 'Deep thinking, never just recall.',
    body: 'Chunauty never gives the answer directly. It challenges students with progressively harder questions, building genuine conceptual depth rather than pattern recognition. True Socratic mode.',
    badge: 'For advanced mastery',
  },
];

export default function GyanGuru() {
  const product        = products.find((p) => p.slug === 'gyanguru');
  const loopRef        = useRef(null);
  const loopInView     = useInView(loopRef, { once: true, margin: '-60px' });
  const agentsRef      = useRef(null);
  const agentsInView   = useInView(agentsRef, { once: true, margin: '-60px' });
  const featuresRef    = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: '-60px' });

  return (
    <main style={{ paddingTop: 80 }}>

      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{
        padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 56px)',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: COLOR,
            background: `${COLOR}10`, border: `1px solid ${COLOR}28`,
            padding: '5px 14px', borderRadius: 999,
            display: 'inline-block', marginBottom: 28,
          }}>
            Step 4 — Teach
          </span>

          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto]"
            style={{
              gap: 'clamp(32px, 5vw, 72px)',
              alignItems: 'start',
            }}
          >
            <div style={{ maxWidth: 640 }}>
              <div style={{ marginBottom: 16 }}>
                <img
                  src={gyanGuruLogo}
                  alt="GyanGuru"
                  style={{ height: 'clamp(48px, 6vw, 72px)', width: 'auto', display: 'block' }}
                />
              </div>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(17px, 2vw, 22px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: COLOR,
                marginBottom: 20,
                lineHeight: 1.45,
              }}>
                {product.tagline}
              </p>

              <p style={{
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: 36,
              }}>
                {product.description}
              </p>

              <div style={{ display: 'flex', gap: 10 }}>
                <Link to="/contact" className="btn-primary">
                  See GyanGuru in action â†’
                </Link>
              </div>
            </div>

            <div style={{ width: 'clamp(200px, 22vw, 280px)', flexShrink: 0, paddingTop: 8 }}>
              <div style={{ borderLeft: `3px solid ${COLOR}`, paddingLeft: 20 }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(17px, 1.8vw, 22px)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                }}>
                  The tutor that knows exactly where they're stuck.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* â”€â”€ From Assessment to Mastery loop â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ background: 'var(--bg-dark)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 56 }}
          >
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
              The Full Loop
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3vw, 42px)',
              fontWeight: 800, color: '#fff',
              letterSpacing: '-0.02em', marginBottom: 14,
            }}>
              From Assessment to Mastery
            </h2>
            <p style={{
              fontSize: 15, color: 'rgba(255,255,255,0.4)',
              maxWidth: 500, margin: '0 auto', lineHeight: 1.75, fontWeight: 300,
            }}>
              GyanGuru doesn't operate in isolation. It's the culmination of a data pipeline that starts with a single scan and ends with a student who actually understands.
            </p>
          </motion.div>

          <div ref={loopRef} className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
            {loopSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={loopInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.10, duration: 0.45 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderTop: `3px solid ${step.productColor}`,
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  padding: '28px 22px 28px',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 36, fontWeight: 900,
                  color: 'rgba(255,255,255,0.06)',
                  letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 16,
                }}>
                  {step.num}
                </p>
                <div style={{
                  display: 'inline-block',
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.10em', textTransform: 'uppercase',
                  color: step.productColor,
                  marginBottom: 8,
                }}>
                  {step.product}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18, fontWeight: 800,
                  color: '#fff', marginBottom: 10, letterSpacing: '-0.01em',
                }}>
                  {step.label}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, fontWeight: 300 }}>
                  {step.body}
                </p>
                {i < 3 && (
                  <p style={{ marginTop: 18, fontSize: 14, color: step.productColor, fontWeight: 600, opacity: 0.7 }}>â†’</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Three agents â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 44 }}
          >
            <span className="section-label" style={{ marginBottom: 10 }}>Three intelligent agents</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 800, color: 'var(--text-primary)',
              marginTop: 8, letterSpacing: '-0.02em',
            }}>
              One tutor, three teaching modes
            </h2>
          </motion.div>

          <div ref={agentsRef} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, x: -16 }}
                animate={agentsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-8"
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 4,
                  borderLeft: `3px solid ${COLOR}`,
                  padding: '28px 28px',
                  boxShadow: 'var(--shadow-sm)',
                  alignItems: 'start',
                }}
              >
                <div>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.10em',
                    textTransform: 'uppercase', color: COLOR,
                    display: 'block', marginBottom: 8,
                  }}>
                    {agent.badge}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 26, fontWeight: 900,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    marginBottom: 4,
                  }}>
                    {agent.name}
                  </h3>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {agent.mode}
                  </p>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 16, fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: 10, lineHeight: 1.4,
                    letterSpacing: '-0.01em',
                  }}>
                    {agent.tagline}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300 }}>
                    {agent.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Key features â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{
        background: 'var(--bg-subtle, #F4F5F9)',
        padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 32 }}>
            <span className="section-label" style={{ marginBottom: 10 }}>Technical capabilities</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 2.8vw, 34px)',
              fontWeight: 800, marginTop: 8,
              color: 'var(--text-primary)', letterSpacing: '-0.02em',
            }}>
              Built for real classroom complexity
            </h2>
          </div>
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <ExpandableFeature title={f.title} summary={f.summary} detail={f.detail} accentColor={COLOR} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ ACATT position â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{
        padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 56px) 56px',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 6, border: '1px solid var(--border)',
          padding: '20px 28px',
        }}>
          <p className="section-label" style={{ marginBottom: 16 }}>Where GyanGuru sits in the ACATT framework</p>
          <AcatChain activeSlug="gyanguru" />
        </div>
      </section>

      {/* â”€â”€ Handoff CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{
        padding: '0 clamp(24px, 5vw, 56px) 0',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'var(--text-primary)',
            borderRadius: 8,
            padding: 'clamp(32px, 4vw, 48px) clamp(28px, 4vw, 44px)',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', gap: 24, flexWrap: 'wrap',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: 220, height: '100%',
            background: 'linear-gradient(135deg, transparent 0%, rgba(155,110,245,0.06) 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 10 }}>
              Up next in the ACATT framework
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
              GyanTest
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 400, lineHeight: 1.7, fontWeight: 300 }}>
              After GyanGuru closes the misconception gap, GyanTest provides summative validation — every format, instant results, feeding the next ACATT framework.
            </p>
          </div>
          <Link
            to="/products/gyantest"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', borderRadius: 4,
              background: '#9B6EF5', color: '#fff',
              fontSize: 13, fontWeight: 600, textDecoration: 'none',
              whiteSpace: 'nowrap', flexShrink: 0, transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Explore GyanTest â†’
          </Link>
        </motion.div>
      </section>

      {/* â”€â”€ Closure / Book a Demo — always last â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section style={{ background: 'var(--bg-subtle)', padding: 'clamp(48px, 5vw, 72px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3.5vw, 44px)',
              fontWeight: 900, color: 'var(--text-primary)',
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16,
            }}>
              No student left without support.
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)', color: 'var(--text-secondary)',
              maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.8, fontWeight: 300,
            }}>
              GyanScan finds who's stuck. GyanAnalytix pinpoints exactly what's wrong. GyanGuru fixes it — before the gap becomes a habit.
            </p>
            <Link to="/contact" className="btn-gold">Book a Demo â†’</Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
