import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Anchor, Calendar, ShieldCheck, Clock, Award, Users, MapPin, Bus } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Transfers Cairns | Trinity Wharf Terminal",
    description: "Private chauffeur transfers to Cairns Cruise Liner Terminal (Trinity Wharf). Start your tropical voyage in style.",
};

export default function CairnsCruisePage() {
    const faqs = [
        {
            question: "Where is the Cairns Cruise Terminal?",
            answer: "The Cairns Cruise Liner Terminal is located at Trinity Wharf, right in the heart of the city, just minutes from major hotels."
        },
        {
            question: "Do You Transfer to Port Douglas for Cruises?",
            answer: "Some smaller luxury vessels and reef cruises depart from Port Douglas (Crystalbrook Superyacht Marina). We provide direct transfers from Cairns Airport to Port Douglas."
        },
        {
            question: "Can You Handle Reef Fleet Terminal Transfers?",
            answer: "Yes, if you are heading out on a Great Barrier Reef day trip from the Reef Fleet Terminal, we can drop you right at the entrance."
        },
        {
            question: "Is There Room for Dive Gear?",
            answer: "Absolutely. Our SUVs and People Movers have plenty of space for dive bags, luggage, and equipment."
        }
    ];

    const vehicles = [
        {
            category: 'Classic',
            name: 'Executive Sedan',
            desc: 'Comfortable transfer for couples.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Extra space for cruise luggage.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'Ideal for groups and reef trip gear.',
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
                title="Cruise Transfers Cairns"
                subtitle="Transfers to Cairns Cruise Liner Terminal & Port Douglas Marina."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Gateway to the Reef</h2>
                <div className={styles.textBlock}>
                    <p>
                        Cairns is Australia's premier port for Great Barrier Reef exploration. Auzzsi Chauffeur ensures a seamless
                        connection between Cairns Airport (CNS), your hotel, and the cruise terminals.
                        <br /><br />
                        Whether boarding a luxury liner at Trinity Wharf, a reef catamaran at the Reef Fleet Terminal, or a
                        private yacht in Port Douglas, we provide punctuality and comfort in the tropical heat.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>Wharf<br />Drop-off</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Bus size={28} /></div>
                        <span className={styles.featureLabel}>Dive<br />Gear Fit</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Reliable<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Cool<br />Comfort</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Cruise Transfer Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Cairns Cruise FAQs
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
                    title="Get a Cruise Quote"
                    subtitle={<>
                        Transfers to Cairns & Port Douglas Marinas.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Cruise Details (Date, Ship, Pax)"
                />
            </section>

            <Footer />
        </main>
    );
}
