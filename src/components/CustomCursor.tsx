import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const x = useSpring(-100, springConfig);
  const y = useSpring(-100, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const customTarget = target.closest('[data-cursor]') as HTMLElement | null;
      const clickableTarget = target.closest('a, button, input, textarea, select, [role="button"]');

      if (customTarget) {
        setCursorLabel(customTarget.getAttribute('data-cursor') || '');
        setIsPointer(true);
      } else if (clickableTarget) {
        setCursorLabel('');
        setIsPointer(true);
      } else {
        setCursorLabel('');
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, x, y]);

  if (!isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden lg:flex items-center justify-center"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: cursorLabel ? 76 : isPointer ? 38 : 22,
          height: cursorLabel ? 76 : isPointer ? 38 : 22,
          backgroundColor: cursorLabel
            ? 'rgba(74, 47, 39, 0.92)'
            : isPointer
            ? 'rgba(201, 139, 75, 0.16)'
            : 'rgba(201, 139, 75, 0)',
          borderColor: cursorLabel
            ? 'rgba(247, 240, 230, 0.4)'
            : 'rgba(118, 85, 72, 0.48)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="rounded-full border border-dashed flex items-center justify-center backdrop-blur-[1px]"
      >
        {cursorLabel ? (
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-cream px-1 text-center leading-tight">
            {cursorLabel}
          </span>
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-honey/80" />
        )}
      </motion.div>
    </motion.div>
  );
};
