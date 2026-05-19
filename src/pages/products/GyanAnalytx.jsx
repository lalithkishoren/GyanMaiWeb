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

export default function GyanAnalytix() {
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
                  src={gyanAnalytxLogo}
                  alt="GyanAnalytix"
                  style={{ height: 'clamp(48px, 6vw, 72px)', width: 'auto', display: 'block' }}
                />
              </div>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(17px, 2vw, 22px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--text-muted)',
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
                  See GyanAnalytix in action →
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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

          <div ref={reportRef} className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-4" style={{ alignItems: 'start' }}>

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
                  GyanAnalytix · Diagnostic Report
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

      {/* ── Full Sample Report (iframe) ──────────────────────────────────── */}
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
            style={{ marginBottom: 36 }}
          >
            <span className="section-label" style={{ marginBottom: 10 }}>Full Sample Report</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 800, color: 'var(--text-primary)',
              marginTop: 8, marginBottom: 10, letterSpacing: '-0.02em',
            }}>
              A complete GyanAnalytix student report
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 560, lineHeight: 1.75, fontWeight: 300 }}>
              Subtopic mastery, error patterns, misconception tags, and next steps — everything a student, teacher, and parent needs in one document.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            style={{
              borderRadius: 8,
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
              background: 'var(--bg-card)',
            }}
          >
            <div style={{
              background: `${COLOR}0A`,
              borderBottom: `1px solid ${COLOR}20`,
              padding: '12px 20px',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#FF5F57','#FEBC2E','#28C840'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 8 }}>gyanscan.com/sample/student-report</span>
            </div>
            <iframe
              src="https://www.gyanscan.com/sample/student-report"
              title="GyanAnalytix Sample Student Report"
              sandbox="allow-scripts allow-same-origin allow-forms"
              style={{
                width: '100%',
                height: 'clamp(500px, 80vh, 820px)',
                border: 'none',
                display: 'block',
              }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Error Library ────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 40 }}
          >
            <span className="section-label" style={{ marginBottom: 10 }}>Error Intelligence</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 800, color: 'var(--text-primary)',
              marginTop: 8, marginBottom: 10, letterSpacing: '-0.02em',
            }}>
              Error Library &amp; Teacher's Heatmap
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 540, lineHeight: 1.75, fontWeight: 300 }}>
              Not just scores — the exact misconceptions behind every wrong answer, catalogued and mapped across your class.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ alignItems: 'start' }}>

            {/* Error Library card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 8,
                border: '1px solid var(--border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{
                background: `${COLOR}0D`,
                borderBottom: `1px solid ${COLOR}1A`,
                padding: '16px 20px',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLOR }}>Error Library</span>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginTop: 6 }}>
                  Fractions · Class VI-A · 38 students
                </p>
              </div>
              <div style={{ padding: '20px' }}>
                {[
                  { tag: 'LCD Confusion', count: 24, pct: 63, severity: 'high', desc: 'Multiplies denominators instead of finding LCM for addition' },
                  { tag: 'Simplification Gap', count: 18, pct: 47, severity: 'high', desc: 'Divides only numerator or denominator, not both, when reducing' },
                  { tag: 'Fraction Comparison', count: 14, pct: 37, severity: 'med', desc: 'Compares numerators directly without equalising denominators' },
                  { tag: 'Mixed Number Error', count: 9, pct: 24, severity: 'med', desc: 'Adds whole parts and fractional parts in isolation' },
                  { tag: 'Equivalent Recognition', count: 6, pct: 16, severity: 'low', desc: 'Fails to identify equivalent fractions when simplified form differs' },
                ].map((err, i) => (
                  <motion.div
                    key={err.tag}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    style={{
                      padding: '12px 14px',
                      borderRadius: 4,
                      background: err.severity === 'high' ? 'rgba(232,92,122,0.04)' : err.severity === 'med' ? `${COLOR}06` : 'rgba(45,196,162,0.04)',
                      border: `1px solid ${err.severity === 'high' ? 'rgba(232,92,122,0.14)' : err.severity === 'med' ? `${COLOR}20` : 'rgba(45,196,162,0.14)'}`,
                      marginBottom: 8,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700,
                        color: err.severity === 'high' ? '#E85C7A' : err.severity === 'med' ? '#C8860A' : '#2DC4A2',
                      }}>{err.tag}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)' }}>{err.count} students ({err.pct}%)</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{err.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Teacher's Heatmap card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.12, duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 8,
                border: '1px solid var(--border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{
                background: 'rgba(45,196,162,0.06)',
                borderBottom: '1px solid rgba(45,196,162,0.14)',
                padding: '16px 20px',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2DC4A2' }}>Teacher's Heatmap</span>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginTop: 6 }}>
                  Class VI-A · Fractions Mastery Map
                </p>
              </div>
              <div style={{ padding: '20px' }}>
                {/* Legend */}
                <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                  {[['Mastered', '#2DC4A2'], ['Partial', COLOR], ['Gap', '#E85C7A'], ['Not attempted', 'var(--border)']].map(([l, c]) => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
                      <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{l}</span>
                    </div>
                  ))}
                </div>
                {/* Column headers */}
                <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(8, 1fr)', gap: 3, marginBottom: 3 }}>
                  <div />
                  {['T1','T2','T3','T4','T5','T6','T7','T8'].map(t => (
                    <div key={t} style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-muted)', textAlign: 'center' }}>{t}</div>
                  ))}
                </div>
                {/* Rows */}
                {[
                  { name: 'Aarav S.',    scores: [90,83,60,67,100,83,33,60] },
                  { name: 'Priya M.',    scores: [100,100,83,83,100,67,50,67] },
                  { name: 'Rohit K.',    scores: [67,50,33,50,83,50,17,33] },
                  { name: 'Ananya P.',   scores: [100,100,100,100,100,100,83,100] },
                  { name: 'Karan T.',    scores: [83,67,50,67,100,83,33,50] },
                  { name: 'Sneha R.',    scores: [50,67,17,33,83,50,17,33] },
                  { name: 'Arjun V.',    scores: [100,83,67,83,100,100,67,83] },
                  { name: 'Mehak J.',    scores: [67,67,50,50,100,67,33,50] },
                ].map((row, ri) => (
                  <div key={row.name} style={{ display: 'grid', gridTemplateColumns: '80px repeat(8, 1fr)', gap: 3, marginBottom: 3 }}>
                    <span style={{ fontSize: 10, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }}>{row.name}</span>
                    {row.scores.map((s, si) => {
                      const bg = s >= 75 ? '#2DC4A2' : s >= 45 ? COLOR : '#E85C7A';
                      return (
                        <motion.div
                          key={si}
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (ri * 8 + si) * 0.008, duration: 0.25 }}
                          title={`${row.name} · T${si + 1}: ${s}%`}
                          style={{
                            height: 24, borderRadius: 3,
                            background: bg,
                            opacity: 0.75 + (s / 400),
                            cursor: 'default',
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 14, lineHeight: 1.5 }}>
                  T7 (Addition via LCM) is a class-wide gap — 31 of 38 students scored below 50%.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Marks → Mastery ──────────────────────────────────────────────── */}
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
            <span className="section-label" style={{ marginBottom: 10 }}>The GyanAnalytx shift</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 38px)',
              fontWeight: 800, color: 'var(--text-primary)',
              marginTop: 8, marginBottom: 10, letterSpacing: '-0.02em',
            }}>
              Moving from marks-oriented stress<br />to concept-oriented mastery
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 540, lineHeight: 1.75, fontWeight: 300 }}>
              The same data, different questions — and different actions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                role: 'Students',
                icon: '🎓',
                color: '#4F7EF5',
                from: '"What did I score? Am I passing?"',
                to: '"Which exact concepts do I own? What\'s blocking me?"',
                fromDesc: 'Anxiety loop. Score goes up or down. No action possible.',
                toDesc: 'Clear target. Named gap. Specific practice. Progress visible.',
              },
              {
                role: 'Teachers',
                icon: '📋',
                color: '#2DC4A2',
                from: '"Who failed? I\'ll re-teach the whole chapter."',
                to: '"T7 is the class-wide gap — 31 students confuse LCM with product."',
                fromDesc: 'Blunt instrument. Wastes 60% of class time re-covering mastered content.',
                toDesc: 'Surgical. One 20-min session on LCM. Targeted remediation, zero wasted time.',
              },
              {
                role: 'Parents',
                icon: '👨‍👩‍👧',
                color: COLOR,
                from: '"Why did marks drop? Is the teacher bad?"',
                to: '"Aarav doesn\'t confuse fractions — he specifically struggles with LCM-based addition."',
                fromDesc: 'Frustration, blame, pressure. No constructive path forward.',
                toDesc: 'Specific support. Right tutor focus. Calm, informed conversations.',
              },
              {
                role: 'School Management',
                icon: '🏫',
                color: '#9B6EF5',
                from: '"Pass/fail rates. Board results. Toppers list."',
                to: '"Curriculum compliance. Concept coverage. Teacher effectiveness per subtopic."',
                fromDesc: 'Lagging indicators. Problems surface only after exams.',
                toDesc: 'Leading indicators. Intervene before exams. Demonstrate learning quality.',
              },
            ].map((q, i) => (
              <motion.div
                key={q.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{
                  padding: '14px 20px',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <span style={{ fontSize: 18 }}>{q.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: q.color }}>{q.role}</span>
                </div>
                <div style={{ padding: '20px' }}>
                  {/* Before */}
                  <div style={{
                    padding: '12px 14px',
                    borderRadius: 4,
                    background: 'rgba(232,92,122,0.04)',
                    border: '1px solid rgba(232,92,122,0.14)',
                    marginBottom: 10,
                  }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#E85C7A', marginBottom: 6 }}>Before</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6, fontStyle: 'italic' }}>{q.from}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{q.fromDesc}</p>
                  </div>
                  {/* After */}
                  <div style={{
                    padding: '12px 14px',
                    borderRadius: 4,
                    background: `${q.color}06`,
                    border: `1px solid ${q.color}20`,
                  }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: q.color, marginBottom: 6 }}>With GyanAnalytx</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6, fontStyle: 'italic' }}>{q.to}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{q.toDesc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <span className="section-label" style={{ marginBottom: 10 }}>What GyanAnalytix does</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 2.8vw, 34px)',
              fontWeight: 800, marginTop: 8,
              color: 'var(--text-primary)', letterSpacing: '-0.02em',
            }}>
              Key features
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
          <p className="section-label" style={{ marginBottom: 16 }}>Where GyanAnalytix sits in the ACATT framework</p>
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
              Up next in the ACATT framework
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.02em' }}>
              GyanGuru
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', maxWidth: 400, lineHeight: 1.7, fontWeight: 300 }}>
              GyanAnalytix data is what makes GyanGuru powerful — the personalised tutor knows exactly which misconceptions each student carries before the first session begins.
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
              Data brings change.
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
