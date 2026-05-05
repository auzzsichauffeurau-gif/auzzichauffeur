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
    title: { absolute: "Luxury Private Tours Melbourne | Yarra Valley & Mornington Peninsula | Auzzie Chauffeur" },
    description: "Private winery tours from Melbourne. Chauffeur driven tours to Yarra Valley, Mornington Peninsula, and Great Ocean Road. Custom itineraries.",
};

export default function MelbourneToursPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Melbourne" service="Luxury Tours" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Melbourne Luxury Private Tours"
                    subtitle="Experience the Yarra Valley, Mornington Peninsula, or Great Ocean Road in private luxury. Your itinerary, your pace."
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
                            How much is a private winery tour in Melbourne?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#581c87' }}>
                            A private chauffeur for a <strong>Full Day (8 hours)</strong> Yarra Valley wine tour typically costs between <strong>$750 - $850</strong> for a luxury sedan (up to 4 pax). For larger groups, our <strong>Mercedes V-Class (7 pax)</strong> is available from <strong>$850 - $950</strong>. This includes the vehicle, driver, and fuel. Tasting fees and lunch are separate.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#a21caf', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *We can recommend itineraries including Domaine Chandon and Rochford Wines.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Explore Victoria in Style</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Yarra Valley", desc: "World-class Chardonnay and Pinot Noir just 1 hour from the CBD.", icon: <Wine size={28} color="#86198f" /> },
                            { title: "Great Ocean Road", desc: "See the 12 Apostles in comfort without the stress of driving the winding roads.", icon: <Camera size={28} color="#86198f" /> },
                            { title: "Mornington Peninsula", desc: "Combine coastal views with hot springs and boutique wineries.", icon: <Sun size={28} color="#86198f" /> },
                            { title: "Door-to-Door", desc: "We pick you up from your hotel or home and return you safely after a day of tasting.", icon: <Map size={28} color="#86198f" /> },
                            { title: "Flexible Schedule", desc: "Spend as long as you like at lunch. No rigid bus timetables.", icon: <Clock size={28} color="#86198f" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Melbourne Tour Packages</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#581c87', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Vehicle Type</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: "Yarra Valley Wine Tour", time: "8 Hours", veh: "Sedan / SUV", price: "$750 - $850" },
                                    { dest: "Yarra Valley Group", time: "8 Hours", veh: "Mercedes V-Class", price: "$850 - $950" },
                                    { dest: "Mornington Peninsula", time: "8 Hours", veh: "Sedan / SUV", price: "$780 - $880" },
                                    { dest: "Great Ocean Road", time: "10-12 Hours", veh: "Premium SUV", price: "$1,100 - $1,300" },
                                    { dest: "Phillip Island (Penguins)", time: "8-10 Hours", veh: "Sedan / SUV", price: "$850 - $1,000" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Popular Stops</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Yarra Valley</h3>
                            <p style={{ color: '#4b5563' }}>Famous for Domaine Chandon, Rochford Wines, and the Yarra Valley Chocolaterie. Stunning scenery close to the city.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Mornington</h3>
                            <p style={{ color: '#4b5563' }}>Visit Pt Leo Estate, Jackalope, or relax at the Peninsula Hot Springs. A perfect mix of wine and coast.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Touring FAQs</h2>
                    <LocationFAQ city="Melbourne" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fdf2f8', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#831843', marginBottom: '2rem' }}>Unforgettable Days</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#9d174d' }}>
                        “Our driver Mark was fantastic. He took us to some hidden gems in the Yarra Valley that we never would have found ourselves. The V-Class was pure luxury.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#be185d' }}>— The Thompson Family</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Plan Your Escape:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Choose your <Link href="/the-fleet" className={styles.inlineLink}>touring vehicle</Link>.
                        Email us to <Link href="/contact-us" className={styles.inlineLink}>build your itinerary</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
