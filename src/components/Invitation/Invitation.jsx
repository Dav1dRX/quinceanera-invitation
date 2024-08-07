import React, { useMemo, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons'; 
import { useButtonFunctions } from './buttonFunctions';
import ButtonWithAnimation from '../ButtonWithAnimation/ButtonWithAnimation';
import FloralDecoration from '../FloralDecoration/FloralDecoration';

// Lazy load heavy components
const CalendarPopup = lazy(() => import('../CalendarPopup/CalendarPopup'));
const GalleryPopup = lazy(() => import('../GalleryPopup/GalleryPopup'));
const AnimatedButterfly = lazy(() => import('../AnimatedButterfly/AnimatedButterfly'));
const FlyingButterfly = lazy(() => import('../FlyingButterfly/FlyingButterfly'));

const Invitation = () => {
  const {
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
  } = useButtonFunctions();

  const butterflyCount = useMemo(() => window.innerWidth < 768 ? 10 : 20, []);

  const butterflies = useMemo(() => (
    [...Array(butterflyCount)].map((_, index) => (
      <Suspense key={`butterfly-${index}`} fallback={null}>
        <AnimatedButterfly 
          src={`/Music/mari${index % 3 + 1}.webp`}
          style={{
            zIndex: 20,
            position: 'absolute',
          }}
        />
      </Suspense>
    ))
  ), [butterflyCount]);

  const flyingButterflies = useMemo(() => (
    [...Array(5)].map((_, index) => (
      <Suspense key={`flying-${index}`} fallback={null}>
        <FlyingButterfly />
      </Suspense>
    ))
  ), []);

  const backgroundStyle = useMemo(() => ({
    backgroundImage: "url('https://i.pinimg.com/736x/83/d5/01/83d501365ae1f36f99f31c51db3b0026.jpg')",
    mixBlendMode: "overlay"
  }), []);

  const contentStyle = useMemo(() => ({
    backgroundImage: "url('https://png.pngtree.com/background/20210715/original/pngtree-colorful-butterfly-light-effect-color-butterfly-background-picture-image_1329058.jpg')",
    backgroundBlendMode: "overlay",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  }), []);

  return (
    <div className="relative w-full min-h-screen bg-purple-10 p-1 overflow-hidden">
      {/* Background image over lilac color */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={backgroundStyle}
      ></div>

      <div className="relative w-full max-w-4xl mx-auto min-h-screen p-1 sm:p-1 flex items-center justify-center">
        <motion.div 
          className="relative w-full max-w-lg sm:max-w-xl md:max-w-1x1 lg:max-w-4xl rounded-lg overflow-hidden"
          animate={{
            boxShadow: [
              "0 0 10px rgba(139, 92, 246, 0.5)",
              "0 0 20px rgba(192, 192, 192, 0.5)",
              "0 0 10px rgba(139, 92, 246, 0.5)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Content container with background image */}
          <div 
            className="relative p-4 sm:p-8 bg-cover bg-center"
            style={contentStyle}
          >
            {/* Animated frame */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 150" preserveAspectRatio="none">
              <motion.path
                d="M5,5 L95,5 L95,145 L5,145 Z"
                stroke="url(#frameGradient)"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M2,2 Q50,15 98,2 Q98,75 98,148 Q50,135 2,148 Q2,75 2,2 Z"
                stroke="url(#floralGradient)"
                strokeWidth="0.3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              <defs>
                <motion.linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <motion.stop
                    stopColor="#8B5CF6"
                    animate={{ stopColor: ["#8B5CF6", "#C0C0C0", "#8B5CF6"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.stop
                    stopColor="#C0C0C0"
                    animate={{ stopColor: ["#C0C0C0", "#8B5CF6", "#C0C0C0"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.linearGradient>
                <linearGradient id="floralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D8B4FE" />
                  <stop offset="50%" stopColor="#C0C0C0" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
  
            {/* Floral decorations */}
            <FloralDecoration className="top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
            <FloralDecoration className="top-0 right-0 transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full">
              {[...Array(5)].map((_, i) => (
                <FloralDecoration key={i} className={`mx-2 transform ${i % 2 === 0 ? 'scale-75' : 'scale-100'}`} />
              ))}
            </div>
  {/* Shayri Maitte Vargas Pauta*/}
            {/* Bottom flowers */}
            <div className="absolute bottom-0 left-0 w-full z-10">
              <img 
                src="/Music/drop.webp" 
                alt="Bottom Flowers" 
                className="w-full"
                style={{ 
                  transform: 'translateY(29%)',
                  mixBlendMode: 'multiply',
                  opacity: 0.8
                }}
              />
            </div>
  
            {/* Content */}
            <div className="relative z-20 text-center w-full font-serif" style={{ zIndex: 18 }}>
              <Icon icon="game-icons:tiara" className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h1 className="text-4xl sm:text-5xl font-dancing-script text-purple-800 mb-2">Mis XV Años</h1>
              <h2 className="text-5xl sm:text-6xl font-great-vibes text-purple-900 mb-4"> mondongooooooooooooooooooo</h2>
              <p className="text-lg font-playfair text-gray-700 mb-4">
                El señor Tomás Vargas Sares y <br />
                la señora Verónica Pauta Izurieta <br />
                te invitan a celebrar la fiesta de su amada hija.
              </p>
              <p className="text-2xl text-purple-800 font-cormorant-garamond font-bold mb-6">
                Sábado, 148 de Septiembre, 2024<br /> 20:00
              </p>
              <div className="flex justify-between items-start mb-6">
                <div className="text-left">
                  <p className="text-xl text-purple-700 font-cormorant-garamond font-bold">LUGAR</p>
                  <p className="text-lg text-gray-700 font-playfair">Colegio de <br />Ingenieros Civiles<br />de El Oro<br />(CICO)</p>
                </div>
                <div className="text-right">
                  <p className="text-xl text-purple-700 font-cormorant-garamond font-bold">VESTIMENTA</p>
                  <div className="flex items-center justify-end">
                    <FontAwesomeIcon icon={faUserTie} className="w-6 h-6 text-purple-600 mr-2" />
                    <p className="text-lg text-gray-700 font-playfair">Formal</p>
                  </div>
                </div>
              </div>
  
              {/* Space for quinceañera image with buttons on the sides */}
              <div className="relative w-full h-64 my-6 flex items-center justify-center">
                {/* Left buttons */}
                <div className="absolute left-0 h-full flex flex-col justify-around z-30">
                  <ButtonWithAnimation icon="mdi:calendar" label="Calendario" onClick={handleCalendario} />
                  <ButtonWithAnimation icon="mdi:map-marker" label="Ubicación" onClick={handleUbicacion} />
                </div>
                
                {/* Space for image */}
                <div className="w-48 h-full">
                  <img src="Music/omg.webp" alt="Quinceañera" className="w-full h-full object-cover rounded-lg" />
                </div>
                
                {/* Right buttons */}
                <div className="absolute right-0 h-full flex flex-col justify-around z-30">
                  <ButtonWithAnimation icon="mdi:account" label="Asistencia" onClick={handleAsistencia} />
                  <ButtonWithAnimation icon="mdi:image" label="Galería" onClick={handleGaleria} />
                </div>
              </div>
            </div>

            {/* Container for butterflies */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: '100%', height: '100%', zIndex: 50 }}>
              {/* Flying butterflies */}
              {flyingButterflies}

              {/* Animated PNG butterflies */}
              {butterflies}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popups */}
      <Suspense fallback={<div>Loading...</div>}>
        {showCalendar && <CalendarPopup onClose={closeCalendar} />}
        {showGallery && (
          <GalleryPopup 
            images={galleryImages}
            currentIndex={currentImageIndex}
            onClose={closeGallery}
          />
        )}
      </Suspense>
    </div>
  );
};

export default React.memo(Invitation);