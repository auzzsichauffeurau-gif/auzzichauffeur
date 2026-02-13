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
    title: { absolute: "International Student Transfers Hobart | UTAS Sandy Bay & City | Airport Pickup" },
    description: "Safe student transfers in Hobart. Reliable airport pickup for University of Tasmania (UTAS) students at Sandy Bay and City campuses.",
};

export default function HobartStudentPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Hobart" service="Student Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hobart Student Airport Pickup"
                    subtitle="Welcome to Tasmania. Direct transfer from Hobart Airport to UTAS Sandy Bay and city colleges."
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
                            How much is student transport in Hobart?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#14532d' }}>
                            We offer reliable fixed-price transfers for students arriving in Hobart. A private sedan from <strong>Hobart Airport (HBA) to UTAS Sandy Bay Campus</strong> starts from <strong>$70 - $85</strong>. Transfers to <strong>student accommodation in the Hobart CBD</strong> are typically <strong>$60 - $75</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#15803d', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *We monitor flights for delays so you're never left waiting.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tasmanian Welcome</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "UTAS Sandy Bay", desc: "Main campus located south of the city. We drop you directly at your college.", icon: <BookOpen size={28} color="#16a34a" /> },
                            { title: "City Colleges", desc: "Jane Franklin Hall and other city residences. Easy drop-off at the door.", icon: <MapPin size={28} color="#16a34a" /> },
                            { title: "Apartment Connect", desc: "Direct to private rentals in North Hobart, Battery Point, and West Hobart.", icon: <Users size={28} color="#16a34a" /> },
                            { title: "Friendly Drivers", desc: "Our local drivers are happy to give you tips about living in Hobart.", icon: <Clock size={28} color="#16a34a" /> },
                            { title: "Warm & Safe", desc: "Arriving in winter? Our cars are heated and waiting for you.", icon: <ShieldCheck size={28} color="#16a34a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hobart Student Rates</h2>
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
                                    { route: "Hobart Airport -> UTAS (Sandy Bay)", veh: "Sedan", cap: "1-3 Pax", price: "$70 - $85" },
                                    { route: "Hobart Airport -> Hobart City (CBD)", veh: "Sedan", cap: "1-3 Pax", price: "$60 - $75" },
                                    { route: "Hobart Airport -> North Hobart", veh: "Sedan", cap: "1-3 Pax", price: "$65 - $80" },
                                    { route: "Hobart Airport -> Jane Franklin Hall", veh: "Sedan", cap: "1-3 Pax", price: "$65 - $80" },
                                    { route: "Group Arrival (Student House)", veh: "Minivan", cap: "4-7 Pax", price: "From $100" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>UTAS Locations</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Sandy Bay</h3>
                            <p style={{ color: '#475569' }}>The primary campus set amongst bushland near the river. Home to Christ College and St John Fisher.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>Medical Precinct</h3>
                            <p style={{ color: '#475569' }}>Located in the city centre near the Royal Hobart Hospital. Easy walking distance to CBD shops.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Student FAQs</h2>
                    <LocationFAQ city="Hobart" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Arrival Details:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check <Link href="/the-fleet" className={styles.inlineLink}>vehicle sizes</Link>.
                        Email us for a <Link href="/contact-us" className={styles.inlineLink}>booking</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
