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
    title: { absolute: "Brisbane Airport Transfers | Chauffeur BNE to City & Gold Coast" },
    description: "Premium chauffeurs from Brisbane Airport (BNE) to CBD, Gold Coast, and Sunshine Coast. Fixed price luxury transfers.",
};

export default function BrisbaneAirportPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Brisbane" service="Airport Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Brisbane Airport (BNE) Chauffeur Service"
                    subtitle="Reliable luxury transfers from BNE Domestic & International to Brisbane City, Gold Coast, and Sunshine Coast."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Brisbane" />
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
                            How much is a private transfer from Brisbane Airport?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Private transfers from <strong>Brisbane Airport (BNE)</strong> to the <strong>CBD</strong> start from <strong>$95 - $125</strong>. Transfers to the <strong>Gold Coast</strong> (Surfers Paradise) range from <strong>$220 - $280</strong>. We operate 24/7 with fixed pricing, covering tolls and airport parking.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Prices vary by vehicle type. Confirm exact rate via our booking tool.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur BNE?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Flight Monitoring", desc: "We track your flight (QF, VA, JQ) into BNE to ensure we are there when you land.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "Meet & Greet", desc: "Your driver greets you inside the terminal with a name sign, assisting with luggage.", icon: <UserCheck size={28} color="#c5a467" /> },
                            { title: "Fixed Pricing", desc: "No airport toll surprises. The price you book is the price you pay.", icon: <Calculator size={28} color="#1e3a8a" /> },
                            { title: "Wait Time", desc: "Generous free waiting time for international arrivals to clear customs.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Coast Transfers", desc: "Specializing in long-distance comfortable transfers to Gold Coast & Noosa.", icon: <Map size={28} color="#1e3a8a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Travel Stress-Free</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Avoid long waits for taxis or rideshares at BNE Domestic.",
                            "Skip the crowded AirTrain with luggage.",
                            "Direct door-to-door service to your hotel, not a central station.",
                            "Fixed price transfers to Gold Coast theme parks.",
                            "Comfortable, air-conditioned luxury sedans for the Queensland heat.",
                            "Booster seats available for family holidays."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Airport Pricing Guide</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination (from BNE)</th>
                                    <th style={{ padding: '1rem' }}>Sedan Price</th>
                                    <th style={{ padding: '1rem' }}>Van Price (7 Pax)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Brisbane CBD", sedan: "$95 - $125", van: "$140 - $180" },
                                    { route: "South Bank / West End", sedan: "$100 - $135", van: "$150 - $190" },
                                    { route: "Gold Coast (Surfers)", sedan: "$220 - $280", van: "$290 - $350" },
                                    { route: "Sunshine Coast (Maroochydore)", sedan: "$250 - $320", van: "$340 - $410" },
                                    { route: "Noosa Heads", sedan: "$320 - $390", van: "$420 - $490" }
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
                        (Note: Estimates include tolls. Fixed price confirmed upon booking.)
                    </p>
                </div>

                {/* 3 Step Process */}
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>How It Works</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', marginTop: '2rem' }}>
                    {[
                        { step: "1", title: "Book", desc: "Select 'Airport Transfer' and enter details." },
                        { step: "2", title: "Confirm", desc: "Receive instant email confirmation." },
                        { step: "3", title: "Ride", desc: "Your driver is waiting at Arrivals." }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>BNE Airport FAQs</h2>
                    <LocationFAQ city="Brisbane" />
                </div>

                {/* EEAT Block (Dark) */}
                <section style={{ background: '#111827', color: 'white', padding: '5rem 1rem', borderRadius: '16px', marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {/* Expertise */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>QLD Accredited</h3>
                            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#d1d5db' }}>
                                Auzzie Chauffeur operates fully accredited luxury transport service in Queensland. Our drivers know the best routes to avoid traffic on the Gateway Motorway and Gympie Road. We prioritize safety and punctuality.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['QLD Licensed', 'Insured', 'Professional'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Feedback</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Much smoother than Uber. Driver helped with all our golf clubs.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Michael, Gold Coast</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Wedding Guests Arrival</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> 10 guests arriving from Sydney for a wedding in Maleny (Sunshine Coast hinterland).
                        <br /><strong>Solution:</strong> Two Mercedes V-Class vans picked them up directly from BNE Domestic.
                        <br /><strong>Result:</strong> A seamless 90-minute transfer together, arriving fresh for the wedding events.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>fleet options</Link>.
                        Book now via our <Link href="/contact-us" className={styles.inlineLink}>secure booking form</Link>.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> BNE Meeting Points
                    </h3>
                    <p className={styles.directionsText}>
                        <strong>Domestic Terminal:</strong> At the baggage carousel for your airline (Virgin, Qantas, Jetstar).<br />
                        <strong>International Terminal:</strong> Inside the arrivals hall. Your driver will be holding a sign with your name.<br />
                        <em>We monitor all flights and adjust to actual landing times.</em>
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Brisbane+Airport,Australia&t=&z=14&ie=UTF8&iwloc=B&output=embed"
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
