import React from 'react';

export default function HowToBookingSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Book an Airport Chauffeur (Quick Guide)",
        "description": "Step-by-step guide to reserving an airport transfer with flight tracking and meet-and-greet service.",
        "totalTime": "PT5M",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Get a Quote",
                "text": "Enter your pick-up location, drop-off destination, and date/time to see fixed pricing options instantly.",
                "url": "https://auzziechauffeur.com.au/book",
                "image": "https://auzziechauffeur.com.au/steps/quote.jpg"
            },
            {
                "@type": "HowToStep",
                "name": "Select Your Vehicle",
                "text": "Choose from our fleet of Executive Sedans, Luxury SUVs, or People Movers based on your passenger and luggage needs.",
                "image": "https://auzziechauffeur.com.au/steps/vehicle.jpg"
            },
            {
                "@type": "HowToStep",
                "name": "Enter Flight Details",
                "text": "Provide your flight number so our chauffeurs can track your arrival and adjust pickup times for any delays.",
                "image": "https://auzziechauffeur.com.au/steps/flight.jpg"
            },
            {
                "@type": "HowToStep",
                "name": "Confirm & Pay",
                "text": "Review your booking details and securely pay online to receive instant confirmation.",
                "image": "https://auzziechauffeur.com.au/steps/confirm.jpg"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
