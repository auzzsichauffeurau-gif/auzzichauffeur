import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Anchor, Calendar, ShieldCheck, Clock, Award, Users, MapPin, Bus } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Sydney | Circular Quay & White Bay",
    description: "Reliable private transfers to Sydney's Overseas Passenger Terminal and White Bay Cruise Terminal. Ensure a smooth start to your voyage in luxury.",
};

export default function SydneyCruisePage() {
    const faqs = [
        {
            question: "Which Sydney Cruise Terminals Do You Serve?",
            answer: "We serve both major terminals: the Overseas Passenger Terminal (OPT) at Circular Quay and the White Bay Cruise Terminal in Rozelle. We can also arrange transfers for smaller vessels at other harbour wharves."
        },
        {
            question: "How Do Pickups Work at Circular Quay vs White Bay?",
            answer: "At the Overseas Passenger Terminal (Circular Quay), there is a designated pickup area just a short walk from the ship. At White Bay, private vehicles have a specific pickup zone. Your chauffeur will coordinate via text to meet you promptly upon disembarkation."
        },
        {
            question: "How Much Luggage Can We Bring?",
            answer: "For cruise transfers, we know luggage is often heavy. Our Executive Sedans hold 2 large bags. For couples with extra bags or groups, we recommend our Luxury SUVs (Audi Q7) or Mercedes V-Class People Movers to comfortably fit all suitcases."
        },
        {
            question: "Can You Transfer Us from Sydney Airport to the Ship?",
            answer: "Absolutely. We offer direct transfers from Sydney Airport (SYD) domestic or international terminals straight to your cruise ship. We track your flight to ensure we are there when you land."
        },
        {
            question: "What If My Ship Is Delayed?",
            answer: "We monitor ship arrival schedules where possible. If your ship is delayed, we adjust our pickup time accordingly so your chauffeur is ready when you disembark."
        }
    ];

    const vehicles = [
        {
            category: 'Classic',
            name: 'Executive Sedan',
            desc: 'Comfortable transfer for couples with standard luggage.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Extra space for cruise luggage without compromising on luxury.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'The ideal choice for families or groups with multiple large suitcases.',
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
                title="Cruise Ship Transfers Sydney"
                subtitle="Start your voyage seamlessly. Transfers to Overseas Passenger Terminal & White Bay."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Set Sail from Sydney in Style</h2>
                <div className={styles.textBlock}>
                    <p>
                        Sydney Harbour is one of the most beautiful cruise destinations in the world. Whether you are departing
                        from the iconic Overseas Passenger Terminal with views of the Opera House, or the White Bay Cruise Terminal,
                        start your holiday with a stress-free private chauffeur transfer.
                        <br /><br />
                        Avoid the taxi queues and the hassle of lugging bags on trains. Auzzsi Chauffeur collects you from your
                        home, hotel, or Sydney Airport and drops you right at the terminal entrance.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Serving All Sydney Terminals</h3>
                    <p>
                        Our chauffeurs are experienced with the logistics of both major Sydney terminals. We know the best drop-off
                        points and will assist with your luggage, ensuring a smooth transition from car to check-in.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>Terminal<br />Drop-off</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Bus size={28} /></div>
                        <span className={styles.featureLabel}>Ample<br />Luggage</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Secure<br />Travel</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Timely<br />Arrival</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Professional<br />Drivers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Transfers</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Cruise Transfer Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Select the perfect vehicle for your party size and luggage requirements.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Sydney Cruise FAQs
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
                    title="Get A Cruise Transfer Quote"
                    subtitle={<>
                        Tell us your ship name and travel dates for a custom quote.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Cruise Details (Ship Name, Terminal, Time)"
                />
            </section>

            <Footer />
        </main>
    );
}
