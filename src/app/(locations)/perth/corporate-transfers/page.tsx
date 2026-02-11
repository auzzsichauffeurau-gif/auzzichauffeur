import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Briefcase, Clock, ShieldCheck, Wifi, Coffee, MapPin } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Transfers Perth | Executive Chauffeur Service",
    description: "Premium corporate transport in Perth. Reliable chauffeur service for St Georges Terrace, West Perth, and mining executives.",
};

export default function PerthCorporatePage() {
    const faqs = [
        {
            question: "Do You Service the Mining Sector?",
            answer: "Yes, we specialize in transfers for mining executives, connecting Perth Airport (T1/T2) with head offices in West Perth and the CBD seamlessly."
        },
        {
            question: "Can I Open an Account?",
            answer: "We offer corporate accounts for regular business travelers, providing streamlined billing and priority booking status."
        },
        {
            question: "Is Privacy Guaranteed?",
            answer: "Discretion is our hallmark. Our chauffeurs are professionals who understand the need for privacy and confidentiality during your journey."
        },
        {
            question: "Do You Offer Wi-Fi?",
            answer: "Most of our executive fleet is equipped with complimentary Wi-Fi, allowing you to work efficiently while on the move."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedan',
            name: 'Holden Caprice / Similar',
            desc: 'The standard for Australian corporate travel.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedan',
            name: 'Mercedes E-Class / Audi A6',
            desc: 'European luxury for VIP executives.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Mercedes GLE',
            desc: 'Spacious comfort for roadshows and site visits.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="Corporate Transfers Perth"
                subtitle="Executive logistics for the West's business leaders."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class on the Ground</h2>
                <div className={styles.textBlock}>
                    <p>
                        In Perth's fast-paced business environment, reliability is paramount. Auzzsi Chauffeur provides punctual
                        and professional transport solutions for Perth's corporate sector.
                        <br /><br />
                        From St Georges Terrace to the mining hubs of West Perth and beyond, our fleet ensures you arrive at your
                        meetings relaxed and prepared. We understand the specific needs of FIFO executives and corporate roadshows.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Briefcase size={28} /></div>
                        <span className={styles.featureLabel}>Executive<br />Focus</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctual<br />Arrivals</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Wifi size={28} /></div>
                        <span className={styles.featureLabel}>Onboard<br />Wi-Fi</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Confidential<br />Service</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Corporate Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Corporate FAQs
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
                    title="Get a Corporate Quote"
                    subtitle={<>
                        Perth executive transport solutions.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Travel Details (Dates, Frequency, Requirements)"
                />
            </section>

            <Footer />
        </main>
    );
}
