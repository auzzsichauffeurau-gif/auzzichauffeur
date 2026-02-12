import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageTiles from "@/components/ImageTiles";
import ServiceGallery from "@/components/ServiceGallery";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Car Fleet | Auzzie Chauffeur | Explore Our Vehicles",
    description: "Explore our premium fleet of late-model European sedans, SUVs, and luxury minibuses. Pefect for any occasion across Australia.",
    alternates: {
        canonical: '/the-fleet',
    },
};

export default function FleetPage() {
    return (
        <main>
            <Navbar />
            <Hero
                title="Our Premium Fleet"
                subtitle="Experience luxury in our diverse range of vehicles, including European sedans, SUVs, and spacious people movers."
                showStats={false}
            />
            <ImageTiles />
            {/* ServiceGallery also contains car images so it's relevant */}
            <ServiceGallery />
            <BookingCTA />
            <Footer />
        </main>
    );
}
