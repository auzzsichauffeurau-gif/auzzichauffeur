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
    title: "Cruise Ship Transfers Melbourne | Station Pier & Port of Melbourne",
    description: "Reliable private transfers to Melbourne's Station Pier cruise terminal. Direct door-to-ship service for a stress-free start to your holiday.",
};

export default function MelbourneCruisePage() {
    const faqs = [
        {
            question: "Where Is The Main Cruise Terminal In Melbourne?",
            answer: "The primary cruise terminal is located at Station Pier in Port Melbourne, approximately 4km from the Melbourne CBD. Some smaller vessels may dock at other berths, but Station Pier is the main hub for international liners and the Spirit of Tasmania."
        },
        {
            question: "How Early Should I Arrive For My Cruise?",
            answer: "We recommend arriving at Station Pier according to the check-in time specified on your cruise ticket. Generally, this is 12:00 PM - 3:00 PM for departures, but traffic around the pier can be heavy on ship days, so allow extra time."
        },
        {
            question: "Can You Pick Us Up When We Disembark?",
            answer: "Yes, we monitor arrival times. For Station Pier pickups, due to port security access restrictions, specific meeting points are designated outside the secure zone. Your chauffeur will coordinate via mobile phone to pick you up seamlessly as you exit."
        },
        {
            question: "Do You Offer Transfers To The Spirit Of Tasmania?",
            answer: "Yes, we provide transfers to and from the Spirit of Tasmania ferry at Station Pier. Whether you are walking on or need drop-off right at the passenger terminal, we can assist."
        },
        {
            question: "How Much Luggage Can We Bring?",
            answer: "Cruises often involve more luggage than flights. Our Executive Sedans hold 2 large bags. For cruise passengers we often recommend our Premium SUVs (3-4 bags) or Mercedes V-Class People Movers (6+ bags) to ensure plenty of room for all your suitcases."
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
                title="Cruise Ship Transfers Melbourne"
                subtitle="Start your voyage in style. Door-to-pier transfers to Station Pier and Melbourne Ports."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Bon Voyage Begins At Your Doorstep</h2>
                <div className={styles.textBlock}>
                    <p>
                        The start of a cruise should be exciting, not stressful. Navigating parking at Station Pier
                        or dragging luggage through public transport can dampen the mood. Auzzsi Chauffeur provides
                        a direct, luxurious link between your home, hotel, or Melbourne Airport and the Cruise Terminal.
                        <br /><br />
                        Our experienced chauffeurs know the Port Melbourne area well and will get you as close to the
                        check-in counters as security allows. With ample boot space in our vehicles, you can pack
                        that extra evening gown or tuxedo without worry.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Station Pier & Spirit of Tasmania</h3>
                    <p>
                        We service all arrivals and departures at Station Pier, including international cruise liners
                        and the daily Spirit of Tasmania ferry service. We monitor dock schedules to ensure we are
                        there when your ship comes in, ready to whisk you away to your next destination.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>Pier<br />Drop-off</span>
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
                        Cruise Transfer FAQs
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
                    detailsLabel="Cruise Details (Ship Name, Pier, Time)"
                />
            </section>

            <Footer />
        </main>
    );
}
