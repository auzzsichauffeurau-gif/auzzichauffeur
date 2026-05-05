import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Sydney | Auzzie Chauffeur | Flexible Private Driver",
    description: "Book an hourly chauffeur in Sydney for ultimate flexibility. Perfect for city tours, multiple stops, or a private driver for the day in Sydney.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
