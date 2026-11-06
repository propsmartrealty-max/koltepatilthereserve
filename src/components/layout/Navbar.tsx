"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useConcierge } from "@/context/ConciergeContext";
import { Phone, Calendar, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { setIsConciergeOpen } = useConcierge();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "/overview" },
    { name: "Floor Plans", href: "/kolte-patil-the-reserve-floor-plans" },
    { name: "Pricing", href: "/kolte-patil-the-reserve-price" },
    { name: "Towers", href: "/kolte-patil-the-reserve-towers" },
    { name: "Amenities", href: "/kolte-patil-the-reserve-amenities" },
    { name: "Location", href: "/kolte-patil-the-reserve-location" },
    { name: "MahaRERA", href: "/kolte-patil-the-reserve-rera" },
    { name: "Brochure", href: "/kolte-patil-the-reserve-brochure" },
  ];

  return (
    <>
      {/* FLOATING ARCHITECTURAL NAVBAR */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <nav className="pointer-events-auto w-full max-w-7xl mx-auto flex items-center justify-between py-3 px-5 md:px-8 rounded-full bg-[#06160E]/90 backdrop-blur-xl border border-[#D4AF37]/25 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300">
          
          {/* LOGO SECTION */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 group shrink-0"
          >
            {/* Kolte Patil Logo */}
            <div className="relative h-9 w-20 md:h-10 md:w-24">
              <Image
                src="/kolte-patil-logo.png"
                alt="Kolte-Patil Developers Ltd"
                fill
                sizes="100px"
                priority
                className="object-contain object-left filter brightness-110"
              />
            </div>

            {/* Gold Divider */}
            <div className="h-7 w-[1.5px] bg-gradient-to-b from-[#D4AF37] to-[#8C701B] opacity-70" />

            {/* The Reserve Brand Text */}
            <div className="flex flex-col">
              <span className="font-serif text-base md:text-lg tracking-[0.2em] uppercase font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                THE RESERVE
              </span>
              <span className="font-sans text-[7px] md:text-[8px] tracking-[0.25em] font-semibold uppercase text-[#D4AF37]">
                BY KOLTE PATIL • SINHGAD RD
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-xs uppercase tracking-[0.18em] font-medium text-white/80 hover:text-[#D4AF37] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Call */}
            <a
              href="tel:+917744009295"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/90 text-xs font-mono tracking-wider border border-white/10 transition-colors"
              title="Call Sales Concierge"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+91 77440 09295</span>
            </a>

            {/* Enquire CTA */}
            <button
              onClick={() => setIsConciergeOpen(true)}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-[#D4AF37]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* FULL SCREEN ARCHITECTURAL MEGA MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#06160E]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-28 md:p-16 overflow-y-auto"
          >
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Menu Links */}
              <div className="flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold mb-2">
                  Directory
                </span>
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-2xl md:text-4xl text-white hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-between py-2 border-b border-white/5 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-xs text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                        0{idx + 1}
                      </span>
                      <span>{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                ))}
              </div>

              {/* Sidebar Info & RERA Credential */}
              <div className="flex flex-col gap-6 md:pl-10 md:border-l border-white/10">
                <div>
                  <span className="font-serif text-xl text-white font-bold block mb-1">
                    The Reserve by Kolte-Patil
                  </span>
                  <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
                    A 21.03-acre master riverside sanctuary along the Mutha River at Vadgaon Khurd, Sinhgad Road, Pune.
                  </p>
                </div>

                <Link
                  href="/kolte-patil-the-reserve-rera"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors flex flex-col gap-2 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                      MahaRERA Registration
                    </span>
                    <span className="text-[10px] text-[#D4AF37] group-hover:underline">Verify Details →</span>
                  </div>
                  <span className="font-mono text-sm text-white font-bold tracking-wider">
                    PM1261012600748
                  </span>
                  <span className="text-[10px] text-white/50">
                    Vyana Phase 1 (Towers T5, T6, T7) • maharera.maharashtra.gov.in
                  </span>
                </Link>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="https://wa.me/917744009295?text=Hello%20Kolte%20Patil%20Sales%20Team%2C%20I%20am%20interested%20in%20The%20Reserve%20Sinhgad%20Road.%20Please%20share%20brochure%20and%20pricing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-slate-950 font-sans text-xs font-bold uppercase tracking-wider text-center"
                  >
                    WhatsApp VIP
                  </a>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsConciergeOpen(true);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#D4AF37] text-[#06160E] font-sans text-xs font-bold uppercase tracking-wider text-center cursor-pointer"
                  >
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Credits */}
            <div className="max-w-5xl mx-auto w-full pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 font-light">
              <span>© {new Date().getFullYear()} The Reserve by Kolte-Patil Developers Ltd.</span>
              <span className="mt-2 sm:mt-0 font-mono text-[11px] text-[#D4AF37]/80">
                GPS: 18.4622871, 73.8013712
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
