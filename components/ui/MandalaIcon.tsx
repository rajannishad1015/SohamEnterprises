import React from 'react';

export const MandalaIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" strokeWidth="1" />
    <circle cx="50" cy="50" r="35" strokeWidth="0.5" strokeDasharray="2 2" />
    <path d="M50 5 L55 20 L50 25 L45 20 Z" fill="currentColor" opacity="0.2" />
    <path d="M50 95 L55 80 L50 75 L45 80 Z" fill="currentColor" opacity="0.2" />
    <path d="M95 50 L80 55 L75 50 L80 45 Z" fill="currentColor" opacity="0.2" />
    <path d="M5 50 L20 55 L25 50 L20 45 Z" fill="currentColor" opacity="0.2" />
    <circle cx="50" cy="50" r="10" strokeWidth="1" />
  </svg>
);
