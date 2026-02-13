import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { GraduationCap, MapPin, Users, BookOpen, Clock, ShieldCheck, Wifi, CheckCircle } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "International Student Transfers Brisbane | UQ, QUT, Griffith | Airport Pickup" },
    description: "Safe student transfers in Brisbane. Airport pickup service for UQ (St Lucia), QUT (Gardens Point/Kelvin Grove) and Griffith University students.",
};

export default function BrisbaneStudentPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Brisbane" service="Student Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Brisbane Student Airport Pickup"
                    subtitle="Direct transfers to UQ St Lucia, QUT, and student housing. Safe, friendly, and reliable."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#f0fdf4', padding: '3rem 1rem', borderBottom: '3px solid #16a34a' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#dcfce7', padding: '1rem', borderRadius: '50%', color: '#16a34a', flexShrink: 0 }}>
                        <GraduationCap size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14532d', marginBottom: '0.5rem' }}>
                            Brisbane student transfer prices?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#14532d' }}>
                            We provide fixed-price transfers for students arriving in Brisbane. A private car from <strong>Brisbane Airport (BNE) to UQ St Lucia</strong> or <strong>QUT Gardens Point</strong> starts from <strong>$80 - $95</strong>. Transfers to <strong>Griffith University (Nathan)</strong> are typically around <strong>$95 - $110</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#15803d', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Drivers assist with luggage at both ends.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Welcome to the River City</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "UQ St Lucia", desc: "Located on a bend in the river. We drop you directly at your college or rental.", icon: <BookOpen size={28} color="#16a34a" /> },
                            { title: "QUT Campuses", desc: "Whether it's the City (Gardens Point) or Kelvin Grove, we know the best drop-off zones.", icon: <MapPin size={28} color="#16a34a" /> },
                            { title: "Student Housing", desc: "Direct service to Student One, Iglu, Scape, and Unilodge properties.", icon: <Users size={28} color="#16a34a" /> },
                            { title: "Safe & Secure", desc: "GPS tracked vehicles and professional drivers for your peace of mind.", icon: <ShieldCheck size={28} color="#16a34a" /> },
                            { title: "WiFi Provided", desc: "Let your parents know you've arrived safely with our in-car hotspot.", icon: <Wifi size={28} color="#16a34a" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #dcfce7', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#14532d' }}>{item.title}</h3>
                                    <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Routes Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Student Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#14532d', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination / Campus</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Passengers</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Brisbane Airport -> UQ (St Lucia)", veh: "Sedan", cap: "1-3 Pax", price: "$85 - $95" },
                                    { route: "Brisbane Airport -> QUT (City)", veh: "Sedan", cap: "1-3 Pax", price: "$80 - $90" },
                                    { route: "Brisbane Airport -> Griffith (Nathan)", veh: "Sedan", cap: "1-3 Pax", price: "$95 - $110" },
                                    { route: "Brisbane Airport -> Kelvin Grove", veh: "Sedan", cap: "1-3 Pax", price: "$85 - $95" },
                                    { route: "Shared House Transfer (Van)", veh: "Minivan", cap: "4-7 Pax", price: "From $130" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#14532d' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.cap}</td>
                                        <td style={{ padding: '1.25rem', color: '#16a34a', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Venue Info */}
                <div style={{ marginBottom: '5rem', background: '#f0fdf4', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Locations</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>St Lucia (UQ)</h3>
                            <p style={{ color: '#475569' }}>A riverside suburb with many residential colleges. Can be confusing to navigate, but we know the way.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Nathan (Griffith)</h3>
                            <p style={{ color: '#475569' }}>Located in the southern suburbs near Mount Gravatt. Direct highway access from the airport.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Transport FAQs</h2>
                    <LocationFAQ city="Brisbane" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Plan Your Arrival:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>vehicle types</Link>.
                        Ask us a question via <Link href="/contact-us" className={styles.inlineLink}>email</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
