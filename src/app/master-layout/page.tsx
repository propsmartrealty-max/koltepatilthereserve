'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import RevealFooter from '@/components/layout/RevealFooter';
import Link from 'next/link';

const ArchitecturalModel3D = dynamic(() => import('@/components/ui/ArchitecturalModel3D'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#05140D]">
      <div className="text-[#d4af37] text-sm tracking-widest uppercase animate-pulse">Loading Digital Twin...</div>
    </div>
  )
});

export default function MasterLayoutPage() {
  return (
    <div className="relative bg-[#0B2B1B] text-white min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-[#0B2B1B] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/3" />
      
      <main className="flex-1 container mx-auto px-6 relative z-20 pt-32 pb-24">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl text-center mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            21.03-Acre Blueprint
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white uppercase"
          >
            Master Layout & Masterplan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed"
          >
            An expansive 21.03-acre canvas meticulously engineered for luxury. Where the Mutha River sets the pace, the NDA hill backdrop provides serenity, and thoughtful master planning dictates seamless flow.
          </motion.p>
        </div>

        {/* 3D Masterplan Engine */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.6 }}
          className="relative w-full h-[50vh] md:h-[70vh] bg-[#05140D] rounded-[3rem] border border-white/10 overflow-hidden mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <ArchitecturalModel3D />
          <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center pointer-events-none">
             <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse mr-3"></div>
             <span className="text-[10px] uppercase tracking-widest text-white/70">Interactive Digital Twin</span>
          </div>
        </motion.div>

        {/* 6 Masterplan Zones */}
        <div className="mb-24">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-2">Masterplan Zoning</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white">6 Distinct Architectural Zones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Riverfront Green Buffer",
                desc: "An expansive linear eco-park facing the river, offering a peaceful walking trail completely separated from vehicular traffic."
              },
              {
                num: "02",
                title: "Central Landscaped Boulevard",
                desc: "A wide, tree-lined arterial spine connecting all residential drop-offs and drop-off plazas with zero congestion."
              },
              {
                num: "03",
                title: "19,750 Sq.Ft. Clubhouse & Pool",
                desc: "Contemporary step seating architecture with 84x27 ft. resort swimming pool, 14x18 ft. kids pool, and wellness pavilions."
              },
              {
                num: "04",
                title: "Vyana Towers (T5, T6, T7)",
                desc: "Phase 1 residential cluster featuring 21 storeys, 8 units per floor, and full aluform monolithic concrete construction."
              },
              {
                num: "05",
                title: "Sports & Recreational Arena",
                desc: "Championship-grade pickleball courts, multipurpose turf, cricket bowling pitch, and open fitness decks."
              },
              {
                num: "06",
                title: "Multi-Level EV Parking Enclave",
                desc: "2 Basements (B1+B2) and Stilt level parking with 30% EV-charging enabled bays and RFID automated boom barriers."
              }
            ].map((zone, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl hover:border-[#d4af37]/40 transition-colors">
                <span className="text-2xl font-serif text-[#d4af37] block mb-3">{zone.num}</span>
                <h3 className="font-serif text-xl text-white mb-2">{zone.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Masterplan Engineering Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
           >
             <h2 className="text-3xl md:text-4xl font-light mb-8 text-white leading-tight">Masterplan Engineering for <br/><span className="text-[#e5c158] italic">Uncompromised Living.</span></h2>
             
             <div className="space-y-6 text-white/70 font-light leading-relaxed text-sm">
                <p>
                  <strong>Wind Tunneling & Cross-Ventilation:</strong> Tower alignments were calculated using aerodynamic computational fluid dynamics to maximize breeze channeling from the Mutha river valley.
                </p>
                <p>
                  <strong>Sunlight Path Optimization:</strong> Strategic spacing between Towers T5, T6, and T7 ensures uninterrupted daylight across living rooms and private balconies throughout every season.
                </p>
                <p>
                  <strong>Pedestrian-First Safety:</strong> Vehicular traffic is routed immediately to basement ramps upon entering the main gate, keeping 80% of ground-level walkways 100% vehicle-free.
                </p>
                <p>
                  <strong>100% Eco-Sustainable Infrastructure:</strong> Rainwater harvesting pits, dedicated on-site sewage treatment plant (STP) for landscape irrigation, and solar illumination along boulevard paths.
                </p>
             </div>

             <div className="mt-8">
               <Link href="/floor-plans" className="px-8 py-4 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors inline-block shadow-lg">
                 Explore Vyana Floor Plans →
               </Link>
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
             className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5"
           >
             <Image src="/images/overview/21-acres-masterplan.jpg" alt="Masterplan Aerial" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 ease-out" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-transparent to-transparent" />
             <div className="absolute bottom-10 left-10 right-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
               <p className="text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-2 font-bold">Vastu Compliant</p>
               <p className="text-white font-light text-sm">The entire master layout is engineered strictly in accordance with classical Vastu principles, ensuring positive energy flow.</p>
             </div>
           </motion.div>
        </div>

      </main>
    </div>
  );
}
