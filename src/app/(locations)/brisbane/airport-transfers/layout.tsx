import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Brisbane | Auzzie Chauffeur | Book Reliable Ride",
    description: "Premium airport transfers to and from Brisbane Airport (BNE). Fixed rates, professional chauffeurs, and luxury vehicles. Book your Brisbane airport taxi alternative now.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
