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
    title: { absolute: "Cruise Ship Transfers Hobart | Macquarie Wharf & Airport | Auzzie Chauffeur" },
    description: "Personalized cruise transfers in Hobart. Chauffeur service from Hobart Airport to Macquarie Wharf Cruise Terminal. Reliable, friendly, and fixed price.",
};

export default function HobartCruisePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Hobart" service="Cruise Ship Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hobart Cruise Ship Transfers"
                    subtitle="Arrive in style at Macquarie Wharf. Seamless transfers from Hobart Airport or your accommodation to your cruise ship."
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
                            How much is a transfer to Macquarie Wharf?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            A private transfer from <strong>Hobart Airport (HBA) to the Macquarie Wharf Cruise Terminal</strong> typically costs between <strong>$75 - $100</strong> for a luxury sedan. For families or groups with larger luggage requirements, our vans range from <strong>$110 - $140</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Macquarie Wharf is centrally located, but airport transport is essential.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Hobart's Cruise Connection</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Direct to Ship", desc: "No need to drag bags from the airport bus. We drop you right at the terminal door.", icon: <CheckCircle size={28} color="#3b82f6" /> },
                            { title: "Family Vans", desc: "Plenty of room for the whole family and all your cruise gear.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Airport Meet", desc: "Your driver will be waiting in the arrivals hall to help with your luggage.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Day Tours", desc: "Have a few hours before boarding? Book a mini-tour of Richmond or MONA.", icon: <Car size={28} color="#3b82f6" /> },
                            { title: "Punctual", desc: "We track your flight to ensure we are there when you land, regardless of delays.", icon: <Clock size={28} color="#3b82f6" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Macquarie Wharf Transfers</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route</th>
                                    <th style={{ padding: '1rem' }}>Travel Time</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Hobart Airport -> Macquarie Wharf", time: "20 Mins", veh: "Sedan / Van", price: "$75 - $140" },
                                    { route: "City Hotel -> Cruise Terminal", time: "5-10 Mins", veh: "Sedan / Van", price: "$50 - $80" },
                                    { route: "Macquarie Wharf -> MONA", time: "25 Mins", veh: "Sedan / Van", price: "$85 - $120" },
                                    { route: "Terminal -> Richmond (Tour)", time: "30 Mins", veh: "Hourly Hire", price: "Enquire" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Macquarie Wharf Information</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Macquarie Wharf (MAC 02)</h3>
                            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>Located on the Hobart waterfront, just a short distance from Salamanca Place and the CBD. It is the primary berth for visiting cruise ships and the home of the RSV Nuyina icebreaker.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hobart Port FAQs</h2>
                    <LocationFAQ city="Hobart" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Warm Welcome</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “Our driver Mark was fantastic. He gave us a mini-tour of the waterfront on the way from the airport to our ship.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— Linda T., cruising on Celebrity Solstice</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Reserve Your Car:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Check out our <Link href="/the-fleet" className={styles.inlineLink}>luxury sedans</Link>.
                        Book via our <Link href="/contact-us" className={styles.inlineLink}>online form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
