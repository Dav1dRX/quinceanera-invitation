import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BouncingArrow = () => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="text-center mt-8 flex flex-col items-center"
    >
      <ChevronUp size={32} className="text-purple-500" />
      <span className="text-sm text-purple-500 mt-1">Swipe Up</span>
    </motion.div>
  );
};

export default BouncingArrow;