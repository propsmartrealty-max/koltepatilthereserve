"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, Phone } from "lucide-react";
import { useConcierge } from "@/context/ConciergeContext";

export default function LuxuryConciergePill() {
  const { setIsConciergeOpen } = useConcierge();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal after 200px scroll for seamless appearance
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/917744009295?text=Hello%20Kolte%20Patil%20Sales%20Team%2C%20I%20am%20interested%20in%20The%20Reserve%20Sinhgad%20Road.%20Please%20share%20Vyana%202%20%26%203%20BHK%20pricing%2C%20floor%20plans%2C%20and%20schedule%20a%20site%20visit.";

  return (
    <>
      {/* DESKTOP FLOATING CONCIERGE PILL */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2 p-1.5 rounded-full bg-[#06160E]/90 backdrop-blur-xl border border-[#D4AF37]/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          >
            {/* WhatsApp VIP Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on WhatsApp"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-slate-950 font-sans text-xs font-semibold tracking-wider transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>WhatsApp VIP</span>
            </a>

            {/* Direct Call Button */}
            <a
              href="tel:+917744009295"
              aria-label="Call Sales Concierge"
              className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/90 text-xs font-medium tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono text-[11px]">+91 77440 09295</span>
            </a>

            {/* Schedule Visit & Pricing Button */}
            <button
              onClick={() => setIsConciergeOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>Book Visit & Cost Sheet</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE FIXED BOTTOM DOCK (Ultra-clean, zero clutter) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#06160E]/95 backdrop-blur-xl border-t border-[#D4AF37]/25 px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          {/* Call */}
          <a
            href="tel:+917744009295"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-xs font-semibold tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#25D366] text-slate-950 font-sans text-xs font-bold tracking-wider"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Enquire */}
          <button
            onClick={() => setIsConciergeOpen(true)}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#06160E] font-sans text-xs font-bold tracking-wider uppercase cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </>
  );
}
