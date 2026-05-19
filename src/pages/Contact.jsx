import { useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['Teacher', 'School Principal / Academic Head', 'School Founder / Owner', 'Parent', 'Student', 'Policy Maker / Government Official', 'Researcher / EdTech Professional', 'Other'];

const SHEETS_ENDPOINT = import.meta.env.VITE_SHEETS_ENDPOINT;

export default function Contact() {
  const [form, setForm] = useState({ name: '', role: '', school: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please email murali@gyanmai.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ paddingTop: 80 }}>
      <section style={{ padding: '60px 40px 80px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>Get in touch</span>
            <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1px', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: 16 }}>
              Let's build something for your school
            </h1>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28 }}>
              A 30-minute walkthrough, personalised for your school. We'll show you what Gyanmai looks like in your specific context.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '📍', label: 'T-Hub, Hyderabad, India' },
                { icon: '✉️', label: 'murali@gyanmai.com · lalith@gyanmai.com' },
                { icon: '📱', label: '+91 99892 25566' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 16 }}>{item.icon}</span>
                  <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, padding: '20px', borderRadius: 14, background: 'var(--bg-card)', boxShadow: 'var(--shadow-card)' }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>What to expect</p>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We respond within 24 hours. The demo is a 30-minute walkthrough tailored to your school's curriculum, class size, and current assessment methods. No generic slides.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            {submitted ? (
              <div className="card" style={{ padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#2DC4A220', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12L10 17L19 7" stroke="#2DC4A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>Thanks — we'll be in touch</h2>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>We'll reach out within 24 hours to schedule your walkthrough.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card" style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { name: 'name', label: 'Full Name', type: 'text', required: true },
                  { name: 'school', label: 'School / Institution', type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: false },
                ].map((field) => (
                  <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>
                      {field.label}{field.required && <span style={{ color: 'var(--accent)' }}> *</span>}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={form[field.name]}
                      onChange={handleChange}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 10,
                        border: '1px solid var(--border-strong)',
                        fontSize: 14,
                        fontFamily: 'var(--font-body)',
                        color: 'var(--text-primary)',
                        background: 'var(--bg-base)',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-strong)'}
                    />
                  </div>
                ))}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Your Role <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <select
                    name="role"
                    required
                    value={form.role}
                    onChange={handleChange}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 10,
                      border: '1px solid var(--border-strong)',
                      fontSize: 14,
                      fontFamily: 'var(--font-body)',
                      color: form.role ? 'var(--text-primary)' : 'var(--text-muted)',
                      background: 'var(--bg-base)',
                      outline: 'none',
                    }}
                  >
                    <option value="">Select your role</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>Message (optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your school, class size, or what you're looking for..."
                    style={{
                      padding: '10px 14px',
                      borderRadius: 10,
                      border: '1px solid var(--border-strong)',
                      fontSize: 14,
                      fontFamily: 'var(--font-body)',
                      color: 'var(--text-primary)',
                      background: 'var(--bg-base)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {error && (
                  <p style={{ fontSize: 13, color: '#c0392b', margin: 0 }}>{error}</p>
                )}
                <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: 4, justifyContent: 'center', opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}>
                  {submitting ? 'Sending…' : 'Book My Demo'}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
