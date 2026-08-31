import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '2 & 3 BHK Floor Plans | The Reserve by Kolte Patil',
  description: 'View the master-crafted 2 and 3 BHK floor plans at The Reserve, Sinhgad Road. Thoughtfully designed spaces with excellent cross ventilation and natural light.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/floor-plans',
  }
};

export default function FloorPlansLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Vyana 2 & 3 BHK Luxury Apartments",
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
      <h1 className="sr-only">2 & 3 BHK Luxury Floor Plans in Pune by Kolte Patil Sinhgad Road</h1>
      <Script id="json-ld-floorplans" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
