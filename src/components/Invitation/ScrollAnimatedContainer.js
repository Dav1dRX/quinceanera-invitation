import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScroll } from 'framer-motion';
import Invitation from './Invitation';

const ScrollAnimatedContainer = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const progress = Math.min(latest / window.innerHeight, 1);
      setScrollProgress(progress);
      controls.set({ opacity: progress, y: (1 - progress) * 100 });
    });

    return () => unsubscribe();
  }, [scrollY, controls]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {scrollProgress === 0 && (
        <motion.div
          initial={{ opacity: 0.5, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-purple-600 text-2xl font-bold absolute bottom-10"
        >
          Swipe Up
        </motion.div>
      )}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        className="w-full"
      >
        <Invitation />
      </motion.div>
    </div>
  );
};

export default ScrollAnimatedContainer;