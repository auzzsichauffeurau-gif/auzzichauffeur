import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { GraduationCap, Plane, ShieldCheck, Heart, UserCheck, MapPin } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Brisbane | UQ, QUT & Griffith",
    description: "Welcome to Brisbane. Safe airport pickup service for international students attending UQ, QUT, and Griffith University.",
};

export default function BrisbaneStudentPage() {
    const faqs = [
        {
            question: "How Do I Find My Driver at Brisbane Airport?",
            answer: "Your driver will be waiting in the arrival hall holding a sign with your name. They will help you with your luggage and guide you to the car."
        },
        {
            question: "Do You Go to St Lucia and Kelvin Grove Campuses?",
            answer: "Yes, we transfer consistent to all university campuses including UQ St Lucia, QUT Kelvin Grove & Gardens Point, and Griffith University Nathan & Mt Gravatt."
        },
        {
            question: "Can You Take Me to the Gold Coast Campus?",
            answer: "Yes, we provide direct transfers from Brisbane Airport to Griffith University Gold Coast campus and student accommodation on the Gold Coast."
        },
        {
            question: "How Much Luggage Can I Bring?",
            answer: "We know students pack heavily for their semester. Our SUVs and People Movers can accommodate 3-4 large suitcases securely."
        }
    ];

    const vehicles = [
        {
            category: 'Standard',
            name: 'Executive Sedan',
            desc: 'For students with up to 2 large suitcases.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Large Luggage',
            name: 'Audi Q7 / Similar',
            desc: 'Recommended for students with multiple large bags.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="International Student Transfers Brisbane"
                subtitle="Start your studies in Brisbane with a friendly, safe airport pickup."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Welcome to the Sunshine State</h2>
                <div className={styles.textBlock}>
                    <p>
                        Brisbane is a fantastically welcoming city for international students. Auzzsi Chauffeur ensures your first
                        impression is a positive one with our safe, reliable airport transfer service.
                        <br /><br />
                        We specialize in pickups for students attending the University of Queensland (UQ), Queensland University of Technology (QUT),
                        and Griffith University. Skip the confusion of public transport and let us take you directly to your new home.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><GraduationCap size={28} /></div>
                        <span className={styles.featureLabel}>Campus<br />Drop-off</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><UserCheck size={28} /></div>
                        <span className={styles.featureLabel}>Meet &<br />Greet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Safe &<br />Secure</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>Helpful<br />Drivers</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Student Vehicles</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Student Transfers FAQs
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
                    title="Student Arrival Quote"
                    subtitle={<>
                        Pre-book your safe arrival into Brisbane.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Arrival Details (Flight, Campus/Address)"
                />
            </section>

            <Footer />
        </main>
    );
}
