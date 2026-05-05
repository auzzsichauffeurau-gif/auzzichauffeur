import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Cairns | Auzzie Chauffeur | Reliable Port Pickup",
    description: "Stress-free cruise terminal transfers in Cairns. Chauffeur service to and from Cairns Cruise Terminal. Punctual and reliable pickups for reef cruises.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
