import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import wordmark from '../../assets/logos/gyanmai-final-logo-2.png';
import { useTheme } from '../../context/ThemeContext';

function getDemoLabel(pathname) {
  const productMap = { gyanbank: 'GyanBank', gyanscan: 'GyanScan', gyananalytx: 'GyanAnalytix', gyanguru: 'GyanGuru', gyantest: 'GyanTest' };
  if (pathname.startsWith('/products/')) {
    const slug = pathname.split('/products/')[1];
    return `See ${productMap[slug] || 'Product'} in Action`;
  }
  if (pathname.startsWith('/students'))          return 'Demo for Students';
  if (pathname.startsWith('/teachers'))          return 'Demo for Teachers';
  if (pathname.startsWith('/parents'))           return 'Demo for Parents';
  if (pathname.startsWith('/school-management')) return 'Demo for Your School';
  if (pathname.startsWith('/policy-makers'))     return 'Demo for Policy Teams';
  return 'Book a Demo';
}

const productItems = [
  { label: 'GyanBank',    path: '/products/gyanbank',    sub: 'Author' },
  { label: 'GyanScan',   path: '/products/gyanscan',    sub: 'Capture' },
  { label: 'GyanAnalytix', path: '/products/gyananalytx',  sub: 'Analyse' },
  { label: 'GyanGuru',   path: '/products/gyanguru',    sub: 'Teach' },
  { label: 'GyanTest',   path: '/products/gyantest',    sub: 'Test' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown]   = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  const onHome = pathname === '/';
  const demoLabel = getDemoLabel(pathname);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // On home: start transparent over light cream hero, frost on scroll
  // On other pages: always frosted
  const frosted = !onHome || scrolled;
  const lightText = false;

  return (
    <motion.nav
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="px-4 md:px-8"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: frosted
          ? (theme === 'dark' ? 'rgba(11,15,28,0.88)' : 'rgba(250,249,245,0.90)')
          : 'transparent',
        backdropFilter: frosted ? 'blur(18px) saturate(1.4)' : 'none',
        borderBottom: frosted ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        transition: 'background 0.35s, border-color 0.35s, backdrop-filter 0.35s',
      }}
    >
      {/* Wordmark */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        {/* Clip whitespace: PNG is 500×500, logo content is middle ~42% */}
        <div style={{ height: 68, overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={wordmark}
            alt="GyanMai"
            style={{
              height: 161,
              width: 'auto',
              display: 'block',
              marginTop: -46,
              mixBlendMode: 'multiply',
            }}
          />
        </div>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
        {[
          { label: 'Platform', path: '/#acatt' },
          { label: 'About',    path: '/about' },
          { label: 'Success Stories',  path: '/testimonials' },
          { label: "FAQ's",    path: '/faq' },
        ].map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            style={({ isActive }) => ({
              padding: '6px 14px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 400,
              color: lightText
                ? (isActive ? '#fff' : 'rgba(255,255,255,0.65)')
                : (isActive ? 'var(--text-primary)' : 'var(--text-secondary)'),
              textDecoration: 'none',
              background: isActive
                ? (lightText ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.05)')
                : 'transparent',
              transition: 'color 0.25s, background 0.25s',
            })}
          >
            {l.label}
          </NavLink>
        ))}

        {/* Products dropdown */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <button style={{
            padding: '6px 14px', borderRadius: 999, border: 'none', background: 'transparent', cursor: 'pointer',
            fontSize: 14, fontWeight: 400,
            color: lightText ? 'rgba(255,255,255,0.65)' : 'var(--text-secondary)',
            display: 'flex', alignItems: 'center', gap: 5,
            transition: 'color 0.25s',
            fontFamily: 'var(--font-body)',
          }}>
            Products
            <motion.svg animate={{ rotate: dropdown ? 180 : 0 }} transition={{ duration: 0.2 }}
              width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </button>

          <AnimatePresence>
            {dropdown && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: 'absolute', top: 'calc(100% + 10px)', left: '50%',
                  transform: 'translateX(-50%)',
                  background: theme === 'dark' ? '#131726' : 'var(--bg-card)',
                  borderRadius: 16,
                  boxShadow: theme === 'dark'
                    ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)'
                    : '0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
                  padding: 8, minWidth: 210,
                }}
              >
                {productItems.map((item) => (
                  <Link
                    key={item.path} to={item.path}
                    onClick={() => setDropdown(false)}
                    style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-base)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>{item.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginTop: 2 }}>{item.sub}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* CTA + hamburger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

        <Link
          to="/contact"
          className="hidden md:inline-flex"
          style={{
            alignItems: 'center', gap: 7,
            borderRadius: 999,
            background: '#FFB400',
            color: '#0F1A0D',
            border: 'none',
            fontWeight: 700, textDecoration: 'none',
            transition: 'background 0.2s, box-shadow 0.2s',
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            whiteSpace: 'nowrap',
            padding: '8px 18px',
            boxShadow: '0 2px 12px rgba(255,180,0,0.30)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#FFC933'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,180,0,0.40)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#FFB400'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(255,180,0,0.30)'; }}
        >
          {demoLabel}
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ marginLeft: 4 }}>
            <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{
            width: 36, height: 36, borderRadius: 10, border: '1px solid',
            borderColor: lightText ? 'rgba(255,255,255,0.2)' : 'var(--border-strong)',
            background: lightText ? 'rgba(255,255,255,0.08)' : 'var(--bg-card)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            {mobileOpen
              ? <path d="M2 2L14 10M14 2L2 10" stroke={lightText ? '#fff' : 'var(--text-primary)'} strokeWidth="1.5" strokeLinecap="round"/>
              : <path d="M0 2h16M0 6h16M0 10h16" stroke={lightText ? '#fff' : 'var(--text-primary)'} strokeWidth="1.5" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'fixed', top: 78, right: 12, width: 220,
              background: theme === 'dark' ? '#131726' : 'var(--bg-card)',
              borderRadius: 16,
              boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
              padding: '6px 6px 8px',
              border: '1px solid var(--border)',
              maxHeight: 'calc(100dvh - 100px)',
              overflowY: 'auto',
            }}
          >
            {[
              { label: 'Platform',        path: '/#acatt' },
              { label: 'About',           path: '/about' },
              { label: 'Success Stories', path: '/testimonials' },
              { label: "FAQ's",           path: '/faq' },
              { label: 'Students',        path: '/students' },
              { label: 'Teachers',        path: '/teachers' },
              { label: 'Parents',         path: '/parents' },
              { label: 'School Mgmt',     path: '/school-management' },
            ].map((l) => (
              <Link key={l.path} to={l.path} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '7px 10px', borderRadius: 8, fontSize: 13, fontWeight: 400, color: 'var(--text-primary)', textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-base)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ height: 1, background: 'var(--border)', margin: '4px 6px' }} />
            <Link to="/contact" onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', textAlign: 'center', margin: '4px 2px 2px',
                padding: '8px', borderRadius: 10,
                background: '#FFB400', color: '#0F1A0D',
                fontSize: 13, fontWeight: 700, textDecoration: 'none',
              }}>
              Book a Demo →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
