'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';
import RevealFooter from '@/components/layout/RevealFooter';

const schema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  "name": "The Reserve by Kolte Patil",
  "image": "https://thereserve.koltepatil.digital/images/overview/21-acres-masterplan.jpg",
  "description": "Ultra Luxury 2 & 3 BHK Riverside Apartments on Sinhgad Road, Vadgaon Khurd, Pune. MahaRERA PM1261012600748.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411041",
    "addressCountry": "IN"
  },
  "priceRange": "₹ 85 Lakhs - ₹ 1.65 Cr"
};

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <Script
        id="overview-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
         {/* 1. NATURAL HERO SECTION */}
      <section className="relative h-[80dvh] w-full flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] bg-[#05140D] shadow-2xl z-20 pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/images/gallery/vyana-towers.jpg" alt="The Reserve Hero" fill sizes="100vw" className="object-cover opacity-40 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B1B]/80 via-[#0B2B1B]/40 to-[#0B2B1B]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-[#d4af37] tracking-[0.3em] text-xs uppercase mb-6 font-bold"
          >
            Project Overview
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 text-white drop-shadow-xl"
          >
            Some addresses are built.<br />
            <span className="italic text-[#d4af37]">This one was set aside.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            A 21-acre sanctuary of ultra-luxury riverside residences designed for those who demand the absolute best in life.
          </motion.p>
        </div>
      </section>

      {/* 2. THE SETTING (NATURAL SCROLL) */}
      <section className="relative z-20 py-24 md:py-40 bg-[#0B2B1B]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <span className="text-[#d4af37] tracking-[0.2em] text-xs uppercase mb-4 block font-bold">The Location</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white leading-tight">A Rare Riverside Setting in Pune.</h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-6">
                Spread across an expansive <strong className="text-white font-medium">21.03 acres</strong> of master development in a rare riverside setting at Vadgaon Khurd on Sinhgad Road, The Reserve by Kolte-Patil brings together river-facing greens, scenic NDA hill views and a central landscaped boulevard — a life where river, hills, sky and nature converge, minutes from the everyday conveniences of Sinhgad Road.
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-10">
                Sinhgad Road itself is one of Pune's most promising growth corridors. With the proposed Pune Ring Road, metro connectivity plans, corridor expansion and a mature ecosystem of schools, hospitals and retail already in place, The Reserve places you at the centre of the city's next chapter — without giving up the calm of the riverside.
              </p>
              <MagneticButton>
                <Link href="/location" className="inline-block px-8 py-4 border border-[#d4af37] text-[#d4af37] font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full hover:bg-[#d4af37] hover:text-[#0B2B1B] transition-colors">
                  Explore Location
                </Link>
              </MagneticButton>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="aspect-square bg-[#05140D] rounded-3xl border border-white/5 p-8 flex flex-col justify-end relative overflow-hidden group shadow-2xl"
            >
                <Image src="/images/overview/21-acres-masterplan.jpg" alt="21.03 Acres Master Development" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-transparent to-transparent z-10" />
                
                <div className="relative z-20 w-full bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <h3 className="text-7xl font-light text-white/20 absolute -top-12 right-6">21.03</h3>
                  <p className="text-[#d4af37] uppercase tracking-widest text-xs mb-2 font-bold">Master Development</p>
                  <p className="text-xl text-white font-light">Acres of lush, riverside nature.</p>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE RESIDENCES (NATURAL SCROLL) */}
      <section className="relative z-20 py-24 md:py-40 bg-[#05140D] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="order-2 md:order-1 aspect-[4/5] bg-[#0B2B1B] rounded-3xl border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
            >
              <Image src="/images/gallery/interior-deck.jpg" alt="Vyana at The Reserve Residences" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-transparent to-[#0B2B1B]/80 z-10" />
              
              <div className="flex justify-between items-start w-full relative z-20">
                 <span className="text-[#e5c158] text-xl font-light">Vyana Phase 1</span>
                 <span className="text-[#0B2B1B] bg-[#d4af37] font-bold text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full shadow-lg">T5, T6, T7</span>
              </div>
              <div className="relative z-20 w-full bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-light text-white mb-2">2 & 3 Bed Residences</h3>
                <p className="text-white/70 font-light text-sm">791 sq. ft. (2 BHK) & 1,016 sq. ft. (3 BHK) Carpet Areas.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <span className="text-[#d4af37] tracking-[0.2em] text-xs uppercase mb-4 block font-bold">The Architecture</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white leading-tight">2 & 3 Bed Riverside Residences.</h2>
              <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
                Vyana at The Reserve presents thoughtfully designed 2 & 3 BHK residences across 3 towers (T5, T6, T7) with 21 floors each and 8 units per floor (487 total units). Constructed with full aluform and 3.05 m slab-to-slab height.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  { title: "Cross Ventilation", desc: "Engineered wind channels ensuring fresh air in every room." },
                  { title: "Abundant Natural Light", desc: "Floor-to-ceiling windows maximizing sunlight." },
                  { title: "Enhanced Privacy", desc: "Well-spaced towers ensuring no direct overlooking." },
                  { title: "Scenic Views", desc: "Unobstructed vistas of the river and NDA hills." }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <div className="flex items-center text-white text-lg font-medium mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mr-4 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                      {item.title}
                    </div>
                    <p className="text-white/50 text-sm pl-5">{item.desc}</p>
                  </li>
                ))}
              </ul>
              <MagneticButton>
                <Link href="/floor-plans" className="inline-block px-8 py-4 bg-[#d4af37] text-[#0B2B1B] font-sans tracking-[0.2em] uppercase text-[10px] font-bold rounded-full hover:bg-white transition-colors">
                  View Floor Plans
                </Link>
              </MagneticButton>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. EXHAUSTIVE PROJECT DATA MATRIX */}
      <section className="relative z-20 py-24 bg-[#0B2B1B] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs font-bold mb-3 block">
              Official Project Blueprint
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white">
              The Reserve by Kolte-Patil at a Glance
            </h2>
            <p className="text-white/70 font-light text-base mt-4">
              Comprehensive key metrics, zoning configurations, and statutory compliance details registered under MahaRERA PM1261012600748.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Master Development</span>
              <h3 className="font-serif text-3xl text-white mb-2">21.03 Acres</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">Integrated riverside sanctuary at Vadgaon Khurd, Sinhgad Road, Pune.</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Phase 1 (Vyana) Parcel</span>
              <h3 className="font-serif text-3xl text-white mb-2">6.95 Acres</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">Dedicated Phase 1 residential enclave comprising Towers T5, T6, and T7.</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Tower Elevation</span>
              <h3 className="font-serif text-3xl text-white mb-2">G + 21 Floors</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">3 High-speed elevators per tower with 8 residences per floor plate.</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Total Residences (Phase 1)</span>
              <h3 className="font-serif text-3xl text-white mb-2">487 Units</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">Spacious 2 & 3 BHK residences designed for optimal wind and sunlight.</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Carpet Area Spectrum</span>
              <h3 className="font-serif text-3xl text-white mb-2">791 & 1,016 Sq.Ft.</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">791 sq.ft. (2 BHK) & 1,016 sq.ft. (3 BHK) RERA carpet areas.</p>
            </div>

            <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Contemporary Clubhouse</span>
              <h3 className="font-serif text-3xl text-white mb-2">19,750 Sq.Ft.</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">Step seating amphitheater architecture, 84x27 ft. pool & 14x18 ft. kids pool.</p>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-[#05140D] border border-[#d4af37]/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-1">MahaRERA Registered</span>
              <p className="font-mono text-xl text-white font-bold">Registration No: PM1261012600748</p>
              <p className="text-white/50 text-xs font-light mt-1">Project Registered as Vyana Phase-I-T5, T6, T7 | maharera.maharashtra.gov.in</p>
            </div>
            <Link href="/contact" className="px-8 py-4 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shrink-0 shadow-lg">
              Book Site Visit
            </Link>
          </div>
        </div>
      </section>

      <RevealFooter />
    </main>
  );
}
