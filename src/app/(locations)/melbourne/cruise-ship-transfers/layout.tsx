import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Melbourne | Auzzie Chauffeur | Reliable Port Pickup",
    description: "Reliable cruise terminal transfers in Melbourne. Chauffeur service to and from Station Pier Cruise Terminal. Punctual and comfortable transport.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
