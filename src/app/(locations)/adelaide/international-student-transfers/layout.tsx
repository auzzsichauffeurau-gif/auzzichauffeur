import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Adelaide | Auzzie Chauffeur | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students in Adelaide. Trustworthy chauffeurs for university pickups at UniAdelaide, UniSA, and Flinders.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
