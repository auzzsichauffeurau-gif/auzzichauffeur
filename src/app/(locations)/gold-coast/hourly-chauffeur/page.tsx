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
    title: { absolute: "Hourly Chauffeur Gold Coast | Private Tours & Theme Park Transfers" },
    description: "Hire a private driver on the Gold Coast. Hourly rates for theme park transfers, Byron Bay day trips, and Mount Tamborine tours.",
};

export default function GoldCoastHourlyPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Gold Coast" service="Hourly Chauffeur" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Gold Coast Private Driver & Tours"
                    subtitle="Relax while we drive. From Surfers Paradise to Byron Bay or the Theme Parks, enjoy door-to-door luxury."
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
                            Cost for a private driver on the Gold Coast?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#78350f' }}>
                            <strong>Hourly chauffeur services</strong> on the Gold Coast start from <strong>$90 - $110 per hour</strong>. A return day trip to <strong>Byron Bay</strong> (approx 8 hours total) typically costs between <strong>$750 - $950</strong>. Full-day standby for <strong>Theme Parks</strong> (drop-off, wait, return) ensures you have a car ready the moment you exit the gates.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Also serving transfers to Crystal Castle and The Farm.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Explore the Coast</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Byron Bay", desc: "Cross the border for a day of shopping and beaches at Wategos. We handle the parking.", icon: <Star size={28} color="#f59e0b" /> },
                            { title: "Mt Tamborine", desc: "Escape to the hinterland for wine tasting and rainforest walks.", icon: <Camera size={28} color="#f59e0b" /> },
                            { title: "Theme Parks", desc: "Skip the crowded shuttle buses. Private transfers to Dreamworld, Movie World, and Sea World.", icon: <Navigation size={28} color="#f59e0b" /> },
                            { title: "Shopping Tours", desc: "Visit Pacific Fair or Harbour Town Outlets with plenty of boot space for your purchases.", icon: <Car size={28} color="#f59e0b" /> },
                            { title: "Springbrook", desc: "See the Natural Bridge and waterfalls on a scenic drive through the national park.", icon: <MapPin size={28} color="#f59e0b" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Gold Coast Hire Rates</h2>
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
                                    { route: "Hourly As Directed (GC)", veh: "Exec Sedan", cap: "Min 3 Hours", price: "$90 - $110 / hr" },
                                    { route: "Byron Bay Day Trip", veh: "Mercedes V-Class", cap: "8 Hours", price: "$850 - $950" },
                                    { route: "Mt Tamborine Wine Tour", veh: "Luxury SUV", cap: "6 Hours", price: "$650 - $750" },
                                    { route: "Theme Park Standby (Full Day)", veh: "People Mover", cap: "8 Hours", price: "$750 - $900" },
                                    { route: "Springbrook National Park", veh: "SUV", cap: "5 Hours", price: "$550 - $650" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Top Attractions</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Byron Bay</h3>
                            <p style={{ color: '#4b5563' }}>Iconic lighthouse walks, pristine beaches, and The Farm. A perfect day trip south of the border.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Hinterland</h3>
                            <p style={{ color: '#4b5563' }}>Cool mountain air, waterfalls, and gallery walks. A refreshing change from the beach.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Private Hire FAQs</h2>
                    <LocationFAQ city="Gold Coast" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Reserve Your Ride:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check our <Link href="/the-fleet" className={styles.inlineLink}>vehicle options</Link>.
                        Email us for a <Link href="/contact-us" className={styles.inlineLink}>custom quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
