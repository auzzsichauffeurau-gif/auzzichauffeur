import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import { Heart, Camera, Clock, Award, Gift, Star, MapPin } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Wedding Cars Australia | Nationwide Chauffeur Hire",
    description: "Premium wedding car hire across Australia. Sydney, Melbourne, Brisbane, Perth & more. European luxury sedans and limousines for your special day.",
};

export default function WeddingServicesPage() {
    const faqs = [
        {
            question: "Which Cities Do You Service?",
            answer: "We offer wedding car hire in all major Australian cities including Sydney, Melbourne, Brisbane, Adelaide, Hobart, Gold Coast, and Cairns."
        },
        {
            question: "How Far In Advance Should I Book?",
            answer: "We recommend booking 6-12 months in advance, especially for spring and autumn weddings, to ensure availability of your preferred vehicles."
        },
        {
            question: "Do You Offer Packages For Bridal Parties?",
            answer: "Yes, we can tailor packages including a lead car for the bride and groom (e.g., S-Class) and people movers (e.g., V-Class) for the bridal party and guests."
        },
        {
            question: "Are Wedding Ribbons Included?",
            answer: "Yes, complimentary white satin ribbons and tulle are included with every wedding booking. Custom colors can be arranged on request."
        }
    ];

    const vehicles = [
        {
            category: 'Bridal Cars',
            name: 'Mercedes-Benz S-Class',
            desc: 'The gold standard in wedding transport. Unmatched luxury, spacious rear seating, and elegant styling.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Groomsmen',
            name: 'Audi A8L / Q7',
            desc: 'Sophisticated and spacious. Perfect for the groom and groomsmen to arrive relaxed and on time.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Guest Transfer',
            name: 'Mercedes V-Class',
            desc: 'Luxury people movers for transporting family members and guests between venues.',
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
                title="Luxury Wedding Car Hire Australia"
                subtitle="Arrive in style on your special day. Premium chauffeur services available nationwide."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Your Perfect Day Deserves The Perfect Journey</h2>
                <div className={styles.textBlock}>
                    <p>
                        At Auzzsi Chauffeur, we understand that your wedding day is one of the most significant moments of your life.
                        Our nationwide fleet of immaculate luxury vehicles ensures that you arrive at your ceremony and reception with grace, elegance, and peace of mind.
                        <br /><br />
                        From the iconic Harbour Bridge in Sydney to the vineyards of the Yarra Valley, our professional chauffeurs provide a seamless experience, allowing you to focus on the moments that matter.
                    </p>
                </div>
            </section>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem 4rem 2rem'
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: '#111'
                }}>Nationwide Wedding Service</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { city: "Sydney", link: "/sydney/wedding-cars", desc: "Harbour & Northern Beaches" },
                        { city: "Melbourne", link: "/melbourne/wedding-cars", desc: "CBD, Yarra Valley & Dandenongs" },
                        { city: "Brisbane", link: "/brisbane/wedding-cars", desc: "City & Hinterland" },
                        { city: "Perth", link: "/perth/wedding-cars", desc: "City & Swan Valley" },
                        { city: "Adelaide", link: "/adelaide/wedding-cars", desc: "Barossa, Hahndorf & City" },
                        { city: "Gold Coast", link: "/gold-coast/wedding-cars", desc: "Surfers Paradise & Byron Bay" },
                        { city: "Hobart", link: "/hobart/wedding-cars", desc: "Waterfront & Historic Battery Point" },
                        { city: "Cairns", link: "/cairns-port-douglas/wedding-cars", desc: "Tropical Weddings & Port Douglas" },
                    ].map((loc, idx) => (
                        <a href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Heart size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Weddings
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
                                    View Details <svg width="16" height="16" style={{ marginLeft: '4px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><MapPin size={28} /></div>
                        <span className={styles.featureLabel}>National<br />Coverage</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>White<br />Ribbons</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Star size={28} /></div>
                        <span className={styles.featureLabel}>Red Carpet<br />Treatment</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>On Time<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Immaculate<br />Fleet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Gift size={28} /></div>
                        <span className={styles.featureLabel}>Refreshments<br />Included</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Wedding Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Select from Australia's finest range of luxury chauffer vehicles.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Wedding Service FAQs
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
                    subtitle="Contact our events team to discuss your wedding transport requirements."
                    detailsLabel="Wedding Details (City, Venues, Dates)"
                />
            </section>

            <Footer />
        </main>
    );
}
