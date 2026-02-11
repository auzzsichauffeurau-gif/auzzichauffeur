import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Heart, Camera, Clock, Award, Gift, Star, Users, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wedding Cars Cairns & Port Douglas | Luxury Bridal Transport",
    description: "Make your special day unforgettable with the Tropical North's premium chauffeur-driven wedding fleet. Elegant service for beach and rainforest weddings.",
};

export default function CairnsWeddingPage() {
    const faqs = [
        {
            question: "How Far In Advance Should I Book My Wedding Cars?",
            answer: "For Dry Season weddings (May to October), we recommend booking 9-12 months in advance. This is peak wedding season in Port Douglas and Palm Cove."
        },
        {
            question: "Do You Travel To Port Douglas and the Daintree?",
            answer: "Yes, we regularly service weddings at St Mary's by the Sea, the Sugar Wharf, and rainforest venues in the Daintree. Our vehicles are kept in pristine condition for these longer journeys."
        },
        {
            question: "Is There A Minimum Hire Time For Wedding Cars?",
            answer: "Yes, generally there is a minimum hire period of 3 hours for wedding bookings in the Cairns region. This allows time for travel between ceremony and photo locations like Rex Lookout."
        },
        {
            question: "Are Your Vehicles Air-Conditioned?",
            answer: "Absolutely. Powerful climate control is essential for a Tropical North Queensland wedding. We ensure you step out of the car looking fresh, not melted."
        },
        {
            question: "Do You Provide Wedding Ribbons?",
            answer: "Yes, all our wedding packages include complimentary white satin ribbons and tulle. We can also accommodate tropical flowers or custom colors upon request."
        }
    ];

    const vehicles = [
        {
            category: 'Bridal Cars',
            name: 'Mercedes-Benz S-Class',
            desc: 'The ultimate wedding car. Spacious, elegant, and cool. Features a long wheelbase for accommodating bridal gowns with ease.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Groomsmen',
            name: 'Audi Q7 SUV',
            desc: 'Spacious and commanding. A perfect, comfortable ride for the groom and his party, especially for beach weddings.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-suv.png'
        },
        {
            category: 'Guest Transfer',
            name: 'Mercedes V-Class',
            desc: 'Luxury transport for family and guests. Shuttle your VIPs from Cairns hotels to your Port Douglas venue in comfort.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="Luxury Wedding Cars Cairns & Port Douglas"
                subtitle="Make your special day unforgettable with the Tropical North's premium chauffeur-driven wedding fleet. Elegant service for beach and rainforest weddings."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Tropical Paradise Weddings</h2>
                <div className={styles.textBlock}>
                    <p>
                        From the iconic St Mary's by the Sea in Port Douglas to the palm-fringed beaches of Palm Cove, Tropical North Queensland offers the world's most romantic wedding destinations.
                        Auzzsi Chauffeur provides impeccable wedding car services to match.
                        <br /><br />
                        Our professional chauffeurs are experienced in the region's logistics, ensuring you stay cool and relaxed while traveling
                        along the spectacular Great Barrier Reef Drive. Whether you are eloping to the Daintree or hosting a grand event at the Sheraton Grand,
                        we treat your day with the care it deserves.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Tailored Wedding Packages</h3>
                    <p>
                        We understand that every wedding is unique. Whether you need a single car for the bride or a full fleet
                        to transport guests from Cairns Airport to Port Douglas, we can tailor a package to suit your specific vision and budget.
                        All packages include a uniformed chauffeur, ribbons, and refreshments.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>White<br />Ribbons</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Star size={28} /></div>
                        <span className={styles.featureLabel}>Red Carpet<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Photo<br />Assist</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>On Time<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Immaculate<br />Vehicles</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Gift size={28} /></div>
                        <span className={styles.featureLabel}>Champagne<br />Option</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Wedding Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Select from our range of pristine luxury vehicles. To beat the tropical heat, we prioritize powerful climate control in every car.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Wedding Car FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            {/* CONTACT HELP SECTION */}
            <section className={styles.contactSection}>
                <div className={styles.contactImage}>
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}></div>
                </div>
                <ServiceContactForm
                    title="Get A Wedding Quote"
                    subtitle={<>
                        Tell us about your Tropical North wedding and we will provide a custom package.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Wedding Details (Venues, Times, Car Preference)"
                />
            </section>

            <Footer />
        </main>
    );
}
