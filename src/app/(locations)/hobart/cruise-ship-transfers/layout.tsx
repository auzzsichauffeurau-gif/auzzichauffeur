import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Hobart | Auzzie Chauffeur | Reliable Port Pickup",
    description: "Stress-free cruise terminal transfers in Hobart. Chauffeur service to and from Hobart Cruise Port. Punctual and reliable pickups for cruise guests.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
