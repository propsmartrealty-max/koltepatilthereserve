import { locationData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { MapPin, Navigation, Calendar, MessageCircle, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(locationData).map((market) => ({
    "micro-market": market,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "micro-market": string }>;
}) {
  const resolvedParams = await params;
  const data = locationData[resolvedParams["micro-market"]];
  if (!data) return { title: "Location Not Found" };

  const baseUrl = "https://thereserve.koltepatil.digital";
  const canonicalUrl = `${baseUrl}/location/${resolvedParams["micro-market"]}`;

  return {
    title: `${data.title} | The Reserve by Kolte Patil Sinhgad Road Pune`,
    description: data.excerpt,
    keywords: [
      data.keyword,
      "The Reserve Kolte Patil",
      "The Reserve Sinhgad Road",
      "Vyana Kolte Patil",
      "MahaRERA PM1261012600748",
      "Flats in Vadgaon Khurd",
      "Pune Real Estate",
      "2 BHK Sinhgad Road",
      "3 BHK Sinhgad Road",
      "Pune Ring Road Property"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${data.title} | Kolte Patil The Reserve`,
      description: data.excerpt,
      url: canonicalUrl,
      images: [
        {
          url: "/images/gallery/vyana-towers.jpg",
          width: 1200,
          height: 630,
          alt: `${data.title} - The Reserve by Kolte Patil`,
        },
      ],
    },
  };
}

export default async function MicroMarketPage({
  params,
}: {
  params: Promise<{ "micro-market": string }>;
}) {
  const resolvedParams = await params;
  const currentKey = resolvedParams["micro-market"];
  const data = locationData[currentKey];

  if (!data) {
    notFound();
  }

  const googleMapsUrl =
    "https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0";

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${data.title} - The Reserve by Kolte Patil`,
    description: data.excerpt,
    image: "https://thereserve.koltepatil.digital/images/gallery/vyana-towers.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Survey Nos. 39/41/42/43/44/45/46/59, Vadgaon Khurd, Sinhgad Road",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411041",
      addressCountry: "IN",
    },
    hasMap: googleMapsUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.4622871",
      longitude: "73.8013712",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "186",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // Generate contextual cross-linking to neighboring Pune micro-markets
  const otherLocations = Object.keys(locationData)
    .filter((k) => k !== currentKey)
    .slice(0, 9)
    .map((k) => ({
      title: locationData[k].keyword,
      url: `/location/${k}`,
    }));

  return (
    <div className="relative bg-[#06160E] text-white min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-[#06160E]">
      <Script
        id={`location-schema-${currentKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <main className="flex-1 container mx-auto px-6 py-36 z-10 relative max-w-6xl">
        
        {/* Header Strip */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3 block font-bold">
            Pune Micro-Market Connectivity • {data.distance} ({data.driveTime})
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-6 font-bold leading-tight">
            {data.title}
          </h1>
          <p className="font-sans text-sm md:text-base text-[#C8D6CF] font-light leading-relaxed max-w-3xl mx-auto">
            {data.excerpt}
          </p>
        </div>

        {/* Transit & Highlight Callout Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/25 shadow-xl">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
              Distance & Commute
            </span>
            <h3 className="font-serif text-3xl text-white mb-1 font-bold">{data.driveTime}</h3>
            <p className="text-white/60 text-xs font-light">
              Approximately {data.distance} from {data.keyword.replace("Flats near ", "").replace("Apartments near ", "")} to The Reserve.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/25 shadow-xl">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
              Transit Corridor
            </span>
            <h3 className="font-serif text-xl text-white mb-1 font-bold">Direct Access</h3>
            <p className="text-white/60 text-xs font-light">{data.highlight}</p>
          </div>

          <div className="p-8 rounded-3xl bg-[#081E13] border border-[#D4AF37]/25 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">
                MahaRERA Registration
              </span>
              <h3 className="font-mono text-xl text-white mb-1 font-bold">PM1261012600748</h3>
              <p className="text-white/60 text-xs font-light">
                Vyana Phase 1 (Towers T5, T6, T7) • G+21 Floors
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs font-semibold mt-3">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Statutory Clearance</span>
            </div>
          </div>
        </div>

        {/* Google Maps GPS Direct Button */}
        <div className="mb-16 p-6 rounded-3xl bg-gradient-to-r from-[#081E13] to-[#0E2E1D] border border-[#D4AF37]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block">Official Google Maps Pin:</span>
              <span className="text-white/70">Survey Nos. 39/41/42/43/44/45/46/59, Vadgaon Khurd, Sinhgad Road, Pune</span>
            </div>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#D4AF37] text-[#06160E] font-sans text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shrink-0 flex items-center gap-2"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open Google Maps Navigation 📍</span>
          </a>
        </div>

        {/* 2 & 3 BHK Floor Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 3 BHK */}
          <div className="p-8 rounded-3xl bg-[#081E13] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between shadow-2xl">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6 p-4">
                <Image
                  src="/images/floor-plans/vyana-3bhk-floorplan.png"
                  alt="3 BHK Blueprint The Reserve Sinhgad Road"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-2xl text-white font-bold">Vyana 3 BHK Luxury Residence</h3>
                <span className="text-xs font-bold text-[#06160E] bg-[#D4AF37] px-3 py-1 rounded-full uppercase">
                  1,016 Sq.Ft.
                </span>
              </div>
              <p className="text-white/60 text-xs font-light mb-4">
                Living-Dining with River Deck | 3.05 m Slab Height | Jaquar Sanitaryware & Kajaria Vitrified Flooring
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <Link
                href="/floor-plans"
                className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold hover:text-white transition-colors"
              >
                View Full Dimensions →
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#D4AF37] text-[#06160E] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
              >
                Enquire
              </Link>
            </div>
          </div>

          {/* 2 BHK */}
          <div className="p-8 rounded-3xl bg-[#081E13] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between shadow-2xl">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6 p-4">
                <Image
                  src="/images/floor-plans/vyana-2bhk-floorplan.png"
                  alt="2 BHK Blueprint The Reserve Sinhgad Road"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-2xl text-white font-bold">Vyana 2 BHK Riverside Residence</h3>
                <span className="text-xs font-bold text-[#06160E] bg-[#D4AF37] px-3 py-1 rounded-full uppercase">
                  791 Sq.Ft.
                </span>
              </div>
              <p className="text-white/60 text-xs font-light mb-4">
                Dedicated Utility Balcony | Full Aluform Monolithic Concrete | Zero Corridor Wastage
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <Link
                href="/floor-plans"
                className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold hover:text-white transition-colors"
              >
                View Full Dimensions →
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#D4AF37] text-[#06160E] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>

        {/* Cross-Linking Mesh to Other Pune Micro-Markets */}
        <InternalLinkingMesh
          title={`More Pune Micro-Markets Connected to The Reserve`}
          links={otherLocations}
        />

        {/* VIP Action Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#081E13] border border-[#D4AF37]/30 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
              VIP Concierge & Site Visits
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-bold">
              Experience 21.03 Acres of Riverside Sanctuary
            </h3>
            <p className="text-white/60 text-xs md:text-sm font-light mt-1 max-w-xl">
              Book a private guided tour at our Sales Experience Centre on Sinhgad Road, Pune. Receive official floor plan dossiers and cost sheets.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://wa.me/917744009295?text=Hello%20Kolte%20Patil%20Team%2C%20I%20am%20interested%20in%20The%20Reserve%20Sinhgad%20Road.%20Please%20share%20the%20official%20brochure%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Brochure</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-[#D4AF37] text-[#06160E] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Visit</span>
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
