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
    question: "Where is Vyana at The Reserve located?",
    answer: "Vyana at The Reserve is located on Sinhgad Road, Pune (Vadgaon Khurd, Survey Nos. 39/41/42/43/44/45/46/59/parts, Pune - 411041). It sits along a river-edge with views of the NDA hills and adjoins the upcoming ring road and proposed metro corridor. The project is well connected to Sinhgad Institutes, Swargate, Katraj, Pune Railway Station and the International Airport."
  },
  {
    question: "What configurations are available at Vyana at The Reserve?",
    answer: "Vyana at The Reserve presents thoughtfully designed 2 & 3 BHK apartments with carpet areas of 791 sq. ft. (2 BHK) and 1,016 sq. ft. (3 BHK). Detailed floor plans are available on request."
  },
  {
    question: "How many towers are being launched and how many floors does each tower have?",
    answer: "The initial launch covers 3 towers — T5, T6 and T7 — each with 21 floors and 8 units per floor. The total unit count across these three towers is 487 apartments."
  },
  {
    question: "What is the land parcel size for Vyana at The Reserve?",
    answer: "Vyana at The Reserve is spread across 6.95 acres with river-edge greens & central boulevard amidst 21.03 acres of master development."
  },
  {
    question: "What is the MahaRERA number for Vyana at The Reserve?",
    answer: "Vyana at The Reserve (Phase I — T5, T6, T7) is registered with MahaRERA under registration number PM1261012600748. Project details are available on the MahaRERA portal at maharera.maharashtra.gov.in."
  },
  {
    question: "What type of parking is available?",
    answer: "The project has two basements (B1 + B2) and one stilt level with a mix of covered, mechanical and open parking. 2 BHK units get 1 parking and 3 BHK units get 1 or 2 parkings as per allotment. 30% of parking spots have EV charging provision. Visitor parking is also available."
  },
  {
    question: "What are the key specifications and fittings?",
    answer: "Construction is full aluform with a slab-to-slab height of 3.05 m and clear height of approximately 2.9 m. Flooring is glazed vitrified tiles in living areas, bedrooms and kitchen. Sanitary and CP fittings are Jaquar or equivalent. Tiles are Kajaria or equivalent. All units come with digital lock, video door phone, mosquito nets for windows and sliding doors, AC provision in living-dining and all bedrooms, and exhaust fan provision in kitchen and toilets."
  },
  {
    question: "What is the clubhouse and swimming pool like?",
    answer: "The clubhouse is approximately 19,750 sq. ft. The adult swimming pool measures 84 ft. x 27 ft. and the kids pool measures 14 ft. x 18 ft."
  },
  {
    question: "How can I get configuration details and pricing for Vyana at The Reserve?",
    answer: "Configuration details, floor plans, and pricing for Vyana at The Reserve are available on request. Submit your details through our enquiry form or contact our concierge directly at +91 77440 09295."
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
