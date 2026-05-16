import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AcatChain from '../../components/shared/AcatChain';
import ExpandableFeature from '../../components/shared/ExpandableFeature';
import { products } from '../../data/products';
import gyanScanLogo from '../../assets/logos/GyanScan-Logo.png';

const COLOR = '#2DC4A2';

// ── Heatmap data ─────────────────────────────────────────────────────────────
const misconceptions = [
  {
    severity: 'critical',
    name: '"The Adder\'s Trap"',
    count: '9/12',
    avg: '33%',
    description: 'Students add numerators and denominators directly (2/5 + 3/7 = 5/12) instead of finding the LCM first.',
    subtopic: 'T7 — Addition (LCM)',
    example: '2/5 + 3/7 → wrote 5/12 instead of 29/35',
  },
  {
    severity: 'warning',
    name: '"Partial Simplification"',
    count: '7/12',
    avg: '47%',
    description: 'Students divide by a common factor once but stop before reaching lowest terms.',
    subtopic: 'T3 — Simplification',
    example: '12/18 → wrote 6/9 instead of 2/3',
  },
  {
    severity: 'caution',
    name: '"Denominator Confusion"',
    count: '6/12',
    avg: '56%',
    description: 'Students compare fractions by looking at denominators alone, believing "bigger denominator = bigger fraction."',
    subtopic: 'T4 — Comparing Fractions',
    example: '3/8 vs 2/5 → chose 3/8 because 8 > 5',
  },
];

const severityColor = { critical: '#E85C7A', warning: '#F5A623', caution: COLOR };

