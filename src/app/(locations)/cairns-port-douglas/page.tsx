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
    title: "Chauffeur Service Cairns & Port Douglas | Reef Transfers",
    description: "Cairns and Port Douglas premier chauffeur service. Luxury airport transfers (CNS), reef tours, and Daintree Rainforest exploration.",
};

export default function CairnsPortDouglasHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Premium transfers to Cairns Airport (CNS).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/cairns-port-douglas/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for Cairns and Port Douglas business.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/cairns-port-douglas/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your tropical North Queensland wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/cairns-port-douglas/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Reef tours, Daintree Rainforest, or coastal scenic drives.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/cairns-port-douglas/hourly-chauffeur"
        },
        {
            title: "Cruise Transfers",
            desc: "Transfers to Cairns Cruise Terminal.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/cairns-port-douglas/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Transport for Cairns Convention Centre events.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/cairns-port-douglas/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Safe arrival for JCU and CQU students.",
            icon: <GraduationCap size={32} color="#c5a467" />,
            link: "/cairns-port-douglas/international-student-transfers"
        }
    ];

    const cairnsNeighborhoods = [
        "Cairns CBD", "Palm Cove", "Port Douglas", "Trinity Beach",
        "Clifton Beach", "Kewarra Beach", "Yorkeys Knob", "Smithfield"
    ];

    const cairnsPostcodes = [
        "4870", "4871", "4877", "4878", "4879", "4880"
    ];

    return (
        <main className={styles.pageWrapper}>
            {generateLocalBusinessSchema({
                city: "Cairns & Port Douglas",
                state: "Queensland",
                description: "Cairns and Port Douglas premier chauffeur service. Luxury airport transfers (CNS), reef tours, and Daintree Rainforest exploration.",
                latitude: -16.9186,
                longitude: 145.7781,
                postalCodes: cairnsPostcodes,
                neighborhoods: cairnsNeighborhoods
            })}

            <Navbar />
            <Breadcrumbs city="Cairns & Port Douglas" />
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Chauffeur Service Cairns & Port Douglas"
                    subtitle="Explore Tropical North Queensland in luxury and comfort."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Cairns" />
                </div>
            </div>

            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle}>Gateway to the Reef</h2>

                <CityIntro city="Cairns & Port Douglas" />

                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From Cairns to Port Douglas and the Daintree, Tropical North Queensland deserves premium transport.
                    Our chauffeurs provide seamless transfers for reef tours, rainforest adventures, and airport connections.
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
                <Neighborhoods location="Cairns & Port Douglas" areas={cairnsNeighborhoods} />

                <ServiceArea location="Cairns & Port Douglas" postcodes={cairnsPostcodes} />

                <BusinessHours />

                <ContactInfo city="Cairns & Port Douglas" />

                <LocationTestimonials city="Cairns & Port Douglas" />

                <LocationFAQ city="Cairns & Port Douglas" />

                {/* Directions Section */}
                <div className={styles.directionsSection}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Cairns & Port Douglas
                    </h3>
                    <p className={styles.directionsText}>
                        The Captain Cook Highway offers stunning coastal views between Cairns and Port Douglas.
                        Our chauffeurs ensure safe, comfortable travel along this scenic route.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Cairns,Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
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
