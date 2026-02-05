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
    title: "Corporate Chauffeur Cairns | Executive Car Service",
    description: "Premium executive transport for business meetings, conferences, and transfers between Cairns and Port Douglas. Punctual, professional, and discreet.",
};

export default function CairnsCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Transfers From Cairns Airport To Port Douglas?",
            answer: "Yes, this is our specialty. We provide seamless, private executive transfers from Cairns Airport (CNS) to all resorts and hotels in Port Douglas via the scenic Captain Cook Highway."
        },
        {
            question: "Can I Book A Chauffeur For Meetings In Cairns CBD?",
            answer: "Absolutely. We facilitate travel between Cairns Airport, the Convention Centre, and business hubs. Our service ensures you stay cool and comfortable in the tropical heat."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer executive sedans (Holden Caprice/Genesis), premium SUVs (Audi Q7) for extra luggage space, and Mercedes V-Class vans for delegations."
        },
        {
            question: "Do Your Vehicles Have Air Conditioning?",
            answer: "Yes, all our vehicles are equipped with premium, high-performance climate control systems to ensure your comfort regardless of the humidity or temperature outside."
        },
        {
            question: "How Far In Advance Should I Book During Peak Season?",
            answer: "The Dry Season (May-October) is peak tourist and conference season. We highly recommend booking 2-4 weeks in advance to secure your preferred vehicle."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The corporate standard. Reliable and cool. Perfect for CBD meetings or transfers to Palm Cove.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'European Premium SUV',
            desc: 'Extra space and comfort. Ideal for transfers to Port Douglas with golf clubs or extra luggage.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-suv.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Perfect for conference teams. Spacious seating allows for briefings on the scenic drive north.',
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
                title="Corporate Chauffeur Cairns & Port Douglas"
                subtitle="Premium executive transport for business meetings, conferences, and transfers between Cairns and Port Douglas."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class In The Tropics</h2>
                <div className={styles.textBlock}>
                    <p>
                        Cairns is the gateway to the Great Barrier Reef and a major conference destination. Auzzsi Chauffeur provides professional ground transport
                        that ensures you arrive cool, collected, and on time.
                        <br /><br />
                        Whether you are commuting from Cairns Airport to the Convention Centre, heading to a resort in Palm Cove for a retreat,
                        or traveling north to Port Douglas, our professional chauffeurs provide a sanctuary from the heat.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Corporate Accounts & Priority Service</h3>
                    <p>
                        Streamline your company's ground transport with an Auzzsi Corporate Account. Enjoy benefits such as
                        priority vehicle allocation, fixed corporate rates for the Cairns-Port Douglas route, and consolidated monthly
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
                        <span className={styles.featureLabel}>Local<br />Knowledge</span>
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
                    Choose the right vehicle for the occasion. All our vehicles feature premium climate control to handle the Tropical North weather.
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
                        Contact our Cairns corporate team to discuss rates and set up your account.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span> or <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>corporate@auzzsi.com.au</span>
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
