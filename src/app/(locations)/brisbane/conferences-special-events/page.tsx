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
    title: "Conference Transport Brisbane | BCEC & Corporate Events",
    description: "Executive chauffeur services for conferences at Brisbane Convention & Exhibition Centre (BCEC). Professional transport for delegates and VIPs.",
};

export default function BrisbaneEventsPage() {
    const faqs = [
        {
            question: "Where Do You Drop Off at BCEC?",
            answer: "We drop off at the main entrance of the Brisbane Convention & Exhibition Centre on Glenelg Street or the Grey Street entrance, depending on your event's location within the complex."
        },
        {
            question: "Can You Transport Groups to Howard Smith Wharves?",
            answer: "Yes, Howard Smith Wharves is a popular event precinct. We can arrange multiple vehicles to transfer corporate groups from the CBD or hotels to the wharves for dinners and functions."
        },
        {
            question: "Do You Service Events on the Gold Coast?",
            answer: "Yes, we often transfer conference delegates from Brisbane Airport to the Gold Coast Convention Centre or hotels in Surfers Paradise."
        },
        {
            question: "Is Hourly Charters Available for Roadshows?",
            answer: "Absolutely. If you have a busy schedule of meetings across Brisbane, hiring a chauffeur by the hour ensures your car is always waiting for you."
        }
    ];

    const vehicles = [
        {
            category: 'Classic',
            name: 'Executive Sedan',
            desc: 'Stylish arrival for conference speakers and VIPs.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Comfortable workspace on wheels for small teams.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'Efficient shuttle for corporate delegates.',
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
                title="Conference Transport Brisbane"
                subtitle="Professional logistics for BCEC and Brisbane corporate events."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Brisbane Event Logistics</h2>
                <div className={styles.textBlock}>
                    <p>
                        Brisbane is a thriving hub for business events, centered around the world-class Brisbane Convention & Exhibition Centre (BCEC)
                        at South Bank. Auzzsi Chauffeur provides reliable executive transport for speakers, delegates, and corporate groups.
                        <br /><br />
                        Ensure your team arrives refreshed and on time. We also cover events at the Royal International Convention Centre, Howard Smith Wharves,
                        and major hotels across the city.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calendar size={28} /></div>
                        <span className={styles.featureLabel}>BCEC<br />Transfers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Travel</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>On<br />Time</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Corporate<br />Image</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Corporate Event Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Event Transport FAQs
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
                        Contact us for Brisbane event transport solutions.
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
