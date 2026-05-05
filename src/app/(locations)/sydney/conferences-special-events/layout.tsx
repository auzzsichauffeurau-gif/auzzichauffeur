import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transport Sydney | Auzzie Chauffeur | Group Logistics Quote",
    description: "Expert event transportation in Sydney. Chauffeur services for conferences, conventions, and large group events at ICC Sydney and major venues.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
