import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import NeonSparkle from '../CustomSparkle/CustomSparkle';

const WelcomeMessage = () => {
  const jumpIn = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1
      }
    }
  };

  const heartBeat = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  return (
    <motion.div
      className="text-center mb-8 relative"
      initial="hidden"
      animate="visible"
      variants={jumpIn}
    >
      {[...Array(15)].map((_, i) => (
        <NeonSparkle key={i} size={30} color="#E0E0E0" />
      ))}
      <motion.div animate={heartBeat}>
        <Heart className="text-purple-500 mx-auto mb-2" size={32} />
      </motion.div>
      <h1 className="text-4xl font-script text-purple-900 font-bold my-2">QUEREMOS</h1>
      <h1 className="text-4xl font-script text-purple-900 font-bold my-2">CELEBRARLO</h1>
      <h1 className="text-4xl font-script text-purple-900 font-bold my-2">CONTIGO!</h1>
    </motion.div>
  );
};

export default WelcomeMessage;