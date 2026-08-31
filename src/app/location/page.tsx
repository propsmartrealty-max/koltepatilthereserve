'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import RevealFooter from '@/components/layout/RevealFooter';
import Link from 'next/link';

const connectivityCategories = [
  {
    category: "Retail & Entertainment",
    items: [
      { name: "DMart Vadgaon", distance: "~1 KM", desc: "Everyday groceries and household essentials." },
      { name: "Abhiruchi Mall & Multiplex", distance: "~3.5 KM", desc: "Shopping, dining, and premium movie screens." },
      { name: "Reliance Smart & Local High Street", distance: "~2 KM", desc: "Fresh produce and neighborhood convenience." }
    ]
  },
  {
    category: "Education & Academies",
    items: [
      { name: "Orchids The International School", distance: "~4 KM", desc: "CBSE & ICSE global curriculum education." },
      { name: "Sinhgad Institutes Vadgaon Campus", distance: "~5 KM", desc: "Engineering, management, and pharmacy colleges." },
      { name: "Sinhgad Spring Dale School", distance: "~3 KM", desc: "Reputed K-12 primary and secondary school." },
      { name: "Bharati Vidyapeeth University", distance: "~8 KM", desc: "Medical, dental, and multidisciplinary university." }
    ]
  },
  {
    category: "Healthcare Network",
    items: [
      { name: "Sinhgad Specialty Hospital", distance: "~4 KM", desc: "24/7 emergency care and multispecialty ICU." },
      { name: "Smt. Kashibai Navale General Hospital", distance: "~4.5 KM", desc: "Comprehensive tertiary hospital & medical college." },
      { name: "Deenanath Mangeshkar Hospital", distance: "~9 KM", desc: "Pune's premier super-specialty hospital." }
    ]
  },
  {
    category: "Transit & IT Hubs",
    items: [
      { name: "Mumbai-Bengaluru Highway (NH 48)", distance: "~5 Mins", desc: "Rapid arterial connectivity to Baner, Wakad & Hinjewadi." },
      { name: "Chandani Chowk Junction", distance: "~10 KM", desc: "Major western Pune interchange connecting Kothrud and Mulshi." },
      { name: "Swargate Multi-Modal Transit Hub", distance: "~11 KM", desc: "Central Pune bus terminus and operational Metro interchange." },
      { name: "Pune Railway Station", distance: "~15 KM", desc: "Direct rail link to Mumbai and national transit routes." },
      { name: "Hinjewadi IT Park (Phase 1-3)", distance: "~25 KM", desc: "Quick commute via outer western bypass highway." }
    ]
  }
];

export default function LocationPage() {
  return (
    <div className="relative bg-[#0B2B1B] text-white min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      
      <main className="flex-1 container mx-auto px-6 relative z-20 max-w-7xl pt-32 pb-24">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            Strategic Connectivity
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8 uppercase"
          >
            Location & Micro-Market
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Nestled along the serene river edge at Vadgaon Khurd on Sinhgad Road, Pune. Enjoy the tranquility of Mutha River and NDA hills with immediate access to everyday conveniences, Pune Ring Road, and prime transit nodes.
          </motion.p>
        </div>

        {/* Map & Distances Grid */}
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 items-start mb-24">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="xl:w-1/2 aspect-[4/3] md:aspect-video xl:aspect-square bg-[#05140D] rounded-[3rem] border border-white/10 relative overflow-hidden group w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
            <div className="absolute inset-0 z-10 p-6 md:p-8">
               <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                 <Image 
                   src="/images/overview/location-map.jpg" 
                   alt="The Reserve Location Map Sinhgad Road"
                   fill sizes="(max-width: 1200px) 100vw, 50vw" className="object-cover hover:scale-[1.03] transition-transform duration-1000 ease-out"
                 />
                 <div className="absolute inset-0 bg-[#0B2B1B]/20 group-hover:bg-transparent transition-colors duration-700 mix-blend-multiply"></div>
               </div>
            </div>
          </motion.div>

          <div className="xl:w-1/2 w-full flex flex-col gap-8">
            <div>
              <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-2">Location Advantages</span>
              <h3 className="font-serif text-3xl md:text-4xl text-white">Effortless City Access</h3>
            </div>
            
            <div className="space-y-6">
              {connectivityCategories.map((cat, idx) => (
                <div key={idx} className="p-6 md:p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-4">{cat.category}</span>
                  <div className="space-y-3.5">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-start border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                        <div>
                          <h4 className="text-sm font-medium text-white">{item.name}</h4>
                          <p className="text-xs text-white/50 font-light">{item.desc}</p>
                        </div>
                        <span className="text-[10px] font-bold text-[#0B2B1B] bg-[#d4af37] px-2.5 py-1 rounded-full whitespace-nowrap tracking-wider uppercase ml-4 shrink-0">
                          {item.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Future Growth Catalysts */}
        <div className="p-10 md:p-12 rounded-[2.5rem] bg-[#05140D] border border-[#d4af37]/30 shadow-2xl mb-12">
          <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-2">Infrastructure Growth</span>
          <h3 className="font-serif text-3xl text-white mb-6">Upcoming Pune Infrastructure Catalysts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="font-serif text-lg text-white mb-2">Proposed Pune Ring Road</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Adjoining ring road corridor will provide direct high-speed bypass connectivity across all four quadrants of Pune.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="font-serif text-lg text-white mb-2">Sinhgad Road Elevated Flyover</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Multi-tier flyover significantly eases commute towards Swargate, Deccan Gymkhana, and central Pune.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="font-serif text-lg text-white mb-2">Swargate Metro Expansion</h4>
              <p className="text-white/60 text-xs font-light leading-relaxed">Upcoming underground metro extension connecting Swargate to Katraj brings mass rapid transit minutes away.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <span className="text-white/50 text-xs font-mono">GPS Coordinates: 18.4622871, 73.8013712 | Vadgaon Khurd, Pune</span>
            <div className="flex gap-3">
              <a 
                href="https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-lg"
              >
                Open Google Maps Navigation 📍
              </a>
              <Link href="/contact" className="px-6 py-3.5 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-slate-950 transition-colors">
                Book Visit
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
