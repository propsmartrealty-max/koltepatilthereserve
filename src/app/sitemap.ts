import { MetadataRoute } from 'next';
import { locationData, configData, investmentData, projectData } from '@/lib/seoData';
import { getAllInsights, getAllGuides, getAllCompares } from '@/lib/mdx';

export const dynamic = 'force-static';
export const revalidate = 86400; // Edge Cache for 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thereserve.koltepatil.digital';
  const now = new Date();

  const defaultImages = [
    `${baseUrl}/images/gallery/vyana-towers.jpg`,
    `${baseUrl}/images/overview/21-acres-masterplan.jpg`,
  ];

  const getImagesForRoute = (route: string) => {
    if (route.includes('floor-plan') || route.includes('residence') || route.includes('bhk')) {
      return [
        `${baseUrl}/images/floor-plans/vyana-2bhk-floorplan.png`,
        `${baseUrl}/images/floor-plans/vyana-3bhk-floorplan.png`,
        `${baseUrl}/images/gallery/vyana-towers.jpg`,
      ];
    }
    if (route.includes('amenities') || route.includes('club')) {
      return [
        `${baseUrl}/images/gallery/resort-swimming-pool.jpg`,
        `${baseUrl}/images/gallery/clubhouse-lounge.jpg`,
        `${baseUrl}/images/gallery/clubhouse-step-seating.jpg`,
        `${baseUrl}/images/gallery/sports-turf.jpg`,
      ];
    }
    if (route.includes('master-layout') || route.includes('master-plan')) {
      return [
        `${baseUrl}/images/overview/21-acres-masterplan.jpg`,
        `${baseUrl}/images/gallery/central-boulevard.jpg`,
      ];
    }
    if (route.includes('location')) {
      return [
        `${baseUrl}/images/overview/location-map.jpg`,
        `${baseUrl}/images/gallery/river-hills.jpg`,
      ];
    }
    if (route.includes('rera')) {
      return [
        `${baseUrl}/images/qr/maharera-qr.png`,
        `${baseUrl}/images/gallery/vyana-towers.jpg`,
      ];
    }
    return defaultImages;
  };

  // 1. High-Priority Core Landing Pages
  const coreRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/kolte-patil-the-reserve-price', priority: 0.98, changeFrequency: 'daily' as const },
    { route: '/kolte-patil-the-reserve-brochure', priority: 0.98, changeFrequency: 'daily' as const },
    { route: '/kolte-patil-the-reserve-floor-plans', priority: 0.98, changeFrequency: 'daily' as const },
    { route: '/kolte-patil-the-reserve-rera', priority: 0.98, changeFrequency: 'daily' as const },
    { route: '/kolte-patil-the-reserve-master-layout', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/kolte-patil-the-reserve-amenities', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/kolte-patil-the-reserve-location', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/kolte-patil-the-reserve-towers', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/kolte-patil-the-reserve-construction-status', priority: 0.95, changeFrequency: 'daily' as const },
    { route: '/kolte-patil-the-reserve-possession-date', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/kolte-patil-the-reserve-specifications', priority: 0.92, changeFrequency: 'weekly' as const },
    { route: '/kolte-patil-the-reserve-contact', priority: 0.92, changeFrequency: 'daily' as const },
    { route: '/overview', priority: 0.95, changeFrequency: 'daily' as const },
    { route: '/pricing', priority: 0.95, changeFrequency: 'daily' as const },
    { route: '/brochure', priority: 0.95, changeFrequency: 'daily' as const },
    { route: '/towers', priority: 0.92, changeFrequency: 'weekly' as const },
    { route: '/construction-status', priority: 0.92, changeFrequency: 'daily' as const },
    { route: '/possession-date', priority: 0.92, changeFrequency: 'weekly' as const },
    { route: '/the-residences', priority: 0.95, changeFrequency: 'daily' as const },
    { route: '/floor-plans', priority: 0.95, changeFrequency: 'daily' as const },
    { route: '/master-layout', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/master-plan', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/amenities', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/specifications', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/location', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/investment', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/residences', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/the-club', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/the-vision', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/developer', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/gallery', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/virtual-tour', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/updates', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/faq', priority: 0.85, changeFrequency: 'weekly' as const },
    { route: '/insights', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/blog', priority: 0.92, changeFrequency: 'daily' as const },
    { route: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { route: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
    images: getImagesForRoute(item.route),
  }));

  // 2. Dynamic Location Micro-Market Pages
  const locationRoutes = Object.keys(locationData).map((market) => ({
    url: `${baseUrl}/location/${market}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
    images: getImagesForRoute(`/location/${market}`),
  }));

  // 3. Dynamic Configuration Pages
  const configRoutes = Object.keys(configData).map((config) => ({
    url: `${baseUrl}/the-residences/${config}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
    images: getImagesForRoute(`/the-residences/${config}`),
  }));

  // 4. Dynamic Investment Intent Pages
  const investmentRoutes = Object.keys(investmentData).map((intent) => ({
    url: `${baseUrl}/investment/${intent}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
    images: defaultImages,
  }));

  // 5. Dynamic MDX Insight Articles
  const insights = getAllInsights();
  const insightRoutes = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    images: defaultImages,
  }));

  // 6. Dynamic MDX Guide Pillars
  const guides = getAllGuides();
  const guideRoutes = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
    images: defaultImages,
  }));

  // 7. Dynamic MDX Compare Hubs
  const compares = getAllCompares();
  const compareRoutes = compares.map((compare) => ({
    url: `${baseUrl}/compare/${compare.slug}`,
    lastModified: new Date(compare.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
    images: defaultImages,
  }));

  // 8. Dynamic Project Feature Pages
  const projectRoutes = Object.keys(projectData).map((feat) => ({
    url: `${baseUrl}/project/${feat}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
    images: getImagesForRoute(`/project/${feat}`),
  }));

  // 9. Interactive Financial SEO Tools
  const toolRoutes = [
    { route: '/tools/emi-calculator', priority: 0.9 },
    { route: '/tools/stamp-duty-calculator', priority: 0.9 },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: item.priority,
    images: defaultImages,
  }));

  return [
    ...coreRoutes,
    ...locationRoutes,
    ...configRoutes,
    ...investmentRoutes,
    ...insightRoutes,
    ...guideRoutes,
    ...compareRoutes,
    ...projectRoutes,
    ...toolRoutes,
  ];
}

