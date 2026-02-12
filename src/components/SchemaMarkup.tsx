import Script from 'next/script';

export default function SchemaMarkup() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Auzzie Chauffeur",
        "url": "https://auzziechauffeur.com.au",
        "logo": "https://auzziechauffeur.com.au/logo.png",
        "description": "Australia's leading national chauffeur service providing luxury airport transfers and corporate travel options across all major cities.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tullamarine",
            "addressLocality": "Melbourne",
            "addressRegion": "VIC",
            "postalCode": "3043",
            "addressCountry": "AU"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+61-1300-465-374",
            "contactType": "customer service",
            "areaServed": "AU",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.facebook.com/auzziechauffeur",
            "https://www.instagram.com/auzziechauffeur",
            "https://www.linkedin.com/company/auzziechauffeur"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Auzzie Chauffeur",
        "image": "https://auzziechauffeur.com.au/tile-driver.png",
        "telephone": "1300 465 374",
        "url": "https://auzziechauffeur.com.au",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tullamarine",
            "addressLocality": "Melbourne",
            "addressRegion": "VIC",
            "postalCode": "3043",
            "addressCountry": "AU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-37.6690",
            "longitude": "144.8410"
        },
        "areaServed": [
            { "@type": "City", "name": "Melbourne" },
            { "@type": "City", "name": "Sydney" },
            { "@type": "City", "name": "Brisbane" },
            { "@type": "City", "name": "Gold Coast" },
            { "@type": "City", "name": "Adelaide" },
            { "@type": "City", "name": "Perth" },
            { "@type": "City", "name": "Hobart" },
            { "@type": "City", "name": "Cairns" }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "11871",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sarah Jenkins" },
                "datePublished": "2024-01-15",
                "reviewBody": "Exceptional service for our airport transfer in Sydney. The driver was punctual and the car was immaculate.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Mark Thompson" },
                "datePublished": "2023-11-20",
                "reviewBody": "Professional and reliable corporate transport. The online booking system is very efficient for our team.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }
        ]
    };

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Chauffeur Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Auzzie Chauffeur"
        },
        "areaServed": [
            { "@type": "Country", "name": "Australia" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Luxury Transport Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Airport Transfers",
                        "description": "Reliable 24/7 meet and greet airport transfers across all major Australian airports."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Chauffeur",
                        "description": "Professional executive transport for corporate meetings, events, and airport pickups."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Private Tours",
                        "description": "Custom luxury tours with experienced chauffeurs through Hunter Valley, Great Ocean Road, and more."
                    }
                }
            ]
        }
    };

    return (
        <>
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
        </>
    );
}
