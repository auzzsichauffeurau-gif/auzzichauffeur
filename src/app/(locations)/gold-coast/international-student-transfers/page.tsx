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
    title: { absolute: "International Student Transfers Gold Coast | Griffith & Bond University" },
    description: "Cheap and reliable student transfers on the Gold Coast. Airport pickup for Griffith University (Southport) and Bond University (Robina).",
};

export default function GoldCoastStudentPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Gold Coast" service="Student Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Gold Coast Student Airport Pickup"
                    subtitle="Arrive on the Sunshine Strip with ease. Fixed price transfers to Griffith Uni and Bond Uni."
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
                            Gold Coast student transfer rates?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#14532d' }}>
                            Transfers from <strong>Gold Coast Airport (OOL) to Bond University (Robina)</strong> start from <strong>$75 - $90</strong>. Transfers specifically to the <strong>Griffith University (Gold Coast Campus/Southport)</strong> area typically range from <strong>$85 - $100</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#15803d', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Also servicing arrivals into Brisbane Airport (BNE) for GC students.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Local Knowledge</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Griffith Uni", desc: "Located in Southport, near the hospital. We drop you right at the Student Guild.", icon: <BookOpen size={28} color="#16a34a" /> },
                            { title: "Bond University", desc: "Situated in Robina. We know the campus layout for easy accommodation drop-offs.", icon: <MapPin size={28} color="#16a34a" /> },
                            { title: "Student Housing", desc: "Direct transfers to Griffith University Village and varied private rentals.", icon: <Users size={28} color="#16a34a" /> },
                            { title: "Surfboards OK", desc: "Bringing a board? Let us know and we'll send a vehicle with roof racks or a van.", icon: <CheckCircle size={28} color="#16a34a" /> },
                            { title: "Safety First", desc: "Arriving late? Our tracked vehicles ensure you get to your door safely.", icon: <ShieldCheck size={28} color="#16a34a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Gold Coast Student Rates</h2>
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
                                    { route: "OOL Airport -> Bond Uni (Robina)", veh: "Sedan", cap: "1-3 Pax", price: "$75 - $90" },
                                    { route: "OOL Airport -> Griffith (Southport)", veh: "Sedan", cap: "1-3 Pax", price: "$85 - $100" },
                                    { route: "OOL Airport -> Southern Cross (Bilinga)", veh: "Sedan", cap: "1-3 Pax", price: "$50 - $65" },
                                    { route: "Brisbane Airport -> Gold Coast Uni", veh: "Sedan", cap: "1-3 Pax", price: "$220 - $250" },
                                    { route: "Shared House (Surfers Paradise)", veh: "Minivan", cap: "4-7 Pax", price: "From $110" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>University Campuses</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Griffith Gold Coast</h3>
                            <p style={{ color: '#475569' }}>Massive campus in the Health and Knowledge precinct. Home to medicine and dentistry students.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Bond University</h3>
                            <p style={{ color: '#475569' }}>Australia's first private university. Located in Robina, close to shopping and transport.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Student FAQs</h2>
                    <LocationFAQ city="Gold Coast" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Pickup:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Browse our <Link href="/the-fleet" className={styles.inlineLink}>vehicles</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
