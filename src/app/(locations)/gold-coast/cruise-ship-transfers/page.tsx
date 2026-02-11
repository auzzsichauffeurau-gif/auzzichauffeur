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
    title: "Cruise Transfers Gold Coast | To Brisbane Cruise Terminal",
    description: "Cruising from Brisbane? We provide reliable private transfers from the Gold Coast to Brisbane International Cruise Terminal.",
};

export default function GoldCoastCruisePage() {
    const faqs = [
        {
            question: "Do You Transfer to Brisbane Cruise Terminal?",
            answer: "Yes, this is one of our most popular services. We pick you up from your Gold Coast home or hotel and drive you directly to the Brisbane International Cruise Terminal at Luggage Point."
        },
        {
            question: "How Long Does the Transfer Take?",
            answer: "The drive from the Gold Coast (e.g., Surfers Paradise) to the Brisbane Cruise Terminal generally takes about 60-90 minutes, depending on traffic on the M1."
        },
        {
            question: "Do You Offer Transfers to The Spit?",
            answer: "Yes, for smaller vessels or private charters departing from The Spit or Marina Mirage on the Gold Coast, we provide local transfers."
        },
        {
            question: "Can You Pick Us Up When We Return?",
            answer: "Absolutely. We can monitor your ship's arrival in Brisbane and have a chauffeur waiting to bring you back to the Gold Coast."
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
            desc: 'Ideal for families with cruise luggage.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'Spacious van for groups transferring to the port.',
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
                title="Cruise Transfers Gold Coast"
                subtitle="Reliable connections to Brisbane International Cruise Terminal."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Gold Coast to Cruise Terminal</h2>
                <div className={styles.textBlock}>
                    <p>
                        Most international cruises for Queensland depart from the Brisbane International Cruise Terminal.
                        Auzzsi Chauffeur specializes in connecting Gold Coast residents and visitors to their ship in comfort.
                        <br /><br />
                        Start your holiday the moment you leave your door. Relax in our premium vehicles while we navigate
                        the M1 traffic, dropping you right at the terminal bag-drop.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>Brisbane<br />Port Connection</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Bus size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Transfers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Price</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Timely<br />Travel</span>
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
                        Cruise Transfer FAQs
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
                    title="Get a Cruise Transfer Quote"
                    subtitle={<>
                        Transfers from Gold Coast to Brisbane Cruise Terminal.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Travel Details (Date, Pickup Suburb, Ship)"
                />
            </section>

            <Footer />
        </main>
    );
}
