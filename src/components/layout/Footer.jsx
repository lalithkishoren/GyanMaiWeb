import { Link } from 'react-router-dom';
import darkLogo from '../../assets/logos/gyanmai-dark-logo.png';
import useMobile from '../../hooks/useMobile';

const cols = {
  Platform: [
    { label: 'How It Works',    path: '/platform' },
    { label: 'ACATT Framework', path: '/#acatt' },
  ],
  Products: [
    { label: 'GyanBank',    path: '/products/gyanbank' },
    { label: 'GyanScan',   path: '/products/gyanscan' },
    { label: 'GyanAnalytix',path: '/products/gyananalytx' },
    { label: 'GyanGuru',   path: '/products/gyanguru' },
    { label: 'GyanTest',   path: '/products/gyantest' },
  ],
  'For You': [
    { label: 'Students',          path: '/students' },
    { label: 'Teachers',          path: '/teachers' },
    { label: 'Parents',           path: '/parents' },
    { label: 'School Management', path: '/school-management' },
    { label: 'Policy Makers',     path: '/policy-makers' },
  ],
  Company: [
    { label: 'About',         path: '/about' },
    { label: 'Testimonials',  path: '/testimonials' },
    { label: 'Contact',       path: '/contact' },
  ],
};

export default function Footer() {
  const isMobile = useMobile();
  return (
    <footer style={{ background: '#05070E', color: '#fff', padding: isMobile ? '48px 20px 24px' : '64px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr 1fr',
          gap: isMobile ? '32px 24px' : 48,
          marginBottom: 52,
        }}>
          {/* Brand — spans both columns on mobile */}
          <div style={isMobile ? { gridColumn: '1 / -1' } : {}}>
            <img src={darkLogo} alt="Gyanmai" style={{ height: 110, objectFit: 'contain', marginBottom: 18 }} />
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, maxWidth: 240, fontWeight: 300 }}>
              Beyond Marks. Into Understanding.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.22)', marginTop: 10, fontWeight: 300, lineHeight: 1.6 }}>
              Veterans from Microsoft · IIM Calcutta · BITS Pilani
            </p>
            <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['GDPR', 'DPDP Act', 'Patent Filed'].map((b) => (
                <span key={b} style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: '0.08em',
                  padding: '3px 10px', borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: 'rgba(255,255,255,0.35)',
                }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(cols).map(([section, links]) => (
            <div key={section}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 16 }}>
                {section}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {links.map((l) => (
                  <Link
                    key={l.path + l.label}
                    to={l.path}
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.85)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.48)'}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.22)', fontWeight: 300 }}>
            © {new Date().getFullYear()} Gyanmai. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)', fontWeight: 300 }}>
            Encrypted at rest &amp; in transit · Student data privacy-first
          </p>
        </div>
      </div>
    </footer>
  );
}
