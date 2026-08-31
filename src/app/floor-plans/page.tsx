'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import RevealFooter from '@/components/layout/RevealFooter';

const plans = {
  '3BHK': {
    name: 'Vyana 3 BHK Luxury Residence',
    tower: 'Towers T5, T6, T7 — Ground + 21 Floors (487 Units)',
    carpet: '1,016 Sq.Ft. (RERA Carpet Area)',
    structure: 'Full Aluform Monolithic Concrete Construction',
    ceilingHeight: '3.05 m Slab-to-Slab (~2.9 m Clear Height)',
    rooms: [
      { name: 'Living & Dining Hall', size: '21\'0" x 11\'6"', desc: 'Expansive open-plan living with direct river deck connectivity.' },
      { name: 'Master Bedroom Suite', size: '13\'6" x 11\'0"', desc: 'Generous suite with private wardrobe niche and en-suite bath.' },
      { name: 'Master Bathroom', size: '8\'0" x 5\'0"', desc: 'Jaquar CP & sanitary fittings with concealed cistern.' },
      { name: 'Bedroom 02 (Guest/Parent)', size: '12\'0" x 10\'6"', desc: 'Natural light-filled room with large sliding windows.' },
      { name: 'Bedroom 03 (Study/Kids)', size: '11\'0" x 10\'0"', desc: 'Flexible space ideal for home office or children\'s room.' },
      { name: 'Kitchen & Dry Utility', size: '10\'6" x 8\'0" + 5\'6" x 4\'0"', desc: 'Granite platform, SS sink, and dedicated washing machine provision.' },
      { name: 'Panoramic River Deck', size: '11\'6" x 5\'0"', desc: 'River and NDA Hill facing private outdoor balcony.' }
    ],
    highlights: [
      '1,016 sq. ft. RERA Carpet Area with zero dead space',
      '3.05 m Slab-to-Slab Height (~2.9 m Clear)',
      'Glazed Vitrified Flooring (Kajaria / Equivalent)',
      'Jaquar Premium Series CP & Sanitary Fittings',
      'Panoramic River & NDA Hill Facing Balcony',
      'Digital Door Lock & Video Door Phone',
      '1 or 2 Covered/Mechanical Parking Allotments'
    ],
    image: '/images/floor-plans/vyana-3bhk-floorplan.png'
  },
  '2BHK': {
    name: 'Vyana 2 BHK Riverside Residence',
    tower: 'Towers T5, T6, T7 — Ground + 21 Floors (487 Units)',
    carpet: '791 Sq.Ft. (RERA Carpet Area)',
    structure: 'Full Aluform Monolithic Concrete Construction',
    ceilingHeight: '3.05 m Slab-to-Slab (~2.9 m Clear Height)',
    rooms: [
      { name: 'Living & Dining Room', size: '18\'0" x 11\'0"', desc: 'Space-optimized living area with cross-ventilation.' },
      { name: 'Master Bedroom', size: '12\'6" x 10\'6"', desc: 'Spacious bedroom with dedicated attached washroom.' },
      { name: 'Master Bathroom', size: '7\'6" x 4\'6"', desc: 'Premium anti-skid tiles & Jaquar sanitaryware.' },
      { name: 'Bedroom 02', size: '11\'0" x 10\'0"', desc: 'Well-ventilated second bedroom with hill view window.' },
      { name: 'Common Bathroom', size: '7\'0" x 4\'6"', desc: 'Full-height glazed tile dado and premium fittings.' },
      { name: 'Kitchen & Dry Balcony', size: '9\'6" x 7\'6" + 5\'0" x 4\'0"', desc: 'Ergonomic modular layout with separate utility area.' },
      { name: 'Viewing Balcony', size: '10\'0" x 4\'6"', desc: 'Private outdoor balcony with safety glass railing.' }
    ],
    highlights: [
      '791 sq. ft. RERA Carpet Area with functional layout',
      'Aluform Monolithic Concrete Construction',
      'Digital Door Lock & Video Door Phone',
      'Mosquito Nets for Windows & Sliding Doors',
      'AC Provision in Living-Dining & Bedrooms',
      '1 Dedicated Parking with EV Charging Provision'
    ],
    image: '/images/floor-plans/vyana-2bhk-floorplan.png'
  }
};

