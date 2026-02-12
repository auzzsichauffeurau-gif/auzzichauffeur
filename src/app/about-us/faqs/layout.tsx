import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Auzzie Chauffeur FAQs | About Our Services | Common Questions",
    description: "Find answers to booking, luggage, and child safety questions. Learn how Auzzie Chauffeur provides a superior luxury transport experience.",
    alternates: {
        canonical: '/about-us/faqs',
    },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
