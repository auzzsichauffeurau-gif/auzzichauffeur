import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transport Melbourne | Auzzie Chauffeur | Group Logistics Quote",
    description: "Expert event transportation in Melbourne. Chauffeur services for conferences, conventions, and large group events at MCEC and major venues.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
