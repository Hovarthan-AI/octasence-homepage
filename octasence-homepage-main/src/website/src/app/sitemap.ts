import { MetadataRoute } from 'next';

type SitemapChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://airqo.net';
  const baseUrl = rawBase.replace(/\/$/, '');
  const currentDate = new Date();

  const staticRouteConfig: Array<{
    path: string;
    changeFrequency: SitemapChangeFrequency;
    priority: number;
  }> = [
    { path: '/', changeFrequency: 'daily', priority: 1 },
    {
      path: '/billboard/interactive',
      changeFrequency: 'hourly',
      priority: 0.95,
    },
    { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/monitor', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/products/analytics', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/products/api', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/products/mobile-app', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/products/calibrate', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/packages', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/packages/icons', changeFrequency: 'weekly', priority: 0.7 },
    {
      path: '/packages/icons/docs',
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      path: '/solutions/african-cities',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      path: '/solutions/communities',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { path: '/solutions/research', changeFrequency: 'monthly', priority: 0.8 },
    {
      path: '/solutions/network-coverage',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      path: '/solutions/kampala-study',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      path: '/africa-clean-air-forum',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    { path: '/press', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/resources', changeFrequency: 'weekly', priority: 0.6 },
    { path: '/faqs', changeFrequency: 'weekly', priority: 0.75 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/explore-data', changeFrequency: 'hourly', priority: 0.95 },
    {
      path: '/explore-data/mobile-app',
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      path: '/legal/terms-of-service',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    { path: '/legal/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/legal/airqo-data', changeFrequency: 'yearly', priority: 0.3 },
    {
      path: '/legal/payment-refund-policy',
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  return staticRouteConfig.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
