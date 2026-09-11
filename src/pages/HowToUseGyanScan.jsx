import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import gyanScanLogo from '../assets/logos/GyanScan-Logo.png';

const COLOR = '#2DC4A2';

// ponytail: every `draft: true` step below is placeholder copy awaiting the real
// portal/app flow. Replace the text and drop the flag — the chip disappears on its own.
const tracks = [
  {
    id: 'portal',
    label: 'GyanScan Portal',
    tagline: 'Before the class — set up the exam on the web',
    steps: [
      {
        title: 'Sign in to the portal',
        summary: 'Open the GyanScan portal and sign in with the credentials issued to your school.',
        detail: [
          'Portal URL to confirm.',
          'Roles and what each one can do (teacher, coordinator, admin) to confirm.',
          'Password reset and first-login flow to confirm.',
        ],
        draft: true,
      },
      {
        title: 'Select the class and subject',
        summary: 'Choose the class, section and subject the exam belongs to. The roster loaded for that class determines whose sheets get generated.',
        detail: [
          'Where the class roster comes from — bulk import, SIS sync, or manual entry — to confirm.',
          'What happens when a student is added after an exam is created — to confirm.',
        ],
        draft: true,
      },
      {
        title: 'Create a new exam',
        summary: 'Give the exam a name, pick the date, and set the number of questions and the marking scheme.',
        detail: [
          'Exact fields on the create-exam form to confirm.',
          'Supported question counts, and whether negative marking is configurable — to confirm.',
          'Whether an exam can be duplicated from a previous one — to confirm.',
        ],
        draft: true,
      },
      {
        title: 'Assign questions',
        summary: 'Pull questions from GyanBank or add your own, then map each one to its chapter and subtopic so the diagnostics land on the right concept.',
        detail: [
          'GyanBank filters available at assignment time (board, grade, chapter, difficulty) to confirm.',
          'Whether custom questions can be uploaded, and in what format — to confirm.',
          'How the answer key is set for custom questions — to confirm.',
        ],
        draft: true,
      },
      {
        title: 'Generate and print the answer sheets',
        summary: 'Generate the sheets for the class and print them. Each sheet carries the marker pattern GyanScan reads during the scan.',
        detail: [
          'Print requirements — paper size, colour vs. mono, minimum print quality — to confirm.',
          'Whether sheets are per-student or generic — to confirm.',
          'Reprint procedure for a damaged or lost sheet — to confirm.',
        ],
        draft: true,
      },
    ],
  },
  {
    id: 'app',
    label: 'GyanScan Mobile App',
    tagline: 'In the classroom — conduct the test and scan',
    steps: [
      {
        title: 'Install the app and sign in',
        summary: 'Install GyanScan on the teaching phone and sign in with the same credentials used on the portal.',
        detail: [
          'Store listings (Android and iOS) and minimum OS version to confirm.',
          'Whether sign-in is shared with the portal or separate — to confirm.',
        ],
        draft: true,
      },
      {
        title: 'Open the exam on the phone',
        summary: 'Exams created in the portal appear in the app under the matching class. Select the one being conducted.',
        detail: [
          'How long an exam stays available in the app — to confirm.',
          'Whether the exam has to be downloaded before going offline — to confirm.',
        ],
        draft: true,
      },
      {
        title: 'Hand out the sheets and conduct the test',
        summary: 'Distribute the printed answer sheets and run the test as usual. Students mark their answers on the sheet — no student devices, no logins.',
        detail: [
          'Instructions students need before their first test — to confirm.',
          'How a student corrects a wrongly marked answer — to confirm.',
        ],
        draft: true,
      },
      {
        title: 'Scan the class',
        summary: 'Hold the phone so the whole class is in frame and scan. GyanScan reads every sheet in one pass.',
        detail: [
          'Framing, distance and lighting guidance to confirm.',
          'What the app shows when a sheet is unreadable, and how to re-scan it — to confirm.',
          'Whether scanning works fully offline, and when results sync — to confirm.',
        ],
        draft: true,
      },
      {
        title: 'Review results and act',
        summary: 'Scores and the misconception breakdown are available immediately — on the phone for a quick read, and in GyanAnalytix for the full class picture.',
        detail: [
          'What the app shows versus what only the portal shows — to confirm.',
          'How results flow into GyanAnalytix and GyanGuru — to confirm.',
        ],
        draft: true,
      },
    ],
  },
];

