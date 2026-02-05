import Script from 'next/script';

export default function SchemaMarkup() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Auzzsi Chauffeur Service",
        "url": "https://www.auzziechauffeur.com.au",
        "logo": "https://www.auzziechauffeur.com.au/logo.png",
        "description": "Australia's leading national chauffeur service providing premium airport transfers and corporate travel options.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Alexandra Parade",
            "addressLocality": "Fitzroy",
            "addressRegion": "VIC",
            "postalCode": "3065",
            "addressCountry": "AU"
        },
        "sameAs": [
            "https://www.facebook.com/auzzsichauffeur",
            "https://www.instagram.com/auzzsichauffeur",
            "https://www.linkedin.com/company/auzzsichauffeur"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Auzzsi Chauffeur Service",
        "image": "https://www.auzziechauffeur.com.au/tile-driver.png",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Alexandra Parade",
            "addressLocality": "Fitzroy",
            "addressRegion": "VIC",
            "postalCode": "3065",
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
        }
    };

    return (
        <>
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="local-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </>
    );
}
