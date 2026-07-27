import React from 'react';

const BrandName = ({ className }) => (
  <span className={className}>
    VESC
    <svg viewBox="0 0 100 100" className="brand-bean" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="45" ry="30" transform="rotate(-64 50 50)" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
      <path d="M 30 88 C 48 80, 38 65, 50 50 C 62 35, 52 20, 70 12" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
    </svg>
    FF PEJATEN
  </span>
);
export default BrandName;
