import React from 'react';
import RevealFooter from "@/components/layout/RevealFooter";
import Image from "next/image";
import Script from "next/script";
import TiltCard from "@/components/ui/TiltCard";

export const metadata = {
  title: "Project Gallery | Kolte Patil The Reserve",
  description: "View stunning high-resolution exterior and interior images of The Reserve by Kolte Patil, Sinhagad Road, Pune.",
};

const images = [
  { src: "/images/gallery/vyana-towers.jpg", alt: "Vyana Towers T5, T6, T7 at The Reserve by Kolte Patil in Vadgaon on Sinhgad Road, Pune", caption: "Vyana 21-Storey Residential Towers" },
  { src: "/images/gallery/interior-deck.jpg", alt: "Signature living room and expansive river-facing viewing deck at The Reserve by Kolte Patil", caption: "Signature Living Room & Viewing Deck" },
  { src: "/images/gallery/master-bedroom.jpg", alt: "Spacious master bedroom designed for luxury living at The Reserve by Kolte Patil, Vadgaon, Pune", caption: "Master Bedroom Suite" },
  { src: "/images/gallery/river-hills.jpg", alt: "Spacious balcony with scenic views of Mutha River and NDA hills at The Reserve", caption: "Private Riverside & Hill-Facing Balcony" },
  { src: "/images/gallery/resort-swimming-pool.jpg", alt: "84 ft. x 27 ft. resort-style adult swimming pool and kids splash pool at The Reserve", caption: "84x27 ft. Resort Swimming Pool & Deck" },
  { src: "/images/gallery/clubhouse-step-seating.jpg", alt: "Contemporary 19,750 sq.ft. clubhouse with step seating amphitheater architecture at The Reserve", caption: "19,750 Sq.Ft. Clubhouse with Step Seating" },
  { src: "/images/gallery/central-boulevard.jpg", alt: "Central landscaped boulevard and grand green spine across 21.03 acres master development", caption: "Central Landscaped Boulevard" },
  { src: "/images/gallery/sports-turf.jpg", alt: "Championship pickleball court and outdoor sports turf at The Reserve by Kolte Patil", caption: "Pickleball Court & Sports Turf" },
  { src: "/images/gallery/landscaped-plazas.jpg", alt: "Open-air landscaped plazas, family gathering zones, and reflexology paths at The Reserve", caption: "Landscaped Plazas & Nature Trails" },
  { src: "/images/gallery/clubhouse-lounge.jpg", alt: "Double-height designer resident lounge and banquet hall at The Reserve Clubhouse", caption: "Designer Resident Lounge & Co-Working" },
  { src: "/images/gallery/architectural-grandeur.jpg", alt: "Full Aluform monolithic concrete construction and architectural elevation at The Reserve", caption: "Monolithic Aluform Architectural Design" },
];

export default function GalleryPage() {
  // Generate ImageObject Schema for Google Images SEO
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "image": images.map(img => ({
      "@type": "ImageObject",
      "contentUrl": img.src,
      "caption": img.caption,
      "name": img.alt
    }))
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col">
      <Script
        id="gallery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Visual Experience
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            The Reserve Gallery.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Immerse yourself in the architectural brilliance of Pune's most coveted riverside development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <TiltCard key={idx} className="w-full h-[400px]">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-[60]">
                <span className="font-sans text-xs tracking-widest text-[#d4af37] uppercase font-bold block mb-1">
                  Render
                </span>
                <h3 className="font-serif text-xl text-white drop-shadow-lg">{img.caption}</h3>
              </div>
            </TiltCard>
          ))}
        </div>
      </main>
    </div>
  );
}
