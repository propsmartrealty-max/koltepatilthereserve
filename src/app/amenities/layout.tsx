import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Amenities | 19,750 Sq.Ft. Clubhouse & 84-Ft Pool',
  description: 'Experience 40+ lifestyle amenities at Kolte Patil The Reserve on Sinhgad Road, Pune. Features 19,750 sq.ft. multi-tier clubhouse, 84x27 ft. resort swimming pool, pickleball arena, and Mutha riverfront trail.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/amenities',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/amenities',
      'x-default': 'https://thereserve.koltepatil.digital/amenities',
    },
  }
};

export default function AmenitiesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Pickleball Court" },
      { "@type": "ListItem", "position": 2, "name": "Riverside Walkway" },
      { "@type": "ListItem", "position": 3, "name": "Central Landscaped Boulevard" },
      { "@type": "ListItem", "position": 4, "name": "Luxury Clubhouse" }
    ]
  };

  return (
    <>
      <h1 className="sr-only">Ultra-Luxury Amenities at The Reserve by Kolte Patil Sinhgad Road</h1>
      <Script id="json-ld-amenities" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
