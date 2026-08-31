import React from 'react';
import RevealFooter from "@/components/layout/RevealFooter";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Kolte Patil The Reserve",
  description: "Find answers regarding pricing, floor plans, RERA details, and possession dates for The Reserve on Sinhagad Road.",
};

const faqs = [
  {
    question: "Where is The Reserve (Vyana Phase 1) located in Pune?",
    answer: "The Reserve by Kolte Patil is situated at Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road, Pune - 411041. It sits directly along a scenic Mutha River edge near Nanded Fata with views of the NDA hills and direct frontage to the upcoming Pune Ring Road corridor and Swargate Metro extension."
  },
  {
    question: "What is the MahaRERA registration number for The Reserve?",
    answer: "Vyana at The Reserve (Phase I — Towers T5, T6, T7) is registered with MahaRERA under registration number PM1261012600748. Project details and approvals are verified on the official MahaRERA portal (maharera.maharashtra.gov.in)."
  },
  {
    question: "What configurations and carpet areas are available at The Reserve?",
    answer: "Vyana at The Reserve presents master-crafted 2 BHK residences with 791 sq. ft. carpet area, 2.5 BHK residences, and 3 BHK luxury residences with 1,016 sq. ft. carpet area. All layouts provide zero space wastage, private river decks, and 3.05 m slab-to-slab heights (~2.9 m clear ceiling height)."
  },
  {
    question: "How many towers and floors are being launched in Phase 1?",
    answer: "Phase 1 covers 3 towers — T5, T6 and T7 — each rising G+21 floors with 8 residences per floor and 3 high-speed elevators per tower. The total unit count across these three towers is 487 apartments."
  },
  {
    question: "How does The Reserve compare to Nanded City Pune?",
    answer: "Unlike Nanded City which is a 700-acre high-density mega-township with 10,000+ units sharing amenities, The Reserve is an exclusive 21.03-acre low-density sanctuary with only 487 units in Phase 1, true Mutha riverfront frontage, 3.05 m ceiling heights, and a dedicated 19,750 sq.ft. contemporary clubhouse exclusive to residents."
  },
  {
    question: "What construction technology and fittings are used?",
    answer: "Construction is 100% full Aluform monolithic concrete with a slab-to-slab height of 3.05 m. Flooring is premium glazed vitrified tiles (Kajaria or equivalent). Sanitary and CP fittings are Jaquar premium series. All residences include digital door locks, video door phones, AC points, and mosquito net provisions."
  },
  {
    question: "What are the clubhouse and swimming pool specifications?",
    answer: "The contemporary clubhouse spans approximately 19,750 sq. ft. with amphitheater step-seating. The Olympic-inspired adult swimming pool measures 84 ft. x 27 ft. and the dedicated kids splash pool measures 14 ft. x 18 ft."
  },
  {
    question: "What parking provisions and EV facilities are available?",
    answer: "The project provides multi-level parking across 2 Basements (B1 + B2) and 1 Stilt level. 30% of all residential parking bays are pre-equipped with dedicated EV-charging infrastructure and RFID boom-barrier security."
  },
  {
    question: "Who is the developer of The Reserve?",
    answer: "The Reserve is developed by Kolte-Patil Developers Ltd (NSE: KOLTEPATIL, BSE: 532924), a leading publicly listed real estate developer with over 33 years of heritage and 25+ million sq. ft. delivered across Pune, Mumbai, and Bengaluru."
  },
  {
    question: "How can I book a site visit or request official pricing?",
    answer: "You can book a private VIP presentation at our Sales Experience Centre on Sinhgad Road by contacting our concierge directly at +91 77440 09295 or submitting an online enquiry."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative max-w-4xl">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Project Information
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            Frequently Asked Questions.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Everything you need to know about investing in Pune's most anticipated riverside development.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-[#d4af37]/30 transition-colors group">
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#d4af37] transition-colors">{faq.question}</h3>
              <p className="font-sans text-slate-400 font-light leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-sans text-slate-400 font-light mb-6">Cannot find what you are looking for?</p>
          <Link href="/contact" className="px-8 py-4 bg-[#d4af37] text-slate-950 font-sans tracking-[0.2em] uppercase text-xs font-bold hover:bg-white transition-colors inline-block">
            Contact Sales Team
          </Link>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
