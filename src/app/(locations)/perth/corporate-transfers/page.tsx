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
    title: { absolute: "Corporate Chauffeur Perth | Mining & Executive Transport | Auzzie Chauffeur" },
    description: "Specialist corporate transport for Perth's mining and resources sector. executive transfers to St Georges Tce, West Perth, and Henderson. Reliable FIFO connections.",
};

export default function PerthCorporatePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Perth" service="Corporate Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Perth Corporate Chauffeur"
                    subtitle="Executive transport built for the resources sector. Reliable transfers for mining executives, board members, and FIFO management."
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
                            Why use a corporate chauffeur in Perth?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155' }}>
                            Perth's business day starts early, especially for the <strong>mining and resources sector</strong>. Our chauffeurs are specialists in <strong>early morning airport transfers</strong> (3am - 5am) for FIFO executives. We connect <strong>West Perth</strong>, the CBD, and <strong>Perth Airport</strong> with punctuality you can set your watch by.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Strict confidentiality maintained for all resource sector clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Built For Business</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "24/7 Operations", desc: "Our dispatch team operates around the clock to support red-eye flights and late finishes.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "West Perth Experts", desc: "Drivers familiar with all major mining HQs on Parliament Place and Kings Park Rd.", icon: <Briefcase size={28} color="#1e40af" /> },
                            { title: "Security Clearances", desc: "Drivers with MSIC cards available for port and secure site access (on request).", icon: <ShieldCheck size={28} color="#c5a467" /> },
                            { title: "Monthly Accounts", desc: "Consolidated invoicing to simplify expense reporting for large teams.", icon: <FileText size={28} color="#1e40af" /> },
                            { title: "Comfort Class", desc: "Stretch out in a LWB Audi or Mercedes after a long flight from the Pilbara.", icon: <UserCheck size={28} color="#c5a467" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>WA Corporate Services</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#0f172a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Service Type</th>
                                    <th style={{ padding: '1rem' }}>Sectors</th>
                                    <th style={{ padding: '1rem' }}>Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "FIFO Executive Transfer", sect: "Mining / Oil & Gas", avail: "24/7 Priority" },
                                    { name: "Board Meeting Shuttle", sect: "Corporate HQ", avail: "Pre-book V-Class" },
                                    { name: "Henderson / Kwinana", sect: "Industrial / Marine", avail: "Daily Runs" },
                                    { name: "Delegation Host", sect: "Government / Trade", avail: "Custom Itinerary" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Business Districts</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "St Georges Terrace (CBD)", "West Perth (Mining Hub)", "Subiaco",
                            "Henderson Marine Complex", "Kwinana Industrial Area", "Osborne Park",
                            "Welshpool Industrial", "Jandakot Airport", "Perth Airport Precinct"
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
                    <LocationFAQ city="Perth" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#f8fafc', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem' }}>Reliable Every Swing</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#334155' }}>
                        “Auzzie Chauffeur handles all our board member transfers during AGM week. Flawless execution every time.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#1e40af' }}>— Office Manager, ASX 200 Mining Company</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Set Up Your Account:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        See our <Link href="/the-fleet" className={styles.inlineLink}>luxury fleet options for executives</Link>.
                        Contact our accounts team via our <Link href="/contact-us" className={styles.inlineLink}>corporate contact form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
