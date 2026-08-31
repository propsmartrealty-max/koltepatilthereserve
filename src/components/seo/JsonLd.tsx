 
import Script from 'next/script';

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thereserve.koltepatil.digital/#organization",
        "name": "Kolte-Patil Developers Ltd",
        "url": "https://www.koltepatil.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thereserve.koltepatil.digital/kolte-patil-logo.jpg",
          "caption": "Kolte-Patil Developers Ltd Logo"
        },
        "telephone": "+91-7744009295",
        "description": "Pune's leading real estate developer with over 3 decades of excellence, shaping the skyline of Pune, Mumbai, and Bengaluru.",
        "foundingDate": "1991",
        "knowsAbout": ["Pune Real Estate Market", "Luxury Housing", "Townships", "Commercial Real Estate"],
        "sameAs": [
          "https://www.facebook.com/KoltePatilDevelopers",
          "https://www.linkedin.com/company/kolte-patil-developers-ltd",
          "https://www.instagram.com/koltepatil",
          "https://en.wikipedia.org/wiki/Kolte-Patil_Developers"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://thereserve.koltepatil.digital/#website",
        "url": "https://thereserve.koltepatil.digital",
        "name": "The Reserve by Kolte Patil",
        "publisher": {
          "@id": "https://thereserve.koltepatil.digital/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://thereserve.koltepatil.digital/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://thereserve.koltepatil.digital/#localbusiness",
        "name": "The Reserve Sales Office",
        "image": "https://thereserve.koltepatil.digital/kolte-patil-logo.jpg",
        "telephone": "+91-7744009295",
        "parentOrganization": {
          "@id": "https://thereserve.koltepatil.digital/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.4716",
          "longitude": "73.8344"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "ContactPoint",
        "@id": "https://thereserve.koltepatil.digital/#contactpoint",
        "telephone": "+91-7744009295",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://thereserve.koltepatil.digital/#property",
        "name": "The Reserve by Kolte Patil",
        "description": "Experience ultra-premium luxury living at The Reserve by Kolte Patil in Sinhgad Road, Pune. Master-crafted 2 & 3 BHK riverside residences (791 sq.ft. & 1,016 sq.ft.). MahaRERA PM1261012600748.",
        "url": "https://thereserve.koltepatil.digital",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vadgaon Khurd, Sinhgad Road",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Infinity Pool",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Clubhouse",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "IGBC Platinum",
            "value": "True"
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive"
    />
  );
}
