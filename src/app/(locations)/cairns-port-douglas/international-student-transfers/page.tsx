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
    title: "Student Transfers Cairns | JCU & CQU",
    description: "Welcome to Cairns. Safe airport transfers for international students attending James Cook University (JCU) and CQU.",
};

export default function CairnsStudentPage() {
    const faqs = [
        {
            question: "Do You Pick Up from Cairns Airport?",
            answer: "Yes, we monitor all international and domestic arrivals. Your driver will meet you in the terminal arrival hall with a name board."
        },
        {
            question: "Do You Transfer to JCU Cairns Campus?",
            answer: "We provide direct transfers to James Cook University (JCU) in Smithfield, as well as CQUniversity in the city."
        },
        {
            question: "Can You Take Me to Student Accommodation?",
            answer: "We drop off at all student lodges, including John Grey Hall, Cairns Student Lodge, and private rentals across the city."
        },
        {
            question: "Is There Room for My Bike/Board?",
            answer: "If you are bringing oversized items like a surfboard or bike box, please let us know when booking so we can send a larger vehicle (SUV or Van)."
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
                title="International Student Transfers Cairns"
                subtitle="Start your tropical study adventure with a safe airport pickup."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Welcome to Cairns</h2>
                <div className={styles.textBlock}>
                    <p>
                        Cairns is an incredible place to study, surrounded by rainforests and the reef. Auzzsi Chauffeur ensures
                        international students have a safe, stress-free arrival.
                        <br /><br />
                        We specialize in assisting students attending James Cook University (JCU) and CQU. Our friendly local drivers
                        will help with your luggage and answer any questions you have about your new city on the way to your accommodation.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><GraduationCap size={28} /></div>
                        <span className={styles.featureLabel}>University<br />Transfer</span>
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
                        <span className={styles.featureLabel}>Local<br />Knowledge</span>
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
                        Student FAQs
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
                    title="Student Transfer Quote"
                    subtitle={<>
                        Book your safe arrival into Cairns.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Arrival Details (Flight Number, Address)"
                />
            </section>

            <Footer />
        </main>
    );
}
