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
    title: "Cruise Transfers Perth | Fremantle Passenger Terminal",
    description: "Reliable chauffeur transfers to Fremantle Passenger Terminal. Start your cruise from Perth in comfort and style.",
};

export default function PerthCruisePage() {
    const faqs = [
        {
            question: "Where is the Perth Cruise Terminal?",
            answer: "The main cruise terminal is the Fremantle Passenger Terminal located at Victoria Quay, Fremantle. It is approximately 30 minutes drive from Perth CBD."
        },
        {
            question: "Do You Transfer from Perth Airport to Fremantle?",
            answer: "Yes, we provide direct transfers from Perth Airport (PER) T1/T2 and T3/T4 precincts straight to the ship in Fremantle."
        },
        {
            question: "Can You Arrange a Tour on the Way?",
            answer: "Absolutely. Many guests choose to stop at Kings Park or Cottesloe Beach for a photo opportunity on their way to the ship."
        },
        {
            question: "How Much Luggage Can You Take?",
            answer: "Our Mercedes V-Class People Movers are perfect for cruise passengers, comfortably fitting 7 people and up to 6 large suitcases."
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
            desc: 'Best for groups heading to Fremantle.',
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
                title="Cruise Transfers Perth"
                subtitle="Stress-free transfers to Fremantle Passenger Terminal."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Set Sail from Fremantle</h2>
                <div className={styles.textBlock}>
                    <p>
                        Fremantle is the historic gateway to Western Australia. Auzzsi Chauffeur ensures your journey
                        from Perth Airport or your hotel to the Fremantle Passenger Terminal is smooth and luxurious.
                        <br /><br />
                        Avoid the hassle of trains or expensive port parking. Our chauffeurs will collect you from your
                        doorstep and drop you right at the terminal entrance, ready for your voyage.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>Fremantle<br />Connection</span>
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
                        <span className={styles.featureLabel}>On Time<br />Every Time</span>
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
                        Perth Cruise FAQs
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
                        Transfers to Fremantle Cruise Terminal.
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
