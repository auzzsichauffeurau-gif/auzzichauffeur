import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Wine, Map, Sun, Camera, Users, Clock, Navigation, CheckCircle } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Luxury Private Tours Perth | Margaret River & Swan Valley | Auzzie Chauffeur" },
    description: "Discover WA's wine regions in style. Private chauffeur tours to Swan Valley, Margaret River, and The Pinnacles. Flexible day trips from Perth.",
};

export default function PerthToursPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Perth" service="Luxury Tours" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Perth Private Tours & Day Trips"
                    subtitle="From the Swan Valley to Margaret River. Experience Western Australia's vast landscapes in the comfort of a luxury sedan."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#fcf4ff', padding: '3rem 1rem', borderBottom: '3px solid #86198f' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#fae8ff', padding: '1rem', borderRadius: '50%', color: '#86198f', flexShrink: 0 }}>
                        <Wine size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#581c87', marginBottom: '0.5rem' }}>
                            Private tour prices in Perth and WA?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#581c87' }}>
                            A 5-hour private tour of the <strong>Swan Valley</strong> from Perth CBD starts from <strong>$450 - $550</strong> for a luxury sedan. Full-day trips to <strong>The Pinnacles</strong> or longer Swan Valley itineraries (8 hours) range from <strong>$750 - $900</strong>. Multi-day transfers to <strong>Margaret River</strong> (approx 3 hours each way) can be quoted as a custom itinerary.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#a21caf', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *We can include stops at Caversham Wildlife Park or the Chocolate Factory.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>WA's Best Destinations</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Swan Valley", desc: "Perth's valley of taste. Wineries, breweries, and distilleries just 25 mins away.", icon: <Wine size={28} color="#86198f" /> },
                            { title: "Margaret River", desc: "World-famous Cabernet and surf breaks. Best experienced as a multi-day trip.", icon: <Sun size={28} color="#86198f" /> },
                            { title: "The Pinnacles", desc: "Visit the eerie Nambung National Park desert sculptures on a coastal day drive.", icon: <Camera size={28} color="#86198f" /> },
                            { title: "Fremantle", desc: "Explore the historic port city, markets, and maritime museum at your leisure.", icon: <Map size={28} color="#86198f" /> },
                            { title: "Comfort Class", desc: "WA distances are huge. Travel in a noise-insulated, air-conditioned luxury car.", icon: <CheckCircle size={28} color="#86198f" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f5d0fe', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#581c87' }}>{item.title}</h3>
                                    <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Itineraries Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Tour Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#581c87', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination / Tour</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: "Swan Valley Half Day", time: "5 Hours", veh: "Sedan / SUV", price: "$450 - $550" },
                                    { dest: "Swan Valley Full Day", time: "8 Hours", veh: "Sedan / SUV", price: "$750 - $850" },
                                    { dest: "Pinnacles Day Trip", time: "9-10 Hours", veh: "Luxury SUV", price: "$900 - $1,100" },
                                    { dest: "Margaret River Transfer", time: "One Way (3.5h)", veh: "Sedan / SUV", price: "$650 - $750" },
                                    { dest: "Group Winery Tour", time: "8 Hours", veh: "V-Class (7 Pax)", price: "$850 - $950" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{row.dest}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.time}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#86198f', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Region Info */}
                <div style={{ marginBottom: '5rem', background: '#fcf4ff', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Local Favourites</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Sandalford Wines</h3>
                            <p style={{ color: '#4b5563' }}>One of the Swan Valley's oldest and most prestigious estates. Excellent lunch and cellar door.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Cottesloe Beach</h3>
                            <p style={{ color: '#4b5563' }}>End your tour with a sunset view at Perth's most iconic beach, watching the sun dip into the Indian Ocean.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>WA Touring FAQs</h2>
                    <LocationFAQ city="Perth" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fdf2f8', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#831843', marginBottom: '2rem' }}>Memorable Journeys</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#9d174d' }}>
                        “Driving to Margaret River is tiring. Getting chauffered there in an Audi A8 was absolute bliss. Worth every cent.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#be185d' }}>— David & Sarah, UK</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Travel in Comfort:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        See our <Link href="/the-fleet" className={styles.inlineLink}>touring vehicles</Link>.
                        Email us to <Link href="/contact-us" className={styles.inlineLink}>plan your trip</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