function Step({ step, index, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'flex-start', gap: 16,
          padding: '22px 0', textAlign: 'left',
        }}
      >
        <span style={{
          flexShrink: 0, width: 30, height: 30, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: isOpen ? COLOR : 'var(--bg-card)',
          border: `1px solid ${isOpen ? COLOR : 'var(--border-strong)'}`,
          color: isOpen ? '#fff' : 'var(--text-muted)',
          fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-display)',
          transition: 'background 0.2s, color 0.2s',
        }}>
          {index + 1}
        </span>

        <span style={{ flex: 1 }}>
          <span style={{
            display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
            fontSize: 'clamp(15px, 1.5vw, 17px)', fontWeight: 600,
            color: 'var(--text-primary)', fontFamily: 'var(--font-display)', lineHeight: 1.4,
          }}>
            {step.title}
            {step.draft && (
              <span style={{
                fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#B07A00', background: 'rgba(255, 180, 0, 0.14)',
                border: '1px solid rgba(255, 180, 0, 0.35)',
                borderRadius: 999, padding: '2px 8px', whiteSpace: 'nowrap',
              }}>
                Draft copy
              </span>
            )}
          </span>
          <span style={{
            display: 'block', marginTop: 6, fontSize: 14, fontWeight: 300,
            color: 'var(--text-secondary)', lineHeight: 1.7,
          }}>
            {step.summary}
          </span>
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 26, height: 26, borderRadius: '50%', flexShrink: 0, marginTop: 2,
            background: isOpen ? COLOR : 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            transition: 'background 0.2s',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke={isOpen ? '#fff' : 'var(--text-muted)'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <ul style={{ margin: 0, padding: '0 0 22px 46px', listStyle: 'none' }}>
              {step.detail.map((d, i) => (
                <li key={i} style={{
                  display: 'flex', gap: 10, alignItems: 'flex-start',
                  fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300,
                  marginBottom: 6,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: COLOR, flexShrink: 0, marginTop: 9 }} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HowToUseGyanScan() {
  const [activeTrack, setActiveTrack] = useState('portal');
  const [openKeys, setOpenKeys] = useState({ 'portal-0': true });

  const track = tracks.find((t) => t.id === activeTrack);
  const toggle = (key) => setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 56px)', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <img src={gyanScanLogo} alt="GyanScan" style={{ height: 44, width: 'auto', margin: '0 auto 20px', display: 'block' }} />
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>Step-by-step guide</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800,
            letterSpacing: '-0.03em', color: 'var(--text-primary)',
            lineHeight: 1.08, marginBottom: 16,
          }}>
            How to use GyanScan.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.5vw, 17px)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 32px' }}>
            Two tracks, one workflow. The portal handles setup — creating the exam and assigning
            questions. The mobile app handles the classroom — conducting the test and scanning the
            answers.
          </p>
        </motion.div>
      </section>

      {/* Track switcher */}
      <section style={{ padding: '0 clamp(24px, 5vw, 56px)', maxWidth: 860, margin: '0 auto' }}>
        <div style={{
          display: 'flex', gap: 6, padding: 5, borderRadius: 999,
          background: 'var(--bg-subtle)', border: '1px solid var(--border)',
          width: 'fit-content', margin: '0 auto 12px', maxWidth: '100%', flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {tracks.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTrack(t.id)}
              style={{
                padding: '9px 20px', borderRadius: 999, border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-display)',
                background: activeTrack === t.id ? COLOR : 'transparent',
                color: activeTrack === t.id ? '#fff' : 'var(--text-secondary)',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginBottom: 36 }}>
          {track.tagline}
        </p>
      </section>

      {/* Steps */}
      <section style={{ padding: '0 clamp(24px, 5vw, 56px) clamp(64px, 8vw, 96px)', maxWidth: 860, margin: '0 auto' }}>
        <motion.div
          key={track.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {track.steps.map((step, i) => (
            <Step
              key={`${track.id}-${i}`}
              step={step}
              index={i}
              isOpen={!!openKeys[`${track.id}-${i}`]}
              onToggle={() => toggle(`${track.id}-${i}`)}
            />
          ))}
        </motion.div>

        <div style={{ marginTop: 32, display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/products/gyanscan" style={{ fontSize: 14, fontWeight: 600, color: COLOR, textDecoration: 'none' }}>
            What GyanScan does →
          </Link>
          <Link to="/faq" style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Frequently asked questions →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)', padding: 'clamp(48px, 5vw, 72px) clamp(24px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 14 }}>
              Want a guided walkthrough?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28 }}>
              Our implementation team runs the first exam alongside your teachers — from creating it
              in the portal to scanning the class.
            </p>
            <Link to="/contact" className="btn-gold">Book a Walkthrough →</Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
