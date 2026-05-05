import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Service Cairns | Auzzie Chauffeur | Get Corporate Quote",
    description: "Expert corporate transportation in Cairns. Professional chauffeurs for business meetings, events, and tropical executive travel.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
