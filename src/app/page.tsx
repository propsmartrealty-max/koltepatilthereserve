"use client";

import Image from "next/image";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import FluidBackground from "@/components/ui/FluidBackground";
import LuxuryTicker from "@/components/home/LuxuryTicker";
import DayNightSlider from "@/components/ui/DayNightSlider";

export default function Home() {
  const { setCursorType } = useCursor();
  
  return (
    <div className="relative bg-white text-[#0B2B1B] selection:bg-[#d4af37] selection:text-white overflow-hidden">
      <FluidBackground />

      {/* 1. STANDARD STREAMLINED HERO (100dvh) */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl z-20 bg-[#0B2B1B]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://www.koltepatil.com/assets/uploads/gallery/178478725029496962.jpg"
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://player.vimeo.com/external/394627252.hd.mp4?s=d00e57262ba627d3568853c89657f8cfec47fb21&profile_id=174" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl mb-4 tracking-tight">
              The Reserve <span className="text-[#d4af37] font-light">by Kolte Patil</span>
            </h1>
            <p className="font-sans text-xs md:text-sm text-white/90 tracking-[0.3em] uppercase max-w-2xl mx-auto mb-12 drop-shadow-md">
              2 & 3 BHK Riverside Residences on Sinhgad Road, Pune • MahaRERA PM1261012600748
            </p>
            <MagneticButton>
              <Link href="/contact" className="px-10 py-5 bg-[#d4af37] text-[#0B2B1B] font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full shadow-2xl hover:bg-white transition-colors block">
                Enquire Now
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] mb-4 text-white/70">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-white"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* 2. NON-PINNED STORYTELLING */}
      <section className="relative z-20 py-24 md:py-40 bg-white/95 backdrop-blur-3xl -mt-10 rounded-t-[3rem] md:rounded-t-[5rem] border-t border-white/20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#0B2B1B] leading-[1.1] mb-10"
          >
            Where Nature&apos;s Charm Meets <br/>
            Pune&apos;s Next <span className="text-[#d4af37] italic">Chapter of Growth</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0B2B1B]/70 font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Spread across 21.03 acres of master development in a rare riverside setting at Vadgaon Khurd on Sinhgad Road, The Reserve by Kolte-Patil brings together river-facing greens, scenic NDA hill views and a central landscaped boulevard — minutes from Pune Ring Road and proposed metro connectivity.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <Link href="/overview" className="border-b border-[#0B2B1B] text-[#0B2B1B] uppercase tracking-[0.2em] text-xs font-bold pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
              Discover The Vision
            </Link>
            <Link href="/amenities" className="border-b border-[#0B2B1B]/30 text-[#0B2B1B]/60 uppercase tracking-[0.2em] text-xs font-bold pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
              View Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* CONTINUOUS MARQUEE FLOW */}
      <div className="relative z-30 transform -rotate-1 scale-110 shadow-xl overflow-hidden py-8 bg-[#0B2B1B] border-y border-[#d4af37]/20">
        <LuxuryTicker />
      </div>

      {/* 2.5 MASTER LAYOUT & FLOOR PLANS SHOWCASE */}
      <section className="relative z-30 py-32 bg-[#0B2B1B] overflow-hidden -mt-6 rounded-[3rem]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="mb-16 text-center max-w-3xl">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">
              Master Layout & Floor Plans
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              21.03 Acres of Riverside Master Development & <span className="italic font-light text-[#d4af37]">Thoughtful 2 & 3 BHK Layouts.</span>
            </h2>
            <p className="mt-6 text-white/70 font-sans text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Meticulously planned by Kolte-Patil to maximize natural cross-ventilation, expansive riverfront views, and supreme privacy across 21-storey aluform monolithic towers.
            </p>
          </div>
          
          <div className="w-full max-w-6xl mx-auto shadow-[0_0_100px_rgba(212,175,55,0.15)] rounded-[3rem]">
            <DayNightSlider />
          </div>

          {/* Detailed Master Layout & Floor Plans Quick Spec Grid */}
          <div className="w-full max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#05140D] border border-white/10 p-8 md:p-10 rounded-3xl">
              <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-3">01 // Master Layout Highlights</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">21.03-Acre Masterplan Blueprint</h3>
              <ul className="space-y-3 text-white/70 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Riverfront Green Buffer:</strong> Linear park and landscaped promenade running parallel to the river.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Central Landscaped Boulevard:</strong> Grand arterial vehicular spine ensuring zero-congestion access.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>19,750 Sq.Ft. Clubhouse & 84x27 ft. Pool:</strong> Centrally positioned with amphitheater step seating.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Multi-Level EV Parking:</strong> 2 Basements (B1+B2) + Stilt with 30% EV-charging provision.</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/master-layout" className="text-[#d4af37] text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
                  Explore 3D Digital Twin Masterplan →
                </Link>
              </div>
            </div>

            <div className="bg-[#05140D] border border-white/10 p-8 md:p-10 rounded-3xl">
              <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-3">02 // Floor Plan Engineering</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Vyana 2 & 3 BHK Floorplans</h3>
              <ul className="space-y-3 text-white/70 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Vyana 2 BHK (791 sq.ft. Carpet):</strong> Dedicated utility balcony, zero dead-space layout, cross ventilation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Vyana 3 BHK (1,016 sq.ft. Carpet):</strong> Expansive living-dining hall, master bedroom suite, panoramic river deck.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>3.05 m Slab-to-Slab Height:</strong> ~2.9 m clear ceiling height for superior thermal comfort and airiness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Full Aluform Monolithic Build:</strong> Seamless earthquake-resistant concrete with Kajaria glazed tiles.</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/floor-plans" className="text-[#d4af37] text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
                  View High-Res Floor Plans & Dimensions →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SIMPLIFIED BENTO BOX GRID (NO PARALLAX) */}
      <section className="relative z-40 bg-[#FAFAFA] py-32 md:py-48 rounded-[3rem] -mt-6 shadow-2xl">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 max-w-2xl">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">The Privileges</span>
            <h2 className="font-serif text-5xl md:text-7xl text-[#0B2B1B] leading-tight">
              An ecosystem of <br/><span className="italic">unrivaled luxury.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            {/* Bento Block 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-lg bg-white"
              onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image src="https://www.koltepatil.com/assets/uploads/gallery/1785322110367031201.jpg" alt="19,750 Sq.Ft. Clubhouse at The Reserve by Kolte Patil" fill sizes="(max-width: 1200px) 100vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/90 via-[#0B2B1B]/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 w-full">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 block mb-2 font-bold">Centerpiece</span>
                <h3 className="font-serif text-3xl md:text-5xl text-white mb-3">19,750 sq.ft. Clubhouse</h3>
                <p className="font-sans text-white/80 max-w-sm font-light leading-relaxed hidden md:block">Contemporary step seating architecture, 84x27 ft. resort swimming pool, and dedicated wellness pavilions.</p>
              </div>
            </motion.div>

            {/* Bento Block 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-1 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-lg bg-gradient-to-br from-white to-[#F5F5F5] flex flex-col p-8 justify-between border border-[#0B2B1B]/5"
            >
              <div className="relative z-10">
                <span className="font-serif text-6xl text-[#d4af37] block mb-2 drop-shadow-sm">21.03</span>
                <h3 className="font-serif text-2xl text-[#0B2B1B] mb-3">Acres Master Development</h3>
                <p className="font-sans text-[#0B2B1B]/70 font-light leading-relaxed text-sm">River-facing greens, scenic NDA hill views, and central landscaped boulevard at Vadgaon Khurd, Sinhgad Road.</p>
              </div>
              <div className="relative h-48 md:h-64 w-full rounded-2xl overflow-hidden mt-6 shadow-inner">
                <Image src="https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg" alt="21.03 Acres Landscape at The Reserve Kolte Patil" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
              </div>
            </motion.div>

            {/* Bento Block 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-lg bg-[#0B2B1B] p-8 flex flex-col justify-end"
            >
              <div className="absolute inset-0 w-full h-full z-0">
                  <Image src="https://www.koltepatil.com/assets/uploads/gallery/17853225611596383832.jpg" alt="Vyana 2 and 3 BHK Apartments Sinhgad Road" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000 mix-blend-luminosity" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] to-transparent"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl text-white mb-2">Vyana Phase 1</h3>
                <p className="font-sans text-white/70 text-sm font-light">791 & 1,016 sq.ft. 2 & 3 BHK residences.</p>
              </div>
            </motion.div>

            {/* Bento Block 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-2 md:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-lg bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 border border-[#0B2B1B]/5"
            >
              <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-4">
                <h3 className="font-serif text-3xl text-[#0B2B1B] mb-3">Aluform Construction</h3>
                <p className="font-sans text-[#0B2B1B]/70 text-sm font-light leading-relaxed">Full aluform monolithic structure, 3.05 m slab height, Kajaria glazed vitrified tiles, and Jaquar fittings.</p>
              </div>
              <div className="relative h-40 md:h-full w-full md:w-1/2 rounded-[1.5rem] overflow-hidden shadow-inner">
                <Image src="https://www.koltepatil.com/assets/uploads/gallery/1785322623788205512.jpg" alt="Master Bedroom at The Reserve Kolte Patil" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
