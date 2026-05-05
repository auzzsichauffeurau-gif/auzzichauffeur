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
    title: { absolute: "Chauffeur Service Adelaide | Auzzie Chauffeur | Trusted Private Driver" },
    description: "Book premium chauffeur service in Adelaide (ADL). Luxury airport transfers, wine tours to Barossa Valley & corporate cars. 24/7 Fixed Price.",
    alternates: {
        canonical: '/adelaide',
    },
};

export default function AdelaideHubPage() {
    const adelaideNeighborhoods = [
        "Adelaide CBD", "North Adelaide", "Glenelg", "Unley",
        "Norwood", "Henley Beach", "Black Forest", "Walkerville"
    ];

    const adelaidePostcodes = [
        "5000", "5001", "5005", "5006", "5007", "5008",
        "5009", "5010", "5011", "5012", "5013", "5014",
        "5031", "5032", "5033", "5034", "5035", "5037",
        "5045", "5082"
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Adelaide" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Adelaide’s Premier Chauffeur Service — Wine Capital Luxury"
                    subtitle="Reliable transfers from Adelaide Airport (ADL) to the CBD, Barossa Valley, and McLaren Vale. Experience professional, punctual service every time."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Adelaide" />
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
                            How much does chauffeur service cost in Adelaide?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#374151' }}>
                            Chauffeur service in Adelaide starts from around <strong>$85 - $115</strong> for CBD airport transfers. Wine tours to the <strong>Barossa Valley</strong> typically range from <strong>$100 - $130 per hour</strong>. We operate <strong>24/7</strong> with fixed pricing, serving areas like <strong>5000 (City)</strong>, <strong>5045 (Glenelg)</strong>, and <strong>5067 (Norwood)</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            Prices vary by vehicle type and tour duration; confirm before booking.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Chauffeur Adelaide?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "SA Accredited", desc: "Fully licensed operators complying with South Australian Government regulations.", icon: <Shield size={28} color="#1e3a8a" /> },
                            { title: "Fixed Rates", desc: "No surge pricing during the Adelaide Festival, Fringe, or LIV Golf events.", icon: <Calculator size={28} color="#c5a467" /> },
                            { title: "Flight Monitoring", desc: "We track your flight into ADL to ensure we are waiting at the terminal when you land.", icon: <Plane size={28} color="#1e3a8a" /> },
                            { title: "Wine Tour Experts", desc: "Our drivers know the hidden gems of the Barossa and McLaren Vale for the perfect day out.", icon: <Clock size={28} color="#c5a467" /> },
                            { title: "Premium Comfort", desc: "Luxury sedans and people movers perfect for corporate groups or wedding parties.", icon: <CheckCircle size={28} color="#1e3a8a" /> }
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
                            "Avoiding taxi queues at Adelaide Airport post-flight.",
                            "Reliable early morning transfers for business travelers.",
                            "Designing the perfect itinerary for a Barossa wine tour.",
                            "Providing child seats for family holidays to Glenelg.",
                            "Transporting golf clubs and luggage for trips to Kooyonga or Royal Adelaide.",
                            "Coordination for wedding parties moving between ceremony and reception venues."
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Adelaide Pricing Guide</h2>
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
                                    { route: "Adelaide CBD ⇄ Airport (ADL)", price: "$85 - $115", notes: "Flight tracking, meet & greet, luggage help." },
                                    { route: "Adelaide ⇄ Barossa Valley", price: "$250 - $350 (Transfers)", notes: "One-way luxury transfer." },
                                    { route: "Wine Tour Charter", price: "$100 - $130/hr", notes: "Flexible scheduling, multi-stop (min 4 hrs)." },
                                    { route: "Adelaide ⇄ McLaren Vale", price: "$180 - $240", notes: "One-way luxury transfer." }
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
                        { title: "Airport Transfers", desc: "Door-to-door transfers to Adelaide Airport (ADL).", icon: <Plane size={32} color="#c5a467" />, link: "/adelaide/airport-transfers" },
                        { title: "Corporate Travel", desc: "For meetings in North Terrace or Flinders.", icon: <Briefcase size={32} color="#1e3a8a" />, link: "/adelaide/corporate-transfers" },
                        { title: "Wedding Cars", desc: "Elegant cars for your Adelaide Hills wedding.", icon: <Heart size={32} color="#c5a467" />, link: "/adelaide/wedding-cars" },
                        { title: "Hourly Hire", desc: "Explore Barossa or McLaren Vale at your pace.", icon: <Clock size={32} color="#1e3a8a" />, link: "/adelaide/hourly-chauffeur" },
                        { title: "Cruise Transfers", desc: "Transfers to Outer Harbor Cruise Terminal.", icon: <Anchor size={32} color="#c5a467" />, link: "/adelaide/cruise-ship-transfers" },
                        { title: "Special Events", desc: "Transport for Adelaide Festival and Oval.", icon: <Calendar size={32} color="#1e3a8a" />, link: "/adelaide/conferences-special-events" },
                        { title: "Student Transfers", desc: "Transfers for Adelaide Uni and Flinders.", icon: <GraduationCap size={32} color="#c5a467" />, link: "/adelaide/international-student-transfers" },
                        { title: "Luxury Tours", desc: "Barossa Valley and McLaren Vale wine experiences.", icon: <Wine size={32} color="#1e3a8a" />, link: "/adelaide/luxury-tours" }
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
                        We extensively cover the <strong>Greater Adelaide</strong> area, including <strong>North Adelaide</strong>, <strong>Glenelg</strong>, and <strong>Norwood</strong>. Whether you need a ride to the <strong>Adelaide Oval</strong> or a tour of the <strong>Adelaide Hills</strong>, we have you covered. Key postcodes include <strong>5000</strong>, <strong>5006</strong>, and <strong>5045</strong>.
                    </p>
                    <Neighborhoods location="Adelaide" areas={adelaideNeighborhoods} />
                    <ServiceArea location="Adelaide" postcodes={adelaidePostcodes} />
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                    {[
                        { q: "How much is a chauffeur from Adelaide Airport to City?", a: "Transfers typically cost between $85 and $115 depending on the vehicle." },
                        { q: "Do you offer Barossa Valley wine tours?", a: "Yes, we specialize in private, customizable wine tours to the Barossa, Clare Valley, and McLaren Vale." },
                        { q: "Can you provide baby seats?", a: "Yes, we can provide Australian standard baby capsules and booster seats on request." },
                        { q: "Do you operate 24/7?", a: "Yes, we are available 24 hours a day, 7 days a week for pre-booked transfers." },
                        { q: "What happens if my flight is delayed?", a: "We monitor all incoming flights at ADL and will adjust your pickup time accordingly." }
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
                                Auzzie Chauffeur brings years of experience to the Adelaide market. We understand the specific needs of leisure travelers exploring our wine regions and corporate clients attending events at the Convention Centre. Our drivers are local, knowledgeable, and dedicated to safety.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {['SA Accredited', 'Insured', 'Wine Experts'].map((badge, idx) => (
                                    <span key={idx} style={{ background: '#374151', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#c5a467' }}>Client Reviews</h3>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“The best way to see the Barossa. Our driver was knowledgeable and the car was pure luxury.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Thomas, North Adelaide</cite>
                            </blockquote>
                            <blockquote style={{ borderLeft: '3px solid #c5a467', paddingLeft: '1rem' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '0.5rem', color: '#e5e7eb' }}>“Prompt pickup from Glenelg to the airport. Stress-free travel.”</p>
                                <cite style={{ fontSize: '0.9rem', color: '#9ca3af' }}>— Karen, Glenelg</cite>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* Case Study */}
                <div style={{ marginTop: '4rem', background: '#f8fafc', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>Case Study: Corporate Retreat</h3>
                    <p style={{ lineHeight: '1.7', color: '#4b5563' }}>
                        <strong>Scenario:</strong> A company retreat hosting 20 executives needing transport to a winery lunch in McLaren Vale.
                        <br /><strong>Solution:</strong> We utilized our fleet of luxury people movers and sedans.
                        <br /><strong>Result:</strong> Seamless coordination, with all vehicles arriving in convoy, allowing the team to network and relax on the journey.
                    </p>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Explore More:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Need airport transport? View our <Link href="/adelaide/airport-transfers" className={styles.inlineLink}>Adelaide Airport transfer options</Link>.
                        Planning a wedding? See our <Link href="/adelaide/wedding-cars" className={styles.inlineLink}>luxury wedding car fleet</Link>.
                        Want to tour the wineries? Look at our <Link href="/adelaide/hourly-chauffeur" className={styles.inlineLink}>Barossa Valley tour packages</Link>.
                        Book now via our <Link href="/contact-us" className={styles.inlineLink}>online booking page</Link>.
                    </p>
                </div>

                {/* Directions Section */}
                <div className={styles.directionsSection} style={{ marginTop: '4rem' }}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Adelaide
                    </h3>
                    <p className={styles.directionsText}>
                        Adelaide is a 20-minute city, but peak times can still be busy.
                        Our drivers utilize the best routes along Sir Donald Bradman Drive and Anzac Highway to get you there on time.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Adelaide,South+Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem', textAlign: 'center' }}>
                            Visit our Adelaide service hub; details provided upon booking.
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
                            { "@type": "Question", "name": "How much is a chauffeur from Adelaide Airport to City?", "acceptedAnswer": { "@type": "Answer", "text": "Transfers typically cost between $85 and $115 depending on the vehicle." } },
                            { "@type": "Question", "name": "Do you offer Barossa Valley wine tours?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in private, customizable wine tours to the Barossa, Clare Valley, and McLaren Vale." } },
                            { "@type": "Question", "name": "Can you provide baby seats?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we can provide Australian standard baby capsules and booster seats on request." } },
                            { "@type": "Question", "name": "Do you operate 24/7?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we are available 24 hours a day, 7 days a week for pre-booked transfers." } },
                            { "@type": "Question", "name": "What happens if my flight is delayed?", "acceptedAnswer": { "@type": "Answer", "text": "We monitor all incoming flights at ADL and will adjust your pickup time accordingly." } }
                        ]
                    })
                }}
            />

            <Footer />
        </main>
    );
}
