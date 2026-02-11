import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import { Briefcase, Laptop, ShieldCheck, Clock, FileText, Globe } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Services Australia | Executive Transfers",
    description: "Reliable corporate chauffeur services nationwide. Executive airport transfers, roadshows, and business travel solutions in all major Australian cities.",
};

export default function CorporateServicesPage() {
    const faqs = [
        {
            question: "How Do I Open A Corporate Account?",
            answer: "Opening a corporate account is simple. Contact our team via the form below or call info@auzziechauffeur.com.au. We offer streamlined billing, priority booking, and dedicated account management."
        },
        {
            question: "Do You Service All Major Airports?",
            answer: "Yes, we provide executive transfers to and from all major Australian domestic and international airports, with flight tracking to ensure we are there when you land."
        },
        {
            question: "Can You Handle Staff Logistics For Large Events?",
            answer: "Absolutely. We specialize in coordinating ground transport for conferences, board meetings, and company events using our fleet of sedans and people movers."
        },
        {
            question: "Are Your Chauffeurs Discretion Guaranteed?",
            answer: "Yes. All our chauffeurs are professionals who understand the importance of confidentiality. Non-Disclosure Agreements (NDAs) can be signed upon request."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The industry standard for business travel. Reliable, comfortable, and discreet.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'For when impression matters. Top-tier luxury from Mercedes-Benz and Audi.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Mobile meeting room. Spacious seating configuration perfect for team travel.',
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
                title="Corporate Chauffeur Services"
                subtitle="Professional, reliable, and nationwide. The preferred partner for Australian business."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Travel Redefined</h2>
                <div className={styles.textBlock}>
                    <p>
                        In the fast-paced world of business, reliability is everything. Auzzsi Chauffeur provides a seamless extension to your business, ensuring that you and your executives arrive prepared and stress-free.
                        <br /><br />
                        With a presence in major capital cities and regional hubs, complete billing transparency, and a fleet of premium vehicles, we are the logistics partner of choice for leading Australian corporations.
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
                }}>Nationwide Corporate Service</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { city: "Sydney", link: "/sydney/corporate-transfers", desc: "CBD, North Sydney & Parramatta" },
                        { city: "Melbourne", link: "/melbourne/corporate-transfers", desc: "CBD, Docklands & Southbank" },
                        { city: "Brisbane", link: "/brisbane/corporate-transfers", desc: "CBD & Fortitude Valley" },
                        { city: "Perth", link: "/perth/corporate-transfers", desc: "CBD & West Perth" },
                        { city: "Adelaide", link: "/adelaide/corporate-transfers", desc: "CBD & North Adelaide" },
                        { city: "Gold Coast", link: "/gold-coast/corporate-transfers", desc: "Surfers Paradise & Southport" },
                        { city: "Hobart", link: "/hobart/corporate-transfers", desc: "Hobart CBD & Waterfront" },
                        { city: "Cairns", link: "/cairns-port-douglas/corporate-transfers", desc: "Cairns City & Palm Cove" },
                    ].map((loc, idx) => (
                        <a href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Briefcase size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Corporate
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
                        <div className={styles.iconCircle}><Globe size={28} /></div>
                        <span className={styles.featureLabel}>Nationwide<br />Network</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><FileText size={28} /></div>
                        <span className={styles.featureLabel}>Consolidated<br />Billing</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Laptop size={28} /></div>
                        <span className={styles.featureLabel}>Mobile<br />Office</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctuality<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Privacy &<br />Discretion</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Briefcase size={28} /></div>
                        <span className={styles.featureLabel}>Priority<br />Service</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Executive Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    A consistent standard of luxury across Australia.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Corporate Account FAQs
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
                    title="Open a Corporate Account"
                    subtitle="Contact our corporate services team to discuss your business transport needs."
                    detailsLabel="Message / Account Request"
                    dateLabel="Company Name*"
                    emailLabel="Work Email*"
                    btnText="Request Information"
                />
            </section>

            <Footer />
        </main>
    );
}
