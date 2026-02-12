import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NationalCoverage from "@/components/NationalCoverage";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "National Chauffeur Service Locations",
    description: "Explore our service areas across Australia. Luxury chauffeur service available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, and Cairns.",
};

export default function LocationsPage() {
    return (
        <main>
            <Navbar />
            <Hero
                title="Locations We Serve"
                subtitle="Auzzie provides reliable chauffeur services across all major cities in Australia."
                showStats={true}
            />
            <NationalCoverage />
            <BookingCTA />
            <Footer />
        </main>
    );
}
