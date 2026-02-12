import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight, Map, Anchor, GraduationCap, Calendar, Calculator, UserCheck, Shield, CheckCircle, Phone, Wine } from "lucide-react";
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
    title: "Chauffeur Service Melbourne | Auzzie Chauffeur | Book Luxury Airport Limo",
    description: "Melbourne's premier chauffeur service. Luxury airport limo transfers (MEL), corporate transport, and tours of Victoria's cultural capital.",
    alternates: {
        canonical: '/melbourne',
    },
};

export default function MelbourneHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Premium transfers to Melbourne Airport (MEL) and Avalon.",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/melbourne/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for Melbourne's CBD and business districts.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/melbourne/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your Melbourne or Yarra Valley wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/melbourne/wedding-cars"
        },
        {
            title: "Hourly Limo Service",
            desc: "Explore the Yarra Valley, Great Ocean Road, or city laneways.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/melbourne/hourly-chauffeur"
        },
        {
            title: "Cruise Ship Transfers",
            desc: "Direct transfers to Station Pier for your cruise departure.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/melbourne/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Reliable transport for major events at MCEC and sporting venues.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/melbourne/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Safe arrival services for renowned Melbourne universities.",
            icon: <GraduationCap size={32} color="#c5a467" />,
            link: "/melbourne/international-student-transfers"
        },
        {
            title: "Luxury Tours",
            desc: "Private winery tours of Yarra Valley and Mornington Peninsula.",
            icon: <Wine size={32} color="#c5a467" />,
            link: "/melbourne/luxury-tours"
        }
    ];

    const melbourneNeighborhoods = [
        "Melbourne CBD", "South Yarra", "St Kilda", "Fitzroy",
        "Carlton", "Richmond", "Docklands", "Southbank"
    ];

    const melbournePostcodes = [
        "3000", "3001", "3002", "3003", "3004", "3005",
        "3006", "3008", "3031", "3051", "3052", "3053",
        "3054", "3056", "3065", "3066", "3067", "3068",
        "3121", "3141"
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Airport Limo Service in Melbourne (MEL & Avalon)"
                    subtitle="Explore Melbourne's laneways, culture, and surrounding wine regions in style with our premium chauffeur service."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Melbourne" />
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
                            How much does airport limo cost in Melbourne?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            <strong>Melbourne airport limo</strong> rides typically start from <strong>$110</strong> depending on vehicle class (Sedan, SUV, Van), time of day, and pickup distance. We run <strong>24/7</strong> with meet‑and‑greet, flight monitoring, and clear flat rates across the CBD and suburbs. Quotes are confirmed before pickup to avoid surprises.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            Disclaimer: Prices vary by vehicle class, timing, tolls, and exact address; confirm before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur Melbourne?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
                        {[
                            { title: "Flat rates, no surge", desc: "Clear quotes before dispatch; traffic or weather won’t change your fare.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Flight monitoring", desc: "Real-time tracking with flexible pickup for early/late arrivals at MEL.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "Meet‑and‑greet or curbside", desc: "Your choice, with luggage assistance.", icon: <UserCheck size={28} color="#c5a467" /> },
                            { title: "Licensed & insured", desc: "Professional, background‑checked chauffeurs and clean vehicles.", icon: <Shield size={28} color="#1e3a8a" /> },
                            { title: "24/7 coverage", desc: "Early mornings, late nights, weekends, and holidays handled with care.", icon: <Clock size={28} color="#c5a467" /> }
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

                {/* Common Trip Needs */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Common Trip Needs We Solve</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Last-minute flight changes — we adjust pickup windows automatically.",
                            "Terminal guidance — Qantas/Virgin/International terminal doors confirmed.",
                            "Heavy luggage — curbside loading help; SUVs for families and extra bags.",
                            "Child seats — infant/toddler/booster on request (pre‑book).",
                            "Corporate schedules — account billing and recurring rides.",
                            "Hotel/condo coordination — lobby meetups and elevator timing."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Melbourne Limo Pricing Guide</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e3a8a', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Service Route / Type</th>
                                    <th style={{ padding: '1rem' }}>Pricing Estimate</th>
                                    <th style={{ padding: '1rem' }}>Inclusions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Melbourne CBD ⇄ Airport (MEL) — Sedan", price: "$110 - $140", notes: "Flight monitoring; curbside or meet‑and‑greet; luggage help." },
                                    { route: "Melbourne CBD ⇄ Airport (MEL) — SUV", price: "$140 - $180", notes: "Extra luggage capacity; child seats on request." },
                                    { route: "Melbourne CBD ⇄ Avalon Airport — Sedan", price: "$200 - $250", notes: "Direct transfers via M1." },
                                    { route: "Hourly charter (City/Winery)", price: "$110/hr (min 2 hrs)", notes: "Flexible scheduling for errands, hotel hops, events." }
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
                        Note: Rates depend on vehicle class, time of day, and precise pickup address in Melbourne; pricing is always confirmed before pickup.
                    </p>
                </div>


                <h2 className={styles.sectionTitle}>Popular Uses for Chauffeur Services</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    textAlign: 'left',
                    marginBottom: '4rem'
                }}>
                    {services.map((s, idx) => (
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

                <h2 className={styles.sectionTitle}>Process (3 Steps to Ride)</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem' }}>
                    {[
                        { step: "1", title: "Book", desc: "Reserve online or call for instant confirmation." },
                        { step: "2", title: "Track", desc: "We monitor flights/traffic and text your pickup details." },
                        { step: "3", title: "Ride", desc: "Relax in a clean sedan or SUV with a professional chauffeur." }
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

                <div className="max-w-7xl mx-auto px-4">
                    <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '1rem', textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>Coverage & Localization</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.7', color: '#4b5563' }}>
                            We serve <strong>Melbourne CBD</strong>, <strong>Docklands</strong>, <strong>Southbank</strong>, plus neighborhoods like <strong>South Yarra</strong>, <strong>Toorak</strong>, <strong>St Kilda</strong>, <strong>Brighton</strong>, and <strong>Kew</strong>. Postal areas include <strong>3000</strong>, <strong>3004</strong>, and <strong>3141</strong>. Expect predictable travel via CityLink, M1, and Nepean Highway.
                        </p>
                    </div>

                    <Neighborhoods location="Melbourne" areas={melbourneNeighborhoods} />

                    <ServiceArea location="Melbourne" postcodes={melbournePostcodes} />

                    <BusinessHours />

                    <ContactInfo city="Melbourne" />

                    <LocationTestimonials city="Melbourne" />

                    <LocationFAQ city="Melbourne" />

                    {/* Directions Section */}
                    <div className={styles.directionsSection}>
                        <h3 className={styles.directionsTitle}>
                            <Map color="#c5a467" /> Getting Around Melbourne
                        </h3>
                        <p className={styles.directionsText}>
                            Melbourne's grid system is straightforward, but our chauffeurs know the best routes to avoid traffic.
                            Whether you're heading to the airport, Yarra Valley, or the Great Ocean Road, we ensure a smooth journey.
                        </p>
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Melbourne,Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                                style={{ border: 0, width: '100%', height: '100%' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </section>

            {/* EEAT Block (Dark) */}
            <section style={{ background: '#111827', color: 'white', padding: '5rem 1rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {/* Expertise */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Our Expertise</h3>
                        <p style={{ lineHeight: '1.7', marginBottom: '1.5rem', color: '#d1d5db' }}>
                            We’ve served Melbourne travelers for <strong>10+ years</strong> with commercial insurance, licensed chauffeurs, and safety‑first training. We verify identity on arrival, use shoe covers upon request, and provide written confirmations for transparency.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {['Licensed', 'Insured', 'Background-checked'].map((badge, idx) => (
                                <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                            ))}
                        </div>
                    </div>
                    {/* Testimonial Highlight */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Review</h3>
                        <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem' }}>
                            <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“On‑time pickup from South Yarra and smooth ride to Tullamarine. The chauffeur was professional and the car immaculate.”</p>
                            <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Sarah, South Yarra</cite>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section style={{ textAlign: 'center', padding: '5rem 1.5rem', backgroundColor: '#fff' }}>
                <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '20px', display: 'inline-block', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#1e293b' }}>Ready to Book Your Melbourne Ride?</h2>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:1300465374" style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '1rem 2rem', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Phone size={20} /> Call Now
                        </a>
                        <Link href="/book" style={{ backgroundColor: '#c5a467', color: 'white', padding: '1rem 2rem', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            Book Online Today
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
