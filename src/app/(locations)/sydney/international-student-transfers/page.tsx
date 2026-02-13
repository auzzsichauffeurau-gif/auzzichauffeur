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
    title: { absolute: "International Student Transfers Sydney | Airport to Uni | USYD, UNSW, UTS" },
    description: "Safe airport pickups for international students in Sydney. Reliable transfers from SYD Airport to USYD, UNSW, UTS, Macquarie Uni and student accommodation.",
};

export default function SydneyStudentPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Sydney" service="Student Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Sydney Student Airport Transfers"
                    subtitle="A warm welcome to Australia. Safe, reliable transport from Sydney Airport to your university or homestay."
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
                            How much is a student transfer in Sydney?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#14532d' }}>
                            We offer affordable, fixed-price transfers for students. A standard sedan from <strong>Sydney Airport to USYD/UT</strong>S (City) starts from <strong>$85</strong>. Transfers to <strong>UNSW (Kensington)</strong> or <strong>Macquarie University</strong> are typically <strong>$95 - $115</strong>. Group bookings for fellow students are available in our vans.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#15803d', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Meet & Greet service included to help you find your driver.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Safe Arrival Guarantee</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Meet & Greet", desc: "Your driver waits inside the terminal with a name sign. No confusion.", icon: <Users size={28} color="#16a34a" /> },
                            { title: "Luggage Help", desc: "Moving overseas means heavy bags. We assist with all lifting and loading.", icon: <ShieldCheck size={28} color="#16a34a" /> },
                            { title: "University Direct", desc: "We know the exact drop-off points for student housing at USYD, UNSW, and UTS.", icon: <MapPin size={28} color="#16a34a" /> },
                            { title: "Free WiFi", desc: "Connect immediately to message your family back home that you've arrived safely.", icon: <Wifi size={28} color="#16a34a" /> },
                            { title: "Fixed Price", desc: "No meter anxiety. The price we quote is the final price, regardless of traffic.", icon: <CheckCircle size={28} color="#16a34a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Sydney Student Rates</h2>
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
                                    { route: "Sydney Airport -> USYD / UTS (City)", veh: "Sedan", cap: "1-3 Pax", price: "$85 - $95" },
                                    { route: "Sydney Airport -> UNSW (Kensington)", veh: "Sedan", cap: "1-3 Pax", price: "$90 - $100" },
                                    { route: "Sydney Airport -> Macquarie Uni", veh: "Sedan", cap: "1-3 Pax", price: "$110 - $130" },
                                    { route: "Sydney Airport -> Western Sydney Uni", veh: "Sedan", cap: "1-3 Pax", price: "$120 - $140" },
                                    { route: "Group Arrival (Student Housing)", veh: "Minivan", cap: "4-7 Pax", price: "$140 - $160" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>University Destinations</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>USYD & UTS</h3>
                            <p style={{ color: '#475569' }}>Located in Camperdown and Broadway. Heavy traffic area, but our drivers know the best drop-off zones.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem' }}>UNSW Sydney</h3>
                            <p style={{ color: '#475569' }}>Situated in Kensington. We service all on-campus colleges and nearby apartments in Randwick.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Student FAQs</h2>
                    <LocationFAQ city="Sydney" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Ride:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        See our <Link href="/the-fleet" className={styles.inlineLink}>student friendly cars</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>group quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
