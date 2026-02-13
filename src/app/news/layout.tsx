import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Expert Travel Guides & News | Auzzie Chauffeur" },
    description: "Read the latest Australian travel guides, airport navigation tips, and luxury chauffeur news. Expert insights from Auzzie's national team of professional drivers.",
    alternates: {
        canonical: '/news',
    },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
