import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transport Adelaide | Auzzie Chauffeur | Group Logistics Quote",
    description: "Expert event transportation in Adelaide. Chauffeur services for conferences, conventions, and large group events in Adelaide. Reliable logistics for your event.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
