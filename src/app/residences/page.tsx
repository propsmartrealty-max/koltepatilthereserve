import RevealFooter from "@/components/layout/RevealFooter";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Master Layout & Floor Plans | The Reserve by Kolte Patil",
  description: "Explore the expansive 2 & 3 BHK luxury residences (791 & 1,016 sq.ft. carpet area) at Vyana, The Reserve by Kolte Patil on Sinhgad Road, Pune.",
};

export default function ResidencesPage() {
  const residences = [
    {
      id: "2bhk",
      type: "Vyana Phase 1 — Towers T5, T6, T7",
      title: "Vyana 2 BHK Riverside Residence",
      carpetArea: "791 sq. ft.",
      towerInfo: "21 Storeys | 8 Units Per Floor | 3 High-Speed Elevators",
      desc: "An intelligently engineered 2-bedroom home built with monolithic Aluform construction. Features a distinct entrance foyer, open living-dining space, dedicated dry utility balcony, and expansive master bedroom suite with attached bath.",
      features: [
        "791 sq. ft. RERA Carpet Area",
        "Full Aluform Monolithic Build",
        "3.05 m Slab-to-Slab Height (~2.9 m Clear)",
        "Kajaria Glazed Vitrified Tiles",
        "Jaquar CP & Sanitary Fittings",
        "Digital Door Lock & Video Door Phone",
        "Dedicated Utility Balcony",
        "1 Covered Parking with EV Provision"
      ],
      image: "/images/floor-plans/vyana-2bhk-floorplan.png"
    },
    {
      id: "3bhk",
      type: "Vyana Phase 1 — Towers T5, T6, T7",
      title: "Vyana 3 BHK Luxury Residence",
      carpetArea: "1,016 sq. ft.",
      towerInfo: "21 Storeys | 8 Units Per Floor | 3 High-Speed Elevators",
      desc: "The flagship 3-bedroom luxury layout offering unobstructed panoramas of the Mutha River and NDA Hills. Includes a grand rectangular living-dining hall, private viewing deck, luxurious master suite with wardrobe niche, and flexible third bedroom for study or guests.",
      features: [
        "1,016 sq. ft. RERA Carpet Area",
        "Expansive River & Hill Facing Deck",
        "Master Suite with En-Suite Bath",
        "Dedicated Dining Foyer",
        "3.05 m High Ceilings for Natural Airflow",
        "Jaquar Premium Series Sanitaryware",
        "Concealed Copper Wiring with AC Points",
        "1 or 2 Parking Slots with EV Provision"
      ],
      image: "/images/floor-plans/vyana-3bhk-floorplan.png"
    }
  ];

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-white">
      <main className="flex-1 w-full flex flex-col">
        
        {/* Page Header */}
        <section className="pt-40 pb-24 px-6 md:px-12 bg-[#05140D] text-white border-b border-[#d4af37]/20 relative overflow-hidden">
          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <span className="text-[#d4af37] tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold mb-6 block">
              Master Layout & Floor Plans
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight uppercase tracking-tight">
              Spaces Engineered <br />
              <span className="italic font-light text-[#d4af37]">for Living Excellence.</span>
            </h1>
            <p className="max-w-2xl text-white/70 font-light text-lg mx-auto leading-relaxed">
              Every home at The Reserve is engineered with precision master layout and floor plans. Discover our collection of 2 & 3 BHK luxury riverside residences (791 & 1,016 sq.ft. carpet area) in Vyana Phase 1 on Sinhgad Road.
            </p>
          </div>
        </section>

        {/* Master Layout Architectural Zones Overview */}
        <section className="py-20 bg-slate-900/40 border-b border-white/5">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-[#d4af37] tracking-[0.3em] uppercase text-xs font-bold mb-2 block">21.03-Acre Masterplan</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white">Architectural Zoning & Flow</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/10">
                <span className="text-[#d4af37] text-sm font-bold block mb-2">Zone 01</span>
                <h3 className="font-serif text-lg text-white mb-2">Riverfront Promenade</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">Dedicated green buffer along the Mutha River with pedestrian nature walkways.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/10">
                <span className="text-[#d4af37] text-sm font-bold block mb-2">Zone 02</span>
                <h3 className="font-serif text-lg text-white mb-2">Central Boulevard</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">Tree-lined arterial boulevard providing smooth transit and grand arrival lobbies.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/10">
                <span className="text-[#d4af37] text-sm font-bold block mb-2">Zone 03</span>
                <h3 className="font-serif text-lg text-white mb-2">19,750 Sq.Ft. Club</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">Contemporary step seating architecture with 84x27 ft. pool & fitness facilities.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/10">
                <span className="text-[#d4af37] text-sm font-bold block mb-2">Zone 04</span>
                <h3 className="font-serif text-lg text-white mb-2">Vyana Towers (T5-T7)</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">Optimized tower spacing ensuring maximum wind flow and unobstructed hill/river views.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Residences Detailed Listing */}
        <section className="py-32">
          <div className="container mx-auto px-6 md:px-12 flex flex-col gap-32">
            {residences.map((res, index) => (
              <div key={res.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
                
                {/* Image side */}
                <div className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] rounded-3xl overflow-hidden border border-[#d4af37]/20 shadow-2xl group">
                  <Image 
                    src={res.image} 
                    alt={res.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-[#d4af37] font-bold uppercase tracking-wider">
                    {res.carpetArea} RERA Carpet
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <span className="text-[#d4af37] tracking-[0.2em] uppercase text-xs font-bold mb-3">{res.type}</span>
                  <h2 className="font-serif text-3xl md:text-5xl text-white mb-3">{res.title}</h2>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-6 font-mono">{res.towerInfo}</p>
                  
                  <p className="text-white/70 font-light text-base md:text-lg mb-8 leading-relaxed">
                    {res.desc}
                  </p>
                  
                  <div className="mb-10">
                    <h3 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-4">Detailed Specifications & Floor Highlights</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {res.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/80 font-light text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mr-3 shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/floor-plans" className="px-8 py-4 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-lg">
                      View Floor Plan Blueprint
                    </Link>
                    <Link href="/contact" className="px-8 py-4 border border-[#d4af37] text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#d4af37] hover:text-slate-950 transition-colors">
                      Enquire for Pricing
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}
