import { useState, useEffect, useCallback } from 'react';

export const useButtonFunctions = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
  ];

  const handleAsistencia = () => {
    const phoneNumber = '593963436440'; // Remove the '+' at the beginning
    const message = 'Hola!, confirmo mi asistencia a la fiesta de XV años.♥';
    
    const whatsappUrl = encodeURIComponent(`https://wa.me/${phoneNumber}?text=${message}`);
    
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.location.href = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }, 300);
  };

  const handleGaleria = () => {
    setShowGallery(true);
  };

  const handleCalendario = () => {
    setShowCalendar(true);
  };

  const handleUbicacion = () => {
    window.open('https://maps.app.goo.gl/zjuUvvBZeZMYmXuc8', '_blank');
  };

  const closeGallery = useCallback(() => {
    setShowGallery(false);
  }, []);

  const closeCalendar = useCallback(() => {
    setShowCalendar(false);
  }, []);

  useEffect(() => {
    let interval;
    if (showGallery) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
      }, 3000); // Cambia la imagen cada 3 segundos
    }
    return () => clearInterval(interval);
  }, [showGallery, galleryImages.length]);

  return {
    handleAsistencia,
    handleGaleria,
    handleCalendario,
    handleUbicacion,
    showGallery,
    showCalendar,
    closeGallery,
    closeCalendar,
    currentImageIndex,
    galleryImages,
  };
};