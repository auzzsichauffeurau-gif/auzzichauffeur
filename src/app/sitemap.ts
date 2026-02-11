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
        priority: route === '' ? 1 : 0.9,
    }));

    // You can fetch dynamic routes (locations) here from a DB in the future
    // For now, we'll add the main location hubs manually if they exist as pages
    const locationRoutes = [
        '/sydney',
        '/melbourne',
        '/brisbane',
        '/adelaide',
        '/gold-coast',
        '/hobart',
        '/perth',
        '/cairns-port-douglas',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Service Main Pages
    const serviceRoutes = [
        '/services/airport-transfers',
        '/services/corporate-transfers',
        '/services/wedding-cars',
        '/services/hourly-chauffeur',
        '/services/cruise-ship-transfers',
        '/services/conferences-special-events',
        '/services/international-student-transfers',
        '/services/luxury-tours',
        '/services/all-day-hire',
        '/services/airline-cruise-crewing',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Policy Pages
    const policyRoutes = [
        '/about-us/our-policies',
        '/about-us/our-policies/cancellation-policy',
        '/about-us/our-policies/child-safety-policy',
        '/about-us/our-policies/confidentiality-policy',
        '/about-us/our-policies/data-retention-privacy-policy',
        '/about-us/our-policies/environmental-policy',
        '/about-us/our-policies/fatigue-management-policy',
        '/about-us/our-policies/social-responsibility-policy',
        '/about-us/our-policies/standards-conduct-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
    }));

    return [...routes, ...locationRoutes, ...serviceRoutes, ...policyRoutes];
}
