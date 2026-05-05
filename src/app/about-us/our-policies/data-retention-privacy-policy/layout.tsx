import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Data Retention & Privacy Policy | Auzzie Chauffeur | Secure Data Handling",
    description: "Learn how Auzzie Chauffeur manages and protects your personal data according to Australian standards. Information on data storage and retention periods.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
