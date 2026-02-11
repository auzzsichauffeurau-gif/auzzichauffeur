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
    title: "Student Transfers Adelaide | UniOfAdelaide & Flinders",
    description: "Welcome to Adelaide. Safe airport transfers for international students attending University of Adelaide, Flinders, and UniSA.",
};

export default function AdelaideStudentPage() {
    const faqs = [
        {
            question: "How Do I Meet My Driver at Adelaide Airport?",
            answer: "Your friendly driver will be waiting in the arrival hall holding a name sign. Look for them once you clear customs and enter the public area."
        },
        {
            question: "Do You Service All Universities?",
            answer: "Yes, we transfer students to the University of Adelaide (North Terrace), University of South Australia (City West/East, Magill, Mawson Lakes), and Flinders University (Bedford Park)."
        },
        {
            question: "Can You Take Me to Student Accommodation?",
            answer: "We provide door-to-door service to all student housing providers (e.g., Scape, Yugo) and private rentals across Adelaide."
        },
        {
            question: "Is There Enough Room for Luggage?",
            answer: "Our SUVs and People Movers are designed to carry multiple large suitcases, perfect for moving your life to a new city."
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
                title="International Student Transfers Adelaide"
                subtitle="A warm South Australian welcome. Safe airport pickups for students."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Welcome to Adelaide</h2>
                <div className={styles.textBlock}>
                    <p>
                        Adelaide is known as one of Australia's most livable and student-friendly cities. Auzzsi Chauffeur ensures
                        your arrival is stress-free with our reliable airport meet-and-greet service.
                        <br /><br />
                        We specialize in safe transfers for students attending the University of Adelaide, Flinders University, and UniSA.
                        Let us handle your luggage and get you safely to your new accommodation.
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
                        Pre-book your safe arrival into Adelaide.
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
