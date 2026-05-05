import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Ship, Clock, MapPin, Luggage, Users, Anchor, CheckCircle, Car } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Cruise Ship Transfers Cairns | Trinity Wharf Terminal | Auzzie Chauffeur" },
    description: "Tropical cruise transfers in Cairns. Reliable chauffeur service from Cairns Airport to the Cruise Liner Terminal. Cool, air-conditioned vans.",
};

export default function CairnsCruisePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Cairns & Port Douglas" service="Cruise Ship Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Cairns Cruise Ship Transfers"
                    subtitle="Start your tropical cruise in comfort. Private transfers from Cairns Airport to Trinity Wharf Cruise Terminal."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#eff6ff', padding: '3rem 1rem', borderBottom: '3px solid #3b82f6' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '50%', color: '#3b82f6', flexShrink: 0 }}>
                        <Anchor size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>
                            How much is a transfer to Cairns Cruise Terminal?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            A private transfer from <strong>Cairns Airport (CNS) to the Cruise Liner Terminal</strong> at Trinity Wharf takes about 15 minutes and costs between <strong>$55 - $80</strong> for a luxury sedan. For families with luggage, our <strong>Mercedes V-Class vans</strong> typically range from <strong>$85 - $120</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Guaranteed air-conditioning to beat the tropical heat.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Cruise The Reef</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Climate Control", desc: "Our vehicles are pre-cooled before pickup, essential in the NQ humidity.", icon: <Car size={28} color="#3b82f6" /> },
                            { title: "Terminal Door", desc: "We drop you right at the Trinity Wharf terminal entrance.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Luggage", desc: "Space for all your cruise bags, snorkelling gear, and souvenirs.", icon: <Luggage size={28} color="#3b82f6" /> },
                            { title: "Meet & Greet", desc: "Your driver meets you inside the Cairns Airport terminal with a name sign.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Port Douglas", desc: "Transfers also available for ships anchoring off Port Douglas.", icon: <Ship size={28} color="#3b82f6" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e0f2fe', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e3a8a' }}>{item.title}</h3>
                                    <p style={{ color: '#475569', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Routes Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Cairns Cruise Transfers</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route</th>
                                    <th style={{ padding: '1rem' }}>Time</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Cairns Airport -> Trinity Wharf", time: "15 Mins", veh: "Sedan / Van", price: "$55 - $120" },
                                    { route: "Palm Cove -> Cruise Terminal", time: "35 Mins", veh: "Sedan / Van", price: "$90 - $140" },
                                    { route: "Port Douglas -> Cairns Wharf", time: "60 Mins", veh: "Sedan / Van", price: "$180 - $240" },
                                    { route: "Terminal -> Kuranda Skyrail", time: "20 Mins", veh: "Van (Groups)", price: "Enquire" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.time}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#3b82f6', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Terminals Info */}
                <div style={{ marginBottom: '5rem', background: '#f0f9ff', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>About The Terminal</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Cairns Cruise Liner Terminal (CCLT)</h3>
                            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>Located at Trinity Wharf on the main Inlet. A beautifully restored heritage wharf that is a short walk to the Esplanade, though difficult with luggage in the heat. It accommodates mid-sized cruise ships, with larger megaships anchoring offshore at Yorkleys Knob (tender required).</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Cairns Port FAQs</h2>
                    <LocationFAQ city="Cairns & Port Douglas" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Tropical Service</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “The air-con in the van was a lifesaver! Our driver was waiting right as we walked out of the terminal.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— Ben from Melbourne</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Reserve Your Ride:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Browse our <Link href="/the-fleet" className={styles.inlineLink}>transport options</Link>.
                        Book via our <Link href="/contact-us" className={styles.inlineLink}>enquiry form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
