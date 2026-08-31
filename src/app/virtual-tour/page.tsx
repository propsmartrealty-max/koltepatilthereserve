import React from 'react';
import RevealFooter from "@/components/layout/RevealFooter";
import Script from "next/script";

export const metadata = {
  title: "Virtual Tour & Walkthrough | Kolte Patil The Reserve",
  description: "Experience a 360-degree virtual tour and drone flyovers of Kolte Patil The Reserve on Sinhagad Road.",
};

export default function VirtualTourPage() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Kolte Patil The Reserve - Virtual Walkthrough & Overview",
    "description": "A comprehensive virtual walkthrough of The Reserve 2 & 3 BHK riverside residences by Kolte Patil at Vadgaon Khurd, Sinhgad Road, Pune.",
    "thumbnailUrl": "https://www.koltepatil.com/assets/uploads/gallery/1785322110367031201.jpg",
    "uploadDate": "2026-08-01T09:00:00+05:30",
    "contentUrl": "https://player.vimeo.com/video/394627252",
    "embedUrl": "https://player.vimeo.com/video/394627252"
  };

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-[#d4af37] selection:text-white">
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />      
      <main className="flex-1 container mx-auto px-6 py-40 z-10 relative max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#d4af37] mb-6 block font-bold">
            Interactive Experience
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-white uppercase tracking-tight">
            Cinematic Virtual Tour.
          </h1>
          <p className="font-sans text-slate-400 font-light max-w-2xl mx-auto">
            Experience our signature 2 & 3 BHK residences, river-facing greens, and the 19,750 sq.ft. contemporary clubhouse from anywhere in the world.
          </p>
        </div>

        {/* Video Embed Container */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] group bg-black">
          <iframe 
            src="https://player.vimeo.com/video/394627252?autoplay=0&muted=0&loop=1&title=0&byline=0&portrait=0" 
            title="The Reserve by Kolte Patil Virtual Tour"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-[#d4af37]/50 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-4">Riverside Drone View</h3>
            <p className="font-sans text-slate-400 font-light text-sm mb-6">Aerial vistas of 21.03 acres master development along Mutha River and NDA hills.</p>
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest block">4K High Definition</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-[#d4af37]/50 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-4">Vyana 2 & 3 BHK Layouts</h3>
            <p className="font-sans text-slate-400 font-light text-sm mb-6">Explore 791 & 1,016 sq.ft. space-optimized aluform layouts.</p>
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest block">Floorplan 3D View</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center hover:border-[#d4af37]/50 transition-colors">
            <h3 className="font-serif text-2xl text-white mb-4">19,750 Sq.Ft. Clubhouse</h3>
            <p className="font-sans text-slate-400 font-light text-sm mb-6">Step seating architecture, 84x27 ft. resort pool, and wellness hubs.</p>
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest block">Amenity Walkthrough</span>
          </div>
        </div>
      </main>

      <RevealFooter />
    </div>
  );
}
