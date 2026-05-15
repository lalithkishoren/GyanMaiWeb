import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ExpandableFeature from './ExpandableFeature';

function ProblemCard({ problem, index, inView, accentColor }) {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -32 : 32, y: 8 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--bg-card)',
        borderRadius: 4,
        borderLeft: `2px solid ${accentColor}`,
        padding: '24px 22px',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <h3 style={{
        fontSize: 15, fontWeight: 700,
        color: 'var(--text-primary)', fontFamily: 'var(--font-display)',
        marginBottom: 10, letterSpacing: '-0.01em',
      }}>
        {problem.title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300 }}>
        {problem.body}
      </p>
    </motion.div>
  );
}

function ProductHighlight({ slug, accentColor, index, inView }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  const stage = { gyanbank: '#4F7EF5', gyanscan: '#2DC4A2', gyananalytx: '#F5A623', gyanguru: '#E85C7A', gyantest: '#9B6EF5' }[slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%' }}
    >
      <Link to={`/products/${slug}`} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
        <div
          style={{
            background: 'var(--bg-card)',
            borderRadius: 4,
            borderLeft: `2px solid ${stage}`,
            padding: '22px 20px',
            boxShadow: 'var(--shadow-sm)',
            transition: 'box-shadow 0.2s, transform 0.2s',
            height: '100%',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: stage }}>
            {product.acatAction}
          </span>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
            color: 'var(--text-primary)', margin: '7px 0 7px', letterSpacing: '-0.01em',
          }}>
            {product.name}
          </h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: 14, fontWeight: 300 }}>
            {product.tagline}
          </p>
          <span style={{ fontSize: 12, fontWeight: 600, color: stage }}>Explore →</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function StakeholderTemplate({ stakeholder }) {
  const heroRef    = useRef(null);
  const problemsRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef     = useRef(null);

  const problemsInView = useInView(problemsRef, { once: true, margin: '-60px' });
  const productsInView = useInView(productsRef, { once: true, margin: '-60px' });
  const ctaInView      = useInView(ctaRef,      { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY    = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const accentColor = stakeholder.gradient.includes('#4F7EF5') ? '#4F7EF5'
    : stakeholder.gradient.includes('#F5A623') ? '#F5A623'
    : stakeholder.gradient.includes('#0D0F1A') ? '#4F7EF5'
    : '#2DC4A2';

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ────────────────────────────────────────── */}
      <section ref={heroRef} style={{
        position: 'relative', minHeight: 400, overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>
        {/* Gradient wash */}
        <motion.div style={{
          position: 'absolute', inset: 0,
          background: stakeholder.gradient, opacity: 0.09,
        }} />

        {/* Decorative accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute', bottom: 0, left: 0,
            height: 2, width: '100%',
            background: `linear-gradient(90deg, transparent, ${accentColor}40 40%, ${accentColor}40 60%, transparent)`,
            transformOrigin: 'left',
          }}
        />

        <motion.div
          style={{ position: 'relative', zIndex: 2, maxWidth: 860, margin: '0 auto', padding: '72px 32px', textAlign: 'center', y: heroY, opacity: heroOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              display: 'inline-block', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: accentColor, marginBottom: 14,
              background: `${accentColor}10`, border: `1px solid ${accentColor}28`,
              padding: '4px 14px', borderRadius: 999,
            }}
          >
            Built for {stakeholder.label}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 5vw, 58px)',
              fontWeight: 900, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', lineHeight: 1.08, marginBottom: 18,
            }}
          >
            {stakeholder.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: 'var(--text-secondary)', lineHeight: 1.75,
              maxWidth: 500, margin: '0 auto', fontWeight: 300,
            }}
          >
            {stakeholder.heroSub}
          </motion.p>
        </motion.div>
      </section>

      {/* ── Problems ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 36 }}
        >
          <span className="section-label" style={{ marginBottom: 10 }}>The problem</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800,
            marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em',
          }}>
            What the current system gets wrong
          </h2>
        </motion.div>

        <div ref={problemsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {stakeholder.problems.map((p, i) => (
            <ProblemCard key={p.title} problem={p} index={i} inView={problemsInView} accentColor={accentColor} />
          ))}
        </div>
      </section>

      {/* ── Products ────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-subtle)', padding: 'clamp(56px, 6vw, 88px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 36 }}
          >
            <span className="section-label" style={{ marginBottom: 10 }}>The solution</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800,
              marginTop: 8, color: 'var(--text-primary)', letterSpacing: '-0.02em',
            }}>
              {stakeholder.productIntro}
            </h2>
          </motion.div>

          <div
            ref={productsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(stakeholder.products.length, 3)}, 1fr)`,
              gap: 10, marginBottom: 44,
              alignItems: 'stretch',
            }}
          >
            {stakeholder.products.map((slug, i) => (
              <ProductHighlight key={slug} slug={slug} accentColor={accentColor} index={i} inView={productsInView} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center' }}
          >
            <Link to="/contact" className="btn-gold">
              Book a Demo for {stakeholder.label} →
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
