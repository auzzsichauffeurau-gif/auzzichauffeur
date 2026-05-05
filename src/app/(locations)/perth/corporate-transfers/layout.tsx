import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Service Perth | Auzzie Chauffeur | Get Corporate Quote",
    description: "Expert corporate transportation in Perth. Professional chauffeurs for business meetings, airport transfers, and executive travel in Perth's CBD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
