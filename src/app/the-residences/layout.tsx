import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Residences | 2 & 3 BHK Riverside Apartments',
  description: 'Explore 2 & 3 BHK luxury residences at The Reserve by Kolte Patil (Vyana Phase 1) on Sinhgad Road, Pune. 791 and 1,016 sq.ft. carpet areas, 3.05 m slab heights, Mutha river views. MahaRERA PM1261012600748.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/the-residences',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/the-residences',
      'x-default': 'https://thereserve.koltepatil.digital/the-residences',
    },
  },
};

export default function TheResidencesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Kolte Patil The Reserve 2 & 3 BHK Luxury Residences Sinhgad Road Pune</h1>
      {children}
    </>
  );
}
