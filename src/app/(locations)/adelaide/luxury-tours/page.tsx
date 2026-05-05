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
    title: { absolute: "Luxury Private Tours Adelaide | Barossa Valley & McLaren Vale | Auzzie Chauffeur" },
    description: "Private winery tours from Adelaide CBD. Discover the Barossa, McLaren Vale, and Adelaide Hills in a luxury chauffeured vehicle. Custom wine tours.",
};

export default function AdelaideToursPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Adelaide" service="Luxury Tours" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Adelaide Wine Tours & Private Drivers"
                    subtitle="Explore South Australia's world-famous wine regions. Private transfers to Penfolds, Jacobs Creek, and d'Arenberg Cube."
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
                            Cost of private wine tours in Adelaide?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#581c87' }}>
                            A full-day (8 hour) private tour of the <strong>Barossa Valley</strong> or <strong>McLaren Vale</strong> from Adelaide CBD typically costs between <strong>$720 - $850</strong> for a luxury sedan (up to 4 passengers). This provides you with a dedicated driver for the day. For groups of up to 7, our premium <strong>V-Class cost is $850 - $950</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#a21caf', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Fully customizable itineraries. We drive, you taste.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>The Wine Capital</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Barossa Valley", desc: "Home to the world's oldest Shiraz vines. Visit Seppeltsfield and Rockford.", icon: <Wine size={28} color="#86198f" /> },
                            { title: "McLaren Vale", desc: "Where vines meet the sea. Famous for Grenache and the d'Arenberg Cube.", icon: <Sun size={28} color="#86198f" /> },
                            { title: "Adelaide Hills", desc: "Cool climate wines and German heritage in Hahndorf, just 30 mins from CBD.", icon: <Map size={28} color="#86198f" /> },
                            { title: "Clare Valley", desc: "For Riesling lovers. A longer drive but worth the journey.", icon: <Navigation size={28} color="#86198f" /> },
                            { title: "Safety First", desc: "Enjoy the tastings without worrying about RBTs. We ensure you get home safely.", icon: <CheckCircle size={28} color="#86198f" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>SA Wine Tour Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#581c87', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination</th>
                                    <th style={{ padding: '1rem' }}>Hire Time</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: "Barossa Valley Day Trip", time: "8 Hours", veh: "Sedan / SUV", price: "$720 - $850" },
                                    { dest: "McLaren Vale Experience", time: "7 Hours", veh: "Sedan / SUV", price: "$650 - $780" },
                                    { dest: "Adelaide Hills & Hahndorf", time: "5 Hours", veh: "Sedan / SUV", price: "$480 - $600" },
                                    { dest: "Clare Valley Tour", time: "10 Hours", veh: "Luxury SUV", price: "$950 - $1,100" },
                                    { dest: "Regional Group Tour", time: "8 Hours", veh: "V-Class (7 Pax)", price: "$850 - $950" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Must-Visit Cellar Doors</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Penfolds Magill Estate</h3>
                            <p style={{ color: '#4b5563' }}>Just 15 minutes from the CBD. Taste the legendary Grange in the original winery.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>d'Arenberg Cube</h3>
                            <p style={{ color: '#4b5563' }}>An architectural wonder in McLaren Vale. A multi-sensory wine experience like no other.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>SA Tour FAQs</h2>
                    <LocationFAQ city="Adelaide" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fdf2f8', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#831843', marginBottom: '2rem' }}>A Grand Day Out</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#9d174d' }}>
                        “Our driver tailored the Barossa tour perfectly for us, avoiding the big bus crowds and taking us to boutique wineries.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#be185d' }}>— Alison, Brisbane</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Plan Your Tasting:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Browse our <Link href="/the-fleet" className={styles.inlineLink}>luxury fleet</Link>.
                        Get a quote for your <Link href="/contact-us" className={styles.inlineLink}>wine tour</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
