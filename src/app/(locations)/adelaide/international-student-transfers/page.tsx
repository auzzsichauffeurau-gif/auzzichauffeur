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
    title: { absolute: "International Student Transfers Adelaide | Uni of Adelaide, Flinders, UniSA" },
    description: "Reliable airport transfers for Adelaide students. Fixed price transport from Adelaide Airport (ADL) to University of Adelaide, Flinders, UniSA and student housing.",
};

export default function AdelaideStudentPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Adelaide" service="Student Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Adelaide Student Airport Pickup"
                    subtitle="Arrive safely in Adelaide. Direct transfers to North Terrace, Flinders Bedford Park, and Magill Campuses."
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
                            Cost for Adelaide student transport?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#14532d' }}>
                            Adelaide Airport is conveniently close to the city. A private sedan from <strong>Adelaide Airport (ADL) to North Terrace (Uni of Adelaide/UniSA City)</strong> starts from <strong>$60 - $75</strong>. Transfers further south to <strong>Flinders University (Bedford Park/Tonsley)</strong> are typically <strong>$70 - $85</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#15803d', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Cheaper than multiple taxis if sharing a van with friends.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Welcome to Adelaide</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "City Campuses", desc: "Easy drop-off at University of Adelaide and UniSA on North Terrace.", icon: <BookOpen size={28} color="#16a34a" /> },
                            { title: "Flinders Uni", desc: "Servicing the southern suburbs including Bedford Park and Tonsley.", icon: <MapPin size={28} color="#16a34a" /> },
                            { title: "Student Accom", desc: "Direct to Urbanest, Scape, Yugo, and The Switch.", icon: <Users size={28} color="#16a34a" /> },
                            { title: "Reliability", desc: "Your driver tracks your flight and meets you at the carousel.", icon: <Clock size={28} color="#16a34a" /> },
                            { title: "Fixed Rates", desc: "Avoid the stress of watching a taxi meter tick over in traffic.", icon: <CheckCircle size={28} color="#16a34a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Adelaide Student Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#14532d', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination / Uni</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Passengers</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Adelaide Airport -> North Terrace (City)", veh: "Sedan", cap: "1-3 Pax", price: "$60 - $75" },
                                    { route: "Adelaide Airport -> Flinders (Bedford Park)", veh: "Sedan", cap: "1-3 Pax", price: "$70 - $85" },
                                    { route: "Adelaide Airport -> UniSA (Magill)", veh: "Sedan", cap: "1-3 Pax", price: "$75 - $90" },
                                    { route: "Adelaide Airport -> Mawson Lakes", veh: "Sedan", cap: "1-3 Pax", price: "$85 - $100" },
                                    { route: "Group Transfer (Student Housing)", veh: "Minivan", cap: "4-7 Pax", price: "From $100" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Main Campuses</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>North Terrace</h3>
                            <p style={{ color: '#475569' }}>The cultural hub of Adelaide. University of Adelaide and UniSA City East/West are all here.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Bedford Park</h3>
                            <p style={{ color: '#475569' }}>Flinders University's main campus. Beautiful views but requires reliable transport.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Student FAQs</h2>
                    <LocationFAQ city="Adelaide" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Reserve Your Ride:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check <Link href="/the-fleet" className={styles.inlineLink}>vehicle capacity</Link>.
                        Email us for a <Link href="/contact-us" className={styles.inlineLink}>quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
