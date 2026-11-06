import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LinkItem {
  title: string;
  url: string;
}

interface InternalLinkingMeshProps {
  title?: string;
  links: LinkItem[];
}

export default function InternalLinkingMesh({
  title = "Explore Pune Real Estate & The Reserve Ecosystem",
  links,
}: InternalLinkingMeshProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="bg-[#081E13] border border-[#D4AF37]/25 rounded-3xl p-6 md:p-10 my-12 shadow-2xl">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
        <h3 className="font-serif text-2xl md:text-3xl text-white font-bold">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#0E2E1D] transition-all duration-300"
          >
            <span className="font-sans text-xs md:text-sm text-white/80 group-hover:text-[#D4AF37] transition-colors line-clamp-1 font-medium">
              {link.title}
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
          </Link>
        ))}
      </div>
    </div>
  );
}
