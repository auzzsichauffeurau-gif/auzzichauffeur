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
    title: { absolute: "Hourly Chauffeur Brisbane | Private Driver Hire | Sunshine Coast & Gold Coast Tours" },
    description: "Book an hourly chauffeur in Brisbane. Flexible private driver service for Sunshine Coast, Gold Coast, Mt Tamborine tours and city sightseeing.",
};

export default function BrisbaneHourlyPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Brisbane" service="Hourly Chauffeur" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Brisbane Private Driver Service"
                    subtitle="Your personal chauffeur for the day. Explore Mt Tamborine, the Sunshine Coast, or navigate Brisbane City in comfort."
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
                            Hourly chauffeur rates in Brisbane?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#78350f' }}>
                            Hire a <strong>private driver in Brisbane</strong> from <strong>$90 - $110 per hour</strong> (minimum 3 hours). Popular day trips include <strong>Australia Zoo</strong> (Sunshine Coast) or a winery tour to <strong>Mt Coot-tha and Mt Tamborine</strong>. Full-day disposal (8 hours) packages are available from <strong>$750</strong> for a luxury sedan.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Custom itineraries to Byron Bay also available.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Freedom to Explore</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Mt Tamborine", desc: "Visit the Glow Worm Caves and local distilleries on a relaxed mountain drive.", icon: <Camera size={28} color="#f59e0b" /> },
                            { title: "Australia Zoo", desc: "A great family day out to the Sunshine Coast. Your driver waits while you explore.", icon: <Star size={28} color="#f59e0b" /> },
                            { title: "City Meetings", desc: "Multiple stops in the CBD, Fortitude Valley, and South Bank? Keep your car on standby.", icon: <Navigation size={28} color="#f59e0b" /> },
                            { title: "Byron Bay", desc: "A scenic 2-hour drive south. Spend the day at the beach and return to Brisbane in comfort.", icon: <Car size={28} color="#f59e0b" /> },
                            { title: "Local Drivers", desc: "We know the best routes to avoid the M1 traffic congestion.", icon: <Shield size={28} color="#f59e0b" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Hourly Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1f2937', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Hire Type / Destination</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Est. Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Hourly As Directed (Brisbane)", veh: "Luxury Sedan", cap: "Min 3 Hours", price: "$90 - $110 / hr" },
                                    { route: "Sunshine Coast (Australia Zoo)", veh: "People Mover", cap: "6-8 Hours", price: "$650 - $850" },
                                    { route: "Mt Tamborine Winery Tour", veh: "Mercedes V-Class", cap: "6 Hours", price: "$650 - $750" },
                                    { route: "Byron Bay Day Trip", veh: "Luxury SUV", cap: "9-10 Hours", price: "$900 - $1100" },
                                    { route: "Gold Coast Theme Parks (Wait & Return)", veh: "Van / SUV", cap: "8 Hours", price: "$750 - $900" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Popular Day Trips</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Sunshine Coast</h3>
                            <p style={{ color: '#4b5563' }}>Visit Noosa, Mooloolaba, or the famous Australia Zoo. Approximately 90 mins north of Brisbane.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Mt Tamborine</h3>
                            <p style={{ color: '#4b5563' }}>A lush rainforest retreat with boutique wineries, distilleries, and the Skywalk. Perfect for a relaxing day out.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hire Service FAQs</h2>
                    <LocationFAQ city="Brisbane" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Reserve Your Driver:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check <Link href="/the-fleet" className={styles.inlineLink}>vehicle availability</Link>.
                        Send us your details for a <Link href="/contact-us" className={styles.inlineLink}>quick quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
