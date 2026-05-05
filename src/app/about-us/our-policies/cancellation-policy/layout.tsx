import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cancellation Policy | Auzzie Chauffeur | Booking Terms",
    description: "Review Auzzie Chauffeur's cancellation and refund policy. Learn about our terms for standard bookings, airport transfers, and special events.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
