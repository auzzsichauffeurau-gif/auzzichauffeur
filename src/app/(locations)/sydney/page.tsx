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
    title: "Chauffeur Service Sydney | Luxury Car Hire & Airport Transfers",
    description: "Sydney's premier chauffeur service. Luxury airport transfers (SYD), corporate cars, wedding hire, and private tours of the Harbour City.",
};

export default function SydneyHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Premier transfers to Sydney Kingsford Smith (SYD).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/sydney/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for the CBD, North Sydney, and Barangaroo.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/sydney/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your harbourside or Northern Beaches wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/sydney/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of the Blue Mountains, Hunter Valley, or City sights.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/sydney/hourly-chauffeur"
        },
        {
            title: "Cruise Ship Transfers",
            desc: "Seamless transfers to Circular Quay and White Bay terminals.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/sydney/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Corporate transport for ICC Sydney and major conventions.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/sydney/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Airport pickups for USYD, UNSW, and UTS students.",
            icon: <GraduationCap size={32} color="#c5a467" />,
            link: "/sydney/international-student-transfers"
        }
    ];

    const sydneyNeighborhoods = [
        "Sydney CBD", "Bondi Beach", "Surry Hills", "Newtown",
        "Paddington", "Manly", "The Rocks", "Circular Quay"
    ];

    const sydneyPostcodes = [
        "2000", "2001", "2007", "2008", "2009", "2010",
        "2011", "2015", "2016", "2017", "2018", "2021",
        "2022", "2026", "2027", "2028", "2030", "2095",
        "2060", "2150"
    ];

    return (
        <main className={styles.pageWrapper}>
            {generateLocalBusinessSchema({
                city: "Sydney",
                state: "New South Wales",
                description: "Sydney's premier chauffeur service. Luxury airport transfers (SYD), corporate cars, wedding hire, and private tours of the Harbour City.",
                latitude: -33.8688,
                longitude: 151.2093,
                postalCodes: sydneyPostcodes,
                neighborhoods: sydneyNeighborhoods
            })}

            <Navbar />
            <Breadcrumbs city="Sydney" />
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Chauffeur Service Sydney"
                    subtitle="World-class transport for a world-class city. Travel Sydney in style."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Sydney" />
                </div>
            </div>

            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle}>The Emerald City</h2>

                <CityIntro city="Sydney" />

                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From the Harbour Bridge to Bondi Beach, Sydney is diverse and dynamic.
                    Auzzsi Chauffeur helps you beat the traffic and arrive relaxed.
                    Our professional chauffeurs provide the highest standard of service for every journey.
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
                <Neighborhoods location="Sydney" areas={sydneyNeighborhoods} />

                <ServiceArea location="Sydney" postcodes={sydneyPostcodes} />

                <BusinessHours />

                <ContactInfo city="Sydney" />

                <LocationTestimonials city="Sydney" />

                <LocationFAQ city="Sydney" />

                {/* Directions Section */}
                <div className={styles.directionsSection}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Sydney
                    </h3>
                    <p className={styles.directionsText}>
                        Navigating Sydney can be complex with its one-way streets and toll roads.
                        Our chauffeurs are experts in the local area, ensuring the most efficient routes
                        whether you are heading to the Airport, CBD, or Western Suburbs.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Sydney,Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
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
