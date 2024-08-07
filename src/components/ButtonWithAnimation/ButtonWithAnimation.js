import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const ButtonWithAnimation = React.memo(({ icon, label, onClick }) => (
  <motion.div
    className="flex flex-col items-center"
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    <button className="bg-purple-500 text-white p-3 rounded-full mb-1" onClick={onClick}>
      <Icon icon={icon} className="w-6 h-6" />
    </button>
    <span className="text-xs text-purple-700">{label}</span>
  </motion.div>
));

export default ButtonWithAnimation;