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
    title: "Conference Transport Adelaide | Convention Centre & Oval",
    description: "Executive chauffeur services for Adelaide Convention Centre (ACC) and Adelaide Oval events. Professional transport for delegates.",
};

export default function AdelaideEventsPage() {
    const faqs = [
        {
            question: "Where Do You Drop Off at Adelaide Convention Centre?",
            answer: "We drop off at the main entrance on North Terrace, providing easy access to the convention centre halls."
        },
        {
            question: "Do You Service Events at Adelaide Oval?",
            answer: "Yes, Adelaide Oval is a major venue for corporate functions. We can arrange drop-offs at the Telstra Plaza or East Gate."
        },
        {
            question: "Can You Handle Airport Arrivals for Speakers?",
            answer: "Absolutely. We monitor flights and meet VIP speakers in the Adelaide Airport arrivals hall, assisting with luggage and transferring them to their hotel or venue."
        },
        {
            question: "Is Hourly Hire Available?",
            answer: "Yes, hourly hire is ideal for busy event schedules or roadshows visiting multiple locations in Adelaide."
        }
    ];

    const vehicles = [
        {
            category: 'Classic',
            name: 'Executive Sedan',
            desc: 'Professional transport for VIPs.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Comfortable workspace on wheels.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'Efficient shuttle for teams.',
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
                title="Conference Transport Adelaide"
                subtitle="Professional logistics for Adelaide Convention Centre and business events."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Adelaide Business Events</h2>
                <div className={styles.textBlock}>
                    <p>
                        Adelaide offers a compact and convenient city for conferences, anchored by the Adelaide Convention Centre (ACC)
                        on the picturesque River Torrens. Auzzsi Chauffeur provides reliable executive transport for your delegates.
                        <br /><br />
                        From airport meet-and-greets to gala dinner transfers at Adelaide Oval or the National Wine Centre,
                        we ensure your team moves efficiently and safely.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calendar size={28} /></div>
                        <span className={styles.featureLabel}>ACC<br />Events</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Corporate<br />Groups</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctual<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Executive<br />Fleet</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Adelaide Event Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Event Transfer FAQs
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
                    title="Get a Corporate Quote"
                    subtitle={<>
                        Contact us for Adelaide event transport.
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
