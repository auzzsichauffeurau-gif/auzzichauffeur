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
    title: { absolute: "Corporate Chauffeur Melbourne | Executive Transfers | Auzzie Chauffeur" },
    description: "Premium executive chauffeur service in Melbourne. Reliable corporate transfers to CBD, Docklands, and MCEC. Open a business account today.",
};

export default function MelbourneCorporatePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Melbourne" service="Corporate Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Melbourne Corporate Chauffeur"
                    subtitle="Reliable, discreet, and professional executive transport. Mobile office solutions for Melbourne's business leaders."
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
                            Why use a corporate chauffeur in Melbourne?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155' }}>
                            Auzzie Chauffeur provides a <strong>mobile office environment</strong> for executives. Avoid the stress of Hook turns and parking in the CBD. Our corporate accounts offer <strong>monthly consolidated invoicing</strong>, priority dispatch during peak times, and fixed rates for frequent routes like <strong>Melbourne Airport to Collins Street</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *NDAs available for sensitive roadshows and VIP delegates.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>The Executive Advantage</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Monthly Billing", desc: "Streamline expenses with a single monthly invoice for all staff travel.", icon: <FileText size={28} color="#1e40af" /> },
                            { title: "Privacy Assured", desc: "Our drivers understand confidentiality. What happens in the car, stays in the car.", icon: <ShieldCheck size={28} color="#c5a467" /> },
                            { title: "Productivity", desc: "Wi-Fi and quiet cabins allow you to work or take calls between meetings.", icon: <Laptop size={28} color="#1e40af" /> },
                            { title: "Punctuality", desc: "We arrive 10 minutes early. We track traffic and flight delays so you don't have to.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Immaculate Fleet", desc: "Late model Mercedes and Audi sedans that reflect your company's professional image.", icon: <Award size={28} color="#1e40af" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Corporate Solutions</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#0f172a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Service Type</th>
                                    <th style={{ padding: '1rem' }}>Ideal For</th>
                                    <th style={{ padding: '1rem' }}>Key Feature</th>
                                    <th style={{ padding: '1rem' }}>Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Executive Transfer", for: "Airport / Point-to-Point", feat: "Fixed Price", avail: "24/7 On Demand" },
                                    { name: "Hourly Hire", for: "Multiple Meetings / Roadshows", feat: "Driver waits on standby", avail: "Min 2 Hours" },
                                    { name: "Event Logistics", for: "Conferences / AGMs", feat: "Coordination of large groups", avail: "Pre-book required" },
                                    { name: "VIP Service", for: "CEO / Board Members", feat: "S-Class / A8L Upgrades", avail: "Priority Allocation" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>{row.name}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.for}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.feat}</td>
                                        <td style={{ padding: '1.25rem', color: '#1e40af', fontWeight: 'bold' }}>{row.avail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Major Business Hubs */}
                <div style={{ marginBottom: '5rem', background: '#f1f5f9', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Serving Melbourne's Business Districts</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "Melbourne CBD (Paris End)", "Docklands Financial District", "Southbank",
                            "Melbourne Convention & Exhibition Centre (MCEC)", "St Kilda Rd Corridor",
                            "Cremorne Tech Hub", "Tullamarine Airport Business Park", "Moorabbin Airport"
                        ].map((hub, idx) => (
                            <span key={idx} style={{ background: 'white', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '999px', color: '#334155', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Building2 size={16} /> {hub}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Executive Travel FAQs</h2>
                    <LocationFAQ city="Melbourne" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#f8fafc', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem' }}>Proven Reliability</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#334155' }}>
                        “We rely on Auzzie Chauffeur for all our visiting executive transfers. The billing is simple, and the drivers are always professional.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#1e40af' }}>— Executive Assistant, Global Consulting Firm (Melbourne Office)</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Upgrade Your Travel:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Explore our <Link href="/the-fleet" className={styles.inlineLink}>executive sedans</Link>.
                        Open a <Link href="/contact-us" className={styles.inlineLink}>corporate account</Link> today.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
