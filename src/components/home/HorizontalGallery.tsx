"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const galleryItems = [
    {
      img: "/images/gallery/interior-deck.jpg",
      title: "Signature River Decks",
      desc: "Expansive living spaces with panoramic views of Mutha River & NDA Hills."
    },
    {
      img: "/images/gallery/master-bedroom.jpg",
      title: "Master Bedroom Suites",
      desc: "3.05 m slab heights, Kajaria vitrified finishes, and designer en-suites."
    },
    {
      img: "/images/gallery/resort-swimming-pool.jpg",
      title: "84x27 ft. Resort Pool",
      desc: "Olympic-inspired lap pool & kids splash pool alongside 19,750 sq.ft. clubhouse."
    },
    {
      img: "/images/gallery/sports-turf.jpg",
      title: "Championship Sports Turf",
      desc: "Pickleball court, cricket practice net pitch, and wellness jogging loop."
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-950">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-bold block mb-4">
            The Aesthetics
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-100 leading-tight">
            Curated <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-yellow-100">Spaces.</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[400vw] md:w-[300vw]">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative h-[50vh] md:h-[60vh] w-full md:w-[60vw] flex-shrink-0 group rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={item.img} 
                alt={item.title} 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-bold block mb-2">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-slate-100 mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-slate-400 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
