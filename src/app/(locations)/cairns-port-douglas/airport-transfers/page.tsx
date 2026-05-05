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
    title: { absolute: "Cairns Airport Transfers | Private Car CNS to Port Douglas" },
    description: "Luxury private transfers from Cairns Airport (CNS) to Port Douglas, Palm Cove, and the Daintree. Scenic coastal drive in comfort. Book now.",
};

export default function CairnsAirportPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Cairns & Port Douglas" service="Airport Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Cairns Airport Transfers to Port Douglas & Palm Cove"
                    subtitle="Start your tropical getaway right. Direct, air-conditioned transfers from CNS to Port Douglas, Palm Cove, and Mission Beach."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Cairns" />
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
                            How much is a private transfer to Port Douglas?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Private transfers from <strong>Cairns Airport (CNS)</strong> to <strong>Port Douglas</strong> via the Captain Cook Highway generally range from <strong>$220 - $280</strong>. Shorter trips to <strong>Palm Cove</strong> start around <strong>$90 - $130</strong>. All transfers are in modern, air-conditioned vehicles.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices depend on vehicle size (Sedan vs People Mover).
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur CNS?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Scenic Drive", desc: "Enjoy the stunning Captain Cook Highway views while our professional driver handles the winding road.", icon: <Map size={28} color="#1e3a8a" /> },
                            { title: "Cool Comfort", desc: "Our vehicles have premium air-conditioning—essential for the Tropical North humidity.", icon: <Shield size={28} color="#c5a467" /> },
                            { title: "Flight Watch", desc: "We monitor flights into Cairns (CNS) so we are always there when you land.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "Direct Service", desc: "No stopping at other hotels like the shuttle bus. Straight to your resort.", icon: <CheckCircle size={28} color="#c5a467" /> },
                            { title: "Local Knowledge", desc: "Drivers happy to share tips on the Great Barrier Reef and Daintree tours.", icon: <Heart size={28} color="#1e3a8a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Tropical Travel Made Easy</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Avoid the long, hot wait for shuttle buses.",
                            "Stop at Smithfield for groceries on the way to your self-contained apartment (on request).",
                            "Safe transport for late night arrivals when car rentals are closed.",
                            "Enough luggage space for dive gear and golf clubs.",
                            "Booster seats for the kids.",
                            "Complimentary cold water on arrival."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Cairns Pricing Guide</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination (from CNS)</th>
                                    <th style={{ padding: '1rem' }}>Sedan Price</th>
                                    <th style={{ padding: '1rem' }}>Van Price (7 Pax)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Cairns City / Esplanade", sedan: "$60 - $80", van: "$90 - $120" },
                                    { route: "Palm Cove", sedan: "$90 - $130", van: "$140 - $170" },
                                    { route: "Port Douglas", sedan: "$220 - $280", van: "$300 - $350" },
                                    { route: "Mission Beach", sedan: "$350 - $420", van: "$450 - $550" },
                                    { route: "Daintree Ferry", sedan: "$380 - $450", van: "$500 - $600" }
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
                        (Note: Estimates only. Fixed rates confirmed during booking process.)
                    </p>
                </div>

                {/* 3 Step Process */}
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>How It Works</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', marginTop: '2rem' }}>
                    {[
                        { step: "1", title: "Book", desc: "Book your transfer before you fly." },
                        { step: "2", title: "Land", desc: "We track your flight arrival." },
                        { step: "3", title: "Relax", desc: "Enjoy the scenic coastal drive." }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>CNS Airport FAQs</h2>
                    <LocationFAQ city="Cairns & Port Douglas" />
                </div>

                {/* EEAT Block (Dark) */}
                <section style={{ background: '#111827', color: 'white', padding: '5rem 1rem', borderRadius: '16px', marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {/* Expertise */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Local Drivers</h3>
                            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#d1d5db' }}>
                                Our drivers are Far North Queensland locals. We recommend stops at Rex Lookout for photos on the way to Port Douglas. We are fully accredited by the Queensland Department of Transport and Main Roads.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['QLD Transport Accredited', 'Local Guides', 'Insured'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“The driver was waiting for us despite our flight being 30 mins late. The car was cool and clean. Perfect drive to Port Douglas.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Emma, Melbourne</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Wedding Party Transport</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> 12 guests arriving for a destination wedding in Palm Cove.
                        <br /><strong>Solution:</strong> We utilized two Mercedes V-Class vans for a coordinated pickup.
                        <br /><strong>Result:</strong> All guests transported together to their resort, enjoying the ocean views along the way.
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
                        <Map color="#c5a467" /> CNS Meeting Points
                    </h3>
                    <p className={styles.directionsText}>
                        <strong>T1 International:</strong> Arrivals hall near the chauffeur meeting point sign.<br />
                        <strong>T2 Domestic:</strong> Inside the terminal near the baggage carousels. Look for your driver holding a name board.<br />
                        The terminals are within walking distance, but we pick you up at the closest point.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Cairns+Airport,Australia&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                            style={{ border: 0, width: '100%', height: '100%' }}
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
