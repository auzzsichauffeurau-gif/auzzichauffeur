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
    title: "International Student Transfers Sydney | USYD, UNSW & UTS",
    description: "Safe and reliable airport pickups for international students in Sydney. Transfers to University of Sydney, UNSW, UTS, and student accommodation.",
};

export default function SydneyStudentPage() {
    const faqs = [
        {
            question: "Do You Meet Students inside the Airport Terminal?",
            answer: "Yes, our driver will meet the student in the arrival hall holding a name sign. This ensures they don't get lost and feel safe immediately upon arrival in Sydney."
        },
        {
            question: "Can You Transfer to Student Accommodation or Homestay?",
            answer: "We provide door-to-door service to all student accommodations (e.g., Scape, Iglu), university colleges, and private homestay addresses across Sydney."
        },
        {
            question: "Is There Space for Large Student Luggage?",
            answer: "Students often travel with their entire life in suitcases. We recommend our SUVs or People Movers which have ample space for 3-4 large suitcases plus carry-on bags."
        },
        {
            question: "Can Parents Book and Track the Ride?",
            answer: "Yes, parents overseas can book the transfer and receive confirmation. We also provide the driver's details in advance for peace of mind."
        }
    ];

    const vehicles = [
        {
            category: 'Standard',
            name: 'Executive Sedan',
            desc: 'Economical choice for students with standard luggage.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Large Luggage',
            name: 'Audi Q7 / Similar',
            desc: 'Best for students moving with multiple large suitcases.',
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
                title="International Student Transfers Sydney"
                subtitle="A warm welcome to Sydney. Safe airport pickups for students and families."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Safe Arrival for Students in Sydney</h2>
                <div className={styles.textBlock}>
                    <p>
                        Arriving in a new city for university is an exciting but daunting experience. Auzzsi Chauffeur provides
                        peace of mind for students and parents with a professional airport meet-and-greet service.
                        <br /><br />
                        We transfer students directly from Sydney Airport (SYD) to the University of Sydney, UNSW, UTS, Macquarie University,
                        and all student accommodation providers. Our drivers are police-checked, professional, and helpful with heavy luggage.
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
                        <span className={styles.featureLabel}>Parent<br />Approved</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Student Transfer Vehicles</h2>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    Recommended vehicles for student luggage requirements.
                </div>
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
                    title="Book Student Arrival Transfer"
                    subtitle={<>
                        Provide flight details for a guaranteed pickup.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Arrival Details (Flight Number, University/Address)"
                />
            </section>

            <Footer />
        </main>
    );
}
