import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Users, Calendar, MapPin, Clock, Award, Briefcase, CheckCircle, Car } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Conference Transport Gold Coast | GCCEC & Star Casino | Auzzie Chauffeur" },
    description: "Event transfers for Gold Coast Convention Centre (GCCEC) and The Star. Chauffeur services for conferences, Logies, and Magic Millions.",
};

export default function GoldCoastEventsPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Gold Coast" service="Conferences & Special Events" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Gold Coast Event Transport"
                    subtitle="Seamless transfers for conferences at GCCEC, events at The Star, and major festivals."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#eff6ff', padding: '3rem 1rem', borderBottom: '3px solid #3b82f6' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '50%', color: '#3b82f6', flexShrink: 0 }}>
                        <Calendar size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>
                            Cost for Gold Coast event transfers?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            Located in the heart of Broadbeach, the Convention Centre is a hub for major events. Our <strong>7-seater Mercedes vans</strong> are perfect for team movements, starting from <strong>$95 per hour</strong>. Transfers from <strong>Gold Coast Airport (OOL) to Broadbeach</strong> start from <strong>$90</strong> for sedans.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *We also service transfers from Brisbane Airport (BNE) to the Gold Coast.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>The Event Destination</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Broadbeach Access", desc: "Our drivers know the quickest routes into the busy Broadbeach precinct.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Magic Millions", desc: "Expert handling of high-volume traffic during race days and sales.", icon: <Award size={28} color="#3b82f6" /> },
                            { title: "Brisbane Connections", desc: "Seamless transfers for delegates arriving via Brisbane International Airport.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Casino Transfers", desc: "VIP drop-off at The Star Gold Coast for gala dinners and awards nights.", icon: <Briefcase size={28} color="#3b82f6" /> },
                            { title: "On-Time Guarantee", desc: "We track traffic and flight conditions to ensure punctual service.", icon: <Clock size={28} color="#3b82f6" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e0f2fe', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e3a8a' }}>{item.title}</h3>
                                    <p style={{ color: '#475569', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Routes Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>GC Event Routes</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route / Venue</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Capacity</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Gold Coast Airport -> GCCEC", veh: "Mercedes V-Class", cap: "7 Pax", price: "$110 - $130" },
                                    { route: "Brisbane Airport -> Broadbeach", veh: "Executive Sedan", cap: "4 Pax", price: "$220 - $250" },
                                    { route: "Surfers Paradise -> The Star", veh: "Luxury Sedan", cap: "4 Pax", price: "$50 - $70" },
                                    { route: "Hourly Hire (Delegate Shuttle)", veh: "People Mover", cap: "7 Pax", price: "$95 / hour" },
                                    { route: "Theme Park Corporate Day", veh: "Van / SUV", cap: "Varies", price: "Enquire" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.cap}</td>
                                        <td style={{ padding: '1.25rem', color: '#3b82f6', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Venue Info */}
                <div style={{ marginBottom: '5rem', background: '#f0f9ff', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Key GC Venues</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>GCCEC</h3>
                            <p style={{ color: '#475569' }}>Located on the Gold Coast Highway in Broadbeach. Easy access via the main porte-cochère.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>The Star</h3>
                            <p style={{ color: '#475569' }}>Connected to the Convention Centre via a footbridge. The main hotel entrance is best for drop-offs.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Event FAQs</h2>
                    <LocationFAQ city="Gold Coast" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Now:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Browse our <Link href="/the-fleet" className={styles.inlineLink}>transport fleet</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>service quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
