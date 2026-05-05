import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Clock, MapPin, ShoppingBag, Utensils, Award, ShieldCheck, Navigation, PauseCircle, CheckCircle, Star } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Hourly Chauffeur Service | Auzzie Chauffeur | Flexible Private Driver" },
    description: "Flexible 'As Directed' hourly chauffeur hire. Book a private driver for tours, shopping trips, or business meetings nationwide. Unmetered waiting time.",
};

export default function HourlyServicesPage() {
    const faqs = [
        {
            question: "How much does hourly chauffeur service cost in Australia?",
            answer: "Hourly chauffeur service costs $95/hour with a 3-hour minimum booking. This includes professional driver, luxury vehicle, fuel, and insurance. Tolls and parking are charged separately at cost."
        },
        {
            question: "What's the minimum booking time for hourly chauffeur?",
            answer: "The minimum booking is 3 hours for city services and 4-5 hours for regional tours (e.g., wine regions). This ensures you have enough time to complete your itinerary without feeling rushed."
        },
        {
            question: "Can I change my itinerary during hourly hire?",
            answer: "Yes! That's the beauty of hourly hire. You can change plans on the fly, add stops, or extend your booking (subject to availability). Your chauffeur adapts to your needs in real-time."
        },
        {
            question: "What's included in hourly chauffeur service?",
            answer: "Hourly service includes professional chauffeur, luxury vehicle (executive sedan or SUV), fuel, insurance, and bottled water. Unlimited stops within your booked time. Tolls and parking charged separately."
        },
        {
            question: "Can I book hourly chauffeur for wine tours?",
            answer: "Absolutely! Hourly chauffeur is perfect for wine tours, allowing you to visit multiple wineries safely. Popular for Yarra Valley, Barossa Valley, Hunter Valley, and Margaret River tours."
        },
        {
            question: "How do I extend my hourly booking?",
            answer: "Simply inform your chauffeur if you'd like to extend. Subject to their availability, we charge the standard hourly rate for additional time. We recommend booking extra hours upfront for peace of mind."
        },
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

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Hourly Chauffeur", url: "/services/hourly-chauffeur" }
    ];

    const faqPairs = faqs.map(f => ({ question: f.question, answer: f.answer }));

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <FAQSchema pairs={faqPairs} />
            <ServiceSchema
                name="Hourly Chauffeur Service Australia"
                description="Flexible 'As Directed' hourly chauffeur hire with a private driver for tours, shopping trips, or business meetings nationwide."
                url="/services/hourly-chauffeur"
            />

            {/* HERO SECTION */}
            <Hero
                title="Hourly Chauffeur Service"
                subtitle="Your car, your driver, your schedule. Flexible 'As Directed' hire nationwide."
                showStats={false}
            />

            {/* AI Overview - Quick service summary for search engines */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1f2937', fontWeight: '500' }}>
                        Flexible <strong>hourly chauffeur service</strong> across Australia. <strong>$95/hour</strong> with <strong>3-hour minimum</strong>. Perfect for <strong>wine tours</strong>, <strong>shopping trips</strong>, <strong>city sightseeing</strong>, and <strong>business meetings</strong>. <strong>Unlimited stops</strong>, <strong>change plans on the fly</strong>, and <strong>extend anytime</strong>. Available 24/7 in all major cities.
                    </p>
                </div>
            </section>

            {/* Private driver hourly hire as directed chauffeur service Australia */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Complete Freedom & Flexibility</h2>
                <div className={styles.textBlock}>
                    <p>
                        Sometimes a simple A-to-B transfer isn't enough. Our <Link href="/services/hourly-chauffeur" className={styles.inlineLink}>hourly chauffeur service</Link> puts you in the driver's seat—figuratively speaking.
                        Whether you are visiting multiple properties, enjoying a <Link href="/services/luxury-tours" className={styles.inlineLink}>shopping spree</Link>, or touring a new city, our <Link href="/about-us/chauffeur-services" className={styles.inlineLink}>professional driver</Link> stays with you.
                        <br /><br />
                        Leave your bags in the <Link href="/the-fleet" className={styles.inlineLink}>luxury vehicle</Link>, change your plans on the fly, and enjoy the ultimate convenience of having a <Link href="/" className={styles.inlineLink}>private chauffeur</Link> ready whenever you are. Perfect for <Link href="/services/corporate-transfers" className={styles.inlineLink}>business meetings</Link>, <Link href="/services/luxury-tours" className={styles.inlineLink}>wine tours</Link>, or <Link href="/sydney" className={styles.inlineLink}>city sightseeing</Link>.
                    </p>
                </div>

                {/* Hourly Pricing Table */}
                <section style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Hourly Hire Rates</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Transparent pricing with no hidden fees. All hourly bookings include fuel, insurance, and professional chauffeur.
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#1f2937', color: 'white' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Vehicle Class</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Capacity</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Hourly Rate</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Min. Hire</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Executive Sedan</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>4 Pax</td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$95 / hr</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Hours</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Luxury SUV</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>4 Pax</td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$110 / hr</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Hours</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>People Mover (V-Class)</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>7 Pax</td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$120 / hr</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>4 Hours</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Premium First Class</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Pax</td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$145 / hr</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Hours</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>

            {/* Hourly chauffeur Sydney Melbourne Brisbane Adelaide Gold Coast Perth */}
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
                        <Link href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Clock size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Hourly Hire
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
                                    View Details <Navigation size={16} style={{ marginLeft: '4px' }} />
                                </div>
                            </div>
                        </Link>
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
