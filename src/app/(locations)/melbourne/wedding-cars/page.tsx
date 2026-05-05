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
    title: { absolute: "Wedding Cars Melbourne | Luxury Bridal Transfers | Auzzie Chauffeur" },
    description: "Premium wedding car hire in Melbourne. Mercedes & Audi chauffeur service for weddings in the CBD, Yarra Valley, and Mornington Peninsula. Book your dream ride.",
};

export default function MelbourneWeddingPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Melbourne" service="Wedding Cars" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Luxury Wedding Car Hire Melbourne"
                    subtitle="Arrive in timeless elegance. Professional chauffeur service for your special day in Melbourne, Yarra Valley, or the Peninsula."
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
                            How much does wedding car hire cost in Melbourne?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4c0519' }}>
                            Wedding car hire in Melbourne typically starts from <strong>$350 - $550</strong> for a standard 3-hour package with a luxury sedan (e.g., Mercedes E-Class). For premium vehicles like the <strong>Mercedes S-Class</strong> or <strong>Audi A8</strong>, expect to pay between <strong>$500 - $800</strong>. Full-day packages for the Yarra Valley range from <strong>$1,000+</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#9f1239', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices include white ribbons, red carpet arrival, and chilled refreshments.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>The Perfect Touch For Your Day</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Red Carpet Treatment", desc: "We roll out the red carpet for your arrival at the ceremony, ensuring a grand entrance.", icon: <Gem size={28} color="#e11d48" /> },
                            { title: "White Ribbons", desc: "Traditional white satin ribbons adorn the bonnet of your wedding car.", icon: <Heart size={28} color="#e11d48" /> },
                            { title: "Photo Ready", desc: "Our chauffeurs work with your photographer to position the cars perfectly for photos.", icon: <Camera size={28} color="#e11d48" /> },
                            { title: "On Time, Every Time", desc: "We arrive 15 minutes early to alleviate any pre-wedding jitters.", icon: <Clock size={28} color="#e11d48" /> },
                            { title: "Champagne Service", desc: "Complimentary chilled refreshments to celebrate your first moments as a married couple.", icon: <Gift size={28} color="#e11d48" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Melbourne Wedding Packages</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Package Level</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Inclusions</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Ceremony Transfer", time: "2 Hours", desc: "Pickup from home/hotel, transfer to ceremony, wait for photos.", price: "$300 - $450" },
                                    { name: "Half Day Indulgence", time: "4 Hours", desc: "Ceremony + transfer to photo locations + reception drop-off.", price: "$550 - $800" },
                                    { name: "Full Day Experience", time: "8 Hours", desc: "Start to finish. Includes late night getaway car.", price: "$1,100+" },
                                    { name: "Yarra Valley Special", time: "6 Hours", desc: "Transport for bridal party to winery venues.", price: "$800 - $1,200" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>We Serve All Major Venues</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {[
                            "Stones of the Yarra Valley", "Zonzo Estate", "The Langham Melbourne",
                            "Crown Towers", "Quat Quatta", "Carousel Albert Park",
                            "Rippon Lea Estate", "Melbourne Town Hall", "Campbell Point House"
                        ].map((venue, idx) => (
                            <span key={idx} style={{ background: 'white', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', borderRadius: '999px', color: '#334155', fontWeight: '500' }}>
                                📍 {venue}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Wedding Car FAQs</h2>
                    <LocationFAQ city="Melbourne" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fff1f2', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#881337', marginBottom: '2rem' }}>Love Notes</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#4c0519' }}>
                        “The cars looked improved in our photos. The driver was so patient with my dress and helped me get in and out gracefully. Highly recommended!”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#e11d48' }}>— Sarah & Tom, married at Stones of the Yarra Valley</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Plan Your Day:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>luxury fleet</Link>.
                        Need guest transport? Check out our <Link href="/melbourne/conferences-special-events" className={styles.inlineLink}>event buses</Link>.
                        Book via our <Link href="/contact-us" className={styles.inlineLink}>enquiry form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}
