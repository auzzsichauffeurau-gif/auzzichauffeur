import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Service Hobart | Auzzie Chauffeur | Get Corporate Quote",
    description: "Professional corporate transport in Hobart. Executive chauffeurs for business meetings, airport transfers, and executive travel in Hobart.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
