import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { 
  FileText, 
  Download, 
  ShieldCheck, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Layers, 
  MapPin, 
  PhoneCall 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Brochure PDF Download | Official Project E-Brochure",
  description: "Download the official e-brochure for Kolte Patil The Reserve (Vyana Phase 1) on Sinhgad Road, Pune. Access comprehensive floor plans, 21-acre master layout, 19,750 sq.ft. clubhouse specifications, and MahaRERA PM1261012600748 details.",
  keywords: [
    "Kolte Patil The Reserve Brochure PDF",
    "The Reserve Sinhgad Road Brochure Download",
    "Kolte Patil Sinhgad Road Floor Plan PDF",
    "Vyana at The Reserve E-Brochure",
    "The Reserve Kolte Patil Master Plan PDF",
    "Kolte Patil The Reserve Project Details",
    "MahaRERA PM1261012600748 Brochure"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/brochure",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/brochure",
      "x-default": "https://thereserve.koltepatil.digital/brochure",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Official Brochure PDF | Direct Download",
    description: "Get the complete architectural dossier, floor plans, master layout, and lifestyle amenities for The Reserve by Kolte Patil, Sinhgad Road, Pune.",
    url: "https://thereserve.koltepatil.digital/brochure",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "Kolte Patil The Reserve Official Brochure",
      },
    ],
  },
};

export default function BrochurePage() {
  const brochureSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "name": "The Reserve by Kolte Patil Official Architectural E-Brochure",
    "description": "Comprehensive project brochure including 2 & 3 BHK floor plans, master layout, amenities, and MahaRERA PM1261012600748 certification.",
    "url": "https://thereserve.koltepatil.digital/brochure",
    "fileFormat": "application/pdf",
    "author": {
      "@type": "Organization",
      "name": "Kolte-Patil Developers Ltd"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kolte-Patil Developers Ltd"
    }
  };

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] min-h-screen">
      <Script
        id="brochure-doc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brochureSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/architectural-grandeur.jpg"
            alt="The Reserve Architectural Dossier"
            fill
            sizes="100vw"
            className="object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06160E] via-[#06160E]/80 to-[#06160E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Official Project Dossier • MahaRERA PM1261012600748
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
            Official E-Brochure &
            <span className="block text-[#D4AF37] mt-2 font-light">
              Master Plan Dossier
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm md:text-base text-[#C8D6CF] max-w-2xl mx-auto leading-relaxed font-light">
            Download the high-definition architectural dossier containing complete floor plans for Vyana Towers T5, T6, and T7, 21.03-acre masterlayout blueprints, 19,750 sq.ft. clubhouse elevations, and verified RERA approvals.
          </p>
        </div>
      </section>

      {/* BROCHURE PREVIEW & DOWNLOAD CARD */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* VISUAL BROCHURE COVER */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#081E13]">
              <Image
                src="/images/gallery/vyana-towers.jpg"
                alt="The Reserve by Kolte Patil Brochure Cover"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06160E] via-transparent to-[#06160E]/50" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 pointer-events-none">
                <div>
                  <span className="font-serif text-xl tracking-[0.25em] uppercase font-bold text-white block">
                    THE RESERVE
                  </span>
                  <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                    Vyana Sector 1 • Sinhgad Road
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#06160E]/80 backdrop-blur-md border border-white/10">
                  <span className="font-mono text-xs text-[#D4AF37] block font-bold">
                    Official PDF Document • 28 Pages
                  </span>
                  <span className="text-[10px] text-white/70 block mt-0.5 font-light">
                    High-Res Floor Plans, Specifications & RERA Certificate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BROCHURE HIGHLIGHTS & DOWNLOAD TRIGGER */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Complete Architectural Blueprint
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mt-2">
              Everything Inside The Official Brochure
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081E13] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-white">Full Floor Plans & Dimension Details</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">
                    Architectural layout drawings for 2 BHK (791 sq.ft.) and 3 BHK (1,016 sq.ft.) with room dimensions, deck views, and utility layouts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081E13] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-white">21.03-Acre Master Layout Plan</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">
                    Complete sanctuary layout highlighting vehicular-free central boulevard, Mutha riverfront promenade, and sports arenas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081E13] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-white">19,750 Sq.Ft. Clubhouse & 40+ Amenities</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">
                    Specifications for the amphitheater step seating, 84-ft resort swimming pool, pickleball courts, and wellness spaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081E13] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-white">MahaRERA Legal Approvals & Credentials</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">
                    Copy of Registration PM1261012600748, sanctioned building plans, and environmental clearance credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* DOWNLOAD BUTTON STRIP */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="/kolte-patil-the-reserve-brochure.pdf"
                download="kolte-patil-the-reserve-brochure.pdf"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Instant Download Brochure PDF (28 Pages)</span>
              </a>
              <Link
                href="/kolte-patil-the-reserve-floor-plans"
                className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/15 text-white font-sans text-xs font-semibold tracking-wider border border-white/15 transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Online Blueprints</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* INTERNAL LINKING MESH */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <InternalLinkingMesh 
            title="Explore The Reserve Real Estate Dossier" 
            links={[
              { title: "Pricing & Itemized Cost Sheet", url: "/kolte-patil-the-reserve-price" },
              { title: "Vyana 2 & 3 BHK Floor Plans", url: "/kolte-patil-the-reserve-floor-plans" },
              { title: "21-Acre Master Layout Blueprint", url: "/kolte-patil-the-reserve-master-layout" },
              { title: "MahaRERA PM1261012600748 Approvals", url: "/kolte-patil-the-reserve-rera" },
              { title: "Towers T5, T6, T7 Elevation & Layouts", url: "/kolte-patil-the-reserve-towers" },
              { title: "Live Construction Status & On-Site Updates", url: "/kolte-patil-the-reserve-construction-status" },
              { title: "Clubhouse & Lifestyle Amenities", url: "/kolte-patil-the-reserve-amenities" },
              { title: "Sales Office & Site Navigation", url: "/kolte-patil-the-reserve-contact" }
            ]} 
          />
        </div>
      </section>
    </div>
  );
}
