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
    title: { absolute: "Wedding Cars Adelaide | Barossa & Hills Bridal Hire | Auzzie Chauffeur" },
    description: "Elegant wedding cars in Adelaide. Luxury Mercedes chauffeurs for weddings in the CBD, Adelaide Hills, and Barossa Valley. Red carpet service included.",
};

export default function AdelaideWeddingPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Adelaide" service="Wedding Cars" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Adelaide Wedding Car Hire"
                    subtitle="Arrive in timeless beauty. Premium chauffeur service for your wedding in the CBD, Adelaide Hills, or Barossa Valley."
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
                            How much is wedding car hire in Adelaide?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4c0519' }}>
                            Wedding car hire in Adelaide typically starts from <strong>$300 - $450</strong> for a standard 3-hour local package. For weddings in the <strong>Barossa Valley</strong> or <strong>McLaren Vale</strong>, expect packages to start from <strong>$800 - $1,100</strong> to cover travel time and full-day service.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#9f1239', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Includes white ribbons, red carpet, and chauffeur service.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Adelaide's Finest Weddings</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Red Carpet", desc: "Arrive like a star with our signature red carpet rollout at the ceremony.", icon: <Gem size={28} color="#e11d48" /> },
                            { title: "Wine Region Experts", desc: "Drivers experienced with the winding roads of the Adelaide Hills and Barossa.", icon: <Map size={28} color="#e11d48" /> },
                            { title: "Classic Ribbons", desc: "White satin ribbons on the car for the traditional wedding look.", icon: <Heart size={28} color="#e11d48" /> },
                            { title: "Photo Ready", desc: "We position the cars perfectly at Carrick Hill or the Botanic Gardens for photos.", icon: <Camera size={28} color="#e11d48" /> },
                            { title: "Champagne", desc: "Complimentary bottle of sparkling wine for the bridal party to enjoy.", icon: <Gift size={28} color="#e11d48" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Adelaide Wedding Packages</h2>
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
                                    { name: "City Ceremony", time: "2 Hours", desc: "Pickup -> Ceremony -> Wait.", price: "$300 - $420" },
                                    { name: "Hills Deluxe", time: "5 Hours", desc: "Ceremony + Photo Shoot in the Hills/Gardens.", price: "$700 - $950" },
                                    { name: "Barossa Experience", time: "8 Hours", desc: "Travel to winery + ceremony + photos.", price: "$1,100+" },
                                    { name: "Evening Getaway", time: "1 Hour", desc: "Reception to Hotel transfer.", price: "$140 - $200" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Adelaide's Top Venues</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "Chateau Tanunda", "Carrick Hill", "Ayers House",
                            "Mt Lofty House", "Sfera's Park Suites", "National Wine Centre",
                            "Golding Wines", "Maximilian's", "The Lane Vineyard"
                        ].map((venue, idx) => (
                            <span key={idx} style={{ background: 'white', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '999px', color: '#334155', fontWeight: '500' }}>
                                📍 {venue}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Adelaide Wedding FAQs</h2>
                    <LocationFAQ city="Adelaide" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fff1f2', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#881337', marginBottom: '2rem' }}>Love Stories</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#4c0519' }}>
                        “Perfect service for our Barossa wedding. The driver was so accommodating with our photographer.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#e11d48' }}>— Rachel & Ben, married at Chateau Tanunda</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Reserve Your Date:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Browse our <Link href="/the-fleet" className={styles.inlineLink}>vehicle options</Link>.
                        Contact us via our <Link href="/contact-us" className={styles.inlineLink}>bookings page</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
