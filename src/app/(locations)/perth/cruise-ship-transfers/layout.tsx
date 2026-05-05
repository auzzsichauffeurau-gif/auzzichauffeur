import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Perth | Auzzie Chauffeur | Reliable Port Pickup",
    description: "Stress-free cruise terminal transfers in Perth. Chauffeur service to and from Fremantle Passenger Terminal. Punctual and reliable pickups.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
