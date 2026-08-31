import RevealFooter from "@/components/layout/RevealFooter";
import { locationData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Script from "next/script";

export async function generateStaticParams() {
  return Object.keys(locationData).map((market) => ({
    'micro-market': market,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ 'micro-market': string }> }) {
  const resolvedParams = await params;
  const data = locationData[resolvedParams['micro-market']];
  if (!data) return { title: 'Location Not Found' };
  return {
    title: `${data.title} | The Reserve by Kolte Patil Sinhgad Road`,
    description: data.excerpt,
    keywords: [data.keyword, "Luxury Apartments Pune", "Kolte Patil The Reserve", "Sinhgad Road Flats", "Vadgaon Khurd"]
  };
}

export default async function MicroMarketPage({ params }: { params: Promise<{ 'micro-market': string }> }) {
  const resolvedParams = await params;
  const data = locationData[resolvedParams['micro-market']];
  
  if (!data) {
    notFound();
  }

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": `${data.title} - The Reserve by Kolte Patil`,
    "description": data.excerpt,
    "image": "https://thereserve.koltepatil.digital/images/overview/21-acres-masterplan.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vadgaon Khurd, Sinhgad Road",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "hasMap": "https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.4622871",
      "longitude": "73.8013712"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "186",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-slate-950">
      <Script
        id={`location-schema-${resolvedParams['micro-market']}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />      
      
      <main className="flex-1 container mx-auto px-6 py-36 z-10 relative max-w-6xl">
        {/* Breadcrumb Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-3 block font-bold">
            Pune Micro-Market Connectivity • {data.distance} ({data.driveTime})
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white uppercase tracking-tight mb-6">
            {data.title}
          </h1>
          <p className="font-sans text-base md:text-lg text-slate-400 font-light leading-relaxed">
            {data.excerpt}
          </p>
        </div>

        {/* Transit & Highlight Callout Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Distance & Commute</span>
            <h3 className="font-serif text-3xl text-white mb-1">{data.driveTime}</h3>
            <p className="text-white/60 text-xs font-light">Approximately {data.distance} from {data.keyword.replace('Flats near ', '').replace('Apartments near ', '')} to The Reserve.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Connectivity Catalyst</span>
            <h3 className="font-serif text-xl text-white mb-1">Direct Arterial Route</h3>
            <p className="text-white/60 text-xs font-light">{data.highlight}</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 shadow-xl">
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold block mb-2">Statutory MahaRERA</span>
            <h3 className="font-serif text-xl text-white mb-1">PM1261012600748</h3>
            <p className="text-white/60 text-xs font-light">Vyana Phase 1: Towers T5, T6, T7 | G+21 Floors | 487 Residences.</p>
          </div>
        </div>

        {/* 2 & 3 BHK Floor Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6 p-4">
                <Image src="/images/floor-plans/vyana-3bhk-floorplan.png" alt="3 BHK Blueprint" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-2" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-2xl text-white">Vyana 3 BHK Luxury Residence</h3>
                <span className="text-xs font-bold text-[#0B2B1B] bg-[#d4af37] px-3 py-1 rounded-full uppercase">1,016 Sq.Ft.</span>
              </div>
              <p className="text-white/60 text-xs font-light mb-4">Living-Dining with River Deck | 3.05 m Slab Height | Jaquar Sanitaryware</p>
            </div>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <Link href="/floor-plans" className="text-xs uppercase tracking-widest text-[#d4af37] font-bold hover:text-white transition-colors">
                View Full Dimensions →
              </Link>
              <Link href="/contact" className="px-5 py-2.5 bg-[#d4af37] text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                Enquire
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#05140D] border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6 p-4">
                <Image src="/images/floor-plans/vyana-2bhk-floorplan.png" alt="2 BHK Blueprint" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-2" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif text-2xl text-white">Vyana 2 BHK Riverside Residence</h3>
                <span className="text-xs font-bold text-[#0B2B1B] bg-[#d4af37] px-3 py-1 rounded-full uppercase">791 Sq.Ft.</span>
              </div>
              <p className="text-white/60 text-xs font-light mb-4">Dedicated Utility Balcony | Full Aluform Monolithic Concrete | Kajaria Tiles</p>
            </div>
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <Link href="/floor-plans" className="text-xs uppercase tracking-widest text-[#d4af37] font-bold hover:text-white transition-colors">
                View Full Dimensions →
              </Link>
              <Link href="/contact" className="px-5 py-2.5 bg-[#d4af37] text-slate-950 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                Enquire
              </Link>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-10 rounded-3xl bg-[#05140D] border border-[#d4af37]/30 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-1">VIP Concierge & Site Visits</span>
            <h3 className="font-serif text-2xl text-white">Experience 21.03 Acres of Riverside Nature</h3>
            <p className="text-white/60 text-xs font-light mt-1">Book a private guided presentation at our Experience Centre on Sinhgad Road, Pune.</p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/917744009295?text=Hello%2C%20I%20am%20interested%20in%20The%20Reserve%20by%20Kolte%20Patil%20on%20Sinhgad%20Road.%20Please%20share%20the%20official%20brochure%20and%20pricing." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shrink-0 shadow-lg"
            >
              WhatsApp Brochure
            </a>
            <Link href="/contact" className="px-6 py-3.5 bg-white/5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-slate-950 transition-colors shrink-0">
              Schedule Visit
            </Link>
          </div>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
