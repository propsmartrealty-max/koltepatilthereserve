import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Kolte Patil The Reserve | Sales Office & Site Visit Booking',
  description: 'Official contact and sales experience centre details for Kolte Patil The Reserve on Sinhgad Road, Pune. Call +91 77440 09295 or schedule a personalized VIP site tour at Vadgaon Khurd. MahaRERA PM1261012600748.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/contact',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/contact',
      'x-default': 'https://thereserve.koltepatil.digital/contact',
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Contact Kolte Patil The Reserve Sales Experience Centre Sinhgad Road Pune</h1>
      {children}
    </>
  );
}
