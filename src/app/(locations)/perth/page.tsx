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
    title: "Chauffeur Service Perth | Auzzie Chauffeur | Trusted Private Driver",
    description: "Book premium chauffeur service in Perth (PER) & Fremantle. Luxury airport transfers, corporate cars & Swan Valley tours. 24/7 Fixed Price.",
    alternates: {
        canonical: '/perth',
    },
};

export default function PerthHubPage() {
    const perthNeighborhoods = [
        "Perth CBD", "Subiaco", "East Perth", "West Perth",
        "Elizabeth Quay", "Northbridge", "Leederville", "South Perth"
    ];

    const perthPostcodes = [
        "6000", "6004", "6005", "6007", "6008", "6100",
        "6107", "6151", "6152", "6160", "6011", "6018"
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Perth" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Perth’s Premier Chauffeur Service — West Coast Luxury"
                    subtitle="Reliable transfers from Perth Airport (PER) to the CBD, Fremantle, and Swan Valley. Experience professional, punctual service in WA."
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
                            How much does chauffeur service cost in Perth?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Chauffeur service in Perth starts from around <strong>$95 - $125</strong> for CBD airport transfers. Hourly hire typically ranges from <strong>$100 - $140 per hour</strong>. We operate <strong>24/7</strong> with fixed pricing, serving areas like <strong>6000 (City)</strong>, <strong>6008 (Subiaco)</strong>, and <strong>6160 (Fremantle)</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            Prices vary by vehicle type and time; confirm before booking.
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
                            { title: "WA Accredited", desc: "Fully licensed Omnibus operators complying with Western Australia DOT regulations.", icon: <Shield size={28} color="#1e3a8a" /> },
                            { title: "Fixed Rates", desc: "No surge pricing during FIFO swing changes or major Optus Stadium events.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Flight Monitoring", desc: "We track your flight into PER (T1/T2/T3/T4) to ensure we overlap perfectly with your arrival.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "24/7 Support", desc: "Red-eye flight from the East Coast? We are always awake and ready to drive.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Mining & Corporate", desc: "Experienced in handling corporate accounts for mining and resources executives.", icon: <CheckCircle size={28} color="#1e3a8a" /> }
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
                            "Unreliable rideshares canceling during peak FIFO times.",
                            "Long taxi queues at Perth Airport late at night.",
                            "Seamless transfers between Domestic (T3/T4) and International (T1) terminals.",
                            "Transporting heavy equipment or luggage for mining personnel.",
                            "Ensuring VIP guests arrive on time for events at Crown Perth.",
                            "Relaxed wine tours in the Swan Valley without a designated driver."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Pricing Guide</h2>
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
                                    { route: "Perth CBD ⇄ Airport (PER)", price: "$95 - $135", notes: "Flight tracking, meet & greet, luggage help." },
                                    { route: "Perth ⇄ Fremantle", price: "$110 - $150", notes: "Direct transfer for cruise passengers or tourists." },
                                    { route: "Perth ⇄ Mandurah", price: "$200 - $280", notes: "Comfortable long-distance luxury sedan/SUV." },
                                    { route: "Swan Valley Wine Tour", price: "$100 - $140/hr", notes: "Flexible multi-stop charter (min 3 hrs)." }
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
                        { title: "Airport Transfers", desc: "Premium transfers to Perth Airport (PER).", icon: <Plane size={32} color="#c5a467" />, link: "/perth/airport-transfers" },
                        { title: "Corporate Travel", desc: "CBD transfers for minerals and energy executives.", icon: <Briefcase size={32} color="#1e3a8a" />, link: "/perth/corporate-transfers" },
                        { title: "Wedding Cars", desc: "Luxury cars for King's Park and Swan Valley weddings.", icon: <Heart size={32} color="#c5a467" />, link: "/perth/wedding-cars" },
                        { title: "Hourly Hire", desc: "Flexible charter for city or Fremantle visits.", icon: <Clock size={32} color="#1e3a8a" />, link: "/perth/hourly-chauffeur" },
                        { title: "Cruise Transfers", desc: "Transfers to Fremantle Passenger Terminal.", icon: <Anchor size={32} color="#c5a467" />, link: "/perth/cruise-ship-transfers" },
                        { title: "Special Events", desc: "Transport for Optus Stadium and RAC Arena.", icon: <Calendar size={32} color="#1e3a8a" />, link: "/perth/conferences-special-events" },
                        { title: "Student Transfers", desc: "Transfers for UWA, Curtin, and Murdoch.", icon: <GraduationCap size={32} color="#c5a467" />, link: "/perth/international-student-transfers" },
                        { title: "Luxury Tours", desc: "Swan Valley wine tours and Pinnacles day trips.", icon: <Wine size={32} color="#1e3a8a" />, link: "/perth/luxury-tours" }
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
                        We extensively cover the <strong>Perth Metropolitan</strong> area, including <strong>Subiaco</strong>, <strong>South Perth</strong>, and <strong>Scarborough</strong>. Whether you need a ride to the <strong>Fremantle Passenger Terminal</strong> or a transfer to <strong>O'Connor</strong> industrial areas, we have you covered. Key postcodes include <strong>6000</strong>, <strong>6008</strong>, and <strong>6160</strong>.
                    </p>
                    <Neighborhoods location="Perth" areas={perthNeighborhoods} />
                    <ServiceArea location="Perth" postcodes={perthPostcodes} />
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                    {[
                        { q: "How much is a chauffeur from Perth Airport to City?", a: "Transfers typically cost between $95 and $135 depending on the vehicle." },
                        { q: "Do you supply child seats?", a: "Yes, Australian standard child seats are available on request for a small fee." },
                        { q: "Can you pick up from FIFO terminals?", a: "Yes, we monitor Cobham, Network, and Skippers flights as well as main terminals." },
                        { q: "Is the price fixed?", a: "Yes, our quotes are fixed. No meters and no surge pricing." },
                        { q: "Do you offer wine tours?", a: "Absolutely. We offer customizable private wine tours in the Swan Valley." }
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
                                Auzzie Chauffeur provides reliable luxury transport across Western Australia. We understand the unique needs of FIFO workers, corporate executives, and holidaymakers. With WA accreditation and a fleet of late-model vehicles, we ensure a safe and comfortable journey every time.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['WA Accredited', 'Insured', 'Expert Drivers'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Great driver, beautiful car, and very punctual for my 5am flight departure to the mines.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— David, Scarborough</cite>
                            </blockquote>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“We booked a Swan Valley wine tour for our anniversary. The service was impeccable.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Emma, South Perth</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: International Arrival</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A family of 5 arriving from London with excessive luggage into T1 International.
                        <br /><strong>Solution:</strong> We provided a Mercedes V-Class Van with ample luggage space and a trailer attached.
                        <br /><strong>Result:</strong> We met them at arrivals, assisted with trolleys, and transported everyone comfortably to their Fremantle hotel in one trip.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Need airport transport? View our <Link href="/perth/airport-transfers" className={styles.inlineLink}>Perth Airport transfer options</Link>.
                        Planning a wedding? See our <Link href="/perth/wedding-cars" className={styles.inlineLink}>luxury wedding car fleet</Link>.
                        Want to tour the wineries? Look at our <Link href="/perth/hourly-chauffeur" className={styles.inlineLink}>Swan Valley tour packages</Link>.
                        Book now via our <Link href="/contact-us" className={styles.inlineLink}>online booking page</Link>.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Perth
                    </h3>
                    <p className={styles.directionsText}>
                        From the Kwinana Freeway to the Graham Farmer Freeway, Perth has excellent roads.
                        Our drivers know the quickest routes to avoid peak hour congestion on the Narrows Bridge.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Perth,Western+Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                            style={{ border: 0, width: '100%', height: '100%' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', textAlign: 'center' }}>
                            Visit our Perth service hub; details provided upon booking.
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
                            { "@type": "Question", "name": "How much is a chauffeur from Perth Airport to City?", "acceptedAnswer": { "@type": "Answer", "text": "Transfers typically cost between $95 and $135 depending on the vehicle." } },
                            { "@type": "Question", "name": "Do you supply child seats?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Australian standard child seats are available on request for a small fee." } },
                            { "@type": "Question", "name": "Can you pick up from FIFO terminals?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we monitor Cobham, Network, and Skippers flights as well as main terminals." } },
                            { "@type": "Question", "name": "Is the price fixed?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our quotes are fixed. No meters and no surge pricing." } },
                            { "@type": "Question", "name": "Do you offer wine tours?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We offer customizable private wine tours in the Swan Valley." } }
                        ]
                    })
                }}
            />

            <Footer />
        </main>
    );
}
