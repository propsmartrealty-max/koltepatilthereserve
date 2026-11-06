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
    parameter: "Construction Technology",
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
    parameter: "2 & 3 BHK Carpet Area",
    reserve: "791 sq. ft. (2 BHK) | 1,016 sq. ft. (3 BHK) Space-Optimized",
    reserveHighlight: true,
    township: "~650–720 sq. ft. (2 BHK) | ~850–930 sq. ft. (3 BHK)",
  },
  {
    parameter: "EV-Ready Parking",
    reserve: "2 Basements + Stilt with Dedicated EV-Charging Infrastructure",
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
    <div className="w-full">
      {/* Comparison Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-5 text-xs font-bold text-white/50 uppercase tracking-widest w-1/3">
                Key Comparison Parameter
              </th>
              <th className="py-4 px-5 text-xs font-bold text-[#D4AF37] uppercase tracking-widest w-1/3 bg-[#0E2E1D] rounded-t-2xl border-t border-x border-[#D4AF37]/30">
                ★ The Reserve by Kolte-Patil
              </th>
              <th className="py-4 px-5 text-xs font-bold text-white/50 uppercase tracking-widest w-1/3">
                Mega Townships (e.g. Nanded City)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs font-light">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-5 text-white font-medium">
                  {row.parameter}
                </td>
                <td className="py-4 px-5 text-white bg-[#0E2E1D]/60 font-medium border-x border-[#D4AF37]/20">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span className="text-white/95">{row.reserve}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-white/60">
                  <div className="flex items-start gap-2.5">
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 p-4 rounded-2xl bg-white/5">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
            MahaRERA Registration: PM1261012600748
          </p>
          <p className="text-white text-xs font-light mt-0.5">
            Phase 1: Vyana Towers T5, T6, T7 | Vadgaon Khurd, Sinhgad Road
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/compare/the-reserve-vs-nanded-city-pune"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors"
          >
            In-Depth Guide →
          </Link>
          <Link
            href="/floor-plans"
            className="px-6 py-3 bg-[#D4AF37] text-[#06160E] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors"
          >
            Explore Floor Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
