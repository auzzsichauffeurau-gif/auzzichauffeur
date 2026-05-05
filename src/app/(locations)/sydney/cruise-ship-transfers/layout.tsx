import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Sydney | Auzzie Chauffeur | Reliable Port Pickup",
    description: "Seamless cruise terminal transfers in Sydney. Chauffeur service to and from Circular Quay and White Bay cruise terminals in Sydney.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
