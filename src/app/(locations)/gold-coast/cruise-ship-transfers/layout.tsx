import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Gold Coast | Auzzie Chauffeur | Reliable Port Pickup",
    description: "Stress-free cruise terminal transfers on the Gold Coast. Chauffeur service to and from Gold Coast cruise ports. Punctual and reliable pickups.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
