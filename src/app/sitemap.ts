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

    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date() }, // Homepage changes often (today is fine)
        { url: `${baseUrl}/about-us`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/our-history`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/our-policies`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/our-policies/fatigue-management-policy`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/our-policies/child-safety-policy`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/about-us/faqs`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/contact-us`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/the-fleet`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/the-fleet/executive-sedans`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/news`, lastModified: new Date() }, // Feed changes often

        // Main Services
        { url: `${baseUrl}/services/airport-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/corporate-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/hourly-chauffeur`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/services/luxury-tours`, lastModified: lastMajorUpdate },

        // Locations
        { url: `${baseUrl}/sydney`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/melbourne`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/brisbane`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/perth`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/gold-coast`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/adelaide`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/canberra`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/hobart`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/cairns-port-douglas`, lastModified: lastMajorUpdate },

        // Location Services (Deep Discovery)
        { url: `${baseUrl}/sydney/airport-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/melbourne/airport-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/brisbane/airport-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/perth/airport-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/gold-coast/airport-transfers`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/adelaide/airport-transfers`, lastModified: lastMajorUpdate },

        // Policies
        { url: `${baseUrl}/privacy-policy`, lastModified: lastMajorUpdate },
        { url: `${baseUrl}/terms-conditions`, lastModified: lastMajorUpdate },
    ]

    return [...staticPages, ...newsPages];
}
