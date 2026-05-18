import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import ExpandableFeature from './ExpandableFeature';
import AcatChain from './AcatChain';

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

const stageColors = {
  gyanbank:    '#4F7EF5',
  gyanscan:    '#2DC4A2',
  gyananalytx: '#F5A623',
  gyanguru:    '#E85C7A',
  gyantest:    '#9B6EF5',
};

// Each product gets a distinct hero entrance animation style
const heroVariants = {
  gyanbank:    { hidden: { opacity: 0, x: -40 },  visible: { opacity: 1, x: 0 } },
  gyanscan:    { hidden: { opacity: 0, y: 40 },   visible: { opacity: 1, y: 0 } },
  gyananalytx: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
  gyanguru:    { hidden: { opacity: 0, x: 40 },   visible: { opacity: 1, x: 0 } },
  gyantest:    { hidden: { opacity: 0, y: -30 },  visible: { opacity: 1, y: 0 } },
};

export default function ProductTemplate({ product }) {
  const color    = stageColors[product.slug] || '#4F7EF5';
  const variant  = heroVariants[product.slug] || heroVariants.gyanbank;

  const heroRef     = useRef(null);
  const featuresRef = useRef(null);
  const acatRef     = useRef(null);
  const ctaRef      = useRef(null);

  const featuresInView = useInView(featuresRef, { once: true, margin: '-60px' });
  const acatInView     = useInView(acatRef,     { once: true, margin: '-60px' });
  const ctaInView      = useInView(ctaRef,      { once: true, margin: '-60px' });

  // Subtle parallax on hero pull-quote
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const quoteY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <main style={{ paddingTop: 80 }}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section
        ref={heroRef}
        style={{
          padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 56px)',
          maxWidth: 1100, margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <motion.div
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Step badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color,
              background: `${color}10`,
              border: `1px solid ${color}28`,
              padding: '5px 14px', borderRadius: 999,
              display: 'inline-block', marginBottom: 28,
            }}
          >
            Step {product.acatStep} — {product.acatAction}
          </motion.span>

          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto]"
            style={{
              gap: 'clamp(32px, 5vw, 72px)',
              alignItems: 'start',
            }}
          >
            {/* Left — copy */}
            <div style={{ maxWidth: 640 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginBottom: 16 }}
              >
                <img
                  src={productLogos[product.slug]}
                  alt={product.name}
                  style={{ height: 'clamp(48px, 6vw, 72px)', width: 'auto', display: 'block' }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.6 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(17px, 2vw, 22px)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color,
                  marginBottom: 20,
                  lineHeight: 1.45,
                }}
              >
                {product.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{
                  fontSize: 'clamp(14px, 1.4vw, 16px)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  marginBottom: 36,
                }}
              >
                {product.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.5 }}
                style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}
              >
                <Link to="/contact" className="btn-primary">
                  See {product.name} in action →
                </Link>
              </motion.div>
            </div>

            {/* Right — headline pull quote with parallax */}
            <motion.div
              className="w-full md:w-[clamp(200px,22vw,280px)]"
              style={{
                flexShrink: 0,
                paddingTop: 8,
                y: quoteY,
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderLeft: `3px solid ${color}`, paddingLeft: 20 }}
              >
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(17px, 1.8vw, 22px)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                }}>
                  {product.headline}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Features ─────────────────────────────────── */}
      <section style={{
        padding: '0 clamp(24px, 5vw, 56px) 72px',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 32 }}
        >
          <span className="section-label" style={{ marginBottom: 10 }}>What {product.name} does</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 2.8vw, 34px)',
            fontWeight: 800,
            marginTop: 8,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}>
            Key features
          </h2>
        </motion.div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {product.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ExpandableFeature
                title={feature.title}
                summary={feature.summary}
                detail={feature.detail}
                accentColor={color}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ACATT position ─────────────────────────── */}
      <section style={{
        padding: '0 clamp(24px, 5vw, 56px) 56px',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <motion.div
          ref={acatRef}
          initial={{ opacity: 0, y: 30 }}
          animate={acatInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'var(--bg-card)',
            borderRadius: 6,
            border: '1px solid var(--border)',
            padding: '20px 28px',
          }}
        >
          <p className="section-label" style={{ marginBottom: 16 }}>
            Where {product.name} sits in the ACATT framework
          </p>
          <AcatChain activeSlug={product.slug} />
        </motion.div>
      </section>

      {/* ── Handoff CTA ───────────────────────────────── */}
      {product.handoffTo && (
        <section style={{
          padding: '0 clamp(24px, 5vw, 56px) 56px',
          maxWidth: 1100, margin: '0 auto',
        }}>
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={ctaInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--text-primary)',
              borderRadius: 8,
              padding: 'clamp(32px, 4vw, 48px) clamp(28px, 4vw, 44px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: 220, height: '100%',
              background: `linear-gradient(135deg, transparent 0%, ${stageColors[product.handoffTo] || '#fff'}08 100%)`,
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative' }}>
              <p style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)',
                marginBottom: 10,
              }}>
                Up next in the ACATT framework
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 800, color: '#fff',
                marginBottom: 10, letterSpacing: '-0.02em',
              }}>
                {product.handoffName}
              </h3>
              <p style={{
                fontSize: 14, color: 'rgba(255,255,255,0.45)',
                maxWidth: 400, lineHeight: 1.7, fontWeight: 300,
              }}>
                {product.name} data flows directly to {product.handoffName} — nothing is lost between stages.
              </p>
            </div>

            <Link
              to={`/products/${product.handoffTo}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', borderRadius: 4,
                background: stageColors[product.handoffTo] || '#fff',
                color: '#fff', fontSize: 13, fontWeight: 600,
                textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Explore {product.handoffName} →
            </Link>
          </motion.div>
        </section>
      )}

      {/* ── Closure / Book a Demo — always last ───────── */}
      {product.closure && (
        <section style={{
          background: 'var(--bg-subtle)',
          padding: 'clamp(48px, 5vw, 72px) clamp(24px, 5vw, 56px)',
        }}>
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
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: 16,
              }}>
                {product.closure.headline}
              </h2>
              <p style={{
                fontSize: 'clamp(14px, 1.4vw, 17px)',
                color: 'var(--text-secondary)',
                maxWidth: 520,
                margin: '0 auto 32px',
                lineHeight: 1.8,
                fontWeight: 300,
              }}>
                {product.closure.body}
              </p>
              <Link to="/contact" className="btn-gold">
                Book a Demo →
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
