'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SplitText from '@/components/ui/SplitText';
import RevealFooter from '@/components/layout/RevealFooter';
import Link from 'next/link';

const specs = [
  { 
    category: "01 // Structure & Masonry", 
    details: [
      "Full Aluform monolithic concrete construction for maximum seismic resilience & longevity",
      "Floor-to-floor height of 3.05 m with clear ceiling height of approximately 2.9 m",
      "Earthquake-resistant RCC framed structure designed according to IS Seismic Zone III norms",
      "Acoustically insulated external and internal partition walls with smooth gypsum plaster"
    ] 
  },
  { 
    category: "02 // Flooring & Wall Cladding", 
    details: [
      "Large-format glazed vitrified tiles (Kajaria or equivalent) across living, dining, foyer, and all bedrooms",
      "Anti-skid matte vitrified tiles in all bathrooms, private decks, and dry utility balconies",
      "Designer ceramic tile dado up to lintel level (7 ft.) in all bathrooms with epoxy grouting",
      "Granite thresholds and sills for all windows and sliding balcony doors"
    ] 
  },
  { 
    category: "03 // Kitchen & Dry Balcony", 
    details: [
      "Premium polished granite or quartz kitchen platform with stainless steel sink & drainboard",
      "Designer glazed ceramic tile dado up to 2 ft. height above kitchen platform",
      "Dedicated electrical and plumbing points for water purifier, chimney, microwave, and dishwasher",
      "Separate utility balcony with dedicated washing machine inlet/outlet points and anti-skid flooring"
    ] 
  },
  { 
    category: "04 // Bathrooms & Sanitaryware", 
    details: [
      "Premium chrome-plated (CP) and sanitary fittings from Jaquar or equivalent luxury brand",
      "Wall-hung European Water Closets (EWC) with concealed dual-flush cisterns in all toilets",
      "Solar heated water supply connection provided in the master bathroom",
      "Provisions for exhaust fans, geysers, and vanity mirrors in all bathrooms"
    ] 
  },
  { 
    category: "05 // Doors, Windows & Hardware", 
    details: [
      "Grand 8-ft. high entrance door with veneer/laminate finish and biometric digital lock",
      "High-grade powder-coated aluminum sliding windows with integrated mosquito mesh",
      "Laminated flush internal doors with premium mortise cylindrical locksets",
      "Toughened glass and stainless steel / aluminum railings for all private viewing decks"
    ] 
  },
  { 
    category: "06 // Electrical & HVAC Infrastructure", 
    details: [
      "Concealed fire-retardant low-smoke (FRLS) copper wiring (Polycab / Finolex or equivalent)",
      "Premium modular electrical switches & sockets from Schneider / Legrand or equivalent",
      "AC piping and high-amperage electrical points in living-dining hall and all bedrooms",
      "100% DG power backup for common area illumination, elevators, water pumps, and fire systems"
    ] 
  },
  { 
    category: "07 // Painting & Finishes", 
    details: [
      "Internal walls treated with putty, primer, and premium low-VOC acrylic emulsion paint",
      "Ceilings finished with smooth gypsum plaster and premium white emulsion",
      "External building facades coated with weather-proof, anti-fungal textured exterior paint",
      "Enamel paint on all metal railings, grilles, and service doors"
    ] 
  },
  { 
    category: "08 // High-Speed Elevators & Lobbies", 
    details: [
      "3 High-speed passenger and stretcher elevators per tower (Schindler / Otis / Kone or equivalent)",
      "Equipped with Automatic Rescue Device (ARD) and direct emergency intercom to concierge",
      "Double-height air-conditioned designer ground-floor entrance reception lobbies",
      "Architecturally lit elevator lobbies on all residential floors with vitrified cladding"
    ] 
  },
  { 
    category: "09 // Multi-Level Parking & EV Provision", 
    details: [
      "Ample covered parking distributed across 2 basements (B1 + B2) and 1 stilt level",
      "30% of total parking bays equipped with dedicated EV charging infrastructure",
      "Automated RFID boom barriers at vehicle entry/exit gates for seamless resident access",
      "Clearly demarcated vehicular driveways, signage, and energy-efficient LED lighting"
    ] 
  },
  { 
    category: "10 // Eco-Sustainability & Security", 
    details: [
      "Comprehensive rainwater harvesting system recharging groundwater reservoirs",
      "On-site Sewage Treatment Plant (STP) with treated water utilized for landscape irrigation",
      "Organic Waste Converter (OWC) for eco-friendly zero-garbage disposal",
      "24/7 CCTV surveillance covering perimeter, lobbies, parking, and clubhouse with central control"
    ] 
  }
];

export default function SpecificationsPage() {
  return (
    <div className="relative bg-[#0B2B1B] text-white min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="https://www.koltepatil.com/assets/uploads/gallery/17847869771007144168.jpg" alt="Luxury Specifications" fill sizes="100vw" className="object-cover mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B1B]/80 via-[#0B2B1B] to-[#0B2B1B]" />
      </div>
      
      <main className="flex-1 container mx-auto px-6 relative z-20 pt-32 pb-24">
        
        {/* Header */}
        <div className="mb-20 md:mb-32 max-w-4xl text-center mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4 font-bold"
          >
            Engineering & Quality
          </motion.p>
          <SplitText text="Project Specifications" className="text-5xl md:text-7xl font-light tracking-tight mb-8 uppercase" delay={0.2} />
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Uncompromising construction quality across every detail. Engineered with full monolithic Aluform technology, 3.05 m slab heights, Kajaria tiles, Jaquar fittings, and 30% EV-charging provisions under MahaRERA PM1261012600748.
          </motion.p>
        </div>

        {/* Specs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
              className="bg-[#05140D]/60 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-[#d4af37]/30 transition-colors shadow-2xl"
            >
              <h3 className="text-2xl font-serif text-[#e5c158] border-b border-white/10 pb-4 mb-6">{spec.category}</h3>
              <ul className="space-y-4">
                {spec.details.map((detail, j) => (
                  <li key={j} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 mr-3.5 flex-shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    <span className="text-white/80 font-light text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-[#05140D] border border-[#d4af37]/30 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left shadow-2xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-1">Official Material Schedule</span>
            <h4 className="font-serif text-2xl text-white">Download Technical Specifications PDF</h4>
            <p className="text-white/60 text-xs font-light mt-1">Get the complete architectural fixture list and brand certifications.</p>
          </div>
          <Link href="/contact" className="px-8 py-4 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shrink-0 shadow-lg">
            Request Spec Sheet
          </Link>
        </div>

      </main>

      <RevealFooter />
    </div>
  );
}
