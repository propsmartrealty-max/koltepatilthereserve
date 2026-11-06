import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Amenities | 19,750 Sq.Ft. Clubhouse & 84-Ft Pool',
  description: 'Experience 40+ lifestyle amenities at Kolte Patil The Reserve on Sinhgad Road, Pune. Features 19,750 sq.ft. multi-tier clubhouse, 84x27 ft. resort swimming pool, pickleball arena, and Mutha riverfront trail.',
  keywords: [
    'Kolte Patil The Reserve Amenities',
    'The Reserve Clubhouse 19750 Sq Ft',
    'Kolte Patil The Reserve Swimming Pool',
    'The Reserve Sinhgad Road Sports Amenities',
    'Vyana Amenities Pune'
  ],
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-amenities',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-amenities',
      'x-default': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-amenities',
    },
  }
};

export default function KoltePatilAmenitiesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "19,750 Sq.Ft. Contemporary Clubhouse" },
      { "@type": "ListItem", "position": 2, "name": "84 ft. x 27 ft. Resort Adult Swimming Pool" },
      { "@type": "ListItem", "position": 3, "name": "Championship Pickleball Arena" },
      { "@type": "ListItem", "position": 4, "name": "Mutha Riverfront Promenade" }
    ]
  };

  return (
    <>
      <h1 className="sr-only">Kolte Patil The Reserve Amenities & 19,750 Sq.Ft. Clubhouse Sinhgad Road Pune</h1>
      <Script id="json-ld-kolte-patil-amenities" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
