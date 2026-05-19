import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMobile from '../../hooks/useMobile';

const faqs = [
  {
    q: 'What grades and boards does Gyanmai support?',
    a: 'Gyanmai supports CBSE, ICSE, Cambridge, and major State Boards across all core subjects — Mathematics, Sciences, Social Studies, English, and Hindi — from Grade 1 through Grade 12.',
  },
  {
    q: 'How fast does GyanScan process a full class?',
    a: 'GyanScan scans 40 students in under 8 seconds using our patent-filed marker-cube system. No student devices, no app installs, no connectivity required. Just the teacher\'s phone.',
  },
  {
    q: 'How is GyanGuru different from generic AI tutors like ChatGPT?',
    a: 'GyanGuru starts from your student\'s actual error data captured by GyanScan — not a blank slate. It knows the exact misconception the student carries before the first message, making every session targeted rather than generic. It also has three modes: Guru (fix mistakes), Prashna (scaffold from known to unknown), and Chunauty (Socratic deep challenge).',
  },
  {
    q: 'Can we start with just one product?',
    a: 'Absolutely. Each Gyanmai product delivers standalone value. Most schools start with GyanScan for formative capture and add GyanAnalytix for class-wide analytics. The products are designed to integrate seamlessly as your school scales.',
  },
  {
    q: 'Is student data safe and compliant?',
    a: 'Yes. Gyanmai is GDPR compliant, DPDP Act (India) 2023 aligned, and uses end-to-end encryption for all student data at rest and in transit. We never use student data for advertising or share it with third parties.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'A typical school is live with GyanScan within one week of signing. GyanBank and GyanAnalytix follow in the second week. We provide on-site and virtual training, and a dedicated implementation partner for the first month.',
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      style={{
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '22px 0', gap: 16, textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: 'clamp(15px, 1.5vw, 17px)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-display)',
          lineHeight: 1.35,
        }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
            background: isOpen ? 'var(--gold)' : 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            transition: 'background 0.2s',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke={isOpen ? '#1A1200' : 'var(--text-muted)'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{
              fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75,
              fontWeight: 300, paddingBottom: 22,
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const isMobile = useMobile();

  return (
    <section style={{
      background: 'var(--bg-subtle)',
      borderTop: '1px solid var(--border)',
      padding: isMobile ? '64px 24px' : '96px 32px',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
            FAQ
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            lineHeight: 1.08,
          }}>
            Common questions
          </h2>
        </motion.div>

        <div>
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
