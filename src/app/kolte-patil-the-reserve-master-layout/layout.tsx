import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Master Plan | 21.03-Acre Layout & Blueprints',
  description: 'Explore the expansive 21.03-acre masterplan layout for Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. Features 3 high-rise towers, 19,750 sq.ft. clubhouse, vehicular-free boulevard, and river promenade.',
  keywords: [
    'Kolte Patil The Reserve Master Plan',
    'The Reserve 21 Acres Master Layout',
    'Kolte Patil Sinhgad Road Master Layout',
    'Vyana Master Plan Pune',
    'MahaRERA PM1261012600748 Master Layout'
  ],
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-master-layout',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-master-layout',
      'x-default': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-master-layout',
    },
  }
};

export default function KoltePatilMasterLayoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Kolte Patil The Reserve 21-Acre Master Layout Sinhgad Road Pune</h1>
      {children}
    </>
  );
}
