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
    title: { absolute: "Cruise Ship Transfers Brisbane | International Cruise Terminal | Auzzie Chauffeur" },
    description: "Reliable cruise transfers to Brisbane International Cruise Terminal (Luggage Point) and Hamilton Wharf. Private chauffeur service with ample luggage space.",
};

export default function BrisbaneCruisePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Brisbane" service="Cruise Ship Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Brisbane Cruise Ship Transfers"
                    subtitle="Start your holiday right. Direct transfers to Brisbane International Cruise Terminal (Luggage Point) and Hamilton Wharf."
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
                            How much is a transfer to Brisbane Cruise Terminal?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            A private transfer from <strong>Brisbane Airport (BNE) to the International Cruise Terminal</strong> at Luggage Point typically costs between <strong>$85 - $110</strong> for a luxury sedan. For families or groups with heavy luggage, our <strong>Mercedes V-Class people movers</strong> are available from <strong>$130 - $160</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Luggage Point is remote; pre-booking ensures you aren't left waiting for a ride share.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>The Cruise Specialist</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Remote Access", desc: "The new terminal at Luggage Point is far from the city. We provide a reliable link.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Luggage Capacity", desc: "Don't squeeze into a hatchback. Our vans fit all your suitcases with ease.", icon: <Luggage size={28} color="#3b82f6" /> },
                            { title: "Fixed Rates", desc: "No surge pricing when thousands of passengers disembark at once.", icon: <CheckCircle size={28} color="#3b82f6" /> },
                            { title: "Meet & Greet", desc: "We meet you at the airport arrivals hall or your hotel lobby.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Comfort", desc: "Start your vacation in a cool, air-conditioned luxury vehicle.", icon: <Car size={28} color="#3b82f6" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Cruise Transfers</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route</th>
                                    <th style={{ padding: '1rem' }}>Terminal</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Brisbane Airport -> Luggage Point", term: "BICT (Main)", veh: "Sedan / Van", price: "$85 - $160" },
                                    { route: "Brisbane Airport -> Hamilton Wharf", term: "Portside (Old)", veh: "Sedan / Van", price: "$65 - $110" },
                                    { route: "Gold Coast -> Luggage Point", term: "BICT", veh: "Sedan / Van", price: "$220 - $280" },
                                    { route: "Sunshine Coast -> Luggage Point", term: "BICT", veh: "People Mover", price: "$250+" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.term}</td>
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Know Your Terminal</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Brisbane International (BICT)</h3>
                            <p style={{ color: '#475569' }}>Located at <strong>Luggage Point</strong>, near the airport but isolated. Handles all mega-ships (Quantum Class, Carnival). Essential to book transport ahead as taxis are scarce.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Hamilton Wharf</h3>
                            <p style={{ color: '#475569' }}>Located at Portside Wharf, closer to the city. Now primarily serves smaller boutique ships due to height restrictions under the Gateway Bridge.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Cruise FAQs</h2>
                    <LocationFAQ city="Brisbane" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Vacation Mode: On</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “After a long flight from Perth, it was a relief to see our driver waiting to take us straight to the ship at Luggage Point.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— The Wilson Family</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Secure Your Ride:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check our <Link href="/the-fleet" className={styles.inlineLink}>vehicle capacity</Link>.
                        Book online via our <Link href="/contact-us" className={styles.inlineLink}>reservation form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
