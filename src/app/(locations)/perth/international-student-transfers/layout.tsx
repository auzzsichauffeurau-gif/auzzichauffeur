import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Perth | Auzzie Chauffeur | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students in Perth. Trustworthy chauffeurs for university pickups at UWA, Curtin, and Murdoch.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
