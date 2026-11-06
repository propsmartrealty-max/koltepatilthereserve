import React from "react";
import { Sparkles, HelpCircle } from "lucide-react";

interface AISummaryBoxProps {
  summary: string;
  questions?: { q: string; a: string }[];
}

export default function AISummaryBox({ summary, questions }: AISummaryBoxProps) {
  return (
    <div className="bg-[#081E13] border border-[#D4AF37]/30 rounded-3xl p-6 md:p-10 my-10 shadow-2xl relative overflow-hidden">
      {/* Decorative Golden Left Accent Bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D4AF37] via-[#B38F24] to-[#081E13]" />

      <div className="flex items-center gap-2.5 mb-5">
        <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
        <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] font-bold">
          Quick Facts & AI Overview (MahaRERA PM1261012600748)
        </span>
      </div>

      <p className="font-sans text-base md:text-lg text-[#C8D6CF] leading-relaxed font-light mb-6">
        {summary}
      </p>

      {questions && questions.length > 0 && (
        <div className="border-t border-white/10 pt-6 mt-6">
          <h4 className="font-serif text-xl md:text-2xl text-white font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
            <span>Essential Buyer Answers</span>
          </h4>
          <dl className="space-y-4">
            {questions.map((qa, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10"
              >
                <dt className="font-sans font-bold text-sm text-[#D4AF37] mb-1.5">
                  {qa.q}
                </dt>
                <dd className="font-sans text-white/70 font-light text-xs md:text-sm leading-relaxed">
                  {qa.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
