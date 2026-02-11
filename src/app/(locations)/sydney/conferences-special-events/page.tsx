import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Calendar, Users, Calculator, MapPin, Clock, Award, ShieldCheck, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Chauffeur Sydney | ICC Sydney & Major Venues",
    description: "Professional chauffeur transport for conferences and events in Sydney. Reliable transfers to ICC Sydney, Sydney Showground, and corporate venues.",
};

export default function SydneyEventsPage() {
    const faqs = [
        {
            question: "Do You Provide Transfers for ICC Sydney Events?",
            answer: "Yes, we frequently organize transport for delegates and speakers attending conferences at the International Convention Centre (ICC) Sydney in Darling Harbour. We can arrange drop-offs at the main convention entrance or theatre entrance."
        },
        {
            question: "Can You Handle Large Corporate Groups?",
            answer: "Absolutely. Our fleet includes Mercedes V-Class People Movers for teams, and we can coordinate multiple vehicles for larger delegations ensuring everyone arrives simultaneously."
        },
        {
            question: "Do You Offer Hourly Hire for Event Dinners?",
            answer: "Yes, hourly hire is perfect for event schedules. Your chauffeur can wait on standby while you attend a gala dinner or awards night, ready to take you back to your hotel or next venue immediately."
        },
        {
            question: "Are Your Chauffeurs Familiar with Sydney Event Venues?",
            answer: "Our drivers know the drop-off and pickup zones for major venues like ICC Sydney, Sydney Showground (Olympic Park), The Star Event Centre, and major CBD hotels."
        }
    ];

    const vehicles = [
        {
            category: 'Classic',
            name: 'Executive Sedan',
            desc: 'Professional transport for solo delegates or VIPs.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Spacious comfort for small teams or VIP guests.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'Efficient transport for corporate groups and teams.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="Conference & Event Chauffeur Sydney"
                subtitle="Reliable transport for ICC Sydney, corporate events, and gala dinners."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class Transport for Sydney Events</h2>
                <div className={styles.textBlock}>
                    <p>
                        Sydney hosts world-class conferences and events, from the bustling ICC Sydney in Darling Harbour to
                        exhibitions at Sydney Olympic Park. Auzzsi Chauffeur ensures you and your delegates arrive professionally,
                        on time, and in style.
                        <br /><br />
                        Focus on networking and your agenda while we handle the logistics. Whether it's a single VIP transfer
                        or a shuttle service for a corporate team, our fleet offers the flexibility and reliability required
                        for high-stakes business events.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calendar size={28} /></div>
                        <span className={styles.featureLabel}>Event<br />Coordination</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Logistics</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctual<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Executive<br />Image</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Event Transport Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Immaculate vehicles to represent your company professionally.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Sydney Event Transport FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            {/* CONTACT HELP SECTION */}
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
                    title="Get An Event Transport Quote"
                    subtitle={<>
                        Contact us for bespoke event logistics and group quotes.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Event Details (Date, Venue, Pax)"
                />
            </section>

            <Footer />
        </main>
    );
}
