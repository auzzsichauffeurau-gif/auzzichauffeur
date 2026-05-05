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
    title: { absolute: "International Student Transfers Melbourne | Uni Melb, Monash, RMIT" },
    description: "Reliable student airport transfers in Melbourne. Safe transport from Melbourne Airport (MEL) to University of Melbourne, Monash, RMIT and student colleges.",
};

export default function MelbourneStudentPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Melbourne" service="Student Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Melbourne Student Airport Transfers"
                    subtitle="Arrive in Melbourne stress-free. Direct transfer from Tullamarine to your university, college, or student accommodation."
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
                            Cost for Melbourne student transfers?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#14532d' }}>
                            Start your studies with a smooth arrival. Transfers from <strong>Melbourne Airport (Tullamarine) to University of Melbourne (Parkville)</strong> or <strong>RMIT (City)</strong> start from <strong>$90 - $105</strong>. For <strong>Monash University (Clayton)</strong>, which is further out, rates range from approx <strong>$130 - $150</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#15803d', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Includes waiting time for customs clearance.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Safe & Reliable</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Terminal Pickup", desc: "Driver meets you at the arrivals hall with a sign. Easy to find.", icon: <Users size={28} color="#16a34a" /> },
                            { title: "Direct to Dorm", desc: "Door-to-door service to Urbanest, Scape, Iglu, and UniLodge.", icon: <MapPin size={28} color="#16a34a" /> },
                            { title: "No Luggage Fees", desc: "Bring your suitcases, instruments, and books. We have ample trunk space.", icon: <CheckCircle size={28} color="#16a34a" /> },
                            { title: "Safety First", desc: "All drivers are accredited and background checked. GPS tracking on all trips.", icon: <ShieldCheck size={28} color="#16a34a" /> },
                            { title: "Clayton Campus", desc: "We service the outer suburbs including Monash Clayton and La Trobe Bundoora.", icon: <BookOpen size={28} color="#16a34a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Melbourne Student Rates</h2>
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
                                    { route: "Tullamarine -> UniMelb (Parkville)", veh: "Sedan", cap: "1-3 Pax", price: "$90 - $105" },
                                    { route: "Tullamarine -> RMIT (CBD)", veh: "Sedan", cap: "1-3 Pax", price: "$95 - $110" },
                                    { route: "Tullamarine -> Monash (Clayton)", veh: "Sedan", cap: "1-3 Pax", price: "$130 - $150" },
                                    { route: "Tullamarine -> La Trobe (Bundoora)", veh: "Sedan", cap: "1-3 Pax", price: "$110 - $130" },
                                    { route: "Group Transfer (Minivan)", veh: "Mercedes V-Class", cap: "4-7 Pax", price: "From $160" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Campus Locations</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Parkville & CBD</h3>
                            <p style={{ color: '#475569' }}>Home to UniMelb and RMIT. Dense traffic area, pre-booked transfer saves stress.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Monash Clayton</h3>
                            <p style={{ color: '#475569' }}>A significant distance from the airport. A fixed-price transfer avoids high meter fares.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Arrival FAQs</h2>
                    <LocationFAQ city="Melbourne" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Organize Your Pickup:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check our <Link href="/the-fleet" className={styles.inlineLink}>fleet options</Link>.
                        Email us for a <Link href="/contact-us" className={styles.inlineLink}>student booking</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
