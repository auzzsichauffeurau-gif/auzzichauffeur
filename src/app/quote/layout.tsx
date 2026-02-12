import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Get Instant Quote | Auzzie Chauffeur | Check Our Rates",
    description: "Request a fixed-price chauffeur quote instantly. Competitive rates for airport transfers, corporate travel, and special events across Australia.",
    alternates: {
        canonical: 'https://auzziechauffeur.com.au/quote',
    },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
