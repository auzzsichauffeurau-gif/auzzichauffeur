import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Service Sydney | Auzzie Chauffeur | Get Corporate Quote",
    description: "Premium corporate transport in Sydney. Professional chauffeurs for business meetings, airport transfers, and executive travel in Sydney's CBD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
