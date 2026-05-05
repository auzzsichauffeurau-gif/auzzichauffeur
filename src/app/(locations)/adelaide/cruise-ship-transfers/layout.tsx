import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Adelaide | Auzzie Chauffeur | Reliable Port Pickup",
    description: "Stress-free cruise terminal transfers in Adelaide. Chauffeur service to and from Port Adelaide. Punctual and reliable pickups for cruise guests.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
