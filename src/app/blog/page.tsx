import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getAllInsights, getAllGuides, getAllCompares } from "@/lib/mdx";
import InternalLinkingMesh from "@/components/seo/InternalLinkingMesh";
import { BookOpen, Calendar, ArrowRight, Sparkles, Compass, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pune Real Estate Editorial & Market Reports | Kolte Patil The Reserve",
  description: "Official real estate research, buyer guides, and micro-market comparisons for Pune. Deep intelligence on Sinhgad Road, Hinjewadi, Baner, Mahalunge, and Kolte Patil The Reserve.",
  keywords: [
    "Pune Real Estate Blog",
    "Kolte Patil The Reserve Articles",
    "Sinhgad Road Property Guide",
    "Hinjewadi vs Sinhgad Road Comparison",
    "Pune Luxury Apartments Analysis 2026",
    "MahaRERA PM1261012600748 Guides"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/blog",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/blog",
      "x-default": "https://thereserve.koltepatil.digital/blog",
    },
  },
};

export default function BlogPage() {
  const insights = getAllInsights();
  const guides = getAllGuides();
  const compares = getAllCompares();

  const allArticles = [
    ...guides.map((g) => ({ ...g, type: "Master Guide", url: `/guides/${g.slug}` })),
    ...insights.map((i) => ({ ...i, type: "Market Insight", url: `/insights/${i.slug}` })),
    ...compares.map((c) => ({ ...c, type: "Project Comparison", url: `/compare/${c.slug}` })),
  ].sort((a, b) => (new Date(a.meta.date) > new Date(b.meta.date) ? -1 : 1));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Reserve by Kolte Patil Real Estate Journal",
    "description": "Comprehensive market intelligence, architectural perspectives, and micro-market guides for Pune real estate.",
    "url": "https://thereserve.koltepatil.digital/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Kolte-Patil Developers Ltd",
      "logo": "https://thereserve.koltepatil.digital/kolte-patil-logo.png"
    },
    "blogPost": allArticles.map((art) => ({
      "@type": "BlogPosting",
      "headline": art.meta.title,
      "description": art.meta.excerpt,
      "url": `https://thereserve.koltepatil.digital${art.url}`,
      "datePublished": art.meta.date,
      "author": {
        "@type": "Organization",
        "name": "Kolte-Patil Research Desk"
      }
    }))
  };

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] min-h-screen">
      <Script
        id="blog-aggregate-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Research & Editorial Journal • Pune Real Estate 2026
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
            Market Intelligence &
            <span className="block text-[#D4AF37] mt-2 font-light">
              Architectural Perspectives
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm md:text-base text-[#C8D6CF] max-w-2xl mx-auto leading-relaxed font-light">
            In-depth analytical reports, project comparisons, and master buyer manuals examining Sinhgad Road, Hinjewadi, Baner, Mahalunge, and the greater Pune residential market.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
            All Publications ({allArticles.length})
          </span>
          <span className="text-xs text-white/50 font-light hidden sm:inline">
            Verified by Kolte-Patil Research Desk • MahaRERA PM1261012600748
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticles.map((article) => (
            <Link
              key={article.url}
              href={article.url}
              className="group flex flex-col justify-between p-7 rounded-3xl bg-[#081E13] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 text-[10px] uppercase tracking-wider font-semibold text-[#D4AF37]">
                    {article.type}
                  </span>
                  <span className="text-[10px] text-white/40 flex items-center gap-1.5 font-light">
                    <Calendar className="w-3 h-3 text-[#D4AF37]/60" />
                    {new Date(article.meta.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-serif text-xl text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug">
                  {article.meta.title}
                </h2>

                <p className="mt-3 text-xs text-white/70 font-light leading-relaxed line-clamp-3">
                  {article.meta.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#D4AF37] group-hover:text-white transition-colors">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING MESH */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <InternalLinkingMesh 
            title="Explore The Reserve Real Estate Dossier" 
            links={[
              { title: "Kolte Patil The Reserve Price & Cost Sheet", url: "/kolte-patil-the-reserve-price" },
              { title: "Download Official Project E-Brochure PDF", url: "/kolte-patil-the-reserve-brochure" },
              { title: "Vyana 2 & 3 BHK Floor Plans", url: "/kolte-patil-the-reserve-floor-plans" },
              { title: "MahaRERA PM1261012600748 Legal Hub", url: "/kolte-patil-the-reserve-rera" },
              { title: "Live Construction Status & On-Site Updates", url: "/kolte-patil-the-reserve-construction-status" },
              { title: "Towers T5, T6, T7 Elevation & Layouts", url: "/kolte-patil-the-reserve-towers" },
              { title: "21-Acre Master Layout Plan", url: "/kolte-patil-the-reserve-master-layout" },
              { title: "Sales Office & Site Navigation", url: "/kolte-patil-the-reserve-contact" },
            ]} 
          />
        </div>
      </section>
    </div>
  );
}
