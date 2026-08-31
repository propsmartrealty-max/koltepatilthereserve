
import RevealFooter from "@/components/layout/RevealFooter";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Developer | Kolte-Patil Developers Ltd",
  description: "Learn about the 30+ year legacy, excellence, and trust behind Kolte-Patil Developers Ltd. Makers of The Reserve, Life Republic, and 24K Luxury.",
};

export default function DeveloperPage() {
  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-white">
      <main className="flex-1 w-full flex flex-col">
        
        {/* Hero */}
        <section className="pt-40 pb-24 px-6 md:px-12 bg-[#05140D] border-b border-[#d4af37]/20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg"
              alt="Kolte Patil Legacy"
              fill
              className="object-cover opacity-20 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05140D]/90 via-[#05140D]/70 to-[#05140D]"></div>
          </div>

          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <span className="text-[#d4af37] tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-6 block">
              The Developer Heritage
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-white uppercase tracking-tight">
              Creation, <span className="italic font-light text-[#d4af37]">Not Construction.</span>
            </h1>
            <p className="text-white/70 font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Founded over three decades ago, Kolte-Patil Developers Ltd. (NSE: KOLTEPATIL, BSE: 532924) is Pune&apos;s foremost real estate brand. Driven by our core philosophy of &apos;Creation, not construction&apos;, we have shaped over 25 million sq. ft. of landmark landmarks across Pune, Mumbai, and Bengaluru.
            </p>
          </div>
        </section>
        
        {/* Stats Grid */}
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="border border-[#d4af37]/20 p-10 bg-slate-900/60 rounded-3xl shadow-xl">
                <div className="font-serif text-6xl text-[#d4af37] mb-3">30+</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/60 font-bold">Years of Excellence</div>
              </div>
              <div className="border border-[#d4af37]/20 p-10 bg-slate-900/60 rounded-3xl shadow-xl">
                <div className="font-serif text-6xl text-[#d4af37] mb-3">50+</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/60 font-bold">Delivered Projects</div>
              </div>
              <div className="border border-[#d4af37]/20 p-10 bg-slate-900/60 rounded-3xl shadow-xl">
                <div className="font-serif text-6xl text-[#d4af37] mb-3">25M+</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/60 font-bold">Sq.Ft Developed</div>
              </div>
              <div className="border border-[#d4af37]/20 p-10 bg-slate-900/60 rounded-3xl shadow-xl">
                <div className="font-serif text-6xl text-[#d4af37] mb-3">1.5L+</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/60 font-bold">Happy Residents</div>
              </div>
            </div>

            {/* Landmark Portfolio */}
            <div className="mt-24 max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs font-bold mb-3 block">Signature Portfolio</span>
                <h2 className="font-serif text-3xl md:text-5xl text-white">Landmark Townships & Luxury Enclaves</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-[#d4af37]/40 transition-colors">
                  <span className="text-[10px] text-[#d4af37] uppercase tracking-widest block mb-2 font-bold">400+ Acres Township</span>
                  <h3 className="font-serif text-2xl text-white mb-2">Life Republic</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">Hinjewadi, Pune. One of Western India&apos;s most celebrated integrated smart townships.</p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-[#d4af37]/40 transition-colors">
                  <span className="text-[10px] text-[#d4af37] uppercase tracking-widest block mb-2 font-bold">Signature Luxury</span>
                  <h3 className="font-serif text-2xl text-white mb-2">24K Luxury Series</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">Baner & Bavdhan. Award-winning ultra-luxury gated residences setting global benchmarks.</p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-[#d4af37]/40 transition-colors">
                  <span className="text-[10px] text-[#d4af37] uppercase tracking-widest block mb-2 font-bold">Riverside Sanctuary</span>
                  <h3 className="font-serif text-2xl text-white mb-2">The Reserve</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">Sinhgad Road, Pune. 21.03 acres master development along the riverfront at Vadgaon Khurd.</p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Link href="/contact" className="px-10 py-5 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full hover:bg-white transition-colors inline-block shadow-2xl">
                  Connect with Developer Office
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <RevealFooter />
    </div>
  );
}
