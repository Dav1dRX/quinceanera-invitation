import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CalendarFunction = ({ eventDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const renderCalendar = () => {
    const date = new Date(eventDate);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const day = date.getDate();

    return (
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-center font-bold text-purple-800">{`${month} ${year}`}</h3>
        <div className="grid grid-cols-7 gap-1 mt-2">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((d, i) => (
            <div key={i} className="text-center font-bold text-purple-600">{d}</div>
          ))}
          {[...Array(35)].map((_, i) => (
            <div 
              key={i} 
              className={`text-center ${i + 1 === day ? 'bg-purple-500 text-white rounded-full' : ''}`}
            >
              {i + 1 <= 31 ? i + 1 : ''}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <button onClick={() => setShowCalendar(true)}>
        {/* El contenido del botón se maneja en ButtonWithAnimation */}
      </button>
      <AnimatePresence>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowCalendar(false)}
          >
            {renderCalendar()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CalendarFunction;