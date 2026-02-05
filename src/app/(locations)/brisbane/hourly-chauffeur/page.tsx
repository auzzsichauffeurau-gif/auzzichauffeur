import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Navigation, PauseCircle, ShoppingBag, Utensils, Award, ShieldCheck, Users, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Brisbane | Private Car Hire QLD",
    description: "Flexible hourly chauffeur service in Brisbane. 'As Directed' private car hire for meetings, shopping, tours, and events.",
};

export default function BrisbaneHourlyPage() {
    const faqs = [
        {
            question: "What Is The Minimum Hire Time For Hourly Service?",
            answer: "Our minimum hire period for hourly 'As Directed' service in Brisbane is typically 2 hours. This provides flexibility for quick meetings or a dinner transfer with waiting time included."
        },
        {
            question: "Can I Travel To The Gold Coast On An Hourly Rate?",
            answer: "Yes, you can use hourly hire for travel between Brisbane, the Gold Coast, and the Sunshine Coast. However, for direct A-to-B transfers, our fixed-price transfer service might be more cost-effective. Hourly is best if you need the car to wait or make stops."
        },
        {
            question: "Does The Hourly Rate Include Waiting Time?",
            answer: "Yes. Your chauffeur and vehicle are exclusively yours. Whether you are in a meeting at 1 William Street, dining at Eagle Street Pier, or shopping on James Street, we wait for you."
        },
        {
            question: "Are Tolls And Parking Included In The Hourly Rate?",
            answer: "Hourly rates cover the vehicle and driver. Tolls (e.g. Gateway Bridge) and parking fees incurred at your request are generally charged as extras."
        },
        {
            question: "Can I Extend My Booking On The Day?",
            answer: "In most cases, yes. If you wish to extend your hire, simply inform your chauffeur. We will extend the booking in 15 or 30-minute increments, subject to vehicle availability."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Cost-effective luxury. Perfect for multiple CBD meetings or day trips to Mt Coot-tha.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Elevate your experience. Ideal for special date nights, theatre transfers to QPAC, or VIP guests.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Group outings made easy. Keep your party together for Sunshine Coast tours or stadium event transport.',
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
                title="Hourly Chauffeur Service Brisbane"
                subtitle="Complete flexibility with our 'As Directed' service. Your private car and driver in Brisbane, ready when you are."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Your Car, Your Schedule</h2>
                <div className={styles.textBlock}>
                    <p>
                        Explore Brisbane on your own terms. Our hourly chauffeur service gives you the freedom
                        to travel at your own pace without the hassle of re-booking taxis or waiting for rideshares in the heat.
                        <br /><br />
                        Whether you are hopping between business meetings in the CBD and Fortitude Valley, exploring South Bank,
                        or enjoying a day of shopping on James Street, your chauffeur waits for you.
                        Leave your shopping bags in the safe hands of your driver and enjoy true convenience.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Ideal For</h3>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li><strong>Business Meetings:</strong> Multiple stops across Brisbanes business hubs.</li>
                        <li><strong>Day Tours:</strong> Visit Lone Pine Koala Sanctuary or Mt Coot-tha at your leisure.</li>
                        <li><strong>Shopping Trips:</strong> Visit Queen Street Mall or James Street boutiques comfortably.</li>
                        <li><strong>Special Events:</strong> Dinner and a show at QPAC without parking stress.</li>
                    </ul>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Navigation size={28} /></div>
                        <span className={styles.featureLabel}>As Directed<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><PauseCircle size={28} /></div>
                        <span className={styles.featureLabel}>Waiting<br />Included</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShoppingBag size={28} /></div>
                        <span className={styles.featureLabel}>Secure<br />Storage</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Utensils size={28} /></div>
                        <span className={styles.featureLabel}>Dinner<br />Transfers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Local<br />Knowledge</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Hourly Rates</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Flexible Fleet Options</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Choose the vehicle that fits your day. All come with complimentary water and climate control.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Hourly Charter FAQs
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
                    title="Plan Your Day"
                    subtitle={<>
                        Get a quote for an hourly booking or a day tour in Brisbane.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span> or <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    dateLabel="Duration Needed"
                    emailLabel="Email Address*"
                    detailsLabel="Itinerary Details"
                    btnText="Get Hourly Quote"
                />
            </section>

            <Footer />
        </main>
    );
}
