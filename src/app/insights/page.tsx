import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllInsights } from '@/lib/mdx';
import InternalLinkingMesh from '@/components/seo/InternalLinkingMesh';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Market Insights & Research Reports | The Reserve by Kolte Patil',
  description: 'Read the latest insights on Pune luxury real estate, Sinhgad Road elevated flyover impact, rent vs buy analysis, and MahaRERA PM1261012600748 trends.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/insights',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/insights',
      'x-default': 'https://thereserve.koltepatil.digital/insights',
    },
  },
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <div className="relative bg-[#06160E] text-white selection:bg-[#D4AF37] selection:text-[#06160E] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 border-b border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2E1D] border border-[#D4AF37]/30 mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
              Market Intelligence • Kolte-Patil Research
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-tight">
            Real Estate Insights &amp;
            <span className="block text-[#D4AF37] mt-2 font-light">
              Market Perspectives
            </span>
          </h1>

          <p className="mt-6 font-sans text-sm md:text-base text-[#C8D6CF] max-w-2xl mx-auto leading-relaxed font-light">
            Curated intelligence on ultra-luxury living, Pune Ring Road appreciation models, and the architectural renaissance of Sinhgad Road.
          </p>
        </div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group block">
              <article className="flex flex-col h-full rounded-3xl border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 bg-[#081E13] overflow-hidden p-8 hover:-translate-y-1 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">
                    {insight.meta.category || "Research Report"}
                  </span>
                  <span className="text-white/40 text-[10px] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D4AF37]/60" />
                    {new Date(insight.meta.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h2 className="font-serif text-2xl mb-4 text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {insight.meta.title}
                </h2>
                
                <p className="text-white/70 font-light text-xs leading-relaxed flex-grow">
                  {insight.meta.excerpt}
                </p>
                
                <div className="mt-8 pt-4 border-t border-white/10 text-xs font-semibold text-[#D4AF37] group-hover:text-white transition-colors flex items-center justify-between">
                  <span>Read Full Report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING MESH */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <InternalLinkingMesh 
            title="Explore Pricing, Floor Plans & Approvals" 
            links={[
              { title: "Kolte Patil The Reserve Price & Cost Sheet", url: "/kolte-patil-the-reserve-price" },
              { title: "Download Official Project E-Brochure PDF", url: "/kolte-patil-the-reserve-brochure" },
              { title: "MahaRERA PM1261012600748 Legal Hub", url: "/kolte-patil-the-reserve-rera" },
              { title: "Vyana 2 & 3 BHK Floor Plans", url: "/kolte-patil-the-reserve-floor-plans" },
              { title: "Towers T5, T6, T7 Elevation & Layouts", url: "/kolte-patil-the-reserve-towers" },
              { title: "Live Construction Status & On-Site Updates", url: "/kolte-patil-the-reserve-construction-status" },
            ]} 
          />
        </div>
      </section>
    </div>
  );
}
