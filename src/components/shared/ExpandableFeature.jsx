import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpandableFeature({ title, summary, detail, accentColor }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="liquid-glass"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
      style={{
        cursor: 'pointer',
        borderRadius: 6,
        borderLeft: `2px solid ${open ? accentColor : 'var(--border-strong)'}`,
        padding: '20px 22px',
        boxShadow: open
          ? `0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9), inset 3px 0 0 ${accentColor}`
          : undefined,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
              marginBottom: 5,
              lineHeight: 1.25,
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}>
            {summary}
          </p>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          style={{ flexShrink: 0, marginTop: 2, color: open ? accentColor : 'var(--text-muted)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontSize: 13.5,
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginTop: 14,
                paddingTop: 14,
                borderTop: '1px solid var(--border)',
                fontWeight: 300,
              }}
            >
              {detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
