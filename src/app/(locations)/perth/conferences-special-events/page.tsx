import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Calendar, Users, Calculator, MapPin, Clock, Award, ShieldCheck, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference Transport Perth | PCEC & Crown Perth",
    description: "Executive chauffeur services for Perth Convention Centre (PCEC), Crown Perth, and Optus Stadium events. Professional corporate transport.",
};

export default function PerthEventsPage() {
    const faqs = [
        {
            question: "Do You Drop Off at PCEC?",
            answer: "Yes, we drop off at the main entrance of the Perth Convention and Exhibition Centre (PCEC), ensuring a professional arrival for your delegates."
        },
        {
            question: "Do You Service Events at Crown Perth?",
            answer: "Absolutely. We frequent the Crown Towers and Crown Metropol for gala dinners, awards nights, and corporate functions."
        },
        {
            question: "Can You Handle Airport Arrivals for Speakers?",
            answer: "Yes, we monitor flights and provide VIP meet-and-greet services at Perth Airport T1/T2 and T3/T4 for your guest speakers and executives."
        },
        {
            question: "Is Hourly Hire Available?",
            answer: "Yes, hourly hire is perfect for executives who need to move between the CBD, West Perth mining offices, and event venues seamlessly."
        }
    ];

    const vehicles = [
        {
            category: 'Classic',
            name: 'Executive Sedan',
            desc: 'Professional transport for VIPs.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Comfortable workspace on wheels.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'Efficient shuttle for teams.',
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
                title="Conference Transport Perth"
                subtitle="Executive logistics for PCEC and Crown Perth events."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Perth Business Events</h2>
                <div className={styles.textBlock}>
                    <p>
                        Perth is a hub for mining, resources, and innovation conferences. Auzzsi Chauffeur provides the professional
                        ground transport required for major events at the Perth Convention and Exhibition Centre (PCEC).
                        <br /><br />
                        From seamless airport transfers for international delegates to VIP transport for gala dinners at Crown Perth,
                        our fleet ensures punctual and stylish arrival.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calendar size={28} /></div>
                        <span className={styles.featureLabel}>PCEC<br />Events</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Corporate<br />Groups</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctual<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Executive<br />Fleet</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Event Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Event FAQs
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
                    title="Get an Event Quote"
                    subtitle={<>
                        Contact us for Perth event transport.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Event Details (Date, Venue, Pax)"
                />
            </section>

            <Footer />
        </main>
    );
}
