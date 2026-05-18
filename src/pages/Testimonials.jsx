import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['Teachers', 'Students', 'Parents'];

/* ── Placeholder testimonials — Rohan to fill in ── */
const testimonials = {
  Teachers: [],
  Students: [],
  Parents: [],
};

function EmptySlot() {
  return (
    <div style={{
      minHeight: 200,
      borderRadius: 20,
      border: '2px dashed var(--border-strong)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'var(--text-muted)',
      padding: 32,
    }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="1" y="1" width="30" height="30" rx="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
        <path d="M16 10V22M10 16H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <p style={{ fontSize: 13, fontWeight: 500 }}>Testimonial content to be added</p>
      <p style={{ fontSize: 11 }}>Drop video link or quote here</p>
    </div>
  );
}

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('Teachers');

  return (
    <main style={{ paddingTop: 80 }}>
      <section className="px-5 md:px-10 py-12 md:py-[60px] pb-16 md:pb-20" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>What they say</span>
          <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 44px)', fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--text-primary)', marginBottom: 12 }}>
            Success Stories
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
            Real teachers, students, and parents on what Gyanmai changed.
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 32, justifyContent: 'center' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                border: 'none',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                background: activeTab === tab ? 'var(--text-primary)' : 'var(--bg-card)',
                color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
                transition: 'all 0.2s',
                boxShadow: activeTab === tab ? 'none' : 'var(--shadow-card)',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content grid — empty slots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <EmptySlot key={i} />
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 24 }}>
          Content coming soon — testimonials from gyanscan.com will be added here.
        </p>
      </section>
    </main>
  );
}
