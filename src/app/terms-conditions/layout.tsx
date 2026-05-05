import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Terms & Conditions | Auzzie Chauffeur | Booking Agreement" },
    description: "Read the terms and conditions for Auzzie Chauffeur services. Our policies on booking, cancellations, passenger conduct, and liability.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
