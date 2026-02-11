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
    title: "Student Transfers Hobart | University of Tasmania (UTAS)",
    description: "Welcome to Hobart. Safe airport transfers for international students attending the University of Tasmania (UTAS).",
};

export default function HobartStudentPage() {
    const faqs = [
        {
            question: "Do You Pick Up from Hobart Airport?",
            answer: "Yes, we monitor all flight arrivals at Hobart Airport (HBA). Your driver will meet you in the terminal with a name sign."
        },
        {
            question: "Can You Take Me to UTAS Sandy Bay Campus?",
            answer: "We provide direct transfers to the UTAS Sandy Bay campus, as well as the city campus and Medical Science Precinct."
        },
        {
            question: "Do You Service Student Accommodations?",
            answer: "Yes, we drop off at all major student accommodations including Christ College, St. John Fisher College, and private rentals."
        },
        {
            question: "Is There Extra Room for Luggage?",
            answer: "Our vehicles are spacious. The Mercedes V-Class is perfect if you are arriving with multiple large suitcases and boxes."
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
                title="International Student Transfers Hobart"
                subtitle="Start your studies in Tasmania with a safe airport pickup."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Welcome to Tasmania</h2>
                <div className={styles.textBlock}>
                    <p>
                        Hobart offers a unique and beautiful environment for study. Auzzsi Chauffeur ensures you receive a warm welcome
                        upon landing, with a safe and reliable transfer to your new home.
                        <br /><br />
                        We specialize in assisting students attending the University of Tasmania (UTAS). Our drivers are helpful local experts
                        who will ensure you and your luggage arrive safely at your accommodation.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><GraduationCap size={28} /></div>
                        <span className={styles.featureLabel}>UTAS<br />Transfer</span>
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
                        <span className={styles.featureLabel}>Local<br />Drivers</span>
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
                        Book your safe arrival into Hobart.
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
