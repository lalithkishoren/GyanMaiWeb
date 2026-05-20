import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VIDEOS = [
  { id: 'jp',  ytId: 'OYpRI31qrJg', isShort: false },
  { id: 't1',  ytId: '-PjTCR2_PqQ', isShort: false },
  { id: 't2',  ytId: 'P1o2gJgI_cE', isShort: false },
  { id: 't3',  ytId: 'ZY_ivMFExqg', isShort: false },
  { id: 't4',  ytId: 'S4q5Lce55R0', isShort: true  },
  { id: 't5',  ytId: 't8olxULMwZ4', isShort: true  },
  { id: 't6',  ytId: 'Yp-fHdzR1ZQ', isShort: true  },
  { id: 't7',  ytId: 'EEtAHW7wjNQ', isShort: true  },
];

function postToYT(iframe, func, args) {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: 'command', func, args: args ?? '' }),
    '*'
  );
}

/* ── Card ── */
function VideoCard({ video, onExpand, index }) {
  const iframeRef      = useRef(null);
  const playerReadyRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const [hovered,       setHovered]       = useState(false);
  const [iframeMounted, setIframeMounted] = useState(false);

  const thumb = `https://img.youtube.com/vi/${video.ytId}/hqdefault.jpg`;

  /* Once mounted, listen for player-ready so re-hovers can seek+play instantly */
  useEffect(() => {
    if (!iframeMounted) return;
    const handler = (e) => {
      if (e.source !== iframeRef.current?.contentWindow) return;
      try {
        const data = JSON.parse(e.data);
        if (data.event === 'onReady') {
          playerReadyRef.current = true;
          if (pendingPlayRef.current) {
            postToYT(iframeRef.current, 'seekTo', [0, true]);
            postToYT(iframeRef.current, 'playVideo');
            pendingPlayRef.current = false;
          }
        }
      } catch (_) {}
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [iframeMounted]);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    if (!iframeMounted) {
      /* First hover: mount iframe with autoplay=1 — browser allows this
         because the mount is triggered by a user gesture (mouseover). */
      setIframeMounted(true);
    } else if (playerReadyRef.current) {
      postToYT(iframeRef.current, 'seekTo', [0, true]);
      postToYT(iframeRef.current, 'playVideo');
    } else {
      pendingPlayRef.current = true;
    }
  }, [iframeMounted]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    pendingPlayRef.current = false;
    postToYT(iframeRef.current, 'pauseVideo');
  }, []);

  const handleClick = useCallback(() => {
    postToYT(iframeRef.current, 'pauseVideo');
    onExpand(video);
  }, [video, onExpand]);

  /* autoplay=1 so video starts as soon as the iframe mounts on first hover */
  const embedSrc =
    `https://www.youtube.com/embed/${video.ytId}` +
    `?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1` +
    `&enablejsapi=1&playsinline=1&loop=1&playlist=${video.ytId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        position: 'relative',
        aspectRatio: '9/16',
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#0a0a0a',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.55), 0 0 0 2px rgba(255,255,255,0.14)'
          : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hovered ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease',
      }}
    >
      {/* Thumbnail — instant */}
      <img
        src={thumb}
        alt=""
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease',
          opacity: hovered ? 0 : 1,
          zIndex: 1,
        }}
      />

      {/* Scrim */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.28)',
        transition: 'opacity 0.3s ease',
        opacity: hovered ? 0 : 1,
        zIndex: 2,
      }} />

      {/* Play button */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 3,
        opacity: hovered ? 0 : 1,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(6px)',
          border: '1.5px solid rgba(255,255,255,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      {/* YouTube iframe — mounted on first hover, kept alive for instant replays.
          pointer-events: none lets the card's onClick open the modal. */}
      {iframeMounted && (
        <iframe
          ref={iframeRef}
          src={embedSrc}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          style={{
            position: 'absolute',
            ...(video.isShort ? {
              inset: 0, width: '100%', height: '100%',
            } : {
              height: '100%',
              width: 'calc(100% * 256 / 81)',
              top: 0, left: '50%',
              transform: 'translateX(-50%)',
            }),
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 4,
            pointerEvents: 'none',
            border: 'none',
          }}
        />
      )}

      {/* Hover bottom pill */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 40%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        zIndex: 5,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 12,
        pointerEvents: 'none',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '4px 10px', borderRadius: 999,
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', fontSize: 11, fontWeight: 500,
          letterSpacing: '0.04em', alignSelf: 'flex-start',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z"/>
          </svg>
          Tap to watch
        </div>
      </div>
    </motion.div>
  );
}

/* ── Modal ── */
function VideoModal({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  /* Shorts → 9:16 modal, regular → 16:9 modal */
  const modalDimensions = video.isShort
    ? { height: 'min(90vh, 640px)', width: 'calc(min(90vh, 640px) * 9 / 16)' }
    : { width: 'min(85vw, 840px)', height: 'calc(min(85vw, 840px) * 9 / 16)' };

  const modalSrc =
    `https://www.youtube.com/embed/${video.ytId}` +
    `?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <motion.div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(14px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: 20,
      }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          ...modalDimensions,
          maxWidth: '95vw',
          maxHeight: '92vh',
          borderRadius: 20,
          overflow: 'hidden',
          background: '#000',
          boxShadow: '0 40px 120px rgba(0,0,0,0.85)',
        }}
      >
        <iframe
          src={modalSrc}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          frameBorder="0"
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 12, right: 12,
            width: 34, height: 34, borderRadius: '50%',
            border: 'none', cursor: 'pointer',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            color: '#fff', fontSize: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10,
          }}
        >✕</button>
      </motion.div>
    </motion.div>
  );
}

/* ── Page ── */
export default function Testimonials() {
  const [expanded, setExpanded] = useState(null);

  return (
    <main style={{ paddingTop: 80 }}>
      <section style={{ padding: '60px 32px 80px', maxWidth: 1200, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>
            What they say
          </span>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            color: 'var(--text-primary)',
            marginBottom: 14,
          }}>
            Success Stories
          </h1>
          <p style={{
            fontSize: 16,
            color: 'var(--text-secondary)',
            maxWidth: 440,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Real voices from teachers, students, and parents whose learning journey changed with GyanMai.
          </p>
        </motion.div>

        {/* 4 × 2 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} onExpand={setExpanded} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 36 }}
        >
          Hover to preview · Click to watch
        </motion.p>
      </section>

      <AnimatePresence>
        {expanded && (
          <VideoModal video={expanded} onClose={() => setExpanded(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
