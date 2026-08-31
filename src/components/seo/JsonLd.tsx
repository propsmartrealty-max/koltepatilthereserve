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
        "name": "The Reserve by Kolte Patil Sinhgad Road",
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
        "@type": "SiteNavigationElement",
        "@id": "https://thereserve.koltepatil.digital/#navigation",
        "name": [
          "Overview",
          "Amenities",
          "Floor Plans",
          "Location",
          "Gallery",
          "Specifications",
          "Contact"
        ],
        "url": [
          "https://thereserve.koltepatil.digital/overview",
          "https://thereserve.koltepatil.digital/amenities",
          "https://thereserve.koltepatil.digital/floor-plans",
          "https://thereserve.koltepatil.digital/location",
          "https://thereserve.koltepatil.digital/gallery",
          "https://thereserve.koltepatil.digital/specifications",
          "https://thereserve.koltepatil.digital/contact"
        ]
      },
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": "https://thereserve.koltepatil.digital/#localbusiness",
        "name": "The Reserve by Kolte Patil Sales Experience Centre",
        "image": "https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg",
        "telephone": "+91-7744009295",
        "priceRange": "₹ 85 Lakhs - ₹ 1.65 Cr",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Cheque, Bank Transfer, Home Loan (SBI, HDFC, ICICI, Axis)",
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
          "closes": "20:00"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "186",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Rajesh Deshmukh"
            },
            "datePublished": "2026-07-15",
            "reviewBody": "The riverside setting at Vadgaon Khurd combined with Kolte-Patil's aluform construction quality is unmatched. The 21-acre master development feels very open and tranquil.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Pooja Kulkarni"
            },
            "datePublished": "2026-08-02",
            "reviewBody": "Superb floor plan with 1,016 sq.ft. carpet area for 3 BHK. The scenic NDA hill views and 19,750 sq.ft. clubhouse are great highlights.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }
        ]
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://thereserve.koltepatil.digital/#property",
        "name": "The Reserve by Kolte Patil (Vyana Phase 1)",
        "description": "2 & 3 BHK riverside luxury residences at Vadgaon Khurd, Sinhgad Road, Pune. 21.03 acres master development with 19,750 sq.ft. clubhouse, resort pool, and scenic NDA hill views. MahaRERA PM1261012600748.",
        "url": "https://thereserve.koltepatil.digital",
        "image": "https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vadgaon Khurd, Sinhgad Road",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411041",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "186",
          "bestRating": "5",
          "worstRating": "1"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "19,750 Sq.Ft. Clubhouse with Step Seating",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "84x27 ft. Resort Adult Swimming Pool & Kids Pool",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Pickleball Court & Sports Turf",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Central Landscaped Boulevard",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "30% EV Charging Parking Slots",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Aluform Monolithic Concrete Construction",
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
