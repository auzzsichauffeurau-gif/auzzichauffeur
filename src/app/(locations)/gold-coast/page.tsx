import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight, Map, Anchor, Calendar, GraduationCap } from "lucide-react";
import type { Metadata } from 'next';
import WeatherWidget from "@/components/WeatherWidget";
import CityIntro from "@/components/CityIntro";
import Neighborhoods from "@/components/Neighborhoods";
import ServiceArea from "@/components/ServiceArea";
import { generateLocalBusinessSchema } from "@/components/LocalBusinessSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import BusinessHours from "@/components/BusinessHours";
import ContactInfo from "@/components/ContactInfo";
import LocationFAQ from "@/components/LocationFAQ";
import LocationTestimonials from "@/components/LocationTestimonials";

export const metadata: Metadata = {
    title: "Chauffeur Service Gold Coast | Beach Transfers & Airport",
    description: "Gold Coast's premier chauffeur service. Luxury airport transfers, theme park transport, and beach-to-airport transfers along the Gold Coast.",
};

export default function GoldCoastHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Transfers to Gold Coast Airport (OOL) and Brisbane (BNE).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/gold-coast/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for business along the Gold Coast.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/gold-coast/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your beachside Gold Coast wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/gold-coast/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of Mount Tamborine, Springbrook, or Byron Bay.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/gold-coast/hourly-chauffeur"
        },
        {
            title: "Cruise Transfers",
            desc: "Transfers to Brisbane Cruise Terminal from Gold Coast.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/gold-coast/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Transport for GCCEC and The Star events.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/gold-coast/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Safe arrival for Bond and Griffith students.",
            icon: <GraduationCap size={32} color="#c5a467" />,
            link: "/gold-coast/international-student-transfers"
        }
    ];

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
            {generateLocalBusinessSchema({
                city: "Gold Coast",
                state: "Queensland",
                description: "Gold Coast's premier chauffeur service. Luxury airport transfers, theme park transport, and beach-to-airport transfers along the Gold Coast.",
                latitude: -28.0167,
                longitude: 153.4000,
                postalCodes: goldCoastPostcodes,
                neighborhoods: goldCoastNeighborhoods
            })}

            <Navbar />
            <Breadcrumbs city="Gold Coast" />
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Chauffeur Service Gold Coast"
                    subtitle="Travel the Gold Coast in luxury - from Surfers Paradise to Coolangatta."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Gold Coast" />
                </div>
            </div>

            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle}>The Glitter Strip</h2>

                <CityIntro city="Gold Coast" />

                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From Surfers Paradise to Coolangatta, the Gold Coast deserves premium transport.
                    Our chauffeurs provide seamless airport transfers, theme park visits, and coastal tours with style and professionalism.
                </p>

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
            </section>

            <div className="max-w-7xl mx-auto px-4">
                <Neighborhoods location="Gold Coast" areas={goldCoastNeighborhoods} />

                <ServiceArea location="Gold Coast" postcodes={goldCoastPostcodes} />

                <BusinessHours />

                <ContactInfo city="Gold Coast" />

                <LocationTestimonials city="Gold Coast" />

                <LocationFAQ city="Gold Coast" />

                {/* Directions Section */}
                <div className={styles.directionsSection}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Gold Coast
                    </h3>
                    <p className={styles.directionsText}>
                        The Gold Coast Highway connects all major destinations. Our chauffeurs know the best routes to avoid peak traffic,
                        ensuring timely arrivals for flights and events.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Gold+Coast,Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
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
