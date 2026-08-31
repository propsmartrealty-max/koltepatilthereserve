import type { Metadata } from "next";
import { Outfit, Cinzel } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import RevealFooter from "@/components/layout/RevealFooter";
import GlobalCursor from "@/components/ui/GlobalCursor";
import { CursorProvider } from "@/context/CursorContext";
import { ConciergeProvider } from "@/context/ConciergeContext";
import ConciergePanel from "@/components/ui/ConciergePanel";
import FloatingAction from "@/components/ui/FloatingAction";
import AmbientAudio from "@/components/ui/AmbientAudio";
import Preloader from "@/components/ui/Preloader";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import JsonLd from "@/components/seo/JsonLd";
import LenisProvider from "@/components/ui/LenisProvider";
import { PulseProvider } from "@/context/PulseContext";
import MarketPulseToast from "@/components/ui/MarketPulseToast";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Script from "next/script";
import dynamic from 'next/dynamic';

const StickyCTA = dynamic(() => import('@/components/layout/StickyCTA'));
const WhatsAppWidget = dynamic(() => import('@/components/layout/WhatsAppWidget'));
const CommandPalette = dynamic(() => import('@/components/ui/CommandPalette'));

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

export const metadata: Metadata = {
  metadataBase: new URL('https://thereserve.koltepatil.digital'),
  alternates: {
    canonical: 'https://thereserve.koltepatil.digital',
  },
  title: {
    default: "Kolte Patil The Reserve Sinhgad Road, Pune | 2 & 3 BHK Riverside Residences",
    template: "%s | The Reserve by Kolte Patil Sinhgad Road",
  },
  description: "The Reserve by Kolte Patil (Vyana Phase 1): 2 & 3 BHK luxury riverside residences on Sinhgad Road, Vadgaon Khurd, Pune. 21.03 acres master development, 19,750 sq.ft. clubhouse, river views. MahaRERA PM1261012600748.",
  keywords: [
    "Kolte Patil The Reserve",
    "The Reserve by Kolte Patil",
    "The Reserve Sinhgad Road Pune",
    "Kolte Patil Sinhgad Road",
    "Vyana at The Reserve",
    "Vyana The Reserve Pune",
    "2 BHK Flat Sinhgad Road Pune",
    "3 BHK Flat Sinhgad Road Pune",
    "2 BHK Luxury Apartments Pune 791 sq ft",
    "3 BHK Luxury Apartments Pune 1016 sq ft",
    "Flats in Vadgaon Khurd Pune",
    "Riverside Residences Sinhgad Road",
    "Kolte Patil Developers Ltd Pune",
    "MahaRERA PM1261012600748",
    "Luxury Apartments in Sinhgad Road",
    "New Residential Projects Sinhgad Road Pune",
    "Flats near Swargate Pune",
    "Flats near Katraj Pune",
    "Flats near Kothrud Pune",
    "Flats near Dhayari Pune",
    "Flats near Nanded City Pune",
    "Pune Ring Road Property Investment"
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
        url: "/kolte-patil-logo.jpg",
        width: 1200,
        height: 630,
        alt: "The Reserve by Kolte Patil, Sinhgad Road, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolte Patil The Reserve | 2 & 3 BHK on Sinhgad Road, Pune",
    description: "2 & 3 BHK riverside residences spread across 21.03 acres on Sinhgad Road, Pune. MahaRERA PM1261012600748.",
    images: ["/kolte-patil-logo.jpg"],
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
        <meta name="geo.position" content="18.4716;73.8344" />
        <meta name="ICBM" content="18.4716, 73.8344" />
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
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#0B2B1B] text-[var(--foreground)] selection:bg-[#d4af37] selection:text-white overflow-x-hidden">
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
        <NoiseOverlay />
        <CursorProvider>
          <ConciergeProvider>
            <PulseProvider>
              <LenisProvider>
                <Preloader />
                <Breadcrumbs />
                <GlobalCursor />
                <AmbientAudio />
                <ConciergePanel />
                <FloatingAction />
                <MarketPulseToast />
                <Navbar />
                <div className="relative z-10 isolate transform-gpu mb-[100svh] bg-[#0B2B1B] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden shadow-2xl">
                  {children}
                </div>
                <RevealFooter />
              </LenisProvider>
            </PulseProvider>
          </ConciergeProvider>
        </CursorProvider>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        <StickyCTA />
        <WhatsAppWidget />
        <CommandPalette />
      </body>
    </html>
  );
}
