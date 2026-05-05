import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Brisbane | Auzzie Chauffeur | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students in Brisbane. Trustworthy chauffeurs for university pickups and student transport in Brisbane.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
