import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DriverProfile from "@/components/DriverProfile";
import NationalCoverage from "@/components/NationalCoverage";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Auzzie Chauffeur | Australia's National Chauffeur Network",
    description: "Discover Australia's national chauffeur network. Learn about our commitment to luxury transport, professional standards, and our history of serving Australian cities since 2004.",
    alternates: {
        canonical: '/about-us',
    },
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <Hero
                title="About Auzzie"
                subtitle="Australia's premier chauffeur service, dedicated to excellence, comfort, and reliability."
                showStats={true}
            />
            <DriverProfile />
            <NationalCoverage />
            <TrustedBy />
            <Footer />
        </main>
    );
}
