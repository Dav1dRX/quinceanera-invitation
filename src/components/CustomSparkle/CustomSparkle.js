import React from 'react';
import { motion } from 'framer-motion';

const NeonSparkle = ({ size, color }) => {
  const generatePosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        zIndex: 10,
      }}
      initial={{ scale: 0, rotate: 0, ...generatePosition() }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 90, 180],
        opacity: [1, 1, 0],
        ...generatePosition(),
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
    >
      <path
        d="M80 0L88.2439 71.7561L160 80L88.2439 88.2439L80 160L71.7561 88.2439L0 80L71.7561 71.7561L80 0Z"
        fill="#E0E0E0"
        stroke="#8B5CF6"
        strokeWidth="4"
        filter="url(#neon)"
      />
      <defs>
        <filter id="neon" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </motion.svg>
  );
};

export default NeonSparkle;