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
    title: { absolute: "Cruise Ship Transfers Melbourne | Station Pier Port Melbourne | Auzzie Chauffeur" },
    description: "Private cruise transfers to Station Pier, Port Melbourne. Fixed price chauffeur service from Melbourne Airport to Spirit of Tasmania and Cruise Terminals.",
};

export default function MelbourneCruisePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Melbourne" service="Cruise Ship Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Melbourne Cruise Ship Transfers"
                    subtitle="Seamless transfers to Station Pier. Executive cars and vans for Spirit of Tasmania and international cruise passengers."
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
                            How much is a transfer to Station Pier?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            A private transfer from <strong>Melbourne Airport (Tullamarine) to Station Pier</strong> generally costs between <strong>$110 - $140</strong> for a luxury sedan. For families connecting to the <strong>Spirit of Tasmania</strong> with extra luggage, our Mercedes V-Class vans are available from <strong>$160 - $200</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Includes CityLink tolls and airport parking.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Port Melbourne Specialists</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Spirit of Tasmania", desc: "We coordinate with the ferry schedule for early morning arrivals and evening departures.", icon: <Ship size={28} color="#3b82f6" /> },
                            { title: "Ample Luggage Space", desc: "Our vans accommodate large suitcases and even golf clubs for your Tasmanian trip.", icon: <Luggage size={28} color="#3b82f6" /> },
                            { title: "Fixed Price", desc: "Ignore the surged Uber prices. Know your fare before you book.", icon: <CheckCircle size={28} color="#3b82f6" /> },
                            { title: "Meet & Greet", desc: "Your driver meets you inside the terminal with a name board.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Comfort", desc: "Relax in a climate-controlled European vehicle before boarding.", icon: <Car size={28} color="#3b82f6" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Station Pier Transfer Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Melbourne Airport -> Station Pier", time: "30-45 Mins", veh: "Sedan / Van", price: "$110 - $180" },
                                    { route: "CBD Hotel -> Station Pier", time: "15-25 Mins", veh: "Sedan / Van", price: "$80 - $120" },
                                    { route: "Avalon Airport -> Station Pier", time: "50-60 Mins", veh: "Sedan / Van", price: "$180 - $240" },
                                    { route: "Eastern Suburbs -> Port Melb", time: "40-60 Mins", veh: "SUV / Van", price: "$130+" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Station Pier Information</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Main Cruise Terminal</h3>
                            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>位于 Port Melbourne. The historic Station Pier handles all major cruise liners (Carnival, Cunard) and is the daily home of the Spirit of Tasmania ferry service. Passenger drop-off is strictly controlled; our accredited vehicles have direct access.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Port Melbourne FAQs</h2>
                    <LocationFAQ city="Melbourne" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Smooth Sailing</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “The driver was so helpful loading our car full of camping gear from the Spirit of Tasmania. Much easier than trying to get a taxi.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— Mark & Jen, returning from Devonport</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Transfer:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        See our <Link href="/the-fleet" className={styles.inlineLink}>large vans</Link>.
                        Check availability on our <Link href="/contact-us" className={styles.inlineLink}>booking page</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
