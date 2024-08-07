import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedButterfly = React.memo(({ src, style }) => {
  const controls = useAnimation();
  const butterflyRef = useRef(null);
  const positionRef = useRef({ x: Math.random() * 100, y: Math.random() * 100 });

  const initialStyle = useMemo(() => ({
    ...style,
    width: `${Math.random() * 30 + 20}px`,
    height: 'auto',
    left: `${positionRef.current.x}%`,
    top: `${positionRef.current.y}%`,
  }), [style]);

  useEffect(() => {
    let isActive = true;
    const animate = async () => {
      while (isActive) {
        await controls.start({
          x: positionRef.current.x + (Math.random() - 0.5) * 20,
          y: positionRef.current.y + (Math.random() - 0.5) * 20,
          transition: { duration: 5, ease: "easeInOut" }
        });
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
      }
    };
    animate();
    return () => {
      isActive = false;
    };
  }, [controls]);

  return (
    <motion.img
      ref={butterflyRef}
      src={src}
      alt="Butterfly"
      className="absolute pointer-events-none"
      style={initialStyle}
      animate={controls}
    />
  );
});

export default AnimatedButterfly;