import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Cairns | Auzzie Chauffeur | Book Your Dream Ride",
    description: "Elegant wedding car hire in Cairns and Port Douglas. Luxury chauffeur-driven vehicles for your tropical wedding day. Professional North Queensland service.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
