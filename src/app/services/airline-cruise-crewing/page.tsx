import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import { Plane, Anchor, Clock, Users, ShieldCheck, FileText } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airline & Cruise Crew Transfers | Logistics Transport Australia",
    description: "Specialized transport for airline flight crew and cruise ship staff. Reliable, punctual, and secure transfers between airports, ports, and hotels.",
};

export default function CrewingServicesPage() {
    const faqs = [
        {
            question: "Do you offer contract rates for airlines?",
            answer: "Yes, we offer competitive contracted rates for ongoing crew transfer requirements, with consolidated monthly billing."
        },
        {
            question: "How do you handle flight delays?",
            answer: "Our operations team monitors all flights 24/7. We adjust pickup times automatically to ensure crew are never left waiting or rushed."
        },
        {
            question: "What vehicles do you use for crew?",
            answer: "We typically utilize Mercedes V-Class people movers and larger buses or coaches depending on the crew size, ensuring ample space for luggage."
        },
        {
            question: "Are you airside accredited?",
            answer: "Many of our drivers hold ASIC cards and specific airport accreditations. Please discuss your specific airside requirements with our operations manager."
        }
    ];

    const vehicles = [
        {
            category: 'Crew Van',
            name: 'Mercedes V-Class',
            desc: 'Ideal for captain & first officer or small cabin crew teams.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        },
        {
            category: 'Mini Bus',
            name: 'Create / Sprinter',
            desc: 'Transporting full cabin crew complements efficiently.',
            passengers: 11,
            luggage: 11,
            bags: 11,
            image: '/tile-driver.png'
        },
        {
            category: 'Coach',
            name: 'Luxury Coach',
            desc: 'For large vessel crew turnovers.',
            passengers: 50,
            luggage: 50,
            bags: 50,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            <Hero
                title="Airline & Cruise Crew Logistics"
                subtitle="Mission-critical transport for aviation and maritime professionals."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Precision Logistics</h2>
                <div className={styles.textBlock}>
                    <p>
                        Auzzsi Chauffeur understands the critical nature of crew logistics. A delayed crew member means a delayed flight or voyage, costing thousands.
                        <br /><br />
                        We provide reliable, punctual, and comfortable transfers for pilots, cabin crew, and maritime staff across all major Australian ports and airports.
                        Our dispatch systems integrate with flight data to ensure perfect timing, every time.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>On-Time<br />Performance</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Crew<br />Volume</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Airport<br />Experts</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>Port<br />Access</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Safety<br />First</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><FileText size={28} /></div>
                        <span className={styles.featureLabel}>Contract<br />Rates</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Crew Transport Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Logistics FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

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
                    title="Crew Logistics Enquiry"
                    subtitle="Partner with us for your ongoing crew transport needs."
                    detailsLabel="Requirements (Volume, Frequency, Ports)"
                />
            </section>

            <Footer />
        </main>
    );
}
