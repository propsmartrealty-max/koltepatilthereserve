import type { Metadata } from "next";
import PossessionDatePage from "@/app/possession-date/page";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Possession Date | Vyana Phase 1 Timeline & RERA Milestones",
  description: "Official possession timeline and completion milestones for Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. Registered under MahaRERA PM1261012600748 with guaranteed delivery governance.",
  keywords: [
    "Kolte Patil The Reserve Possession Date",
    "Kolte Patil The Reserve Delivery Timeline",
    "The Reserve Sinhgad Road Completion Date",
    "MahaRERA PM1261012600748 Possession"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-possession-date",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-possession-date",
      "x-default": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-possession-date",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Possession Date & Handover Milestones",
    description: "Verified possession schedule for Towers T5, T6, and T7 at The Reserve by Kolte Patil, Sinhgad Road, Pune. MahaRERA PM1261012600748.",
    url: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-possession-date",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "Kolte Patil The Reserve Possession Date",
      },
    ],
  },
};

export default function KoltePatilTheReservePossessionDatePage() {
  return <PossessionDatePage />;
}
