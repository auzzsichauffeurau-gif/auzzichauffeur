import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Brisbane | Auzzie Chauffeur | Reliable Port Pickup",
    description: "Stress-free cruise terminal transfers in Brisbane. Professional chauffeur service to and from Brisbane's cruise port. Punctual and reliable pickups.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
