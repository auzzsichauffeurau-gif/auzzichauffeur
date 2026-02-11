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
    title: "Chauffeur Service Hobart | Tasmania Airport Transfers & Tours",
    description: "Hobart's premier chauffeur service. Luxury airport transfers (HBA), MONA tours, and exploration of Tasmania's capital in comfort.",
};

export default function HobartHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Premium transfers to Hobart Airport (HBA).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/hobart/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for Hobart's CBD and business districts.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/hobart/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your Hobart or Tasmanian wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/hobart/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of Mount Wellington, Richmond, or Port Arthur.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/hobart/hourly-chauffeur"
        },
        {
            title: "Cruise Transfers",
            desc: "Transfers to Macquarie Wharf Cruise Terminal.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/hobart/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Transport for conferences at Grand Chancellor.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/hobart/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Safe arrival for University of Tasmania students.",
            icon: <GraduationCap size={32} color="#c5a467" />,
            link: "/hobart/international-student-transfers"
        }
    ];

    const hobartNeighborhoods = [
        "Hobart CBD", "Battery Point", "Sandy Bay", "North Hobart",
        "West Hobart", "South Hobart", "Bellerive", "Glenorchy"
    ];

    const hobartPostcodes = [
        "7000", "7001", "7004", "7005", "7008", "7009",
        "7010", "7011", "7015", "7018", "7050"
    ];

    return (
        <main className={styles.pageWrapper}>
            {generateLocalBusinessSchema({
                city: "Hobart",
                state: "Tasmania",
                description: "Hobart's premier chauffeur service. Luxury airport transfers (HBA), MONA tours, and exploration of Tasmania's capital in comfort.",
                latitude: -42.8821,
                longitude: 147.3272,
                postalCodes: hobartPostcodes,
                neighborhoods: hobartNeighborhoods
            })}

            <Navbar />
            <Breadcrumbs city="Hobart" />
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Chauffeur Service Hobart"
                    subtitle="Discover Tasmania's heritage city with professional chauffeur service."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Hobart" />
                </div>
            </div>

            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle}>Gateway to Tasmania</h2>

                <CityIntro city="Hobart" />

                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From the waterfront to Mount Wellington, Hobart offers unique experiences.
                    Our chauffeurs provide premium transport for airport transfers, MONA visits, and tours of Tasmania's stunning landscapes.
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
                <Neighborhoods location="Hobart" areas={hobartNeighborhoods} />

                <ServiceArea location="Hobart" postcodes={hobartPostcodes} />

                <BusinessHours />

                <ContactInfo city="Hobart" />

                <LocationTestimonials city="Hobart" />

                <LocationFAQ city="Hobart" />

                {/* Directions Section */}
                <div className={styles.directionsSection}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Hobart
                    </h3>
                    <p className={styles.directionsText}>
                        Hobart's compact size makes navigation easy, but our chauffeurs know the scenic routes.
                        Whether visiting MONA, Mount Wellington, or the airport, travel in comfort.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Hobart,Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
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
