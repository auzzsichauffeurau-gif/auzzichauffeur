import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Adelaide | Auzzie Chauffeur | Book Your Dream Ride",
    description: "Elegant wedding car hire in Adelaide. Luxury chauffeur-driven vehicles for your special day. Professional service and beautiful cars for Adelaide weddings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
