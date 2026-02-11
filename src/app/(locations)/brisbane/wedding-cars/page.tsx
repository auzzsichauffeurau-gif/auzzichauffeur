import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Heart, Camera, Clock, Award, Gift, Star, Users, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wedding Cars Brisbane | Luxury Bridal Transport",
    description: "Elegant wedding car hire for Brisbane, Ipswich, and the Gold Coast. European luxury sedans and limousines for your special day.",
};

export default function BrisbaneWeddingPage() {
    const faqs = [
        {
            question: "How Far In Advance Should I Book My Wedding Cars?",
            answer: "In Brisbane, peak wedding season runs from autumn to spring. We recommend booking 6-12 months in advance to secure your preferred vehicle models and colors."
        },
        {
            question: "Are Your Vehicles Air-Conditioned?",
            answer: "Absolutely. Given Brisbane's warm climate, all our wedding vehicles feature powerful, climate-controlled air conditioning to ensure you arrive cool and fresh, regardless of the temperature outside."
        },
        {
            question: "Do You Provide Wedding Ribbons And A Red Carpet?",
            answer: "Yes, our wedding packages include complimentary white satin ribbons for the bonnet and tulle for the rear shelf. We can also provide a red carpet for your arrival at the ceremony upon request."
        },
        {
            question: "Is There A Minimum Hire Time For Wedding Cars?",
            answer: "Yes, generally there is a minimum hire period of 3 hours for wedding bookings in Brisbane. This allows ample time for pickups, the ceremony arrival, and photos at locations like Mt Coot-tha or the Botanic Gardens."
        },
        {
            question: "Do You Offer Transport For Wedding Guests?",
            answer: "Yes, in addition to the bridal fleet, we can arrange luxury people movers (Mercedes V-Class) or coaches to transport your guests between the ceremony and reception venues seamlessly."
        }
    ];

    const vehicles = [
        {
            category: 'Bridal Cars',
            name: 'Mercedes-Benz S-Class',
            desc: 'The ultimate wedding car. Spacious, elegant, and timeless. Features a long wheelbase for accommodating bridal gowns with ease.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Groomsmen',
            name: 'Audi A8L',
            desc: 'Sleek and sophisticated. The perfect ride for the groom and his party to arrive in style.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Guest Transfer',
            name: 'Mercedes V-Class',
            desc: 'Luxury transport for family and guests. Ensure your loved ones arrive on time and comfortable.',
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
                title="Luxury Wedding Cars Brisbane"
                subtitle="Make your special day unforgettable with Brisbane's premium chauffeur-driven wedding fleet. Elegant, cooling comfort, and picture-perfect."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Arrive In Style On Your Big Day</h2>
                <div className={styles.textBlock}>
                    <p>
                        Your wedding day is a celebration of love, and every detail should be perfect.
                        Auzzsi Chauffeur provides impeccable wedding car services across Brisbane, Ipswich, and the Gold Coast.
                        From the moment we pick you up to your final getaway, we ensure a seamless, stress-free experience.
                        <br /><br />
                        Our professional chauffeurs are experienced in wedding etiquette and know Brisbane's best photo locations intimately.
                        Whether it's the cliffs at Kangaroo Point or the lush greenery of the City Botanic Gardens, we ensure you arrive refreshed and radiant.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Tailored Wedding Packages</h3>
                    <p>
                        We understand that every wedding is unique. Whether you need a single car for the bride or a full fleet
                        for the entire bridal party and guests, we can tailor a package to suit your specific vision and budget.
                        All packages include a uniformed chauffeur, ribbons, and refreshments.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>White<br />Ribbons</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Star size={28} /></div>
                        <span className={styles.featureLabel}>Red Carpet<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Photo<br />Assist</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>On Time<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Immaculate<br />Vehicles</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Gift size={28} /></div>
                        <span className={styles.featureLabel}>Champagne<br />Option</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Wedding Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Select from our range of pristine European luxury vehicles to complement your wedding style.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Wedding Car FAQs
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
                    title="Get A Wedding Quote"
                    subtitle={<>
                        Tell us about your Brisbane wedding and we will provide a custom package.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Wedding Details (Venues, Times, Car Preference)"
                />
            </section>

            <Footer />
        </main>
    );
}
