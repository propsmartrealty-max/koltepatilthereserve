"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";

export default function RevealFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[100svh] -z-10 bg-[#0B2B1B] flex flex-col justify-end overflow-hidden">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="object-cover w-full h-full opacity-30 grayscale"
        >
          <source src="https://player.vimeo.com/external/394627252.hd.mp4?s=d00e57262ba627d3568853c89657f8cfec47fb21&profile_id=174" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B] via-[#0B2B1B]/95 to-[#0B2B1B]/40"></div>
      </div>

      <div className="relative z-20 w-full container mx-auto px-6 md:px-12 pb-12 pt-32 h-full flex flex-col justify-end">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl mb-2 tracking-widest uppercase text-white">The Reserve</h2>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37] mb-8 font-bold">By Kolte Patil</span>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-xs">
              India's most premium real estate digital experience. Luxury living redefined in the heart of Pune.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">Explore</h3>
            <ul className="space-y-4 font-light text-sm text-white/80">
              <li><Link href="/overview" className="hover:text-[#d4af37] transition-colors">The Narrative</Link></li>
              <li><Link href="/master-layout" className="hover:text-[#d4af37] transition-colors">Masterplan</Link></li>
              <li><Link href="/amenities" className="hover:text-[#d4af37] transition-colors">The Privileges</Link></li>
              <li><Link href="/floor-plans" className="hover:text-[#d4af37] transition-colors">Residences</Link></li>
              <li><Link href="/insights" className="hover:text-[#d4af37] transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Kolte Patil Universe */}
          <div className="flex flex-col">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">Kolte Patil Universe</h3>
            <ul className="space-y-4 font-light text-sm text-white/80">
              <li><a href="https://www.koltepatil.com/life-republic" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">Life Republic, Hinjewadi</a></li>
              <li><a href="https://www.koltepatil.com/24k" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">24K Luxury, Baner</a></li>
              <li><a href="https://www.koltepatil.com/ivy-estate" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">Ivy Estate, Wagholi</a></li>
              <li><a href="https://www.koltepatil.com/universe" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">Universe, Hinjewadi</a></li>
              <li><a href="https://www.koltepatil.com" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-white transition-colors">Explore All Projects →</a></li>
            </ul>
          </div>

          {/* Contact & MahaRERA QR */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <span className="font-serif text-xl text-white block mb-2">Connect</span>
            <ul className="space-y-1 font-sans text-xs text-white/60 mb-4">
              <li>Vadgaon Khurd, Sinhgad Road</li>
              <li>Pune, Maharashtra 411041</li>
              <li className="text-[#d4af37] font-medium font-mono text-[11px]">RERA: PM1261012600748</li>
              <li className="mt-2"><a href="https://wa.me/917744009295?text=I%20am%20interested%20in%20The%20Reserve%20by%20Kolte%20Patil" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors font-medium">+91 77440 09295 (WhatsApp)</a></li>
            </ul>
            
            {/* MahaRERA Official QR Badge */}
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-xl border border-white/10">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                <Image 
                  src="/images/qr/maharera-qr.png" 
                  alt="MahaRERA PM1261012600748 QR"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <span className="text-[8px] uppercase tracking-wider text-[#d4af37] font-bold block">Scan MahaRERA</span>
                <span className="text-[8px] text-white/50 block font-mono">PM1261012600748</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">Exclusive Access</h3>
            <p className="text-sm text-white/60 font-light mb-6">
              Register your interest to receive exclusive details and floor plans.
            </p>
            <Link href="/contact" className="w-full">
              <Button variant="golden" className="rounded-none px-8 w-full bg-[#d4af37] text-[#0B2B1B] hover:bg-white hover:text-[#0B2B1B]">
                Enquire Now
              </Button>
            </Link>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pb-6 text-[8px] text-white/30 leading-relaxed max-w-5xl mx-auto text-center">
          DISCLAIMER: The project is registered under the name &lsquo;Vyana Phase-I-T5, T6, T7&rsquo;, under MAHARERA Registration No: PM1261012600748, details of which are available at maharera.maharashtra.gov.in. &ldquo;The Reserve&rdquo; is the marketing name of the larger layout. Site: Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road, Pune - 411041.
        </div>

        {/* Legal */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} The Reserve by Kolte Patil. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#fd8e03] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#fd8e03] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
