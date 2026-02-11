import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight, Map, Anchor, GraduationCap, Calendar } from "lucide-react";
import type { Metadata } from 'next';
import WeatherWidget from "@/components/WeatherWidget";

import Neighborhoods from "@/components/Neighborhoods";
import ServiceArea from "@/components/ServiceArea";
import { generateLocalBusinessSchema } from "@/components/LocalBusinessSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessHours from "@/components/BusinessHours";
import ContactInfo from "@/components/ContactInfo";
import LocationFAQ from "@/components/LocationFAQ";
import LocationTestimonials from "@/components/LocationTestimonials";

export const metadata: Metadata = {
    title: "Chauffeur Service Melbourne | Airport Transfers & Corporate Cars",
    description: "Melbourne's premier chauffeur service. Luxury airport transfers (MEL), corporate transport, and tours of Victoria's cultural capital.",
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
            title: "Hourly Chauffeur",
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
            {generateLocalBusinessSchema({
                city: "Melbourne",
                state: "Victoria",
                description: "Melbourne's premier chauffeur service. Luxury airport transfers (MEL), corporate transport, and tours of Victoria's cultural capital.",
                latitude: -37.8136,
                longitude: 144.9631,
                postalCodes: melbournePostcodes,
                neighborhoods: melbourneNeighborhoods
            })}

            <Navbar />
            <Breadcrumbs city="Melbourne" />
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Chauffeur Service Melbourne"
                    subtitle="Explore Melbourne's laneways, culture, and surrounding wine regions in style."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Melbourne" />
                </div>
            </div>

            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                    Melbourne is a city where style meets convenience, and getting around in comfort has become more important than ever. That’s where chauffeur services come in. Instead of worrying about parking, traffic, or navigating unfamiliar streets, travelers and locals can simply sit back, relax, and enjoy the ride.
                </p>

                <h2 className={styles.sectionTitle}>What Are Chauffeur Services?</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    A chauffeur service provides professional drivers who operate premium vehicles such as luxury sedans, SUVs, and executive vans. Unlike regular taxis or ride-share options, chauffeurs focus on punctuality, professionalism, and personalized service. From airport transfers to corporate travel and special events, these services are designed for people who value comfort and reliability.
                </p>

                <h2 className={styles.sectionTitle}>Key Benefits of Hiring a Chauffeur</h2>
                <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto 3rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>1. Comfort and luxury</h3>
                        <p style={{ color: '#4b5563' }}>Chauffeur-driven cars are usually high-end vehicles equipped with leather seats, climate control, and smooth suspension. Long trips suddenly feel effortless.</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>2. Professional drivers</h3>
                        <p style={{ color: '#4b5563' }}>Chauffeurs are trained to provide courteous service, maintain strict punctuality, and ensure passenger safety. They know the best routes across Melbourne, helping avoid unnecessary delays.</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>3. Time efficiency</h3>
                        <p style={{ color: '#4b5563' }}>For business travelers, every minute counts. With a chauffeur handling the driving, you can prepare for meetings, take calls, or simply unwind between appointments.</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>4. Stress-free airport transfers</h3>
                        <p style={{ color: '#4b5563' }}>Airport pickups and drop-offs become seamless. Chauffeurs monitor flight schedules and adjust pickup times automatically if flights are delayed.</p>
                    </div>
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

                <h2 className={styles.sectionTitle}>Choosing the Right Chauffeur Service</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                    When selecting a chauffeur company in Melbourne, look for:
                </p>
                <ul style={{ listStyleType: 'disc', textAlign: 'left', maxWidth: '600px', margin: '0 auto 3rem', paddingLeft: '1.5rem', color: '#4b5563' }}>
                    <li style={{ marginBottom: '0.5rem' }}>A modern and well-maintained fleet</li>
                    <li style={{ marginBottom: '0.5rem' }}>Transparent pricing with no hidden charges</li>
                    <li style={{ marginBottom: '0.5rem' }}>Experienced, licensed drivers</li>
                    <li style={{ marginBottom: '0.5rem' }}>Positive customer reviews</li>
                    <li style={{ marginBottom: '0.5rem' }}>24/7 booking availability</li>
                </ul>

                <h2 className={styles.sectionTitle}>Best Chauffeur Companies in Melbourne</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Competition is fierce, and being rated among the <strong>best chauffeur companies in Melbourne</strong> requires consistency, luxury, and trust. While there are several reputable providers in Victoria, Auzzsi differentiates itself through a commitment to "service beyond driving."
                    <br /><br />
                    We don't just get you from point A to B; we ensure the journey is the highlight of your day. Whether comparing fleets, driver reviews, or pricing models, top-tier providers ensure that your experience is seamless. We invite you to experience why we are consistently preferred by local executives and international visitors alike.
                </p>

                <h2 className={styles.sectionTitle}>Final Thoughts</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Chauffeur services in Melbourne are no longer reserved only for celebrities or executives. Today, anyone can enjoy premium travel that combines luxury, convenience, and reliability. Whether you’re heading to the airport, attending an important meeting, or planning a special night out, a professional chauffeur can transform an ordinary trip into a smooth and memorable experience.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-4">
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
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
