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
  { src: "https://www.koltepatil.com/assets/uploads/gallery/17853225611596383832.jpg", alt: "Elegant living room interior at The Reserve by Kolte Patil in Vadgaon on Sinhgad Road, Pune", caption: "Signature Living Room" },
  { src: "https://www.koltepatil.com/assets/uploads/gallery/1785322623788205512.jpg", alt: "Spacious master bedroom designed for luxury living at The Reserve by Kolte Patil, Vadgaon, Pune", caption: "Master Bedroom Suite" },
  { src: "https://www.koltepatil.com/assets/uploads/gallery/17853218911227367318.jpg", alt: "Spacious balcony with scenic views at The Reserve by Kolte Patil, Sinhgad Road, Vadgaon, Pune", caption: "Private Riverside Balcony" },
  { src: "https://www.koltepatil.com/assets/uploads/gallery/17853229111036034291.jpg", alt: "Resort-style swimming pool at dusk at The Reserve by Kolte Patil in Vadgaon, Pune", caption: "Resort-Style Adult & Kids Pool" },
  { src: "https://www.koltepatil.com/assets/uploads/gallery/1785322203994334241.jpg", alt: "Beautifully landscaped garden illuminated at night at The Reserve by Kolte Patil, Vadgaon, Pune", caption: "Central Landscaped Garden" },
  { src: "https://www.koltepatil.com/assets/uploads/gallery/1785322110367031201.jpg", alt: "Contemporary clubhouse entrance with step seating at The Reserve by Kolte Patil, Sinhgad Road, Vadgaon", caption: "19,750 Sq.Ft. Clubhouse Entrance" },
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

      <RevealFooter />
    </div>
  );
}
