import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Fatigue Management Policy | Auzzie Chauffeur | Driver & Passenger Safety",
    description: "Safety protocols for chauffeur fatigue management. Ensuring our drivers are alert and rested for every journey to maintain the highest safety standards.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
