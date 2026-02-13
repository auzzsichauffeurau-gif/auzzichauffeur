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
    title: { absolute: "Chauffeur Service Hobart | Auzzie Chauffeur | Tasmania Luxury" },
    description: "Book premium chauffeur service in Hobart. Luxury airport transfers (HBA), MONA tours, and private driver hire for weddings and corporate events.",
};

export default function HobartHubPage() {
    const hobartNeighborhoods = [
        "Hobart CBD", "Battery Point", "Sandy Bay", "North Hobart",
        "West Hobart", "South Hobart", "Bellerive", "Glenorchy"
    ];

    const hobartPostcodes = [
        "7000", "7004", "7005", "7008", "7009", "7010",
        "7011", "7015", "7018", "7050", "7170", "7172"
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Hobart" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hobart’s Premier Chauffeur Service — Tasmanian Luxury"
                    subtitle="Reliable transfers from Hobart Airport (HBA) to the CBD, MONA, and Port Arthur. Experience professional, punctual service in Tassie."
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
                            How much does chauffeur service cost in Hobart?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Chauffeur service in Hobart starts from around <strong>$85 - $115</strong> for airport transfers (HBA) to the CBD. Private tours to <strong>Port Arthur</strong> or <strong>MONA</strong> are typically charged hourly at <strong>$100 - $135/hr</strong>. We operate <strong>24/7</strong>, serving areas like <strong>Battery Point (7004)</strong>, <strong>Sandy Bay (7005)</strong>, and <strong>Salamanca</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            Prices vary by vehicle type and tour distance; confirm before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur Hobart?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "TAS Accredited", desc: "Fully licensed private hire operators complying with Tasmanian transport regulations.", icon: <Shield size={28} color="#1e3a8a" /> },
                            { title: "Fixed Rates", desc: "No surge pricing during Dark Mofo, Taste of Tasmania, or the Sydney-Hobart Yacht Race.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Flight Monitoring", desc: "We track your flight into HBA to ensure we greet you at arrivals, warm car ready.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "Tour Experts", desc: "Our drivers know the history of Port Arthur and the best wines in Richmond.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Winter Ready", desc: "Vehicles equipped for Tasmanian conditions, ensuring safety on wet or icy roads.", icon: <CheckCircle size={28} color="#1e3a8a" /> }
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
                            "Avoiding the long wait for taxis at Hobart Airport on cold nights.",
                            "Reliable transport to MONA (Museum of Old and New Art) in style.",
                            "Day trips to Port Arthur Historic Site without the hassle of a bus.",
                            "Seamless transfers for wedding guests to venues in the Huon Valley.",
                            "Transporting heavy winter luggage and golf clubs.",
                            "Ensuring VIP guests arrive on time for conferences at the Grand Chancellor."
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
                                    <th style={{ padding: '1rem' }}>Service Route / Type</th>
                                    <th style={{ padding: '1rem' }}>Price Range</th>
                                    <th style={{ padding: '1rem' }}>Inclusions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Hobart CBD ⇄ Airport (HBA)", price: "$85 - $115", notes: "Flight tracking, meet & greet, luggage help." },
                                    { route: "Hobart ⇄ Port Arthur", price: "$350 - $450 (Return)", notes: "Full day waiting options available." },
                                    { route: "Hobart ⇄ MONA", price: "$90 - $120", notes: "Private door-to-door transfer." },
                                    { route: "Private Tour Charter", price: "$100 - $135/hr", notes: "Flexible itinerary (min 3 hrs)." }
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
                        { title: "Airport Transfers", desc: "Transfers to Hobart International (HBA).", icon: <Plane size={32} color="#c5a467" />, link: "/hobart/airport-transfers" },
                        { title: "Corporate Travel", desc: "For meetings in Hobart CBD and Salamanca.", icon: <Briefcase size={32} color="#1e3a8a" />, link: "/hobart/corporate-transfers" },
                        { title: "Wedding Cars", desc: "Luxury cars for winery or waterfront weddings.", icon: <Heart size={32} color="#c5a467" />, link: "/hobart/wedding-cars" },
                        { title: "Hourly Hire", desc: "Day trips to Port Arthur or Huon Valley.", icon: <Clock size={32} color="#1e3a8a" />, link: "/hobart/hourly-chauffeur" },
                        { title: "Cruise Transfers", desc: "Transfers to Macquarie Wharf Cruise Terminal.", icon: <Anchor size={32} color="#c5a467" />, link: "/hobart/cruise-ship-transfers" },
                        { title: "Special Events", desc: "Transport for Dark Mofo and Taste of Tasmania.", icon: <Calendar size={32} color="#1e3a8a" />, link: "/hobart/conferences-special-events" },
                        { title: "Student Transfers", desc: "Transfers for UTAS Sandy Bay and City.", icon: <GraduationCap size={32} color="#c5a467" />, link: "/hobart/international-student-transfers" },
                        { title: "Luxury Tours", desc: "Port Arthur, MONA, and Huon Valley private tours.", icon: <Wine size={32} color="#1e3a8a" />, link: "/hobart/luxury-tours" }
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
                        We extensively cover the <strong>Greater Hobart</strong> area, including <strong>Battery Point</strong>, <strong>Sandy Bay</strong>, and <strong>Salamanca</strong>. We also service major tourist destinations like <strong>Port Arthur</strong>, <strong>Richmond</strong>, and <strong>Mount Wellington</strong>. Key postcodes include <strong>7000</strong>, <strong>7004</strong>, and <strong>7005</strong>.
                    </p>
                    <Neighborhoods location="Hobart" areas={hobartNeighborhoods} />
                    <ServiceArea location="Hobart" postcodes={hobartPostcodes} />
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                    {[
                        { q: "How much is a taxi vs chauffeur from Hobart Airport?", a: "Taxis vary by meter, but our chauffeur service offers fixed pricing from $85-115 with premium service." },
                        { q: "Do you offer Port Arthur day trips?", a: "Yes, we provide full-day private charters to Port Arthur, giving you flexibility to explore at your own pace." },
                        { q: "Are child seats available?", a: "Yes, we can provide Australian standard baby capsules and booster seats on request." },
                        { q: "What happens if my flight into HBA is delayed?", a: "We monitor all incoming flights and will adjust your pickup time automatically." },
                        { q: "Can you pick up from the Cruise Terminal?", a: "Yes, we can meet you at the Macquarie Wharf Cruise Terminal for shore excursions." }
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
                                Auzzie Chauffeur brings a touch of luxury to the rugged beauty of Tasmania. Our drivers are experienced locals who know how to navigate the city's one-way systems and the winding country roads safely. We pride ourselves on punctuality and discretionary service for VIP guests.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['TAS Accredited', 'Insured', 'Local Experts'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“We booked a day trip to Port Arthur. Our driver was fantastic, very knowledgeable and polite.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Elizabeth, Battery Point</cite>
                            </blockquote>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Excellent service from the airport to our hotel. The car was spotless.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— David, Melbourne</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Dark Mofo Transfer</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A group of VIPs attending the Dark Mofo festival needed transport between events and their private accommodation.
                        <br /><strong>Solution:</strong> We provided two Mercedes V-Class vans on standby for the evening.
                        <br /><strong>Result:</strong> Seamless movement between venues, avoiding the cold and crowds, ensuring a premium festival experience.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Need airport transport? View our <Link href="/hobart/airport-transfers" className={styles.inlineLink}>Hobart Airport transfers</Link>.
                        Planning a wedding? See our <Link href="/hobart/wedding-cars" className={styles.inlineLink}>luxury wedding car fleet</Link>.
                        Want to tour Tasmania? Look at our <Link href="/hobart/hourly-chauffeur" className={styles.inlineLink}>private tour options</Link>.
                        Book now via our <Link href="/contact-us" className={styles.inlineLink}>online booking page</Link>.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Hobart
                    </h3>
                    <p className={styles.directionsText}>
                        Hobart's roads can be hilly and winding. The Tasman Bridge connects the eastern and western shores.
                        Our drivers are expert navigators of the city's unique geography.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Hobart,Tasmania&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', textAlign: 'center' }}>
                            Visit our Hobart service hub; details provided upon booking.
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
                            { "@type": "Question", "name": "How much is a taxi vs chauffeur from Hobart Airport?", "acceptedAnswer": { "@type": "Answer", "text": "Taxis vary by meter, but our chauffeur service offers fixed pricing from $85-115 with premium service." } },
                            { "@type": "Question", "name": "Do you offer Port Arthur day trips?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide full-day private charters to Port Arthur, giving you flexibility to explore at your own pace." } },
                            { "@type": "Question", "name": "Are child seats available?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can provide Australian standard baby capsules and booster seats on request." } },
                            { "@type": "Question", "name": "What happens if my flight into HBA is delayed?", "acceptedAnswer": { "@type": "Answer", "text": "We monitor all incoming flights and will adjust your pickup time automatically." } },
                            { "@type": "Question", "name": "Can you pick up from the Cruise Terminal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can meet you at the Macquarie Wharf Cruise Terminal for shore excursions." } }
                        ]
                    })
                }}
            />

            <Footer />
        </main>
    );
}
