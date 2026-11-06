"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";
import { useConcierge } from "@/context/ConciergeContext";

export default function RevealFooter() {
  const { setIsConciergeOpen } = useConcierge();

  const googleMapsUrl =
    "https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0";

  return (
    <footer className="relative w-full bg-[#040E09] border-t border-[#D4AF37]/25 text-white z-20 overflow-hidden">
      
      {/* Soft Ambient Light Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20 pb-16">
        
        {/* TOP BRAND & NEWSLETTER STRIP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-center">
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative h-12 w-28 shrink-0">
              <Image
                src="/kolte-patil-logo.png"
                alt="Kolte-Patil Developers Ltd"
                fill
                sizes="120px"
                className="object-contain object-left filter brightness-110"
              />
            </div>
            <div className="sm:border-l border-white/15 sm:pl-6">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase font-bold text-white block">
                THE RESERVE
              </span>
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                Vyana Sector 1 • Sinhgad Road, Pune
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setIsConciergeOpen(true)}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase hover:from-white hover:to-white transition-all duration-300 shadow-lg cursor-pointer text-center"
            >
              Request Cost Sheet & Blueprints
            </button>
            <a
              href="https://wa.me/917744009295?text=Hello%20Kolte%20Patil%20Sales%20Team%2C%20I%20am%20interested%20in%20The%20Reserve%20Sinhgad%20Road."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-[#25D366] text-white hover:text-slate-950 font-sans text-xs font-semibold tracking-wider border border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>

        {/* MAIN MULTI-COLUMN DIRECTORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/10 text-xs">
          
          {/* Col 1: About Project */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              The Sanctuary
            </span>
            <p className="text-white/70 font-light leading-relaxed">
              A 21.03-acre masterplanned riverside development along the Mutha River at Vadgaon Khurd, Sinhgad Road, Pune. Featuring 2 & 3 BHK residences with 19,750 sq.ft. clubhouse and panoramic NDA hill views.
            </p>
            <div className="flex items-center gap-2 text-[#D4AF37] mt-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold text-[11px]">IGBC Green Pre-Certified</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              Explore
            </span>
            <ul className="space-y-2.5 font-light text-white/75">
              <li><Link href="/overview" className="hover:text-[#D4AF37] transition-colors">The Narrative & Vision</Link></li>
              <li><Link href="/master-layout" className="hover:text-[#D4AF37] transition-colors">21-Acre Master Layout</Link></li>
              <li><Link href="/floor-plans" className="hover:text-[#D4AF37] transition-colors">Vyana 2 & 3 BHK Blueprints</Link></li>
              <li><Link href="/amenities" className="hover:text-[#D4AF37] transition-colors">The 19,750 Sq.Ft. Clubhouse</Link></li>
              <li><Link href="/the-club" className="hover:text-[#D4AF37] transition-colors">The Club Privileges</Link></li>
              <li><Link href="/specifications" className="hover:text-[#D4AF37] transition-colors">Architectural Specifications</Link></li>
              <li><Link href="/gallery" className="hover:text-[#D4AF37] transition-colors">Visual Gallery</Link></li>
            </ul>
          </div>

          {/* Col 3: Micro-Market & Location */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              Connectivity
            </span>
            <ul className="space-y-2.5 font-light text-white/75">
              <li><Link href="/location" className="hover:text-[#D4AF37] transition-colors">Location Overview</Link></li>
              <li><Link href="/location/nanded-fata" className="hover:text-[#D4AF37] transition-colors">Nanded Fata (3 Mins)</Link></li>
              <li><Link href="/location/swargate" className="hover:text-[#D4AF37] transition-colors">Swargate Metro (15 Mins)</Link></li>
              <li><Link href="/location/kothrud" className="hover:text-[#D4AF37] transition-colors">Kothrud Corridor (15 Mins)</Link></li>
              <li><Link href="/location/pune-ring-road" className="hover:text-[#D4AF37] transition-colors">Upcoming Ring Road Access</Link></li>
              <li><Link href="/compare/the-reserve-vs-nanded-city-pune" className="hover:text-[#D4AF37] transition-colors">The Reserve vs Nanded City</Link></li>
            </ul>
          </div>

          {/* Col 4: Kolte-Patil Universe */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              Kolte-Patil Universe
            </span>
            <ul className="space-y-2.5 font-light text-white/75">
              <li><a href="https://www.koltepatil.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">Corporate Portal <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://www.koltepatil.com/life-republic" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Life Republic, Hinjewadi</a></li>
              <li><a href="https://www.koltepatil.com/24k" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">24K Luxury, Baner</a></li>
              <li><a href="https://www.koltepatil.com/ivy-estate" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Ivy Estate, Wagholi</a></li>
              <li><Link href="/developer" className="hover:text-[#D4AF37] transition-colors">3 Decades of Excellence</Link></li>
            </ul>
          </div>

          {/* Col 5: MahaRERA Credential & QR */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              MahaRERA Credential
            </span>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white p-1 shrink-0">
                <Image
                  src="/images/qr/maharera-qr.png"
                  alt="MahaRERA PM1261012600748 QR Code"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  MahaRERA Reg.
                </span>
                <span className="font-mono text-xs text-white font-bold tracking-wider mt-0.5">
                  PM1261012600748
                </span>
                <a
                  href="https://maharera.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] text-white/50 hover:text-white underline mt-1"
                >
                  Verify on MahaRERA →
                </a>
              </div>
            </div>

            {/* Sales Office Address */}
            <div className="text-[11px] text-white/70 font-light flex flex-col gap-1.5 pt-1">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Sales Experience Centre
              </span>
              <p>Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road, Pune - 411041</p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline font-medium text-[11px] flex items-center gap-1 mt-1"
              >
                Open Google Maps Navigation 📍
              </a>
            </div>
          </div>

        </div>

        {/* LEGAL DISCLAIMER */}
        <div className="py-8 text-[9px] text-white/40 leading-relaxed max-w-5xl mx-auto text-center font-light border-b border-white/10">
          DISCLAIMER: The project is registered under MahaRERA as &lsquo;Vyana Phase-I-T5, T6, T7&rsquo; under Registration No: PM1261012600748, details available at maharera.maharashtra.gov.in. &ldquo;The Reserve&rdquo; is the marketing identity for the larger 21.03-acre master layout. All images, renders, maps, floor plans, and amenities depicted are artistic impressions and indicative for illustrative purposes only. The developer reserves the right to alter specifications, layouts, or amenities in compliance with statutory approvals.
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL LINKS */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-white/50 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} The Reserve by Kolte-Patil Developers Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Use</Link>
            <Link href="/faq" className="hover:text-[#D4AF37] transition-colors">FAQs</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
