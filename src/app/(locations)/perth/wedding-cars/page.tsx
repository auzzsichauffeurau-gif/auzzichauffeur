import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Heart, Camera, MapPin, Search, Star, Users } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wedding Cars Perth | Luxury Bridal Transport",
    description: "Elegant wedding car hire in Perth. Luxury sedans and limousines for your special day in Swan Valley, Kings Park, or Fremantle.",
};

export default function PerthWeddingPage() {
    const faqs = [
        {
            question: "Do You Service Swan Valley Weddings?",
            answer: "Yes, we frequently transport bridal parties to popular Swan Valley venues like Sandalford Wines, Mandoon Estate, and Sittella Winery."
        },
        {
            question: "Are Ribbons Included?",
            answer: "Yes, we provide traditional white wedding ribbons on the bonnet of our vehicles upon request."
        },
        {
            question: "Can We Stop for Photos at Kings Park?",
            answer: "Absolutely. Our chauffeurs are happy to accommodate photo stops at iconic locations like Kings Park, the Blue Boat House, or South Perth Foreshore."
        },
        {
            question: "Do You Offer Getaway Cars?",
            answer: "Yes, we can arrange a late-night pickup from your reception venue to whisk you away to your hotel or the airport for your honeymoon."
        }
    ];

    const vehicles = [
        {
            category: 'Bridal Car',
            name: 'Mercedes S-Class / BMW 7 Series',
            desc: 'The ultimate in luxury and style for the bride.',
            passengers: 3,
            luggage: 2,
            bags: 0,
            image: '/tile-audi.png'
        },
        {
            category: 'Groomsmen',
            name: 'Audi Q7 / Similar',
            desc: 'Spacious and masculine transport for the groom and groomsmen.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-driver.png'
        },
        {
            category: 'Bridal Party',
            name: 'Mercedes V-Class',
            desc: 'Luxury people mover for bridesmaids and family members.',
            passengers: 7,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="Wedding Cars Perth"
                subtitle="Elegant transport for your Swan River wedding."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Your Perfect Day</h2>
                <div className={styles.textBlock}>
                    <p>
                        A Perth wedding is truly special, whether set against the backdrop of the Swan River, the rustic charm of Fremantle,
                        or the vineyards of the Swan Valley. Auzzsi Chauffeur adds the finishing touch of elegance with our premium fleet.
                        <br /><br />
                        Our professional chauffeurs ensure you arrive relaxed and on time, with immaculate vehicles that look stunning in your wedding photos.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>Wedding<br />Specialists</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Photo<br />Ready</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Star size={28} /></div>
                        <span className={styles.featureLabel}>Immaculate<br />Vehicles</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Guest<br />Transport</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Wedding Fleet</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Wedding FAQs
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
                    title="Get a Wedding Quote"
                    subtitle={<>
                        Contact us to discuss your Perth wedding packages.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Wedding Details (Date, Venues, Hours)"
                />
            </section>

            <Footer />
        </main>
    );
}
