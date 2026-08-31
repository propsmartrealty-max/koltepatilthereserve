"use client";

import { useEffect, useState } from "react";

export default function FluidBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full h-full transform-gpu contain-strict">
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #0B2B1B 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      <div 
        className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #05140D 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
