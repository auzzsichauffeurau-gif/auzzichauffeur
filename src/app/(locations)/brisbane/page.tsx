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
    title: "Chauffeur Service Brisbane | Airport Transfers & Gold Coast",
    description: "Brisbane's premier chauffeur service. Luxury airport transfers (BNE), corporate transport, and transfers to the Gold Coast and Sunshine Coast.",
};

export default function BrisbaneHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Reliable transfers to Brisbane Airport (BNE).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/brisbane/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for Brisbane's CBD and business districts.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/brisbane/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your Brisbane or hinterland wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/brisbane/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours to the Gold Coast, Sunshine Coast, or city sights.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/brisbane/hourly-chauffeur"
        },
        {
            title: "Cruise Ship Transfers",
            desc: "Transfers to Brisbane International Cruise Terminal.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/brisbane/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Transport for BCEC and Brisbane major events.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/brisbane/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Safe arrival for UQ, QUT, and Griffith students.",
            icon: <GraduationCap size={32} color="#c5a467" />,
            link: "/brisbane/international-student-transfers"
        }
    ];

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
            {generateLocalBusinessSchema({
                city: "Brisbane",
                state: "Queensland",
                description: "Brisbane's premier chauffeur service. Luxury airport transfers (BNE), corporate transport, and transfers to the Gold Coast and Sunshine Coast.",
                latitude: -27.4698,
                longitude: 153.0251,
                postalCodes: brisbanePostcodes,
                neighborhoods: brisbaneNeighborhoods
            })}

            <Navbar />
            <Breadcrumbs city="Brisbane" />
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Chauffeur Service Brisbane"
                    subtitle="Experience Queensland's River City with professional chauffeur service."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Brisbane" />
                </div>
            </div>

            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle}>The River City</h2>

                <CityIntro city="Brisbane" />

                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From Brisbane CBD to the Gold Coast, our chauffeurs provide reliable, luxurious transport.
                    Perfect for airport transfers, corporate events, and exploring South East Queensland in comfort.
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
                <Neighborhoods location="Brisbane" areas={brisbaneNeighborhoods} />

                <ServiceArea location="Brisbane" postcodes={brisbanePostcodes} />

                <BusinessHours />

                <ContactInfo city="Brisbane" />

                <LocationTestimonials city="Brisbane" />

                <LocationFAQ city="Brisbane" />

                {/* Directions Section */}
                <div className={styles.directionsSection}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Brisbane
                    </h3>
                    <p className={styles.directionsText}>
                        Brisbane's river and bridges create unique traffic patterns. Our experienced chauffeurs navigate efficiently
                        whether you're heading to the airport, Gold Coast, or Sunshine Coast.
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
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
