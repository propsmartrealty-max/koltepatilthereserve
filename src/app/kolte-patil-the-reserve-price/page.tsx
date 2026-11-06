import type { Metadata } from "next";
import PricingPage from "@/app/pricing/page";

export const metadata: Metadata = {
  title: "Kolte Patil The Reserve Price & Cost Sheet | 2 & 3 BHK Rates Sinhgad Road",
  description: "Official 2026 pricing and all-inclusive cost sheets for Kolte Patil The Reserve (Vyana Phase 1) on Sinhgad Road, Pune. 2 BHK starting ₹85 Lacs*, 3 BHK starting ₹1.25 Cr*. Verified MahaRERA PM1261012600748.",
  keywords: [
    "Kolte Patil The Reserve Price",
    "Kolte Patil The Reserve Cost Sheet",
    "The Reserve Sinhgad Road Pricing",
    "Kolte Patil The Reserve 2 BHK Price",
    "Kolte Patil The Reserve 3 BHK Price",
    "Kolte Patil Sinhgad Road Payment Plan",
    "MahaRERA PM1261012600748 Price List"
  ],
  alternates: {
    canonical: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-price",
    languages: {
      "en-IN": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-price",
      "x-default": "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-price",
    },
  },
  openGraph: {
    title: "Kolte Patil The Reserve Price & Cost Sheet | Official Developer Rates",
    description: "Official price list, payment schedules, and bank home loan approvals for The Reserve by Kolte Patil, Sinhgad Road, Pune. MahaRERA PM1261012600748.",
    url: "https://thereserve.koltepatil.digital/kolte-patil-the-reserve-price",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "Kolte Patil The Reserve Price List",
      },
    ],
  },
};

export default function KoltePatilTheReservePricePage() {
  return <PricingPage />;
}
