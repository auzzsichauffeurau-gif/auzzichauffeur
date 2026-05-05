import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import { MapPin, Plane, CheckCircle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Airport Meeting Points | Where to Meet Your Driver | Auzzie Chauffeur" },
    description: "Find designated chauffeur meeting points for Sydney, Melbourne, Brisbane, and all major Australian airports. Clear instructions for your arrival.",
};

export default function MeetingPointsPage() {
    const meetingPoints = [
        {
            airport: "Sydney Airport (SYD)",
            int: "International (T1): Chauffeur meeting point inside Arrivals Hall A or B. Look for your name sign.",
            dom: "Domestic (T2/T3): Priority Pickup Area outside the terminal. Driver will text you exact bay number."
        },
        {
            airport: "Melbourne Airport (MEL)",
            int: "International (T2): Chauffeur Meeting Point on Ground Floor Arrivals, near the hire car counters.",
            dom: "Domestic (T1/T3/T4): Designated Chauffeur Pickup area in the forecourt. Driver enters shortly after you land."
        },
        {
            airport: "Brisbane Airport (BNE)",
            int: "International: Arrivals Hall greeting area. Driver will hold a name board.",
            dom: "Domestic: Limousine Pickup Area located across the skybridge."
        },
        {
            airport: "Perth Airport (PER)",
            int: "International (T1): Meeting point near the exit doors in Arrivals.",
            dom: "Domestic (T3/T4): Commercial Pickup lane outside the terminal."
        },
        {
            airport: "Adelaide Airport (ADL)",
            int: "Ground floor arrivals hall meeting point.",
            dom: "Designated Chauffeur pick-up zone in the car park (short walk from terminal)."
        },
        {
            airport: "Gold Coast Airport (OOL)",
            int: "Arrivals Hall greeting.",
            dom: "Limousine Pickup Lane just outside the modifications."
        },
        {
            airport: "Hobart Airport (HBA)",
            int: "N/A",
            dom: "Commercial Pickup Zone directly outside Arrivals."
        },
        {
            airport: "Cairns Airport (CNS)",
            int: "Arrivals greeting area.",
            dom: "Bus & Limousine Pickup Area to the right of the terminal exit."
        }
    ];

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Meeting Points", url: "/services/meeting-points" }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <ServiceSchema
                name="Airport Chauffeur Meeting Points"
                description="Guide to finding your chauffeur at all major Australian airports."
                url="/services/meeting-points"
            />

            <Hero
                title="Airport Meeting Points"
                subtitle="Where to meet your chauffeur at major Australian airports."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Locating Your Driver</h2>
                <div className={styles.textBlock}>
                    <p>
                        We provide a Meet & Greet service for most airport arrivals. Your chauffeur will be tracking your flight and waiting for you
                        once you clear customs or collect your bags.
                        <br /><br />
                        For international arrivals, we typically meet you inside the terminal with a digital name board.
                        For domestic flights, we may use express pickup zones to get you on the road faster.
                    </p>
                </div>

                <div style={{ maxWidth: '1000px', margin: '4rem auto' }}>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {meetingPoints.map((mp, idx) => (
                            <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderLeft: '4px solid #c5a467' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <Plane color="#1e3a8a" />
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{mp.airport}</h3>
                                </div>
                                <div style={{ display: 'grid', gap: '1rem', paddingLeft: '2.5rem' }}>
                                    <div>
                                        <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '0.25rem' }}>International Terminals</strong>
                                        <span style={{ color: '#4b5563' }}>{mp.int}</span>
                                    </div>
                                    <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem' }}>
                                        <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '0.25rem' }}>Domestic Terminals</strong>
                                        <span style={{ color: '#4b5563' }}>{mp.dom}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                    title="Still Unsure?"
                    subtitle="Contact our operations team for specific meeting instructions."
                    detailsLabel="Flight Number"
                />
            </section>

            <Footer />
        </main>
    );
}
