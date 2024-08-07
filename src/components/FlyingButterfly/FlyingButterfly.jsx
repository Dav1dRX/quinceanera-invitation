import React, { useCallback, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FlyingButterfly = React.memo(() => {
  const controls = useAnimation();
  const butterflyRef = useRef(null);

  const animate = useCallback(async () => {
    if (!butterflyRef.current) return;
    const parent = butterflyRef.current.parentElement;
    const maxX = parent.clientWidth - butterflyRef.current.clientWidth;
    const maxY = parent.clientHeight - butterflyRef.current.clientHeight;

    while (true) {
      await controls.start({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
        transition: { duration: 5, ease: "easeInOut" }
      });
    }
  }, [controls]);

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      animate();
    }
    return () => {
      isActive = false;
    };
  }, [animate]);

  return (
    <motion.div
      ref={butterflyRef}
      className="absolute w-8 h-8"
      animate={controls}
      initial={{ opacity: 0.7, x: Math.random() * 100 + '%', y: Math.random() * 100 + '%' }}
    >
      <motion.div
        className="absolute w-4 h-5 bg-gradient-to-br from-purple-500 to-gray-300 rounded-full"
        style={{ left: 0, transformOrigin: 'right center' }}
        animate={{ rotateY: [0, 60, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.2 }}
      />
      <motion.div
        className="absolute w-4 h-5 bg-gradient-to-br from-purple-500 to-gray-300 rounded-full"
        style={{ right: 0, transformOrigin: 'left center' }}
        animate={{ rotateY: [0, -60, 0] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.2 }}
      />
    </motion.div>
  );
});

export default FlyingButterfly;