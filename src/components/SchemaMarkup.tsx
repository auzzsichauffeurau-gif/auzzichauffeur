import Script from 'next/script';

export default function SchemaMarkup() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Auzzie Chauffeur Service",
        "url": "https://www.auzziechauffeur.com.au",
        "logo": "https://www.auzziechauffeur.com.au/logo.png",
        "description": "Australia's leading national chauffeur service providing premium airport transfers and corporate travel options.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sydney",
            "addressRegion": "NSW",
            "addressCountry": "AU"
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
        "name": "Auzzie Chauffeur Service",
        "image": "https://www.auzziechauffeur.com.au/tile-driver.png",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sydney",
            "addressRegion": "NSW",
            "addressCountry": "AU"
        },
        "openingHoursSpecification": {
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
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "245",
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
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Emily Chen" },
                "datePublished": "2023-12-05",
                "reviewBody": "Used Auzzie Chauffeur for our wedding in Melbourne. The service was red carpet all the way!",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }
        ]
    };

    return (
        <>
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </>
    );
}
