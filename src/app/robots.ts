import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/*?category=',
                    '/*?search=',
                    '/feedback',
                ],
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            }
        ],
        sitemap: 'https://auzziechauffeur.com.au/sitemap.xml',
    };
}
