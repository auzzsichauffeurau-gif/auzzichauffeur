import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Environmental Policy | Auzzie Chauffeur | Sustainable Transport Solutions",
    description: "Our commitment to reducing our environmental footprint. Initiatives on fuel efficiency, vehicle maintenance, and sustainable business practices.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
