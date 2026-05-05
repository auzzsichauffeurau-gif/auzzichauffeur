import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Melbourne | Auzzie Chauffeur | Book Luxury Cars",
    description: "Premium airport transfers to and from Melbourne Airport (MEL). Professional chauffeurs, fixed pricing, and luxury vehicle fleet. Book your Melbourne airport ride now.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
