import RevealFooter from "@/components/layout/RevealFooter";
import { configData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export async function generateStaticParams() {
  return Object.keys(configData).map((cfg) => ({
    config: cfg,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ config: string }> }) {
  const resolvedParams = await params;
  const data = configData[resolvedParams.config];
  if (!data) return { title: 'Configuration Not Found' };
  return {
    title: `${data.title} | The Reserve by Kolte Patil`,
    description: data.excerpt,
    keywords: [data.keyword, "Luxury Apartments Pune", "Kolte Patil The Reserve"]
  };
}

export default async function ConfigurationPage({ params }: { params: Promise<{ config: string }> }) {
  const resolvedParams = await params;
  const data = configData[resolvedParams.config];
  
  if (!data) {
    notFound();
  }

  const is2BHK = resolvedParams.config.includes('2-bhk');
  const floorplanImage = is2BHK 
    ? "/images/floor-plans/vyana-2bhk-floorplan.png" 
    : "/images/floor-plans/vyana-3bhk-floorplan.png";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${data.title} at The Reserve by Kolte Patil`,
    "description": data.excerpt,
    "image": `https://thereserve.koltepatil.digital${floorplanImage}`,
    "brand": {
      "@type": "Brand",
      "name": "Kolte Patil"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "186",
      "bestRating": "5"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://thereserve.koltepatil.digital/the-residences/${resolvedParams.config}`,
      "priceCurrency": "INR",
      "price": is2BHK ? "8500000" : "13500000",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Kolte-Patil Developers Ltd"
      }
    }
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-slate-950">
      <Script
        id={`product-schema-${resolvedParams.config}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />      
      
      <main className="flex-1 container mx-auto px-6 py-36 z-10 relative max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-4 block font-bold">
            Bespoke Floorplans & Architecture
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white uppercase tracking-tight mb-6">
            {data.title}
          </h1>
          <p className="font-sans text-base md:text-lg text-slate-400 font-light leading-relaxed">
            {data.excerpt}
          </p>
        </div>

        {/* Floor Plan Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#05140D] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl mb-16">
          <div className="lg:col-span-6 relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center">
            <Image 
              src={floorplanImage}
              alt={`${data.title} Blueprint`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block mb-1">MahaRERA: PM1261012600748</span>
              <h2 className="font-serif text-3xl text-white">{is2BHK ? 'Vyana 2 BHK (791 Sq.Ft.)' : 'Vyana 3 BHK (1,016 Sq.Ft.)'}</h2>
              <p className="text-slate-400 text-xs font-light mt-1">Towers T5, T6, T7 | G+21 Floors | Full Aluform Monolithic Structure</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Slab-to-Slab Height</span>
                <span className="text-white text-sm font-medium">3.05 m (~2.9 m Clear)</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Orientation</span>
                <span className="text-white text-sm font-medium">River / Hill Facing</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Flooring Standard</span>
                <span className="text-white text-sm font-medium">Kajaria Vitrified</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Sanitary Fittings</span>
                <span className="text-white text-sm font-medium">Jaquar Premium</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/floor-plans" className="px-8 py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full hover:bg-white transition-colors shadow-lg">
                Explore Full Dimensions
              </Link>
              <a 
                href="https://wa.me/917744009295?text=I%20would%20like%20to%20receive%20the%20detailed%20floorplan%20and%20cost%20sheet%20PDF%20for%20The%20Reserve." 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full hover:bg-white hover:text-slate-950 transition-colors"
              >
                WhatsApp Blueprint PDF
              </a>
            </div>
          </div>
        </div>

      </main>

      <RevealFooter />
    </div>
  );
}
