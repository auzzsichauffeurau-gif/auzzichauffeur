import React from 'react';

interface FAQSchemaProps {
    pairs: { question: string; answer: string; }[];
}

export default function FAQSchema({ pairs }: FAQSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pairs.map(pair => ({
            "@type": "Question",
            "name": pair.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": pair.answer.replace(/<\/?[^>]+(>|$)/g, "") // Strip HTML if needed
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
