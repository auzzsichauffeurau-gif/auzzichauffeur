import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Calendar, Users, Briefcase, Star, ChevronRight, MapPin, CheckCircle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import FAQSchema from "@/components/FAQSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Conference & Event Transport | Auzzie Chauffeur | Group Logistics Quote" },
    description: "Professional transport for major conferences & events in Sydney, Melbourne, Brisbane & Perth. Reliable logistics for delegate transfers.",
};

export default function ConferenceServicesPage() {
    const locations = [
        { city: "Sydney", link: "/sydney/conferences-special-events", desc: "ICC Sydney & Corporate Events" },
        { city: "Melbourne", link: "/melbourne/conferences-special-events", desc: "MCEC & Major Festivals" },
        { city: "Brisbane", link: "/brisbane/conferences-special-events", desc: "BCEC & River Stage" },
        { city: "Perth", link: "/perth/conferences-special-events", desc: "PCEC, Crown & Optus Stadium" },
        { city: "Gold Coast", link: "/gold-coast/conferences-special-events", desc: "GCCEC & The Star" },
        { city: "Adelaide", link: "/adelaide/conferences-special-events", desc: "Adelaide Convention Centre" },
        { city: "Hobart", link: "/hobart/conferences-special-events", desc: "Grand Chancellor & Federation Hall" },
        { city: "Cairns", link: "/cairns-port-douglas/conferences-special-events", desc: "Cairns Convention Centre" },
    ];

    const faqs = [
        {
            question: "How much does conference transport cost?",
            answer: "Conference transport pricing varies based on group size and duration. Hourly rates start from $95/hour for executive sedans. For large conferences, we offer custom packages with volume discounts and dedicated account management."
        },
        {
            question: "Can you handle transport for large conferences?",
            answer: "Yes, we specialize in large-scale event logistics. We can coordinate multiple vehicles, manage complex schedules, and provide dedicated event coordinators for conferences with 50+ delegates."
        },
        {
            question: "Do you provide airport transfers for conference delegates?",
            answer: "Absolutely. We offer group airport transfers for conference delegates with meet & greet service, luggage assistance, and direct transport to conference venues or hotels."
        },
        {
            question: "What types of events do you service?",
            answer: "We service corporate conferences, trade shows, gala dinners, award ceremonies, product launches, team building events, and VIP hospitality. Available for events of all sizes across Australia."
        },
        {
            question: "Can you provide on-site event coordination?",
            answer: "Yes, for large events we can provide dedicated coordinators who manage vehicle schedules, communicate with your event team, and ensure seamless transport logistics throughout your event."
        },
        {
            question: "Do you offer multi-day event packages?",
            answer: "Absolutely. We offer multi-day packages for conferences and events with preferential rates, guaranteed vehicle availability, and consolidated billing for easy expense management."
        }
    ];

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Conferences & Events", url: "/services/conferences-special-events" }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <ServiceSchema
                name="Conference & Event Transport"
                description="Professional transport and logistics for major conferences and events across Australia."
                url="/services/conferences-special-events"
            />

            <Hero
                title="Conference & Event Transport"
                subtitle="Seamless logistics for conferences, expos, and major events Australia-wide."
                showStats={false}
            />

            {/* AI Overview - Quick service summary for search engines */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1f2937', fontWeight: '500' }}>
                        Professional <strong>conference and event transport</strong> across Australia. <strong>From $95/hour</strong> with <strong>dedicated event coordinators</strong>, <strong>multi-vehicle coordination</strong>, and <strong>volume discounts</strong>. Perfect for <strong>corporate conferences</strong>, <strong>trade shows</strong>, <strong>gala dinners</strong>, and <strong>VIP hospitality</strong>. Multi-day packages available.
                    </p>
                </div>
            </section>

            {/* Conference event chauffeur service ICC Sydney Melbourne Convention Centre corporate */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Event Logistics Made Simple</h2>
                <div className={styles.textBlock}>
                    <p>
                        Managing transport for a conference or special event requires precision and reliability. Auzzie Chauffeur
                        partners with event planners and corporate teams to provide flawless execution.
                        <br /><br />
                        Whether moving hundreds of delegates to the ICC Sydney or transporting VIP speakers to a gala at Crown Perth,
                        our diverse fleet of sedans, SUVs, and people movers scales to your needs.
                    </p>
                </div>

                {/* Event Pricing Table */}
                <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Event Transport Rates</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Flexible hourly hire and day rates for corporate events. Volume discounts available for multi-vehicle bookings.
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#1f2937', color: 'white' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Service Type</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Vehicle</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Capacity</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Rate (From)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Delegate Shuttle (Hourly)</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Mercedes V-Class</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>7 Pax</td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$110 / hr</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                    <td style={{ padding: '1rem' }}><strong>VIP Speaker Transfer</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Luxury Sedan</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>4 Pax</td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$95 / hr</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Full Day Disposal (8 hrs)</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Exec Sedan or Van</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Varies</td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$800+</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Large Group Move</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Multiple Vans/Sprinters</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>14-50+ Pax</td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>Custom Quote</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {locations.map((loc, idx) => (
                        <Link href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#1e3a8a' }}><Calendar size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Events
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#c5a467', fontWeight: 'bold' }}>
                                    View Details <ChevronRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '3rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Logistics</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Briefcase size={28} /></div>
                        <span className={styles.featureLabel}>Corporate<br />Accounts</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Star size={28} /></div>
                        <span className={styles.featureLabel}>VIP<br />Treatment</span>
                    </div>
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
                    title="Get an Event Quote"
                    subtitle={<>
                        Australia-wide event transport management.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Event Details (Date, City, Pax)"
                />
            </section>

            {/* FAQs Section */}
            <FAQSchema pairs={faqs} />
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Conference & Event FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
