import { Metadata } from 'next';
import BookingPageContent from '@/components/BookingPageContent';

export const metadata: Metadata = {
    title: { absolute: "Book a Chauffeur Online | Auzzie Chauffeur | Secure Booking 24/7" },
    description: "Book your premium airport transfer or private driver instantly. Secure online booking for Sydney, Melbourne, Brisbane, and nationwide.",
    alternates: {
        canonical: 'https://auzziechauffeur.com.au/book',
    },
};

export default function BookingPage() {
    return <BookingPageContent />;
}
