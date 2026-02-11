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
    title: "Hourly Chauffeur Service Cairns & Port Douglas | Private Car Hire",
    description: "Flexible hourly chauffeur service in Cairns and Port Douglas. 'As Directed' private car hire for Daintree tours, waterfall circuits, and dining transfers.",
};

export default function CairnsHourlyPage() {
    const faqs = [
        {
            question: "What Is The Minimum Hire Time For Hourly Service?",
            answer: "Our minimum hire period for hourly 'As Directed' service in Cairns is typically 3 hours. For day trips to the Daintree or Tablelands, full-day packages are recommended."
        },
        {
            question: "Can I Create My Own Tour Itinerary?",
            answer: "Yes! Design your own dream day. Visit the Crystal Cascades, stop for lunch at Palm Cove, and then head up to Kuranda. We simply drive you where you want to go."
        },
        {
            question: "Does The Hourly Rate Include Waiting Time?",
            answer: "Yes. Your chauffeur and vehicle are exclusively yours. Whether you are swimming at Mossman Gorge or shopping at The Pier, we keep the car secure and cool."
        },
        {
            question: "Are Entrance Fees Included?",
            answer: "No, hourly rates cover the vehicle and driver only. Entrance fees to attractions like Paronella Park or the Skyrail are payable by you."
        },
        {
            question: "Can I Extend My Booking On The Day?",
            answer: "In most cases, yes. If you wish to stay longer at a waterfall or extend your tour, simply inform your chauffeur. We will extend the booking in 30-minute increments subject to availability."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Cost-effective luxury. Perfect for local transfers or a comfortable trip to Hartley\'s Crocodile Adventures.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'European Premium SUV',
            desc: 'Elevate your experience. Ideal for families exploring the Tablelands with extra space for gear.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-suv.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Group outings made easy. The best way to explore the Daintree Rainforest together in air-conditioned comfort.',
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
                title="Hourly Chauffeur Service Cairns & Port Douglas"
                subtitle="Complete flexibility with our 'As Directed' service. Your private car and driver in the Tropical North, ready when you are."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Your Car, Your Schedule</h2>
                <div className={styles.textBlock}>
                    <p>
                        Explore Cairns, Port Douglas, and the Atherton Tablelands on your own terms. Our hourly chauffeur service gives you the freedom
                        to travel at your own pace without the hassle of navigating winding roads or finding parking.
                        <br /><br />
                        Whether you are moving between business meetings in the city, enjoying a day trip to the Daintree Rainforest (the oldest in the world),
                        or chasing waterfalls on the Tablelands circuit, your chauffeur waits for you.
                        Enjoy the comfort of premium air-conditioning between every stop.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Ideal For</h3>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li><strong>Daintree Day Trips:</strong> Visit Mossman Gorge and Cape Tribulation.</li>
                        <li><strong>Waterfall Circuit:</strong> See Millaa Millaa, Zillie, and Ellinjaa Falls.</li>
                        <li><strong>Kuranda Visits:</strong> Travel to the village in the rainforest in style.</li>
                        <li><strong>Dining:</strong> Reliable transport for dinner reservations at Osprey's or Nu Nu.</li>
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
                    Choose the vehicle that fits your day. All come with complimentary water and premium climate control.
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
                        Get a quote for an hourly booking or a custom rainforest tour itinerary.
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
