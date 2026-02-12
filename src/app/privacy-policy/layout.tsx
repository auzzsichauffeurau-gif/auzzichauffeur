import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Auzzie Chauffeur | Data Protection",
    description: "Read our privacy policy to understand how Auzzie Chauffeur collects, uses, and protects your personal data when booking our services.",
    alternates: {
        canonical: '/privacy-policy',
    },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
