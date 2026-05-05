import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Gold Coast | Auzzie Chauffeur | Book Your Dream Ride",
    description: "Elegant wedding car hire on the Gold Coast. Luxury chauffeur-driven vehicles for your special day. Professional service and beautiful cars for Gold Coast weddings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
