import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Brisbane | Auzzie Chauffeur | Get Corporate Quote",
    description: "Professional corporate transfers in Brisbane. Executive chauffeur service for business meetings, events, and airport pickups. Premium fleet for corporate clients.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
