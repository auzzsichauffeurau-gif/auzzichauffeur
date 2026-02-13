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
    title: { absolute: "Conference Transfers Hobart | Grand Chancellor & Waterfront Events | Auzzie Chauffeur" },
    description: "Reliable event transfers for Hobart hotels and function centres. Executive chauffeur service for Dark Mofo, Taste of Tasmania, and corporate retreats.",
};

export default function HobartEventsPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Hobart" service="Conferences & Special Events" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hobart Conference & Event Transport"
                    subtitle="Professional transfers for conferences at Hotel Grand Chancellor, waterfront events, and corporate retreats in Tasmania."
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
                            Event transfer costs in Hobart?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            We offer personalized service for Hobart's boutique event market. <strong>Mercedes V-Class (7 pax)</strong> hire starts from <strong>$85 per hour</strong>. Transfers from <strong>Hobart Airport (HBA) to the Hotel Grand Chancellor</strong> (Federation Concert Hall) typically range from <strong>$75 - $95</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Dark Mofo and Wooden Boat Festival transfers available.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tasmanian Hospitality</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Grand Chancellor", desc: "The primary venue for major conferences. We offer seamless pick-ups from the Campbell St entrance.", icon: <Briefcase size={28} color="#3b82f6" /> },
                            { title: "Waterfront Events", desc: "Drop-off points close to PW1 (Princes Wharf) for festivals and exhibitions.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "MONA Transfers", desc: "Private vehicle transfers to MONA (Museum of Old and New Art) for exclusive functions.", icon: <Award size={28} color="#3b82f6" /> },
                            { title: "Small Groups", desc: "Ideal for executive retreats and board meetings requiring discreet transport.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Local Drivers", desc: "Our chauffeurs know the history and best routes around Sullivan's Cove.", icon: <Clock size={28} color="#3b82f6" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hobart Event Transfers</h2>
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
                                    { route: "Hobart Airport -> Grand Chancellor", veh: "Mercedes V-Class", cap: "7 Pax", price: "$90 - $110" },
                                    { route: "City -> MONA (Berriedale)", veh: "Luxury Sedan", cap: "4 Pax", price: "$60 - $80" },
                                    { route: "Hourly Hire (Delegate Shuttle)", veh: "People Mover", cap: "7 Pax", price: "$85 / hour" },
                                    { route: "Airport -> Wrest Point Casino", veh: "Executive Sedan", cap: "4 Pax", price: "$65 - $85" },
                                    { route: "Port Arthur Day Tour (Groups)", veh: "Minibus", cap: "10-20 Pax", price: "Enquire" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Hobart Venues</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Hotel Grand Chancellor</h3>
                            <p style={{ color: '#475569' }}>Features the Federation Concert Hall. Located on the waterfront, suitable for large conferences.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Princes Wharf (PW1)</h3>
                            <p style={{ color: '#475569' }}>A massive shed on the waterfront used for large exhibitions and dinners. </p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Event FAQs</h2>
                    <LocationFAQ city="Hobart" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Organize Your Transport:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>fleet options</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
