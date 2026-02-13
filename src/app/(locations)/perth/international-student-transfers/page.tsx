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
    title: { absolute: "International Student Transfers Perth | UWA, Curtin, Murdoch" },
    description: "Reliable student transfers from Perth Airport (PER). Direct transport to UWA, Curtin, Murdoch University and student accommodation.",
};

export default function PerthStudentPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Perth" service="Student Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Perth Student Airport Transfers"
                    subtitle="Welcome to the West. Safe, comfortable airport pickup for students attending UWA, Curtin, or Murdoch."
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
                            How much is a student transfer in Perth?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#14532d' }}>
                            Student transfers from <strong>Perth Airport (PER) to UWA (Crawley)</strong> typically cost between <strong>$80 - $95</strong>. Transfers to <strong>Curtin University (Bentley)</strong> are slightly closer, starting from <strong>$70 - $85</strong>. Group bookings for students sharing a house can split the cost of a van.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#15803d', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Airport fees and tolls are included in your quote.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Stress-Free Arrival</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "UWA & Colleges", desc: "Crawley campus including St George's, St Catherine's, and Trinity College.", icon: <BookOpen size={28} color="#16a34a" /> },
                            { title: "Curtin Bentley", desc: "Direct access via Leach Highway. We drop off at Erica Underwood House and Vickery House.", icon: <MapPin size={28} color="#16a34a" /> },
                            { title: "Meet & Greet", desc: "We monitor your flight. If it's delayed, we wait. Driver meets you inside the terminal.", icon: <Clock size={28} color="#16a34a" /> },
                            { title: "ECU Mt Lawley", desc: "Servicing Edith Cowan University campuses and student villages.", icon: <Users size={28} color="#16a34a" /> },
                            { title: "Safe Transport", desc: "Perth's most trusted private drivers. Fully insured and accredited.", icon: <ShieldCheck size={28} color="#16a34a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Student Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#14532d', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route / Campus</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Passengers</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Perth Airport -> UWA (Crawley)", veh: "Sedan", cap: "1-3 Pax", price: "$80 - $95" },
                                    { route: "Perth Airport -> Curtin (Bentley)", veh: "Sedan", cap: "1-3 Pax", price: "$70 - $85" },
                                    { route: "Perth Airport -> Murdoch Uni", veh: "Sedan", cap: "1-3 Pax", price: "$90 - $110" },
                                    { route: "Perth Airport -> ECU Joondalup", veh: "Sedan", cap: "1-3 Pax", price: "$100 - $120" },
                                    { route: "Shared House (Peppermint Grove)", veh: "Minivan", cap: "4-7 Pax", price: "From $120" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Major Unis</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>UWA (Crawley)</h3>
                            <p style={{ color: '#475569' }}>A riverside campus. We drop off at Winthrop Hall or directly at your college accommodation.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Curtin (Bentley)</h3>
                            <p style={{ color: '#475569' }}>A large campus south of the river. Easy access for our drivers via the main entrance.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Transfer FAQs</h2>
                    <LocationFAQ city="Perth" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Driver:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Browse <Link href="/the-fleet" className={styles.inlineLink}>transport options</Link>.
                        Send us an <Link href="/contact-us" className={styles.inlineLink}>enquiry</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
