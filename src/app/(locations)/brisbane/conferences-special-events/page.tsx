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
    title: { absolute: "Conference Transfers Brisbane | BCEC & Queen's Wharf Events | Auzzie Chauffeur" },
    description: "Group transport for Brisbane Convention Centre (BCEC) and Queen's Wharf. Reliable event chauffeurs for corporate roadshows and exhibitions.",
};

export default function BrisbaneEventsPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Brisbane" service="Conferences & Special Events" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Brisbane Conference Transfers"
                    subtitle="Reliable transport for the Brisbane Convention & Exhibition Centre (BCEC) and major corporate events."
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
                            How much for event transport in Brisbane?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            <strong>Event transfer rates in Brisbane</strong> are highly competitive. Our <strong>luxury people movers (7 pax)</strong> are available from <strong>$105 per hour</strong> for shuttle services. Transfers from <strong>Brisbane Airport to BCEC</strong> start from approximately <strong>$110</strong> for a sedan or <strong>$135</strong> for a van.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Queen's Wharf and South Bank access included.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Brisbane Event Logistics</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "South Bank Specialists", desc: "Intimate knowledge of the South Bank precinct, aiding quick drop-offs at BCEC.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Airport Coordination", desc: "We track all incoming flights for your delegates to ensure no one is left waiting.", icon: <Clock size={28} color="#3b82f6" /> },
                            { title: "VIP Fleet", desc: "Immaculate executive sedans for keynote speakers and C-suite executives.", icon: <Award size={28} color="#3b82f6" /> },
                            { title: "Team Shuttles", desc: "Efficient movement of staff between CBD hotels and event venues.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "On-Demand", desc: "Flexible booking options for last-minute changes during your event.", icon: <Briefcase size={28} color="#3b82f6" /> }
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

                {/* Popular Venues Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Event Routes</h2>
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
                                    { route: "Brisbane Airport -> BCEC", veh: "Mercedes V-Class", cap: "7 Pax", price: "$135 - $155" },
                                    { route: "CBD Hotel -> Queen's Wharf", veh: "Luxury Sedan", cap: "4 Pax", price: "$60 - $80" },
                                    { route: "Hourly Hire (Delegate Shuttle)", veh: "People Mover", cap: "7 Pax", price: "$105 / hour" },
                                    { route: "Airport -> RICC (Showgrounds)", veh: "Executive Sedan", cap: "4 Pax", price: "$90 - $110" },
                                    { route: "Gala Dinner Transfer", veh: "Premium SUV", cap: "4 Pax", price: "Custom Quote" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Event Precincts</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>BCEC (South Bank)</h3>
                            <p style={{ color: '#475569' }}>Located in the heart of South Bank. Traffic can be dense, but our drivers are experts at the Grey St and Merivale St entrances.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Queen's Wharf</h3>
                            <p style={{ color: '#475569' }}>Brisbane's newest entertainment district. We provide seamless transfers to all hotels and event spaces within the precinct.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Event FAQs</h2>
                    <LocationFAQ city="Brisbane" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Start Planning:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check out our <Link href="/the-fleet" className={styles.inlineLink}>transport options</Link>.
                        Email us for a <Link href="/contact-us" className={styles.inlineLink}>detailed quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
