import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Perth | Auzzie Chauffeur | Book Your Dream Ride",
    description: "Elegant wedding car hire in Perth. Premium chauffeur-driven vehicles for weddings across Perth and Western Australia. Professional and stylish service.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
