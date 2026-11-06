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
        "tickerSymbol": ["BSE: 532924", "NSE: KOLTEPATIL"],
        "knowsAbout": [
          "Pune Real Estate Market",
          "Kolte Patil The Reserve",
          "Sinhgad Road Luxury Apartments",
          "Vyana Phase 1",
          "MahaRERA PM1261012600748",
          "Townships",
          "Commercial Real Estate"
        ],
        "sameAs": [
          "https://www.facebook.com/KoltePatilDevelopers",
          "https://www.linkedin.com/company/kolte-patil-developers-ltd",
          "https://www.instagram.com/koltepatil",
          "https://twitter.com/KoltePatilLtd",
          "https://www.youtube.com/@KoltePatilDevelopersLtd",
          "https://en.wikipedia.org/wiki/Kolte-Patil_Developers",
          "https://www.bseindia.com/stock-share-price/kolte-patil-developers-ltd/koltepatil/532924/",
          "https://www.nseindia.com/get-quotes/equity?symbol=KOLTEPATIL",
          "https://www.zaubacorp.com/company/KOLTE-PATIL-DEVELOPERS-LTD/L45200PN1991PLC129428"
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
        "@type": "WebPage",
        "@id": "https://thereserve.koltepatil.digital/#webpage",
        "url": "https://thereserve.koltepatil.digital",
        "name": "Kolte Patil The Reserve Sinhgad Road, Pune | 2 & 3 BHK Luxury Residences",
        "isPartOf": {
          "@id": "https://thereserve.koltepatil.digital/#website"
        },
        "about": {
          "@id": "https://thereserve.koltepatil.digital/#property"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://thereserve.koltepatil.digital/images/gallery/vyana-towers.jpg"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#project-speakable-summary", ".speakable-fact"]
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
        "image": "https://thereserve.koltepatil.digital/images/overview/21-acres-masterplan.jpg",
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
          "latitude": "18.4622871",
          "longitude": "73.8013712"
        },
        "hasMap": "https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0",
        "sameAs": [
          "https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0",
          "https://www.koltepatil.com"
        ],
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
        "image": "https://thereserve.koltepatil.digital/images/gallery/vyana-towers.jpg",
        "hasMap": "https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.4622871",
          "longitude": "73.8013712"
        },
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
      },
      {
        "@type": "RealEstateListing",
        "@id": "https://thereserve.koltepatil.digital/#unit-2bhk",
        "name": "Vyana 2 BHK Riverside Residence | The Reserve by Kolte Patil",
        "description": "Premium 2 BHK riverside residence with 791 sq.ft. (73.49 sq.m.) RERA carpet area, 3.05 m slab height, panoramic balcony deck, and covered parking.",
        "url": "https://thereserve.koltepatil.digital/the-residences/2-bhk-flats-sinhgad-road",
        "image": "https://thereserve.koltepatil.digital/images/floor-plans/vyana-2bhk-floorplan.png",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "8500000",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "seller": {
            "@id": "https://thereserve.koltepatil.digital/#organization"
          }
        },
        "itemOffered": {
          "@type": "Apartment",
          "name": "Vyana 2 BHK Residence",
          "numberOfRooms": 2,
          "numberOfBedrooms": 2,
          "numberOfBathroomsTotal": 2,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 791,
            "unitCode": "FTK"
          },
          "containedInPlace": {
            "@id": "https://thereserve.koltepatil.digital/#property"
          }
        }
      },
      {
        "@type": "RealEstateListing",
        "@id": "https://thereserve.koltepatil.digital/#unit-3bhk",
        "name": "Vyana 3 BHK Grand Sanctuary | The Reserve by Kolte Patil",
        "description": "Opulent 3 BHK riverside residence with 1,016 sq.ft. (94.39 sq.m.) RERA carpet area, 3.05 m slab height, scenic NDA hill view deck, and EV-ready parking.",
        "url": "https://thereserve.koltepatil.digital/the-residences/3-bhk-flats-sinhgad-road",
        "image": "https://thereserve.koltepatil.digital/images/floor-plans/vyana-3bhk-floorplan.png",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "12500000",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "seller": {
            "@id": "https://thereserve.koltepatil.digital/#organization"
          }
        },
        "itemOffered": {
          "@type": "Apartment",
          "name": "Vyana 3 BHK Sanctuary",
          "numberOfRooms": 3,
          "numberOfBedrooms": 3,
          "numberOfBathroomsTotal": 3,
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 1016,
            "unitCode": "FTK"
          },
          "containedInPlace": {
            "@id": "https://thereserve.koltepatil.digital/#property"
          }
        }
      },
      {
        "@type": "VideoObject",
        "@id": "https://thereserve.koltepatil.digital/#walkthrough-video",
        "name": "The Reserve by Kolte Patil - Official Architectural Walkthrough & Cinematic Tour",
        "description": "Cinematic walkthrough of The Reserve by Kolte Patil at Vadgaon Khurd, Sinhgad Road, Pune. Explore 21.03 acres of riverside living, 19,750 sq.ft. clubhouse, and 2 & 3 BHK residences.",
        "thumbnailUrl": [
          "https://thereserve.koltepatil.digital/images/gallery/vyana-towers.jpg",
          "https://thereserve.koltepatil.digital/images/gallery/clubhouse-step-seating.jpg"
        ],
        "uploadDate": "2026-08-01T09:00:00+05:30",
        "contentUrl": "https://player.vimeo.com/video/394627252",
        "embedUrl": "https://player.vimeo.com/video/394627252",
        "duration": "PT2M30S"
      },
      {
        "@type": "ImageGallery",
        "@id": "https://thereserve.koltepatil.digital/#gallery",
        "name": "The Reserve by Kolte Patil Architectural Renders and Floor Plans",
        "hasPart": [
          {
            "@type": "ImageObject",
            "name": "Vyana High-Rise Towers Elevation",
            "caption": "Architectural elevation of Towers T5, T6, and T7 at The Reserve by Kolte Patil",
            "contentUrl": "https://thereserve.koltepatil.digital/images/gallery/vyana-towers.jpg"
          },
          {
            "@type": "ImageObject",
            "name": "19,750 Sq.Ft. Clubhouse with Step Seating",
            "caption": "Iconic multi-tier clubhouse with amphitheater step seating",
            "contentUrl": "https://thereserve.koltepatil.digital/images/gallery/clubhouse-step-seating.jpg"
          },
          {
            "@type": "ImageObject",
            "name": "84-ft Resort Swimming Pool & Aqua Loungers",
            "caption": "Resort-style adult pool with kids splash pool and sun deck",
            "contentUrl": "https://thereserve.koltepatil.digital/images/gallery/resort-swimming-pool.jpg"
          },
          {
            "@type": "ImageObject",
            "name": "Expansive Living Room & River Viewing Deck",
            "caption": "3.05m slab height living room opening into Mutha River views",
            "contentUrl": "https://thereserve.koltepatil.digital/images/gallery/interior-deck.jpg"
          },
          {
            "@type": "ImageObject",
            "name": "Vyana 3 BHK Master Bedroom Suite",
            "caption": "Luxury master bedroom suite with premium vitrified flooring",
            "contentUrl": "https://thereserve.koltepatil.digital/images/gallery/master-bedroom.jpg"
          },
          {
            "@type": "ImageObject",
            "name": "Central Landscaped Boulevard & Buffer Park",
            "caption": "Green buffer and vehicular-free central boulevard",
            "contentUrl": "https://thereserve.koltepatil.digital/images/gallery/central-boulevard.jpg"
          },
          {
            "@type": "ImageObject",
            "name": "Championship Sports Turf & Pickleball Arena",
            "caption": "Dedicated sports arena with pickleball and cricket practice net",
            "contentUrl": "https://thereserve.koltepatil.digital/images/gallery/sports-turf.jpg"
          },
          {
            "@type": "ImageObject",
            "name": "21.03-Acre Masterplan Layout",
            "caption": "Comprehensive master layout plan of The Reserve sanctuary",
            "contentUrl": "https://thereserve.koltepatil.digital/images/overview/21-acres-masterplan.jpg"
          },
          {
            "@type": "ImageObject",
            "name": "Vyana 3 BHK 1,016 Sq.Ft. Floor Plan Blueprint",
            "caption": "Detailed architectural layout of 3 BHK luxury residence",
            "contentUrl": "https://thereserve.koltepatil.digital/images/floor-plans/vyana-3bhk-floorplan.png"
          },
          {
            "@type": "ImageObject",
            "name": "Vyana 2 BHK 791 Sq.Ft. Floor Plan Blueprint",
            "caption": "Detailed architectural layout of 2 BHK luxury residence",
            "contentUrl": "https://thereserve.koltepatil.digital/images/floor-plans/vyana-2bhk-floorplan.png"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://thereserve.koltepatil.digital/#product",
        "name": "Vyana at The Reserve by Kolte Patil (2 & 3 BHK)",
        "description": "Premium 2 BHK (791 sq.ft.) & 3 BHK (1,016 sq.ft.) riverside residences on Sinhgad Road, Pune. MahaRERA PM1261012600748.",
        "image": "https://thereserve.koltepatil.digital/images/gallery/vyana-towers.jpg",
        "brand": {
          "@type": "Brand",
          "name": "Kolte-Patil Developers Ltd"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "186",
          "bestRating": "5"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "8500000",
          "highPrice": "16500000",
          "offerCount": "487",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://thereserve.koltepatil.digital/#organization"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://thereserve.koltepatil.digital/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the MahaRERA registration number of Kolte Patil The Reserve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Reserve by Kolte-Patil is registered under MahaRERA as 'Vyana Phase-I-T5, T6, T7' with Registration Number PM1261012600748, verified on the official MahaRERA portal (maharera.maharashtra.gov.in)."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Kolte Patil The Reserve located in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project is located at Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road, Pune - 411041, right near Nanded Fata with direct frontage to the upcoming Pune Ring Road corridor and Mutha River."
            }
          },
          {
            "@type": "Question",
            "name": "What configurations and carpet areas are offered in Vyana Phase 1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vyana Phase 1 features 2 BHK residences with 791 sq.ft. RERA carpet area and 3 BHK luxury residences with 1,016 sq.ft. RERA carpet area across Towers T5, T6, and T7 (G+21 floors) with 3.05 m slab heights."
            }
          },
          {
            "@type": "Question",
            "name": "What are the lifestyle amenities at The Reserve by Kolte Patil?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key amenities include a 19,750 sq.ft. contemporary clubhouse with step seating, an 84 ft. x 27 ft. resort adult pool, a 14 ft. x 18 ft. kids pool, championship pickleball courts, multipurpose sports turf, and 30% EV-charging enabled parking."
            }
          },
          {
            "@type": "Question",
            "name": "What construction technology and ceiling heights are used?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Reserve utilizes 100% Aluform monolithic concrete construction for seismic resilience and durability, featuring expansive 3.05 m slab-to-slab heights (~2.9 m clear ceiling height)."
            }
          },
          {
            "@type": "Question",
            "name": "How does The Reserve compare to Nanded City Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike Nanded City which is a 700-acre high-density mega-township with 10,000+ units sharing amenities, The Reserve is an exclusive 21.03-acre low-density sanctuary with only 487 units in Phase 1, true Mutha riverfront frontage, 3.05 m ceiling heights, and a dedicated 19,750 sq.ft. clubhouse exclusive to residents."
            }
          },
          {
            "@type": "Question",
            "name": "What are the parking arrangements and EV charging provisions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project provides multi-level parking across 2 Basements (B1 + B2) and 1 Stilt level, with 30% of bays pre-equipped with dedicated EV-charging infrastructure and RFID access control."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the developer of The Reserve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The project is developed by Kolte-Patil Developers Ltd (NSE: KOLTEPATIL, BSE: 532924), a leading publicly listed real estate developer with over 33 years of heritage and 25+ million sq. ft. delivered across Pune, Mumbai, and Bengaluru."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://thereserve.koltepatil.digital/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thereserve.koltepatil.digital"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Residences & Floor Plans",
            "item": "https://thereserve.koltepatil.digital/floor-plans"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Master Layout",
            "item": "https://thereserve.koltepatil.digital/master-layout"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Amenities",
            "item": "https://thereserve.koltepatil.digital/amenities"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Specifications",
            "item": "https://thereserve.koltepatil.digital/specifications"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Location",
            "item": "https://thereserve.koltepatil.digital/location"
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
