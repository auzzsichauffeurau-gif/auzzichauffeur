import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Cairns | Auzzie Chauffeur | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students in Cairns. Trustworthy chauffeurs for university pickups at JCU and CQU Cairns.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
