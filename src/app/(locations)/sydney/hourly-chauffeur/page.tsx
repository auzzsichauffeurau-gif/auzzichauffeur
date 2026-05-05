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
    title: { absolute: "Hourly Chauffeur Sydney | Private Tours Blue Mountains & Hunter Valley" },
    description: "Hire a private driver in Sydney by the hour. Luxury cars for sightseeing tours to Blue Mountains, Hunter Valley, and Bondi Beach. Flexible itinerary.",
};

export default function SydneyHourlyPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Sydney" service="Hourly Chauffeur" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Sydney Hourly Chauffeur & Private Tours"
                    subtitle="Explore Sydney at your own pace. From the Opera House to the Blue Mountains, enjoy the freedom of a personal driver."
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
                            How much does it cost to hire a driver in Sydney?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#78350f' }}>
                            <strong>Hourly chauffeur rates in Sydney</strong> typically start from <strong>$95 - $110 per hour</strong> for a luxury sedan (minimum hire applies). For <strong>private day tours</strong> to the Blue Mountains or Hunter Valley, full-day packages (8-10 hours) offer formatted pricing from approx <strong>$800 - $1100</strong> depending on the vehicle.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Rates include fuel, tolls, and waiting time.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Your Private Driver Experience</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Total Flexibility", desc: "Change your itinerary on the fly. Stay longer at Bondi or leave early for dinner.", icon: <Navigation size={28} color="#f59e0b" /> },
                            { title: "Blue Mountains", desc: "Expert navigation to Scenic World and the Three Sisters, avoiding the tourist bus crowds.", icon: <Camera size={28} color="#f59e0b" /> },
                            { title: "Wine Tours", desc: "Relaxed day trips to the Hunter Valley wineries. No need for a designated driver.", icon: <Coffee size={28} color="#f59e0b" /> },
                            { title: "Luxury Fleet", desc: "Travel in climate-controlled comfort with leather seating and complimentary water.", icon: <Car size={28} color="#f59e0b" /> },
                            { title: "Fixed Hourly Rate", desc: "Clear pricing with no hidden meter fees. You know exactly what you're paying.", icon: <Shield size={28} color="#f59e0b" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Sydney Usage Rates</h2>
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
                                    { route: "Hourly As Directed (City)", veh: "Luxury Sedan", cap: "Min 3 Hours", price: "$95 - $110 / hr" },
                                    { route: "Hourly As Directed (Group)", veh: "Mercedes V-Class", cap: "Min 4 Hours", price: "$110 - $130 / hr" },
                                    { route: "Blue Mountains Day Tour", veh: "SUV or Van", cap: "8-10 Hours", price: "$950 - $1200" },
                                    { route: "Hunter Valley Wine Tour", veh: "Mercedes V-Class", cap: "10-12 Hours", price: "$1200 - $1500" },
                                    { route: "Dinner Transfer (Wait & Return)", veh: "Premium Sedan", cap: "4 Hours", price: "$400 - $500" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Popular Sightseeing Stops</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Blue Mountains</h3>
                            <p style={{ color: '#4b5563' }}>See the Three Sisters at Echo Point. Visit Scenic World. Stop at Leura village for lunch.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Bondi & Beaches</h3>
                            <p style={{ color: '#4b5563' }}>Cruise past Bondi Beach, Watsons Bay, and stop at The Gap for photos. A classic Sydney coastal drive.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hourly Hire FAQs</h2>
                    <LocationFAQ city="Sydney" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Driver:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Select your <Link href="/the-fleet" className={styles.inlineLink}>luxury car</Link>.
                        Email us to <Link href="/contact-us" className={styles.inlineLink}>plan your tour</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
