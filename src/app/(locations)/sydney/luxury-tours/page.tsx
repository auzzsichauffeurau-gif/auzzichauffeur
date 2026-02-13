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
    title: { absolute: "Luxury Private Tours Sydney | Hunter Valley & Blue Mountains | Auzzie Chauffeur" },
    description: "Private chauffeur tours from Sydney. Explore the Hunter Valley wine region or Blue Mountains in luxury sedans and people movers. Tailored day trips.",
};

export default function SydneyToursPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Sydney" service="Luxury Tours" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Sydney Luxury Private Tours"
                    subtitle="Escape the city. Private day trips to the Hunter Valley, Blue Mountains, or Southern Highlands in executive comfort."
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
                            Cost of private chauffeur tours in Sydney?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#581c87' }}>
                            A full-day (10-12 hour) private tour to the <strong>Hunter Valley</strong> from Sydney typically costs between <strong>$1,100 - $1,300</strong> due to the travel distance. For the <strong>Blue Mountains</strong> (8-10 hours), prices range from <strong>$850 - $1,000</strong> for a luxury sedan. This covers the dedicated chauffeur and vehicle for the entire day.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#a21caf', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *We can suggest lunch stops at Muse Kitchen or Echoes Restaurant.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Discover NSW with Us</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Hunter Valley", desc: "Sample Semillon and Shiraz in Australia's oldest wine region.", icon: <Wine size={28} color="#86198f" /> },
                            { title: "Blue Mountains", desc: "Visit the Three Sisters and Scenic World without the tourist crowds.", icon: <Camera size={28} color="#86198f" /> },
                            { title: "Southern Highlands", desc: "Explore Bowral, Berrima, and cool-climate wines.", icon: <Map size={28} color="#86198f" /> },
                            { title: "South Coast", desc: "Drive the Sea Cliff Bridge to Wollongong and Kiama.", icon: <Sun size={28} color="#86198f" /> },
                            { title: "Freedom to Roam", desc: "It's your private car. Stop for coffee, photos, or shopping whenever you wish.", icon: <Navigation size={28} color="#86198f" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Sydney Tour Packages</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#581c87', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Tour Destination</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: "Hunter Valley (Pokolbin)", time: "10-12 Hrs", veh: "Sedan / SUV", price: "$1,100 - $1,300" },
                                    { dest: "Blue Mountains", time: "8-10 Hrs", veh: "Sedan / SUV", price: "$850 - $1,050" },
                                    { dest: "Southern Highlands", time: "8-10 Hrs", veh: "Sedan / SUV", price: "$850 - $1,000" },
                                    { dest: "Sydney City Sights", time: "4 Hrs", veh: "Sedan", price: "$380 - $450" },
                                    { dest: "Small Group Hunter", time: "10-12 Hrs", veh: "V-Class (7 Pax)", price: "$1,300 - $1,500" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Iconic Stops</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Hunter Valley</h3>
                            <p style={{ color: '#4b5563' }}>Visit Brokenwood, Tyrrell's, or McGuigan Wines. Enjoy the Hunter Valley Gardens or a long lunch.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Blue Mountains</h3>
                            <p style={{ color: '#4b5563' }}>See the Three Sisters at Echo Point, ride the Scenic Railway, and explore Leura Mall's boutiques.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Day Trip FAQs</h2>
                    <LocationFAQ city="Sydney" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fdf2f8', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#831843', marginBottom: '2rem' }}>Perfect Day Out</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#9d174d' }}>
                        “We hired the Mercedes V-Class for a girls' trip to the Hunter. The driver was so patient with our shopping and singing!”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#be185d' }}>— Emma, Bondi</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Tour:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>luxury fleet</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>tailored quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
