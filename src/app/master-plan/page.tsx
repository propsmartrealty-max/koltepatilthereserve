import RevealFooter from "@/components/layout/RevealFooter";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "21.03-Acre Master Plan & Master Layout | The Reserve by Kolte Patil",
  description: "Explore the 21.03-acre master plan of The Reserve by Kolte Patil on Sinhgad Road, Pune. Features 6 distinct architectural zones, riverside green buffers, and Vyana Towers T5, T6, T7.",
};

const masterZones = [
  { num: "01", title: "Riverfront Green Buffer", desc: "Linear eco-park & tranquil walking promenade along the Mutha River." },
  { num: "02", title: "Central Landscaped Boulevard", desc: "Arterial green spine connecting all residential tower drop-offs." },
  { num: "03", title: "19,750 Sq.Ft. Clubhouse & Pools", desc: "Step seating amphitheater, 84x27 ft. adult pool & 14x18 ft. kids pool." },
  { num: "04", title: "Vyana Towers (T5, T6, T7)", desc: "Phase 1 residential enclaves with G+21 floors and 487 luxury units." },
  { num: "05", title: "Active Sports & Recreation", desc: "Pickleball court, sports turf, cricket net pitch, and jogging loop." },
  { num: "06", title: "Multi-Level EV Parking", desc: "B1+B2+Stilt parking with 30% EV-charging enabled bays." },
];

export default function MasterPlanPage() {
  return (
    <div className="relative bg-[#0B2B1B] text-white min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-[#0B2B1B]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-10" />
      
      <main className="flex-1 container mx-auto px-6 max-w-7xl pt-32 pb-24 relative z-20">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs font-bold mb-4 block">
            21.03-Acre Master Development
          </span>
          <h1 className="font-serif text-4xl md:text-7xl font-light text-white uppercase mb-6">
            Master Plan & Layout
          </h1>
          <p className="text-white/70 font-light text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Where the Mutha River meets thoughtful architectural planning. Spread across 21.03 acres with 6.95 acres dedicated to Vyana Phase 1 (Towers T5, T6, T7).
          </p>
        </div>

        {/* Master Plan High-Res Blueprint */}
        <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl mb-16 group bg-[#05140D]">
          <Image 
            src="/images/overview/21-acres-masterplan.jpg"
            alt="The Reserve 21.03 Acre Master Plan Sinhgad Road"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">MahaRERA: PM1261012600748</p>
              <p className="text-white text-sm font-medium">Phase 1: Vyana Towers T5, T6, T7 | 487 Total Residences</p>
            </div>
            <Link href="/master-layout" className="px-6 py-3 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shrink-0">
              View 3D Digital Twin Model →
            </Link>
          </div>
        </div>

        {/* 6 Masterplan Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {masterZones.map((zone, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl hover:border-[#d4af37]/40 transition-colors">
              <span className="text-2xl font-serif text-[#d4af37] block mb-2">{zone.num}</span>
              <h3 className="font-serif text-xl text-white mb-2">{zone.title}</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">{zone.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-10 rounded-3xl bg-[#05140D] border border-[#d4af37]/30 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-1">Architectural Blueprints</span>
            <h3 className="font-serif text-2xl text-white">Explore Detailed 2 & 3 BHK Floor Plans</h3>
            <p className="text-white/60 text-xs font-light mt-1">View room-by-room metric measurements, Vastu alignment, and all-inclusive cost breakdown.</p>
          </div>
          <Link href="/floor-plans" className="px-8 py-4 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shrink-0 shadow-lg">
            View Floor Plans →
          </Link>
        </div>
      </main>
    </div>
  );
}