export default function FloorPlansPage() {
  const [activePlan, setActivePlan] = useState<'3BHK' | '2BHK'>('3BHK');

  return (
    <main className="min-h-screen bg-[#0B2B1B] text-white relative pt-32 pb-24 selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      
      <div className="container mx-auto px-6 relative z-20">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl text-center mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            The Residences
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            Floor Plans
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Thoughtfully planned spaces designed around complete openness. Every layout guarantees excellent cross ventilation, abundant natural light, and breathtaking vistas.
          </motion.p>
        </div>

        {/* Toggle & Viewer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16"
        >
          {/* Controls & Specs */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setActivePlan('3BHK')}
                className={`text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden ${activePlan === '3BHK' ? 'bg-[#d4af37]/10 border-[#d4af37]/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
              >
                {activePlan === '3BHK' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37]"></div>}
                <h3 className={`text-3xl font-light mb-2 ${activePlan === '3BHK' ? 'text-[#e5c158]' : 'text-white'}`}>3 Bed Residence</h3>
                <p className="text-white/50 text-sm font-light">Tower 05 — Type 02</p>
              </button>
              
              <button 
                onClick={() => setActivePlan('2BHK')}
                className={`text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-500 relative overflow-hidden ${activePlan === '2BHK' ? 'bg-[#d4af37]/10 border-[#d4af37]/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
              >
                {activePlan === '2BHK' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#d4af37]"></div>}
                <h3 className={`text-3xl font-light mb-2 ${activePlan === '2BHK' ? 'text-[#e5c158]' : 'text-white'}`}>2 Bed Residence</h3>
                <p className="text-white/50 text-sm font-light">Tower 06 — Type 03</p>
              </button>
            </div>

            {/* Dynamic Specs Panel */}
            <div className="p-8 rounded-[2rem] bg-[#05140D] border border-white/5 mt-4 shadow-xl">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2">Carpet Area</p>
              <p className="text-3xl text-white font-light mb-8">{plans[activePlan].carpet}</p>
              
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-4">Key Highlights</p>
              <ul className="space-y-4">
                {plans[activePlan].highlights.map((h, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-[#d4af37] mt-2.5 mr-3 flex-shrink-0" />
                    <span className="text-white/70 font-light text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Viewer Placeholder */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            <div className="aspect-square md:aspect-[4/3] w-full bg-[#05140D] rounded-[3rem] border border-white/10 relative overflow-hidden flex items-center justify-center group shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,rgba(10,25,15,1)_100%)] z-0" />
              
              {/* Official Blueprint Rendering */}
              <div className="absolute inset-0 z-10 w-full h-full p-6 md:p-12">
                 <div className="relative w-full h-full border border-white/10 rounded-2xl bg-white/5 overflow-hidden backdrop-blur-md">
                   <Image 
                     src={plans[activePlan].image} 
                     alt={`${activePlan} Floor Plan`}
                     fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-4 hover:scale-[1.03] transition-transform duration-1000 ease-out"
                   />
                 </div>
              </div>

              <div className="absolute bottom-8 right-8 z-20 text-right pointer-events-none hidden md:block">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                >
                  <h3 className="text-4xl font-light text-white mb-3 shadow-sm">{activePlan} Layout</h3>
                  
                  <div className="flex gap-2 justify-end mt-4">
                    <span className="px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[10px] text-[#d4af37] uppercase tracking-widest backdrop-blur-md font-bold">Vastu Compliant</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Room by Room Architectural Dimensions Table */}
            <div className="bg-[#05140D] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-white/10 gap-4">
                <div>
                  <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-1">Architectural Dimensions</span>
                  <h3 className="font-serif text-2xl text-white">{plans[activePlan].name}</h3>
                </div>
                <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 px-4 py-2 rounded-full text-xs text-[#d4af37] font-bold">
                  {plans[activePlan].ceilingHeight}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-white/80">
                  <thead className="text-[10px] uppercase tracking-widest text-[#d4af37] border-b border-white/10">
                    <tr>
                      <th className="py-3 pr-4 font-bold">Space / Room</th>
                      <th className="py-3 px-4 font-bold">Approx. Dimensions</th>
                      <th className="py-3 pl-4 font-bold hidden sm:table-cell">Architectural Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-light">
                    {plans[activePlan].rooms.map((room, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 pr-4 font-medium text-white">{room.name}</td>
                        <td className="py-3.5 px-4 font-mono text-[#e5c158]">{room.size}</td>
                        <td className="py-3.5 pl-4 text-white/60 text-xs hidden sm:table-cell">{room.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
                <span className="text-white/50 text-xs font-mono">Structure: {plans[activePlan].structure}</span>
                <a href="/contact" className="px-6 py-3 bg-[#d4af37] text-slate-950 text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white transition-colors">
                  Request Official PDF Blueprint
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 3. ALL-INCLUSIVE COST ESTIMATOR & FINANCIAL MATRIX */}
        <section className="mb-24 p-8 md:p-12 rounded-[2.5rem] bg-[#05140D] border border-[#d4af37]/30 shadow-2xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-2">Financial Transparency</span>
            <h3 className="font-serif text-3xl md:text-4xl text-white">Indicative Cost Breakdown</h3>
            <p className="text-white/60 text-xs font-light mt-2">Estimated statutory government levies and total acquisition cost for {plans[activePlan].name}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">Configuration</span>
              <p className="font-serif text-xl text-white font-medium">{activePlan === '3BHK' ? '3 BHK (1,016 Sq.Ft.)' : '2 BHK (791 Sq.Ft.)'}</p>
              <p className="text-[11px] text-[#d4af37] mt-1 font-mono">{activePlan === '3BHK' ? 'Towers T5, T6, T7' : 'Towers T5, T6, T7'}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">Stamp Duty (7% PMC)</span>
              <p className="font-serif text-xl text-white font-medium">{activePlan === '3BHK' ? '₹9.45 Lakhs*' : '₹5.95 Lakhs*'}</p>
              <p className="text-[11px] text-white/50 mt-1 font-light">1% concession for female owners</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">GST (5% RERA)</span>
              <p className="font-serif text-xl text-white font-medium">{activePlan === '3BHK' ? '₹6.75 Lakhs*' : '₹4.25 Lakhs*'}</p>
              <p className="text-[11px] text-white/50 mt-1 font-light">Applicable on construction</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B2B1B] border border-[#d4af37]/40 shadow-xl">
              <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block mb-1">All-Inclusive Indicative</span>
              <p className="font-serif text-2xl text-[#d4af37] font-bold">{activePlan === '3BHK' ? 'Request Cost Sheet' : 'Request Cost Sheet'}</p>
              <p className="text-[11px] text-white/70 mt-1 font-light">Customized floor & unit specific</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="text-white text-sm font-medium">Looking for a customized unit quote with floor-rise & preferred views?</p>
              <p className="text-white/50 text-xs font-light mt-0.5">Our sales concierge will share the official Kolte-Patil cost sheet PDF on WhatsApp.</p>
            </div>
            <a 
              href="https://wa.me/917744009295?text=Hello%20Team%20Kolte%20Patil%20The%20Reserve,%20please%20share%20the%20official%20all-inclusive%20cost%20sheet%20and%20floor%20plans." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shrink-0 shadow-lg"
            >
              Get Cost Sheet on WhatsApp →
            </a>
          </div>
        </section>

      </div>

      <RevealFooter />
    </main>
  );
}
