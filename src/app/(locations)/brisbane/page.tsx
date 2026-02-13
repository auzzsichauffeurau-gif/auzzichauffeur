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
    title: { absolute: "Trusted Chauffeur Service in Brisbane | Auzzie Chauffeur | Luxury Transfers" },
    description: "Premium chauffeur service in Brisbane (BNE) & Gold Coast. Flat-rate, licensed airport transfers & corporate travel. Call or book online 24/7.",
    alternates: {
        canonical: '/brisbane',
    },
};

export default function BrisbaneHubPage() {
    const brisbaneNeighborhoods = [
        "Brisbane CBD", "Fortitude Valley", "South Bank", "New Farm",
        "Paddington", "West End", "Kangaroo Point", "Spring Hill"
    ];

    const brisbanePostcodes = [
        "4000", "4001", "4005", "4006", "4007", "4009",
        "4010", "4011", "4012", "4051", "4059", "4060",
        "4064", "4065", "4066", "4067", "4068", "4101"
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Brisbane" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Brisbane’s Premier Chauffeur Service — Sunshine State Luxury"
                    subtitle="Reliable transfers from Brisbane Airport (BNE) to the CBD, Gold Coast, and Sunshine Coast. Experience professional, punctual service every time."
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
                            How much does chauffeur service cost in Brisbane?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Chauffeur service in Brisbane starts from around <strong>$100 - $130</strong> for CBD airport transfers. Trips to the <strong>Gold Coast</strong> typically range from <strong>$220 - $280</strong>. We operate <strong>24/7</strong> with fixed pricing, serving areas like <strong>4000 (City)</strong>, <strong>4006 (Fortitude Valley)</strong>, and <strong>4101 (South Bank)</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            Prices vary by vehicle type and toll roads; confirm before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur Brisbane?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "QLD Accredited", desc: "Fully licensed and insured operators complying with Queensland Transport regulations.", icon: <Shield size={28} color="#1e3a8a" /> },
                            { title: "Fixed Rates", desc: "No surge pricing during peak hours or summer heatwaves. Know your fare upfront.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Flight Monitoring", desc: "We track your flight into BNE to ensure we are there when you land, even if you're delayed.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "24/7 Support", desc: "Early morning flight to Sydney? Late arrival from overseas? We are always available.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Premium Comfort", desc: "Climate-controlled luxury vehicles perfect for the Queensland climate.", icon: <CheckCircle size={28} color="#1e3a8a" /> }
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
                            "Unreliable rideshares cancelling at the last minute.",
                            "Long taxi queues at Brisbane domestic and international terminals.",
                            "Navigating unfamiliar toll roads and tunnels around the city.",
                            "Transporting heavy luggage or golf clubs for Gold Coast trips.",
                            "Ensuring child seats are installed and ready for family holidays.",
                            "Coordinating multiple vehicle pickups for corporate events at BCEC."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Brisbane Pricing Guide</h2>
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
                                    { route: "Brisbane CBD ⇄ Airport (BNE)", price: "$100 - $140", notes: "Flight tracking, meet & greet, luggage help." },
                                    { route: "Brisbane ⇄ Gold Coast", price: "$220 - $280", notes: "Direct door-to-door transfer via M1." },
                                    { route: "Brisbane ⇄ Sunshine Coast", price: "$250 - $350", notes: "Comfortable long-distance luxury sedan/SUV." },
                                    { route: "Hourly Charter", price: "$110/hr (min 2 hrs)", notes: "Flexible for business meetings or tours." }
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
                        { title: "Airport Transfers", desc: "Premium chauffeur service to Brisbane Airport (BNE).", icon: <Plane size={32} color="#c5a467" />, link: "/brisbane/airport-transfers" },
                        { title: "Corporate Travel", desc: "Executive transport for Brisbane CBD and Eagle Street.", icon: <Briefcase size={32} color="#1e3a8a" />, link: "/brisbane/corporate-transfers" },
                        { title: "Wedding Cars", desc: "Luxury bridal cars for your special day in Queensland.", icon: <Heart size={32} color="#c5a467" />, link: "/brisbane/wedding-cars" },
                        { title: "Hourly Hire", desc: "Flexible hourly charter for city meetings or events.", icon: <Clock size={32} color="#1e3a8a" />, link: "/brisbane/hourly-chauffeur" },
                        { title: "Cruise Transfers", desc: "Direct to Brisbane International Cruise Terminal.", icon: <Anchor size={32} color="#c5a467" />, link: "/brisbane/cruise-ship-transfers" },
                        { title: "Special Events", desc: "Transport for Gabba, Suncorp Stadium, and concerts.", icon: <Calendar size={32} color="#1e3a8a" />, link: "/brisbane/conferences-special-events" },
                        { title: "Student Transfers", desc: "Safe arrival for UQ, QUT, and Griffith students.", icon: <GraduationCap size={32} color="#c5a467" />, link: "/brisbane/international-student-transfers" },
                        { title: "Luxury Tours", desc: "Private tours to Mt Tamborine and Australia Zoo.", icon: <Wine size={32} color="#1e3a8a" />, link: "/brisbane/luxury-tours" }
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
                        We extensively cover the <strong>Greater Brisbane</strong> area, including <strong>Fortitude Valley</strong>, <strong>New Farm</strong>, and <strong>South Bank</strong>. Whether you need a ride to the <strong>Cruise Terminal</strong> or a transfer to the <strong>Gold Coast</strong> theme parks, we have you covered. Key postcodes include <strong>4000</strong>, <strong>4006</strong>, and <strong>4101</strong>.
                    </p>
                    <Neighborhoods location="Brisbane" areas={brisbaneNeighborhoods} />
                    <ServiceArea location="Brisbane" postcodes={brisbanePostcodes} />
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                    {[
                        { q: "How much is a chauffeur from Brisbane Airport to City?", a: "Transfers typically cost between $100 and $130 depending on the vehicle." },
                        { q: "Do you go to the Gold Coast?", a: "Yes, we provide direct door-to-door transfers to all Gold Coast hotels and suburbs." },
                        { q: "Are child seats available?", a: "Yes, we can provide baby capsules, booster seats, and rear-facing seats upon request." },
                        { q: "What if my flight is delayed?", a: "We monitor all incoming flights at BNE and adjust your pickup time automatically." },
                        { q: "Can I book for an early morning flight?", a: "Absolutely. We operate 24/7 to ensure you never miss a flight." }
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
                                Auzzie Chauffeur has been a trusted name in Brisbane transport for over a decade. We ensure all drivers are QLD accredited and vehicles are inspected regularly. Our focus is on safety, punctuality, and providing a premium experience for every passenger.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['QLD Accredited', 'Insured', 'Professional'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Excellent service from Brisbane Airport to the Gold Coast. So much better than a taxi.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Michael, Broadbeach</cite>
                            </blockquote>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Used Auzzie Chauffeur for our corporate guests. Punctual and professional.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Jessica, Brisbane CBD</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: South Bank Event</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A group of executives needed transport from three different hotels to the Brisbane Convention & Exhibition Centre.
                        <br /><strong>Solution:</strong> We coordinated three luxury sedans to arrive simultaneously.
                        <br /><strong>Result:</strong> All attendees arrived together, on time, and relaxed, making a great impression for their conference.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Heading to the airport? Book our <Link href="/brisbane/airport-transfers" className={styles.inlineLink}>airport transfer service</Link>.
                        Getting married? Check out our <Link href="/brisbane/wedding-cars" className={styles.inlineLink}>wedding car packages</Link>.
                        Need a ride for a special event? Try our <Link href="/brisbane/hourly-chauffeur" className={styles.inlineLink}>hourly service</Link>.
                        Visit our <Link href="/contact-us" className={styles.inlineLink}>contact page</Link> for any enquiries.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Brisbane
                    </h3>
                    <p className={styles.directionsText}>
                        Brisbane's river layout can make navigation tricky. Trust our local experts to take the best routes,
                        whether it's the Airport Link tunnel or the Gateway Motorway to the coast.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Brisbane,Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', textAlign: 'center' }}>
                            Visit our Brisbane service hub; details provided upon booking.
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
                            { "@type": "Question", "name": "How much is a chauffeur from Brisbane Airport to City?", "acceptedAnswer": { "@type": "Answer", "text": "Transfers typically cost between $100 and $130 depending on the vehicle." } },
                            { "@type": "Question", "name": "Do you go to the Gold Coast?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide direct door-to-door transfers to all Gold Coast hotels and suburbs." } },
                            { "@type": "Question", "name": "Are child seats available?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can provide baby capsules, booster seats, and rear-facing seats upon request." } },
                            { "@type": "Question", "name": "What if my flight is delayed?", "acceptedAnswer": { "@type": "Answer", "text": "We monitor all incoming flights at BNE and adjust your pickup time automatically." } },
                            { "@type": "Question", "name": "Can I book for an early morning flight?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We operate 24/7 to ensure you never miss a flight." } }
                        ]
                    })
                }}
            />

            <Footer />
        </main>
    );
}
