import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Standards & Conduct Policy | Auzzie Chauffeur | Professional Excellence",
    description: "Code of conduct for Auzzie Chauffeur staff and drivers. Our standards for dress, punctuality, and professional etiquette in ground transport.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
