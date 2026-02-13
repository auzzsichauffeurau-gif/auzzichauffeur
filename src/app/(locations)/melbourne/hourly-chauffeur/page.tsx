import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Clock, MapPin, Camera, Coffee, Star, Shield, Car, Navigation } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Hourly Chauffeur Melbourne | Private Driver Hire | Yarra Valley & Great Ocean Road" },
    description: "Hire a private driver in Melbourne. Hourly chauffeur service for Yarra Valley wine tours, Great Ocean Road trips, and city sightseeing.",
};

export default function MelbourneHourlyPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Melbourne" service="Hourly Chauffeur" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Melbourne Private Driver & Tours"
                    subtitle="Discover Victoria's secrets. From Yarra Valley wineries to the Twelve Apostles, travel in style with your own chauffeur."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#fffbeb', padding: '3rem 1rem', borderBottom: '3px solid #f59e0b' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '50%', color: '#d97706', flexShrink: 0 }}>
                        <Clock size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#78350f', marginBottom: '0.5rem' }}>
                            Cost for a private driver in Melbourne?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#78350f' }}>
                            Enjoy the freedom of an <strong>hourly chauffeur in Melbourne</strong> starting from <strong>$95 - $115 per hour</strong> for executive sedans. <strong>Yarra Valley wine tours</strong> (usually 6-8 hours) are priced based on duration, typically ranging from <strong>$600 - $900</strong>. Long-distance trips like the <strong>Great Ocean Road</strong> are quoted as a full-day package.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Tasting fees not typically included in transport price.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Victoria's Best Sightseeing</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Yarra Valley", desc: "Visit Domaine Chandon, Rochford Wines, and Yering Station without worrying about the drive home.", icon: <Coffee size={28} color="#f59e0b" /> },
                            { title: "Great Ocean Road", desc: "A full day journey to see the Twelve Apostles. Stop for photos whenever you want.", icon: <Camera size={28} color="#f59e0b" /> },
                            { title: "Penguin Parade", desc: "Evening tours to Phillip Island to see the famous penguins return to shore.", icon: <Star size={28} color="#f59e0b" /> },
                            { title: "City Shopping", desc: "Hourly hire for a shopping spree at Chadstone or Collins Street. Leave your bags in the car.", icon: <Car size={28} color="#f59e0b" /> },
                            { title: "Transparent Pricing", desc: "No surge pricing. The rate we quote is the rate you pay.", icon: <Shield size={28} color="#f59e0b" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #fef3c7', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#78350f' }}>{item.title}</h3>
                                    <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Itineraries Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Melbourne Hire Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1f2937', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Hire Type / Tour</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Est. Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Hourly As Directed (Melbourne)", veh: "Luxury Sedan", cap: "Min 3 Hours", price: "$95 - $115 / hr" },
                                    { route: "Yarra Valley Wine Tour", veh: "Mercedes V-Class", cap: "8 Hours", price: "$850 - $950" },
                                    { route: "Great Ocean Road (12 Apostles)", veh: "Luxury SUV", cap: "10-12 Hours", price: "$1100 - $1400" },
                                    { route: "Phillip Island (Penguins)", veh: "People Mover", cap: "8-10 Hours", price: "$900 - $1100" },
                                    { route: "Mornington Peninsula", veh: "Sedan or SUV", cap: "8 Hours", price: "$800 - $1000" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.cap}</td>
                                        <td style={{ padding: '1.25rem', color: '#d97706', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Venue Info */}
                <div style={{ marginBottom: '5rem', background: '#fffbeb', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Must-See Destinations</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Yarra Valley</h3>
                            <p style={{ color: '#4b5563' }}>Australia's premier cool-climate wine region. Just an hour's drive from the CBD.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Great Ocean Road</h3>
                            <p style={{ color: '#4b5563' }}>One of the world's most scenic coastal drives. Perfect for a full-day private excursion.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Private Tour FAQs</h2>
                    <LocationFAQ city="Melbourne" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Start Your Journey:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Explore our <Link href="/the-fleet" className={styles.inlineLink}>touring vehicles</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>custom itinerary</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
