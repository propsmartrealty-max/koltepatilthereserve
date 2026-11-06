"use client";

import { motion } from "framer-motion";

export default function LuxuryTicker() {
  const highlights = [
    "21.03-Acre Master Sanctuary",
    "MahaRERA PM1261012600748",
    "19,750 Sq.Ft. Multilevel Clubhouse",
    "84 × 27 Ft. Resort Lap Pool",
    "Mutha River Promenade",
    "NDA Hill Panoramic Vistas",
    "Full Aluform Monolithic Structure",
    "3.05 m Slab-to-Slab Heights",
    "Adjoining Upcoming Pune Ring Road",
    "By Kolte-Patil Developers Ltd"
  ];

  return (
    <div className="w-full bg-[#081E13] py-5 border-y border-[#D4AF37]/20 overflow-hidden relative z-20 flex shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <motion.div
        animate={{ x: [0, -1400] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        className="flex whitespace-nowrap items-center gap-10 px-4"
      >
        {[...highlights, ...highlights, ...highlights].map((word, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-serif text-sm md:text-base tracking-[0.22em] uppercase text-white/90 font-semibold">
              {word}
            </span>
            <span className="text-[#D4AF37] text-xs font-bold">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
