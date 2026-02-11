import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Clock, Map, Coffee, Camera, Sun, Wine } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Perth | Private Tours & Charter",
    description: "Hire a private chauffeur in Perth by the hour. Explore Swan Valley wineries, Fremantle, Margaret River, or The Pinnacles at your own pace.",
};

export default function PerthHourlyPage() {
    const faqs = [
        {
            question: "Can We Do a Swan Valley Wine Tour?",
            answer: "Yes, this is our most popular hourly service. Your chauffeur can drive you between cellar doors, breweries, and chocolate factories while you enjoy the tastings."
        },
        {
            question: "Do You Drive to Margaret River?",
            answer: "Yes, we can arrange day trips to Margaret River (approx 3 hours each way). We recommend a full day booking (10-12 hours) for this experience."
        },
        {
            question: "Can We Visit The Pinnacles?",
            answer: "Certainly. A day trip to Nambung National Park to see the Pinnacles Desert is a fantastic way to see WA's unique landscapes."
        },
        {
            question: "What Is the Minimum Hire Time?",
            answer: "Our standard minimum hire is typically 2-3 hours depending on the vehicle type and day of the week."
        }
    ];

    const vehicles = [
        {
            category: 'Luxury Sedan',
            name: 'European Sedan',
            desc: 'Perfect for couples touring the wineries.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Comfortable touring with elevated views.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'Social seating for groups of friends.',
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
                title="Hourly Chauffeur Perth"
                subtitle="Explore Western Australia on your own schedule."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Discover the West</h2>
                <div className={styles.textBlock}>
                    <p>
                        Western Australia offers some of the country's most spectacular drives. With Auzzsi Chauffeur's hourly service,
                        you have the freedom to explore Perth and its surrounds without watching the meter.
                        <br /><br />
                        Design your own itinerary: spend the morning at Cottesloe Beach, lunch in Fremantle, and the afternoon tasting
                        premium wines in the Swan Valley. Your chauffeur is at your disposal.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Flexible<br />Booking</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Wine size={28} /></div>
                        <span className={styles.featureLabel}>Winery<br />Tours</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Map size={28} /></div>
                        <span className={styles.featureLabel}>Custom<br />Itinerary</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Scenic<br />Stops</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Touring Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Hourly Charter FAQs
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
                    title="Get a Tour Quote"
                    subtitle={<>
                        Plan your private Perth tour today.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Tour Details (Date, Duration, Stops)"
                />
            </section>

            <Footer />
        </main>
    );
}
