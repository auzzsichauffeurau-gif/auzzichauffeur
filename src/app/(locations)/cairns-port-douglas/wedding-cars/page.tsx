import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Heart, Camera, Clock, Gift, Map, Shield, CheckCircle, Calculator, UserCheck, Calendar, Gem } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Wedding Cars Cairns & Port Douglas | Tropical Destination Weddings | Auzzie Chauffeur" },
    description: "Dream wedding transport in Cairns and Port Douglas. Luxury cars for tropical weddings at Palm Cove, The Daintree, and the Great Barrier Reef.",
};

export default function CairnsWeddingPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Cairns & Port Douglas" service="Wedding Cars" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Cairns & Port Douglas Wedding Cars"
                    subtitle="Your tropical dream day. Luxury air-conditioned transfers for weddings in Cairns, Palm Cove, and Port Douglas."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#fff1f2', padding: '3rem 1rem', borderBottom: '3px solid #e11d48' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#ffe4e6', padding: '1rem', borderRadius: '50%', color: '#e11d48', flexShrink: 0 }}>
                        <Calculator size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#881337', marginBottom: '0.5rem' }}>
                            How much is wedding car hire in Cairns?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4c0519' }}>
                            Wedding car hire in Cairns and Port Douglas starts from <strong>$280 - $400</strong> for local transfers. Full-day packages involving travel between Cairns and Port Douglas via the Captain Cook Highway generally range from <strong>$800 - $1,200</strong>. We specialize in transporting bridal parties and guests for destination weddings.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#9f1239', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Air-conditioning is guaranteed in all our tropical wedding vehicles.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tropical Wedding Specialists</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Cool Comfort", desc: "Our premium air-conditioning ensures you arrive fresh, not flustered by the humidity.", icon: <Shield size={28} color="#e11d48" /> },
                            { title: "Scenic Photos", desc: "We know the best lookouts on the coastal drive for spectacular wedding photos.", icon: <Camera size={28} color="#e11d48" /> },
                            { title: "Guest Transport", desc: "Large vans available to move guests between resorts and the ceremony venue.", icon: <UserCheck size={28} color="#e11d48" /> },
                            { title: "White Ribbons", desc: "Elegant white ribbons to distinguish your bridal car.", icon: <Heart size={28} color="#e11d48" /> },
                            { title: "Refreshments", desc: "Chilled water and sparkling wine to celebrate in the tropics.", icon: <Gift size={28} color="#e11d48" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f3f4f6', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>{item.title}</h3>
                                    <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Wedding Packages */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Port Douglas Wedding Packages</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Package</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Features</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Chapel Transfer", time: "2 Hours", desc: "St Mary's by the Sea pickup & drop.", price: "$280 - $400" },
                                    { name: "Palm Cove Special", time: "4 Hours", desc: "Ceremony + Photos on beach.", price: "$600 - $800" },
                                    { name: "Coastal Convoy", time: "Full Day", desc: "Cairns <-> Port Douglas movement.", price: "$900 - $1,200" },
                                    { name: "Rainforest Retreat", time: "5 Hours", desc: "Travel to Silky Oaks Lodge/Daintree.", price: "$850+" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{row.name}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.time}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.desc}</td>
                                        <td style={{ padding: '1.25rem', color: '#e11d48', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Popular Venues */}
                <div style={{ marginBottom: '5rem', background: '#f8fafc', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Tropical Venues We Serve</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "St Mary's by the Sea (Port Douglas)", "Sheraton Grand Mirage", "Nu Nu Palm Cove",
                            "Alamanda Palm Cove", "Crystalbrook Riley", "The Reef Hotel Casino",
                            "Sugar Wharf Port Douglas", "Silky Oaks Lodge", "Pullman Sea Temple"
                        ].map((venue, idx) => (
                            <span key={idx} style={{ background: 'white', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '999px', color: '#334155', fontWeight: '500' }}>
                                📍 {venue}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Tropical Wedding FAQs</h2>
                    <LocationFAQ city="Cairns & Port Douglas" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fff1f2', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#881337', marginBottom: '2rem' }}>Destination: Married</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#4c0519' }}>
                        “The best decision we made for our Palm Cove wedding. The cars were so cool inside, totally saved us from the heat!”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#e11d48' }}>— Chloe & Ryan, married at Alamanda Chapel</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Start Planning:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check our <Link href="/the-fleet" className={styles.inlineLink}>vehicle options</Link>.
                        Book via our <Link href="/contact-us" className={styles.inlineLink}>enquiry form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
