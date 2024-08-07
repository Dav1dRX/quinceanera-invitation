import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const SlidingDate = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div 
      style={{ y, opacity }}
      className="text-center py-10"
    >
      <h2 className="text-4xl font-script text-purple-800">22 de Julio, 2024</h2>
    </motion.div>
  );
};

export default SlidingDate;