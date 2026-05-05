import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transport Gold Coast | Auzzie Chauffeur | Group Logistics Quote",
    description: "Expert event transportation on the Gold Coast. Chauffeur services for conferences, conventions, and large group events in Gold Coast venues.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
