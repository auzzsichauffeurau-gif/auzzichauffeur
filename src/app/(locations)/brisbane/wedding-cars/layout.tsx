import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Brisbane | Auzzie Chauffeur | Book Your Dream Ride",
    description: "Elegant wedding car hire in Brisbane. Luxury chauffeur-driven vehicles for your special day. Professional service and stunning cars for Brisbane weddings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
