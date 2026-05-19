import { useLocation, Link } from 'react-router-dom';

export default function ContextualSidebar() {
  const { pathname } = useLocation();

  return (
    <>
      {/* Mobile bottom-right pill */}
      <div className="md:hidden" style={{ position: 'fixed', bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))', right: 'max(20px, env(safe-area-inset-right, 20px))', zIndex: 90 }}>
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
