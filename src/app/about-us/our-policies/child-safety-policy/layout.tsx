import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Child Safety Policy | Auzzie Chauffeur | Safe Passenger Transport",
    description: "Our commitment to passenger safety, particularly for children. Details on child restraints and safety protocols for chauffeur services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
