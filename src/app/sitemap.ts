import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabaseClient'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://auzziechauffeur.com.au'
    // A stable date for static content that hasn't changed significantly recently
    const lastMajorUpdate = new Date('2024-05-20');

    // Discovery: Fetch dynamic news posts for indexing
    let newsPages: MetadataRoute.Sitemap = [];
    try {
        const { data: posts } = await supabase
            .from('posts') // Changed from news_posts to posts after checking db
            .select('slug, updated_at')
            .eq('is_published', true);

        if (posts) {
            newsPages = posts.map((post) => ({
                url: `${baseUrl}/news/${post.slug}`,
                lastModified: new Date(post.updated_at),
            }));
        }
    } catch (error) {
        console.error('Sitemap news fetch error:', error);
    }

    const locations = [
        'sydney', 'melbourne', 'brisbane', 'perth',
        'gold-coast', 'adelaide', 'hobart', 'cairns-port-douglas'
    ];

    const locationServices = [
        'airport-transfers',
        'conferences-special-events',
        'corporate-transfers',
        'cruise-ship-transfers',
        'hourly-chauffeur',
        'international-student-transfers',
        'luxury-tours',
        'wedding-cars'
    ];

    // Generate location routes using map/flatMap
    const locationUrls = locations.flatMap(city => [
        { url: `${baseUrl}/${city}`, lastModified: lastMajorUpdate },
        ...locationServices.map(service => ({
            url: `${baseUrl}/${city}/${service}`,
            lastModified: service === 'international-student-transfers' ? new Date() : lastMajorUpdate
        }))
    ]);

    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date() },

        // Main Sections
        { url: `${baseUrl}/book`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/quote`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/locations`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/contact-us`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/news`, lastModified: new Date() },

        // About Us
        { url: `${baseUrl}/about-us`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/our-history`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/our-policies`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/our-policies/fatigue-management-policy`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/our-policies/child-safety-policy`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/faqs`, lastModified: lastMajorUpdate },

        // Fleet
        { url: `${baseUrl}/the-fleet`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/the-fleet/executive-sedans`, lastModified: lastMajorUpdate },

        // Main Services
        { url: `${baseUrl}/services`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/airport-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/corporate-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/hourly-chauffeur`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/luxury-tours`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/international-student-transfers`, lastModified: new Date() },
        { url: `${baseUrl}/services/wedding-cars`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/cruise-ship-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/conferences-special-events`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/airline-cruise-crewing`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/all-day-hire`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/meeting-points`, lastModified: lastMajorUpdate },

        // Policies
        { url: `${baseUrl}/privacy-policy`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/terms-conditions`, lastModified: lastMajorUpdate },

        // Spread all dynamically generated location URLS
        ...locationUrls
    ]

    return [...staticPages, ...newsPages];
}
