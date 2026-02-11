import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { FileText, Laptop, ShieldCheck, Clock, Award, Coffee, Users, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Gold Coast | Executive Car Service",
    description: "Premium executive transport for business meetings, conferences, and VIP events on the Gold Coast. Punctual, professional, and discreet.",
};

export default function GoldCoastCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Corporate Transfers For Conferences?",
            answer: "Yes, we are experts in conference logistics on the Gold Coast, particularly for events at the Gold Coast Convention and Exhibition Centre (GCCEC) and major hotels in Broadbeach and Surfers Paradise."
        },
        {
            question: "Can I Book Trans-city Transfers To Brisbane?",
            answer: "Absolutely. We specialize in executive transfers between the Gold Coast and Brisbane CBD or Brisbane Airport. This is a popular route for business travelers needing a reliable and comfortable connection."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer executive sedans (Holden Caprice/Genesis), premium European sedans (Audi/Mercedes), and luxury people movers (Mercedes V-Class) for groups attending trade shows or team retreats."
        },
        {
            question: "Will My Chauffeur Sign A Non-Disclosure Agreement (NDA)?",
            answer: "Yes, we understand the privacy needs of high-profile delegates and executives. Our chauffeurs are professionals who respect client confidentiality at all times."
        },
        {
            question: "How Far In Advance Should I Book For Major Events?",
            answer: "During major events like the Magic Millions or large conferences, vehicle availability can be tight. We strongly recommend booking corporate transfers 2-4 weeks in advance for these peak periods."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The corporate standard. Reliable and comfortable. Features leather seating and ample workspace for the commute.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Impress your clients or travel in ultimate luxury. Mercedes-Benz S-Class or Audi A8L, offering reclining seats and superior comfort.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Perfect for conference groups. Spacious seating allows your team to travel together in comfort.',
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
                title="Corporate Chauffeur Gold Coast"
                subtitle="Premium executive transport for business meetings, conferences, and VIP events on the Gold Coast. Punctual, professional, and discreet."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class Travel In Paradise</h2>
                <div className={styles.textBlock}>
                    <p>
                        The Gold Coast is Australia's premier destination for conferences and business events. Auzzsi Chauffeur’s
                        corporate service ensures you make the best impression. Arrive at the Gold Coast Convention Centre or
                        Star Casino in style and comfort.
                        <br /><br />
                        Whether you are commuting from Brisbane for a meeting, attending a multi-day conference,
                        or entertaining clients at a waterfront restaurant, our professional chauffeurs ensure you arrive relaxed,
                        prepared, and on time.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Corporate Accounts & Priority Service</h3>
                    <p>
                        Streamline your company's ground transport with an Auzzsi Corporate Account. Enjoy benefits such as
                        priority vehicle allocation during peak conference seasons, fixed corporate rates, and consolidated monthly
                        billing to make expense management effortless.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><FileText size={28} /></div>
                        <span className={styles.featureLabel}>Monthly<br />Invoicing</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Laptop size={28} /></div>
                        <span className={styles.featureLabel}>Mobile<br />Office</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>100%<br />Confidential</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctuality<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Top Rated<br />Professionals</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Coffee size={28} /></div>
                        <span className={styles.featureLabel}>Concierge<br />Service</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Executive Fleet Options</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Choose the right vehicle for the occasion. From understated executive sedans for daily transfers to
                    premium limousines for VIP guests.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Corporate Travel FAQs
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
                    title="Open A Corporate Account"
                    subtitle={<>
                        Contact our corporate team to discuss rates and set up your account.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    dateLabel="Company Name*"
                    emailLabel="Work Email*"
                    detailsLabel="Message / Request"
                    btnText="Request Information"
                />
            </section>

            <Footer />
        </main>
    );
}
