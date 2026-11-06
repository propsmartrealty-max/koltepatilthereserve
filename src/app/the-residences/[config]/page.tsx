import { configData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { Calendar, MessageCircle, ShieldCheck, Ruler, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(configData).map((cfg) => ({
    config: cfg,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ config: string }>;
}) {
  const resolvedParams = await params;
  const data = configData[resolvedParams.config];
  if (!data) return { title: "Configuration Not Found" };

  const baseUrl = "https://thereserve.koltepatil.digital";
  const canonicalUrl = `${baseUrl}/the-residences/${resolvedParams.config}`;

  return {
    title: `${data.title} | The Reserve by Kolte Patil Sinhgad Road`,
    description: data.excerpt,
    keywords: [
      data.keyword,
      "The Reserve 2 BHK",
      "The Reserve 3 BHK",
      "The Reserve 2.5 BHK",
      "Vyana Kolte Patil",
      "MahaRERA PM1261012600748",
      "Sinhgad Road Flats Price",
      "Vadgaon Khurd Apartments",
      "Pune Luxury Housing"
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

export default async function ConfigurationPage({
  params,
}: {
  params: Promise<{ config: string }>;
}) {
  const resolvedParams = await params;
  const currentKey = resolvedParams.config;
  const data = configData[currentKey];

  if (!data) {
    notFound();
  }

  const is2BHK = currentKey.includes("2-bhk") || currentKey.includes("2-5-bhk");
  const floorplanImage = is2BHK
    ? "/images/floor-plans/vyana-2bhk-floorplan.png"
    : "/images/floor-plans/vyana-3bhk-floorplan.png";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${data.title} at The Reserve by Kolte Patil`,
    description: data.excerpt,
    image: `https://thereserve.koltepatil.digital${floorplanImage}`,
    brand: {
      "@type": "Brand",
      name: "Kolte-Patil Developers Ltd",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "186",
      bestRating: "5",
    },
    offers: {
      "@type": "Offer",
      url: `https://thereserve.koltepatil.digital/the-residences/${currentKey}`,
      priceCurrency: "INR",
      price: is2BHK ? "8500000" : "13500000",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "RealEstateAgent",
        name: "Kolte-Patil Developers Ltd",
      },
    },
  };

  // Cross links to other residence configs
  const otherConfigs = Object.keys(configData)
    .filter((k) => k !== currentKey)
    .map((k) => ({
      title: configData[k].title,
      url: `/the-residences/${k}`,
    }));

  return (
    <div className="relative bg-[#06160E] text-white min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-[#06160E]">
      <Script
        id={`product-schema-${currentKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="flex-1 container mx-auto px-6 py-36 z-10 relative max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-4 block font-bold">
            Bespoke Architecture • {data.configType}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-6 font-bold leading-tight">
            {data.title}
          </h1>
          <p className="font-sans text-sm md:text-base text-[#C8D6CF] font-light leading-relaxed">
            {data.excerpt}
          </p>
        </div>

        {/* Floor Plan Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#081E13] border border-[#D4AF37]/25 rounded-[3rem] p-8 md:p-12 shadow-2xl mb-16">
          <div className="lg:col-span-6 relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/10 p-4 flex items-center justify-center">
            <Image
              src={floorplanImage}
              alt={`${data.title} Blueprint The Reserve`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
              priority
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  MahaRERA: PM1261012600748
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-bold">
                {is2BHK ? "Vyana 2 BHK (791 Sq.Ft.)" : "Vyana 3 BHK (1,016 Sq.Ft.)"}
              </h2>
              <p className="text-[#C8D6CF] text-xs font-light mt-1">
                Towers T5, T6, T7 | G+21 Floors | Full Aluform Monolithic Structure
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-6">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-white/50 block font-semibold">
                  Carpet Area
                </span>
                <span className="text-white text-sm font-bold mt-0.5 block">
                  {data.carpetArea}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-white/50 block font-semibold">
                  Slab-to-Slab Height
                </span>
                <span className="text-white text-sm font-bold mt-0.5 block">
                  3.05 m (~2.9 m Clear)
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-white/50 block font-semibold">
                  Orientation
                </span>
                <span className="text-white text-sm font-bold mt-0.5 block">
                  River / NDA Hill Facing
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-white/50 block font-semibold">
                  Construction Spec
                </span>
                <span className="text-white text-sm font-bold mt-0.5 block">
                  Full Aluform + Kajaria
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/floor-plans"
                className="px-8 py-4 bg-[#D4AF37] text-[#06160E] font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full hover:bg-white transition-colors shadow-lg flex items-center gap-2"
              >
                <Ruler className="w-4 h-4" />
                <span>Explore Full Dimensions</span>
              </Link>
              <a
                href="https://wa.me/917744009295?text=Hello%20Kolte%20Patil%20Sales%20Team%2C%20I%20would%20like%20to%20receive%20the%20detailed%20floorplan%20and%20cost%20sheet%20PDF%20for%20The%20Reserve%20Sinhgad%20Road."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full hover:bg-white hover:text-[#06160E] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Blueprint PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Cross-linking to Other Configurations */}
        <InternalLinkingMesh
          title="Explore More Configurations & Residences at The Reserve"
          links={otherConfigs}
        />

      </main>
    </div>
  );
}
