import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://thereserve.koltepatil.digital';

  return {
    rules: [
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Googlebot-Mobile',
          'Googlebot-News',
          'Google-InspectionTool',
          'Mediapartners-Google',
          'Bingbot',
          'Applebot',
          'Applebot-Extended',
          'GPTBot',
          'ChatGPT-User',
          'anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'PerplexityBot'
        ],
        allow: '/',
        disallow: ['/api/', '/private/', '/thank-you'],
      },
      {
        userAgent: [
          'Bytespider',
          'Barkrowler',
          'SeekportBot',
          'MJ12bot',
          'DotBot',
          'PetalBot',
          'Baiduspider',
          'YandexBot'
        ],
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/thank-you'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
