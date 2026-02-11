import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import { Clock, Briefcase, Map, Coffee, ShoppingBag, ShieldCheck } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Day Chauffeur Hire | Daily Car Service Australia",
    description: "Hire a chauffeur for the entire day. Flexible, hourly, and daily rates for business meetings, sightseeing, or special occasions across Australia.",
};

export default function AllDayHirePage() {
    const faqs = [
        {
            question: "What is included in All Day Hire?",
            answer: "All Day Hire provides you with a dedicated vehicle and chauffeur for a set number of hours (typically 8+ hours). It includes unlimited stops within the metropolitan area, fuel, and waiting time."
        },
        {
            question: "Is there a limit on kilometers?",
            answer: "Standard daily hire packages include a generous kilometer allowance (usually 200-300km) sufficient for city travel. Excess kilometers may attract a small surcharge."
        },
        {
            question: "Can I leave personal items in the car?",
            answer: "Yes, the vehicle is yours for the day. You can safely leave luggage, shopping bags, or business materials in the car while you attend meetings or events."
        },
        {
            question: "Do you offer multi-day hire?",
            answer: "Yes, we can arrange multi-day hire for extended roadshows or touring itineraries. We can also organize accommodation for the driver if traveling regionally."
        }
    ];

    const vehicles = [
        {
            category: 'Luxury Sedan',
            name: 'European Sedan',
            desc: 'Perfect for solo executives moving between meetings.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Spacious comfort for small groups or touring days.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'Mobile office or touring van for up to 7 passengers.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            <Hero
                title="All Day Chauffeur Hire"
                subtitle="Your car. Your driver. Your schedule. Absolute freedom for the entire day."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Total Flexibility</h2>
                <div className={styles.textBlock}>
                    <p>
                        Sometimes a simple A-to-B transfer isn't enough. When your schedule is packed with back-to-back meetings,
                        site inspections, or a full day of shopping and sightseeing, our All Day Hire service offers the ultimate convenience.
                        <br /><br />
                        Forget about booking multiple rides or waiting for pickups. Your professional chauffeur waits for you, ensuring
                        you can move instantly from one location to the next. It's the most efficient way to navigate a busy day.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Unlimited<br />Waiting</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Briefcase size={28} /></div>
                        <span className={styles.featureLabel}>Business<br />Roadshows</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Secure<br />Storage</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShoppingBag size={28} /></div>
                        <span className={styles.featureLabel}>Shopping<br />Trips</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Map size={28} /></div>
                        <span className={styles.featureLabel}>Custom<br />Route</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Coffee size={28} /></div>
                        <span className={styles.featureLabel}>Stress<br />Free</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Daily Hire Rates Available On</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        All Day Hire FAQs
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
                    title="Get a Daily Rate"
                    subtitle="Contact us for a fixed price all-day hire package."
                    detailsLabel="Hire Details (Date, Hours, Locations)"
                />
            </section>

            <Footer />
        </main>
    );
}
