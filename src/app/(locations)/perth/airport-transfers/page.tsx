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
    title: { absolute: "Perth Airport Transfers | Chauffeur Service PER | Auzzie Chauffeur" },
    description: "Reliable airport transfers from Perth Airport (PER) to CBD, Scarborough, Fremantle & Mandurah. Luxury cars, FIFO transfers, fixed rates.",
};

export default function PerthAirportPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Perth" service="Airport Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Perth Airport (PER) Chauffeur Transfers"
                    subtitle="Premium, timely transfers from Perth Airport Terminals T1-T4 to the City, Fremantle, and Mandurah. Ideal for FIFO and corporate travel."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Perth" />
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
                            How much is an airport transfer in Perth?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Private chauffeur transfers from <strong>Perth Airport (PER)</strong> to the <strong>CBD</strong> start from <strong>$85 - $115</strong>. Transfers to <strong>Fremantle</strong> are typically <strong>$110 - $140</strong>. We offer specialized services for FIFO workers and corporate accounts with fixed pricing.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices vary by terminal (T1/T2 vs T3/T4) and destination.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur Perth?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "FIFO Reliability", desc: "We understand the strict schedules of FIFO travel. We are always on time for your fly-in/fly-out.", icon: <Clock size={28} color="#1e3a8a" /> },
                            { title: "All Terminals", desc: "Serving T1 (Intl/Virgin), T2 (Regional), T3/T4 (Qantas/Jetstar) efficiently.", icon: <Plane size={28} color="#c5a467" /> },
                            { title: "Meet & Greet", desc: "We meet you inside the terminal with a name board, assisting with heavy luggage.", icon: <UserCheck size={28} color="#1e3a8a" /> },
                            { title: "Fixed Price", desc: "Avoid the meter anxiety. Our fixed price covers tolls and airport levies.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Comfort", desc: "Cool air-conditioned luxury sedans perfect for the WA climate.", icon: <Shield size={28} color="#1e3a8a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Seamless Perth Travel</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "No waiting for taxis – especially during FIFO shift changes.",
                            "Direct transfer between T1/T2 and T3/T4 if you have connecting flights.",
                            "Spacious vehicles for mining gear or large luggage.",
                            "Quiet, private environment to make calls after landing.",
                            "Complimentary water provided for the drive to Margaret River.",
                            "Child seats available for family holidays."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Airport Pricing Guide</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination (from PER)</th>
                                    <th style={{ padding: '1rem' }}>Sedan Price</th>
                                    <th style={{ padding: '1rem' }}>Van Price (7 Pax)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Perth CBD", sedan: "$85 - $115", van: "$130 - $160" },
                                    { route: "Fremantle", sedan: "$110 - $140", van: "$160 - $200" },
                                    { route: "Scarborough Beach", sedan: "$105 - $135", van: "$150 - $190" },
                                    { route: "Joondalup", sedan: "$130 - $160", van: "$180 - $220" },
                                    { route: "Mandurah", sedan: "$220 - $260", van: "$300 - $350" }
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
                        (Note: Estimates only. Final fixed price confirmed at booking.)
                    </p>
                </div>

                {/* 3 Step Process */}
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>How It Works</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', marginTop: '2rem' }}>
                    {[
                        { step: "1", title: "Select", desc: "Choosing your vehicle type online." },
                        { step: "2", title: "Book", desc: "Enter flight details (e.g. QF123)." },
                        { step: "3", title: "Ride", desc: "Driver meets you at Arrivals with a sign." }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Airport FAQs</h2>
                    <LocationFAQ city="Perth" />
                </div>

                {/* EEAT Block (Dark) */}
                <section style={{ background: '#111827', color: 'white', padding: '5rem 1rem', borderRadius: '16px', marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {/* Expertise */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>WA Specialists</h3>
                            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#d1d5db' }}>
                                Auzzie Chauffeur has served Western Australia for over a decade. We know the challenges of the mining roster schedule and the importance of punctuality. Our drivers are fully licensed and hold the necessary clearances for secure areas if required.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['WA Dept of Transport Licensed', 'FIFO Experienced', 'Insured'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Feedback</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Use them every swing. Driver is always there at T2 even when my flight is delayed. Best service in Perth.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Dave, Mining Engineer</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Margaret River Tour Start</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A couple arriving from London wanted to go straight to Margaret River.
                        <br /><strong>Solution:</strong> We provided an Audi A8L for maximum comfort on the 3-hour drive.
                        <br /><strong>Result:</strong> Guests relaxed, slept, and arrived at their vineyard accommodation refreshed.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>vehicles</Link>.
                        Book now via our <Link href="/contact-us" className={styles.inlineLink}>booking page</Link>.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> PER Meeting Points
                    </h3>
                    <p className={styles.directionsText}>
                        <strong>T1 International:</strong> Ground floor arrivals hall, near the chauffeur meeting point sign.<br />
                        <strong>T1 Domestic (Virgin):</strong> Arrivals hall near baggage claim.<br />
                        <strong>T2 Regional:</strong> Outside arrivals door.<br />
                        <strong>T3/T4 Qantas/Jetstar:</strong> Designated chauffeur meeting area near baggage carousels.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Perth+Airport,Australia&t=&z=13&ie=UTF8&iwloc=B&output=embed"
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
