import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Airport Transfers Perth | Domestic & International",
    description: "Reliable airport transfers for Perth (PER). Chauffeur meet & greet at T1, T2, T3 & T4. Luxury sedans and people movers.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
