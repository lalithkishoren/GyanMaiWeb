import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const linkStyle = { color: 'var(--accent-dark)', textDecoration: 'underline' };
const h2Style = { fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', margin: '2.4rem 0 .6rem', fontFamily: 'var(--font-display)' };
const pStyle = { fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, margin: '0 0 12px' };

export default function Terms() {
  return (
    <main style={{ paddingTop: 80 }}>
      <section style={{ padding: '48px 24px 80px', maxWidth: 820, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>Legal</span>
          <h1 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-1px', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 8 }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 28 }}>
            GyanMai, a product of Gyanmai Pvt Ltd &nbsp;·&nbsp; Effective date: 03 July 2026
          </p>
          <hr style={{ border: 0, borderTop: '1px solid var(--border, rgba(0,0,0,0.08))', margin: '0 0 28px' }} />

          <p style={pStyle}>
            These Terms of Service ("Terms") govern your access to and use of the GyanMai website, application, and
            education services (the "Service"), provided by Gyanmai Pvt Ltd ("GyanMai", "we", "us").
            By accessing or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
          </p>

          <h2 style={h2Style}>1. The Service</h2>
          <p style={pStyle}>
            GyanMai is an AI-powered EdTech platform that lets schools, educators, and learners access assessment,
            analytics, and AI-tutoring tools, and to connect third-party services (such as Google Workspace) that they
            authorize.
          </p>

          <h2 style={h2Style}>2. Accounts &amp; eligibility</h2>
          <p style={pStyle}>
            Accounts are held by schools, institutions, or their authorized representatives aged 18+. You are
            responsible for the accuracy of your account information and for maintaining the confidentiality of your
            credentials and all activity under your account. Where students who are minors access the Service, they do
            so under the supervision and responsibility of the school.
          </p>

          <h2 style={h2Style}>3. Acceptable use</h2>
          <p style={pStyle}>
            You agree not to use the Service to: (a) violate any law or third-party rights; (b) upload or process
            personal data without a lawful basis or the consents required (including any consent needed from
            parents/guardians of student users); (c) impersonate others or misrepresent your affiliation; (d) transmit
            malware or attempt to disrupt or gain unauthorized access to the Service; or (e) infringe
            intellectual-property or privacy rights. You are responsible for obtaining all required consents relating to
            the students and individuals whose data you submit.
          </p>

          <h2 style={h2Style}>4. Customer data &amp; third-party services</h2>
          <p style={pStyle}>
            You retain ownership of the data you submit ("Customer Data"). You grant us a limited license to process
            Customer Data to provide the Service. When you connect a third-party service (e.g., Google Workspace),
            your use of that service is also governed by that provider's terms, and you
            authorize us to access it as needed to perform the actions you configure. Our handling of personal data is
            described in our <Link to="/privacy" style={linkStyle}>Privacy Policy</Link>.
          </p>

          <h2 style={h2Style}>5. Fees</h2>
          <p style={pStyle}>
            Paid features are billed as described at sign-up or in an order (including subscription and usage-based
            fees). Fees are exclusive of taxes (e.g., GST) unless stated. Except as required by law, fees are
            non-refundable.
          </p>

          <h2 style={h2Style}>6. Intellectual property</h2>
          <p style={pStyle}>
            The Service, including its software, design, and content (excluding Customer Data and third-party
            materials), is owned by us or our licensors and protected by law. These Terms grant you a non-exclusive,
            non-transferable right to use the Service during your subscription; no other rights are granted.
          </p>

          <h2 style={h2Style}>7. Third-party components</h2>
          <p style={pStyle}>
            The Service incorporates third-party and open-source components, provided under their respective licenses.
            Third-party services are provided by their respective owners and we are not responsible for them.
          </p>

          <h2 style={h2Style}>8. Disclaimers</h2>
          <p style={pStyle}>
            The Service is provided "as is" and "as available" without warranties of any kind, whether express or
            implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not
            warrant that the Service will be uninterrupted, error-free, or that AI-generated outputs will be accurate or
            suitable for your purposes. You are responsible for reviewing outputs before relying on them.
          </p>

          <h2 style={h2Style}>9. Limitation of liability</h2>
          <p style={pStyle}>
            To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or for lost profits or data. Our aggregate liability arising out of or
            related to the Service will not exceed the amounts you paid to us for the Service in the three (3) months
            preceding the claim.
          </p>

          <h2 style={h2Style}>10. Indemnification</h2>
          <p style={pStyle}>
            You will indemnify and hold us harmless from claims arising out of your Customer Data, your use of the
            Service, or your violation of these Terms or applicable law (including communications/consent regulations).
          </p>

          <h2 style={h2Style}>11. Term &amp; termination</h2>
          <p style={pStyle}>
            These Terms apply while you use the Service. We may suspend or terminate access for breach, non-payment, or
            legal/security reasons. You may stop using the Service at any time. Provisions that by their nature should
            survive (e.g., IP, disclaimers, liability, indemnity) will survive termination.
          </p>

          <h2 style={h2Style}>12. Governing law</h2>
          <p style={pStyle}>
            These Terms are governed by the laws of India, and the courts at Hyderabad, India will have exclusive
            jurisdiction, subject to applicable law.
          </p>

          <h2 style={h2Style}>13. Changes</h2>
          <p style={pStyle}>
            We may update these Terms; we will post the updated version here with a revised effective date. Continued
            use after changes constitutes acceptance.
          </p>

          <h2 style={h2Style}>14. Contact</h2>
          <p style={pStyle}>
            Gyanmai Pvt Ltd<br />
            T-Hub, Hyderabad, India<br />
            Email: <a href="mailto:legal@gyanmai.com" style={linkStyle}>legal@gyanmai.com</a>
          </p>

          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 36 }}>
            See also our <Link to="/privacy" style={linkStyle}>Privacy Policy</Link>.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 24, opacity: 0.7 }}>
            © 2026 Gyanmai Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
