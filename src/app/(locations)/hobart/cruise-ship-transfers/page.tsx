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
    title: "Cruise Transfers Hobart | Macquarie Wharf Terminal",
    description: "Private chauffeur transfers to Hobart's Macquarie Wharf No. 2 (MAC 02) Cruise Terminal. Reliable service for your Tasmanian voyage.",
};

export default function HobartCruisePage() {
    const faqs = [
        {
            question: "Where is Hobart's Cruise Terminal?",
            answer: "The main cruise terminal is Macquarie Wharf No. 2 (MAC 02), located steps from the historic Hunter Street precinct and a short drive from the CBD."
        },
        {
            question: "Can You Pick Us Up from Hobart Airport?",
            answer: "Yes, we monitor all flights arriving at Hobart Airport (HBA) and can transfer you straight to the cruise terminal."
        },
        {
            question: "How Much Luggage Can You Take?",
            answer: "For cruise passengers with extended holiday luggage, our Mercedes V-Class People Movers are perfect, accommodating up to 7 passengers and 6 large suitcases."
        },
        {
            question: "Do You Offer Day Tours from the Ship?",
            answer: "Absolutely. If you are stopping in Hobart for the day, hire a chauffeur for a private tour of Mount Wellington, Richmond, or Bonorong Wildlife Sanctuary."
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
            desc: 'Best for groups and heavy luggage.',
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
                title="Cruise Transfers Hobart"
                subtitle="Reliable transfers to Macquarie Wharf Cruise Terminal."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Hobart Port Transfers</h2>
                <div className={styles.textBlock}>
                    <p>
                        Hobart is a stunning port of call. Auzzsi Chauffeur provides professional transfers to and from
                        Macquarie Wharf (MAC 02), ensuring you start or end your Tasmanian cruise in comfort.
                        <br /><br />
                        We service connections between Hobart Airport, CBD hotels, and the cruise terminal. Our local drivers
                        know the best routes and can assist with all your luggage requirements.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>MAC 02<br />Drop-off</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Bus size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Transport</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Reliable<br />Service</span>
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
                        Hobart Cruise FAQs
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
                        Transfers to Macquarie Wharf.
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
