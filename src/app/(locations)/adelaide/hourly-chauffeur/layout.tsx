import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Adelaide | Auzzie Chauffeur | Flexible Private Driver",
    description: "Book an hourly chauffeur in Adelaide for complete flexibility. Perfect for Barossa Valley wine tours, city trips, or a private driver for the day.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
