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
    title: "Corporate Chauffeur Brisbane | Executive Car Service QLD",
    description: "Premium executive transport for business meetings, roadshows, and VIP events in Brisbane. Punctual, professional, and discreet.",
};

export default function BrisbaneCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Corporate Accounts With Monthly Invoicing?",
            answer: "Yes, we offer dedicated corporate accounts for businesses in Brisbane and Queensland. This includes detailed monthly invoicing, priority booking status, and flexible payment terms. Contact our team to set up an account today."
        },
        {
            question: "Can I Book A Chauffeur By The Hour For Meetings?",
            answer: "Absolutely. Our 'Hourly Hire' service is ideal for executives attending multiple meetings across Brisbane CBD, Fortitude Valley, and South Bank. Your chauffeur stays with you, ready to move instantly."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer a range of executive vehicles including the Genesis / Holden Caprice (Executive Sedan), Audi A8 (Premium European), and Mercedes V-Class vans for corporate teams. All vehicles are unmarked or discreetly badged."
        },
        {
            question: "Will My Chauffeur Sign A Non-Disclosure Agreement (NDA)?",
            answer: "Our chauffeurs are professionals who understand the importance of discretion and confidentiality. We are happy to have drivers sign specific NDAs for high-profile clients or sensitive meetings."
        },
        {
            question: "How Far In Advance Should I Book For Corporate Events?",
            answer: "For individual transfers, we can often accommodate same-day bookings. For large corporate events at the Brisbane Convention & Exhibition Centre, we recommend booking 1-2 weeks in advance."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The corporate standard. Reliable, understated, and comfortable. Features leather seating and ample workspace for the busy executive.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Impress your clients or travel in ultimate luxury. Mercedes-Benz S-Class or Audi A8L, offering reclining seats and superior noise isolation.',
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
                title="Corporate Chauffeur Brisbane"
                subtitle="Premium executive transport for business meetings, roadshows, and VIP events in Brisbane. Punctual, professional, and discreet."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class Travel On The Ground</h2>
                <div className={styles.textBlock}>
                    <p>
                        In Brisbane's growing business landscape, efficiency is key. Auzzsi Chauffeur’s
                        corporate service ensures you maximize your productivity while on the move. Transform travel time
                        into work time in the quiet, private cabin of our executive vehicles.
                        <br /><br />
                        Whether you are commuting between the Brisbane Airport and the CBD, attending a conference at the Convention Centre,
                        or visiting clients in the Gold Coast corridor, our professional chauffeurs ensure you arrive relaxed,
                        prepared, and on time.
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
                    Choose the right vehicle for the occasion. From understated executive sedans for daily meetings to
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
                        Contact our Brisbane corporate team to discuss rates and set up your account.
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
