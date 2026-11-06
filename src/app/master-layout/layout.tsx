import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Master Plan | 21.03-Acre Layout & Blueprints',
  description: 'Explore the expansive 21.03-acre masterplan layout for Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. Features 3 high-rise towers, 19,750 sq.ft. clubhouse, vehicular-free boulevard, and river promenade.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/master-layout',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/master-layout',
      'x-default': 'https://thereserve.koltepatil.digital/master-layout',
    },
  }
};

export default function MasterLayoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">21 Acre Master Layout - The Reserve by Kolte Patil Sinhgad Road</h1>
      {children}
    </>
  );
}
