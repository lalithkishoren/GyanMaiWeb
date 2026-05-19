import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqSections = [
  {
    label: 'Getting Started',
    color: '#FFB400',
    items: [
      {
        q: 'What grades and boards does Gyanmai support?',
        a: 'Gyanmai supports CBSE, ICSE, Cambridge, and major State Boards across all core subjects — Mathematics, Sciences, Social Studies, English, and Hindi — from Grade 1 through Grade 12.',
      },
      {
        q: 'Can we start with just one product?',
        a: 'Absolutely. Each Gyanmai product delivers standalone value. Most schools start with GyanScan for formative capture and add GyanAnalytix for class-wide analytics. The products are designed to integrate seamlessly as your school scales.',
      },
      {
        q: 'How long does onboarding take?',
        a: 'A typical school is live with GyanScan within one week of signing. GyanBank and GyanAnalytix follow in the second week. We provide on-site and virtual training, and a dedicated implementation partner for the first month.',
      },
    ],
  },
  {
    label: 'Products',
    color: '#2DC4A2',
    items: [
      {
        q: 'How fast does GyanScan process a full class?',
        a: "GyanScan scans 40 students in under 8 seconds using our patent-filed marker-cube system. No student devices, no app installs, no connectivity required. Just the teacher's phone.",
      },
      {
        q: 'How is GyanGuru different from generic AI tutors like ChatGPT?',
        a: "GyanGuru starts from your student's actual error data captured by GyanScan — not a blank slate. It knows the exact misconception the student carries before the first message, making every session targeted rather than generic. It also has three modes: Guru (fix mistakes), Prashna (scaffold from known to unknown), and Chunauty (Socratic deep challenge).",
      },
      {
        q: 'What question formats does GyanTest support?',
        a: 'GyanTest supports six formats: OMR, MCQ, Fill in the Blanks, Match the Following, Very Short Answer Questions (VSAQ), Short Answer Questions (SAQ), and Long Answer Questions (LAQ) — all with instant automated marking.',
      },
      {
        q: 'How many questions are in GyanBank?',
        a: 'GyanBank currently has 30,000+ questions across CBSE, ICSE, Cambridge and State Board curricula. Every question is built with diagnostic-distractor design — wrong answers are crafted to surface specific misconceptions, not just test recall.',
      },
    ],
  },
  {
    label: 'Data & Compliance',
    color: '#4F7EF5',
    items: [
      {
        q: 'Is student data safe and compliant?',
        a: 'Yes. Gyanmai is GDPR compliant, DPDP Act (India) 2023 aligned, and uses end-to-end encryption for all student data at rest and in transit. We never use student data for advertising or share it with third parties.',
      },
      {
        q: 'Does Gyanmai comply with NEP 2020?',
        a: "Yes. NEP 2020 explicitly mandates formative, competency-based, and technology-enabled assessment reform. Gyanmai's ACATT framework is purpose-built to execute continuous holistic assessment at classroom speed — giving schools a verifiable compliance record.",
      },
    ],
  },
  {
    label: 'For School Management',
    color: '#E85C7A',
    items: [
      {
        q: 'What reports does school management get?',
        a: 'School management gets a multi-class, multi-teacher quality dashboard showing curriculum compliance, concept coverage rates, teacher effectiveness per subtopic, and learning quality trends over time. All reports are NEP 2020 aligned.',
      },
      {
        q: 'Can Gyanmai support multiple branches?',
        a: 'Yes. The platform is built for multi-site school groups. Each branch has its own data environment while management gets a consolidated view across all campuses.',
      },
      {
        q: 'How does Gyanmai support fee-tier justification?',
        a: "GyanAnalytix gives school management the learning quality data to show prospective parents exactly what outcomes their fees fund. It's diagnostic evidence, not just a facilities tour.",
      },
    ],
  },
];

function FAQItem({ item, isOpen, onToggle, accentColor }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px 0', gap: 16, textAlign: 'left',
        }}
      >
        <span style={{
          fontSize: 'clamp(14px, 1.4vw, 16px)', fontWeight: 600,
          color: 'var(--text-primary)', fontFamily: 'var(--font-display)', lineHeight: 1.4,
        }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
            background: isOpen ? accentColor : 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            transition: 'background 0.2s',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke={isOpen ? '#fff' : 'var(--text-muted)'} strokeWidth="1.5" strokeLinecap="round"/>
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
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300, paddingBottom: 20 }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openKeys, setOpenKeys] = useState({});

  const toggle = (sectionIdx, itemIdx) => {
    const key = `${sectionIdx}-${itemIdx}`;
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 56px)', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>Frequently Asked Questions</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)',
            lineHeight: 1.08, marginBottom: 16,
          }}>
            Questions, answered.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto 32px' }}>
            Everything you need to know about Gyanmai, our products, and how we work with schools.
          </p>
          <Link to="/contact" className="btn-gold">Still have questions? Talk to us →</Link>
        </motion.div>
      </section>

      {/* FAQ sections */}
      <section style={{ padding: '0 clamp(24px, 5vw, 56px) clamp(64px, 8vw, 96px)', maxWidth: 860, margin: '0 auto' }}>
        {faqSections.map((section, si) => (
          <motion.div
            key={section.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: si * 0.06 }}
            style={{ marginBottom: 56 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: section.color, flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: section.color }}>
                {section.label}
              </span>
            </div>
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {section.items.map((item, ii) => (
                <FAQItem
                  key={ii}
                  item={item}
                  isOpen={!!openKeys[`${si}-${ii}`]}
                  onToggle={() => toggle(si, ii)}
                  accentColor={section.color}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)', padding: 'clamp(48px, 5vw, 72px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 14 }}>
              Ready to see it in action?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28 }}>
              Book a 30-minute demo and we'll walk you through the complete ACATT framework with your school's specific context in mind.
            </p>
            <Link to="/contact" className="btn-gold">Book a Platform Demo →</Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
