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
    title: "Chauffeur Service Adelaide | Barossa Tours & Transfers",
    description: "Experience Adelaide in comfort. Private airport transfers, corporate cars, and luxury wine tours to Barossa Valley and McLaren Vale.",
};

export default function AdelaideHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Reliable transfers to and from Adelaide Airport (ADL).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/adelaide/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for business in the CBD and South Australia.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/adelaide/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Classic and modern luxury vehicles for your Adelaide wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/adelaide/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of the Barossa Valley, McLaren Vale, or Adelaide Hills.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/adelaide/hourly-chauffeur"
        },
        {
            title: "Cruise Transfers",
            desc: "Transfers to Outer Harbor Cruise Terminal.",
            icon: <Anchor size={32} color="#c5a467" />,
            link: "/adelaide/cruise-ship-transfers"
        },
        {
            title: "Major Events",
            desc: "Transport for Adelaide Convention Centre & Oval.",
            icon: <Calendar size={32} color="#1e3a8a" />,
            link: "/adelaide/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Safe arrival for Uni of Adelaide & Flinders students.",
            icon: <GraduationCap size={32} color="#c5a467" />,
            link: "/adelaide/international-student-transfers"
        }
    ];

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
            {generateLocalBusinessSchema({
                city: "Adelaide",
                state: "South Australia",
                description: "Adelaide's premier chauffeur service. Luxury airport transfers (ADL), Barossa Valley tours, and corporate transport.",
                latitude: -34.9285,
                longitude: 138.6007,
                postalCodes: adelaidePostcodes,
                neighborhoods: adelaideNeighborhoods
            })}

            <Navbar />
            <Breadcrumbs city="Adelaide" />
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Chauffeur Service Adelaide"
                    subtitle="Experience the Festival City and Wine Regions in style."
                    showStats={false}
                />
                <div className={styles.weatherWidgetWrapper}>
                    <WeatherWidget location="Adelaide" />
                </div>
            </div>

            <section className={styles.contentSection} style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle}>Adelaide & The Barossa</h2>

                <CityIntro city="Adelaide" />

                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Adelaide is the gateway to some of the world's best wine regions.
                    Auzzsi Chauffeur specializes in airport transfers and bespoke tours to the Barossa, Clare Valley, and McLaren Vale.
                    Enjoy professional service that understands the nuances of South Australian hospitality.
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
                <Neighborhoods location="Adelaide" areas={adelaideNeighborhoods} />

                <ServiceArea location="Adelaide" postcodes={adelaidePostcodes} />

                <BusinessHours />

                <ContactInfo city="Adelaide" />

                <LocationTestimonials city="Adelaide" />

                <LocationFAQ city="Adelaide" />

                {/* Directions Section */}
                <div className={styles.directionsSection}>
                    <h3 className={styles.directionsTitle}>
                        <Map color="#c5a467" /> Getting Around Adelaide
                    </h3>
                    <p className={styles.directionsText}>
                        From the airport to the vineyards, navigating Adelaide is seamless with our professional drivers.
                        We ensure efficient routes whether you're heading to the convention center or a winery tour.
                    </p>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Adelaide,Australia&t=&z=12&ie=UTF8&iwloc=B&output=embed"
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
