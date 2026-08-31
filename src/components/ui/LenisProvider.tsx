"use client";

import { ReactLenis } from 'lenis/react';
import React from 'react';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.16, 
        duration: 0.7, 
        smoothWheel: true, 
        wheelMultiplier: 1.15, 
        touchMultiplier: 1.5,
        syncTouch: false,
        autoResize: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
