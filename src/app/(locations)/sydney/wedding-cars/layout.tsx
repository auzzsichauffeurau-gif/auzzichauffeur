import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Sydney | Auzzie Chauffeur | Book Your Dream Ride",
    description: "Exquisite wedding car hire in Sydney. Celebrate your special day with our premium chauffeur-driven vehicles for weddings across Sydney.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
