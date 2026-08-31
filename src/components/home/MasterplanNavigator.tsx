"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ZoneData {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  specs: { label: string; value: string }[];
  description: string;
  badge: string;
}

const zones: ZoneData[] = [
  {
    id: "masterplan",
    tag: "21.03 Acres",
    title: "Riverside Master Sanctuary",
    subtitle: "Vadgaon Khurd, Sinhgad Road",
    image: "/images/overview/21-acres-masterplan.jpg",
    badge: "Master Layout",
    description: "Spread across 21.03 acres of lush riverside terrain along the Mutha River, offering panoramic views of the NDA hills and a central landscaped boulevard.",
    specs: [
      { label: "Total Land Parcel", value: "21.03 Acres" },
      { label: "Phase 1 Area", value: "6.95 Acres" },
      { label: "Green Cover", value: "Over 70% Open Space" },
      { label: "MahaRERA No.", value: "PM1261012600748" },
    ],
  },
  {
    id: "clubhouse",
    tag: "19,750 Sq.Ft.",
    title: "Grand Contemporary Clubhouse",
    subtitle: "Aqua & Wellness Centerpiece",
    image: "/images/gallery/clubhouse-step-seating.jpg",
    badge: "Lifestyle Hub",
    description: "Architecturally crafted with tiered amphitheater step seating, multi-tier lifestyle lounges, wellness studios, and social gathering plazas.",
    specs: [
      { label: "Clubhouse Area", value: "19,750 Sq.Ft." },
      { label: "Architecture", value: "Modern Step Seating" },
      { label: "Lifestyle Spaces", value: "Lounges & Party Hall" },
      { label: "Fitness Suite", value: "Cardio & Yoga Studio" },
    ],
  },
  {
    id: "pool",
    tag: "84 x 27 Ft.",
    title: "Olympic-Length Resort Pool",
    subtitle: "Sprawling Pool & Kids Splash Arena",
    image: "/images/gallery/resort-swimming-pool.jpg",
    badge: "Aqua Arena",
    description: "Expansive 84 ft. x 27 ft. adult swimming pool paired with a dedicated 14 ft. x 18 ft. kids splash pool, sun deck loungers, and riverside breeze.",
    specs: [
      { label: "Adult Pool Size", value: "84 ft. x 27 ft." },
      { label: "Kids Pool Size", value: "14 ft. x 18 ft." },
      { label: "Deck Style", value: "Timber Sun Loungers" },
      { label: "Water Filtration", value: "Multi-Grade Sand Filters" },
    ],
  },
  {
    id: "towers",
    tag: "G+21 Floors",
    title: "Vyana Towers (T5, T6, T7)",
    subtitle: "2 & 3 BHK Riverfront Living",
    image: "/images/gallery/vyana-towers.jpg",
    badge: "Residential Enclave",
    description: "Phase 1 residential towers rising 21 floors above ground with 8 residences per floor, Aluform monolithic construction, and 3.05 m slab heights.",
    specs: [
      { label: "Towers Launched", value: "T5, T6, T7 (Phase 1)" },
      { label: "Total Units", value: "487 Luxury Residences" },
      { label: "Floor Density", value: "8 Units Per Floor" },
      { label: "Clear Height", value: "3.05 m Slab-to-Slab" },
    ],
  },
  {
    id: "sports",
    tag: "Championship Turf",
    title: "Active Sports & Fitness Arena",
    subtitle: "Pickleball, Cricket & Turf",
    image: "/images/gallery/sports-turf.jpg",
    badge: "Sports Zone",
    description: "Dedicated athletic zone featuring full-size pickleball court, cricket practice net pitch, multi-sport artificial turf, and reflexology jogging loop.",
    specs: [
      { label: "Pickleball Court", value: "Championship Grade" },
      { label: "Cricket Net", value: "Enclosed Pitch" },
      { label: "Fitness Track", value: "Aesthetic Jogging Loop" },
      { label: "Play Area", value: "Kids Sandpit & Swings" },
    ],
  },
];

export default function MasterplanNavigator() {
  const [activeZone, setActiveZone] = useState<ZoneData>(zones[0]);

  return (
    <div className="w-full bg-[#05140D] border border-white/10 rounded-[3rem] p-6 md:p-10 shadow-2xl overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-2">
            Interactive Enclave Explorer
          </span>
          <h3 className="font-serif text-2xl md:text-4xl text-white">
            Explore The 21.03-Acre Master Ecosystem
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/master-layout"
            className="px-5 py-2.5 bg-white/5 border border-white/20 text-white hover:bg-white hover:text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
          >
            3D Master Model →
          </Link>
          <Link
            href="/floor-plans"
            className="px-5 py-2.5 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
          >
            Floor Plans
          </Link>
        </div>
      </div>

      {/* Zone Switcher Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {zones.map((zone) => {
          const isActive = activeZone.id === zone.id;
          return (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 ${
                isActive
                  ? "bg-[#d4af37] text-slate-950 shadow-lg scale-[1.02]"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? "bg-slate-950 animate-ping" : "bg-[#d4af37]"}`} />
              <span>{zone.title}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? "bg-slate-950/20 text-slate-950" : "bg-white/10 text-[#d4af37]"}`}>
                {zone.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Visual & Data Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: High-Res Image with Glow */}
        <div className="lg:col-span-7 relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 shadow-2xl group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeZone.image}
                alt={activeZone.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05140D] via-transparent to-transparent opacity-80" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-4 left-4 z-10">
            <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#d4af37] text-[10px] font-bold uppercase tracking-widest">
              {activeZone.badge}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-end">
            <div>
              <p className="text-white text-xs font-light text-white/70">{activeZone.subtitle}</p>
              <h4 className="font-serif text-2xl text-white font-medium">{activeZone.title}</h4>
            </div>
          </div>
        </div>

        {/* Right: Spec Matrix & Action Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest block mb-1">
              Architectural Specifications
            </span>
            <h4 className="font-serif text-2xl text-white mb-3">{activeZone.title}</h4>
            <p className="text-white/70 text-xs font-light leading-relaxed mb-6">
              {activeZone.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {activeZone.specs.map((spec, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block font-medium">
                    {spec.label}
                  </span>
                  <span className="text-white text-xs font-semibold mt-0.5 block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/917744009295?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20detailed%20masterplan%20brochure%20and%20pricing%20dossier%20for%20The%20Reserve%20Kolte%20Patil."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-6 py-3.5 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-lg"
            >
              WhatsApp Dossier
            </a>
            <Link
              href="/contact"
              className="text-center px-6 py-3.5 bg-white/5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-slate-950 transition-colors"
            >
              Book Site Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
