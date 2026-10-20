import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ReadingProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics for fluid movement while scrolling
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 sm:h-1.5 bg-stone-200/40 backdrop-blur-xs">
      <motion.div
        className="h-full bg-gradient-to-r from-emerald-800 via-emerald-600 to-amber-500 origin-left shadow-sm shadow-emerald-900/30"
        style={{ scaleX }}
      />
    </div>
  );
};
