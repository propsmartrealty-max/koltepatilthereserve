'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import RevealFooter from '@/components/layout/RevealFooter';
import Link from 'next/link';

const amenitiesList = [
  { title: '19,750 Sq.Ft. Contemporary Clubhouse', desc: 'Step seating architecture, resident lounges, indoor game arenas, and lifestyle wellness hubs.', colSpan: 'col-span-1 md:col-span-2', image: '/images/gallery/clubhouse-step-seating.jpg' },
  { title: 'Resort-Style Adult Pool (84x27 ft.)', desc: 'Sprawling 84 ft. x 27 ft. lap pool paired with a dedicated 14 ft. x 18 ft. kids pool and sun deck.', colSpan: 'col-span-1 md:col-span-1', image: '/images/gallery/resort-swimming-pool.jpg' },
  { title: 'Central Landscaped Boulevard', desc: 'A grand arterial green spine running across the 21.03 acres master development, framed by lush flora and seating pavilions.', colSpan: 'col-span-1 md:col-span-3', image: '/images/gallery/central-boulevard.jpg' },
  { title: 'Pickleball Court & Sports Turf', desc: 'Dedicated sports recreation zones for active fitness, pickleball matches, and wellness activities.', colSpan: 'col-span-1 md:col-span-1', image: '/images/gallery/sports-turf.jpg' },
  { title: 'River-Facing Greens & Scenic NDA Hill Views', desc: 'Panoramic riverfront buffers and unhindered green vistas offering pure cross ventilation and serenity.', colSpan: 'col-span-1 md:col-span-2', image: '/images/gallery/river-hills.jpg' },
  { title: 'Landscaped Plazas & Family Gathering Zones', desc: 'Open-air amphitheater, family picnic plazas, reflexology paths, and dedicated children play areas.', colSpan: 'col-span-1 md:col-span-3', image: '/images/gallery/landscaped-plazas.jpg' },
];

const amenityClusters = [
  {
    category: "01 // Aqua & Wellness Resort",
    items: [
      "84 ft. x 27 ft. Olympic-Inspired Resort Adult Pool",
      "14 ft. x 18 ft. Dedicated Children's Splash Pool",
      "Sunken Poolside Loungers & Cabana Decks",
      "Heated Hydrotherapy Jacuzzi Jets",
      "Holistic Spa & Therapeutic Steam Rooms"
    ]
  },
  {
    category: "02 // 19,750 Sq.Ft. Clubhouse Enclave",
    items: [
      "Architectural Step Seating Amphitheater",
      "Fully Equipped High-Tech Fitness Gymnasium",
      "Yoga, Pilates & Meditation Studio",
      "Double-Height Grand Banquet & Party Hall",
      "Indoor Games Lounge (Billiards, Table Tennis, Chess)",
      "Co-Working Lounge with High-Speed Optical Fiber"
    ]
  },
  {
    category: "03 // Outdoor Sports & Active Recreation",
    items: [
      "Championship-Grade Pickleball Court",
      "Multipurpose Sports Turf for Football & Basketball",
      "Cricket Net Practice Pitch with Bowling Alley",
      "1.2 KM Continuous Rubberized Jogging Track",
      "Dedicated Tree-Lined Cycling Circuit",
      "Outdoor Calisthenics & CrossFit Station"
    ]
  },
  {
    category: "04 // Nature, Parks & Community Spaces",
    items: [
      "Riverfront Linear Eco-Park & Promenade",
      "Senior Citizen Shaded Reflexology Garden",
      "Thematic Children's Adventure Play Castle",
      "Aromatherapy Herbal Planting Zones",
      "Dedicated Pet Park & Agility Lawn",
      "Open-Air Stargazing & Barbecue Terrace"
    ]
  }
];

export default function AmenitiesPage() {
  return (
    <div className="relative bg-[#0B2B1B] text-white min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      
      <main className="flex-1 container mx-auto px-6 relative z-20 pt-32 pb-24">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl text-center mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            The Lifestyle Experience
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8 uppercase"
          >
            40+ Curated Amenities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed"
          >
            A curated lifestyle ecosystem spanning the 21.03-acre master development. Anchored by the 19,750 sq.ft. contemporary clubhouse, 84x27 ft. resort pool, and serene Mutha River green buffer.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {amenitiesList.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              className={`${item.colSpan} aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-[#05140D] rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group hover:border-[#d4af37]/30 shadow-2xl transition-all duration-700`}
            >
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-[#0B2B1B]/40 to-transparent z-[5]" />
              
              <div className="absolute bottom-10 left-10 right-10 z-10 w-3/4">
                <h3 className="text-3xl font-light text-white mb-3 group-hover:text-[#e5c158] transition-colors duration-500">{item.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">{item.desc}</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-50 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 group-hover:text-[#d4af37] transition-all duration-500 backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Deep Amenity Clusters Grid */}
        <div className="mb-24">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-2">Excellence by Design</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white">4 Distinct Amenity Clusters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenityClusters.map((cluster, idx) => (
              <div key={idx} className="p-8 md:p-10 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-4">{cluster.category}</span>
                <ul className="space-y-3.5">
                  {cluster.items.map((item, i) => (
                    <li key={i} className="flex items-center text-white/80 font-light text-sm">
                      <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mr-3 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact" className="px-10 py-5 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors inline-block shadow-2xl">
              Schedule Private Amenities Tour
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
