import React from 'react';

interface ArticleSchemaProps {
    headline: string;
    image: string[];
    datePublished: string;
    dateModified?: string;
    authorName: string;
    authorUrl?: string;
    description: string;
}

export default function ArticleSchema({
    headline,
    image,
    datePublished,
    dateModified,
    authorName,
    authorUrl,
    description
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "image": image,
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": [{
            "@type": "Person",
            "name": authorName,
            "url": authorUrl || "https://auzziechauffeur.com.au/about-us"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Auzzie Chauffeur",
            "logo": {
                "@type": "ImageObject",
                "url": "https://auzziechauffeur.com.au/logo.png"
            }
        },
        "description": description,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": typeof window !== 'undefined' ? window.location.href : "https://auzziechauffeur.com.au"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
