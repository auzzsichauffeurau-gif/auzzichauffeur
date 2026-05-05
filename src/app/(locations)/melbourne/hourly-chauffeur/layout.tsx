import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Melbourne | Auzzie Chauffeur | Flexible Private Driver",
    description: "Book an hourly chauffeur in Melbourne for ultimate flexibility. Perfect for city tours, winery trips in Yarra Valley, or private hire for the day in Melbourne.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
