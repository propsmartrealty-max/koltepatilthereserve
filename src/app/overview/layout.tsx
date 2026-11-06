import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Project Overview | 21-Acre Riverside Development',
  description: 'Complete overview of Kolte Patil The Reserve (Vyana Phase 1) on Sinhgad Road, Pune. 21.03 acres of riverside living, 19,750 sq.ft. clubhouse, 2 & 3 BHK luxury residences, and MahaRERA PM1261012600748 certification.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/overview',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/overview',
      'x-default': 'https://thereserve.koltepatil.digital/overview',
    },
  }
};

export default function OverviewLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Reserve by Kolte Patil",
    "description": "Discover the philosophy behind The Reserve by Kolte Patil. A rare 21.03-acre riverside luxury real estate development on Sinhgad Road, Pune.",
    "url": "https://thereserve.koltepatil.digital/overview"
  };

  return (
    <>
      <h1 className="sr-only">The Reserve by Kolte Patil Sinhgad Road - Overview</h1>
      <Script id="json-ld-overview" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
