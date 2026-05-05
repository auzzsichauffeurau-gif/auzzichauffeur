import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Hobart | Auzzie Chauffeur | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students in Hobart. Trustworthy chauffeurs for university pickups at UTAS Hobart campus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
