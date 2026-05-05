import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Sydney | Auzzie Chauffeur | Book Punctual Pickup",
    description: "Reliable Sydney airport transfers. 24/7 chauffeur service to and from Sydney International and Domestic terminals. Fixed pricing and luxury vehicles.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
