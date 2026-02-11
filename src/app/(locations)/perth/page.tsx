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
    title: "Chauffeur Service Perth | Private Drivers Western Australia",
    description: "Perth's premier chauffeur service. Luxury airport transfers, corporate cars, and private tours of Fremantle, Swan Valley, and Cottesloe.",
};

export default function PerthHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Premium transfers to Perth Airport (PER).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/perth/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for WA business leaders.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/perth/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your Swan River wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/perth/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of the Swan Valley, Fremantle, or Kings Park.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/perth/hourly-chauffeur"
        },
        {
            title: "Cruise Transfers",
            desc: "Transfers to Fremantle Passenger Terminal.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/perth/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Transport for Perth Convention Centre (PCEC) & Optus Stadium.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/perth/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Safe arrival for UWA, Curtin & Murdoch students.",
            icon: <GraduationCap size={32} color="#c5a467" />,
            link: "/perth/international-student-transfers"
        }
    ];

    const perthNeighborhoods = [
        "Peppermint Grove", "Dalkeith", "Cottesloe", "Nedlands",
        "City Beach", "Mosman Park", "Applecross", "Swanbourne"
    ];

    const perthPostcodes = [
        "6000", "6009", "6010", "6011", "6012", "6014",
        "6015", "6153", "6007", "6008", "6018", "6020"
    ];

    return (
        <main className={styles.pageWrapper}>
            {generateLocalBusinessSchema({
                city: "Perth",
                state: "Western Australia",
                description: "Perth's premier chauffeur service. Luxury airport transfers, corporate cars, and private tours of Fremantle, Swan Valley, and Cottesloe.",
                latitude: -31.9505,
                longitude: 115.8605,
                postalCodes: perthPostcodes,
                neighborhoods: perthNeighborhoods
            })}

            <Navbar />
            <Breadcrumbs city="Perth" />
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Chauffeur Service Perth"
                    subtitle="Experience the best of the West in absolute luxury."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Perth" />
                </div>
            </div>

            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle}>West Coast Luxury</h2>

                <CityIntro city="Perth" />

                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From the pristine beaches of Cottesloe to the wineries of the Swan Valley, Perth is a city of diverse beauty.
                    Auzzsi Chauffeur provides the premium transport solution that connects the Golden Triangle, Fremantle, and the CBD with ease.
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
                <Neighborhoods location="Perth" areas={perthNeighborhoods} />

                <ServiceArea location="Perth" postcodes={perthPostcodes} />

                <BusinessHours />

                <ContactInfo city="Perth" />

                <LocationTestimonials city="Perth" />

                <LocationFAQ city="Perth" />

                {/* Directions Section */}
                <div className={styles.directionsSection}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Perth
                    </h3>
                    <p className={styles.directionsText}>
                        Our chauffeurs are experts in navigating Perth's freeway system and the scenic routes along the Swan River (Riverside Drive).
                        Whether you are heading to the airport or a sunset dinner in Cottesloe, we ensure the smooth and timely route.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Perth,Western+Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
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
