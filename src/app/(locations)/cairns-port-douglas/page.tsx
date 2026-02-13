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
    title: { absolute: "Chauffeur Service Cairns & Port Douglas | Auzzie Chauffeur" },
    description: "Private transfers for Cairns (CNS) & Port Douglas. Luxury cars for Great Barrier Reef tours, Daintree rainforest trips & weddings. Book Now.",
};

export default function CairnsPortDouglasHubPage() {
    const cairnsNeighborhoods = [
        "Cairns City", "Palm Cove", "Port Douglas", "Trinity Beach",
        "Clifton Beach", "Kewarra Beach", "Yorkeys Knob", "Smithfield"
    ];

    const cairnsPostcodes = [
        "4870", "4871", "4877", "4878", "4879", "4880"
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Cairns & Port Douglas" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Cairns & Port Douglas Chauffeur Service"
                    subtitle="Experience Tropical North Queensland in luxury. Reliable transfers from Cairns Airport (CNS) to Port Douglas, Palm Cove, and the Daintree."
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
                            Private chauffeur transfers from <strong>Cairns Airport (CNS) to Port Douglas</strong> typically range from <strong>$220 - $280</strong>. Local Cairns City transfers start around <strong>$60 - $90</strong>. We operate <strong>24/7</strong>, serving hotels in <strong>Palm Cove (4879)</strong>, <strong>Port Douglas (4877)</strong>, and <strong>Cairns CBD (4870)</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            Prices vary by vehicle size and season; confirm before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur in FNQ?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Local Experts", desc: "Drivers who know the Captain Cook Highway and the best spots in the Daintree.", icon: <Shield size={28} color="#1e3a8a" /> },
                            { title: "Fixed Rates", desc: "No surge pricing. Know your cost upfront, even during peak tourist season.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Flight Tracking", desc: "We monitor flights into CNS to ensure a driver is waiting, regardless of delays.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "Cool Comfort", desc: "Premium air-conditioned vehicles to escape the tropical heat.", icon: <CheckCircle size={28} color="#c5a467" /> },
                            { title: "Tour Specialists", desc: "Custom private tours to Mossman Gorge, Atherton Tablelands, and Kuranda.", icon: <Map size={28} color="#1e3a8a" /> }
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
                            "Avoiding waiting for shuttle buses that stop at every hotel.",
                            "Reliable late-night transfers when taxis are scarce in Port Douglas.",
                            "Direct transport to the Reef Terminal for early morning boat departures.",
                            "Comfortable scenic drives along the winding coastal road to Palm Cove.",
                            "Transporting wedding guests between ceremonies and receptions in the rainforest.",
                            "Safe, private travel for families with young children and lots of luggage."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>TNQ Pricing Guide</h2>
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
                                    { route: "Cairns Airport ⇄ Port Douglas", price: "$220 - $280", notes: "Scenic coastal drive, direct to hotel." },
                                    { route: "Cairns Airport ⇄ Palm Cove", price: "$90 - $130", notes: "Meet & greet, luggage assistance." },
                                    { route: "Cairns ⇄ Daintree / Cape Trib", price: "$450 - $600", notes: "Long-distance luxury 4WD styling." },
                                    { route: "Private Rainforest Tour", price: "$100 - $140/hr", notes: "Driver-guide, flexible itinerary." }
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
                        { title: "Airport Transfers", desc: "Transfers to Cairns Airport (CNS) and Port Douglas.", icon: <Plane size={32} color="#c5a467" />, link: "/cairns-port-douglas/airport-transfers" },
                        { title: "Corporate Travel", desc: "For meetings in Cairns CBD and resorts.", icon: <Briefcase size={32} color="#1e3a8a" />, link: "/cairns-port-douglas/corporate-transfers" },
                        { title: "Wedding Cars", desc: "Luxury cars for tropical garden and beach weddings.", icon: <Heart size={32} color="#c5a467" />, link: "/cairns-port-douglas/wedding-cars" },
                        { title: "Hourly Hire", desc: "Day trips to Daintree Rainforest or Tablelands.", icon: <Clock size={32} color="#1e3a8a" />, link: "/cairns-port-douglas/hourly-chauffeur" },
                        { title: "Cruise Transfers", desc: "Transfers to Cairns Marlin Marina.", icon: <Anchor size={32} color="#c5a467" />, link: "/cairns-port-douglas/cruise-ship-transfers" },
                        { title: "Special Events", desc: "Transport for Cairns Convention Centre and Ironman.", icon: <Calendar size={32} color="#1e3a8a" />, link: "/cairns-port-douglas/conferences-special-events" },
                        { title: "Student Transfers", desc: "Transfers for JCU and CQU Cairns.", icon: <GraduationCap size={32} color="#c5a467" />, link: "/cairns-port-douglas/international-student-transfers" },
                        { title: "Luxury Tours", desc: "Daintree Rainforest and Tablelands private safaris.", icon: <Wine size={32} color="#1e3a8a" />, link: "/cairns-port-douglas/luxury-tours" }
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
                        { step: "1", title: "Book", desc: "Enter flight details or pickup location online." },
                        { step: "2", title: "Confirm", desc: "Receive email confirmation with fixed price." },
                        { step: "3", title: "Relax", desc: "Enjoy the scenic drive with a professional local." }
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
                        We cover the entire <strong>Tropical North Queensland</strong> coast, from <strong>Cairns City</strong> to <strong>Port Douglas</strong> and north to the <strong>Daintree Village</strong>. We also serve the <strong>Northern Beaches</strong> like <strong>Trinity Beach</strong> and <strong>Palm Cove</strong>. Key postcodes include <strong>4870</strong>, <strong>4877</strong>, and <strong>4879</strong>.
                    </p>
                    <Neighborhoods location="Cairns & Port Douglas" areas={cairnsNeighborhoods} />
                    <ServiceArea location="Cairns & Port Douglas" postcodes={cairnsPostcodes} />
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                    {[
                        { q: "How long is the drive from Cairns Airport to Port Douglas?", a: "It takes approximately 60 minutes via the scenic Captain Cook Highway." },
                        { q: "Do you offer late night transfers?", a: "Yes, we operate 24/7 for all scheduled flight arrivals and departures." },
                        { q: "Can we stop for groceries/supplies?", a: "Yes, we can add a stop on the way to your accommodation (small fee/time charge may apply)." },
                        { q: "Do you have baby seats?", a: "Yes, we supply Australian standard baby capsules and booster seats." },
                        { q: "Do you transmit to the Skyline Gondola?", a: "Yes, we can transfer you to Smithfield or Kuranda terminals." }
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
                                Auzzie Chauffeur has been operating in Far North Queensland for years. We know the climate, the roads, and the importance of reliable air-conditioning! Our drivers are friendly locals who can share tips on the best reef trips and rainforest walks.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['QLD Accredited', 'Insured', 'Local Knowledge'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Stunning drive to Port Douglas. The driver was so safe and the car was immaculate.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Amanda, Port Douglas</cite>
                            </blockquote>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Picked us up from the Kuranda train and look us to Palm Cove. Seamless.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Robert, Palm Cove</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Wedding Convoy</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A wedding party needing transport from a resort in Cairns to a ceremony at a private estate in Port Douglas.
                        <br /><strong>Solution:</strong> We coordinated 4 luxury sedans and a people mover for the guests.
                        <br /><strong>Result:</strong> Everyone traveled in air-conditioned comfort along the scenic route, arriving fresh and on time for the ceremony.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Need an airport pickup? Book your <Link href="/cairns-port-douglas/airport-transfers" className={styles.inlineLink}>Cairns Airport transfer</Link>.
                        Getting married in the tropics? See our <Link href="/cairns-port-douglas/wedding-cars" className={styles.inlineLink}>wedding cars</Link>.
                        Want to explore the rainforest? Book a <Link href="/cairns-port-douglas/hourly-chauffeur" className={styles.inlineLink}>private Daintree tour</Link>.
                        Contact us via our <Link href="/contact-us" className={styles.inlineLink}>booking page</Link>.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around FNQ
                    </h3>
                    <p className={styles.directionsText}>
                        The region relies heavily on the Captain Cook Highway. It can be winding, so having a professional driver allows you to relax and enjoy the ocean views
                        rather than watching the road.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Port+Douglas,Australia&t=&z=10&ie=UTF8&iwloc=B&output=embed"
                            style={{ border: 0, width: '100%', height: '100%' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', textAlign: 'center' }}>
                            Visit our Cairns service hub; details provided upon booking.
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
                            { "@type": "Question", "name": "How long is the drive from Cairns Airport to Port Douglas?", "acceptedAnswer": { "@type": "Answer", "text": "It takes approximately 60 minutes via the scenic Captain Cook Highway." } },
                            { "@type": "Question", "name": "Do you offer late night transfers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we operate 24/7 for all scheduled flight arrivals and departures." } },
                            { "@type": "Question", "name": "Can we stop for groceries/supplies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can add a stop on the way to your accommodation (small fee/time charge may apply)." } },
                            { "@type": "Question", "name": "Do you have baby seats?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we supply Australian standard baby capsules and booster seats." } },
                            { "@type": "Question", "name": "Do you transmit to the Skyline Gondola?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can transfer you to Smithfield or Kuranda terminals." } }
                        ]
                    })
                }}
            />

            <Footer />
        </main>
    );
}
