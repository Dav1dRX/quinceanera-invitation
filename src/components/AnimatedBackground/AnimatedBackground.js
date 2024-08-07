import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Butterfly = ({ delay }) => {
  const butterflyRef = useRef(null);

  useEffect(() => {
    const butterfly = butterflyRef.current;
    const maxX = window.innerWidth - 30;
    const maxY = window.innerHeight - 30;
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    function animate() {
      x += dx;
      y += dy;
      if (x < 0 || x > maxX) dx = -dx;
      if (y < 0 || y > maxY) dy = -dy;
      butterfly.style.left = `${x}px`;
      butterfly.style.top = `${y}px`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <motion.div
      ref={butterflyRef}
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0.5, 0] }}
      transition={{
        duration: 15,
        times: [0, 0.1, 0.9, 1],
        repeat: Infinity,
        delay: delay,
      }}
      style={{ pointerEvents: 'none' }}
    >
      <div className="relative w-10 h-8">
        <div className="absolute w-5 h-7 bg-purple-300 opacity-50 rounded-full left-wing" 
             style={{ left: '0', transform: 'rotate(-30deg) skew(15deg)', transformOrigin: 'right center', animation: 'flutter 0.2s infinite alternate' }}></div>
        <div className="absolute w-5 h-7 bg-purple-300 opacity-50 rounded-full right-wing" 
             style={{ right: '0', transform: 'rotate(30deg) skew(-15deg)', transformOrigin: 'left center', animation: 'flutter 0.2s infinite alternate-reverse' }}></div>
      </div>
    </motion.div>
  );
};

const Flower = ({ delay }) => (
  <motion.svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    className="absolute"
    initial={{ opacity: 0, scale: 0, x: Math.random() * window.innerWidth, y: -100 }}
    animate={{
      opacity: [0, 0.5, 0.5, 0],
      scale: [0, 1, 1, 0],
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 100,
    }}
    transition={{
      duration: 20,
      times: [0, 0.1, 0.9, 1],
      repeat: Infinity,
      delay: delay,
    }}
    style={{ pointerEvents: 'none' }}
  >
    <path
      d="M15 3C13 3 11 5 11 7C11 9 13 11 15 11C17 11 19 9 19 7C19 5 17 3 15 3Z"
      fill="rgba(236, 72, 153, 0.3)"
      stroke="rgba(236, 72, 153, 0.5)"
      strokeWidth="0.5"
    />
    <path
      d="M15 19C13 19 11 21 11 23C11 25 13 27 15 27C17 27 19 25 19 23C19 21 17 19 15 19Z"
      fill="rgba(236, 72, 153, 0.3)"
      stroke="rgba(236, 72, 153, 0.5)"
      strokeWidth="0.5"
    />
    <path
      d="M7 11C5 11 3 13 3 15C3 17 5 19 7 19C9 19 11 17 11 15C11 13 9 11 7 11Z"
      fill="rgba(236, 72, 153, 0.3)"
      stroke="rgba(236, 72, 153, 0.5)"
      strokeWidth="0.5"
    />
    <path
      d="M23 11C21 11 19 13 19 15C19 17 21 19 23 19C25 19 27 17 27 15C27 13 25 11 23 11Z"
      fill="rgba(236, 72, 153, 0.3)"
      stroke="rgba(236, 72, 153, 0.5)"
      strokeWidth="0.5"
    />
    <circle
      cx="15"
      cy="15"
      r="3"
      fill="rgba(236, 72, 153, 0.5)"
      stroke="rgba(236, 72, 153, 0.7)"
      strokeWidth="0.5"
    />
  </motion.svg>
);

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <Butterfly key={`butterfly-${i}`} delay={i * 2} />
      ))}
      {[...Array(10)].map((_, i) => (
        <Flower key={`flower-${i}`} delay={i * 3} />
      ))}
    </div>
  );
};

export default AnimatedBackground;