import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Cairns | Auzzie Chauffeur | Tropical Reef Transfers",
    description: "Premium airport transfers in Cairns. Reliable chauffeur service to and from Cairns Airport (CNS). Luxury transport for reef tours and tropical holidays.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
