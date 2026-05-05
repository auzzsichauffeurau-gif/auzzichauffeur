import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Melbourne | Auzzie Chauffeur | Book Your Dream Ride",
    description: "Premium wedding car hire in Melbourne. Luxury chauffeur-driven vehicles for weddings across Melbourne and Victoria. Professional and elegant service.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
