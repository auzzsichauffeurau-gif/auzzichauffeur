import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Social Responsibility Policy | Auzzie Chauffeur | Community Commitment",
    description: "Our approach to corporate social responsibility in Australia. Supporting local communities and upholding ethical labor standards in chauffeur services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
