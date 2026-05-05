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
    title: { absolute: "Gold Coast Airport Transfers | OOL to Surfers & Byron | Auzzie Chauffeur" },
    description: "Your premium ride from Gold Coast Airport (OOL). Chauffeur transfers to Surfers Paradise, Broadbeach, and Byron Bay. Family friendly, surfboard ready.",
};

export default function GoldCoastAirportPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Gold Coast" service="Airport Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Gold Coast Airport (OOL) Transfers"
                    subtitle="Start your holiday in style. Reliable private transfers from OOL to Surfers Paradise, Broadbeach, and Byron Bay."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Gold Coast" />
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
                            How much is a transfer from Gold Coast Airport?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            A private chauffeur transfer from <strong>Gold Coast Airport (OOL)</strong> to <strong>Surfers Paradise</strong> starts from <strong>$85 - $115</strong>. Transfers south to <strong>Byron Bay</strong> typically range from <strong>$160 - $210</strong>. We offer spacious vans for families with luggage and surfboards.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices vary by destination and vehicle size.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur OOL?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Family Friendly", desc: "Free child seats (capsules/boosters) pre-installed for your peace of mind.", icon: <Heart size={28} color="#1e3a8a" /> },
                            { title: "Flight Tracking", desc: "Whether you land early or late, we track your flight into Coolangatta.", icon: <Plane size={28} color="#c5a467" /> },
                            { title: "All Destinations", desc: "Covering the entire coast from Noosa to Byron (and everywhere in between).", icon: <Map size={28} color="#1e3a8a" /> },
                            { title: "Surfboard Ready", desc: "Our Mercedes V-Class vans have ample room for surfboards and golf clubs.", icon: <Briefcase size={28} color="#c5a467" /> },
                            { title: "Theme Parks", desc: "Direct transfers to Sea World, Movie World, and Dreamworld.", icon: <Shield size={28} color="#1e3a8a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Holiday Without Hassle</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Skip the shuttle bus that stops at 10 other hotels before yours.",
                            "Direct transfer to Byron Bay (no changing buses at the border).",
                            "Air-conditioned comfort immediately after stepping off the tarmac.",
                            "Drivers who know the back roads during Schoolies or the GC500.",
                            "Assistance with heavy luggage and prams.",
                            "Fixed price regardless of traffic on the Gold Coast Highway."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Gold Coast Airport Pricing Guide</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination (from OOL)</th>
                                    <th style={{ padding: '1rem' }}>Sedan Price</th>
                                    <th style={{ padding: '1rem' }}>Van Price (7 Pax)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Surfers Paradise", sedan: "$85 - $115", van: "$130 - $160" },
                                    { route: "Broadbeach", sedan: "$80 - $110", van: "$120 - $150" },
                                    { route: "Byron Bay", sedan: "$160 - $210", van: "$220 - $280" },
                                    { route: "Brisbane CBD", sedan: "$220 - $280", van: "$290 - $350" },
                                    { route: "Theme Parks", sedan: "$95 - $125", van: "$140 - $180" }
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
                        (Note: Estimates include generic tolls. Booking confirms exact fixed price.)
                    </p>
                </div>

                {/* 3 Step Process */}
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>How It Works</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', marginTop: '2rem' }}>
                    {[
                        { step: "1", title: "Book", desc: "Enter OOL arrival details online." },
                        { step: "2", title: "Wait", desc: "Driver tracks your flight arrival." },
                        { step: "3", title: "Surf", desc: "Enjoy the ride to the beach." }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>OOL Airport FAQs</h2>
                    <LocationFAQ city="Gold Coast" />
                </div>

                {/* EEAT Block (Dark) */}
                <section style={{ background: '#111827', color: 'white', padding: '5rem 1rem', borderRadius: '16px', marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {/* Expertise */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>QLD & NSW Licensed</h3>
                            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#d1d5db' }}>
                                We hold accreditation in both Queensland and New South Wales, allowing us to seamlessly transfer you across the border to Byron Bay or Tweed Heads. Our drivers are local experts who know the best surf breaks and coffee spots.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['Cross-Border Licensed', 'Family Safe', 'Insured'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Great van for our family of 6 plus luggage. Driver was friendly and had the booster seats ready as requested.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— The Wilson Family, NZ</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Byron Bay Festival Transfer</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A group of 4 friends attending Splendour in the Grass needed transport from OOL.
                        <br /><strong>Solution:</strong> We provided a V-Class van with plenty of room for camping gear.
                        <br /><strong>Result:</strong> Direct drop-off at their accommodation, avoiding the festival shuttle bus queues.
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
                        <Map color="#c5a467" /> OOL Meeting Points
                    </h3>
                    <p className={styles.directionsText}>
                        <strong>Domestic/International Terminal:</strong> Gold Coast Airport is a single terminal. Your driver will meet you in the arrivals hall near the baggage carousels holding a sign with your name.
                        The pickup area is conveniently located just outside the main doors.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Gold+Coast+Airport,Australia&t=&z=14&ie=UTF8&iwloc=B&output=embed"
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
