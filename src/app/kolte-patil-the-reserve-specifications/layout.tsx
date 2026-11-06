import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Specifications | Aluform Structure & Finishes',
  description: 'Detailed architectural specifications for Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. 100% Aluform monolithic concrete, 3.05 m slab heights, Jaquar fittings, and Kajaria vitrified flooring.',
  keywords: [
    'Kolte Patil The Reserve Specifications',
    'The Reserve Aluform Construction',
    'Kolte Patil Sinhgad Road Fittings',
    'Vyana Specifications Pune'
  ],
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-specifications',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-specifications',
      'x-default': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-specifications',
    },
  }
};

export default function KoltePatilSpecificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Kolte Patil The Reserve Specifications - Sinhgad Road Pune</h1>
      {children}
    </>
  );
}
