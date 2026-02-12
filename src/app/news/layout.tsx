import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Expert Travel Guides & News",
    description: "Read the latest Australian travel guides, airport navigation tips, and luxury chauffeur news. Expert insights from Auzzie's national team of professional drivers.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
