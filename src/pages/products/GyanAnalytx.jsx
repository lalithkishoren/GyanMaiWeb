import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import AcatChain from '../../components/shared/AcatChain';
import ExpandableFeature from '../../components/shared/ExpandableFeature';
import { products } from '../../data/products';
import gyanAnalytxLogo from '../../assets/logos/GyanAnalytics-logo.png';

const COLOR = '#F5A623';

// ── Diagnostic report data ────────────────────────────────────────────────────
const subtopics = [
  { code: 'T1', chapter: 'Ch 7.1', name: 'Types of Fractions',      score: 90, questions: 6 },
  { code: 'T2', chapter: 'Ch 7.2', name: 'Equivalent Fractions',    score: 83, questions: 6 },
  { code: 'T3', chapter: 'Ch 7.3', name: 'Simplification',          score: 60, questions: 5 },
  { code: 'T4', chapter: 'Ch 7.4', name: 'Comparing Fractions',     score: 67, questions: 6 },
  { code: 'T5', chapter: 'Ch 7.5', name: 'Addition (Same Denom)',   score: 100, questions: 5 },
  { code: 'T6', chapter: 'Ch 7.6a', name: 'Addition (Factor LCD)', score: 83, questions: 6 },
  { code: 'T7', chapter: 'Ch 7.6b', name: 'Addition (LCM)',        score: 33, questions: 6 },
  { code: 'T8', chapter: 'Ch 7.7', name: 'Subtraction',            score: 60, questions: 5 },
];

const views = [
  { role: 'Students', icon: '👤', body: 'A personal learning map — not a percentage. Every subtopic, every error pattern, every next step. Clear language, no jargon.', color: '#4F7EF5' },
  { role: 'Teachers', icon: '📋', body: 'Class-wide heatmap showing which concepts are understood, partially grasped, or widely misunderstood. Evidence before planning.', color: '#2DC4A2' },
  { role: 'Parents', icon: '👨‍👩‍👧', body: 'The why behind every mark. Subtopic performance with actionable, jargon-free recommendations for how to support their child.', color: COLOR },
  { role: 'School Management', icon: '🏫', body: 'Multi-class, multi-teacher quality metrics. Curriculum compliance, teacher effectiveness, learning quality. NEP 2020 aligned.', color: '#9B6EF5' },
];

function ScoreBar({ score, animate }) {
  const fill = score >= 75 ? '#2DC4A2' : score >= 50 ? COLOR : '#E85C7A';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ flex: 1, height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={animate ? { width: `${score}%` } : { width: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          style={{ height: '100%', background: fill, borderRadius: 2 }}
        />
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color: fill, minWidth: 36, textAlign: 'right' }}>
        {score}%
      </span>
    </div>
  );
}

