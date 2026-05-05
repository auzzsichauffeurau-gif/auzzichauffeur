import Navbar from "@/components/Navbar";
import InnerHero from "@/components/InnerHero";
import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

const formatTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const serviceName = formatTitle(resolvedParams.slug);
    return {
        title: { absolute: `${serviceName} | Auzzie Chauffeur | Book Expert Service` },
        description: `Premium ${serviceName} services across Australia. Professional drivers, luxury vehicles, and reliable timing. Book your ${serviceName} online.`
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const serviceName = formatTitle(resolvedParams.slug);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: serviceName },
    ];

    return (
        <main>
            <Navbar />
            <InnerHero
                title={serviceName}
                subtitle={`Professional ${serviceName} tailored to your needs.`}
                breadcrumbs={breadcrumbs}
            />
            <ContactHelp />
            <Footer />
        </main>
    );
}
