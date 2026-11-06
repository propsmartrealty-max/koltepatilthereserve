import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Floor Plans | 2 & 3 BHK Blueprints (791 & 1,016 Sq.Ft.)',
  description: 'Explore detailed 2 BHK (791 sq.ft.) and 3 BHK (1,016 sq.ft.) floor plans for Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. Complete room dimensions, river-facing balcony decks, and 3.05m slab heights. Download blueprints PDF.',
  keywords: [
    'Kolte Patil The Reserve Floor Plans',
    'The Reserve Sinhgad Road Floor Plans',
    'Kolte Patil The Reserve 2 BHK Floor Plan',
    'Kolte Patil The Reserve 3 BHK Floor Plan',
    'Vyana The Reserve Layout Blueprints',
    'MahaRERA PM1261012600748 Floor Plans'
  ],
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-floor-plans',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-floor-plans',
      'x-default': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-floor-plans',
    },
  }
};

export default function KoltePatilFloorPlansLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kolte Patil The Reserve 2 & 3 BHK Floor Plans",
    "image": "https://thereserve.koltepatil.digital/images/floor-plans/vyana-3bhk-floorplan.png",
    "description": "Premium 2 and 3 BHK riverside residences by Kolte Patil on Sinhgad Road, Pune. 791 and 1,016 sq. ft. carpet areas with 3.05 m slab heights.",
    "brand": {
      "@type": "Brand",
      "name": "Kolte Patil Developers"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "8500000",
      "highPrice": "16500000",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <h1 className="sr-only">Kolte Patil The Reserve Floor Plans - 2 & 3 BHK Blueprints Sinhgad Road Pune</h1>
      <Script id="json-ld-kolte-patil-floorplans" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
