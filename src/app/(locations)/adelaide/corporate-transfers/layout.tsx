import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Service Adelaide | Auzzie Chauffeur | Get Corporate Quote",
    description: "Expert corporate transportation in Adelaide. Professional chauffeurs for business meetings, events, and executive travel in Adelaide's CBD and beyond.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
