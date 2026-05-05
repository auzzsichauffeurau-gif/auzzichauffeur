import React from 'react';

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    imageUrl?: string;
}

export default function ServiceSchema({ name, description, url, imageUrl }: ServiceSchemaProps) {
    const fullUrl = url.startsWith('http') ? url : `https://auzziechauffeur.com.au${url}`;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": "Auzzie Chauffeur",
            "url": "https://auzziechauffeur.com.au",
            "logo": "https://auzziechauffeur.com.au/logo.png"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Australia"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Luxury Chauffeur Service",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": name
                    },
                    "priceCurrency": "AUD",
                    "availability": "https://schema.org/InStock",
                    "url": fullUrl
                }
            ]
        },
        "image": imageUrl || "https://auzziechauffeur.com.au/og-image.jpg"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
