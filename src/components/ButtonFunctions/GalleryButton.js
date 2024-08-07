import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryFunction = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/Music/gallery1.jpg',
    '/Music/gallery2.jpg',
    '/Music/gallery3.jpg',
    // Añade más imágenes según sea necesario
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <button onClick={() => setShowGallery(true)}>
        {/* El contenido del botón se maneja en ButtonWithAnimation */}
      </button>
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowGallery(false)}
          >
            <div className="bg-white p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
              <img src={images[currentImage]} alt="Gallery" className="w-64 h-64 object-cover rounded-lg" />
              <div className="flex justify-between mt-2">
                <button onClick={prevImage} className="bg-purple-500 text-white px-4 py-2 rounded-lg">Anterior</button>
                <button onClick={nextImage} className="bg-purple-500 text-white px-4 py-2 rounded-lg">Siguiente</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryFunction;