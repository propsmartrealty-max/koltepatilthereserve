import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kolte Patil The Reserve Image Gallery | Towers, Clubhouse & Views',
  description: 'View high-resolution photography, elevation renders, 19,750 sq.ft. clubhouse visuals, and panoramic NDA hill views for Kolte Patil The Reserve on Sinhgad Road, Pune.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/gallery',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/gallery',
      'x-default': 'https://thereserve.koltepatil.digital/gallery',
    },
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Kolte Patil The Reserve Image Gallery - Sinhgad Road, Pune</h1>
      {children}
    </>
  );
}
