import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Specifications | Aluform Structure & Finishes',
  description: 'Detailed architectural specifications for Kolte Patil The Reserve (Vyana Phase 1), Sinhgad Road, Pune. 100% Aluform monolithic concrete, 3.05 m slab heights, Jaquar fittings, and Kajaria vitrified flooring.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/specifications',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/specifications',
      'x-default': 'https://thereserve.koltepatil.digital/specifications',
    },
  }
};

export default function SpecificationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Luxury Project Specifications - The Reserve Sinhgad Road</h1>
      {children}
    </>
  );
}
