import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Hobart | Auzzie Chauffeur | Book Your Dream Ride",
    description: "Elegant wedding car hire in Hobart. Luxury chauffeur-driven vehicles for your special day in Tasmania. Professional and stylish wedding transport.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
