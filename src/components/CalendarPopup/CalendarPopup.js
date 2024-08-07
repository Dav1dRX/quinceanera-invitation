import React from 'react';
import { motion } from 'framer-motion';

const CalendarPopup = React.memo(({ onClose }) => {
  const eventDate = new Date('2024-09-14');
  const month = eventDate.getMonth();
  const year = eventDate.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <motion.div 
        className="bg-white p-6 rounded-lg max-w-md w-full"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-great-vibes text-purple-800 mb-4 text-center">Septiembre 2024</h2>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map(day => (
            <div key={day} className="text-center font-bold">{day}</div>
          ))}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map(day => (
            <motion.div 
              key={day}
              className={`text-center p-2 rounded-full ${day === 14 ? 'bg-purple-500 text-white' : ''}`}
              whileHover={{ scale: 1.1 }}
            >
              {day}
            </motion.div>
          ))}
        </div>
        <p className="text-center text-purple-800 mb-4">
          ¡Tu fiesta es el 14 de Septiembre!
        </p>
        <button 
          onClick={onClose}
          className="bg-purple-500 text-white px-4 py-2 rounded w-full hover:bg-purple-600 transition-colors"
        >
          Cerrar
        </button>
      </motion.div>
    </div>
  );
});

export default CalendarPopup;