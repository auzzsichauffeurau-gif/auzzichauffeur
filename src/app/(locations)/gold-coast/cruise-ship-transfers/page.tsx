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
    title: { absolute: "Cruise Ship Transfers Gold Coast | To Brisbane Cruise Terminal | Auzzie Chauffeur" },
    description: "Reliable transfers from Gold Coast to Brisbane International Cruise Terminal. Private chauffeur service from Surfers Paradise, Broadbeach, or Coolangatta.",
};

export default function GoldCoastCruisePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Gold Coast" service="Cruise Ship Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Gold Coast Cruise Transfers"
                    subtitle="Seamless connection to Brisbane International Cruise Terminal. Door-to-terminal service for you and your luggage."
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
                            How much is a transfer from Gold Coast to Brisbane Cruise Terminal?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            A private transfer from <strong>Surfers Paradise to Brisbane International Cruise Terminal (Luggage Point)</strong> typically costs between <strong>$220 - $260</strong> for a luxury sedan. For families needing a <strong>Mercedes V-Class van</strong> (up to 7 passengers + luggage), the rate is generally <strong>$280 - $320</strong>. The journey takes approximately 75-90 minutes.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *We also service transfers from Byron Bay to the Brisbane Cruise Terminal.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>The Stress-Free Start</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Direct Service", desc: "No trains, no shuttle buses. We pick you up from your front door and drop you at the ship.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Luggage Capacity", desc: "Cruise holidays mean big bags. Our vans have ample space for all your suitcases.", icon: <Luggage size={28} color="#3b82f6" /> },
                            { title: "Fixed Price", desc: "The cost is locked in. No ticking meter while you sit in M1 traffic.", icon: <CheckCircle size={28} color="#3b82f6" /> },
                            { title: "Family Friendly", desc: "Child seats available on request for the drive up the highway.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Reliability", desc: "We know the M1 conditions and plan departure times to ensure you board safely.", icon: <Clock size={28} color="#3b82f6" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Cruise Transfer Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Pickup Location</th>
                                    <th style={{ padding: '1rem' }}>Destination</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { loc: "Surfers Paradise / Broadbeach", dest: "Brisbane Cruise Terminal", veh: "Sedan / Van", price: "$220 - $320" },
                                    { loc: "Southport / Hope Island", dest: "Brisbane Cruise Terminal", veh: "Sedan / Van", price: "$190 - $280" },
                                    { loc: "Burleigh Heads / Palm Beach", dest: "Brisbane Cruise Terminal", veh: "Sedan / Van", price: "$240 - $340" },
                                    { loc: "Coolangatta Airport (OOL)", dest: "Brisbane Cruise Terminal", veh: "Van / SUV", price: "$260 - $360" },
                                    { loc: "Byron Bay", dest: "Brisbane Cruise Terminal", veh: "Luxury Sedan", price: "$350 - $450" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>{row.loc}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.dest}</td>
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Terminal Information</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Brisbane International Cruise Terminal</h3>
                            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>Located at Luggage Point (Pinkenba), this is the primary port for large ships (Royal Caribbean, Carnival, Disney). It is approximately 80km north of the Gold Coast.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Gold Coast Transfers FAQs</h2>
                    <LocationFAQ city="Gold Coast" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Holiday Mode: On</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “Taking the family van from our home in Robina to the ship was so much easier than the shuttle. We stopped for coffee on the way and arrived relaxed.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— The Anderson Family</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Start Your Cruise:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Select your <Link href="/the-fleet" className={styles.inlineLink}>transfer vehicle</Link>.
                        Get a quote via our <Link href="/contact-us" className={styles.inlineLink}>contact form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
