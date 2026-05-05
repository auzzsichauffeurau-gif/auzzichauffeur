import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Gold Coast | Auzzie Chauffeur | Flexible Private Driver",
    description: "Book an hourly chauffeur on the Gold Coast for total flexibility. Perfect for theme park trips, city tours, or a private driver for the day.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
