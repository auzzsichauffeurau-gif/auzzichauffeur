import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { GraduationCap, BookOpen, ShieldCheck, Clock, Award, Users, MapPin, Bus } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Student Transfers Melbourne | Airport Pickups",
    description: "Safe, reliable airport transfers for international students arriving in Melbourne. University, college, and homestay drop-offs.",
};

export default function MelbourneStudentPage() {
    const faqs = [
        {
            question: "Do You Offer Discounts For Students?",
            answer: "We offer competitive fixed rates for student transfers. While we provide a premium service, sharing a People Mover van with fellow students can make the cost very comparable to other modes of transport."
        },
        {
            question: "Can You Pick Me Up From Melbourne Airport And Take Me To Student Accommodation?",
            answer: "Yes, we transfer students to all major student accommodation providers including Scape, Unilodge, The Student Housing Company, and university residential colleges."
        },
        {
            question: "I Have A Lot Of Luggage, Which Car Should I Book?",
            answer: "International students often travel with 2-3 large suitcases. We highly recommend booking our Luxury SUV or Mercedes V-Class People Mover to ensure all your luggage fits comfortably."
        },
        {
            question: "My Parents Want To Knowing I Arrived Safely. How Can You Help?",
            answer: "We understand safety is a priority. Drivers can provide a confirmation message to parents upon drop-off. Our vehicles are also tracked via GPS for peace of mind."
        },
        {
            question: "Can I Book A Transfer For My Orientation Week Tours?",
            answer: "Absolutely. We can arrange day tours for groups of students wanting to explore Melbourne, the Great Ocean Road, or Phillip Island during orientation week."
        }
    ];

    const vehicles = [
        {
            category: 'Economy Luxury',
            name: 'Executive Sedan',
            desc: 'For individual students with standard luggage.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'SUV',
            name: 'Luxury SUV',
            desc: 'Extra capacity for 3-4 large suitcases.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'Group Van',
            name: 'Mercedes V-Class',
            desc: 'Ideal for groups of friends arriving together.',
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
                title="International Student Transfers Melbourne"
                subtitle="Welcome to Melbourne. Safe, reliable transport from the airport to your university or new home."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Welcome to Melbourne</h2>
                <div className={styles.textBlock}>
                    <p>
                        Arriving in a new city to study is an exciting adventure. Auzzsi Chauffeur ensures your
                        arrival is smooth and stress-free. We provide a safe, direct transfer from Melbourne
                        Airport (Tulla) to your student accommodation, homestay, or rental property.
                        <br /><br />
                        Our drivers are friendly locals who can offer tips about the city. We meet you inside the
                        terminal, help with your heavy luggage, and drive you directly to your door. No navigating
                        trains or buses with heavy bags after a long flight.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Safety & Peace of Mind</h3>
                    <p>
                        For parents sending their children abroad, safety is paramount. Auzzsi Chauffeur is a fully
                        accredited operator with police-checked drivers. We offer a secure, tracked service so you
                        can rest assured that your arrival in Australia is in safe hands.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><GraduationCap size={28} /></div>
                        <span className={styles.featureLabel}>Student<br />Focus</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><BookOpen size={28} /></div>
                        <span className={styles.featureLabel}>University<br />Drop-off</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Safe &<br />Secure</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Flight<br />Monitoring</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Trusted<br />Driver</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Fare</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Student Transport Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Affordable luxury options for reliable arrival.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Student Transfer FAQs
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
                    title="Get Student Transfer Quote"
                    subtitle={<>
                        Contact us for university group bookings or individual arrivals.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span> or <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>students@auzzsi.com.au</span>
                    </>}
                    detailsLabel="Arrival Details (Flight, Accommodation)"
                />
            </section>

            <Footer />
        </main>
    );
}
