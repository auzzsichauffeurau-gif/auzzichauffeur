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
    title: { absolute: "Luxury Private Tours Hobart | MONA, Port Arthur & Huon Valley | Auzzie Chauffeur" },
    description: "Private chauffeur tours of Tasmania. Visit MONA, Port Arthur, Richmond, and the Huon Valley in luxury comfort. Custom day trips from Hobart.",
};

export default function HobartToursPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Hobart" service="Luxury Tours" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hobart Luxury Private Tours"
                    subtitle="Explore Tasmania's wild beauty. Private day trips to Port Arthur, Mount Wellington, and the Coal River Valley wine region."
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
                            Private tour pricing in Hobart?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#581c87' }}>
                            A full-day (8 hour) private tour to <strong>Port Arthur</strong> from Hobart typically costs <strong>$750 - $900</strong> for a luxury sedan. This allows ample time for the historic site and stops at the Tasman Arch. Shorter 4-5 hour tours to <strong>MONA</strong> and <strong>Richmond</strong> generally range from <strong>$450 - $600</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#a21caf', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices include vehicle and driver. Entry fees are separate.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tasmanian Discovery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Port Arthur", desc: "A moving journey into Australia's convict past on the Tasman Peninsula.", icon: <Map size={28} color="#86198f" /> },
                            { title: "MONA", desc: "The Museum of Old and New Art. We provide door-to-door transfer so you skip the ferry queue.", icon: <Wine size={28} color="#86198f" /> },
                            { title: "Mt Wellington", desc: "kunanyi / Mount Wellington offers panoramic views over Hobart just 30 mins from CBD.", icon: <Camera size={28} color="#86198f" /> },
                            { title: "Richmond", desc: "Visit Australia's oldest bridge and charming Georgian village.", icon: <Sun size={28} color="#86198f" /> },
                            { title: "Huon Valley", desc: "Apples, cider, and stunning river views south of Hobart.", icon: <Navigation size={28} color="#86198f" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hobart Tour Rates</h2>
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
                                    { dest: "Port Arthur Day Trip", time: "8 Hours", veh: "Sedan / SUV", price: "$750 - $900" },
                                    { dest: "MONA & Richmond", time: "5 Hours", veh: "Sedan / SUV", price: "$450 - $600" },
                                    { dest: "Mt Wellington Sunrise", time: "3 Hours", veh: "Sedan / SUV", price: "$350 - $450" },
                                    { dest: "Huon Valley Taste", time: "7 Hours", veh: "Luxury SUV", price: "$700 - $850" },
                                    { dest: "Group Tour (Port Arthur)", time: "9 Hours", veh: "V-Class (7 Pax)", price: "$950 - $1,100" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Must See</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Salamanca Market</h3>
                            <p style={{ color: '#4b5563' }}>Visit on Saturdays. We can drop you right at the entrance and pick you up with your shopping.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Coal River Valley</h3>
                            <p style={{ color: '#4b5563' }}>Just 20 mins from Hobart. Visit Puddleduck Vineyard or Wicked Cheese Co.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Tasmania FAQs</h2>
                    <LocationFAQ city="Hobart" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fdf2f8', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#831843', marginBottom: '2rem' }}>Best Way to See Tassie</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#9d174d' }}>
                        “We only had one day in Hobart from our cruise. The private tour effectively let us see Port Arthur and Richmond with plenty of time to spare.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#be185d' }}>— The Baker Family, USA</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Driver:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Choose your <Link href="/the-fleet" className={styles.inlineLink}>vehicle</Link>.
                        Ask us about a <Link href="/contact-us" className={styles.inlineLink}>custom itinerary</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
