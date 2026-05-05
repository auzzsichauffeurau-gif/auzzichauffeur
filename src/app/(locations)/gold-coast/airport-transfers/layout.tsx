import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Gold Coast | Auzzie Chauffeur | Beach Transfers Now",
    description: "Premium airport transfers to and from Gold Coast Airport (OOL). Professional chauffeurs, fixed rates, and luxury vehicles for your holiday or business trip.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
