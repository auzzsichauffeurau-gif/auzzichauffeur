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
    title: "Cruise Ship Transfers Adelaide | Outer Harbor Terminal",
    description: "Reliable chauffeur transfers to Adelaide Passenger Terminal at Outer Harbor. Start your cruise from South Australia in comfort.",
};

export default function AdelaideCruisePage() {
    const faqs = [
        {
            question: "Where is the Adelaide Cruise Terminal?",
            answer: "The Adelaide Passenger Terminal is located at Outer Harbor, approximately 45-60 minutes drive from the Adelaide CBD."
        },
        {
            question: "Do You Service Kangaroo Island Ferries?",
            answer: "We can arrange transfers to Cape Jervis for the SeaLink Kangaroo Island ferry, which is a scenic drive south of Adelaide."
        },
        {
            question: "How Early Should I Arrive?",
            answer: "We generally recommend arriving 2-3 hours before your ship's scheduled departure, or as advised by your cruise line."
        },
        {
            question: "Can You Pick Us Up from Adelaide Airport?",
            answer: "Yes, we provide direct transfers from Adelaide Airport (ADL) to the Outer Harbor cruise terminal."
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
            desc: 'Ideal for groups heading to Outer Harbor.',
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
                title="Cruise Ship Transfers Adelaide"
                subtitle="Stress-free transfers to Outer Harbor Passenger Terminal."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Set Sail from South Australia</h2>
                <div className={styles.textBlock}>
                    <p>
                        Adelaide's Outer Harbor welcomes cruise ships from around the globe. Auzzsi Chauffeur ensures your journey
                        from your doorstep to the gangway is smooth and luxurious.
                        <br /><br />
                        Avoid the long train ride or expensive parking fees. Our chauffeurs will collect you from Adelaide Airport
                        or your hotel and drive you directly to the terminal entrance.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>Outer Harbor<br />Drop-off</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Bus size={28} /></div>
                        <span className={styles.featureLabel}>Luggage<br />Assistance</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Price</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>On Time<br />Arrival</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Cruise Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Adelaide Cruise FAQs
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
                        Transfers to Outer Harbor Cruise Terminal.
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
