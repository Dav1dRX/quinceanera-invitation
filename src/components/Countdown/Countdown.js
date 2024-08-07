import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NeonSparkle from '../CustomSparkle/CustomSparkle';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2024-09-14") - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          días: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          min: Math.floor((difference / 1000 / 60) % 60),
          seg: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-purple-100 rounded-lg shadow-md p-4 mb-8 relative overflow-hidden"
    >
      {[...Array(15)].map((_, i) => (
        <NeonSparkle
          key={i}
          size={25}
          color="#E0E0E0"
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 2 + 1}s infinite`
          }}
        />
      ))}
      <div className="grid grid-cols-4 gap-2 relative z-10">
        {Object.entries(timeLeft).map(([interval, value]) => (
          <div key={interval} className="bg-white p-2 rounded-lg shadow text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600">{value}</div>
            <div className="text-xs sm:text-sm text-purple-400 capitalize">{interval}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Countdown;