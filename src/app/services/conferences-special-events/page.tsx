import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Calendar, Users, Briefcase, Star, ChevronRight, MapPin } from "lucide-react";
import type { Metadata } from 'next';
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";

export const metadata: Metadata = {
    title: "Conference Transport Australia | Corporate Event Transfers",
    description: "Professional transport for major conferences & events in Sydney, Melbourne, Brisbane, Perth & more. Reliable logistics for delegates.",
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

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            <Hero
                title="Conference & Event Transport"
                subtitle="Seamless logistics for conferences, expos, and major events Australia-wide."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Event Logistics Made Simple</h2>
                <div className={styles.textBlock}>
                    <p>
                        Managing transport for a conference or special event requires precision and reliability. Auzzsi Chauffeur
                        partners with event planners and corporate teams to provide flawless execution.
                        <br /><br />
                        Whether moving hundreds of delegates to the ICC Sydney or transporting VIP speakers to a gala at Crown Perth,
                        our diverse fleet of sedans, SUVs, and people movers scales to your needs.
                    </p>
                </div>

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

            <Footer />
        </main>
    );
}
