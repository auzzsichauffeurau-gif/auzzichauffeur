import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Heart, Camera, Clock, Gift, Map, Shield, CheckCircle, Calculator, UserCheck, Calendar, Gem } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Wedding Cars Gold Coast | Beach & Hinterland Bridal Hire | Auzzie Chauffeur" },
    description: "Stunning wedding cars for your Gold Coast wedding. Luxury transport to Surfers Paradise beaches, Mt Tamborine, and The Star. Red carpet included.",
};

export default function GoldCoastWeddingPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Gold Coast" service="Wedding Cars" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Gold Coast Wedding Car Hire"
                    subtitle="Arrive in paradise. Luxury chauffeur cars for beach ceremonies and hinterland receptions on the Gold Coast."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#fff1f2', padding: '3rem 1rem', borderBottom: '3px solid #e11d48' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#ffe4e6', padding: '1rem', borderRadius: '50%', color: '#e11d48', flexShrink: 0 }}>
                        <Calculator size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#881337', marginBottom: '0.5rem' }}>
                            How much is wedding car hire on the Gold Coast?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4c0519' }}>
                            Wedding car hire on the Gold Coast generally starts from <strong>$300 - $450</strong> for a standard 3-hour booking in a luxury sedan. For Hinterland weddings (Mount Tamborine/Springbrook), packages typically range from <strong>$700 - $1,000</strong> to account for the travel time and scenic photo opportunities.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#9f1239', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *All packages include white ribbons, red carpet upon request, and refreshments.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Coastal Elegance & Style</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Red Carpet", desc: "For that Hollywood feel as you arrive at The Star or Palazzo Versace.", icon: <Gem size={28} color="#e11d48" /> },
                            { title: "Beach Ready", desc: "Our cars are impeccably detailed for stunning photos against the ocean backdrop.", icon: <Camera size={28} color="#e11d48" /> },
                            { title: "Air-Conditioned", desc: "Crucial for Gold Coast summer weddings. Stay cool and fresh.", icon: <Shield size={28} color="#e11d48" /> },
                            { title: "Hinterland Experts", desc: "Experienced drivers for the winding roads up to Mount Tamborine.", icon: <Map size={28} color="#e11d48" /> },
                            { title: "Tradition", desc: "White satin ribbons and tulle included on all bridal vehicles.", icon: <Heart size={28} color="#e11d48" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>{item.title}</h3>
                                    <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Wedding Packages */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Gold Coast Wedding Packages</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Package</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Details</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Beach Ceremony", time: "2 Hours", desc: "Transfer to beach location + wait.", price: "$300 - $450" },
                                    { name: "Hinterland Classic", time: "5 Hours", desc: "Drive to Mt Tamborine + Photos + Reception.", price: "$750 - $950" },
                                    { name: "Byron Luxury", time: "Full Day", desc: "Travel to Byron Bay venues.", price: "$1,200+" },
                                    { name: "Getaway Car", time: "1 Hour", desc: "Reception to Hotel (Surfers/Broadbeach).", price: "$150 - $250" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{row.name}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.time}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.desc}</td>
                                        <td style={{ padding: '1.25rem', color: '#e11d48', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Popular Venues */}
                <div style={{ marginBottom: '5rem', background: '#f8fafc', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Iconic Gold Coast Venues</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "The Star Gold Coast", "Imperial Hotel (Palazzo Versace)", "InterContinental Sanctuary Cove",
                            "Sheraton Grand Mirage", "Cedar Creek Estate", "Albert River Wines",
                            "Summergrove Estate", "Bilinga Beach Weddings", "Coolibah Downs"
                        ].map((venue, idx) => (
                            <span key={idx} style={{ background: 'white', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '999px', color: '#334155', fontWeight: '500' }}>
                                📍 {venue}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>GC Wedding FAQs</h2>
                    <LocationFAQ city="Gold Coast" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fff1f2', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#881337', marginBottom: '2rem' }}>Beach Bliss</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#4c0519' }}>
                        “We loved having the luxury car for our beach wedding. The driver even helped shake the sand off my dress before we got in!”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#e11d48' }}>— Mia & Dan, married at Burleigh Heads</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Secure Your Ride:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>luxury fleet</Link>.
                        Book via our <Link href="/contact-us" className={styles.inlineLink}>secure booking page</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
