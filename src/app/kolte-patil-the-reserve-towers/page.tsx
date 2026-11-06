import type { Metadata } from "next";
import TowersPage from "@/app/towers/page";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Towers | Tower T5, T6, T7 Elevation & Layouts",
  description: "Explore the architectural breakdown of Towers T5, T6, and T7 at Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. G+21 floors, 3.05 m slab heights, 3 elevators per tower, and panoramic river views.",
  keywords: [
    "Kolte Patil The Reserve Towers",
    "Kolte Patil The Reserve Tower T5",
    "Kolte Patil The Reserve Tower T6",
    "Kolte Patil The Reserve Tower T7",
    "Vyana Towers Sinhgad Road",
    "MahaRERA PM1261012600748 Towers"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-towers",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-towers",
      "x-default": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-towers",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Towers | Tower T5, T6, T7 Architectural Guide",
    description: "Detailed tower layouts, floor rise, orientation, and views for Towers T5, T6, and T7 at The Reserve by Kolte Patil, Sinhgad Road, Pune.",
    url: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-towers",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "Kolte Patil The Reserve Towers T5 T6 T7",
      },
    ],
  },
};

export default function KoltePatilTheReserveTowersPage() {
  return <TowersPage />;
}
