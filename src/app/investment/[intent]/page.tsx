import { investmentData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { Calendar, MessageCircle, TrendingUp, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(investmentData).map((inv) => ({
    intent: inv,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ intent: string }>;
}) {
  const resolvedParams = await params;
  const data = investmentData[resolvedParams.intent];
  if (!data) return { title: "Investment Page Not Found" };

  const baseUrl = "https://thereserve.koltepatil.digital";
  const canonicalUrl = `${baseUrl}/investment/${resolvedParams.intent}`;

  return {
    title: `${data.title} | The Reserve by Kolte Patil Sinhgad Road`,
    description: data.excerpt,
    keywords: [
      data.keyword,
      "The Reserve Kolte Patil",
      "Pune Real Estate Investment 2026",
      "Sinhgad Road Property ROI",
      "Pune Ring Road Capital Gains",
      "MahaRERA PM1261012600748",
      "Luxury Homes Pune"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${data.title} | The Reserve by Kolte Patil`,
      description: data.excerpt,
      url: canonicalUrl,
      images: [
        {
          url: "/images/gallery/interior-deck.jpg",
          width: 1200,
          height: 630,
          alt: `${data.title} - The Reserve by Kolte Patil`,
        },
      ],
    },
  };
}

export default async function InvestmentIntentPage({
  params,
}: {
  params: Promise<{ intent: string }>;
}) {
  const resolvedParams = await params;
  const currentKey = resolvedParams.intent;
  const data = investmentData[currentKey];

  if (!data) {
    notFound();
  }

  // Cross links to other investment hubs
  const otherIntents = Object.keys(investmentData)
    .filter((k) => k !== currentKey)
    .map((k) => ({
      title: investmentData[k].title,
      url: `/investment/${k}`,
    }));

  return (
    <div className="relative bg-[#06160E] text-white min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-[#06160E]">
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-36 z-10 relative max-w-5xl mx-auto w-full">
        {/* Soft Ambient Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/gallery/interior-deck.jpg"
            alt="Investment Architecture The Reserve"
            fill
            sizes="(max-width: 1200px) 100vw, 80vw"
            className="object-cover opacity-15 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06160E] via-transparent to-[#06160E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081E13] border border-[#D4AF37]/30 mb-8">
            <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#D4AF37] font-bold">
              Strategic Real Estate Investment • Pune Market
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl leading-tight mb-8 text-white uppercase tracking-tight font-bold">
            {data.title}
          </h1>

          <p className="font-sans text-base md:text-xl text-[#C8D6CF] font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            {data.excerpt}
          </p>

          {/* Key Investment Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 text-left">
            <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                Developer Security
              </span>
              <span className="font-serif text-lg text-white font-semibold block">
                Kolte-Patil Developers Ltd
              </span>
              <span className="text-white/60 text-xs font-light mt-1 block">
                NSE/BSE Listed • 33+ Yrs • CRISIL Rated
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                Infrastructure Driver
              </span>
              <span className="font-serif text-lg text-white font-semibold block">
                PMRDA Pune Ring Road
              </span>
              <span className="text-white/60 text-xs font-light mt-1 block">
                Adjoining project boundary • 60% faster transit
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#081E13] border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                Statutory MahaRERA
              </span>
              <span className="font-mono text-lg text-white font-bold block">
                PM1261012600748
              </span>
              <span className="text-white/60 text-xs font-light mt-1 block">
                Vyana Phase 1 • Verified & Approved
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule VIP Site Visit</span>
            </Link>

            <a
              href="https://wa.me/917744009295?text=Hello%20Kolte%20Patil%20Sales%20Team%2C%20I%20am%20interested%20in%20The%20Reserve%20Sinhgad%20Road%20investment%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/20 text-white font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full hover:bg-white hover:text-[#06160E] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Request ROI & Cost Sheet</span>
            </a>
          </div>

          {/* Cross Linking */}
          <div className="mt-16 w-full text-left">
            <InternalLinkingMesh
              title="More Pune Real Estate Investment Blueprints"
              links={otherIntents}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
