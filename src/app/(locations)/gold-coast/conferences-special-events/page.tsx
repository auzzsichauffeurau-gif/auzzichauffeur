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
    title: "Conference Transport Gold Coast | GCCEC & The Star",
    description: "Professional chauffeur services for conferences at GCCEC and events at The Star Gold Coast. Reliable transport for delegates and VIPs.",
};

export default function GoldCoastEventsPage() {
    const faqs = [
        {
            question: "Where Do You Drop Off at GCCEC?",
            answer: "We drop off at the main entrance of the Gold Coast Convention & Exhibition Centre in Broadbeach, ensuring you walk straight into your event."
        },
        {
            question: "Do You Service The Star Gold Coast?",
            answer: "Yes, we frequently transport guests to The Star for awards nights, gala dinners, and casino events."
        },
        {
            question: "Can You Arrange Airport Transfers for Large Groups?",
            answer: "Absolutely. If you have a large team arriving at Gold Coast Airport (OOL) or Brisbane Airport (BNE) for a conference, we can coordinate multiple shuttles."
        },
        {
            question: "Is Hourly Chauffeur Hire Available?",
            answer: "Yes, hourly hire is perfect for executives who need to move between their hotel, the convention centre, and dinner venues seamlessly."
        }
    ];

    const vehicles = [
        {
            category: 'Classic',
            name: 'Executive Sedan',
            desc: 'Stylish arrival for VIPs.',
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
                title="Conference Transport Gold Coast"
                subtitle="Executive logistics for GCCEC and The Star events."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Events in the Sunshine</h2>
                <div className={styles.textBlock}>
                    <p>
                        The Gold Coast is Australia's playground for business events. Whether you are attending a major conference
                        at the Gold Coast Convention & Exhibition Centre (GCCEC) or a gala at The Star, arrive in style with Auzzsi Chauffeur.
                        <br /><br />
                        We specialize in corporate logistics, offering seamless transfers from Gold Coast Airport or Brisbane Airport
                        straight to your event venue or hotel.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calendar size={28} /></div>
                        <span className={styles.featureLabel}>GCCEC<br />Specialists</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Logistics</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctual<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>VIP<br />Service</span>
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
                        Contact us for Gold Coast event transport.
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
