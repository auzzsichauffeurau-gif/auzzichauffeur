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
    title: { absolute: "Luxury Private Tours Brisbane | Tamborine & Sunshine Coast | Auzzie Chauffeur" },
    description: "Private chauffeur tours from Brisbane. Explore Mount Tamborine, Australia Zoo, or the Sunshine Coast Hinterland in air-conditioned luxury. Custom day trips.",
};

export default function BrisbaneToursPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Brisbane" service="Luxury Tours" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Brisbane Luxury Private Tours"
                    subtitle="Discover South East Queensland's hidden gems. Private day trips to Mount Tamborine, the Glass House Mountains, and Byron Bay."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#fcf4ff', padding: '3rem 1rem', borderBottom: '3px solid #86198f' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#fae8ff', padding: '1rem', borderRadius: '50%', color: '#86198f', flexShrink: 0 }}>
                        <Camera size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#581c87', marginBottom: '0.5rem' }}>
                            Private tour pricing in Brisbane?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#581c87' }}>
                            A popular 6-hour private tour to <strong>Mt Tamborine</strong> from Brisbane costs between <strong>$600 - $750</strong> for a luxury sedan (prices include driver & fuel). A full-day trip to <strong>Australia Zoo</strong> (Sunshine Coast) or <strong>Byron Bay</strong> (approx 8-9 hours) generally ranges from <strong>$800 - $950</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#a21caf', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Also offering transfers to the Gold Coast theme parks.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Explore SEQ</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Mt Tamborine", desc: "Rainforest skywalks, gallery walk shopping, and wineries just 1 hour from the city.", icon: <Wine size={28} color="#86198f" /> },
                            { title: "Australia Zoo", desc: "Visit the home of the Crocodile Hunter in Beerwah. A must for international guests.", icon: <Camera size={28} color="#86198f" /> },
                            { title: "Sunshine Coast", desc: "Noosa Heads or the Glass House Mountains. Enjoy the drive north.", icon: <Sun size={28} color="#86198f" /> },
                            { title: "Byron Bay", desc: "Cross the border into Northern NSW for a day of beach vibes and lighthouse walks.", icon: <Map size={28} color="#86198f" /> },
                            { title: "Air-Conditioned", desc: "Queensland gets hot. Retreat to your climate-controlled private car between stops.", icon: <CheckCircle size={28} color="#86198f" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Tour Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#581c87', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: "Mt Tamborine Tour", time: "6 Hours", veh: "Sedan / SUV", price: "$600 - $750" },
                                    { dest: "Australia Zoo Return", time: "8 Hours", veh: "Sedan / SUV", price: "$800 - $900" },
                                    { dest: "Byron Bay Day Trip", time: "9 Hours", veh: "Sedan / SUV", price: "$850 - $1,000" },
                                    { dest: "Sunshine Coast Hinterland", time: "8 Hours", veh: "Luxury SUV", price: "$800 - $950" },
                                    { dest: "Brisbane City Sights", time: "4 Hours", veh: "Sedan", price: "$380 - $450" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Top Spots</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>South Bank</h3>
                            <p style={{ color: '#4b5563' }}>Start your city tour at the man-made beach and cultural precinct, then head up to Mt Coot-tha for the view.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Maleny & Montville</h3>
                            <p style={{ color: '#4b5563' }}>Charming mountain villages in the Sunshine Coast Hinterland with spectacular views of the Glass House Mountains.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Tour FAQs</h2>
                    <LocationFAQ city="Brisbane" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fdf2f8', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#831843', marginBottom: '2rem' }}>Great Day Out</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#9d174d' }}>
                        “Taking the kids to Australia Zoo was made so much easier by having a private driver. No tired driving back to Brisbane for us!”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#be185d' }}>— The Wilson Family</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Plan Your Adventure:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check our <Link href="/the-fleet" className={styles.inlineLink}>family-friendly fleet</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>tour quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
