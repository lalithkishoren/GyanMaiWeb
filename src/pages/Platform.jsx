import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { acatStages } from '../data/acatFramework';
import { stakeholders } from '../data/stakeholders';

function StageSection({ stage, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-[60px]"
      style={{ alignItems: 'center' }}
    >
      <div style={{ order: isEven ? 0 : 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: stage.color, padding: '4px 12px', borderRadius: 999 }}>
            Step {stage.step} — {stage.action}
          </span>
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.2 }}>{stage.product}</h2>
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>{stage.detail}</p>
        <Link to={`/products/${stage.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: stage.color, textDecoration: 'none' }}>
          Explore {stage.product} →
        </Link>
      </div>

      <div style={{ order: isEven ? 1 : 0 }}>
        <div style={{
          height: 220,
          borderRadius: 20,
          background: `linear-gradient(135deg, ${stage.color}33 0%, ${stage.color}15 100%)`,
          border: `1px solid ${stage.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 48, fontWeight: 800, fontFamily: 'var(--font-display)', color: stage.color, opacity: 0.3 }}>{stage.step}</p>
            <p style={{ fontSize: 22, fontWeight: 700, color: stage.color, fontFamily: 'var(--font-display)' }}>{stage.action}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Platform() {
  return (
    <main style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="px-5 md:px-6 py-12 md:py-[60px] md:pb-10" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>The Platform</span>
          <h1 style={{ fontSize: 'clamp(34px, 6vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 16 }}>
            The ACATT Framework
          </h1>
          <p style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 32px' }}>
            Five integrated products. One continuous cycle. Data flows from one product to the next — Author, Capture, Analyse, Teach, Test — and the ACATT cycle repeats.
          </p>

          {/* Cycle visualization */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 48 }}>
            {acatStages.map((stage, i) => (
              <div key={stage.slug} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{
                  padding: '8px 16px',
                  borderRadius: 999,
                  background: `${stage.color}18`,
                  border: `1px solid ${stage.color}40`,
                  fontSize: 13,
                  fontWeight: 600,
                  color: stage.color,
                  fontFamily: 'var(--font-display)',
                }}>
                  {stage.action}
                </div>
                {i < acatStages.length - 1 && (
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path d="M0 5H12M12 5L8 1M12 5L8 9" stroke="var(--border-strong)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M0 5H12M12 5L8 1M12 5L8 9" stroke="var(--border-strong)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6A4 4 0 1 1 6 2M6 2L9 5M6 2L3 5" stroke="var(--text-muted)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Repeats
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stage deep-dives */}
      <section className="px-5 md:px-10 pb-10" style={{ maxWidth: 1100, margin: '0 auto' }}>
        {acatStages.map((stage, i) => (
          <StageSection key={stage.slug} stage={stage} index={i} />
        ))}
      </section>

      {/* Data handoff callout */}
      <section className="px-5 md:px-6 pb-12 md:pb-[60px]" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="card p-6 md:p-9" style={{ background: 'var(--text-primary)', color: '#fff', borderRadius: 24 }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>Data flows through the ACATT cycle</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 600 }}>
            GyanScan captures the data. GyanAnalytx surfaces the pattern. GyanGuru addresses the misconception. GyanTest confirms mastery. The results feed back into GyanBank for the next round of authoring.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
            {acatStages.map((s) => (
              <Link
                key={s.slug}
                to={`/products/${s.slug}`}
                style={{
                  padding: '6px 14px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: s.color,
                  border: `1px solid ${s.color}50`,
                  background: `${s.color}15`,
                }}
              >
                {s.product}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder selector */}
      <section className="px-5 md:px-6 pb-16 md:pb-20" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 26px)', fontWeight: 700, color: 'var(--text-primary)' }}>Which parts of ACATT are right for you?</h2>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 8 }}>Pick your role to see which parts of the ACATT cycle apply.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {stakeholders.map((s) => (
            <Link
              key={s.slug}
              to={s.path}
              style={{
                display: 'block',
                padding: '28px 16px',
                borderRadius: 16,
                textDecoration: 'none',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginBottom: 4 }}>{s.label}</p>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 400 }}>View →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
