import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Location | Sinhgad Road, Vadgaon Khurd, Pune 411041',
  description: 'Prime location map for Kolte Patil The Reserve at Vadgaon Khurd, Sinhgad Road, Pune - 411041. Immediate access to Nanded Fata, upcoming PMRDA Pune Ring Road, and Sinhgad Road flyover.',
  keywords: [
    'Kolte Patil The Reserve Location',
    'The Reserve Vadgaon Khurd Pune',
    'Kolte Patil Sinhgad Road Address',
    'The Reserve Google Maps Pune',
    'Flats near Nanded Fata Sinhgad Road'
  ],
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-location',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-location',
      'x-default': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-location',
    },
  }
};

export default function KoltePatilLocationLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "The Reserve by Kolte Patil - Sinhgad Road",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411041",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.4622871",
      "longitude": "73.8013712"
    },
    "hasMap": "https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0"
  };

  return (
    <>
      <h1 className="sr-only">Kolte Patil The Reserve Location & Address - Vadgaon Khurd, Sinhgad Road, Pune</h1>
      <Script id="json-ld-kolte-patil-location" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
