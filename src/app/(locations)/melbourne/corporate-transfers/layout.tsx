import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Service Melbourne | Auzzie Chauffeur | Get Corporate Quote",
    description: "Expert corporate transportation in Melbourne. Professional chauffeurs for business meetings, airport transfers, and executive travel in Melbourne's business district.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
