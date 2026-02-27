import { Metadata } from 'next';

interface LocalBusinessSchemaProps {
    city: string;
    state: string;
    description: string;
    latitude: number;
    longitude: number;
    postalCodes: string[];
    neighborhoods: string[];
}

export function generateLocalBusinessSchema({
    city,
    state,
    description,
    latitude,
    longitude,
    postalCodes,
    neighborhoods
}: LocalBusinessSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://auzziechauffeur.com.au/${city.toLowerCase().replace(/\s+/g, '-')}`,
        "name": `Auzzie Chauffeur Service - ${city}`,
        "alternateName": `Auzzie ${city}`,
        "description": description,
        "url": `https://auzziechauffeur.com.au/${city.toLowerCase().replace(/\s+/g, '-')}`,
        "telephone": "+61-415-673-786", // Replace with actual phone
        "email": "info@auzziechauffeur.com.au",
        "priceRange": "$$$$",
        "image": "https://auzziechauffeur.com.au/logo.png",
        "logo": "https://auzziechauffeur.com.au/logo.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressRegion": state,
            "addressCountry": "AU",
            "postalCode": postalCodes[0] // Primary postcode
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": latitude,
            "longitude": longitude
        },
        "areaServed": [
            {
                "@type": "City",
                "name": city,
                "containedInPlace": {
                    "@type": "State",
                    "name": state
                }
            },
            ...neighborhoods.map(neighborhood => ({
                "@type": "Place",
                "name": neighborhood
            })),
            ...postalCodes.map(code => ({
                "@type": "PostalCodeArea",
                "postalCode": code,
                "addressCountry": "AU"
            }))
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Chauffeur Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Airport Transfer Service",
                        "description": "Premium airport transfers"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Chauffeur Service",
                        "description": "Executive business transport"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Wedding Car Hire",
                        "description": "Luxury wedding transportation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Hourly Chauffeur Service",
                        "description": "Flexible hourly hire"
                    }
                }
            ]
        },
        "openingHoursSpecification": [
            {
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
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/auzziechauffeur",
            "https://www.instagram.com/auzziechauffeur",
            "https://www.linkedin.com/company/auzziechauffeur"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "245",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
