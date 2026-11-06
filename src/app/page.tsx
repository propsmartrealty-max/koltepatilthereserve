"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useConcierge } from "@/context/ConciergeContext";
import LuxuryTicker from "@/components/home/LuxuryTicker";
import MasterplanNavigator from "@/components/home/MasterplanNavigator";
import CompetitorComparison from "@/components/home/CompetitorComparison";
import {
  Calendar,
  FileText,
  MapPin,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
  Trees,
  Waves,
  Building2,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const { setIsConciergeOpen } = useConcierge();
  const [activePlan, setActivePlan] = useState<"3BHK" | "2BHK">("3BHK");

  const [leadForm, setLeadForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Vyana 3 BHK (1,016 sq.ft.)",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/propsmartrealty@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "VIP Lead: The Reserve Homepage",
          Name: leadForm.name,
          Phone: leadForm.phone,
          Email: leadForm.email,
          Interest: leadForm.interest,
        }),
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const googleMapsUrl =
    "https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0";

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] overflow-hidden">
      
      {/* =========================================================================
          1. CINEMATIC HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 z-10 bg-[#06160E]">
        {/* Full-Bleed Background Photography */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            priority
            src="/images/gallery/vyana-towers.jpg"
            alt="The Reserve by Kolte Patil Vyana Towers Sinhgad Road Pune"
            fill
            sizes="100vw"
            className="object-cover object-center transform scale-105 filter brightness-90"
          />
          {/* Obsidian Gradients (Seamless blending, zero white flashing) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06160E] via-[#06160E]/50 to-[#06160E]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#06160E]/40 to-[#06160E]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-12 md:mt-20">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D]/80 border border-[#D4AF37]/30 backdrop-blur-md mb-6 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              21.03-Acre Master Riverside Sanctuary • MahaRERA PM1261012600748
            </span>
          </motion.div>

          {/* Monumental Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1.05] drop-shadow-2xl"
          >
            THE RESERVE
            <span className="block font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#D4AF37] tracking-[0.08em] mt-2">
              by Kolte-Patil
            </span>
          </motion.h1>

          {/* Narrative Subtitle (Targeted by Google Assistant / Voice Search Speakable Schema) */}
          <motion.p
            id="project-speakable-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-sans text-sm md:text-base lg:text-lg text-[#C8D6CF] tracking-wide max-w-3xl leading-relaxed font-light"
          >
            Curated 2 & 3 BHK Riverside Residences along the Mutha River at Vadgaon Khurd, Sinhgad Road, Pune. Featuring an iconic 19,750 sq.ft. clubhouse, 84-ft resort pool, and panoramic NDA Hill vistas.
          </motion.p>

          {/* Action Button Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center items-center gap-4"
          >
            {/* Primary CTA: Schedule Visit */}
            <button
              onClick={() => setIsConciergeOpen(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl flex items-center gap-2 cursor-pointer group"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Request Cost Sheet & Visit</span>
            </button>

            {/* Secondary CTA: Floor Plans */}
            <a
              href="#floor-plans-section"
              className="px-8 py-4 rounded-full bg-[#0E2E1D]/90 hover:bg-white hover:text-[#06160E] text-white font-sans text-xs font-bold tracking-widest uppercase border border-[#D4AF37]/30 backdrop-blur-md transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Explore Blueprints</span>
            </a>

            {/* Masterplan */}
            <Link
              href="/master-layout"
              className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/15 text-white/90 font-sans text-xs font-semibold tracking-wider border border-white/15 backdrop-blur-md transition-colors"
            >
              Master Layout →
            </Link>
          </motion.div>
        </div>

        {/* 4-Item Live Metric Bar at Hero Foot */}
        <div className="relative z-10 max-w-6xl mx-auto w-full mt-16 pt-8 border-t border-[#D4AF37]/25 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">21.03</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C8D6CF] font-light mt-1">
              Acres Master Sanctuary
            </span>
          </div>

          <div className="flex flex-col items-center md:border-l border-white/10">
            <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">19,750</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C8D6CF] font-light mt-1">
              Sq.Ft. Grand Clubhouse
            </span>
          </div>

          <div className="flex flex-col items-center md:border-l border-white/10">
            <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">84 × 27</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C8D6CF] font-light mt-1">
              Ft. Resort Lap Pool
            </span>
          </div>

          <div className="flex flex-col items-center md:border-l border-white/10">
            <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">3.05 m</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C8D6CF] font-light mt-1">
              Aluform Slab Heights
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTINUOUS LUXURY TICKER (Deep Emerald & Gold)
         ========================================================================= */}
      <LuxuryTicker />

      {/* =========================================================================
          2. THE ARCHITECTURAL NARRATIVE SECTION
         ========================================================================= */}
      <section className="relative z-20 py-24 md:py-36 bg-[#040E09] border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                01 / The Narrative
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] font-bold">
                Where Mutha&apos;s Waters Meet Pune&apos;s Next{" "}
                <span className="italic font-light text-[#D4AF37]">Growth Epicenter</span>.
              </h2>
              <p className="text-[#C8D6CF] text-base md:text-lg font-light leading-relaxed">
                Spread across 21.03 acres along the tranquil Mutha River at Vadgaon Khurd on Sinhgad Road, The Reserve by Kolte-Patil redefines elevated living in South-West Pune.
              </p>
              <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                Conceived as a low-density sanctuary, every home enjoys uninterrupted river breezes, sweeping views of the National Defence Academy (NDA) hills, and immediate connectivity to the upcoming Pune Ring Road.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/overview"
                  className="px-6 py-3 rounded-full bg-[#0E2E1D] hover:bg-[#D4AF37] hover:text-[#06160E] text-[#D4AF37] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Explore The Full Vision</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/gallery"
                  className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors"
                >
                  View High-Res Gallery
                </Link>
              </div>
            </div>

            {/* Right Pillars Column */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-5">
              
              {/* Card 1 */}
              <div className="p-6 md:p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/20 flex items-start gap-5 hover:border-[#D4AF37]/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37]">
                  <Waves className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white font-semibold mb-2">
                    Mutha Riverfront Frontage
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                    Direct access to an exclusive riverside promenade and lush green buffer, ensuring complete seclusion from city noise.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 md:p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/20 flex items-start gap-5 hover:border-[#D4AF37]/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white font-semibold mb-2">
                    Vastu & Micro-Climate Engineering
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                    Towers oriented East-West to harvest morning sunlight, reduce thermal absorption, and harness cross-directional hillside ventilation.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 md:p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/20 flex items-start gap-5 hover:border-[#D4AF37]/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#D4AF37]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white font-semibold mb-2">
                    Full Aluform Monolithic Structure
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                    Monolithic poured-concrete construction delivering seismic resilience, 3.05 m slab heights, seamless room finishes, and zero leakage risk.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. INTERACTIVE FLOOR PLANS SHOWCASE (Vyana Phase 1)
         ========================================================================= */}
      <section id="floor-plans-section" className="relative z-20 py-28 bg-[#06160E] border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
              02 / Architectural Blueprints
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight">
              Vyana 2 & 3 BHK <span className="italic font-light text-[#D4AF37]">Residences</span>
            </h2>
            <p className="mt-4 text-[#C8D6CF] text-sm md:text-base font-light leading-relaxed">
              MahaRERA registered configurations (PM1261012600748) in Towers T5, T6, and T7 with G+21 residential storeys, wide viewing decks, and zero dead space.
            </p>

            {/* Plan Switcher Tabs */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#081E13] border border-[#D4AF37]/30">
              <button
                onClick={() => setActivePlan("3BHK")}
                className={`px-8 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activePlan === "3BHK"
                    ? "bg-[#D4AF37] text-[#06160E] shadow-lg"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Vyana 3 BHK (1,016 Sq.Ft.)
              </button>
              <button
                onClick={() => setActivePlan("2BHK")}
                className={`px-8 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activePlan === "2BHK"
                    ? "bg-[#D4AF37] text-[#06160E] shadow-lg"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Vyana 2 BHK (791 Sq.Ft.)
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="bg-[#081E13] border border-[#D4AF37]/25 rounded-[2.5rem] p-6 md:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              {activePlan === "3BHK" ? (
                <motion.div
                  key="3bhk"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                >
                  {/* Left: High-Res Blueprint Image */}
                  <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 p-4 flex items-center justify-center">
                    <Image
                      src="/images/floor-plans/vyana-3bhk-floorplan.png"
                      alt="Vyana 3 BHK Floor Plan The Reserve Sinhgad Road Pune"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Right: Technical Specs & Room Dimensions */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                          Vyana Sector 1 • Towers T5, T6, T7
                        </span>
                        <span className="px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#06160E] font-bold text-xs uppercase tracking-wider">
                          1,016 Sq.Ft. RERA Carpet
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
                        3 BHK Grand Riverside Residence
                      </h3>
                      <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                        Designed with distinct public and private family zones, 3.05 m slab heights, a double-aspect living hall, and private viewing deck overlooking the Mutha River and NDA sunset ridges.
                      </p>

                      {/* Dimension List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-8">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Living & Dining:</span>
                          <span className="text-white font-mono">21&apos;0&quot; × 11&apos;6&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Master Bedroom Suite:</span>
                          <span className="text-white font-mono">13&apos;6&quot; × 11&apos;0&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Bedroom 02 (Guest):</span>
                          <span className="text-white font-mono">12&apos;0&quot; × 10&apos;6&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Bedroom 03 (Study/Kids):</span>
                          <span className="text-white font-mono">11&apos;0&quot; × 10&apos;0&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Kitchen & Dry Balcony:</span>
                          <span className="text-white font-mono">10&apos;6&quot; × 8&apos;0&quot; + 5&apos;6&quot; × 4&apos;0&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Panoramic River Deck:</span>
                          <span className="text-white font-mono">11&apos;6&quot; × 5&apos;0&quot;</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 items-center">
                      <button
                        onClick={() => setIsConciergeOpen(true)}
                        className="px-6 py-3.5 rounded-full bg-[#D4AF37] text-[#06160E] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
                      >
                        Request 3 BHK Pricing & Cost Sheet
                      </button>
                      <Link
                        href="/floor-plans"
                        className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors"
                      >
                        Full Architectural Specs →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="2bhk"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                >
                  {/* Left: High-Res Blueprint Image */}
                  <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 p-4 flex items-center justify-center">
                    <Image
                      src="/images/floor-plans/vyana-2bhk-floorplan.png"
                      alt="Vyana 2 BHK Floor Plan The Reserve Sinhgad Road Pune"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Right: Technical Specs & Room Dimensions */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                          Vyana Sector 1 • Towers T5, T6, T7
                        </span>
                        <span className="px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#06160E] font-bold text-xs uppercase tracking-wider">
                          791 Sq.Ft. RERA Carpet
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
                        2 BHK Space-Optimized Residence
                      </h3>
                      <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                        Engineered with 100% space efficiency, zero corridor wastage, separate dry balcony for utilities, and master bedroom with attached bathroom and large picture window.
                      </p>

                      {/* Dimension List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-8">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Living & Dining Room:</span>
                          <span className="text-white font-mono">18&apos;0&quot; × 11&apos;0&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Master Bedroom:</span>
                          <span className="text-white font-mono">12&apos;6&quot; × 10&apos;6&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Master Washroom:</span>
                          <span className="text-white font-mono">7&apos;6&quot; × 4&apos;6&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Bedroom 02:</span>
                          <span className="text-white font-mono">11&apos;0&quot; × 10&apos;0&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Kitchen & Dry Utility:</span>
                          <span className="text-white font-mono">9&apos;6&quot; × 7&apos;6&quot; + 5&apos;0&quot; × 4&apos;0&quot;</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[#D4AF37] font-semibold block">Private Viewing Balcony:</span>
                          <span className="text-white font-mono">10&apos;0&quot; × 4&apos;6&quot;</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 items-center">
                      <button
                        onClick={() => setIsConciergeOpen(true)}
                        className="px-6 py-3.5 rounded-full bg-[#D4AF37] text-[#06160E] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
                      >
                        Request 2 BHK Pricing & Cost Sheet
                      </button>
                      <Link
                        href="/floor-plans"
                        className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors"
                      >
                        Full Architectural Specs →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. THE PRIVILEGES & 19,750 SQ.FT. CLUBHOUSE SHOWCASE
         ========================================================================= */}
      <section className="relative z-20 py-28 bg-[#040E09] border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14">
            <div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-2">
                03 / The Privileges
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight">
                An Ecosystem of <span className="italic font-light text-[#D4AF37]">Rare Living</span>
              </h2>
            </div>
            <Link
              href="/amenities"
              className="mt-4 md:mt-0 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Explore All 25+ Amenities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 6 Curated High-Impact Amenity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "19,750 Sq.Ft. Grand Clubhouse",
                category: "Lifestyle Centerpiece",
                desc: "Contemporary tiered step-seating architecture, resident banquet lounge, private mini-theater, and indoor games arena.",
                img: "/images/gallery/clubhouse-step-seating.jpg",
              },
              {
                title: "84 × 27 Ft. Resort Lap Pool",
                category: "Aqua Sanctuary",
                desc: "Olympic-scale resort swimming pool, submerged aqua loungers, children's splash pool, and private cabana decks.",
                img: "/images/gallery/resort-swimming-pool.jpg",
              },
              {
                title: "Signature River & Hill Decks",
                category: "Scenic Living",
                desc: "Expansive private viewing balconies engineered for uninterrupted Mutha River breezes and NDA ridge sunsets.",
                img: "/images/gallery/interior-deck.jpg",
              },
              {
                title: "Master Bedroom Suites",
                category: "Private Luxury",
                desc: "Spacious master suites featuring dedicated wardrobe niches, glazed vitrified tiles, and designer Jaquar sanitaryware.",
                img: "/images/gallery/master-bedroom.jpg",
              },
              {
                title: "Central Landscaped Boulevard",
                category: "Lush Greenery",
                desc: "Arterial green spine connecting all residential sectors with vehicular-free walking trails and native flora.",
                img: "/images/gallery/central-boulevard.jpg",
              },
              {
                title: "Active Sports Turf & Courts",
                category: "Wellness & Play",
                desc: "Championship pickleball court, half-basketball court, dedicated fitness lawns, and children's nature playpark.",
                img: "/images/gallery/sports-turf.jpg",
              },
            ].map((amenity, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-[#081E13] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={amenity.img}
                    alt={amenity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081E13] via-[#081E13]/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#06160E]/80 backdrop-blur-md text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold border border-[#D4AF37]/30">
                    {amenity.category}
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="font-serif text-xl text-white font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {amenity.title}
                  </h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. 21-ACRE MASTERPLAN NAVIGATOR
         ========================================================================= */}
      <section className="relative z-20 py-28 bg-[#06160E] border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
              04 / Master Layout
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight">
              A 21.03-Acre Master <span className="italic font-light text-[#D4AF37]">Riverside Layout</span>
            </h2>
            <p className="mt-4 text-[#C8D6CF] text-sm md:text-base font-light leading-relaxed">
              Explore the sector breakdown, green zones, clubhouse position, and Vyana Phase 1 enclave along the Mutha River at Vadgaon Khurd, Sinhgad Road.
            </p>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden border border-[#D4AF37]/25 shadow-2xl bg-[#081E13]">
            <MasterplanNavigator />
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. COMPETITOR BENCHMARK (The Reserve vs Nanded City / Conventional Projects)
         ========================================================================= */}
      <section className="relative z-20 py-28 bg-[#040E09] border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
              05 / The Benchmark
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight">
              Why The Reserve <span className="italic font-light text-[#D4AF37]">Commands Sinhgad Road</span>
            </h2>
            <p className="mt-4 text-[#C8D6CF] text-sm md:text-base font-light leading-relaxed">
              Compare architectural density, natural riverfront access, clubhouse scale, and structural engineering against competing mega townships on Sinhgad Road.
            </p>
          </div>

          <div className="bg-[#081E13] border border-[#D4AF37]/25 rounded-[2.5rem] p-6 md:p-12 shadow-2xl">
            <CompetitorComparison />
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. STRATEGIC LOCATION & TRANSIT MATRIX
         ========================================================================= */}
      <section className="relative z-20 py-28 bg-[#06160E] border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Location Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                06 / Strategic Connectivity
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight">
                Connected to the City, <br />
                <span className="italic font-light text-[#D4AF37]">Secluded by Nature</span>.
              </h2>
              <p className="text-[#C8D6CF] text-sm md:text-base font-light leading-relaxed">
                Situated at Vadgaon Khurd near Nanded Fata on Sinhgad Road, The Reserve places you minutes from essential retail, schools, and major expressways while retaining pristine Mutha River tranquility.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white block">Project Coordinates & Site Address:</span>
                  <p className="text-white/70 font-light mt-1">
                    Survey Nos. 39/41/42/43/44/45/46/59, Vadgaon Khurd, Sinhgad Road, Pune - 411041
                  </p>
                  <span className="font-mono text-[#D4AF37] text-[11px] block mt-1">
                    GPS: 18.4622871, 73.8013712
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Google Maps Navigation 📍</span>
                </a>
              </div>
            </div>

            {/* Right Transit Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Upcoming Pune Ring Road", time: "2 Mins", desc: "Adjoining project boundary for seamless ring transit" },
                { label: "Nanded Fata / Nanded City", time: "3 Mins", desc: "Direct access to daily commercial & retail amenities" },
                { label: "Sinhgad Road Flyover", time: "5 Mins", desc: "Direct elevated corridor bypassing local traffic" },
                { label: "Mumbai-Bengaluru Bypass (NH 48)", time: "7 Mins", desc: "Expressway link to Mumbai, Hinjewadi & Bengaluru" },
                { label: "Swargate Metro Station", time: "15 Mins", desc: "Underground Metro Line connect to Central Pune" },
                { label: "Kothrud / Karve Road", time: "15 Mins", desc: "Direct connectivity via Rajaram Bridge & Warje" },
                { label: "Deccan Gymkhana / FC Road", time: "20 Mins", desc: "Pune's historic cultural and educational core" },
                { label: "Hinjewadi IT Park", time: "25 Mins", desc: "High-speed commute via Western Ring Road" },
              ].map((dest, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#081E13] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-xs">{dest.label}</span>
                    <span className="font-mono text-xs font-bold text-[#D4AF37] px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15">
                      {dest.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 font-light">{dest.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          8. THE KOLTE-PATIL DEVELOPER HERITAGE
         ========================================================================= */}
      <section className="relative z-20 py-24 bg-[#040E09] border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
          
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-3">
            07 / The Developer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mx-auto">
            Three Decades of Shaping <br />
            <span className="italic font-light text-[#D4AF37]">Pune&apos;s Architectural Skyline</span>
          </h2>
          <p className="mt-4 text-[#C8D6CF] text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Founded in 1991, Kolte-Patil Developers Ltd (BSE: 532924, NSE: KOLTEPATIL) is Pune&apos;s premier real estate company, with over 25 million sq.ft. of benchmark developments delivered across Pune, Mumbai, and Bengaluru.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
              <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">33+</span>
              <span className="text-[11px] uppercase tracking-wider text-white/70 block mt-1">Years of Trust</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
              <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">25M+</span>
              <span className="text-[11px] uppercase tracking-wider text-white/70 block mt-1">Sq.Ft. Delivered</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
              <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">50+</span>
              <span className="text-[11px] uppercase tracking-wider text-white/70 block mt-1">Landmarks</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
              <span className="font-serif text-3xl md:text-4xl text-[#D4AF37] font-bold">50,000+</span>
              <span className="text-[11px] uppercase tracking-wider text-white/70 block mt-1">Happy Families</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. VIP PRIVATE SITE VISIT & COST SHEET INQUIRY
         ========================================================================= */}
      <section className="relative z-20 py-28 bg-[#06160E] border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          
          <div className="rounded-[2.5rem] bg-gradient-to-b from-[#081E13] to-[#040E09] border border-[#D4AF37]/30 p-8 md:p-14 shadow-2xl">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-2">
                Priority Access
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight">
                Request Exclusive Cost Sheet & <br />
                <span className="italic font-light text-[#D4AF37]">Schedule Private Tour</span>
              </h2>
              <p className="mt-3 text-white/70 text-xs md:text-sm font-light">
                Register your interest to receive official MahaRERA verified floor plan PDFs, all-inclusive pricing breakdown, and exclusive launch privileges.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 px-6 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 max-w-md mx-auto">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-3" />
                <h4 className="font-serif text-2xl text-white font-bold mb-2">Inquiry Confirmed</h4>
                <p className="text-white/80 text-xs leading-relaxed">
                  Thank you! Our Kolte-Patil Relationship Concierge will connect with your verified cost sheet and invitation pass.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="max-w-2xl mx-auto flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  <select
                    value={leadForm.interest}
                    onChange={(e) => setLeadForm({ ...leadForm, interest: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#081E13] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Vyana 3 BHK (1,016 sq.ft.)">Vyana 3 BHK (1,016 Sq.Ft.)</option>
                    <option value="Vyana 2 BHK (791 sq.ft.)">Vyana 2 BHK (791 Sq.Ft.)</option>
                    <option value="VIP Site Visit Pass">VIP Site Visit Pass</option>
                    <option value="Complete Master Brochure PDF">Complete Master Brochure PDF</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer mt-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Transmitting to Concierge..." : "Request Official Cost Sheet & VIP Pass →"}
                </button>

                <p className="text-[10px] text-white/40 text-center font-light mt-1">
                  🔒 Strictly confidential. Your details are never shared. MahaRERA PM1261012600748.
                </p>
              </form>
            )}

            {/* Direct Connect Options */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-white/70">
              <a
                href="tel:+917744009295"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+91 77440 09295 (Sales Concierge)</span>
              </a>
              <a
                href="https://wa.me/917744009295?text=Hello%20Kolte%20Patil%20Sales%20Team%2C%20I%20am%20interested%20in%20The%20Reserve%20Sinhgad%20Road."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Instant WhatsApp Blueprint Dispatch</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
