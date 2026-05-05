import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Gold Coast | Auzzie Chauffeur | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students on the Gold Coast. Trustworthy chauffeurs for university pickups at Bond and Griffith.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
