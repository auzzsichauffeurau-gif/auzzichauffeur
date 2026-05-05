import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transport Brisbane | Auzzie Chauffeur | Group Logistics Quote",
    description: "Expert event transportation in Brisbane. Chauffeur services for conferences, conventions, and large group events in Brisbane. Reliable logistics for your event.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
