
import RevealFooter from "@/components/layout/RevealFooter";
import Image from "next/image";

export const metadata = {
  title: "Construction Updates & Milestone Tracking | The Reserve by Kolte Patil",
  description: "Track the real-time construction progress and master layout engineering of Vyana Towers T5, T6, T7 at The Reserve, Sinhgad Road, Pune.",
};

export default function UpdatesPage() {
  const updates = [
    { 
      date: "Phase 1 Milestone — Q3 2026", 
      status: "Towers T5, T6 & T7: Substructure excavation, RCC raft foundations, and monolithic Aluform setup progressing per MahaRERA PM1261012600748 timeline.", 
      image: "/images/gallery/vyana-towers.jpg" 
    },
    { 
      date: "Master Infrastructure — Q2 2026", 
      status: "21.03-Acre Master Layout: Central landscaped boulevard access road, perimeter boundary, and sample experience center completed at Vadgaon Khurd.", 
      image: "/images/overview/21-acres-masterplan.jpg" 
    }
  ];

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-white">
      <main className="flex-1 w-full flex flex-col">
        <section className="pt-40 pb-20 px-6 md:px-12 bg-[#05140D] border-b border-[#d4af37]/20">
          <div className="container mx-auto text-center max-w-4xl">
            <span className="text-[#d4af37] tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-4 block">
              MahaRERA PM1261012600748 Tracking
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight uppercase tracking-tight text-white">
              Construction Updates
            </h1>
            <p className="max-w-2xl mx-auto text-white/70 font-light text-lg leading-relaxed">
              Transparency at every step. Track the real-time execution of the 21.03-acre master layout and Vyana residential towers on Sinhgad Road.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            {updates.map((update, i) => (
              <div key={i} className="mb-24 last:mb-0 p-8 rounded-3xl bg-slate-900/50 border border-white/10 shadow-xl">
                <span className="text-[#d4af37] tracking-widest uppercase text-xs font-bold mb-4 block">{update.date}</span>
                <p className="text-xl font-light text-white mb-8 leading-relaxed">{update.status}</p>
                <div className="w-full h-[400px] relative rounded-2xl overflow-hidden border border-white/5">
                  <Image 
                    src={update.image} 
                    alt={update.date}
                    fill
                    sizes="(max-width: 768px) 100vw, 75vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
