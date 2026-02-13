import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Plane, Calculator, ShieldCheck, Clock, Award, Wifi, Briefcase, CheckCircle, XCircle, DollarSign, Lock, Star } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import HowToBookingSchema from "@/components/HowToBookingSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Luxury Airport Transfers Australia" },
    description: "Seamless airport transfers across Australia. Meet-and-greet service, 60 mins wait time, and tracked flights. Ideal for business travelers. Book online.",
    alternates: {
        canonical: '/services/airport-transfers',
    },
};

export default function AirportServicesPage() {
    const faqs = [
        {
            question: "How much does an airport transfer cost in Australia?",
            answer: "Airport transfers typically range from $90-$180 depending on your city and destination. Auzzie Chauffeur offers fixed-rate pricing starting from $90 for Gold Coast, $105 for Brisbane, $110 for Melbourne, and $120 for Sydney CBD transfers, with no surge pricing or hidden fees."
        },
        {
            question: "Do you tip airport transfer drivers in Australia?",
            answer: "Tipping is not mandatory in Australia, but it's appreciated for exceptional service. If you choose to tip your chauffeur, 10-15% is customary for outstanding service. Our pricing is transparent and fair, so there's no obligation."
        },
        {
            question: "How early should I book an airport transfer?",
            answer: "We recommend booking at least 24 hours in advance for guaranteed availability. However, Auzzie Chauffeur accepts last-minute bookings subject to vehicle availability, even with just 2 hours' notice. Book early for peace of mind, especially during peak travel periods."
        },
        {
            question: "What's the difference between a taxi and airport transfer?",
            answer: "Airport transfers offer fixed pricing, real-time flight tracking, 60-minute complimentary wait time, and meet & greet service at arrivals. Taxis use meters with variable pricing and don't include these premium services. Airport transfers provide a more predictable, stress-free experience."
        },
        {
            question: "What happens if my flight is delayed?",
            answer: "We track your flight in real-time and automatically adjust pickup time for delays. There's no extra charge for flight delays, and we include 60 minutes complimentary wait time from your actual landing time. You'll never be charged for circumstances beyond your control."
        },
        {
            question: "How do I find my chauffeur at the airport?",
            answer: "Your chauffeur will wait at the arrivals area holding a name sign with your name clearly displayed. You'll receive their contact details and photo via SMS before your flight lands, making it easy to connect. They'll also be tracking your flight to ensure they're ready when you arrive."
        },
        {
            question: "Do You Track Flights?",
            answer: "Yes, we monitor all arrival times using flight tracking software. If your flight is delayed or early, we adjust the pickup time accordingly, so your chauffeur is always there when you land."
        },
        {
            question: "Where Will My Chauffeur Meet Me?",
            answer: "For airport arrivals, your chauffeur will meet you inside the terminal (Arrivals Hall) holding a sign with your name or company logo. They will assist with your luggage to the vehicle."
        },
        {
            question: "What Happens If My Flight Is Cancelled?",
            answer: "Please contact us as soon as you know. We can reschedule your booking to your new flight details or provide a credit/refund in accordance with our cancellation policy."
        },
        {
            question: "Is The Price Fixed?",
            answer: "Yes. Our quoted prices are fixed and include tolls, taxes, and airport parking fees. There are no hidden surge charges or meters."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The perfect choice for solo business travellers. Quiet, comfortable, and efficient.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'Luxury SUV',
            desc: 'Extra luggage space and comfort. Ideal for families or long-haul travellers.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-suv.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Spacious group transport with ample room for large suitcases and golf bags.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Airport Transfers", url: "/services/airport-transfers" }
    ];

    const faqPairs = faqs.map(f => ({ question: f.question, answer: f.answer }));

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <FAQSchema pairs={faqPairs} />
            <ServiceSchema
                name="Airport Transfers Australia"
                description="Seamless airport transfers across Australia with meet-and-greet service and flight tracking."
                url="/services/airport-transfers"
            />
            <HowToBookingSchema />

            {/* HERO SECTION */}
            <Hero
                title="Luxury Airport Transfers"
                subtitle="Start and end your journey in comfort. Reliable transfers to every major Australian airport."
                showStats={false}
            />

            {/* AI Overview - Quick service summary for search engines */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1f2937', fontWeight: '500' }}>
                        Professional <strong>airport transfer service</strong> across Australia. <strong>Flight tracking</strong>, <strong>60-minute complimentary wait time</strong>, and <strong>fixed rates</strong> for all major airports including Sydney, Melbourne, Brisbane, Adelaide, Gold Coast, Cairns, and Hobart. Available <strong>24/7</strong> with instant online booking. <strong>4.9★ rated drivers</strong> and <strong>100% on-time guarantee</strong>.
                    </p>
                </div>
            </section>

            {/* Premium airport transfer service with flight tracking and meet-and-greet Australia */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Seamless Door-to-Door Service</h2>
                <div className={styles.textBlock}>
                    <p>
                        Navigating busy airports can be stressful. <Link href="/" className={styles.inlineLink}>Auzzie Chauffeur</Link> removes the hassle with our premium <Link href="/services/airport-transfers" className={styles.inlineLink}>meet-and-greet service</Link>.
                        We cover all major international and domestic terminals including <Link href="/sydney/airport-transfers" className={styles.inlineLink}>Sydney (SYD)</Link>, <Link href="/melbourne/airport-transfers" className={styles.inlineLink}>Melbourne (MEL)</Link>, <Link href="/brisbane/airport-transfers" className={styles.inlineLink}>Brisbane (BNE)</Link>, <Link href="/adelaide/airport-transfers" className={styles.inlineLink}>Adelaide (ADL)</Link>, <Link href="/gold-coast/airport-transfers" className={styles.inlineLink}>Gold Coast (OOL)</Link>, <Link href="/cairns-port-douglas/airport-transfers" className={styles.inlineLink}>Cairns (CNS)</Link>, and <Link href="/hobart/airport-transfers" className={styles.inlineLink}>Hobart (HBA)</Link>.
                        <br /><br />
                        Relax knowing that we are tracking your flight and that a <Link href="/about-us/chauffeur-services" className={styles.inlineLink}>professional driver</Link> will be waiting for you at the gate, ready to assist with your luggage. Auzzie Chauffeur has over a decade of experience coordinating complex itineraries for <Link href="/services/corporate-transfers" className={styles.inlineLink}>executives</Link> and families alike.
                    </p>
                </div>
            </section>

            {/* Transparent Pricing Table */}
            <section style={{ maxWidth: '1200px', margin: '0 auto 4rem', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Airport Transfer Pricing</h2>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                    Transparent, fixed-rate pricing with no hidden fees. All prices include flight tracking, 60-minute wait time, and meet & greet service.
                </p>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#1f2937', color: 'white' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Route Example</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>From Price</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>What's Included</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}><strong>Sydney Airport (SYD) → CBD</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$120</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Flight tracking</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>60-min wait time</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Meet & greet</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Melbourne Airport (MEL) → CBD</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$110</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Flight tracking</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>60-min wait time</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Meet & greet</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}><strong>Brisbane Airport (BNE) → CBD</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$105</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Flight tracking</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>60-min wait time</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Meet & greet</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Adelaide Airport (ADL) → CBD</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$95</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Flight tracking</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>60-min wait time</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Meet & greet</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Gold Coast Airport (OOL) → Surfers</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$90</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Flight tracking</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>60-min wait time</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Meet & greet</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                    <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', border: '2px solid #86efac' }}>
                        <h3 style={{ color: '#166534', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={20} color="#16a34a" />
                            What's Included
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#166534' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Real-time flight tracking
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                60-minute complimentary wait time
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Meet & greet at arrivals
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Luggage assistance
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Bottled water
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Professional chauffeur
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#16a34a" />
                                Luxury vehicle
                            </li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: '#fef2f2', padding: '1.5rem', borderRadius: '8px', border: '2px solid #fca5a5' }}>
                        <h3 style={{ color: '#991b1b', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <XCircle size={20} color="#dc2626" />
                            What's Not Included
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#991b1b' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <XCircle size={16} color="#dc2626" />
                                Tolls (charged separately at cost)
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <XCircle size={16} color="#dc2626" />
                                Parking fees (if applicable)
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <XCircle size={16} color="#dc2626" />
                                Additional stops ($20 per stop)
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <XCircle size={16} color="#dc2626" />
                                Wait time beyond 60 minutes ($15/15min)
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link href="/quote" style={{ display: 'inline-block', backgroundColor: '#c5a467', color: 'white', padding: '1rem 2.5rem', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem' }}>
                        Get Custom Quote for Your Route
                    </Link>
                    <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <DollarSign size={16} color="#c5a467" />
                            Price Match Guarantee
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Lock size={16} color="#c5a467" />
                            No Hidden Fees
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star size={16} color="#c5a467" fill="#c5a467" />
                            4.9★ Rated
                        </span>
                    </p>
                </div>
            </section>

            {/* Book luxury chauffeur airport pickup online instant quote */}
            <section style={{ maxWidth: '1000px', margin: '0 auto 4rem', padding: '0 1rem', textAlign: 'center' }}>
                <div style={{
                    backgroundColor: '#1f2937',
                    borderRadius: '8px',
                    padding: '3rem 2rem',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Ready to Book Your Transfer?</h3>
                    <p style={{ maxWidth: '600px', color: '#9ca3af' }}>
                        From Sydney to Perth, our network of professional chauffeurs is ready to serve you.
                        Get an instant quote or book online in minutes.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="/book" style={{
                            backgroundColor: '#c5a467',
                            color: 'white',
                            padding: '0.75rem 2rem',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            textDecoration: 'none'
                        }}>Book Now</a>
                        <a href="/quote" style={{
                            border: '1px solid #ffffff',
                            color: 'white',
                            padding: '0.75rem 2rem',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            textDecoration: 'none'
                        }}>Get Quote</a>
                    </div>
                </div>
            </section>

            {/* Nationwide airport chauffeur service Sydney Melbourne Brisbane Adelaide */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem 4rem 2rem'
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: '#111'
                }}>Nationwide Airport Service</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { city: "Sydney", link: "/sydney/airport-transfers", desc: "Kingsford Smith (SYD)" },
                        { city: "Melbourne", link: "/melbourne/airport-transfers", desc: "Tullamarine (MEL)" },
                        { city: "Brisbane", link: "/brisbane/airport-transfers", desc: "Brisbane Airport (BNE)" },
                        { city: "Perth", link: "/perth/airport-transfers", desc: "Perth Airport (PER)" },
                        { city: "Adelaide", link: "/adelaide/airport-transfers", desc: "Adelaide Airport (ADL)" },
                        { city: "Gold Coast", link: "/gold-coast/airport-transfers", desc: "Coolangatta (OOL)" },
                        { city: "Hobart", link: "/hobart/airport-transfers", desc: "Hobart Airport (HBA)" },
                        { city: "Cairns", link: "/cairns-port-douglas/airport-transfers", desc: "Cairns Airport (CNS)" },
                    ].map((loc, idx) => (
                        <a href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Plane size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Transfers
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
                                    View Details <svg width="16" height="16" style={{ marginLeft: '4px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Professional chauffeur features flight tracking fixed pricing 60 minute wait time */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Flight<br />Tracking</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Meet &<br />Greet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>60 Mins<br />Wait Time</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calculator size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Prices</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Safe<br />Travels</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Wifi size={28} /></div>
                        <span className={styles.featureLabel}>Onboard<br />Wi-Fi</span>
                    </div>
                </div>
            </section>

            {/* Luxury executive sedan SUV people mover airport transfer fleet */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Airport Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Spacious vehicles with plenty of luggage capacity.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* Airport transfer frequently asked questions flight delays cancellation policy */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Map of Auzzie Chauffeur national coverage across Sydney, Melbourne, Brisbane, and major Australian airports" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Transfer FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            {/* CONTACT HELP SECTION */}
            <section className={styles.contactSection}>
                <div className={styles.contactImage}>
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}></div>
                </div>
                <ServiceContactForm
                    title="Get a Transfer Price"
                    subtitle="Contact us for a fixed price quote to or from the airport."
                    detailsLabel="Details (Flight Numbers, Luggage)"
                    showDestination={true}
                />
            </section>

            <Footer />
        </main>
    );
}
