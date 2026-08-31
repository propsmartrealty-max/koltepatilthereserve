"use client";

export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[999] opacity-[0.02] transform-gpu"
      style={{
        backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}
