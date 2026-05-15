import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Outer ring springs slightly behind cursor
  const springCfg = { stiffness: 260, damping: 26, mass: 0.5 };
  const ringX = useSpring(rawX, springCfg);
  const ringY = useSpring(rawY, springCfg);

  useEffect(() => {
    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      const el = e.target;
      const interactive = el.closest('a, button, [role="button"], input, textarea, select, [tabindex]');
      setHovering(!!interactive);
    };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener('mousemove', onMove,  { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
    };
  }, [rawX, rawY]);

  const BASE = {
    position: 'fixed',
    top: 0, left: 0,
    translateX: '-50%',
    translateY: '-50%',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 99999,
  };

  return (
    <>
      {/* Outer ring — springs */}
      <motion.div
        style={{ ...BASE, x: ringX, y: ringY, border: '1.5px solid', mixBlendMode: 'multiply' }}
        animate={{
          width:  hovering ? 38 : 22,
          height: hovering ? 38 : 22,
          borderColor: hovering ? '#FFB400' : 'rgba(27,67,50,0.5)',
          backgroundColor: hovering ? 'rgba(255,179,0,0.1)' : 'transparent',
          scale: clicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22, mass: 0.4 }}
      />

      {/* Inner dot — instant follow */}
      <motion.div
        style={{ ...BASE, x: rawX, y: rawY }}
        animate={{
          width:  hovering ? 6 : 4,
          height: hovering ? 6 : 4,
          backgroundColor: hovering ? '#FFB400' : '#1B4332',
          scale: clicking ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      />
    </>
  );
}
