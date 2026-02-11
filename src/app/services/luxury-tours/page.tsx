import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import { Camera, Map, Sun, Wine, Navigation, Users } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Private Tours Australia | Sightseeing & Winery Tours",
    description: "Private luxury tours of Australia's best destinations. Blue Mountains, Yarra Valley, Hunter Valley, and more. Custom itineraries for discerning travelers.",
};

export default function LuxuryToursPage() {
    const faqs = [
        {
            question: "Can we customize our tour itinerary?",
            answer: "Absolutely. Start at 10am instead of 8am? Stay longer at a winery you love? It's your tour. Our chauffeurs are flexible and will tailor the day to your preferences."
        },
        {
            question: "Do you offer winery tours?",
            answer: "Yes, we specialize in private wine tours to regions like the Hunter Valley (NSW), Yarra Valley (VIC), Barossa Valley (SA), and Margaret River (WA). We can recommend cellar doors or drive to your chosen list."
        },
        {
            question: "Are entry fees and meals included?",
            answer: "Our pricing typically covers the vehicle and chauffeur service. Tasting fees, entry tickets, and meals are payable by you directly, giving you the freedom to choose where and what you eat."
        },
        {
            question: "Can you accommodate large groups?",
            answer: "Yes, we can arrange multiple vehicles or luxury coaches for larger groups. Our Mercedes V-Class is perfect for smaller groups of up to 7 people."
        }
    ];

    const vehicles = [
        {
            category: 'Touring Sedan',
            name: 'European Sedan',
            desc: 'Comfortable touring for couples.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Touring SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Elevated views and superior comfort for long drives.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'Group Tourer',
            name: 'Mercedes V-Class',
            desc: 'Social seating and panoramic windows for groups.',
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
                title="Luxury Private Tours"
                subtitle="Experience Australia's iconic landscapes in private comfort."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Discover Australia Your Way</h2>
                <div className={styles.textBlock}>
                    <p>
                        Forget crowded buses and rigid schedules. Explore Australia's breathtaking scenery at your own pace with a private chauffeur tour.
                        <br /><br />
                        From the rugged Blue Mountains to the vineyards of the Barossa, our experienced drivers act as your knowledgeable local guides.
                        Stop for photos whenever you want, linger over a long lunch, and enjoy the journey as much as the destination.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Scenic<br />Drives</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Wine size={28} /></div>
                        <span className={styles.featureLabel}>Winery<br />Estates</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Map size={28} /></div>
                        <span className={styles.featureLabel}>Local<br />Knowledge</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Sun size={28} /></div>
                        <span className={styles.featureLabel}>Coastal<br />Routes</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Navigation size={28} /></div>
                        <span className={styles.featureLabel}>Flexible<br />Stops</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Private<br />Groups</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Touring In Style</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Touring FAQs
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
                    title="Design Your Tour"
                    subtitle="Tell us where you want to go, and we'll handle the driving."
                    detailsLabel="Tour Ideas (Destination, Date, Pax)"
                />
            </section>

            <Footer />
        </main>
    );
}
