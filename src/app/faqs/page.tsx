import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import ContactHelp from "@/components/ContactHelp";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Chauffeur Service FAQs | Auzzie Chauffeur | Your Questions Answered" },
    description: "Find answers to frequently asked questions about Auzzie Chauffeur services. Pricing, booking, fleet details, and airport meeting points explained.",
};

export default function FAQPage() {
    return (
        <main>
            <Navbar />
            <Hero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our chauffeur services, booking process, and more."
                showStats={false}
            />
            <FAQ />
            <ContactHelp />
            <Footer />
        </main>
    );
}
