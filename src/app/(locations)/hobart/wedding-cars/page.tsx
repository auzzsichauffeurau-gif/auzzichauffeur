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
    title: { absolute: "Wedding Cars Hobart | Luxury Tasmanian Bridal Hire | Auzzie Chauffeur" },
    description: "Premium wedding car hire in Hobart. Arrive at MONA, Frogmore Creek, or Glen Albyn Estate in style with our luxury chauffeur service.",
};

export default function HobartWeddingPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Hobart" service="Wedding Cars" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hobart Wedding Car Hire"
                    subtitle="Arrive in Tasmanian elegance. Luxury chauffeur cars for weddings in Hobart, Richmond, and the Coal River Valley."
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
                            How much is wedding car hire in Hobart?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4c0519' }}>
                            Wedding car hire in Hobart typically ranges from <strong>$300 - $450</strong> for a standard 3-hour booking. For weddings in the <strong>Coal River Valley</strong> or <strong>Huon Valley</strong>, packages generally start from <strong>$750 - $1,000</strong> to accommodate travel time and potential photo stops at historic sites.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#9f1239', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Includes white ribbons, red carpet arrival, and chauffeur assistance.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tasmanian Wedding Excellence</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Red Carpet", desc: "A royal arrival for your ceremony at Hobart's historic churches.", icon: <Gem size={28} color="#e11d48" /> },
                            { title: "Scenic Routes", desc: "Drivers know the most picturesque routes through Richmond and Cambridge.", icon: <Map size={28} color="#e11d48" /> },
                            { title: "Climate Control", desc: "Warm and cozy cars for winter weddings, cool for summer.", icon: <Shield size={28} color="#e11d48" /> },
                            { title: "Traditional Ribbons", desc: "Classic white satin ribbons to decorate your bridal car.", icon: <Heart size={28} color="#e11d48" /> },
                            { title: "Bridal Party", desc: "Spacious vans available for transporting groomsmen and bridesmaids.", icon: <UserCheck size={28} color="#e11d48" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hobart Wedding Packages</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Package</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Includes</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "City Church", time: "2 Hours", desc: "Transfer to St David's + Wait.", price: "$300 - $420" },
                                    { name: "Vineyard Lover", time: "5 Hours", desc: "Ceremony + Photos in Richmond.", price: "$750 - $950" },
                                    { name: "MONA Art", time: "6 Hours", desc: "Transport to/from Berriedale.", price: "$800 - $1,100" },
                                    { name: "Late Escape", time: "1 Hour", desc: "Reception to Hotel.", price: "$140 - $200" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Venues We Know & Love</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "MONA", "Frogmore Creek", "Glen Albyn Estate",
                            "Peppermint Bay Hotel", "Wrest Point", "Royal Tasmanian Botanical Gardens",
                            "Puddleduck Vineyard", "Villa Howden", "Henry Jones Art Hotel"
                        ].map((venue, idx) => (
                            <span key={idx} style={{ background: 'white', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '999px', color: '#334155', fontWeight: '500' }}>
                                📍 {venue}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Tasmanian Wedding FAQs</h2>
                    <LocationFAQ city="Hobart" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fff1f2', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#881337', marginBottom: '2rem' }}>Tassie Romance</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#4c0519' }}>
                        “Thank you for the warm cars and blankets during our winter wedding photo shoot. It made all the difference!”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#e11d48' }}>— Grace & Oliver, married at Frogmore Creek</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Date:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Browse our <Link href="/the-fleet" className={styles.inlineLink}>bridal cars</Link>.
                        Book via our <Link href="/contact-us" className={styles.inlineLink}>online form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
