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
    title: "Student Transfers Gold Coast | Bond University & Griffith",
    description: "Welcome to the Gold Coast. Safe airport transfers for international students attending Bond University and Griffith Gold Coast.",
};

export default function GoldCoastStudentPage() {
    const faqs = [
        {
            question: "Do You Service Gold Coast and Brisbane Airports?",
            answer: "Yes, we pick up from both Gold Coast Airport (OOL) and Brisbane Airport (BNE) for students heading to Gold Coast campuses."
        },
        {
            question: "Can You Drive Directly to Bond University Accommodation?",
            answer: "Yes, we provide door-to-door service directly to Bond University on-campus accommodation or private rentals in Robina and surrounding suburbs."
        },
        {
            question: "What About Griffith University Village?",
            answer: "We regularly transfer students to the Griffith University Village and other student housing near the Southport campus."
        },
        {
            question: "How Much Luggage Can I Bring?",
            answer: "Ample space is available in our SUVs and People Movers for students arriving with multiple large suitcases."
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
                title="International Student Transfers Gold Coast"
                subtitle="Study in paradise. Safe airport pickups for Bond and Griffith students."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Welcome to the Gold Coast</h2>
                <div className={styles.textBlock}>
                    <p>
                        Combining world-class education with a stunning lifestyle, the Gold Coast is a top destination for students.
                        Auzzsi Chauffeur ensures your arrival is smooth, safe, and welcoming.
                        <br /><br />
                        We specialize in transfers for students attending Bond University, Griffith University Gold Coast, and Southern Cross University.
                        Our drivers will meet you at the airport and help you settle into your new student accommodation.
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
                        <span className={styles.featureLabel}>Friendly<br />Service</span>
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
                        Book your safe arrival to the Gold Coast.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Arrival Details (Flight, University/Address)"
                />
            </section>

            <Footer />
        </main>
    );
}
