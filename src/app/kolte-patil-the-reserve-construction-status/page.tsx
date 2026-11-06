import type { Metadata } from "next";
import ConstructionStatusPage from "@/app/construction-status/page";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Construction Status 2026 | Live Work Progress & Updates",
  description: "Track the latest construction status of Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. Real-time updates on Towers T5, T6, and T7 foundation, Aluform monolithic pours, and MahaRERA PM1261012600748 milestones.",
  keywords: [
    "Kolte Patil The Reserve Construction Status",
    "Kolte Patil The Reserve Site Progress",
    "The Reserve Sinhgad Road Work Updates",
    "MahaRERA PM1261012600748 Work Progress"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-construction-status",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-construction-status",
      "x-default": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-construction-status",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Construction Status 2026 | Live Progress",
    description: "Verified on-site structural updates for Towers T5, T6, and T7 at The Reserve by Kolte Patil, Sinhgad Road, Pune.",
    url: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-construction-status",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "Kolte Patil The Reserve Construction Status",
      },
    ],
  },
};

export default function KoltePatilTheReserveConstructionStatusPage() {
  return <ConstructionStatusPage />;
}
