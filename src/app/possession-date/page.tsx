import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { 
  Calendar, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  FileText, 
  ArrowRight,
  Landmark,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Possession Date | Vyana Phase 1 Timeline & RERA Milestones",
  description: "Official possession timeline and completion milestones for Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. Registered under MahaRERA PM1261012600748 with guaranteed delivery governance.",
  keywords: [
    "Kolte Patil The Reserve Possession Date",
    "The Reserve Sinhgad Road Completion Date",
    "Vyana Phase 1 Handover Timeline",
    "Kolte Patil The Reserve Delivery Date",
    "MahaRERA PM1261012600748 Possession",
    "RERA Section 18 Safeguards Pune"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/possession-date",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/possession-date",
      "x-default": "https://thereserve.koltepatil.digital/possession-date",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Possession Date & Handover Milestones",
    description: "Verified possession schedule for Towers T5, T6, and T7 at The Reserve by Kolte Patil, Sinhgad Road, Pune. MahaRERA PM1261012600748.",
    url: "https://thereserve.koltepatil.digital/possession-date",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "The Reserve Possession Milestones",
      },
    ],
  },
};

export default function PossessionDatePage() {
  const possessionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Kolte Patil The Reserve Possession Timeline & Handover Milestones",
    "description": "Official RERA certified possession timeline for Vyana Phase 1 at The Reserve by Kolte Patil on Sinhgad Road, Pune.",
    "url": "https://thereserve.koltepatil.digital/possession-date"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the official MahaRERA possession date for Kolte Patil The Reserve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vyana Phase-I-T5, T6, T7 at The Reserve is registered under MahaRERA PM1261012600748. As per the official registration with the Maharashtra Real Estate Regulatory Authority, the statutory completion and possession date is scheduled for December 2029 with planned early tower handovers."
        }
      },
      {
        "@type": "Question",
        "name": "What safeguards protect homebuyers under RERA Section 18 for delayed possession?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Section 18 of the Real Estate (Regulation and Development) Act, buyers are entitled to claim monthly interest at SBI MCLR + 2% for every month of delay, or claim a full refund with interest if the developer fails to give possession in accordance with the agreement terms."
        }
      },
      {
        "@type": "Question",
        "name": "How does Kolte-Patil guarantee on-time delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With 33+ years of heritage and 25+ million sq.ft. delivered, Kolte-Patil uses 100% monolithic aluminum formwork (Aluform) which accelerates superstructure cycles by up to 50% compared to conventional brickwork construction."
        }
      }
    ]
  };

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] min-h-screen">
      <Script
        id="possession-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(possessionSchema) }}
      />
      <Script
        id="possession-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/vyana-towers.jpg"
            alt="The Reserve Possession Milestones"
            fill
            sizes="100vw"
            className="object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06160E] via-[#06160E]/80 to-[#06160E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 mb-6 shadow-md">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Delivery Governance • MahaRERA PM1261012600748
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
            Official Possession Timeline &
            <span className="block text-[#D4AF37] mt-2 font-light">
              Delivery Commitments
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm md:text-base text-[#C8D6CF] max-w-2xl mx-auto leading-relaxed font-light">
            Clear, transparent completion schedules for Towers T5, T6, and T7 at Vadgaon Khurd, Sinhgad Road, Pune. Backed by MahaRERA statutory escrow accounts and 33+ years of Kolte-Patil delivery excellence.
          </p>
        </div>
      </section>

      {/* RERA KEY TIMELINE CARDS */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] font-semibold uppercase tracking-wider block mb-2">
                Phase 1 Registration
              </span>
              <h3 className="font-serif text-2xl text-white">Vyana Sector 1</h3>
              <p className="mt-2 text-xs text-white/70 font-light leading-relaxed">
                Towers T5, T6, and T7 comprising 487 residential units, 2 Basements, 1 Stilt, and 21 residential storeys.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block">MahaRERA ID</span>
              <span className="font-mono text-base font-bold text-[#D4AF37]">PM1261012600748</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/50 ring-1 ring-[#D4AF37]/30 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] font-semibold uppercase tracking-wider block mb-2">
                RERA Completion Date
              </span>
              <h3 className="font-serif text-2xl text-white">Statutory Handover</h3>
              <p className="mt-2 text-xs text-white/70 font-light leading-relaxed">
                Official completion date registered with MahaRERA portal. Fast-track monolithic construction aims for phased early possession.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block">Statutory Date</span>
              <span className="font-mono text-base font-bold text-white">December 2029*</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/30 flex flex-col justify-between shadow-xl">
            <div>
              <span className="font-mono text-xs text-[#D4AF37] font-semibold uppercase tracking-wider block mb-2">
                Financial Escrow Protection
              </span>
              <h3 className="font-serif text-2xl text-white">70% Escrow Security</h3>
              <p className="mt-2 text-xs text-white/70 font-light leading-relaxed">
                70% of all customer collections are deposited into a dedicated RERA escrow bank account used exclusively for on-site construction.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block">Legal Protection</span>
              <span className="font-mono text-base font-bold text-[#25D366]">100% Protected</span>
            </div>
          </div>

        </div>

        {/* LEGAL SAFEGUARD EXPLANATION */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#081E13] border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="font-serif text-2xl text-white">
              Homebuyer Rights & Delivery Guarantees Under MahaRERA
            </h3>
          </div>
          <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
            MahaRERA strictly safeguards homebuyers against construction delays. Under RERA Section 18, if a developer fails to complete or give possession of the apartment in accordance with the agreement for sale, the buyer has the legal right to claim a full refund with interest or demand monthly interest until actual possession is delivered.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://maharera.maharashtra.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#06160E] text-xs font-semibold tracking-wider transition-colors"
            >
              Verify on MahaRERA Portal →
            </a>
            <Link
              href="/construction-status"
              className="px-6 py-3 rounded-full bg-[#D4AF37] text-[#06160E] text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors"
            >
              Track Live Construction Updates
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING MESH */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <InternalLinkingMesh 
            title="Explore Legal Approvals, Pricing & Construction Status" 
            links={[
              { title: "Live Construction Status & On-Site Updates", url: "/kolte-patil-the-reserve-construction-status" },
              { title: "Towers T5, T6, T7 Elevation & Layouts", url: "/kolte-patil-the-reserve-towers" },
              { title: "MahaRERA PM1261012600748 Legal Sanctions", url: "/kolte-patil-the-reserve-rera" },
              { title: "Pricing & Itemized Cost Sheet", url: "/kolte-patil-the-reserve-price" },
              { title: "Download Official Project Brochure", url: "/kolte-patil-the-reserve-brochure" },
              { title: "Vyana 2 & 3 BHK Floor Plans", url: "/kolte-patil-the-reserve-floor-plans" },
            ]} 
          />
        </div>
      </section>
    </div>
  );
}
