import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.auzziechauffeur.com.au';

    // Base routes
    const routes = [
        '',
        '/book',
        '/contact-us',
        '/about-us',
        '/the-fleet',
        '/services',
        '/privacy-policy',
        '/terms-conditions',
        '/news',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // You can fetch dynamic routes (locations) here from a DB in the future
    // For now, we'll add the main location hubs manually if they exist as pages
    const locationRoutes = [
        '/locations/sydney',
        '/locations/melbourne',
        '/locations/brisbane',
        '/locations/adelaide',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...locationRoutes];
}
