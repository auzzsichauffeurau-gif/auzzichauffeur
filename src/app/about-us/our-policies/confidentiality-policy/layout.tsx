import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Confidentiality Policy | Auzzie Chauffeur | Your Privacy Matters",
    description: "Auzzie Chauffeur maintains strict confidentiality for all passengers. Learn how we handle sensitive information and client privacy during journeys.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
