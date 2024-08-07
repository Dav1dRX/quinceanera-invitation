import React from 'react';

const FloralDecoration = React.memo(({ className }) => (
  <svg className={`absolute ${className}`} width="100" height="100" viewBox="0 0 100 100">
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow)">
      <path d="M50 10 C60 30 80 30 90 50 C80 70 60 70 50 90 C40 70 20 70 10 50 C20 30 40 30 50 10Z" fill="url(#floralGradient)" opacity="0.7" />
      <path d="M50 20 C55 30 70 30 80 50 C70 70 55 70 50 80 C45 70 30 70 20 50 C30 30 45 30 50 20Z" fill="url(#floralGradient)" opacity="0.5" />
      <circle cx="50" cy="50" r="5" fill="#C0C0C0" />
    </g>
  </svg>
));

export default FloralDecoration;