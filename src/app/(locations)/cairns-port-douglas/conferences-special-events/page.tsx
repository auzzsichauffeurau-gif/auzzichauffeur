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
    title: "Conference Transport Cairns | Convention Centre & Events",
    description: "Professional chauffeur service for events at Cairns Convention Centre. Executive transport for delegates in Tropical North Queensland.",
};

export default function CairnsEventsPage() {
    const faqs = [
        {
            question: "Do You Service the Cairns Convention Centre?",
            answer: "Yes, we are experienced in dropping off and picking up delegates from the main entrance of the Cairns Convention Centre on Sheridan Street."
        },
        {
            question: "Can You Arrange Coaches for Large Groups?",
            answer: "For very large groups, we can coordinate with our partners to provide luxury coaches, while managing the VIP transfers in our sedans and People Movers."
        },
        {
            question: "Do You Offer Dinners in the Rainforest?",
            answer: "Yes, 'off-site' dinners like Flames of the Forest are popular. We provide reliable return transfers so your delegates can enjoy the evening safely."
        },
        {
            question: "Is the Vehicle Air Conditioned?",
            answer: "All our vehicles feature powerful climate control to ensure you stay cool and comfortable in the tropical humidity."
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
                title="Conference Transport Cairns"
                subtitle="Executive logistics for events in Tropical North Queensland."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business in the Tropics</h2>
                <div className={styles.textBlock}>
                    <p>
                        Cairns offers a spectacular backdrop for conferences, with the award-winning Cairns Convention Centre
                        leading the way. Auzzsi Chauffeur ensures your event logistics match the professional standard you expect.
                        <br /><br />
                        We handle airport arrivals, hotel transfers, and movements to off-site dinner venues like the Rainforestation
                        Nature Park or waterfront restaurants.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calendar size={28} /></div>
                        <span className={styles.featureLabel}>Event<br />Experts</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Travel</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Always<br />On Time</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Premium<br />Fleet</span>
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
                        Contact us for Cairns event transport.
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
