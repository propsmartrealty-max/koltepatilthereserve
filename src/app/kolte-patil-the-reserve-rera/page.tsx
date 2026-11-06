import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Landmark, 
  FileText, 
  QrCode, 
  Scale, 
  Calendar, 
  Sparkles,
  MapPin,
  Lock
} from "lucide-react";

export const metadata: Metadata = {
  title: "MahaRERA PM1261012600748 | Kolte Patil The Reserve Legal Approvals",
  description: "Official MahaRERA registration and legal compliance details for Kolte Patil The Reserve (Vyana Phase-I-T5, T6, T7). Registration No: PM1261012600748. View sanctioned plans, land titles, and RERA escrow protections.",
  keywords: [
    "Kolte Patil The Reserve RERA Number",
    "MahaRERA PM1261012600748",
    "Vyana Phase 1 RERA Approval",
    "The Reserve Sinhgad Road Legal Details",
    "Kolte Patil Sinhgad Road Sanctioned Plans",
    "MahaRERA Portal Project Verification"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-rera",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-rera",
      "x-default": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-rera",
    },
  },
  openGraph: {
    title: "MahaRERA PM1261012600748 | Kolte Patil The Reserve Official Approvals",
    description: "Verify official MahaRERA registration, clear land titles, sanctioned plans, and banking approvals for The Reserve by Kolte Patil, Sinhgad Road, Pune.",
    url: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-rera",
    images: [
      {
        url: "/images/qr/maharera-qr.png",
        width: 600,
        height: 600,
        alt: "MahaRERA PM1261012600748 QR Code",
      },
    ],
  },
};

