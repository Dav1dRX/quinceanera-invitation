import React from 'react';
import { motion } from 'framer-motion';

const GalleryPopup = React.memo(({ images, currentIndex, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <motion.div 
        className="bg-white p-6 rounded-lg max-w-2xl w-full "
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative mb-4 ">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Imagen de galería ${currentIndex + 1}`}
            className="w-full h-64 object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 border-4 border-purple-300 rounded-lg pointer-events-none" />
        </div>
        <button 
          onClick={onClose}
          className="bg-purple-500 text-white px-4 py-2 rounded w-full hover:bg-purple-600 transition-colors "
        >
          Cerrar
        </button>
      </motion.div>
    </div>
  );
});

export default GalleryPopup;