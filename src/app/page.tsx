"use client";

import Image from "next/image";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import FluidBackground from "@/components/ui/FluidBackground";
import LuxuryTicker from "@/components/home/LuxuryTicker";
import MasterplanNavigator from "@/components/home/MasterplanNavigator";
import CompetitorComparison from "@/components/home/CompetitorComparison";

export default function Home() {
  const { setCursorType } = useCursor();
  
  return (
    <div className="relative bg-white text-[#0B2B1B] selection:bg-[#d4af37] selection:text-white overflow-hidden">
      <FluidBackground />

      {/* 1. BEST-IN-CLASS CINEMATIC HERO (100dvh) */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl z-20 bg-[#0B2B1B]">
        <div className="absolute inset-0 z-0">
          <Image
            priority
            src="/images/gallery/vyana-towers.jpg"
            alt="The Reserve by Kolte Patil Vyana Towers Sinhgad Road Pune"
            fill
            sizes="100vw"
            className="object-cover object-center transform scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B1B]/70 via-[#0B2B1B]/40 to-[#0B2B1B]/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B2B1B]/50 to-[#0B2B1B]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="px-5 py-2 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
              21.03-Acre Master Riverside Sanctuary
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl mb-4 tracking-tight">
              The Reserve <span className="text-[#d4af37] font-light">by Kolte Patil</span>
            </h1>
            <p className="font-sans text-xs md:text-sm text-white/90 tracking-[0.25em] uppercase max-w-3xl mx-auto mb-8 drop-shadow-md">
              Vyana Phase 1: 2 & 3 BHK Riverside Residences on Sinhgad Road, Pune • MahaRERA PM1261012600748
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <Link href="/floor-plans" className="px-8 py-4 bg-[#d4af37] text-[#0B2B1B] font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full shadow-2xl hover:bg-white transition-colors block">
                  Explore Floor Plans
                </Link>
              </MagneticButton>
              <Link href="/master-layout" className="px-8 py-4 bg-white/10 text-white border border-white/20 font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full backdrop-blur-md hover:bg-white hover:text-slate-950 transition-colors">
                Master Layout
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] mb-3 text-white/70">Scroll to Explore</span>
          <div className="w-[1px] h-10 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-[#d4af37]"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* 2. NON-PINNED STORYTELLING */}
      <section className="relative z-20 py-24 md:py-36 bg-white/95 backdrop-blur-3xl -mt-10 rounded-t-[3rem] md:rounded-t-[5rem] border-t border-white/20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#0B2B1B] leading-[1.1] mb-8"
          >
            Where Nature&apos;s Calm Meets <br/>
            Pune&apos;s Next <span className="text-[#d4af37] italic">Growth Epicenter</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0B2B1B]/70 font-light text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Spread across 21.03 acres along the tranquil Mutha River at Vadgaon Khurd on Sinhgad Road, The Reserve by Kolte-Patil brings together river-facing greens, scenic NDA hill views, 19,750 sq.ft. contemporary clubhouse, and thoughtful 2 & 3 BHK residences — adjoining the upcoming Pune Ring Road.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <Link href="/overview" className="border-b border-[#0B2B1B] text-[#0B2B1B] uppercase tracking-[0.2em] text-xs font-bold pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
              Discover The Vision →
            </Link>
            <Link href="/gallery" className="border-b border-[#0B2B1B]/30 text-[#0B2B1B]/60 uppercase tracking-[0.2em] text-xs font-bold pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors">
              View Project Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTINUOUS MARQUEE FLOW */}
      <div className="relative z-30 transform -rotate-1 scale-110 shadow-xl overflow-hidden py-8 bg-[#0B2B1B] border-y border-[#d4af37]/20">
        <LuxuryTicker />
      </div>

      {/* 2.5 INTERACTIVE FLOOR PLANS SHOWCASE */}
      <section className="relative z-30 py-28 bg-[#0B2B1B] overflow-hidden -mt-6 rounded-[3rem]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="mb-14 text-center max-w-3xl">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-3">
              Architectural Blueprints
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Vyana 2 & 3 BHK <span className="italic font-light text-[#d4af37]">Floor Plans.</span>
            </h2>
            <p className="mt-4 text-white/70 font-sans text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Engineered with full Aluform monolithic concrete, 3.05 m slab heights, zero dead space, and panoramic river/hill viewing decks.
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 3 BHK Floor Plan Card */}
            <div className="bg-[#05140D] border border-white/10 hover:border-[#d4af37]/40 rounded-3xl p-8 transition-colors shadow-2xl flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6 flex items-center justify-center p-4">
                  <Image 
                    src="/images/floor-plans/vyana-3bhk-floorplan.png" 
                    alt="Vyana 3 BHK Floor Plan The Reserve" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-white">Vyana 3 BHK Luxury Residence</h3>
                  <span className="text-xs font-bold text-[#0B2B1B] bg-[#d4af37] px-3 py-1 rounded-full uppercase">1,016 Sq.Ft.</span>
                </div>
                <p className="text-white/60 text-xs font-light mb-4">Towers T5, T6, T7 | G+21 Floors | 3.05 m Slab Height</p>
                <ul className="space-y-2 text-white/70 text-xs font-light">
                  <li className="flex items-center gap-2"><span>✓</span> 21&apos;0&quot; x 11&apos;6&quot; Living-Dining with River Deck</li>
                  <li className="flex items-center gap-2"><span>✓</span> 13&apos;6&quot; x 11&apos;0&quot; Master Suite with Wardrobe Niche</li>
                  <li className="flex items-center gap-2"><span>✓</span> Kajaria Vitrified Flooring & Jaquar Sanitaryware</li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <Link href="/floor-plans" className="text-xs uppercase tracking-widest text-[#d4af37] font-bold hover:text-white transition-colors">
                  View Room Dimensions →
                </Link>
                <Link href="/contact" className="px-5 py-2.5 bg-[#d4af37] text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                  Enquire
                </Link>
              </div>
            </div>

            {/* 2 BHK Floor Plan Card */}
            <div className="bg-[#05140D] border border-white/10 hover:border-[#d4af37]/40 rounded-3xl p-8 transition-colors shadow-2xl flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6 flex items-center justify-center p-4">
                  <Image 
                    src="/images/floor-plans/vyana-2bhk-floorplan.png" 
                    alt="Vyana 2 BHK Floor Plan The Reserve" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-white">Vyana 2 BHK Riverside Residence</h3>
                  <span className="text-xs font-bold text-[#0B2B1B] bg-[#d4af37] px-3 py-1 rounded-full uppercase">791 Sq.Ft.</span>
                </div>
                <p className="text-white/60 text-xs font-light mb-4">Towers T5, T6, T7 | G+21 Floors | Full Aluform Structure</p>
                <ul className="space-y-2 text-white/70 text-xs font-light">
                  <li className="flex items-center gap-2"><span>✓</span> 18&apos;0&quot; x 11&apos;0&quot; Living Room with Cross-Ventilation</li>
                  <li className="flex items-center gap-2"><span>✓</span> 12&apos;6&quot; x 10&apos;6&quot; Master Bedroom with Attached Bath</li>
                  <li className="flex items-center gap-2"><span>✓</span> Dedicated Dry Utility & Private Viewing Deck</li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                <Link href="/floor-plans" className="text-xs uppercase tracking-widest text-[#d4af37] font-bold hover:text-white transition-colors">
                  View Room Dimensions →
                </Link>
                <Link href="/contact" className="px-5 py-2.5 bg-[#d4af37] text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                  Enquire
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto shadow-[0_0_100px_rgba(212,175,55,0.15)] rounded-[3rem]">
            <MasterplanNavigator />
          </div>
        </div>
      </section>

      {/* 2.7 CURATED PROJECT GALLERY SHOWCASE */}
      <section className="relative z-30 py-24 bg-[#05140D] border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <div>
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-2">
                Visual Experience
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                Project Gallery Showcase
              </h2>
            </div>
            <Link href="/gallery" className="mt-4 md:mt-0 text-xs uppercase tracking-widest text-[#d4af37] font-bold hover:text-white transition-colors">
              View All 11 High-Res Photos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/images/gallery/clubhouse-step-seating.jpg", title: "19,750 Sq.Ft. Clubhouse", desc: "Step seating architecture & resident lounges" },
              { src: "/images/gallery/resort-swimming-pool.jpg", title: "84x27 ft. Resort Pool", desc: "Olympic-inspired lap pool & kids splash pool" },
              { src: "/images/gallery/interior-deck.jpg", title: "Signature Living Room", desc: "Expansive deck facing Mutha River & NDA Hills" },
              { src: "/images/gallery/master-bedroom.jpg", title: "Master Bedroom Suite", desc: "Luxury private space with designer en-suite" },
              { src: "/images/gallery/central-boulevard.jpg", title: "Central Boulevard", desc: "Arterial landscaped green spine" },
              { src: "/images/gallery/sports-turf.jpg", title: "Active Sports Turf", desc: "Championship pickleball court & fitness arena" },
            ].map((item, idx) => (
              <div key={idx} className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-[#0B2B1B]">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="font-serif text-lg text-white font-medium">{item.title}</h4>
                  <p className="text-xs text-white/60 font-light mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIMPLIFIED BENTO BOX GRID */}
      <section className="relative z-40 bg-[#05140D] py-28 md:py-36 rounded-[3rem] -mt-6 border-t border-white/10 shadow-2xl text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-14 md:mb-20 max-w-2xl">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-3">The Privileges</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              An ecosystem of <br/><span className="italic text-[#d4af37]">unrivaled luxury.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
            {/* Bento Block 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-xl bg-[#0B2B1B] border border-white/10"
              onMouseEnter={() => setCursorType('explore')} onMouseLeave={() => setCursorType('default')}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image src="/images/gallery/clubhouse-step-seating.jpg" alt="19,750 Sq.Ft. Clubhouse at The Reserve by Kolte Patil" fill sizes="(max-width: 1200px) 100vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-[#0B2B1B]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 w-full">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#d4af37] block mb-2 font-bold">Centerpiece</span>
                <h3 className="font-serif text-3xl md:text-5xl text-white mb-3">19,750 sq.ft. Clubhouse</h3>
                <p className="font-sans text-white/70 max-w-sm font-light leading-relaxed hidden md:block">Contemporary step seating architecture, 84x27 ft. resort swimming pool, and dedicated wellness pavilions.</p>
              </div>
            </motion.div>

            {/* Bento Block 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-1 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-xl bg-[#0B2B1B]/80 border border-white/10 flex flex-col p-8 justify-between"
            >
              <div className="relative z-10">
                <span className="font-serif text-6xl text-[#d4af37] block mb-2 drop-shadow-sm">21.03</span>
                <h3 className="font-serif text-2xl text-white mb-3">Acres Master Development</h3>
                <p className="font-sans text-white/70 font-light leading-relaxed text-sm">River-facing greens, scenic NDA hill views, and central landscaped boulevard at Vadgaon Khurd, Sinhgad Road.</p>
              </div>
              <div className="relative h-48 md:h-64 w-full rounded-2xl overflow-hidden mt-6 shadow-inner border border-white/10">
                <Image src="/images/overview/21-acres-masterplan.jpg" alt="21.03 Acres Landscape at The Reserve Kolte Patil" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
              </div>
            </motion.div>

            {/* Bento Block 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-xl bg-[#0B2B1B] border border-white/10 p-8 flex flex-col justify-end"
            >
              <div className="absolute inset-0 w-full h-full z-0">
                  <Image src="/images/gallery/vyana-towers.jpg" alt="Vyana 2 and 3 BHK Apartments Sinhgad Road" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />
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
              className="md:col-span-2 md:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-xl bg-[#0B2B1B]/80 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
            >
              <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-4">
                <h3 className="font-serif text-3xl text-white mb-3">Aluform Construction</h3>
                <p className="font-sans text-white/70 text-sm font-light leading-relaxed">Full aluform monolithic structure, 3.05 m slab height, Kajaria glazed vitrified tiles, and Jaquar fittings.</p>
              </div>
              <div className="relative h-40 md:h-full w-full md:w-1/2 rounded-[1.5rem] overflow-hidden shadow-inner border border-white/10">
                <Image src="/images/gallery/master-bedroom.jpg" alt="Master Bedroom at The Reserve Kolte Patil" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SINHGAD ROAD COMPETITOR COMPARISON BENCHMARK */}
      <section className="relative z-30 py-24 bg-[#0B2B1B] -mt-6 rounded-[3rem] border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <CompetitorComparison />
        </div>
      </section>

    </div>
  );
}
