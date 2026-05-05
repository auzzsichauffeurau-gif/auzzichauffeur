import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Briefcase, Laptop, ShieldCheck, Clock, FileText, Globe, CheckCircle, XCircle, DollarSign, Lock, Star } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Corporate Chauffeur Service | Auzzie Chauffeur | Get Corporate Quote" },
    description: "Reliable executive transfers for business meetings, events & airport travel. Streamlined billing & priority booking. Open a corporate account.",
    alternates: {
        canonical: '/services/corporate-transfers',
    },
};

export default function CorporateServicesPage() {
    const faqs = [
        {
            question: "How much does corporate chauffeur service cost in Australia?",
            answer: "Corporate chauffeur services start from $95/hour with a 3-hour minimum. Airport transfers range from $110-$150 depending on location. We offer volume discounts and monthly billing for corporate accounts with streamlined invoicing."
        },
        {
            question: "How do I open a corporate chauffeur account?",
            answer: "Contact us via phone or email to set up your corporate account. We'll provide streamlined billing, priority booking, dedicated account management, and monthly invoicing. Account setup takes just 24 hours."
        },
        {
            question: "Do corporate chauffeurs sign NDAs?",
            answer: "Yes, all our chauffeurs understand the importance of confidentiality. We can arrange Non-Disclosure Agreements (NDAs) for sensitive corporate travel upon request at no additional charge."
        },
        {
            question: "Can you handle multiple pickups for corporate events?",
            answer: "Absolutely. We specialize in coordinating ground transport for conferences, board meetings, and corporate events using our fleet of executive sedans and people movers. We can manage complex itineraries with multiple pickups."
        },
        {
            question: "What payment options are available for corporate clients?",
            answer: "Corporate clients can choose monthly invoicing, credit card on file, or pay-per-booking. We provide detailed trip reports and consolidated billing for easy expense management and reconciliation."
        },
        {
            question: "Do you provide airport transfers for business travelers?",
            answer: "Yes, we provide executive airport transfers to and from all major Australian airports with flight tracking, priority pickup, and meet & greet service. Perfect for busy executives who value punctuality."
        },
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
            name: 'Premium Sedan',
            desc: 'Enhanced comfort for longer journeys or VIP clients.',
            passengers: 4,
            luggage: 3,
            bags: 2,
            image: '/tile-driver.png'
        },
        {
            category: 'Luxury SUVs',
            name: 'Luxury SUV',
            desc: 'Extra space and presence for executive teams.',
            passengers: 4,
            luggage: 4,
            bags: 3,
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

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Corporate Transfers", url: "/services/corporate-transfers" }
    ];

    const faqPairs = faqs.map(f => ({ question: f.question, answer: f.answer }));

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <FAQSchema pairs={faqPairs} />
            <ServiceSchema
                name="Corporate Chauffeur Services Australia"
                description="Reliable executive transfers for business meetings, events and airport travel across Australia."
                url="/services/corporate-transfers"
            />

            {/* HERO SECTION */}
            <Hero
                title="Corporate Chauffeur Services"
                subtitle="Professional, reliable, and nationwide. The preferred partner for Australian business."
                showStats={false}
            />

            {/* AI Overview - Quick service summary for search engines */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1f2937', fontWeight: '500' }}>
                        Professional <strong>corporate chauffeur service</strong> across Australia. <strong>Hourly rates from $95/hour</strong>, <strong>monthly billing</strong>, and <strong>dedicated account management</strong>. Serving Sydney, Melbourne, Brisbane, and all major cities. <strong>NDA-compliant drivers</strong>, <strong>priority booking</strong>, and <strong>24/7 availability</strong> for business travel.
                    </p>
                </div>
            </section>

            {/* Executive corporate chauffeur service business travel Australia */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Travel Redefined</h2>
                <div className={styles.textBlock}>
                    <p>
                        In the fast-paced world of business, reliability is everything. <Link href="/" className={styles.inlineLink}>Auzzie Chauffeur</Link> provides a seamless extension to your business, ensuring that you and your executives arrive prepared and stress-free for every <Link href="/services/conferences-special-events" className={styles.inlineLink}>corporate meeting</Link> or <Link href="/services/airport-transfers" className={styles.inlineLink}>airport transfer</Link>.
                        <br /><br />
                        With a presence in major capital cities like <Link href="/sydney/corporate-transfers" className={styles.inlineLink}>Sydney</Link>, <Link href="/melbourne/corporate-transfers" className={styles.inlineLink}>Melbourne</Link>, and <Link href="/brisbane/corporate-transfers" className={styles.inlineLink}>Brisbane</Link>, complete billing transparency, and a fleet of <Link href="/the-fleet" className={styles.inlineLink}>premium executive vehicles</Link>, we are the <Link href="/about-us" className={styles.inlineLink}>logistics partner</Link> of choice for leading Australian corporations.
                    </p>
                </div>
            </section>

            {/* Corporate Pricing Table */}
            <section style={{ maxWidth: '1200px', margin: '0 auto 4rem', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Corporate Chauffeur Pricing</h2>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                    Transparent hourly rates and package pricing. Volume discounts available for corporate accounts.
                </p>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#1f2937', color: 'white' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Service Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Rate</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}><strong>Hourly Chauffeur Service</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$95/hour</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>3-hour minimum</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Executive sedan included</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Airport Transfer (Sydney)</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$120</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Flight tracking</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>60-min wait time</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}><strong>Airport Transfer (Melbourne)</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$110</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Flight tracking</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>60-min wait time</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Full Day (8 hours)</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$720</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Best value for all-day needs</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Multiple stops included</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Monthly Corporate Package</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>Custom</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Volume discounts</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Monthly invoicing</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', border: '2px solid #86efac' }}>
                        <h3 style={{ color: '#166534', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={20} color="#16a34a" />
                            Corporate Benefits
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#166534' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Monthly consolidated billing
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Dedicated account manager
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Priority booking
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Volume discounts
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Detailed trip reports
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                NDA compliance available
                            </li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: '#eff6ff', padding: '1.5rem', borderRadius: '8px', border: '2px solid #93c5fd' }}>
                        <h3 style={{ color: '#1e40af', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Briefcase size={20} color="#1e40af" />
                            Perfect For
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#1e40af' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#1e40af" />
                                Executive airport transfers
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#1e40af" />
                                Board meetings & conferences
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#1e40af" />
                                Client entertainment
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#1e40af" />
                                Multi-city business travel
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#1e40af" />
                                VIP guest transport
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link href="/quote" style={{ display: 'inline-block', backgroundColor: '#c5a467', color: 'white', padding: '1rem 2.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem' }}>
                        Open Corporate Account
                    </Link>
                    <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <DollarSign size={16} color="#c5a467" />
                            Volume Discounts
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Lock size={16} color="#c5a467" />
                            NDA Compliant
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star size={16} color="#c5a467" fill="#c5a467" />
                            4.9★ Rated
                        </span>
                    </p>
                </div>
            </section>

            {/* Corporate chauffeur Sydney Melbourne Brisbane Perth Adelaide nationwide */}
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
