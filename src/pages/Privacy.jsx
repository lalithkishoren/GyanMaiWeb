import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const scopes = [
  { feature: 'Send email', scope: 'gmail.send', use: 'Send emails you trigger (e.g., report or result notifications to parents/teachers). We do not read your inbox.' },
  { feature: 'Calendar', scope: 'calendar.events', use: 'Create/update calendar events (e.g., scheduled assessments or parent-teacher meetings).' },
  { feature: 'Sheets', scope: 'spreadsheets', use: 'Read and write spreadsheet data you designate (e.g., student rosters, assessment results).' },
  { feature: 'Drive (file)', scope: 'drive.file', use: 'Access only the specific files you open/create with GyanMai.' },
];

const linkStyle = { color: 'var(--accent-dark)', textDecoration: 'underline' };
const h2Style = { fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', margin: '2.4rem 0 .6rem', fontFamily: 'var(--font-display)' };
const pStyle = { fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, margin: '0 0 12px' };
const liStyle = { fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 8 };

export default function Privacy() {
  return (
    <main style={{ paddingTop: 80 }}>
      <section style={{ padding: '48px 24px 80px', maxWidth: 820, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>Legal</span>
          <h1 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-1px', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 8 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 28 }}>
            GyanMai, a product of Gyanmai Pvt Ltd &nbsp;·&nbsp; Effective date: 03 July 2026
          </p>
          <hr style={{ border: 0, borderTop: '1px solid var(--border, rgba(0,0,0,0.08))', margin: '0 0 28px' }} />

          <p style={pStyle}>
            <strong>GyanMai</strong> ("GyanMai", "we", "us", "our") is an AI-powered EdTech platform operated by
            Gyanmai Pvt Ltd, T-Hub, Hyderabad, India. This Privacy Policy explains what information we
            collect, how we use and protect it, and the choices you have. It applies to our website, application, and the
            education services we provide (the "Service").
          </p>

          <h2 style={h2Style}>1. Who this policy covers</h2>
          <p style={pStyle}>
            This policy covers (a) <strong>customers</strong> (schools and institutions) who create an account and
            configure the platform, and (b) <strong>end users</strong> (students, teachers, and parents) who use the
            platform via web or app. Where we process personal data on behalf of a school, the school is the data
            controller/fiduciary and we act as a processor under their instructions.
          </p>

          <h2 style={h2Style}>2. Information we collect</h2>
          <ul>
            <li style={liStyle}><strong>Account &amp; billing data</strong> — name, business details, email, phone, and payment information you provide.</li>
            <li style={liStyle}><strong>Configuration data</strong> — classes, rosters, question banks, templates, and connected-service settings.</li>
            <li style={liStyle}><strong>Academic &amp; content data</strong> — assessment responses, scanned answer sheets, submissions, AI-tutoring conversations, results, and related metadata generated when you use the Service.</li>
            <li style={liStyle}><strong>Usage &amp; device data</strong> — logs, IP address, timestamps, and diagnostic information.</li>
            <li style={liStyle}><strong>Google user data</strong> — where you connect a Google account, the data described in Section 3.</li>
          </ul>

          <h2 style={h2Style}>3. Google user data and Limited Use</h2>
          <p style={pStyle}>
            If you connect your Google account, GyanMai requests only the minimum access needed for the features you
            enable. We request the following scopes:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', margin: '12px 0', fontSize: 14 }}>
              <thead>
                <tr>
                  {['Feature', 'Google scope', 'What we do with it'].map((h) => (
                    <th key={h} style={{ border: '1px solid var(--border, rgba(0,0,0,0.1))', padding: '9px 11px', textAlign: 'left', background: 'var(--accent-light)', color: 'var(--text-primary)', fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scopes.map((s) => (
                  <tr key={s.scope}>
                    <td style={{ border: '1px solid var(--border, rgba(0,0,0,0.1))', padding: '9px 11px', color: 'var(--text-secondary)', verticalAlign: 'top' }}>{s.feature}</td>
                    <td style={{ border: '1px solid var(--border, rgba(0,0,0,0.1))', padding: '9px 11px', verticalAlign: 'top' }}>
                      <code style={{ background: 'var(--accent-light)', padding: '1px 6px', borderRadius: 4, fontSize: '.9em', color: 'var(--accent-dark)' }}>{s.scope}</code>
                    </td>
                    <td style={{ border: '1px solid var(--border, rgba(0,0,0,0.1))', padding: '9px 11px', color: 'var(--text-secondary)', verticalAlign: 'top' }}>{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card" style={{ padding: '18px 20px', margin: '16px 0', borderLeft: '4px solid var(--accent-dark)' }}>
            <p style={{ ...pStyle, margin: 0 }}>
              <strong>Limited Use disclosure.</strong> GyanMai's use and transfer to any other app of information
              received from Google APIs will adhere to the{' '}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Google API Services User Data Policy</a>,
              including the <strong>Limited Use</strong> requirements. Specifically:
            </p>
            <ul style={{ margin: '.6rem 0 0' }}>
              <li style={liStyle}>We use Google user data only to provide and improve the user-facing features you have enabled.</li>
              <li style={liStyle}>We do not transfer or sell Google user data to third parties, except as necessary to provide or improve those features, to comply with applicable law, or as part of a merger/acquisition with equivalent protection.</li>
              <li style={liStyle}>We do not use Google user data for advertising.</li>
              <li style={liStyle}>We do not allow humans to read Google user data unless (i) you give consent for specific data, (ii) it is necessary for security or to comply with law, (iii) it is required for our internal operations and the data has been aggregated/anonymized, or (iv) you request support and grant access.</li>
            </ul>
          </div>

          <h2 style={h2Style}>4. How we use information</h2>
          <ul>
            <li style={liStyle}>To provide, operate, and secure the Service (run assessments, generate analytics, deliver AI-tutoring).</li>
            <li style={liStyle}>To execute the actions you configure (send an email, create a calendar event, update a sheet).</li>
            <li style={liStyle}>To bill, support, troubleshoot, and improve the Service.</li>
            <li style={liStyle}>To comply with legal obligations.</li>
          </ul>

          <h2 style={h2Style}>5. How we share information</h2>
          <p style={pStyle}>We do not sell personal data. We share it only with:</p>
          <ul>
            <li style={liStyle}><strong>Service providers/subprocessors</strong> that power the Service — for example AI/model providers, cloud hosting, and payment processors — under contractual confidentiality and data-protection obligations.</li>
            <li style={liStyle}><strong>Legal &amp; safety</strong> — where required by law or to protect rights, safety, and security.</li>
            <li style={liStyle}><strong>Your instructions</strong> — connected services you authorize (e.g., your Google account).</li>
          </ul>

          <h2 style={h2Style}>6. Data retention</h2>
          <p style={pStyle}>
            We retain data for as long as needed to provide the Service and for legitimate legal/operational purposes.
            Schools can configure retention for student records and request deletion as described below.
          </p>

          <h2 style={h2Style}>7. Security</h2>
          <p style={pStyle}>
            We use administrative, technical, and organizational safeguards including encryption in transit and at rest,
            access controls, and secret management. Access tokens and credentials (including Google refresh tokens) are
            stored encrypted and used only to perform the actions you authorize. No method of transmission or storage is
            100% secure.
          </p>

          <h2 style={h2Style}>8. Your rights &amp; choices</h2>
          <ul>
            <li style={liStyle}>
              <strong>Disconnect</strong> a connected Google account at any time in your account settings or at{' '}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={linkStyle}>Google Account permissions</a>;
              this revokes our access and we delete the associated tokens.
            </li>
            <li style={liStyle}>Under India's Digital Personal Data Protection Act, 2023 and other applicable laws, you may request access, correction, or deletion of your personal data by contacting us.</li>
          </ul>

          <h2 style={h2Style}>9. International &amp; India data</h2>
          <p style={pStyle}>
            We operate primarily in India. Where data is processed or stored, we apply protections consistent with
            applicable law, including the Digital Personal Data Protection Act, 2023.
          </p>

          <h2 style={h2Style}>10. Students &amp; children's data</h2>
          <p style={pStyle}>
            The Service is provided to schools and institutions, and accounts are held by adults (school
            administrators and staff). Where the Service processes data about students who are minors, we do so only on
            behalf of, and under the instructions of, the school as data fiduciary, which is responsible for obtaining
            any consent required from parents/guardians. We do not use student data for advertising and do not sell it.
          </p>

          <h2 style={h2Style}>11. Changes to this policy</h2>
          <p style={pStyle}>We may update this policy; we will post the new version here with a revised effective date.</p>

          <h2 style={h2Style}>12. Contact</h2>
          <p style={pStyle}>
            Gyanmai Pvt Ltd<br />
            T-Hub, Hyderabad, India<br />
            Email: <a href="mailto:privacy@gyanmai.com" style={linkStyle}>privacy@gyanmai.com</a>
          </p>

          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 36 }}>
            See also our <Link to="/terms" style={linkStyle}>Terms of Service</Link>.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 24, opacity: 0.7 }}>
            © 2026 Gyanmai Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
