import React from 'react';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-500 to-purple-200 py-10 px-4 overflow-x-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://png.pngtree.com/background/20210715/original/pngtree-waste-pink-butterfly-light-effect-colorful-butterfly-background-picture-image_1329048.jpg')",
          mixBlendMode: "overlay"
        }}
      ></div>
      <AnimatedBackground />
      <div className="max-w-md mx-auto relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
