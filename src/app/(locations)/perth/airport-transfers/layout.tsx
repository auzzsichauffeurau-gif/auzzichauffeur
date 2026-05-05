import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Perth | Auzzie Chauffeur | Safe Private Drivers",
    description: "Reliable airport transfers to and from Perth Airport (PER). Professional chauffeur service, fixed rates, and luxury fleet. Book your Perth airport transfer online.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
