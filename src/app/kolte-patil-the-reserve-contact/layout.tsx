import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Kolte Patil The Reserve | Sales Office & Site Visit Booking',
  description: 'Official contact and sales experience centre details for Kolte Patil The Reserve on Sinhgad Road, Pune. Call +91 77440 09295 or schedule a personalized VIP site tour at Vadgaon Khurd. MahaRERA PM1261012600748.',
  keywords: [
    'Kolte Patil The Reserve Contact Number',
    'The Reserve Sinhgad Road Sales Office',
    'Kolte Patil The Reserve Site Visit',
    'The Reserve Vadgaon Khurd Phone Number'
  ],
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-contact',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-contact',
      'x-default': 'https://thereserve.koltepatil.digital/kolte-patil-the-reserve-contact',
    },
  },
};

export default function KoltePatilContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Contact Kolte Patil The Reserve Sales Experience Centre Sinhgad Road Pune</h1>
      {children}
    </>
  );
}
