import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Anchor, ShieldCheck, Bus, Clock, MapPin, ChevronRight, CheckCircle, Star } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import FAQSchema from "@/components/FAQSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Cruise Ship Transfers | Auzzie Chauffeur | Reliable Port Pickup" },
    description: "Reliable cruise ship transfers to all major Australian ports (Sydney, Melbourne, Brisbane). Terminal meet & greet service. Book your transfer.",
};

export default function CruiseServicesPage() {
    const locations = [
        { city: "Sydney", link: "/sydney/cruise-ship-transfers", desc: "Overseas Passenger Terminal & White Bay" },
        { city: "Melbourne", link: "/melbourne/cruise-ship-transfers", desc: "Station Pier & Melbourne Ports" },
        { city: "Brisbane", link: "/brisbane/cruise-ship-transfers", desc: "Brisbane International Cruise Terminal" },
        { city: "Perth", link: "/perth/cruise-ship-transfers", desc: "Fremantle Passenger Terminal" },
        { city: "Gold Coast", link: "/gold-coast/cruise-ship-transfers", desc: "Transfers to Brisbane Terminal" },
        { city: "Adelaide", link: "/adelaide/cruise-ship-transfers", desc: "Outer Harbor Passenger Terminal" },
        { city: "Hobart", link: "/hobart/cruise-ship-transfers", desc: "Macquarie Wharf (MAC 02)" },
        { city: "Cairns", link: "/cairns-port-douglas/cruise-ship-transfers", desc: "Cairns Cruise Liner Terminal" },
    ];

    const faqs = [
        {
            question: "How much do cruise ship transfers cost in Australia?",
            answer: "Cruise ship transfers typically cost $90-$150 depending on the port and destination. Sydney transfers start from $120, Melbourne from $110, and Brisbane from $105. Prices include meet & greet at terminal and luggage assistance."
        },
        {
            question: "Do you track cruise ship arrival times?",
            answer: "Yes, we monitor all cruise ship arrivals in real-time. If your ship docks early or late, we adjust pickup times accordingly at no extra charge. Your chauffeur will be ready when you disembark."
        },
        {
            question: "Where will the driver meet me at the cruise terminal?",
            answer: "Your chauffeur will meet you at the arrivals area inside the cruise terminal holding a name sign. We'll send you their contact details and photo before your arrival for easy identification."
        },
        {
            question: "Can you handle luggage from cruise ships?",
            answer: "Absolutely. Our chauffeurs assist with all luggage from the terminal to the vehicle. We have spacious vehicles with ample luggage capacity for cruise passengers with multiple bags."
        },
        {
            question: "Do you service all major Australian cruise ports?",
            answer: "Yes, we service all major cruise ports including Sydney (Circular Quay & White Bay), Melbourne (Station Pier), Brisbane, Fremantle, Adelaide, Hobart, and Cairns. Available for both embarkation and disembarkation."
        },
        {
            question: "What happens if the cruise is delayed?",
            answer: "We track your cruise in real-time and adjust pickup accordingly. There's no extra charge for delays beyond your control. We include complimentary wait time from your actual docking time."
        }
    ];

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Cruise Ship Transfers", url: "/services/cruise-ship-transfers" }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <ServiceSchema
                name="Cruise Ship Transfers Australia"
                description="Reliable cruise ship transfers to all major Australian ports including Sydney, Melbourne, and Brisbane."
                url="/services/cruise-ship-transfers"
            />

            <Hero
                title="Cruise Ship Transfers Australia"
                subtitle="Start your voyage in luxury. Reliable port transfers in every major city."
                showStats={false}
            />

            {/* AI Overview - Quick service summary for search engines */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1f2937', fontWeight: '500' }}>
                        Reliable <strong>cruise ship transfers</strong> to all major Australian ports. <strong>Transfers from $90</strong> with <strong>real-time ship tracking</strong>, <strong>meet & greet at terminal</strong>, and <strong>luggage assistance</strong>. Servicing <strong>Sydney</strong>, <strong>Melbourne</strong>, <strong>Brisbane</strong>, <strong>Fremantle</strong>, <strong>Adelaide</strong>, <strong>Hobart</strong>, and <strong>Cairns</strong>. No extra charge for delays.
                    </p>
                </div>
            </section>

            {/* Cruise ship terminal transfers Sydney Circular Quay White Bay Melbourne Station Pier */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Nationwide Port Connections</h2>
                <div className={styles.textBlock}>
                    <p>
                        Auzzsi Chauffeur connects you to every major cruise terminal in Australia. Whether you are departing from the
                        iconic Sydney Harbour, the historic port of Fremantle, or the tropical waters of Cairns, our fleet is ready to get you there.
                        <br /><br />
                        We specialize in door-to-port transfers, ensuring you and your luggage arrive safely, comfortably, and on time for boarding.
                    </p>
                </div>

                {/* Cruise Pricing Table */}
                <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Cruise Transfer Pricing</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Fixed pricing to all major cruise terminals. Includes meet & greet and luggage assistance.
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#1f2937', color: 'white' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Route Example</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>From Price</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Vehicle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Sydney Airport &#8594; Circular Quay</strong></td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$120</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Luxury Sedan</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Sydney CBD &#8594; White Bay</strong></td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$95</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Luxury Sedan</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Melbourne Airport &#8594; Station Pier</strong></td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$110</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Luxury Sedan</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Brisbane Airport &#8594; Cruise Terminal</strong></td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$105</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Luxury Sedan</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Perth Airport &#8594; Fremantle</strong></td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$135</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Luxury Sedan</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Group Transfer (7 Pax + Luggage)</strong></td>
                                    <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>+$20-40</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Mercedes V-Class</td>
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
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Anchor size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Cruise Transfers
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
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
                        <div className={styles.iconCircle}><Bus size={28} /></div>
                        <span className={styles.featureLabel}>Large<br />Groups</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctual<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Prices</span>
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
                    title="Get a Cruise Quote"
                    subtitle={<>
                        Nationwide cruise ship transfers.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Cruise Details (Date, Port, Pax)"
                />
            </section>

            {/* FAQs Section */}
            <FAQSchema pairs={faqs} />
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Cruise Transfer FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
