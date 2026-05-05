import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight, Map, Anchor, Shield, CheckCircle, Calculator, UserCheck, Calendar } from "lucide-react";
import type { Metadata } from 'next';
import WeatherWidget from "@/components/WeatherWidget";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";
import LocationTestimonials from "@/components/LocationTestimonials";

export const metadata: Metadata = {
    title: { absolute: "Hobart Airport Transfers | Luxury Car HBA to City | Tas Chauffeur" },
    description: "Premium airport transfers from Hobart Airport (HBA) to CBD, MONA, and Port Arthur. Reliable, warm, and safe Tasmanian chauffeur service.",
};

export default function HobartAirportPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Hobart" service="Airport Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hobart Airport (HBA) Chauffeur Service"
                    subtitle="Arrive in Tasmania comfortably. Private transfers from Hobart Airport to the City, MONA, and beyond. Warm cars, friendly drivers."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Hobart" />
                </div>
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#f9fafb', padding: '3rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#e0f2fe', padding: '1rem', borderRadius: '50%', color: '#0284c7', flexShrink: 0 }}>
                        <Calculator size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                            How much is a chauffeur from Hobart Airport?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            A private transfer from <strong>Hobart Airport (HBA)</strong> to the <strong>CBD</strong> starts from <strong>$85 - $115</strong>. Transfers to <strong>Port Arthur</strong> are typically <strong>$220 - $280</strong>. We offer fixed pricing with no meter ticking in traffic on the Tasman Bridge.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices vary by car class (Sedan/Van).
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur HBA?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Flight Monitoring", desc: "We track your flight (QF, VA, JQ) into HBA to ensure we are there when you land.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "Weather Ready", desc: "Our cars are climate controlled and safe for Tasmanian winter road conditions.", icon: <Shield size={28} color="#c5a467" /> },
                            { title: "Luggage Help", desc: "Driver meets you at arrivals and assists with heavy bags to the car.", icon: <UserCheck size={28} color="#1e3a8a" /> },
                            { title: "Fixed Rates", desc: "No surge pricing during Dark Mofo, Taste of Tasmania, or the Syd-Hobart Yacht Race.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Local Knowledge", desc: "Ask our drivers for the best restaurant tips in Salamanca or North Hobart.", icon: <Heart size={28} color="#1e3a8a" /> }
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

                {/* Common Problems */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Warm Welcome to Tassie</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Don't wait in the cold for a taxi outside HBA terminal.",
                            "Direct transfer to MONA (Museum of Old and New Art).",
                            "Comfortable ride after crossing Bass Strait.",
                            "Space for golf clubs if playing at Barnbougle (regional transfer).",
                            "Reliable early morning pickups for the first flight out.",
                            "Child seats fitted and ready for family holidays."
                        ].map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem', textAlign: 'left' }}>
                                <CheckCircle size={20} color="#16a34a" style={{ flexShrink: 0 }} />
                                <span style={{ color: '#334155' }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing Guide */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Hobart Pricing Guide</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination (from HBA)</th>
                                    <th style={{ padding: '1rem' }}>Sedan Price</th>
                                    <th style={{ padding: '1rem' }}>Van Price (7 Pax)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Hobart CBD", sedan: "$85 - $115", van: "$130 - $160" },
                                    { route: "Wrest Point Casino", sedan: "$90 - $120", van: "$135 - $165" },
                                    { route: "MONA (Berriedale)", sedan: "$95 - $125", van: "$140 - $180" },
                                    { route: "Port Arthur", sedan: "$220 - $280", van: "$300 - $380" },
                                    { route: "Saffire Freycinet", sedan: "$450 - $550", van: "$550 - $650" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#c5a467', fontWeight: 'bold' }}>{row.sedan}</td>
                                        <td style={{ padding: '1.25rem', color: '#1e3a8a', fontWeight: 'bold' }}>{row.van}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '1rem', textAlign: 'center', fontStyle: 'italic' }}>
                        (Note: Estimates include airport pick up fees. Fixed price confirmed at booking.)
                    </p>
                </div>

                {/* 3 Step Process */}
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>How It Works</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', marginTop: '2rem' }}>
                    {[
                        { step: "1", title: "Book", desc: "Pre-book your car online." },
                        { step: "2", title: "Meet", desc: "Driver waits with a sign." },
                        { step: "3", title: "Enjoy", desc: "Relax on the drive to town." }
                    ].map((item, idx) => (
                        <div key={idx} style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <div style={{ width: '60px', height: '60px', background: '#c5a467', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>
                                {item.step}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ color: '#4b5563' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>HBA Airport FAQs</h2>
                    <LocationFAQ city="Hobart" />
                </div>

                {/* EEAT Block (Dark) */}
                <section style={{ background: '#111827', color: 'white', padding: '5rem 1rem', borderRadius: '16px', marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {/* Expertise */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Tasmanian Experts</h3>
                            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#d1d5db' }}>
                                We are proudly Tasmanian. Our drivers are accredited by the Transport Commission and know the roads like the back of their hand. We ensure your safety on winding or icy roads during winter.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['TAS Accredited', 'Local Drivers', 'Insured'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Arrived for a conference. Driver was waiting. Car was warm. Trip to hotel was smooth. Can't ask for more.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Peter, Sydney</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Dark Mofo Group</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A group of 7 friends arriving for the winter festival.
                        <br /><strong>Solution:</strong> A spacious Mercedes V-Class with room for heavy winter coats and luggage.
                        <br /><strong>Result:</strong> Delivered straight to their Airbnb in Battery Point, warm and ready for the festival.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>vehicles</Link>.
                        Book now via our <Link href="/contact-us" className={styles.inlineLink}>online booking page</Link>.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> HBA Meeting Points
                    </h3>
                    <p className={styles.directionsText}>
                        <strong>Main Arrivals Hall:</strong> Hobart Airport is small and easy. Your driver will be waiting in the arrivals area with a name sign, just after you collect your bags.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Hobart+Airport,Australia&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}
