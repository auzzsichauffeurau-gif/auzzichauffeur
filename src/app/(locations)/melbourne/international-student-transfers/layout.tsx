import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Melbourne | Auzzie Chauffeur | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students in Melbourne. Trustworthy chauffeurs for university pickups at Unimelb, Monash, and RMIT.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
