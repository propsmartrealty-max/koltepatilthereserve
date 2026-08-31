"use client";

import Link from "next/link";

interface FeatureRow {
  parameter: string;
  reserve: string;
  reserveHighlight: boolean;
  township: string;
}

const comparisonData: FeatureRow[] = [
  {
    parameter: "Living Environment & Density",
    reserve: "21.03-Acre Low-Density Riverside Sanctuary (Only 487 Units in Phase 1)",
    reserveHighlight: true,
    township: "700-Acre Mega Township (10,000+ High-Density Units)",
  },
  {
    parameter: "Natural Scenery & Views",
    reserve: "Direct Mutha Riverfront & Unobstructed NDA Hill Views",
    reserveHighlight: true,
    township: "Inward Concrete Roads & Dense High-Rise Blocks",
  },
  {
    parameter: "Construction Quality",
    reserve: "100% Aluform Monolithic Concrete (3.05 m Slab Height)",
    reserveHighlight: true,
    township: "Conventional Blockwork & Standard Ceilings (~2.75 m)",
  },
  {
    parameter: "Clubhouse & Pools Per Capita",
    reserve: "19,750 Sq.Ft. Clubhouse + 84x27 Ft. Pool (Exclusive to Residents)",
    reserveHighlight: true,
    township: "Shared Across Thousands of Township Families",
  },
  {
    parameter: "2 BHK & 3 BHK Carpet Area",
    reserve: "791 sq. ft. (2 BHK) | 1,016 sq. ft. (3 BHK) Space-Optimized",
    reserveHighlight: true,
    township: "~650–720 sq. ft. (2 BHK) | ~850–930 sq. ft. (3 BHK)",
  },
  {
    parameter: "EV-Ready Parking",
    reserve: "2 Basements + Stilt with 30% Dedicated EV-Charging Bays",
    reserveHighlight: true,
    township: "Predominantly Standard Surface / Retrofit Parking",
  },
  {
    parameter: "Developer Heritage",
    reserve: "Kolte-Patil Developers Ltd (NSE/BSE Listed, 33+ Yrs, 25M+ Sq.Ft.)",
    reserveHighlight: true,
    township: "Regional Township Developers",
  },
];

export default function CompetitorComparison() {
  return (
    <div className="w-full bg-[#05140D] border border-white/10 rounded-[3rem] p-6 md:p-12 shadow-2xl overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] block mb-3">
          Sinhgad Road Market Benchmark
        </span>
        <h3 className="font-serif text-3xl md:text-5xl text-white">
          The Reserve vs Mega Townships
        </h3>
        <p className="text-white/70 text-sm font-light mt-3">
          Why discerning homebuyers on Sinhgad Road choose a private 21.03-acre low-density riverside sanctuary over crowded mega-townships like Nanded City.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-8 no-scrollbar">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-4 text-xs font-bold text-white/50 uppercase tracking-widest w-1/3">
                Key Comparison Parameter
              </th>
              <th className="py-4 px-4 text-xs font-bold text-[#d4af37] uppercase tracking-widest w-1/3 bg-[#0B2B1B]/80 rounded-t-2xl">
                ★ The Reserve by Kolte Patil
              </th>
              <th className="py-4 px-4 text-xs font-bold text-white/50 uppercase tracking-widest w-1/3">
                Mega Townships (e.g. Nanded City)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs font-light">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-4 text-white font-medium">
                  {row.parameter}
                </td>
                <td className="py-4 px-4 text-white bg-[#0B2B1B]/50 font-medium border-x border-white/5">
                  <div className="flex items-start gap-2">
                    <span className="text-[#d4af37] font-bold">✓</span>
                    <span>{row.reserve}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-white/60">
                  <div className="flex items-start gap-2">
                    <span className="text-white/30">✕</span>
                    <span>{row.township}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 bg-black/20 p-6 rounded-2xl">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">MahaRERA Registration: PM1261012600748</p>
          <p className="text-white text-sm font-medium">Phase 1: Vyana Towers T5, T6, T7 | 487 Residences</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/compare/the-reserve-vs-nanded-city-pune"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
          >
            Read In-Depth Guide →
          </Link>
          <Link
            href="/floor-plans"
            className="px-6 py-3 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
          >
            Explore Floor Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
