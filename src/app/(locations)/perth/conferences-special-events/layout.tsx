import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transport Perth | Auzzie Chauffeur | Group Logistics Quote",
    description: "Expert event transportation in Perth. Chauffeur services for conferences, conventions, and large group events in Perth. Reliable logistics for your event.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
