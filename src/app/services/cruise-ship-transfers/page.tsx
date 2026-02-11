import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css"; // Reuse styling
import Link from "next/link";
import { Anchor, ShieldCheck, Bus, Clock, MapPin, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Australia | Sydney, Melbourne, Brisbane & Perth",
    description: "Reliable cruise ship transfers to all major verified Australian ports. Private chauffeur service for seamless connections to your voyage.",
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

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            <Hero
                title="Cruise Ship Transfers Australia"
                subtitle="Start your voyage in luxury. Reliable port transfers in every major city."
                showStats={false}
            />

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

            <Footer />
        </main>
    );
}
