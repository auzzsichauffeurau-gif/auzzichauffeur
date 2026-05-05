import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Adelaide | Auzzie Chauffeur | Trusted Airport Rides",
    description: "Premium airport transfers to and from Adelaide Airport (ADL). Professional chauffeurs, fixed rates, and luxury vehicles for your travel in South Australia.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
