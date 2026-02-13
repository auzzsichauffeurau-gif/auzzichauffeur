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
    title: { absolute: "Hourly Chauffeur Hobart | Private Tours Port Arthur & MONA" },
    description: "Hire a private driver in Tasmania. Hourly chauffeur service for day trips to Port Arthur, MONA, Richmond, and Mount Wellington.",
};

export default function HobartHourlyPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Hobart" service="Hourly Chauffeur" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hobart Private Driver & Sightseeing"
                    subtitle="Discover Tasmania's history and natural beauty. From Port Arthur to Mt Wellington, explore in comfort."
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
                            Cost for a private tour in Hobart?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#78350f' }}>
                            <strong>Hourly chauffeur hire in Hobart</strong> starts from <strong>$85 - $100 per hour</strong>. A full-day return trip to the historic <strong>Port Arthur</strong> site (approx 8 hours) typically costs between <strong>$650 - $850</strong>. Short trips to <strong>MONA</strong> or the summit of <strong>Mount Wellington</strong> are available on an hourly basis (min 2-3 hours).
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *We can also arrange transfers to Bruny Island ferry (Kettering).
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tasmanian Highlights</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Port Arthur", desc: "A scenic 90-minute drive to Australia's most significant convict site.", icon: <Star size={28} color="#f59e0b" /> },
                            { title: "MONA", desc: "Visit the Museum of Old and New Art in Berriedale. We offer door-to-door service.", icon: <Camera size={28} color="#f59e0b" /> },
                            { title: "Richmond", desc: "See Australia's oldest bridge and explore the quaint village of Richmond.", icon: <Coffee size={28} color="#f59e0b" /> },
                            { title: "Mt Wellington", desc: "Drive to the summit of kunanyi / Mount Wellington for panoramic views of Hobart.", icon: <MapPin size={28} color="#f59e0b" /> },
                            { title: "Salamanca", desc: "Drop-off right at the market on Saturdays or for dinner at the waterfront.", icon: <Navigation size={28} color="#f59e0b" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hobart Tour Rates</h2>
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
                                    { route: "Hourly As Directed (Hobart)", veh: "Exec Sedan", cap: "Min 2 Hours", price: "$85 - $100 / hr" },
                                    { route: "Port Arthur Day Trip", veh: "Mercedes V-Class", cap: "8 Hours", price: "$750 - $850" },
                                    { route: "Richmond & Bonorong Wildlife", veh: "Luxury Sedan", cap: "4 Hours", price: "$400 - $500" },
                                    { route: "Mt Wellington Summit (Quick)", veh: "SUV", cap: "2 Hours", price: "$200 - $250" },
                                    { route: "MONA Transfer (Wait & Return)", veh: "People Mover", cap: "4 Hours", price: "$350 - $450" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>History & Art</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Port Arthur</h3>
                            <p style={{ color: '#4b5563' }}>Walk amongst the ruins of the penal settlement. A sombre but essential Tasmanian experience.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>MONA</h3>
                            <p style={{ color: '#4b5563' }}>David Walsh's subterranean museum. Expect the unexpected. We drop you right at the entrance.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Tasmania Tour FAQs</h2>
                    <LocationFAQ city="Hobart" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Start Exploring:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check our <Link href="/the-fleet" className={styles.inlineLink}>vehicle rates</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>custom proposal</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
