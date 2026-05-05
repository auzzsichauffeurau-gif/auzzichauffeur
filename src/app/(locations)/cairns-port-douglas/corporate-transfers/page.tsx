import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { FileText, Laptop, ShieldCheck, Clock, Award, Coffee, Briefcase, Calculator, Building2, UserCheck } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Corporate Chauffeur Cairns | Executive Business Transport | Auzzie Chauffeur" },
    description: "Professional corporate transfers in Cairns. Hosting conference delegates, government officials, and business leaders. Reliable airport and hotel transfers.",
};

export default function CairnsCorporatePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Cairns & Port Douglas" service="Corporate Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Cairns Corporate Chauffeur"
                    subtitle="Executive transport for Tropical North Queensland. Serving the Cairns Convention Centre, government departments, and visiting delegations."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#f8fafc', padding: '3rem 1rem', borderBottom: '3px solid #1e40af' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '50%', color: '#1e40af', flexShrink: 0 }}>
                        <Briefcase size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>
                            Why use a corporate chauffeur in Cairns?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155' }}>
                            We specialize in logistics for the <strong>Cairns Convention Centre</strong> and visiting government officials. Our fleet offers <strong>premium air-conditioning</strong> and comfort, ensuring you arrive at your meeting fresh, regardless of the tropical heat. From single executive transfers to <strong>group shuttles</strong> for large conferences, we handle it all.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Familiar with government protocols and security requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tropical Business Experts</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Conference Comfort", desc: "Climate-controlled vehicles perfect for suits in the tropics.", icon: <UserCheck size={28} color="#c5a467" /> },
                            { title: "Convention Centre", desc: "Door-to-door service for speakers and VIP delegates.", icon: <Building2 size={28} color="#1e40af" /> },
                            { title: "Group Logistics", desc: "Access to luxury vans and mini-buses for large teams.", icon: <Briefcase size={28} color="#c5a467" /> },
                            { title: "Monthly Billing", desc: "Simplify your travel expenses with a single monthly corporate account.", icon: <FileText size={28} color="#1e40af" /> },
                            { title: "Local Knowledge", desc: "We know the best dining spots to impress your clients after hours.", icon: <Award size={28} color="#c5a467" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#0f172a' }}>{item.title}</h3>
                                    <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Corporate Services/Rates */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Corporate Services</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#0f172a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Service</th>
                                    <th style={{ padding: '1rem' }}>Usage</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Speaker/VIP Transfer", use: "Airport pick up for Keynotes", veh: "Sedan (S-Class/A8)" },
                                    { name: "Delegate Shuttle", use: "Hotel <-> Centre loops", veh: "V-Class / Sprinter" },
                                    { name: "Government Visit", use: "Official transport", veh: "Secure Sedan" },
                                    { name: "Port Douglas Dinner", use: "Client entertainment", veh: "Luxury Van" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>{row.name}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.use}</td>
                                        <td style={{ padding: '1.25rem', color: '#1e40af', fontWeight: 'bold' }}>{row.veh}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Major Business Hubs */}
                <div style={{ marginBottom: '5rem', background: '#f1f5f9', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Cairns Business Locations</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "Cairns Convention Centre", "Cairns Corporate Tower", "Ports North",
                            "William McCormack Place (Govt)", "Cairns Airport (General Aviation)",
                            "James Cook University", "Crystalbrook Collection Hotels"
                        ].map((hub, idx) => (
                            <span key={idx} style={{ background: 'white', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '999px', color: '#334155', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Building2 size={16} /> {hub}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Conference FAQs</h2>
                    <LocationFAQ city="Cairns & Port Douglas" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#f8fafc', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem' }}>Event Success</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#334155' }}>
                        “Auzzie Chauffeur managed the transport for our medical conference of 200 delegates perfectly. The vans were always waiting when sessions finished.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#1e40af' }}>— Event Planner, Sydney</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Transport:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        See our <Link href="/the-fleet" className={styles.inlineLink}>transport options</Link>.
                        Email us for a <Link href="/contact-us" className={styles.inlineLink}>conference quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
