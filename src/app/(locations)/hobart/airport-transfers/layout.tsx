import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Hobart | Auzzie Chauffeur | Trusted Airport Rides",
    description: "Premium airport transfers in Hobart. Reliable chauffeur service to and from Hobart Airport (HBA). Fixed rates and luxury vehicles for your Tasmania trip.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
