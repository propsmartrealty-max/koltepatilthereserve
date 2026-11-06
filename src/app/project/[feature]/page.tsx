import { projectData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { Calendar, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";

export const revalidate = 3600;

export async function generateStaticParams() {
  return Object.keys(projectData).map((feat) => ({
    feature: feat,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const resolvedParams = await params;
  const data = projectData[resolvedParams.feature];
  if (!data) return { title: "Feature Not Found" };

  const baseUrl = "https://thereserve.koltepatil.digital";
  const canonicalUrl = `${baseUrl}/project/${resolvedParams.feature}`;

  return {
    title: `${data.title} | The Reserve by Kolte Patil Sinhgad Road`,
    description: `${data.excerpt} Experience zero space wastage and world-class amenities. Request the latest pricing and brochure for The Reserve on Sinhgad Road, Pune.`,
    keywords: [
      data.keyword,
      "The Reserve Kolte Patil",
      "The Reserve Sinhgad Road",
      "Vyana Kolte Patil",
      "MahaRERA PM1261012600748",
      "Pune Luxury Apartments"
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

export default async function ProjectFeaturePage({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const resolvedParams = await params;
  const currentKey = resolvedParams.feature;
  const data = projectData[currentKey];

  if (!data) {
    notFound();
  }

  const otherFeatures = Object.keys(projectData)
    .filter((k) => k !== currentKey)
    .map((k) => ({
      title: projectData[k].title,
      url: `/project/${k}`,
    }));

  return (
    <div className="relative bg-[#06160E] text-white min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-[#06160E]">
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-36 z-10 relative max-w-5xl mx-auto w-full">
        {/* Soft Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/gallery/interior-deck.jpg"
            alt="Project Architecture"
            fill
            sizes="(max-width: 1200px) 100vw, 80vw"
            className="object-cover opacity-15 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06160E] via-transparent to-[#06160E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081E13] border border-[#D4AF37]/30 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#D4AF37] font-bold">
              Architectural Feature • The Reserve Sinhgad Road
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl leading-tight mb-8 text-white uppercase tracking-tight font-bold">
            {data.title}
          </h1>

          <p className="font-sans text-base md:text-xl text-[#C8D6CF] font-light leading-relaxed mb-10 max-w-3xl mx-auto">
            {data.excerpt}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-white hover:to-white text-[#06160E] font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Experience Visit</span>
            </Link>

            <a
              href="https://wa.me/917744009295?text=Hello%20Kolte%20Patil%20Sales%20Team%2C%20please%20send%20brochure%20and%20pricing%20dossier%20for%20The%20Reserve%20Sinhgad%20Road."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/20 text-white font-sans tracking-[0.2em] uppercase text-xs font-bold rounded-full hover:bg-white hover:text-[#06160E] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Official Dossier</span>
            </a>
          </div>

          {/* Cross Linking */}
          <div className="mt-16 w-full text-left">
            <InternalLinkingMesh
              title="More Architectural Highlights of The Reserve"
              links={otherFeatures}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
