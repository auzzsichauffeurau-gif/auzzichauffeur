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
    title: { absolute: "Hourly Chauffeur Adelaide | Barossa Valley & McLaren Vale Wine Tours" },
    description: "Private wine tours in Adelaide. Hire a chauffeur for Barossa Valley, McLaren Vale, or Adelaide Hills winery day trips. Hourly rates.",
};

export default function AdelaideHourlyPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Adelaide" service="Hourly Chauffeur" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Adelaide Private Wine Tours"
                    subtitle="Taste the best of South Australia. Private chauffeur service to the Barossa, McLaren Vale, and Adelaide Hills."
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
                            How much is a private wine tour in Adelaide?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#78350f' }}>
                            We offer flexible <strong>hourly chauffeur hire in Adelaide</strong> from <strong>$95 per hour</strong>. A classic <strong>Barossa Valley day tour</strong> (8 hours) typically costs between <strong>$750 - $900</strong> for a luxury sedan or SUV. <strong>McLaren Vale</strong> is closer to the city, making 6-hour tours accessible from approx <strong>$600</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices cover driver and vehicle only. Tasting fees extra.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>SA Wine Experiences</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Barossa Valley", desc: "Home to Penfolds, Seppeltsfield, and Hentley Farm. Famous for bold Shiraz.", icon: <Coffee size={28} color="#f59e0b" /> },
                            { title: "McLaren Vale", desc: "Where vines meet the sea. Visit d'Arenberg Cube and Wirra Wirra.", icon: <Star size={28} color="#f59e0b" /> },
                            { title: "Adelaide Hills", desc: "Cool climate wines just 20 mins from the CBD. Shaw + Smith and The Lane are highlights.", icon: <Camera size={28} color="#f59e0b" /> },
                            { title: "Hahndorf", desc: "Stop for a German lunch in Australia's oldest surviving German settlement.", icon: <Navigation size={28} color="#f59e0b" /> },
                            { title: "Safe & Responsible", desc: "Indulge in tastings without worry. Your professional driver ensures a safe return.", icon: <Shield size={28} color="#f59e0b" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Adelaide Tour Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1f2937', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Hire Type / Region</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Est. Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Hourly As Directed (Adelaide)", veh: "Exec Sedan", cap: "Min 3 Hours", price: "$95 - $110 / hr" },
                                    { route: "Barossa Valley Tour", veh: "Luxury Sedan", cap: "8 Hours", price: "$750 - $850" },
                                    { route: "McLaren Vale Tour", veh: "Mercedes V-Class", cap: "6-7 Hours", price: "$700 - $850" },
                                    { route: "Adelaide Hills & Hahndorf", veh: "SUV", cap: "5-6 Hours", price: "$550 - $700" },
                                    { route: "Clare Valley Day Trip", veh: "Premium Sedan", cap: "10 Hours", price: "$950 - $1100" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>World-Class Wine Regions</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Barossa Valley</h3>
                            <p style={{ color: '#4b5563' }}>Home to some of the world's oldest Shiraz vines. A must-visit for red wine lovers.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>McLaren Vale</h3>
                            <p style={{ color: '#4b5563' }}>Offers a spectacular mix of rolling vineyards and coastal views. Great for Grenache and Cabernet.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Wine Tour FAQs</h2>
                    <LocationFAQ city="Adelaide" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Tour:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check our <Link href="/the-fleet" className={styles.inlineLink}>vehicle range</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>custom quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
