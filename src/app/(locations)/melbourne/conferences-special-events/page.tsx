import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Users, Calendar, ShieldCheck, Clock, Award, Mic, MapPin, Bus } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Conference & Event Transfers Melbourne | Corporate Group Transport",
    description: "Coordinate your Melbourne event transport with Auzzsi. Shuttle services for MCEC conferences, gala dinners, and special events.",
};

export default function MelbourneEventsPage() {
    const faqs = [
        {
            question: "Can You Coordinate Transport For Large Conferences?",
            answer: "Yes, we specialize in logistics for large events. We can coordinate a fleet of sedans for VIP speakers and People Movers or Coaches for majestic attendee transfers to and from the Melbourne Convention and Exhibition Centre (MCEC) or hotels."
        },
        {
            question: "Do You Offer On-Site Coordinators?",
            answer: "For major events requiring multiple vehicles and complex schedules, we can provide an on-site transport coordinator to manage vehicle flow and ensure all guests board the correct vehicles efficiently."
        },
        {
            question: "Can We Brand The Vehicles For Our Event?",
            answer: "We can accommodate magnetic branding on certain vehicles or place branded signage/water inside the vehicles upon request and with sufficient lead time. Please discuss your branding needs with our events team."
        },
        {
            question: "What Happens If An Event Runs Over Time?",
            answer: "Our chauffeurs are flexible. We understand events often run late. We bill based on the final time or agreed daily rate, ensuring transport is available whenever the event concludes."
        },
        {
            question: "Do You Service Major Sporting Events like the Australian Open?",
            answer: "Yes, we provide transfers to all major Melbourne events including the Australian Open, the Grand Prix, and the Spring Racing Carnival. We recommend booking well in advance for these high-demand periods."
        }
    ];

    const vehicles = [
        {
            category: 'VIP Transfer',
            name: 'Mercedes S-Class',
            desc: 'For keynote speakers and VIP guests.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Group Mover',
            name: 'Mercedes V-Class',
            desc: 'Efficient shuttle for teams and delegates.',
            passengers: 7,
            luggage: 6,
            bags: 5,
            image: '/tile-driver.png'
        },
        {
            category: 'Coach',
            name: 'Luxury Coach',
            desc: 'High capacity transport for large attendee groups (Upon Request).',
            passengers: 50,
            luggage: 50,
            bags: 50,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="Conference & Special Events Melbourne"
                subtitle="Seamless event logistics. From VIP transfers involving one car to multi-vehicle fleet coordination."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Event Transport Made Simple</h2>
                <div className={styles.textBlock}>
                    <p>
                        Organizing a conference, gala, or special event in Melbourne involves a thousand details.
                        Let Auzzsi Chauffeur handle the transport logistics. We have extensive experience working with
                        event planners to move people efficiently between airports, hotels, and venues like the MCEC,
                        Marvel Stadium, or the MCG.
                        <br /><br />
                        Our team provides a centralized point of contact for all your booking needs, ensuring consistent
                        service standards for every guest, whether they are a keynote speaker or a general attendee.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Spring Racing & Major Festivals</h3>
                    <p>
                        Melbourne is the events capital of Australia. Arrive at the Flemington Racecourse for the
                        Melbourne Cup or the Albert Park Grand Prix in comfort and style. Avoid the crowds and queueing
                        for taxis with a pre-booked chauffeur waiting for you at a designated pickup zone.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Calendar size={28} /></div>
                        <span className={styles.featureLabel}>Event<br />Planning</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Group<br />Logistics</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Reliable<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Flexible<br />Wait Time</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>VIP<br />Treatment</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Mic size={28} /></div>
                        <span className={styles.featureLabel}>Speaker<br />Transfers</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Event Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    A scalable fleet to match your event size.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Event Transport FAQs
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
                    title="Get An Event Proposal"
                    subtitle={<>
                        Contact our events team for a detailed transport proposal.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Event Details (Dates, Pax, Venues)"
                />
            </section>

            <Footer />
        </main>
    );
}
