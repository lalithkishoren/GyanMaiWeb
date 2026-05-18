import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function getLabel(pathname) {
  if (pathname === '/') return 'Book a Platform Demo';
  const productMap = { gyanbank: 'GyanBank', gyanscan: 'GyanScan', gyananalytx: 'GyanAnalytix', gyanguru: 'GyanGuru', gyantest: 'GyanTest' };
  if (pathname.startsWith('/products/')) {
    const slug = pathname.split('/products/')[1];
    return `See ${productMap[slug] || 'Product'} in Action`;
  }
  if (pathname.startsWith('/students'))         return 'Demo for Students';
  if (pathname.startsWith('/teachers'))         return 'Demo for Teachers';
  if (pathname.startsWith('/parents'))          return 'Demo for Parents';
  if (pathname.startsWith('/school-management')) return 'Demo for Your School';
  if (pathname.startsWith('/policy-makers'))    return 'Demo for Policy Teams';
  return 'Book a Demo';
}

export default function ContextualSidebar() {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();
  const label = getLabel(pathname);

  return (
    <>
      {/* Desktop left pill */}
      <div
        className="hidden md:block"
        style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 90 }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <motion.div
          animate={{ width: expanded ? 230 : 38 }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          style={{
            background: '#05070E',
            borderRadius: '0 14px 14px 0',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            minHeight: 148,
            boxShadow: '4px 0 24px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderLeft: 'none',
          }}
        >
          {!expanded ? (
            <div style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.35)', padding: '14px 12px',
              whiteSpace: 'nowrap', cursor: 'pointer',
              fontFamily: 'var(--font-body)',
            }}>
              Get a Demo
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.12 }}
                style={{ padding: '20px 18px 20px 14px', width: '100%' }}
              >
                <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)', marginBottom: 4, lineHeight: 1.3 }}>
                  {label}
                </p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', marginBottom: 16, fontWeight: 300, lineHeight: 1.5 }}>
                  30-min walkthrough, personalised for your school.
                </p>
                <Link to="/contact" style={{
                  display: 'block', textAlign: 'center',
                  padding: '9px 14px', borderRadius: 9,
                  background: 'var(--gold)', color: '#1A1200',
                  fontSize: 12, fontWeight: 600, textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  transition: 'background 0.2s',
                }}>
                  Let's Talk →
                </Link>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>

      {/* Mobile bottom-right pill */}
      <div className="md:hidden" style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 90 }}>
        <Link to="/contact" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#05070E', color: '#fff',
          padding: '12px 20px', borderRadius: 999,
          fontSize: 13, fontWeight: 600, textDecoration: 'none',
          boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
          fontFamily: 'var(--font-body)',
          border: '1px solid rgba(255,255,255,0.10)',
        }}>
          Book a Demo
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </>
  );
}
