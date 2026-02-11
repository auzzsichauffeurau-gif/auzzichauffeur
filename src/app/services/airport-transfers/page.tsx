import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import { Plane, Calculator, ShieldCheck, Clock, Award, Wifi, Users, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airport Transfers Australia | Luxury Chauffeur Drivers",
    description: "Premium airport transfers to all major Australian airports (SYD, MEL, BNE, ADL, OOL, CNS, HBA). Flight tracking, meet & greet, and fixed price transfers.",
};

export default function AirportServicesPage() {
    const faqs = [
        {
            question: "Do You Track Flights?",
            answer: "Yes, we monitor all arrival times using flight tracking software. If your flight is delayed or early, we adjust the pickup time accordingly, so your chauffeur is always there when you land."
        },
        {
            question: "Where Will My Chauffeur Meet Me?",
            answer: "For airport arrivals, your chauffeur will meet you inside the terminal (Arrivals Hall) holding a sign with your name or company logo. They will assist with your luggage to the vehicle."
        },
        {
            question: "What Happens If My Flight Is Cancelled?",
            answer: "Please contact us as soon as you know. We can reschedule your booking to your new flight details or provide a credit/refund in accordance with our cancellation policy."
        },
        {
            question: "Is The Price Fixed?",
            answer: "Yes. Our quoted prices are fixed and include tolls, taxes, and airport parking fees. There are no hidden surge charges or meters."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The perfect choice for solo business travellers. Quiet, comfortable, and efficient.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'Luxury SUV',
            desc: 'Extra luggage space and comfort. Ideal for families or long-haul travellers.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-suv.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Spacious group transport with ample room for large suitcases and golf bags.',
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
                title="Luxury Airport Transfers"
                subtitle="Start and end your journey in comfort. Reliable transfers to every major Australian airport."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Seamless Door-to-Door Service</h2>
                <div className={styles.textBlock}>
                    <p>
                        Navigating busy airports can be stressful. Auzzsi Chauffeur removes the hassle with our premium meet-and-greet service.
                        We cover all major international and domestic terminals including Sydney (SYD), Melbourne (MEL), Brisbane (BNE), Adelaide (ADL), Gold Coast (OOL), Cairns (CNS), and Hobart (HBA).
                        <br /><br />
                        Relax knowing that we are tracking your flight and that a professional driver will be waiting for you at the gate, ready to assist with your luggage.
                    </p>
                </div>
            </section>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem 4rem 2rem'
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: '#111'
                }}>Nationwide Airport Service</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { city: "Sydney", link: "/sydney/airport-transfers", desc: "Kingsford Smith (SYD)" },
                        { city: "Melbourne", link: "/melbourne/airport-transfers", desc: "Tullamarine (MEL)" },
                        { city: "Brisbane", link: "/brisbane/airport-transfers", desc: "Brisbane Airport (BNE)" },
                        { city: "Perth", link: "/perth/airport-transfers", desc: "Perth Airport (PER)" },
                        { city: "Adelaide", link: "/adelaide/airport-transfers", desc: "Adelaide Airport (ADL)" },
                        { city: "Gold Coast", link: "/gold-coast/airport-transfers", desc: "Coolangatta (OOL)" },
                        { city: "Hobart", link: "/hobart/airport-transfers", desc: "Hobart Airport (HBA)" },
                        { city: "Cairns", link: "/cairns-port-douglas/airport-transfers", desc: "Cairns Airport (CNS)" },
                    ].map((loc, idx) => (
                        <a href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Plane size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Transfers
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
                                    View Details <svg width="16" height="16" style={{ marginLeft: '4px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Flight<br />Tracking</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Meet &<br />Greet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>60 Mins<br />Wait Time</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calculator size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Prices</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Safe<br />Travels</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Wifi size={28} /></div>
                        <span className={styles.featureLabel}>Onboard<br />Wi-Fi</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Airport Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Spacious vehicles with plenty of luggage capacity.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Transfer FAQs
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
                    title="Get a Transfer Price"
                    subtitle="Contact us for a fixed price quote to or from the airport."
                    detailsLabel="Details (Flight Numbers, Luggage)"
                    showDestination={true}
                />
            </section>

            <Footer />
        </main>
    );
}
