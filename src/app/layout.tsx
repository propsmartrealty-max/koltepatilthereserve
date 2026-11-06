import type { Metadata, Viewport } from "next";
import { Outfit, Cinzel } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import { CursorProvider } from "@/context/CursorContext";
import { ConciergeProvider } from "@/context/ConciergeContext";
import ConciergePanel from "@/components/ui/ConciergePanel";
import LuxuryConciergePill from "@/components/ui/LuxuryConciergePill";
import JsonLd from "@/components/seo/JsonLd";
import LenisProvider from "@/components/ui/LenisProvider";
import { PulseProvider } from "@/context/PulseContext";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#06160E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://thereserve.koltepatil.digital'),
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital',
    languages: {
      'en-IN': 'https://thereserve.koltepatil.digital',
      'x-default': 'https://thereserve.koltepatil.digital',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/kolte-patil-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  title: {
    default: "Kolte Patil The Reserve Sinhgad Road | Official Portal | 2 & 3 BHK From ₹85 L*",
    template: "%s | The Reserve by Kolte Patil Sinhgad Road Pune",
  },
  description: "Official Developer Portal: The Reserve by Kolte-Patil (Vyana Phase 1), Sinhgad Road, Pune. 21-Acre Riverside Sanctuary, 2 & 3 BHK (791 & 1,016 sq.ft.), 19,750 sq.ft. Clubhouse. Verified MahaRERA PM1261012600748. Get Instant Cost Sheet & Floor Plans.",
  keywords: [
    // Brand Core
    "Kolte Patil The Reserve",
    "The Reserve by Kolte Patil",
    "Kolte Patil The Reserve Sinhgad Road",
    "The Reserve Sinhgad Road Pune",
    "Kolte Patil Sinhgad Road Pune",
    "Kolte-Patil Developers Ltd Pune",
    // Phase 1 Enclave
    "Vyana at The Reserve",
    "Vyana The Reserve Pune",
    "Vyana Phase 1 Kolte Patil",
    "Vyana Towers T5 T6 T7",
    "MahaRERA PM1261012600748",
    // Configurations & Carpet Areas
    "2 BHK Flat Sinhgad Road Pune",
    "3 BHK Flat Sinhgad Road Pune",
    "2 BHK 791 sq ft Sinhgad Road",
    "3 BHK 1016 sq ft Sinhgad Road",
    "2 BHK Luxury Apartments Pune",
    "3 BHK Luxury Apartments Pune",
    // Commercial Intent & Pricing
    "Kolte Patil The Reserve Price",
    "Kolte Patil The Reserve Floor Plans",
    "Kolte Patil The Reserve Brochure PDF",
    "Kolte Patil Sinhgad Road New Launch",
    "Flats for Sale in Sinhgad Road Pune",
    "Buy Apartment in Sinhgad Road",
    // Micro-Market & Transit
    "Flats in Vadgaon Khurd Pune",
    "Riverside Residences Sinhgad Road",
    "Flats near Swargate Pune",
    "Flats near Katraj Pune",
    "Flats near Kothrud Pune",
    "Flats near Dhayari Pune",
    "Flats near Nanded City Pune",
    "Pune Ring Road Property Investment",
    "Top Residential Projects in Pune 2026",
    "Best Luxury Projects in Pune Real Estate"
  ],
  authors: [{ name: "Kolte-Patil Developers Ltd" }],
  creator: "Kolte-Patil Developers Ltd",
  publisher: "Kolte-Patil Developers Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thereserve.koltepatil.digital",
    title: "Kolte Patil The Reserve | 2 & 3 BHK Luxury Residences, Sinhgad Road, Pune",
    description: "Experience 2 & 3 bed riverside residences at The Reserve by Kolte Patil on Sinhgad Road, Vadgaon Khurd, Pune. 21.03 acres master development. MahaRERA PM1261012600748.",
    siteName: "The Reserve by Kolte Patil",
    images: [
      {
        url: "/images/gallery/vyana-towers.jpg",
        width: 1200,
        height: 630,
        alt: "The Reserve by Kolte Patil, Vyana Towers, Sinhgad Road, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolte Patil The Reserve | 2 & 3 BHK on Sinhgad Road, Pune",
    description: "2 & 3 BHK riverside residences spread across 21.03 acres on Sinhgad Road, Pune. MahaRERA PM1261012600748.",
    images: ["/images/gallery/vyana-towers.jpg"],
    creator: "@koltepatilltd",
    site: "@koltepatilltd",
  },
  verification: {
    google: "_KeXkPdmvdlGxf7txGc-eGMTTLpaxsssiNgaIHAX_IA",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="_KeXkPdmvdlGxf7txGc-eGMTTLpaxsssiNgaIHAX_IA" />
        <meta name="google-site-verification" content="VU-EOSplCFYBZtl4QpzXU4VucNJ7Noa26k5J-3xVO-E" />
        
        {/* Geo & Local Search Signals for Google SERP */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Vadgaon Khurd, Sinhgad Road, Pune" />
        <meta name="geo.position" content="18.4622871;73.8013712" />
        <meta name="ICBM" content="18.4622871, 73.8013712" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        
        {/* High-Performance Edge Preconnects for Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.koltepatil.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetching */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />
        <link rel="dns-prefetch" href="https://formsubmit.co" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />

        {/* PWA & Brand Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* RSS / Atom Feed for Google Discover & News */}
        <link rel="alternate" type="application/rss+xml" title="The Reserve by Kolte Patil Editorial RSS Feed" href="/rss.xml" />
        
        {/* LLM & AI Entity Grounding Specification */}
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLMs Entity Grounding" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#06160E] text-[var(--foreground)] selection:bg-[#D4AF37] selection:text-[#06160E] overflow-x-hidden">
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        <JsonLd />
        <CursorProvider>
          <ConciergeProvider>
            <PulseProvider>
              <LenisProvider>
                <Breadcrumbs />
                <ConciergePanel />
                <Navbar />
                <main className="relative z-10 isolate flex-1 bg-[#06160E]">
                  {children}
                </main>
                <RevealFooter />
                <LuxuryConciergePill />
              </LenisProvider>
            </PulseProvider>
          </ConciergeProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
