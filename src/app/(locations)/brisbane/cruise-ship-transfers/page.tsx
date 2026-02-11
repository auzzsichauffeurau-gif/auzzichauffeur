import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Anchor, Calendar, ShieldCheck, Clock, Award, Users, MapPin, Bus } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Ship Transfers Brisbane | Luggage Point & Portside",
    description: "Private transfers to Brisbane International Cruise Terminal (Luggage Point) and Portside Wharf. Start your cruise holiday in luxury.",
};

export default function BrisbaneCruisePage() {
    const faqs = [
        {
            question: "Where is the new Brisbane Cruise Terminal?",
            answer: "The Brisbane International Cruise Terminal is located at Luggage Point, Pinkenba, near the mouth of the Brisbane River. It's the main port for large international ships."
        },
        {
            question: "Do You Service Portside Wharf as well?",
            answer: "Yes, we also provide transfers to Portside Wharf in Hamilton, which generally hosts smaller boutique vessels."
        },
        {
            question: "How Far is the Cruise Terminal from Brisbane Airport?",
            answer: "The Luggage Point terminal is about a 15-20 minute drive from Brisbane Airport, though traffic conditions can vary. We ensure you have ample buffer time."
        },
        {
            question: "Can We Fit All Our Luggage?",
            answer: "Cruise passengers often have extra bags. Our Audis and Mercedes V-Class vans are perfect for transporting 2-7 passengers with multiple large suitcases."
        },
        {
            question: "Do You Offer Transfers from the Gold Coast?",
            answer: "Yes, we frequently transfer passengers from the Gold Coast to the Brisbane Cruise Terminal. The journey takes approximately 60-90 minutes depending on your pickup location."
        }
    ];

    const vehicles = [
        {
            category: 'Classic',
            name: 'Executive Sedan',
            desc: 'Comfortable transfer to the port for couples.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Luxury SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Ideal for families heading to their cruise holiday.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'People Mover',
            name: 'Mercedes V-Class',
            desc: 'The best option for groups and heavy luggage.',
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
                title="Cruise Ship Transfers Brisbane"
                subtitle="Stress-free transfers to Brisbane International Cruise Terminal."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Your Voyage Starts Here</h2>
                <div className={styles.textBlock}>
                    <p>
                        Brisbane's new state-of-the-art International Cruise Terminal at Luggage Point welcomes ships from around the world.
                        Auzzsi Chauffeur ensures you arrive at the port relaxed and on time, bypassing the stress of shuttle buses or parking.
                        <br /><br />
                        Whether you are traveling from Brisbane Airport, the CBD, or the Gold Coast, our professional chauffeurs
                        provide a seamless door-to-terminal service.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Anchor size={28} /></div>
                        <span className={styles.featureLabel}>Port<br />Transfers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Bus size={28} /></div>
                        <span className={styles.featureLabel}>Extra<br />Luggage</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Direct<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Timely<br />Drop-off</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Cruise Fleet Options</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Brisbane Cruise FAQs
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
                    title="Get A Cruise Transfer Quote"
                    subtitle={<>
                        Providing transfers to Luggage Point and Portside Wharf.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Cruise Details (Ship Name, Port, Pax)"
                />
            </section>

            <Footer />
        </main>
    );
}
