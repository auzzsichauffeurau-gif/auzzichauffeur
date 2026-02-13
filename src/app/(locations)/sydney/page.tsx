import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight, Map, Anchor, Shield, CheckCircle, Calculator, UserCheck, Calendar } from "lucide-react";
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
    title: { absolute: "Trusted Limo Service in Sydney | Auzzie Chauffeur | Ride in Style" },
    description: "Luxury limo service in Sydney near CBD, 2000 & North Shore. Flat-rate, licensed rides with no hidden fees. Call or book online today for a smooth journey.",
    alternates: {
        canonical: '/sydney',
    },
};

export default function SydneyHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Premier transfers to Sydney Kingsford Smith (SYD).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/sydney/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for the CBD, North Sydney, and Barangaroo.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/sydney/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your harbourside or Northern Beaches wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/sydney/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of the Blue Mountains, Hunter Valley, or City sights.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/sydney/hourly-chauffeur"
        },
        {
            title: "Cruise Ship Transfers",
            desc: "Seamless transfers to Circular Quay and White Bay terminals.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/sydney/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Corporate transport for ICC Sydney and major conventions.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/sydney/conferences-special-events"
        }
    ];

    const sydneyNeighborhoods = [
        "Sydney CBD", "Bondi Beach", "Surry Hills", "Newtown",
        "Paddington", "Manly", "The Rocks", "Circular Quay"
    ];

    const sydneyPostcodes = [
        "2000", "2001", "2007", "2008", "2009", "2010",
        "2011", "2015", "2016", "2017", "2018", "2021",
        "2022", "2026", "2027", "2028", "2030", "2095",
        "2060", "2150"
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Sydney" />

            {/* HER0 SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Sydney’s Reliable Limo Service — Comfort You Can Count On"
                    subtitle="Rely on Auzzie Chauffeur in Sydney when you need a smooth, punctual ride—whether it’s to the airport, a business meeting, or a night out."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Sydney" />
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
                            How much does limo service cost in Sydney?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Limo service in Sydney typically runs between <strong>$120 and $300</strong>, depending on timing, vehicle, and trip distance. We operate <strong>24/7</strong>, including early mornings, late nights, and holidays—serving areas such as <strong>2000 (CBD)</strong> and <strong>2060 (North Sydney)</strong> for your convenience.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            Prices vary by model and toll routes; confirm before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Licensed & Insured", desc: "We’re Point to Point (NSW) authorized and fully insured for your safety and peace of mind.", icon: <Shield size={28} color="#1e3a8a" /> },
                            { title: "No Hidden Fees", desc: "The price you see is the price you pay—no surprises at the end of your ride.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Professional Drivers", desc: "Background-checked chauffeurs, wearing ID badges and arriving on time.", icon: <UserCheck size={28} color="#1e3a8a" /> },
                            { title: "Always On", desc: "Our service runs 24/7, so you can book a ride in the middle of the night or early morning—no delays.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Spotlessly Clean Fleet", desc: "Luxury vehicles maintained to high standards, with bottled water and quiet cabins.", icon: <CheckCircle size={28} color="#1e3a8a" /> }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Common Problems We Solve</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Missed or delayed airport rides – caused by taxi shortages or ride-share surge pricing.",
                            "Last-minute event transport – when you need a reliable ride quickly.",
                            "Tight schedules for professionals – needing quiet, dependable rides to meetings.",
                            "Group travel hassles – fitting everyone comfortably after parties or gatherings.",
                            "Long waits for rides during peak hours – when regular options aren’t available.",
                            "Lost or forgotten luggage at airports – made less stressful with meet-and-greet service.",
                            "Lack of vehicle familiarity – leave navigation and traffic to us in Sydney’s busy streets."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Typical Pricing Table</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Service Type</th>
                                    <th style={{ padding: '1rem' }}>Price Range</th>
                                    <th style={{ padding: '1rem' }}>What’s Included</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Airport Transfer (SYD)", price: "$120–$180", notes: "Flight tracking, meet & greet, luggage assistance, wait time" },
                                    { route: "Hourly Limo Service", price: "$120–$160/hr", notes: "Chauffeur, fuel, bottled water, clean luxury vehicle" },
                                    { route: "Private Blue Mountains Tour", price: "$800–$1200", notes: "Round-trip, 8-10 hours, photo stops, guided route" }
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
                        (Note: Pricing is indicative and varies by vehicle size, tour length, and exact timing.)
                    </p>
                </div>

                {/* 3 Step Process */}
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>3-Step Process</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', marginTop: '2rem' }}>
                    {[
                        { step: "1", title: "Book", desc: "Use our website form or call anytime—we’re open 24/7." },
                        { step: "2", title: "Confirm", desc: "Receive instant confirmation with driver contact, vehicle details, and clear pricing." },
                        { step: "3", title: "Ride", desc: "Your chauffeur arrives early, greets you with professionalism, and gets you there comfortably." }
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
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>Coverage & Localization</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.7', color: '#4b5563' }}>
                        We serve many parts of Sydney, including <strong>Surry Hills</strong>, <strong>Paddington</strong>, and <strong>Manly</strong>. You’ll often find our sleek SUVs and stretch limos near landmarks like the <strong>Opera House</strong>, <strong>Darling Harbour</strong>, and <strong>Bondi Beach</strong>. We regularly pick up and drop off in postal areas like <strong>2000</strong>, <strong>2010</strong>, and <strong>2026</strong>, ensuring fast access whether you’re downtown or in the suburbs. If you’re heading beyond Sydney, we also serve <strong>Newcastle</strong>, <strong>Wollongong</strong>, and the <strong>Central Coast</strong> with the same touch of luxury.
                    </p>
                    <Neighborhoods location="Sydney" areas={sydneyNeighborhoods} />
                    <ServiceArea location="Sydney" postcodes={sydneyPostcodes} />
                </div>

                {/* PAA / FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                    {[
                        { q: "How much does limo service cost in Sydney?", a: "Generally, rides range from $120 to $300 based on vehicle type, trip length, and timing." },
                        { q: "Can I get a limo same-day or after hours?", a: "Yes—we’re available 24/7, even on holidays and late nights." },
                        { q: "Are your vehicles licensed and insured?", a: "Yes. All our limos are Point to Point authorized, NSW licensed, and insured." },
                        { q: "Do you serve homes, offices, and hotels?", a: "Absolutely. We pick up and drop off at residential, commercial, and hotel locations alike." },
                        { q: "What’s your service guarantee?", a: "We guarantee punctual pick-ups, full transparency in pricing, and written confirmations." }
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
                                For over <strong>15 years</strong>, Auzzie Chauffeur has served Sydney and its surrounding communities with safe, professional rides. As a Point to Point authorized company, we’ve completed thousands of rides with a <strong>98% on-time record</strong>. Our chauffeurs are ID-verified, professionally attired, and provide clear, written estimates to protect you from surprises.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['Licensed', 'Insured', 'Background-checked'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Super clean vehicle and the driver was right on time. Made my airport run smooth.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— James, 2026</cite>
                            </blockquote>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Professional and courteous service from North Sydney to downtown—no stress, just comfort.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Sarah, North Sydney</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Circular Quay</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Problem:</strong> A family needed transport from Circular Quay to Sydney Airport on short notice after a late evening cruise arrival.
                        <br /><strong>Fix:</strong> We dispatched a licensed driver within 30 minutes.
                        <br /><strong>Outcome:</strong> The vehicle arrived 10 minutes early and got them to the airport stress-free in 40 minutes, just in time to catch their flight.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Need an easy ride to the airport? Check out our <Link href="/sydney/airport-transfers" className={styles.inlineLink}>airport transfer service</Link> for flight-aware pickups.
                        Planning a special day trip? Explore our <Link href="/sydney/luxury-tours" className={styles.inlineLink}>private specialized tours</Link> for a luxurious, memorable outing.
                        Looking for flexible timing? View our <Link href="/sydney/hourly-chauffeur" className={styles.inlineLink}>hourly limo service</Link>—perfect for downtown runs, meetings, or weddings.
                        Ready to ride? Visit our <Link href="/contact-us" className={styles.inlineLink}>contact page</Link> to book or request a custom quote.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Sydney
                    </h3>
                    <p className={styles.directionsText}>
                        Navigating Sydney can be complex with its one-way streets and toll roads.
                        Our chauffeurs are experts in the local area, ensuring the most efficient routes
                        whether you are heading to the Airport, CBD, or Western Suburbs.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Sydney,Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                            style={{ border: 0, width: '100%', height: '100%' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', textAlign: 'center' }}>
                            Visit our Sydney service hub near Circular Quay; parking and entry details provided upon booking.
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
                            { "@type": "Question", "name": "How much does limo service cost in Sydney?", "acceptedAnswer": { "@type": "Answer", "text": "Generally, rides range from $120 to $300 based on vehicle type, trip length, and timing." } },
                            { "@type": "Question", "name": "Can I get a limo same-day or after hours?", "acceptedAnswer": { "@type": "Answer", "text": "Yes—we’re available 24/7, even on holidays and late nights." } },
                            { "@type": "Question", "name": "Are your vehicles licensed and insured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All our limos are Point to Point authorized, NSW licensed, and insured." } },
                            { "@type": "Question", "name": "Do you serve homes, offices, and hotels?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We pick up and drop off at residential, commercial, and hotel locations alike." } },
                            { "@type": "Question", "name": "What’s your service guarantee?", "acceptedAnswer": { "@type": "Answer", "text": "We guarantee punctual pick-ups, full transparency in pricing, and written confirmations." } }
                        ]
                    })
                }}
            />

            <Footer />
        </main>
    );
}
