import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { 
  Building2, 
  ShieldCheck, 
  Compass, 
  Maximize2, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Eye,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Towers | Tower T5, T6, T7 Elevation & Layouts",
  description: "Explore the architectural breakdown of Towers T5, T6, and T7 at Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. G+21 floors, 3.05 m slab heights, 3 elevators per tower, and panoramic river views.",
  keywords: [
    "Kolte Patil The Reserve Towers",
    "The Reserve Tower T5",
    "The Reserve Tower T6",
    "The Reserve Tower T7",
    "Vyana Towers Sinhgad Road",
    "The Reserve Floor-Wise Layouts",
    "MahaRERA PM1261012600748 Towers"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/towers",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/towers",
      "x-default": "https://thereserve.koltepatil.digital/towers",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Towers | Tower T5, T6, T7 Architectural Guide",
    description: "Detailed tower layouts, floor rise, orientation, and views for Towers T5, T6, and T7 at The Reserve by Kolte Patil, Sinhgad Road, Pune.",
    url: "https://thereserve.koltepatil.digital/towers",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "Kolte Patil The Reserve Towers T5 T6 T7",
      },
    ],
  },
};

export default function TowersPage() {
  const towersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "The Reserve by Kolte Patil Towers T5, T6, T7 Architectural Guide",
    "description": "Floor-by-floor tower specifications, elevators, slab heights, and orientations for Vyana Phase 1 on Sinhgad Road, Pune.",
    "url": "https://thereserve.koltepatil.digital/towers"
  };

  const towers = [
    {
      name: "Tower T5",
      title: "The Sunrise Tower",
      orientation: "East-Facing Mutha River & Valley Vistas",
      floors: "2 Basements + 1 Stilt + 21 Residential Floors",
      units: "2 & 3 BHK Luxury Residences (791 & 1,016 sq.ft.)",
      elevators: "2 High-Speed Passenger Lifts + 1 Dedicated Stretcher Lift",
      highlight: "Unobstructed sunrise views over the Mutha riverfront promenade with direct central boulevard access."
    },
    {
      name: "Tower T6",
      title: "The Boulevard Central",
      orientation: "Central Landscaped Promenade & Pool Vistas",
      floors: "2 Basements + 1 Stilt + 21 Residential Floors",
      units: "2 & 3 BHK Luxury Residences (791 & 1,016 sq.ft.)",
      elevators: "2 High-Speed Passenger Lifts + 1 Dedicated Stretcher Lift",
      highlight: "Closest proximity to the 19,750 sq.ft. clubhouse, amphitheater step seating, and 84-ft resort pool."
    },
    {
      name: "Tower T7",
      title: "The Riverfront Crown",
      orientation: "Riverfront & Panoramic NDA Hill Vistas",
      floors: "2 Basements + 1 Stilt + 21 Residential Floors",
      units: "Exclusive 3 BHK Grand Sanctuaries (1,016 sq.ft.) & Corner Units",
      elevators: "2 High-Speed Passenger Lifts + 1 Dedicated Stretcher Lift",
      highlight: "Most private tower in Phase 1 with corner balcony decks capturing unblocked mountain and water views."
    }
  ];

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] min-h-screen">
      <Script
        id="towers-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(towersSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/vyana-towers.jpg"
            alt="The Reserve High-Rise Towers"
            fill
            sizes="100vw"
            className="object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06160E] via-[#06160E]/80 to-[#06160E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 mb-6 shadow-md">
            <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Vyana Phase 1 • 3 High-Rise Landmarks
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
            Towers T5, T6, and T7
            <span className="block text-[#D4AF37] mt-2 font-light">
              Elevations & Floor Layouts
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm md:text-base text-[#C8D6CF] max-w-2xl mx-auto leading-relaxed font-light">
            Engineered with 100% monolithic aluminum formwork (Aluform), 3.05-meter slab heights, and 3 high-speed elevators per tower. Explore floor-by-floor specifications and view orientations.
          </p>
        </div>
      </section>

      {/* TOWER BREAKDOWN CARDS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="space-y-12">
          {towers.map((tower, idx) => (
            <div key={idx} className="p-8 md:p-12 rounded-3xl bg-[#081E13] border border-[#D4AF37]/30 shadow-2xl flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold">
                    {tower.name}
                  </span>
                  <span className="text-white/60 text-xs font-sans uppercase tracking-widest">
                    {tower.title}
                  </span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mt-2">
                  {tower.name}: {tower.title}
                </h2>
                <p className="text-xs md:text-sm text-white/70 font-light mt-3 leading-relaxed">
                  {tower.highlight}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-white/80 border-t border-white/10 pt-6">
                  <div>
                    <span className="text-white/50 block">Orientation:</span>
                    <span className="font-semibold text-white">{tower.orientation}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block">Structure:</span>
                    <span className="font-semibold text-white">{tower.floors}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block">Unit Configurations:</span>
                    <span className="font-semibold text-white">{tower.units}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block">Vertical Transit:</span>
                    <span className="font-semibold text-white">{tower.elevators}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full lg:w-auto shrink-0">
                <Link
                  href="/floor-plans"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase text-center transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Floor Plans</span>
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white font-sans text-xs font-semibold tracking-wider border border-white/15 text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Tower Cost Sheet</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING MESH */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <InternalLinkingMesh 
            title="Explore Floor Plans, Possession & Construction Status" 
            links={[
              { title: "Live Construction Status & On-Site Updates", url: "/kolte-patil-the-reserve-construction-status" },
              { title: "Kolte Patil The Reserve Possession Date", url: "/kolte-patil-the-reserve-possession-date" },
              { title: "MahaRERA PM1261012600748 Approvals", url: "/kolte-patil-the-reserve-rera" },
              { title: "Vyana 2 & 3 BHK Floor Plans", url: "/kolte-patil-the-reserve-floor-plans" },
              { title: "Pricing & Itemized Cost Sheet", url: "/kolte-patil-the-reserve-price" },
              { title: "Download Official Project Brochure", url: "/kolte-patil-the-reserve-brochure" },
              { title: "21-Acre Master Layout Plan", url: "/kolte-patil-the-reserve-master-layout" },
            ]} 
          />
        </div>
      </section>
    </div>
  );
}
