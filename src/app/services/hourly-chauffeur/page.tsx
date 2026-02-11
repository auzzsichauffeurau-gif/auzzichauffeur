import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import { Clock, MapPin, ShoppingBag, Utensils, Award, ShieldCheck, Navigation, PauseCircle } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Australia | Private Car & Driver Hire",
    description: "Flexible 'As Directed' hourly chauffeur hire. Book a private driver for tours, shopping trips, or business meetings across Australia.",
};

export default function HourlyServicesPage() {
    const faqs = [
        {
            question: "What Can I Use Hourly Hiring For?",
            answer: "Anything you like! Common uses include winery tours, city sightseeing, shopping trips, attending multiple business meetings, or having a driver on standby for dinner reservations."
        },
        {
            question: "Is There A Minimum Hire Duration?",
            answer: "Yes, our minimum hire period is typically 2 hours for city transfers and 4-5 hours for regional tours (e.g., wine regions), though this can vary slightly by city."
        },
        {
            question: "Can I Control The Itinerary?",
            answer: "Absolutely. This is a fully flexible 'As Directed' service. You tell the driver where to go, when to stop, and how long to wait. You are in complete control of your schedule."
        },
        {
            question: "Are Multiple Stops Included?",
            answer: "Yes, unlimited stops are included within your booked timeframe. Your chauffeur waits for you at every location."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Ideal for city errands and business meetings. Efficient and comfortable.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'Luxury SUV',
            desc: 'Perfect for touring and small groups. Elevated view and extra comfort for longer journeys.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-suv.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'The best choice for group tours and families. Social seating layout.',
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
                title="Hourly Chauffeur Service"
                subtitle="Your car, your driver, your schedule. Flexible 'As Directed' hire nationwide."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Complete Freedom & Flexibility</h2>
                <div className={styles.textBlock}>
                    <p>
                        Sometimes a simple A-to-B transfer isn't enough. Our hourly chauffeur service puts you in the driver's seat—figuratively speaking.
                        Whether you are visiting multiple properties, enjoying a shopping spree, or touring a new city, our driver stays with you.
                        <br /><br />
                        Leave your bags in the car, change your plans on the fly, and enjoy the ultimate convenience of having a private luxury vehicle ready whenever you are.
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
                }}>Nationwide Hourly Service</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { city: "Sydney", link: "/sydney/hourly-chauffeur", desc: "Private tours & city standby" },
                        { city: "Melbourne", link: "/melbourne/hourly-chauffeur", desc: "For meetings, dinners & events" },
                        { city: "Brisbane", link: "/brisbane/hourly-chauffeur", desc: "City tours & flexible hire" },
                        { city: "Perth", link: "/perth/hourly-chauffeur", desc: "Hourly hire for all occasions" },
                        { city: "Adelaide", link: "/adelaide/hourly-chauffeur", desc: "Barossa tours & city hire" },
                        { city: "Gold Coast", link: "/gold-coast/hourly-chauffeur", desc: "Beach & Hinterland tours" },
                        { city: "Hobart", link: "/hobart/hourly-chauffeur", desc: "Flexible day trips & tours" },
                        { city: "Cairns", link: "/cairns-port-douglas/hourly-chauffeur", desc: "Sightseeing & local hire" },
                    ].map((loc, idx) => (
                        <a href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Clock size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Hourly Hire
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
                        <div className={styles.iconCircle}><Navigation size={28} /></div>
                        <span className={styles.featureLabel}>As Directed<br />Routing</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><PauseCircle size={28} /></div>
                        <span className={styles.featureLabel}>Waiting<br />Time Included</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShoppingBag size={28} /></div>
                        <span className={styles.featureLabel}>Secure<br />Storage</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Utensils size={28} /></div>
                        <span className={styles.featureLabel}>Dinner<br />Wait & Return</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Local<br />Knowledge</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Hourly Rate</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Touring Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Comfortable vehicles for any duration.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Hourly Hire FAQs
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
                    title="Get an Hourly Quote"
                    subtitle="Contact us to plan your day or private tour."
                    detailsLabel="Itinerary Details (Duration, Locations)"
                    dateLabel="Duration Needed"
                />
            </section>

            <Footer />
        </main>
    );
}
