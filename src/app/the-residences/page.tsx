"use client";

import RevealFooter from "@/components/layout/RevealFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function TheResidences() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const floorplans = [
    { type: "Vyana 2 BHK Riverside Residence", size: "791 sq.ft. (Carpet Area)", price: "Enquire for Pricing" },
    { type: "Vyana 3 BHK Luxury Residence", size: "1,016 sq.ft. (Carpet Area)", price: "Enquire for Pricing" }
  ];

  return (
    <div className="relative bg-slate-950 text-slate-100 selection:bg-[#d4af37] selection:text-white">
      {/* Cinematic Hero */}
      <div className="h-[80vh] w-full relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl border-b border-[#d4af37]/20 bg-[#05140D]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image priority 
            src="/images/gallery/vyana-towers.jpg"
            alt="The Residences Hero at The Reserve"
            fill sizes="100vw" className="object-cover opacity-50 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 mt-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-8 block font-bold"
          >
            2 & 3 BHK Luxury Apartments Pune
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-[8rem] leading-none mb-12 text-slate-100 uppercase tracking-tight"
          >
            Residences.
          </motion.h1>
        </div>
      </div>

      <main className="relative z-10 bg-slate-950 text-slate-100 min-h-screen py-32">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                Premium 2 & 3 BHK <br/>
                <span className="italic text-[#d4af37]">Flats for Sale Pune.</span>
              </h2>
              <p className="font-sans text-slate-400 font-light leading-relaxed mb-6">
                Every luxury residence at Kolte Patil The Reserve is a testament to meticulous planning and flawless execution. Expansive living areas seamlessly transition into private terraces, offering panoramic views of the Mutha River and NDA hills, setting the standard for premium residential projects in Pune.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative h-[60vh] rounded-[3rem] overflow-hidden border border-[#d4af37]/20 shadow-2xl bg-[#05140D]"
            >
              <Image 
                src="/images/gallery/interior-deck.jpg"
                alt="Signature Living Room & Deck"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-80"
              />
            </motion.div>
          </div>

          {/* Floorplan Viewer Aesthetic */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="bg-slate-900/50 rounded-[3rem] border border-[#d4af37]/20 p-8 md:p-16 mb-40"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#d4af37]/20 pb-8">
              <div>
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">Availability</span>
                <h2 className="font-serif text-4xl text-slate-100">Vyana Floor Plans</h2>
              </div>
              <a href="/floor-plans" className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37] border border-[#d4af37] px-6 py-3 hover:bg-[#d4af37] hover:text-slate-950 transition-colors mt-8 md:mt-0 font-bold rounded-full">
                View Full Room Dimensions →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6 p-4">
                  <Image src="/images/floor-plans/vyana-3bhk-floorplan.png" alt="3 BHK Blueprint" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-2" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Vyana 3 BHK (1,016 Sq.Ft.)</h3>
                <p className="text-white/60 text-xs font-light mb-4">Towers T5, T6, T7 | 3.05 m Slab-to-Slab Height</p>
                <a href="/floor-plans" className="text-xs uppercase tracking-widest text-[#d4af37] font-bold hover:text-white transition-colors">
                  Explore 3 BHK Specifications →
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6 p-4">
                  <Image src="/images/floor-plans/vyana-2bhk-floorplan.png" alt="2 BHK Blueprint" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-2" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Vyana 2 BHK (791 Sq.Ft.)</h3>
                <p className="text-white/60 text-xs font-light mb-4">Towers T5, T6, T7 | Full Aluform Monolithic Structure</p>
                <a href="/floor-plans" className="text-xs uppercase tracking-widest text-[#d4af37] font-bold hover:text-white transition-colors">
                  Explore 2 BHK Specifications →
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