// ── Main component ────────────────────────────────────────────────────────────
export default function GyanScan() {
  const product       = products.find((p) => p.slug === 'gyanscan');
  const heatmapRef    = useRef(null);
  const heatmapInView = useInView(heatmapRef, { once: true, margin: '-60px' });
  const featuresRef   = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: '-60px' });

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
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
            Step 2 — Capture
          </span>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'clamp(32px, 5vw, 72px)',
            alignItems: 'start',
          }}>
            <div style={{ maxWidth: 640 }}>
              <div style={{ marginBottom: 16 }}>
                <img
                  src={gyanScanLogo}
                  alt="GyanScan"
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
                Assess with insight. Teach with precision.
              </p>

              <p style={{
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: 36,
              }}>
                GyanScan captures formative assessment data at classroom speed — 40 students in 8 seconds. Every wrong answer is mapped to the exact misconception behind it, giving teachers a complete picture before they plan their next lesson.
              </p>

              <div style={{ display: 'flex', gap: 10 }}>
                <Link to="/contact" className="btn-primary">
                  See GyanScan in action →
                </Link>
              </div>
            </div>

            {/* Pull quote */}
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
                  Turn every scan into Gyan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Key features ──────────────────────────────────────────────────── */}
      <section style={{
        padding: '0 clamp(24px, 5vw, 56px) 72px',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <div style={{ marginBottom: 32 }}>
          <span className="section-label" style={{ marginBottom: 10 }}>What GyanScan does</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 2.8vw, 34px)',
            fontWeight: 800, marginTop: 8,
            color: 'var(--text-primary)', letterSpacing: '-0.02em',
          }}>
            Key features
          </h2>
        </div>
        <div ref={featuresRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
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
      </section>

      {/* ── Teacher's Heatmap ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-subtle, #F4F5F9)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 40 }}
          >
            <span className="section-label" style={{ marginBottom: 10 }}>What the teacher sees — 8 seconds after the scan</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 800, color: 'var(--text-primary)',
              marginTop: 8, marginBottom: 10, letterSpacing: '-0.02em',
            }}>
              GyanScan's Misconception Output
            </h2>
            <p style={{
              fontSize: 15, color: 'var(--text-secondary)',
              maxWidth: 540, lineHeight: 1.75, fontWeight: 300,
            }}>
              The moment the scan completes, GyanScan maps every wrong answer to the specific misconception behind it — not just a wrong-answer count, but named error patterns with prevalence data. This is what feeds GyanAnalytx for deeper analysis.
            </p>
          </motion.div>

          {/* Class context strip */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 4, border: '1px solid var(--border)',
            padding: '12px 20px',
            display: 'flex', gap: 20, marginBottom: 14, flexWrap: 'wrap',
          }}>
            {[['Class', 'VI-A'], ['Subject', 'Fractions'], ['Curriculum', 'CBSE Ch 7'], ['Students', '12'], ['Subtopics', '8']].map(([k, v]) => (
              <div key={k}>
                <span style={{ fontSize: 10, color: 'var(--text-muted)', display: 'block', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{k}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Misconception cards */}
          <div ref={heatmapRef} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {misconceptions.map((mc, i) => {
              const sc = severityColor[mc.severity];
              return (
                <motion.div
                  key={mc.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={heatmapInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: 4,
                    borderLeft: `3px solid ${sc}`,
                    padding: '20px 24px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: 16, alignItems: 'start',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: sc }}>
                        {mc.severity}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 16, fontWeight: 700,
                        color: 'var(--text-primary)', letterSpacing: '-0.01em',
                      }}>
                        {mc.name}
                      </h3>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 10, fontWeight: 300 }}>
                      {mc.description}
                    </p>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{mc.subtopic}</strong>
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        e.g. {mc.example}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: 72 }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: sc, lineHeight: 1 }}>
                      {mc.count}
                    </p>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>students</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: sc, marginTop: 8, lineHeight: 1 }}>
                      {mc.avg}
                    </p>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>avg score</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stakeholder promises ──────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 36 }}
          >
            <span className="section-label" style={{ marginBottom: 10 }}>The GyanScan Promise</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 2.8vw, 34px)',
              fontWeight: 800, color: 'var(--text-primary)',
              marginTop: 8, letterSpacing: '-0.02em',
            }}>
              What changes for everyone in the school
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
            {[
              { role: 'Students', quote: '"Mistakes are Data, Not Defeats."', body: 'No more fear. Every wrong answer becomes a roadmap, not a dead end.', color: '#4F7EF5' },
              { role: 'Teachers', quote: '"Targeted Teaching."', body: 'Spend energy fixing the logic, not grading the paper. Instruction becomes precision, not instinct.', color: COLOR },
              { role: 'Parents', quote: '"Clear Roadmaps."', body: 'Know exactly where your child is stuck — not just a percentage, but the specific subtopic and misconception behind it.', color: '#F5A623' },
              { role: 'School Management', quote: '"Quality over rankings."', body: 'Build a school known for deep conceptual mastery — not one that produces toppers at the expense of everyone else.', color: '#9B6EF5' },
            ].map((p, i) => (
              <motion.div
                key={p.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 4,
                  borderLeft: `3px solid ${p.color}`,
                  padding: '24px 24px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color }}>
                  For {p.role}
                </span>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 17, fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginTop: 10, marginBottom: 8, letterSpacing: '-0.01em',
                }}>
                  {p.quote}
                </p>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACATT position ──────────────────────────────────────────────────── */}
      <section style={{
        padding: '0 clamp(24px, 5vw, 56px) 56px',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 6, border: '1px solid var(--border)',
          padding: '20px 28px',
        }}>
          <p className="section-label" style={{ marginBottom: 16 }}>Where GyanScan sits in the ACATT cycle</p>
          <AcatChain activeSlug="gyanscan" />
        </div>
      </section>

      {/* ── Handoff CTA ──────────────────────────────────────────────────── */}
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
            background: 'linear-gradient(135deg, transparent 0%, rgba(245,166,35,0.06) 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 10 }}>
              Up next in the ACATT cycle
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
              GyanAnalytx
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 400, lineHeight: 1.7, fontWeight: 300 }}>
              GyanScan data flows directly into GyanAnalytx — class heatmaps, parent access views, student diagnostic reports, and school dashboards all powered by what was captured here.
            </p>
          </div>
          <Link
            to="/products/gyananalytx"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', borderRadius: 4,
              background: '#F5A623', color: '#fff',
              fontSize: 13, fontWeight: 600, textDecoration: 'none',
              whiteSpace: 'nowrap', flexShrink: 0, transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Explore GyanAnalytx →
          </Link>
        </motion.div>
      </section>

      {/* ── Closure / Book a Demo — always last ─────────────────────────── */}
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
              40 students. 8 seconds. Every misconception mapped.
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)', color: 'var(--text-secondary)',
              maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.8, fontWeight: 300,
            }}>
              If you've ever looked at a class of marked papers and wondered whether any of it would change tomorrow's lesson — GyanScan is built for you.
            </p>
            <Link to="/contact" className="btn-gold">Book a Demo →</Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
