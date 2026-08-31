import { MetadataRoute } from 'next';
import { locationData, configData, investmentData, projectData } from '@/lib/seoData';
import { getAllInsights, getAllGuides, getAllCompares } from '@/lib/mdx';

export const dynamic = 'force-static';
export const revalidate = 86400; // Edge Cache for 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thereserve.koltepatil.digital';
  const now = new Date();

  // 1. High-Priority Core Landing Pages
  const coreRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/overview', priority: 0.95, changeFrequency: 'daily' as const },
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
    { route: '/insights', priority: 0.85, changeFrequency: 'daily' as const },
    { route: '/blog', priority: 0.85, changeFrequency: 'daily' as const },
    { route: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { route: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // 2. Dynamic Location Micro-Market Pages (22 Micro-Markets)
  const locationRoutes = Object.keys(locationData).map((market) => ({
    url: `${baseUrl}/location/${market}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 3. Dynamic Configuration Pages (7 Configurations)
  const configRoutes = Object.keys(configData).map((config) => ({
    url: `${baseUrl}/the-residences/${config}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 4. Dynamic Investment Intent Pages (7 Intent Hubs)
  const investmentRoutes = Object.keys(investmentData).map((intent) => ({
    url: `${baseUrl}/investment/${intent}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 5. Dynamic MDX Insight Articles
  const insights = getAllInsights();
  const insightRoutes = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 6. Dynamic MDX Guide Pillars
  const guides = getAllGuides();
  const guideRoutes = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 7. Dynamic MDX Compare Hubs
  const compares = getAllCompares();
  const compareRoutes = compares.map((compare) => ({
    url: `${baseUrl}/compare/${compare.slug}`,
    lastModified: new Date(compare.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 8. Dynamic Project Feature Pages
  const projectRoutes = Object.keys(projectData).map((feat) => ({
    url: `${baseUrl}/project/${feat}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
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

