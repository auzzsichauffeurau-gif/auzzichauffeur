import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight, Map, Anchor, Shield, CheckCircle, Calculator, UserCheck, Calendar, GraduationCap, Wine } from "lucide-react";
import type { Metadata } from 'next';
import WeatherWidget from "@/components/WeatherWidget";
import Neighborhoods from "@/components/Neighborhoods";
import ServiceArea from "@/components/ServiceArea";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessHours from "@/components/BusinessHours";
import ContactInfo from "@/components/ContactInfo";
import LocationFAQ from "@/components/LocationFAQ";
import LocationTestimonials from "@/components/LocationTestimonials";

export const metadata: Metadata = {
    title: { absolute: "Chauffeur Service Gold Coast | Auzzie Chauffeur | Luxury Transfers" },
    description: "Book premium chauffeur service in Gold Coast. Luxury commercial transfers to OOL & BNE, theme park rides, and corporate cars. 24/7 Service.",
    alternates: {
        canonical: '/gold-coast',
    },
};

export default function GoldCoastHubPage() {
    const goldCoastNeighborhoods = [
        "Surfers Paradise", "Broadbeach", "Burleigh Heads", "Coolangatta",
        "Main Beach", "Southport", "Robina", "Palm Beach"
    ];

    const goldCoastPostcodes = [
        "4217", "4218", "4220", "4221", "4222", "4223",
        "4225", "4226", "4227", "4228", "4229", "4230"
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Gold Coast" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Gold Coast’s Premier Chauffeur Service — Surf City Luxury"
                    subtitle="Reliable transfers from Gold Coast Airport (OOL) and Brisbane (BNE) to Surfers Paradise, Broadbeach, and Byron Bay. Experience professional, punctual service."
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
                            How much does chauffeur service cost in Gold Coast?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Chauffeur service in Gold Coast starts from around <strong>$90 - $120</strong> for local airport transfers (OOL). Transfers to <strong>Brisbane Airport (BNE)</strong> typically range from <strong>$220 - $280</strong>. We operate <strong>24/7</strong> with fixed pricing, serving areas like <strong>4217 (Surfers Paradise)</strong>, <strong>4218 (Broadbeach)</strong>, and <strong>4220 (Burleigh Heads)</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            Prices vary by vehicle type and distance; confirm before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur Gold Coast?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "QLD Accredited", desc: "Fully licensed and insured luxury transport operators.", icon: <Shield size={28} color="#1e3a8a" /> },
                            { title: "Fixed Rates", desc: "No surge pricing during Schoolies, Magic Millions, or the Gold Coast 500.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Airport Experts", desc: "We service both Gold Coast (OOL) and Brisbane (BNE) airports seamlessly.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "Theme Park Transfers", desc: "Door-to-door service for families visiting Movie World, Dreamworld, and Sea World.", icon: <CheckCircle size={28} color="#c5a467" /> },
                            { title: "Byron Bay Connect", desc: "Luxury transfers across the border to Byron Bay and Northern NSW.", icon: <Map size={28} color="#1e3a8a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Travel Problems We Solve</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Finding reliable transport for early morning flights from Coolangatta.",
                            "Avoiding expensive car rental fees and parking hassles at theme parks.",
                            "Seamless transfers between Brisbane Airport and Gold Coast hotels.",
                            "Transporting large families with luggage and surfboards.",
                            "Ensuring VIP guests arrive on time for events at The Star or Convention Centre.",
                            "Relaxed day trips to Mt Tamborine or Byron Bay without driving."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Gold Coast Pricing Guide</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Service Route / Type</th>
                                    <th style={{ padding: '1rem' }}>Price Range</th>
                                    <th style={{ padding: '1rem' }}>Inclusions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Surfers Paradise ⇄ OOL Airport", price: "$90 - $120", notes: "Flight tracking, meet & greet, luggage help." },
                                    { route: "Surfers Paradise ⇄ Brisbane Airport", price: "$220 - $280", notes: "Direct door-to-door transfer via M1." },
                                    { route: "Gold Coast ⇄ Byron Bay", price: "$180 - $240", notes: "Scenic transfer across NSW border." },
                                    { route: "Theme Park Transfer", price: "$80 - $110", notes: "One-way family transfer (Sedan/SUV)." }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#c5a467', fontWeight: 'bold' }}>{row.price}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '1rem', textAlign: 'center', fontStyle: 'italic' }}>
                        (Note: Estimates only. Final price depends on vehicle class and exact addresses.)
                    </p>
                </div>

                <h2 className={styles.sectionTitle}>Popular Chauffeur Selections</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    textAlign: 'left',
                    marginBottom: '4rem'
                }}>
                    {[
                        { title: "Airport Transfers", desc: "Transfers to Gold Coast (OOL) and Brisbane (BNE).", icon: <Plane size={32} color="#c5a467" />, link: "/gold-coast/airport-transfers" },
                        { title: "Corporate Travel", desc: "Executive travel for conferences and events.", icon: <Briefcase size={32} color="#1e3a8a" />, link: "/gold-coast/corporate-transfers" },
                        { title: "Wedding Cars", desc: "Luxury cars for beach & hinterland weddings.", icon: <Heart size={32} color="#c5a467" />, link: "/gold-coast/wedding-cars" },
                        { title: "Hourly Hire", desc: "Day trips to Byron Bay or Mt Tamborine.", icon: <Clock size={32} color="#1e3a8a" />, link: "/gold-coast/hourly-chauffeur" },
                        { title: "Cruise Transfers", desc: "Transfers to Brisbane Cruise Terminal.", icon: <Anchor size={32} color="#c5a467" />, link: "/gold-coast/cruise-ship-transfers" },
                        { title: "Special Events", desc: "Transport for Magic Millions and GC500.", icon: <Calendar size={32} color="#1e3a8a" />, link: "/gold-coast/conferences-special-events" },
                        { title: "Student Transfers", desc: "Transfers for Bond University and Griffith.", icon: <GraduationCap size={32} color="#c5a467" />, link: "/gold-coast/international-student-transfers" },
                        { title: "Luxury Tours", desc: "Hinterland tours and Byron Bay day trips.", icon: <Wine size={32} color="#1e3a8a" />, link: "/gold-coast/luxury-tours" }
                    ].map((s, idx) => (
                        <Link href={s.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard}>
                                <div style={{ marginBottom: '1.5rem' }}>{s.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {s.title}
                                </h3>
                                <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                    {s.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#c5a467', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                    Book Now <ChevronRight size={16} style={{ marginLeft: '4px' }} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* 3 Step Process */}
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>How It Works</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', marginTop: '2rem' }}>
                    {[
                        { step: "1", title: "Book", desc: "Enter details online for an instant fixed-price quote." },
                        { step: "2", title: "Confirm", desc: "Receive email confirmation with driver details." },
                        { step: "3", title: "Travel", desc: "Sit back and enjoy the ride to your destination." }
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

                {/* Coverage */}
                <div className="max-w-7xl mx-auto px-4" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>Coverage Area</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.7', color: '#4b5563' }}>
                        We extensively cover the entire <strong>Gold Coast</strong> region, including <strong>Surfers Paradise</strong>, <strong>Broadbeach</strong>, and <strong>Coolangatta</strong>. Whether you need a ride to <strong>Theme Parks</strong> or a transfer to <strong>Byron Bay</strong>, we have you covered. Key postcodes include <strong>4217</strong>, <strong>4218</strong>, and <strong>4220</strong>.
                    </p>
                    <Neighborhoods location="Gold Coast" areas={goldCoastNeighborhoods} />
                    <ServiceArea location="Gold Coast" postcodes={goldCoastPostcodes} />
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                    {[
                        { q: "How much is a chauffeur from Gold Coast Airport to Surfers?", a: "Transfers typically cost between $90 and $120 depending on vehicle." },
                        { q: "Do you transfer to Brisbane Airport?", a: "Yes, we specialize in transfers between Gold Coast and Brisbane Airport (BNE)." },
                        { q: "Are child seats available?", a: "Yes, we provide Australian standard child seats for families visiting theme parks." },
                        { q: "Can you take surfboards?", a: "Yes, please request a vehicle with roof racks or a trailer when booking." },
                        { q: "Do you go to Byron Bay?", a: "Yes, we offer cross-border transfers to Byron Bay and Ballina Airport." }
                    ].map((faq, idx) => (
                        <details key={idx} style={{ marginBottom: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', background: 'white' }}>
                            <summary style={{ padding: '1rem', fontWeight: 'bold', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {faq.q}
                            </summary>
                            <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', color: '#4b5563' }}>
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>

                {/* EEAT Block (Dark) */}
                <section style={{ background: '#111827', color: 'white', padding: '5rem 1rem', borderRadius: '16px', marginTop: '4rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {/* Expertise */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Our Expertise</h3>
                            <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#d1d5db' }}>
                                Auzzie Chauffeur understands the holiday vibe of the Gold Coast. We provide relaxed yet professional service for families, couples, and business travelers. From airport meet-and-greets to seamless theme park drops, we take the stress out of your Gold Coast transport.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['QLD Accredited', 'Insured', 'Locally Based'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Perfect start to our holiday. Driver met us at OOL with a name sign and helped with all our bags.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Sarah, Broadbeach</cite>
                            </blockquote>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Reliable corporate transport for our conference at the Convention Centre. Highly recommended.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— James, Sydney</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Family Theme Park Trip</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A family of 6 staying in Surfers Paradise wanted to visit Movie World without renting a car.
                        <br /><strong>Solution:</strong> We provided a luxury People Mover with booster seats installed.
                        <br /><strong>Result:</strong> Door-to-door service dropped them at the front gate and picked them up when they were tired, saving them parking fees and shuttle bus waits.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Need airport transport? View our <Link href="/gold-coast/airport-transfers" className={styles.inlineLink}>Gold Coast Airport transfers</Link>.
                        Planning a wedding? See our <Link href="/gold-coast/wedding-cars" className={styles.inlineLink}>luxury wedding car fleet</Link>.
                        Want to visit Byron Bay? Look at our <Link href="/gold-coast/hourly-chauffeur" className={styles.inlineLink}>day tour options</Link>.
                        Book now via our <Link href="/contact-us" className={styles.inlineLink}>online booking page</Link>.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around the Gold Coast
                    </h3>
                    <p className={styles.directionsText}>
                        The Gold Coast is linear, stretching along the coast. The M1 Motorway is the main artery to Brisbane, while the Gold Coast Highway serves the beaches.
                        Our local drivers know the shortcuts to avoid the holiday traffic hotspots.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Gold+Coast,Queensland&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', textAlign: 'center' }}>
                            Visit our Gold Coast service hub; details provided upon booking.
                        </p>
                    </div>
                </div>

            </section>

            {/* Schema JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            { "@type": "Question", "name": "How much is a chauffeur from Gold Coast Airport to Surfers?", "acceptedAnswer": { "@type": "Answer", "text": "Transfers typically cost between $90 and $120 depending on vehicle." } },
                            { "@type": "Question", "name": "Do you transfer to Brisbane Airport?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in transfers between Gold Coast and Brisbane Airport (BNE)." } },
                            { "@type": "Question", "name": "Are child seats available?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide Australian standard child seats for families visiting theme parks." } },
                            { "@type": "Question", "name": "Can you take surfboards?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, please request a vehicle with roof racks or a trailer when booking." } },
                            { "@type": "Question", "name": "Do you go to Byron Bay?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer cross-border transfers to Byron Bay and Ballina Airport." } }
                        ]
                    })
                }}
            />

            <Footer />
        </main>
    );
}
