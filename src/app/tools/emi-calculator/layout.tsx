import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Loan EMI Calculator Pune | Kolte Patil The Reserve',
  description: 'Calculate monthly home loan EMI for 2 & 3 BHK luxury residences at The Reserve by Kolte Patil, Sinhgad Road, Pune. Accurate interest rates, loan tenure, and amortization schedules.',
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital/tools/emi-calculator',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital/tools/emi-calculator',
      'x-default': 'https://thereserve.koltepatil.digital/tools/emi-calculator',
    },
  },
};

export default function EmiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Home Loan EMI Calculator - The Reserve by Kolte Patil Sinhgad Road</h1>
      {children}
    </>
  );
}
