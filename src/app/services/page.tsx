import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import {
    Plane, Briefcase, Heart, Clock, Anchor,
    Calendar, GraduationCap, Map, Users, ChevronRight, Sun
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Chauffeur Services Australia | Airport, Corporate & Events",
    description: "Comprehensive luxury transport solutions nationwide. From airport transfers and corporate roadshows to wedding cars and private tours.",
};

export default function ServicesPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Reliable meet & greet service for all domestic and international flights. Flight tracking included.",
            icon: <Plane size={32} />,
            link: "/services/airport-transfers"
        },
        {
            title: "Corporate Travel",
            desc: "Executive transport for business meetings, roadshows, and VIP delegrates. Privacy guaranteed.",
            icon: <Briefcase size={32} />,
            link: "/services/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Make your special day unforgettable with our pristine fleet of European luxury wedding vehicles.",
            icon: <Heart size={32} />,
            link: "/services/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Total flexibility. Hire a car and driver by the hour for as long as you need.",
            icon: <Clock size={32} />,
            link: "/services/hourly-chauffeur"
        },
        {
            title: "Cruise Ship Transfers",
            desc: "Seamless door-to-port connections for all major Australian cruise terminals.",
            icon: <Anchor size={32} />,
            link: "/services/cruise-ship-transfers"
        },
        {
            title: "Events & Conferences",
            desc: "Logistics management for large scale events, summits, and major sporting occasions.",
            icon: <Calendar size={32} />,
            link: "/services/conferences-special-events"
        },
        {
            title: "Student Transfers",
            desc: "Safe and secure airport pickup and accommodation transfer for international students.",
            icon: <GraduationCap size={32} />,
            link: "/services/international-student-transfers"
        },
        {
            title: "Luxury Private Tours",
            desc: "Explore Australia's wineries and landmarks with a knowledgeable private driver guide.",
            icon: <Map size={32} />,
            link: "/services/luxury-tours"
        },
        {
            title: "All Day Hire",
            desc: "A dedicated vehicle at your disposal for the entire day. Perfect for busy itineraries.",
            icon: <Sun size={32} />,
            link: "/services/all-day-hire"
        },
        {
            title: "Crew Logistics",
            desc: "Specialized transport solutions for airline flight crew and maritime staff.",
            icon: <Users size={32} />,
            link: "/services/airline-cruise-crewing"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Our Premium Services"
                subtitle="More than just a ride. Experience the Auzzsi difference across a complete range of luxury transport solutions."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Comprehensive Transport Solutions</h2>
                <div className={styles.textBlock}>
                    <p>
                        Auzzsi Chauffeur offers a complete suite of ground transport services designed to meet the diverse needs of modern travelers.
                        From the precision required for business logistics to the elegance needed for weddings, our fleet and team are adaptable to every occasion.
                        <br /><br />
                        We operate nationwide, maintaining the same high standards of service, safety, and luxury whether you are in Sydney, Melbourne, Perth, or anywhere in between.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginTop: '4rem'
                }}>
                    {services.map((service, idx) => (
                        <Link href={service.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                padding: '2rem',
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                border: '1px solid #f3f4f6',
                                transition: 'transform 0.2s, box-shadow 0.2s'
                            }}>
                                <div style={{ marginBottom: '1.5rem', color: '#c5a467' }}>
                                    {service.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    color: '#1f2937',
                                    marginBottom: '1rem',
                                    fontFamily: 'serif'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    color: '#6b7280',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.6',
                                    flex: 1
                                }}>
                                    {service.desc}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#1e3a8a',
                                    fontWeight: 'bold',
                                    marginTop: 'auto'
                                }}>
                                    View Service <ChevronRight size={16} style={{ marginLeft: '4px' }} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <BookingCTA />
            <Footer />
        </main>
    );
}
