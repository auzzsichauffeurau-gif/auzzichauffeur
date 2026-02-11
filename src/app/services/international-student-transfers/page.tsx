import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { GraduationCap, Heart, ShieldCheck, UserCheck, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";

export const metadata: Metadata = {
    title: "International Student Transfers Australia | Safe Airport Pickup",
    description: "Safe and reliable airport transfers for international students across Australia. Meet & greet service for university arrivals.",
};

export default function StudentServicesPage() {
    const locations = [
        { city: "Sydney", link: "/sydney/international-student-transfers", desc: "USYD, UNSW, UTS & Macquarie" },
        { city: "Melbourne", link: "/melbourne/international-student-transfers", desc: "UniMelb, Monash & RMIT" },
        { city: "Brisbane", link: "/brisbane/international-student-transfers", desc: "UQ, QUT & Griffith" },
        { city: "Perth", link: "/perth/international-student-transfers", desc: "UWA, Curtin & Murdoch" },
        { city: "Gold Coast", link: "/gold-coast/international-student-transfers", desc: "Bond University & Griffith GC" },
        { city: "Adelaide", link: "/adelaide/international-student-transfers", desc: "University of Adelaide & Flinders" },
        { city: "Hobart", link: "/hobart/international-student-transfers", desc: "University of Tasmania (UTAS)" },
        { city: "Cairns", link: "/cairns-port-douglas/international-student-transfers", desc: "JCU & CQU Cairns" },
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            <Hero
                title="International Student Transfers"
                subtitle="Safe, welcoming airport pickups for students arriving in Australia."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Welcome to Australia</h2>
                <div className={styles.textBlock}>
                    <p>
                        Arriving in a new country for studies is exciting but can be daunting. Auzzsi Chauffeur provides peace of mind
                        for students and parents alike with our dedicated student transfer service.
                        <br /><br />
                        Our vetted drivers meet students inside the terminal, assist with luggage, and drive them directly to their
                        university accommodation or homestay. We cover all major Australian university cities.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {locations.map((loc, idx) => (
                        <Link href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><GraduationCap size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Students
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
                                    View Details <ChevronRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '3rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><UserCheck size={28} /></div>
                        <span className={styles.featureLabel}>Meet &<br />Greet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Safe<br />Journey</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>Friendly<br />Drivers</span>
                    </div>
                </div>
            </section>

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
                    title="Get a Student Quote"
                    subtitle={<>
                        Safe arrival services for international students.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Arrival Details (Flight, Uni, Address)"
                />
            </section>

            <Footer />
        </main>
    );
}