export default function GyanAnalytx() {
  const product        = products.find((p) => p.slug === 'gyananalytx');
  const reportRef      = useRef(null);
  const reportInView   = useInView(reportRef, { once: true, margin: '-60px' });
  const featuresRef    = useRef(null);
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
            Step 3 — Analyse
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
                  src={gyanAnalytxLogo}
                  alt="GyanAnalytx"
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
                  See GyanAnalytx in action →
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
                  Not marks. Understanding.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Who sees what ──────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg-subtle, #F4F5F9)',
        padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 44 }}
          >
            <span className="section-label" style={{ marginBottom: 10 }}>One platform, four lenses</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 800, color: 'var(--text-primary)',
              marginTop: 8, marginBottom: 10, letterSpacing: '-0.02em',
            }}>
              Every stakeholder sees what matters to them
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 520, lineHeight: 1.75, fontWeight: 300 }}>
              The same data, filtered through four different access levels — each view designed for that stakeholder's specific decisions.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
            {views.map((v, i) => (
              <motion.div
                key={v.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 4,
                  borderLeft: `3px solid ${v.color}`,
                  padding: '24px 24px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: v.color }}>
                  {v.role}
                </span>
                <p style={{
                  fontSize: 14, color: 'var(--text-secondary)',
                  lineHeight: 1.7, fontWeight: 300, marginTop: 10,
                }}>
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Diagnostic Report ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 44 }}
          >
            <span className="section-label" style={{ marginBottom: 10 }}>Live Sample</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 800, color: 'var(--text-primary)',
              marginTop: 8, marginBottom: 10, letterSpacing: '-0.02em',
            }}>
              Student Diagnostic Report
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 520, lineHeight: 1.75, fontWeight: 300 }}>
              Every student gets a personalised learning map — not a mark, a roadmap. Here's a real diagnostic from a Fractions assessment.
            </p>
          </motion.div>

          <div ref={reportRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 16, alignItems: 'start' }}>

            {/* Student info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={reportInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 6,
                border: `1px solid ${COLOR}20`,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{
                background: `${COLOR}0D`,
                borderBottom: `1px solid ${COLOR}1A`,
                padding: '16px 20px',
              }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLOR, marginBottom: 8 }}>
                  GyanAnalytx · Diagnostic Report
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>
                  Aarav Sharma
                </h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Roll 01 · Class VI-A · Fractions (CBSE Ch 7)</p>
              </div>

              <div style={{ padding: '20px' }}>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20, paddingBottom: 16,
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 900, color: COLOR, lineHeight: 1 }}>72%</p>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Overall Score</p>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    padding: '5px 12px', borderRadius: 3,
                    background: `${COLOR}15`,
                    border: `1px solid ${COLOR}30`,
                    color: '#C8860A',
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    Partial Grasp
                  </span>
                </div>

                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>
                  Key Gaps Identified
                </p>
                {subtopics.filter(s => s.score < 70).map(s => (
                  <div key={s.code} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '8px 10px', borderRadius: 3,
                    background: s.score < 45 ? 'rgba(232,92,122,0.05)' : `${COLOR}08`,
                    border: `1px solid ${s.score < 45 ? 'rgba(232,92,122,0.14)' : `${COLOR}20`}`,
                    marginBottom: 6,
                  }}>
                    <span style={{ fontSize: 12, color: 'var(--text-primary)', fontWeight: 500 }}>{s.name}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: s.score < 45 ? '#E85C7A' : '#C8860A' }}>{s.score}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subtopic bar chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={reportInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 6,
                border: '1px solid var(--border)',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>
                  Subtopic Breakdown
                </h4>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[['≥75%', '#2DC4A2'], ['40–74%', COLOR], ['<40%', '#E85C7A']].map(([l, c]) => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                      <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {subtopics.map((s) => (
                  <div key={s.code}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', minWidth: 22 }}>{s.code}</span>
                        <span style={{ fontSize: 12, color: 'var(--text-primary)', fontWeight: 500 }}>{s.name}</span>
                      </div>
                      <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{s.questions}Q</span>
                    </div>
                    <ScoreBar score={s.score} animate={reportInView} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key features ──────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg-subtle, #F4F5F9)',
        padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 32 }}>
            <span className="section-label" style={{ marginBottom: 10 }}>What GyanAnalytx does</span>
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
        </div>
      </section>

      {/* ── ACATT position ──────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 56px) 56px',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 6, border: '1px solid var(--border)',
          padding: '20px 28px',
        }}>
          <p className="section-label" style={{ marginBottom: 16 }}>Where GyanAnalytx sits in the ACATT cycle</p>
          <AcatChain activeSlug="gyananalytx" />
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
            background: 'linear-gradient(135deg, transparent 0%, rgba(232,92,122,0.06) 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', marginBottom: 10 }}>
              Up next in the ACATT cycle
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
              GyanGuru
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 400, lineHeight: 1.7, fontWeight: 300 }}>
              GyanAnalytx data is what makes GyanGuru powerful — the personalised tutor knows exactly which misconceptions each student carries before the first session begins.
            </p>
          </div>
          <Link
            to="/products/gyanguru"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', borderRadius: 4,
              background: '#E85C7A', color: '#fff',
              fontSize: 13, fontWeight: 600, textDecoration: 'none',
              whiteSpace: 'nowrap', flexShrink: 0, transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Explore GyanGuru →
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
              Data that actually changes something.
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)', color: 'var(--text-secondary)',
              maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.8, fontWeight: 300,
            }}>
              Every report, every heatmap, every risk flag — built so the right person takes the right action. Not dashboards for their own sake.
            </p>
            <Link to="/contact" className="btn-gold">Book a Demo →</Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
