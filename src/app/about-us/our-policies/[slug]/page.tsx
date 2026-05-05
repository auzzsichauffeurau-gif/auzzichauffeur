import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const policyTitle = resolvedParams.slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: `${policyTitle} | Auzzie Chauffeur | Company Policies`,
        description: `Read the ${policyTitle} from Auzzie Chauffeur. Our commitment to professional standards and passenger safety.`,
    };
}

const formatTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const policyTitle = formatTitle(resolvedParams.slug);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Our Policies", href: "/about-us/our-policies" },
        { label: policyTitle },
    ];

    return (
        <main>
            <InnerHero
                title={policyTitle}
                subtitle="Policy & Compliance"
                breadcrumbs={breadcrumbs}
            />
            <ContactHelp />
            <Footer />
        </main>
    );
}
