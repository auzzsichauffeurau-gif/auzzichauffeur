import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Cairns | Auzzie Chauffeur | Flexible Private Driver",
    description: "Book an hourly chauffeur in Cairns and Port Douglas for complete flexibility. Ideal for reef tours, rainforest trips, or a private driver in Cairns.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
