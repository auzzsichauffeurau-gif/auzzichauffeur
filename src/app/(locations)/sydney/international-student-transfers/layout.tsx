import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Sydney | Auzzie Chauffeur | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students in Sydney. Trustworthy chauffeurs for university pickups at USYD, UNSW, and UTS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
