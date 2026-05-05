import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Hobart | Auzzie Chauffeur | Flexible Private Driver",
    description: "Book an hourly chauffeur in Hobart for total flexibility. Perfect for city tours, visits to MONA, or a private driver for the day in Hobart.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
