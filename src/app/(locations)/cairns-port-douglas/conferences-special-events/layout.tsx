import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transport Cairns | Auzzie Chauffeur | Group Logistics Quote",
    description: "Expert event transportation in Cairns. Chauffeur services for conferences at the Cairns Convention Centre and large group events in North Queensland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
