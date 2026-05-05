import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Perth | Auzzie Chauffeur | Flexible Private Driver",
    description: "Book an hourly chauffeur in Perth for complete flexibility. Ideal for city tours, multiple meetings, or a private driver for the day in Perth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
