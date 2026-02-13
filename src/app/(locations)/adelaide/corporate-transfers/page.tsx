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
    title: { absolute: "Corporate Chauffeur Adelaide | Executive Business Transport | Auzzie Chauffeur" },
    description: "Professional corporate chauffeurs in Adelaide. Discrete transfers for Defence, Government, and Wine Industry executives. Reliable and punctual.",
};

export default function AdelaideCorporatePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Adelaide" service="Corporate Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Adelaide Corporate Chauffeur"
                    subtitle="Reliable executive transport for Adelaide's Defence, Innovation, and Wine sectors. Discreet service for government and business leaders."
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
                            Why hire a corporate chauffeur in Adelaide?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155' }}>
                            Ideally suited for visiting executives in the <strong>Defence and Innovation sectors</strong>. We provide secure, confidential transfers between <strong>Adelaide Airport</strong>, the CBD, and hubs like <strong>Tonsley Innovation District</strong> and <strong>Techport</strong>. Our drivers are accustomed to high-level protocols.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Confidentiality Agreements (NDAs) available on request.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Professional Excellence</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Defence Ready", desc: "Drivers experienced with transfers to Edinbugh RAAF and Osborne Naval Shipyard.", icon: <ShieldCheck size={28} color="#c5a467" /> },
                            { title: "Wine Trade", desc: "Hosting international buyers? We provide luxury tours of the Barossa for your VIPs.", icon: <UserCheck size={28} color="#1e40af" /> },
                            { title: "On Time", desc: "We monitor all flights into ADL to ensure zero wait time for your executives.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Monthly Invoice", desc: "Consolidated billing for all your Adelaide-based staff travel.", icon: <FileText size={28} color="#1e40af" /> },
                            { title: "Privacy", desc: "Discreet vehicles and drivers for sensitive government or business discussions.", icon: <Briefcase size={28} color="#c5a467" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>SA Corporate Services</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#0f172a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Service</th>
                                    <th style={{ padding: '1rem' }}>Sector Focus</th>
                                    <th style={{ padding: '1rem' }}>Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Executive Airport Transfer", sect: "All Sectors", avail: "24/7" },
                                    { name: "Defence Precinct Shuttle", sect: "Government / Defence", avail: "Security Aware" },
                                    { name: "Wine Buyer Tour", sect: "Export / Agriculture", avail: "Full Day hire" },
                                    { name: "Conference Logistics", sect: "Adelaide Convention Centre", avail: "Group bookings" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>{row.name}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.sect}</td>
                                        <td style={{ padding: '1.25rem', color: '#1e40af', fontWeight: 'bold' }}>{row.avail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Major Business Hubs */}
                <div style={{ marginBottom: '5rem', background: '#f1f5f9', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Adelaide Business Hubs</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "Adelaide CBD (North Tce)", "Tonsley Innovation District", "Technology Park Adelaide",
                            "Techport Australia (Osborne)", "Edinburgh Defence Precinct", "Adelaide Airport Business Park",
                            "National Wine Centre", "Lot Fourteen"
                        ].map((hub, idx) => (
                            <span key={idx} style={{ background: 'white', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '999px', color: '#334155', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Building2 size={16} /> {hub}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Corporate FAQs</h2>
                    <LocationFAQ city="Adelaide" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#f8fafc', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem' }}>Trusted Quality</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#334155' }}>
                        “Our international guests loved the seamless transfer from the airport to our Barossa headquarters. Very professional.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#1e40af' }}>— Export Director, Major Wine Brand</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Open Your Account:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>executive fleet</Link>.
                        Contact us for <Link href="/contact-us" className={styles.inlineLink}>account application</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
