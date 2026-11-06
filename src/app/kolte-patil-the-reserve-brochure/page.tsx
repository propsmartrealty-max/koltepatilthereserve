import type { Metadata } from "next";
import BrochurePage from "@/app/brochure/page";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Brochure PDF Download | Official Project E-Brochure",
  description: "Download the official e-brochure for Kolte Patil The Reserve (Vyana Phase 1) on Sinhgad Road, Pune. Access comprehensive floor plans, 21-acre master layout, 19,750 sq.ft. clubhouse specifications, and MahaRERA PM1261012600748 details.",
  keywords: [
    "Kolte Patil The Reserve Brochure PDF",
    "Kolte Patil The Reserve Brochure Download",
    "The Reserve Sinhgad Road E-Brochure",
    "Kolte Patil Sinhgad Road Floor Plan PDF",
    "Vyana at The Reserve Brochure",
    "MahaRERA PM1261012600748 Brochure"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-brochure",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-brochure",
      "x-default": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-brochure",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Official Brochure PDF | Direct Download",
    description: "Get the complete architectural dossier, floor plans, master layout, and lifestyle amenities for The Reserve by Kolte Patil, Sinhgad Road, Pune.",
    url: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-brochure",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "Kolte Patil The Reserve Brochure PDF",
      },
    ],
  },
};

export default function KoltePatilTheReserveBrochurePage() {
  return <BrochurePage />;
}