export default function KoltePatilTheReserveReraPage() {
  const reraSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentPermit",
    "name": "MahaRERA Registration Certificate PM1261012600748",
    "description": "Statutory real estate development registration for Vyana Phase-I-T5, T6, T7 at The Reserve by Kolte Patil.",
    "permitAudience": "Real Estate Homebuyers and Investors",
    "validIn": {
      "@type": "AdministrativeArea",
      "name": "Maharashtra, India"
    },
    "issuedBy": {
      "@type": "GovernmentOrganization",
      "name": "Maharashtra Real Estate Regulatory Authority (MahaRERA)",
      "url": "https://maharera.maharashtra.gov.in"
    }
  };

  const sanctionedDetails = [
    { label: "MahaRERA Registration No.", value: "PM1261012600748", highlight: true },
    { label: "Project Registered Name", value: "Vyana Phase-I-T5, T6, T7", highlight: false },
    { label: "Marketing Identity", value: "The Reserve by Kolte-Patil", highlight: false },
    { label: "Promoter / Developer", value: "Kolte-Patil Developers Ltd (NSE: KOLTEPATIL, BSE: 532924)", highlight: false },
    { label: "Project Location", value: "Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road, Pune - 411041", highlight: false },
    { label: "Master Development Area", value: "21.03 Acres (Phase 1: 6.95 Acres)", highlight: false },
    { label: "Total Sanctioned Units (Phase 1)", value: "487 Luxury Residences", highlight: false },
    { label: "Sanctioned Tower Heights", value: "Towers T5, T6, T7: 2 Basements + 1 Stilt + 21 Residential Floors", highlight: false },
    { label: "Sanctioned Carpet Areas", value: "2 BHK: 791 sq.ft. (73.49 sq.m.) | 3 BHK: 1,016 sq.ft. (94.39 sq.m.)", highlight: false },
    { label: "Construction Technology", value: "100% Full Aluform Monolithic Poured Concrete", highlight: false },
    { label: "Statutory Escrow Security", value: "70% Customer Receivables Deposited in Dedicated RERA Escrow Account", highlight: true },
    { label: "Approved Banking Desks", value: "State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda", highlight: false },
  ];

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] min-h-screen">
      <Script
        id="rera-permit-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reraSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/images/gallery/vyana-towers.jpg"
            alt="The Reserve RERA Approvals"
            fill
            sizes="100vw"
            className="object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06160E] via-[#06160E]/80 to-[#06160E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 mb-6 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Statutory Transparency • MahaRERA Certified
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
            MahaRERA PM1261012600748
            <span className="block text-[#D4AF37] mt-2 font-light">
              Official Project Approvals & Disclosures
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm md:text-base text-[#C8D6CF] max-w-2xl mx-auto leading-relaxed font-light">
            Complete statutory compliance, sanctioned architectural plans, title verification, and environmental clearances for The Reserve by Kolte Patil at Vadgaon Khurd, Sinhgad Road, Pune.
          </p>
        </div>
      </section>

      {/* RERA CERTIFICATE & QR VERIFICATION SECTION */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* QR CODE CARD */}
          <div className="lg:col-span-5 p-8 md:p-10 rounded-3xl bg-[#081E13] border border-[#D4AF37]/40 shadow-2xl flex flex-col items-center text-center">
            <div className="relative w-52 h-52 rounded-2xl overflow-hidden bg-white p-3 shadow-inner">
              <Image
                src="/images/qr/maharera-qr.png"
                alt="MahaRERA PM1261012600748 QR Code"
                fill
                sizes="208px"
                className="object-contain"
              />
            </div>

            <span className="mt-6 font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Scan to Verify on MahaRERA
            </span>
            <span className="font-mono text-xl text-white font-bold tracking-wider mt-1">
              PM1261012600748
            </span>
            <p className="mt-2 text-xs text-white/60 font-light">
              Registered under MahaRERA as &ldquo;Vyana Phase-I-T5, T6, T7&rdquo;
            </p>

            <a
              href="https://maharera.maharashtra.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Verify on MahaRERA Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* RERA SAFEGUARDS OVERVIEW */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Statutory Consumer Protections
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mt-2">
              100% Homebuyer Security & Escrow Governance
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081E13] border border-white/10">
                <Lock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-white">70% Dedicated Construction Escrow</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">
                    As mandated by MahaRERA, 70% of all purchaser funds are secured in a scheduled bank escrow account and can solely be withdrawn in proportion to certified on-site structural completion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081E13] border border-white/10">
                <Scale className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-white">RERA Section 18 Delivery Guarantee</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">
                    Buyers are legally protected against handover delays. Interest at SBI MCLR + 2% is statutory for every month of delay, or buyers may claim a full refund with interest.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#081E13] border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-white">Sanctioned Plans & Clear Land Titles</h4>
                  <p className="text-xs text-white/70 font-light mt-0.5">
                    The 21.03-acre master development possesses clear, unencumbered freehold land titles, Pune Municipal Corporation (PMC) sanctioned building plans, and environmental clearance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="/kolte-patil-the-reserve-price"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#06160E] font-sans text-xs font-bold tracking-widest uppercase transition-all border border-[#D4AF37]/30"
              >
                View RERA Price Sheet
              </Link>
              <a
                href="/kolte-patil-the-reserve-brochure.pdf"
                download="kolte-patil-the-reserve-brochure.pdf"
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white font-sans text-xs font-semibold tracking-wider border border-white/15 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Download RERA E-Brochure PDF</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SANCTIONED DISCLOSURES TABLE */}
      <section className="py-16 px-6 md:px-12 bg-[#040E09] border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-2">
              Authenticated Data Sheet
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-white">
              Official Project Disclosures
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm font-sans border-collapse">
              <tbody className="divide-y divide-white/10 text-white/80 font-light">
                {sanctionedDetails.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-semibold text-white/70 w-2/5">
                      {item.label}
                    </td>
                    <td className={`py-4 px-4 font-mono ${item.highlight ? 'text-[#D4AF37] font-bold text-sm' : 'text-white'}`}>
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING MESH */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <InternalLinkingMesh 
            title="Explore Approvals, Towers, Pricing & Floor Plans" 
            links={[
              { title: "Kolte Patil The Reserve Price & Cost Sheet", url: "/kolte-patil-the-reserve-price" },
              { title: "Download Official Project E-Brochure", url: "/kolte-patil-the-reserve-brochure" },
              { title: "Towers T5, T6, T7 Elevation & Layouts", url: "/kolte-patil-the-reserve-towers" },
              { title: "Live Construction Status & On-Site Updates", url: "/kolte-patil-the-reserve-construction-status" },
              { title: "Possession & Handover Milestones", url: "/kolte-patil-the-reserve-possession-date" },
              { title: "Vyana 2 & 3 BHK Floor Plans", url: "/kolte-patil-the-reserve-floor-plans" },
            ]} 
          />
        </div>
      </section>
    </div>
  );
}
