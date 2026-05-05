import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Service Gold Coast | Auzzie Chauffeur | Get Corporate Quote",
    description: "Expert corporate transportation on the Gold Coast. Professional chauffeurs for business meetings, events, and executive travel. Premium service for professionals.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
