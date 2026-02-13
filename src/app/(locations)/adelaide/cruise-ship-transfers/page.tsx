import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Ship, Clock, MapPin, Luggage, Users, Anchor, CheckCircle, Car } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Cruise Ship Transfers Adelaide | Outer Harbor Passenger Terminal | Auzzie Chauffeur" },
    description: "Private cruise transfers to Outer Harbor, Adelaide. Convenient chauffeur service from Adelaide Airport or CBD to the Passenger Terminal. Fixed price.",
};

export default function AdelaideCruisePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Adelaide" service="Cruise Ship Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Adelaide Cruise Ship Transfers"
                    subtitle="Direct transfers to Outer Harbor. Avoid the hassle of the train with a private chauffeur for you and your luggage."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#eff6ff', padding: '3rem 1rem', borderBottom: '3px solid #3b82f6' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '50%', color: '#3b82f6', flexShrink: 0 }}>
                        <Anchor size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>
                            How much is a transfer to Outer Harbor?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            A private transfer from <strong>Adelaide Airport (ADL) to the Outer Harbor Passenger Terminal</strong> takes approximately 40 minutes and typically costs between <strong>$90 - $120</strong> for a luxury sedan. For families needing extra luggage space, our <strong>Mercedes V-Class vans</strong> range from <strong>$140 - $180</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Don't struggle with suitcases on the train - book a door-to-door transfer.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>The Outer Harbor Expert</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Door-to-Door", desc: "No changing trains or dragging bags. We pick you up and drop you at the terminal entrance.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Luggage Space", desc: "Plentiful room for your cruise wardrobe in our spacious vans.", icon: <Luggage size={28} color="#3b82f6" /> },
                            { title: "Fixed Price", desc: "Know the cost upfront. No surprises when you arrive at the port.", icon: <CheckCircle size={28} color="#3b82f6" /> },
                            { title: "Meet & Greet", desc: "We track your flight and meet you in arrivals with a smile.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Reliability", desc: "We monitor traffic on Port Road to ensure you board on time.", icon: <Clock size={28} color="#3b82f6" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Adelaide Cruise Transfers</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Capacity</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Adelaide Airport -> Outer Harbor", veh: "Sedan / Van", cap: "1-7 Pax", price: "$90 - $180" },
                                    { route: "Adelaide City (Hotel) -> Terminal", veh: "Sedan / Van", cap: "1-7 Pax", price: "$80 - $150" },
                                    { route: "Glenelg -> Outer Harbor", veh: "Sedan / SUV", cap: "1-4 Pax", price: "$100 - $140" },
                                    { route: "Barossa Valley -> Cruise Terminal", veh: "Luxury Van", cap: "1-7 Pax", price: "$250+" }
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

                {/* Terminals Info */}
                <div style={{ marginBottom: '5rem', background: '#f0f9ff', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Locating The Terminal</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Outer Harbor Passenger Terminal</h3>
                            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>位于 Oliver Rogers Road. Outer Harbor is approximately 25km northwest of the Adelaide CBD. While serviced by a train line, the station is a walk from the terminal building, making private car transfers the preferred option for cruisers with luggage.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Visitor FAQs</h2>
                    <LocationFAQ city="Adelaide" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Cruise In Comfort</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “After disembarking the Queen Mary 2, our driver was right there to whisk us away to the airport. No queuing for taxis!”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— James & Patricia, UK visitors</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Transfer:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Explore our <Link href="/the-fleet" className={styles.inlineLink}>vehicle options</Link>.
                        Make a <Link href="/contact-us" className={styles.inlineLink}>reservation</Link> now.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
