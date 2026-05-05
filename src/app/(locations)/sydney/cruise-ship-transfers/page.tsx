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
    title: { absolute: "Cruise Ship Transfers Sydney | Overseas Passenger Terminal & White Bay | Auzzie Chauffeur" },
    description: "Reliable cruise transfers in Sydney. Fixed price chauffeur service to Overseas Passenger Terminal and White Bay. Spacious vans for luggage.",
};

export default function SydneyCruisePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Sydney" service="Cruise Ship Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Sydney Cruise Ship Transfers"
                    subtitle="Start your holiday stress-free. Door-to-terminal service for Overseas Passenger Terminal and White Bay Cruise Terminal."
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
                            How much is a transfer to Sydney Cruise Terminal?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            A private transfer from <strong>Sydney Airport to the Overseas Passenger Terminal (Circular Quay)</strong> typically costs between <strong>$110 - $140</strong> for a luxury sedan. For families with luggage, our Mercedes V-Class vans range from <strong>$160 - $200</strong>, offering ample space for suitcases and cruise gear. Transfers to <strong>White Bay Cruise Terminal</strong> are similarly priced.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices include tolls and airport parking fees.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Bon Voyage Begins Here</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Luggage Capacity", desc: "Our vans can handle 6-7 large suitcases, perfect for extended cruises.", icon: <Luggage size={28} color="#3b82f6" /> },
                            { title: "Terminal Expert", desc: "Drivers know the exact drop-off zones at OPT and White Bay to save you walking.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Fixed Price", desc: "No surge pricing or watching the meter tick over in Sydney traffic.", icon: <CheckCircle size={28} color="#3b82f6" /> },
                            { title: "Meet & Greet", desc: "For airport pickups, we meet you inside the terminal with a name sign.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Punctuality", desc: "We ensure you arrive with plenty of time for check-in and boarding.", icon: <Clock size={28} color="#3b82f6" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Sydney Cruise Transfers</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route</th>
                                    <th style={{ padding: '1rem' }}>Travel Time</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Sydney Airport -> OPT (Circular Quay)", time: "30-45 Mins", veh: "Sedan / Van", price: "$110 - $180" },
                                    { route: "Sydney Airport -> White Bay", time: "30-50 Mins", veh: "Sedan / Van", price: "$120 - $190" },
                                    { route: "CBD Hotel -> Cruise Terminal", time: "15-20 Mins", veh: "Luxury Sedan", price: "$85 - $110" },
                                    { route: "Western Suburbs -> Terminal", time: "45-60 Mins", veh: "Family Van", price: "$160+" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.time}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#3b82f6', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Terminals Info */}
                <div style={{ marginBottom: '5rem', background: '#f0f9ff', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Sydney's Cruise Terminals</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Overseas Passenger Terminal (OPT)</h3>
                            <p style={{ color: '#475569' }}>Located at Circular Quay, opposite the Opera House. Services large ships like Royal Caribbean and Princess Cruises. Best access via George St.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>White Bay Cruise Terminal</h3>
                            <p style={{ color: '#475569' }}>Located in Rozelle, servicing P&O and Holland America. Access via James Craig Road directly. No public transport nearby, making private transfer essential.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Cruise Transfer FAQs</h2>
                    <LocationFAQ city="Sydney" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Passenger Feedback</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “Our driver was waiting at the airport arrivals with a sign. He helped us with our 4 large bags and got us to the ship with time to spare.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— The Thompson Family, cruising on Ovation of the Seas</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Reseve Your Ride:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check our <Link href="/the-fleet" className={styles.inlineLink}>spacious vans</Link>.
                        Book via our <Link href="/contact-us" className={styles.inlineLink}>secure form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
