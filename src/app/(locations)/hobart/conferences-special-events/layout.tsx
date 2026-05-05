import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transport Hobart | Auzzie Chauffeur | Group Logistics Quote",
    description: "Expert event transportation in Hobart. Chauffeur services for conferences, conventions, and large group events in Hobart. Reliable logistics for your event.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
