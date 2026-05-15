import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import wordmark from '../../assets/logos/gyanmai-wordmark.svg';
import { useTheme } from '../../context/ThemeContext';

const productItems = [
  { label: 'GyanBank',    path: '/products/gyanbank',    sub: 'Author' },
  { label: 'GyanScan',   path: '/products/gyanscan',    sub: 'Capture' },
  { label: 'GyanAnalytx',path: '/products/gyananalytx', sub: 'Analyse' },
  { label: 'Gyan Guru',  path: '/products/gyanguru',    sub: 'Teach' },
  { label: 'GyanTest',   path: '/products/gyantest',    sub: 'Test' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown]   = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  const onHome = pathname === '/';

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
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 62,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px',
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
        <img
          src={wordmark}
          alt="GyanMai"
          style={{
            height: 26,
            filter: lightText ? 'invert(1)' : 'none',
            transition: 'filter 0.35s',
          }}
        />
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {[
          { label: 'Platform', path: '/platform' },
          { label: 'About',    path: '/about' },
          { label: 'Stories',  path: '/testimonials' },
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
                  background: theme === 'dark' ? '#131726' : '#FFFEF8',
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
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>{item.label}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 1 }}>{item.sub}</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* CTA + Theme toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            width: 34, height: 34, borderRadius: 999,
            border: `1px solid ${lightText ? 'rgba(255,255,255,0.2)' : 'var(--border-strong)'}`,
            background: lightText ? 'rgba(255,255,255,0.10)' : 'var(--bg-card)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.25s, border-color 0.25s',
            flexShrink: 0,
          }}
        >
          {theme === 'dark' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={lightText ? '#fff' : 'var(--text-secondary)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={lightText ? '#fff' : 'var(--text-secondary)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        <Link
          to="/contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '9px 20px', borderRadius: 999,
            background: lightText ? 'rgba(255,255,255,0.13)' : 'var(--gold)',
            color: lightText ? '#fff' : '#1B1200',
            border: lightText ? '1px solid rgba(255,255,255,0.22)' : 'none',
            backdropFilter: lightText ? 'blur(12px)' : 'none',
            fontSize: 13, fontWeight: 500, textDecoration: 'none',
            transition: 'background 0.25s',
            fontFamily: 'var(--font-body)',
          }}
        >
          Book a Demo
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
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
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            style={{
              position: 'fixed', top: 70, left: 12, right: 12,
              background: theme === 'dark' ? '#131726' : '#FFFEF8',
              borderRadius: 20,
              boxShadow: '0 12px 48px rgba(0,0,0,0.20)',
              padding: 12,
              border: '1px solid var(--border)',
            }}
          >
            {[
              { label: 'Platform',        path: '/platform' },
              { label: 'Students',        path: '/students' },
              { label: 'Teachers',        path: '/teachers' },
              { label: 'Parents',         path: '/parents' },
              { label: 'School Management', path: '/school-management' },
              { label: 'Policy Makers',   path: '/policy-makers' },
              ...productItems,
              { label: 'About',           path: '/about' },
              { label: 'Testimonials',    path: '/testimonials' },
            ].map((l) => (
              <Link key={l.path} to={l.path} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '11px 14px', borderRadius: 10, fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: 8, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
              <Link to="/contact" onClick={() => setMobileOpen(false)}
                className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Book a Demo →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
