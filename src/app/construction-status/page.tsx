import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { 
  Building2, 
  ShieldCheck, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  HardHat, 
  Clock, 
  Sparkles, 
  Camera, 
  ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Construction Status 2026 | Live Work Progress & Updates",
  description: "Track the latest construction status of Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. Real-time updates on Towers T5, T6, and T7 foundation, Aluform monolithic pours, and MahaRERA PM1261012600748 milestones.",
  keywords: [
    "Kolte Patil The Reserve Construction Status",
    "The Reserve Sinhgad Road Construction Updates",
    "Vyana Kolte Patil Site Progress",
    "The Reserve Possession Timeline",
    "Kolte Patil Construction Quality Pune",
    "MahaRERA PM1261012600748 Work Progress"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/construction-status",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/construction-status",
      "x-default": "https://thereserve.koltepatil.digital/construction-status",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Construction Status 2026 | Live Progress",
    description: "Verified on-site structural updates for Towers T5, T6, and T7 at The Reserve by Kolte Patil, Sinhgad Road, Pune.",
    url: "https://thereserve.koltepatil.digital/construction-status",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "The Reserve Construction Status",
      },
    ],
  },
};

export default function ConstructionStatusPage() {
  const constructionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Kolte Patil The Reserve Construction Status & Milestone Updates",
    "description": "On-site progress tracker and structural updates for Vyana Phase 1 at The Reserve by Kolte Patil on Sinhgad Road, Pune.",
    "url": "https://thereserve.koltepatil.digital/construction-status"
  };

  const milestones = [
    {
      stage: "Phase 1 Land Demarcation & Soil Testing",
      status: "Completed",
      date: "Q1 2025",
      desc: "Comprehensive geotechnical soil load analysis and boundary retaining wall construction along Mutha river buffer."
    },
    {
      stage: "Excavation & Lower Basements (B1 + B2)",
      status: "Completed",
      date: "Q3 2025",
      desc: "Mass earthwork excavation for 2 Basements across Towers T5, T6, and T7 with advanced shoring and dewatering."
    },
    {
      stage: "Plinth & Foundation Concreting",
      status: "In Full Swing",
      date: "Active 2026",
      desc: "Raft foundations and reinforced columns cast using M40 grade concrete with seismic zone compliance."
    },
    {
      stage: "Aluform Monolithic Superstructure (G+21)",
      status: "Scheduled",
      date: "2026 - 2027",
      desc: "Continuous rapid-cycle aluminum formwork pours delivering 3.05 m slab-to-slab height (~2.9 m clear)."
    },
    {
      stage: "Clubhouse & Landscape Boulevard",
      status: "Scheduled",
      date: "2027",
      desc: "19,750 sq.ft. multi-tiered clubhouse, 84-ft resort pool, pickleball courts, and central boulevard."
    },
    {
      stage: "Finishing, Occupancy Certificate (OC) & Handover",
      status: "Target Possession",
      date: "In Line with MahaRERA",
      desc: "MahaRERA PM1261012600748 statutory verification, internal fittings, and phased key handover."
    }
  ];

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] min-h-screen">
      <Script
        id="construction-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(constructionSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/architectural-grandeur.jpg"
            alt="The Reserve Construction"
            fill
            sizes="100vw"
            className="object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06160E] via-[#06160E]/80 to-[#06160E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 mb-6 shadow-md">
            <HardHat className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Live Structural Progress • MahaRERA PM1261012600748
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
            Live Construction Status &
            <span className="block text-[#D4AF37] mt-2 font-light">
              On-Site Engineering Milestones
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm md:text-base text-[#C8D6CF] max-w-2xl mx-auto leading-relaxed font-light">
            Stay updated with authenticated structural milestones for Towers T5, T6, and T7 at Vadgaon Khurd, Sinhgad Road, Pune. Executed with 100% monolithic aluminum formwork engineering.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-white/70">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> RERA Certified Progress
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#D4AF37]" /> 100% Aluform Poured Concrete
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D4AF37]" /> On Schedule Delivery
            </span>
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
            Chronological Progression
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-2">
            Engineering Phase Roadmap
          </h2>
        </div>

        <div className="relative border-l-2 border-[#D4AF37]/30 pl-6 md:pl-10 ml-4 md:ml-12 space-y-12">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                m.status === "Completed" 
                  ? "bg-[#D4AF37] border-[#D4AF37]" 
                  : m.status === "In Full Swing"
                  ? "bg-[#25D366] border-[#25D366] animate-pulse"
                  : "bg-[#06160E] border-white/30"
              }`} />

              <div className="p-6 md:p-8 rounded-3xl bg-[#081E13] border border-white/10 group-hover:border-[#D4AF37]/50 transition-colors shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-wider">
                    {m.date}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    m.status === "Completed"
                      ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                      : m.status === "In Full Swing"
                      ? "bg-[#25D366]/20 text-[#25D366]"
                      : "bg-white/10 text-white/60"
                  }`}>
                    {m.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-white font-bold">
                  {m.stage}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-white/70 font-light leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOOK SITE VISIT CALLOUT */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#0E2E1D] to-[#081E13] border border-[#D4AF37]/30 text-center flex flex-col items-center">
          <Camera className="w-8 h-8 text-[#D4AF37] mb-4" />
          <h3 className="font-serif text-2xl md:text-3xl text-white">
            Inspect On-Site Construction In Person
          </h3>
          <p className="mt-2 text-xs md:text-sm text-white/70 font-light max-w-xl">
            Book a private visit to our Sales Experience Centre at Vadgaon Khurd, inspect sample flat finishes, and review live structural progress with our project engineers.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-lg"
            >
              Schedule Guided Site Tour
            </Link>
            <Link
              href="/virtual-tour"
              className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white font-sans text-xs font-semibold tracking-wider border border-white/15 transition-colors"
            >
              Watch 360° Drone Walkthrough
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING MESH */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <InternalLinkingMesh 
            title="Explore Specifications, Approvals & Tower Details" 
            links={[
              { title: "Kolte Patil The Reserve Possession Date", url: "/possession-date" },
              { title: "Towers T5, T6, T7 Elevation & Layouts", url: "/towers" },
              { title: "MahaRERA Approvals (PM1261012600748)", url: "/project/rera-approvals-pm1261012600748" },
              { title: "100% Aluform Concrete Construction", url: "/project/aluform-construction" },
              { title: "Pricing & Itemized Cost Sheet", url: "/pricing" },
              { title: "Vyana 2 & 3 BHK Floor Plans", url: "/floor-plans" },
            ]} 
          />
        </div>
      </section>
    </div>
  );
}
