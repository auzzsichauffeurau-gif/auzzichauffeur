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
    title: { absolute: "Hourly Chauffeur Perth | Swan Valley Wine Tours | Margaret River Day Trips" },
    description: "Hire a private driver in Perth. Hourly chauffeur for Swan Valley wine tours, Margaret River day trips, and Fremantle sightseeing.",
};

export default function PerthHourlyPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Perth" service="Hourly Chauffeur" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Perth Private Wine Tours & Drivers"
                    subtitle="Experience the Swan Valley or journey to Margaret River in luxury. Your itinerary, your pace."
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
                            Cost of a private driver in Perth?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#78350f' }}>
                            <strong>Hourly chauffeur hire in Perth</strong> starts from <strong>$100 - $125 per hour</strong> for premium sedans. A 6-hour <strong>Swan Valley wine tour</strong> typically ranges from <strong>$600 - $750</strong> depending on the vehicle. Full-day trips to <strong>Margaret River</strong> (12+ hours) are quoted as a comprehensive package starting above <strong>$1400</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Margaret River is a 3-hour drive each way from Perth CBD.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>West Coast Experiences</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Swan Valley", desc: "Just 25 mins from the city. Enjoy tastings at Sandalford, Mandoon Estate, and localized cheese factories.", icon: <Coffee size={28} color="#f59e0b" /> },
                            { title: "Margaret River", desc: "A world-class wine region. Perfect for a long day trip or a multi-day overnight excursion.", icon: <Star size={28} color="#f59e0b" /> },
                            { title: "Fremantle", desc: "Explore the Maritime Museum and cappuccino strip. We can wait while you enjoy a seafood lunch.", icon: <Camera size={28} color="#f59e0b" /> },
                            { title: "The Pinnacles", desc: "A scenic coastal drive north to the Nambung National Park desert formations.", icon: <Navigation size={28} color="#f59e0b" /> },
                            { title: "Luxury Comfort", desc: "Our vehicles are perfect for long drives, offering smooth rides and plenty of legroom.", icon: <Car size={28} color="#f59e0b" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Hire Rates</h2>
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
                                    { route: "Hourly As Directed (Perth)", veh: "Luxury Sedan", cap: "Min 3 Hours", price: "$100 - $125 / hr" },
                                    { route: "Swan Valley Wine Tour", veh: "Mercedes V-Class", cap: "6 Hours", price: "$700 - $800" },
                                    { route: "Margaret River Day Trip", veh: "Luxury SUV", cap: "12 Hours", price: "$1400 - $1600" },
                                    { route: "Pinnacles Desert Tour", veh: "People Mover", cap: "8-10 Hours", price: "$1000 - $1200" },
                                    { route: "Fremantle Dinner (Wait & Return)", veh: "Premium Sedan", cap: "5 Hours", price: "$500 - $600" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Tour Highlights</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Swan Valley</h3>
                            <p style={{ color: '#4b5563' }}>Western Australia's oldest wine region. Famous for Chenin Blanc, Verdelho, and fortified wines.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Margaret River</h3>
                            <p style={{ color: '#4b5563' }}>Internationally renovated for Cabernet Sauvignon and Chardonnay. Pristine beaches and tall timber forests.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Touring FAQs</h2>
                    <LocationFAQ city="Perth" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Plan Your Trip:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Browse our <Link href="/the-fleet" className={styles.inlineLink}>luxury cars</Link>.
                        Email us for a <Link href="/contact-us" className={styles.inlineLink}>tour proposal</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
