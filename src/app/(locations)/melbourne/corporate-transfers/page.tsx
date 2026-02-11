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
    title: "Corporate Chauffeur Melbourne | Executive Car Service",
    description: "Premium executive transport for business meetings, roadshows, and VIP events in Melbourne. Punctual, professional, and discreet.",
};

export default function MelbourneCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Corporate Accounts With Monthly Invoicing?",
            answer: "Yes, we offer dedicated corporate accounts for frequent business travellers. This includes detailed monthly invoicing, priority booking status, and flexible payment terms (Credit Card or EFT). Contact our team to set up an account today."
        },
        {
            question: "Can I Book A Chauffeur By The Hour For Meetings?",
            answer: "Absolutely. Our 'Hourly Hire' service is perfect for executives attending multiple meetings across Melbourne. Your chauffeur stays with you, ready to move instantly when you are, providing a mobile office environment in between stops."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer a range of executive vehicles including the Holden Caprice (Executive Sedan), Audi A8/Mercedes S-Class (Premium European), and Mercedes V-Class vans for corporate groups. All vehicles are unmarked or discreetly badged for privacy."
        },
        {
            question: "Will My Chauffeur Sign A Non-Disclosure Agreement (NDA)?",
            answer: "Our chauffeurs are professionals who understand the importance of discretion and confidentiality. We are happy to sign specific NDAs for high-profile clients or sensitive roadshows upon request."
        },
        {
            question: "How Far In Advance Should I Book For Corporate Events?",
            answer: "For individual transfers, we can often accommodate same-day bookings. For large corporate events or conferences requiring multiple vehicles, we recommend booking at least 1-2 weeks in advance to secure the specific fleet mix you require."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The corporate standard. Reliable, understated, and comfortable. Features leather seating and ample workspace.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Impress your clients or travel in ultimate luxury. Mercedes-Benz S-Class or Audi A8L.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Perfect for roadshows and site visits. Conference style seating allows your team to brief and debrief on the move.',
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
                title="Corporate Chauffeur Melbourne"
                subtitle="Premium executive transport for business meetings, roadshows, and VIP events. Punctual, professional, and discreet."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class Travel On The Ground</h2>
                <div className={styles.textBlock}>
                    <p>
                        In the fast-paced business world, time is your most valuable asset. Auzzsi Chauffeur's
                        corporate service allows you to reclaim that time. Transform your travel time into productivity
                        time in the quiet, private environment of our executive vehicles.
                        <br /><br />
                        Whether you are heading to a boardroom meeting in the CBD, a conference at the Melbourne Convention
                        and Exhibition Centre, or entertaining clients, our professional chauffeurs ensure you arrive relaxed,
                        prepared, and on time. We act as an extension of your own professional image.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Corporate Accounts & Priority Service</h3>
                    <p>
                        Streamline your company's ground transport with an Auzzsi Corporate Account. Enjoy benefits such as
                        priority vehicle allocation during peak times, fixed corporate rates, and consolidated monthly
                        billing with detailed trip reporting to make expense management effortless.
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
                    Choose the right vehicle for the occasion. From understated executive sedans for daily travel to
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
