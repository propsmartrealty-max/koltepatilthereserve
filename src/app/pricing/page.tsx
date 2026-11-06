import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  Calendar, 
  Landmark, 
  HelpCircle, 
  Sparkles,
  ArrowRight,
  Calculator,
  Percent,
  FileSpreadsheet
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Price & Cost Sheet | 2 & 3 BHK Rates Sinhgad Road",
  description: "Official 2026 pricing and all-inclusive cost sheets for Kolte Patil The Reserve (Vyana Phase 1) on Sinhgad Road, Pune. 2 BHK starting ₹85 Lacs*, 3 BHK starting ₹1.25 Cr*. Verified MahaRERA PM1261012600748.",
  keywords: [
    "Kolte Patil The Reserve Price",
    "The Reserve Sinhgad Road Cost Sheet",
    "Kolte Patil The Reserve 2 BHK Price",
    "Kolte Patil The Reserve 3 BHK Price",
    "The Reserve Pune Payment Plan",
    "Flats for Sale Sinhgad Road Price",
    "MahaRERA PM1261012600748 Pricing"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/pricing",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/pricing",
      "x-default": "https://thereserve.koltepatil.digital/pricing",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Price & Cost Sheet | Official Developer Rates",
    description: "Official price list, payment schedules, and bank home loan approvals for The Reserve by Kolte Patil, Sinhgad Road, Pune. MahaRERA PM1261012600748.",
    url: "https://thereserve.koltepatil.digital/pricing",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "The Reserve by Kolte Patil Pricing & Residences",
      },
    ],
  },
};

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "The Reserve by Kolte Patil Residences",
    "description": "Luxury 2 & 3 BHK riverside residences at Vadgaon Khurd, Sinhgad Road, Pune. MahaRERA PM1261012600748.",
    "brand": {
      "@type": "Brand",
      "name": "Kolte-Patil Developers Ltd"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "8500000",
      "highPrice": "16500000",
      "offerCount": "487",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Kolte-Patil Developers Ltd"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the starting price for 2 BHK flats at Kolte Patil The Reserve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2 BHK riverside residences in Vyana Phase 1 (791 sq.ft. carpet area) start at an indicative agreement value of ₹ 85 Lakhs* onwards, with customized payment plans and bank loan financing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the starting price for 3 BHK luxury residences at The Reserve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 3 BHK Grand Sanctuaries (1,016 sq.ft. carpet area) start at ₹ 1.25 Cr* onwards, featuring panoramic NDA hill and Mutha river views, 3.05 m slab heights, and covered parking."
        }
      },
      {
        "@type": "Question",
        "name": "Which banks have approved Kolte Patil The Reserve for home loans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Reserve is approved by leading institutional banking partners including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, and Bank of Baroda for up to 80-85% home loan disbursement."
        }
      },
      {
        "@type": "Question",
        "name": "What are the government taxes and charges applicable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applicable statutory government charges in Pune include 7% Maharashtra Stamp Duty, ₹ 30,000 Registration Charges, and 5% GST on under-construction real estate, calculated on the agreement value."
        }
      }
    ]
  };

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] min-h-screen">
      <Script
        id="pricing-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/gallery/vyana-towers.jpg"
            alt="The Reserve Pricing"
            fill
            sizes="100vw"
            className="object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06160E] via-[#06160E]/80 to-[#06160E]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Official Price List • MahaRERA PM1261012600748
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
            Transparent Pricing &
            <span className="block text-[#D4AF37] mt-2 font-light">
              Itemized Cost Sheets
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm md:text-base text-[#C8D6CF] max-w-3xl mx-auto leading-relaxed font-light">
            Direct developer rates for Phase 1 (Vyana Towers T5, T6, T7) at Vadgaon Khurd, Sinhgad Road, Pune. Zero hidden charges, flexible construction-linked payment plans, and pre-approved loans from major nationalized banks.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-white/70">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> 100% RERA Compliant
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
              <Landmark className="w-4 h-4 text-[#D4AF37]" /> SBI & HDFC Pre-Approved
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
              <Percent className="w-4 h-4 text-[#D4AF37]" /> Attractive 10:90 Plans
            </span>
          </div>
        </div>
      </section>

      {/* CORE PRICING CARDS */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 2 BHK CARD */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-[#081E13] border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between group hover:border-[#D4AF37] transition-all">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">
              High Demand
            </div>

            <div>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                Vyana Sector 1 • 2 BHK Residence
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">
                2 BHK Riverside Luxury
              </h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-4xl md:text-5xl text-[#D4AF37] font-bold">
                  ₹ 85 Lakhs*
                </span>
                <span className="text-white/60 text-xs font-sans">
                  Onwards (Base Value)
                </span>
              </div>

              <div className="mt-8 space-y-3 font-sans text-xs text-white/80 border-t border-b border-white/10 py-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">RERA Carpet Area:</span>
                  <span className="font-bold text-white">791 Sq. Ft. (73.49 Sq. M.)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Slab-to-Slab Height:</span>
                  <span className="font-bold text-white">3.05 Meters (Expansive Airflow)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Balcony / Deck:</span>
                  <span className="font-bold text-white">River-Facing Private Viewing Deck</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Parking:</span>
                  <span className="font-bold text-white">1 Covered Bay with EV Provision</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Towers:</span>
                  <span className="font-bold text-white">T5, T6, T7 (G+21 Floors)</span>
                </div>
              </div>

              {/* ESTIMATED STATUTORY CHARGES BREAKDOWN */}
              <div className="mt-6 bg-[#06160E] p-4 rounded-2xl border border-white/10 text-[11px] space-y-2 text-white/70 font-mono">
                <div className="flex justify-between text-white/50 font-sans uppercase tracking-wider text-[9px] pb-1 border-b border-white/10">
                  <span>Component</span>
                  <span>Estimated Rate</span>
                </div>
                <div className="flex justify-between">
                  <span>Stamp Duty (Govt. MH):</span>
                  <span>7% of Agreement Value</span>
                </div>
                <div className="flex justify-between">
                  <span>Registration Fee:</span>
                  <span>₹ 30,000 (Flat)</span>
                </div>
                <div className="flex justify-between">
                  <span>GST Applicable:</span>
                  <span>5% (Under-Construction)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase text-center transition-all shadow-lg"
              >
                Request Cost Sheet PDF
              </Link>
              <Link
                href="/floor-plans"
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white font-sans text-xs font-semibold tracking-wider border border-white/15 text-center transition-colors"
              >
                View 791 Sq.Ft. Blueprint
              </Link>
            </div>
          </div>

          {/* 3 BHK CARD */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-[#081E13] border border-[#D4AF37]/50 shadow-2xl flex flex-col justify-between group hover:border-[#D4AF37] transition-all ring-1 ring-[#D4AF37]/30">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#D4AF37] text-[#06160E] text-[10px] font-bold uppercase tracking-widest">
              Flagship Residence
            </div>

            <div>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                Vyana Sector 1 • 3 BHK Grand Sanctuary
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">
                3 BHK Grand Sanctuary
              </h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-4xl md:text-5xl text-[#D4AF37] font-bold">
                  ₹ 1.25 Cr*
                </span>
                <span className="text-white/60 text-xs font-sans">
                  Onwards (Base Value)
                </span>
              </div>

              <div className="mt-8 space-y-3 font-sans text-xs text-white/80 border-t border-b border-white/10 py-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/60">RERA Carpet Area:</span>
                  <span className="font-bold text-white">1,016 Sq. Ft. (94.39 Sq. M.)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Slab-to-Slab Height:</span>
                  <span className="font-bold text-white">3.05 Meters (Luxury Volume)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Balcony / Deck:</span>
                  <span className="font-bold text-white">Panoramic NDA Hill & River Deck</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Parking:</span>
                  <span className="font-bold text-white">Covered Bay with Dedicated EV Charger</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Towers:</span>
                  <span className="font-bold text-white">T5, T6, T7 Corner & Centre Units</span>
                </div>
              </div>

              {/* ESTIMATED STATUTORY CHARGES BREAKDOWN */}
              <div className="mt-6 bg-[#06160E] p-4 rounded-2xl border border-white/10 text-[11px] space-y-2 text-white/70 font-mono">
                <div className="flex justify-between text-white/50 font-sans uppercase tracking-wider text-[9px] pb-1 border-b border-white/10">
                  <span>Component</span>
                  <span>Estimated Rate</span>
                </div>
                <div className="flex justify-between">
                  <span>Stamp Duty (Govt. MH):</span>
                  <span>7% of Agreement Value</span>
                </div>
                <div className="flex justify-between">
                  <span>Registration Fee:</span>
                  <span>₹ 30,000 (Flat)</span>
                </div>
                <div className="flex justify-between">
                  <span>GST Applicable:</span>
                  <span>5% (Under-Construction)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase text-center transition-all shadow-lg"
              >
                Request Cost Sheet PDF
              </Link>
              <Link
                href="/floor-plans"
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white font-sans text-xs font-semibold tracking-wider border border-white/15 text-center transition-colors"
              >
                View 1,016 Sq.Ft. Blueprint
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* CONSTRUCTION LINKED PAYMENT SCHEDULE (CLPP) */}
      <section className="py-16 px-6 md:px-12 bg-[#040E09] border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold block mb-2">
              RERA Compliant Milestones
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white">
              Construction-Linked Payment Schedule
            </h2>
            <p className="mt-3 text-white/70 text-xs md:text-sm max-w-2xl mx-auto font-light">
              Pay in transparent tranches synchronized with actual on-site structural progress certified by project architects.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b border-[#D4AF37]/30 text-[#D4AF37] uppercase tracking-wider text-[10px]">
                  <th className="py-4 px-4 font-bold">Stage Milestone</th>
                  <th className="py-4 px-4 font-bold">Percentage (%)</th>
                  <th className="py-4 px-4 font-bold">Nature of Milestone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80 font-light">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">Booking Token & Application</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#D4AF37]">10.0%</td>
                  <td className="py-3.5 px-4">Earnest money on unit allocation & agreement execution</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">Completion of Plinth / Foundations</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#D4AF37]">20.0%</td>
                  <td className="py-3.5 px-4">Substructure & lower basement excavation verified</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">Slab Milestones (Tranches Across G+21)</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#D4AF37]">40.0%</td>
                  <td className="py-3.5 px-4">Poured aluform concrete superstructure cast tranches</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">Brickwork, Internal Plaster & Flooring</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#D4AF37]">15.0%</td>
                  <td className="py-3.5 px-4">Internal finishes, electrical conduits, sanitary fittings</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">External Facade, Elevators & Lobbies</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#D4AF37]">10.0%</td>
                  <td className="py-3.5 px-4">Clubhouse completion, painting, landscaping</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">Possession & Occupancy Certificate (OC)</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#D4AF37]">5.0%</td>
                  <td className="py-3.5 px-4">Final key handover, RERA OC sign-off, registry</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* APPROVED BANK HOME LOANS */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-[#081E13] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Pre-Approved Home Loans
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white">
              Institutional Banking & Fast Sanctions
            </h3>
            <p className="mt-2 text-xs md:text-sm text-white/70 font-light leading-relaxed">
              Benefit from the fastest disbursement, special interest rates, and minimal processing fees through our dedicated on-site banking desks.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-white/80">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">State Bank of India</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">HDFC Bank</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">ICICI Bank</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Axis Bank</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Bank of Baroda</span>
            </div>
          </div>

          <Link
            href="/tools/emi-calculator"
            className="shrink-0 px-8 py-4 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase transition-all border border-[#D4AF37]/30 flex items-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            <span>Launch EMI Calculator</span>
          </Link>
        </div>
      </section>

      {/* FREQUENTLY ASKED PRICING QUESTIONS */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-2">
            Pricing Clarity
          </span>
          <h3 className="font-serif text-3xl text-white">
            Frequently Asked Cost Questions
          </h3>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
            <h4 className="font-serif text-lg text-[#D4AF37]">Are there any hidden infrastructure or floor-rise charges?</h4>
            <p className="mt-2 text-xs md:text-sm text-white/70 font-light leading-relaxed">
              No. In compliance with MahaRERA guidelines, all costs including floor rise, preferred view development fees, and clubhouse memberships are itemized upfront in the transparent cost sheet before agreement execution.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
            <h4 className="font-serif text-lg text-[#D4AF37]">Can I avail of customized milestone payment plans?</h4>
            <p className="mt-2 text-xs md:text-sm text-white/70 font-light leading-relaxed">
              Yes. Depending on your financial profile and bank loan sanction, our sales concierge can structure customized developer subvention or milestone-linked flexi plans.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
            <h4 className="font-serif text-lg text-[#D4AF37]">How do I obtain the official signed cost sheet?</h4>
            <p className="mt-2 text-xs md:text-sm text-white/70 font-light leading-relaxed">
              You can submit your contact details on this portal or visit our Sales Experience Centre at Vadgaon Khurd to receive the unit-specific cost sheet with exact unit numbers and parking allocation.
            </p>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING MESH */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <InternalLinkingMesh 
            title="Explore Pricing, Floor Plans & Investment Tools" 
            links={[
              { title: "Download Official Project Brochure", url: "/kolte-patil-the-reserve-brochure" },
              { title: "Explore 2 & 3 BHK Floor Plans", url: "/kolte-patil-the-reserve-floor-plans" },
              { title: "21-Acre Master Layout Plan", url: "/kolte-patil-the-reserve-master-layout" },
              { title: "Towers T5, T6, T7 Elevation & Layouts", url: "/kolte-patil-the-reserve-towers" },
              { title: "Live Construction Status & Updates", url: "/kolte-patil-the-reserve-construction-status" },
              { title: "Possession & Handover Dates", url: "/kolte-patil-the-reserve-possession-date" },
              { title: "MahaRERA PM1261012600748 Approvals", url: "/kolte-patil-the-reserve-rera" },
              { title: "Home Loan EMI Calculator", url: "/tools/emi-calculator" },
              { title: "Pune Stamp Duty Calculator", url: "/tools/stamp-duty-calculator" },
              { title: "19,750 Sq.Ft. Luxury Clubhouse", url: "/kolte-patil-the-reserve-amenities" }
            ]} 
          />
        </div>
      </section>
    </div>
  );
}
