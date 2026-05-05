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
    title: { absolute: "Corporate Chauffeur Sydney | Executive Car Hire | Auzzie Chauffeur" },
    description: "Premium corporate car service in Sydney. Executive chauffeurs for Barangaroo, North Sydney, and CBD meetings. Reliable, private, and punctual.",
};

export default function SydneyCorporatePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Sydney" service="Corporate Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Sydney Corporate Chauffeur"
                    subtitle="Executive travel redefined. Seamless transfers between Sydney Airport, the CBD, and North Sydney. Open a corporate account for priority service."
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
                            Why hire a corporate chauffeur in Sydney?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155' }}>
                            Navigating Sydney's traffic requires local expertise. Our chauffeurs use real-time data to find the fastest routes, ensuring you make your meeting at <strong>Barangaroo</strong> or <strong>North Sydney</strong> on time. Enjoy a private, quiet cabin to prepare for your presentation while we handle the driving.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *WiFi and bottled water standard in all executive sedans.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Executive Standards</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Priority Booking", desc: "Account holders get first preference during peak morning travel times.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Discretion", desc: "We regularly transport high-profile executives and understand the need for privacy.", icon: <ShieldCheck size={28} color="#1e40af" /> },
                            { title: "Mobile Workspace", desc: "Utilize travel time efficiently with a smooth ride and quiet environment.", icon: <Laptop size={28} color="#c5a467" /> },
                            { title: "Consolidated Accounts", desc: "One monthly invoice for all your diverse transport needs.", icon: <FileText size={28} color="#1e40af" /> },
                            { title: "Professional Image", desc: "Arrive in a pristine black car driven by a uniformed chauffeur.", icon: <Award size={28} color="#c5a467" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Services for Sydney Business</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#0f172a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Service</th>
                                    <th style={{ padding: '1rem' }}>Usage Case</th>
                                    <th style={{ padding: '1rem' }}>Key Benefit</th>
                                    <th style={{ padding: '1rem' }}>Availability</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Airport Transfer", for: "SYD Domestic/Intl", feat: "Wait & Meet Service", avail: "24/7" },
                                    { name: "As Directed (Hourly)", for: "Meetings across CBD/Parramatta", feat: "Vehicle stays with you", avail: "Mon-Sun" },
                                    { name: "Corporate Event", for: "ICC Sydney Conferences", feat: "Group Logistics (Vans)", avail: "Pre-book" },
                                    { name: "Executive Van", for: "Site Visits / Team Lunch", feat: "Seat 7 in comfort", avail: "On Request" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Sydney Corporate Hubs</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "Barangaroo International Towers", "Sydney CBD (Martin Place)", "North Sydney Business District",
                            "Parramatta CBD", "Macquarie Park Technology Park", "ICC Sydney (Darling Harbour)",
                            "Sydney Olympic Park", "Norwest Business Park"
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
                    <LocationFAQ city="Sydney" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#f8fafc', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '2rem' }}>Trusted by Professionals</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#334155' }}>
                        “The only way to get around Sydney. The drivers know the shortcuts to avoid the Bridge traffic during peak hour.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#1e40af' }}>— Partner, Law Firm (Barangaroo)</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Partner With Us:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>executive fleet</Link>.
                        Contact us to <Link href="/contact-us" className={styles.inlineLink}>open an account</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
