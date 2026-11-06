import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator Pune 2026 | Kolte Patil The Reserve',
  description: 'Calculate property stamp duty (7%), registration fees (₹30,000), and statutory charges for purchasing a 2 or 3 BHK flat on Sinhgad Road, Pune. Real-time cost estimator.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/tools/stamp-duty-calculator',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/tools/stamp-duty-calculator',
      'x-default': 'https://thereserve.koltepatil.digital/tools/stamp-duty-calculator',
    },
  },
};

export default function StampDutyCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Stamp Duty and Registration Calculator Pune - The Reserve by Kolte Patil</h1>
      {children}
    </>
  );
}
