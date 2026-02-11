"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "./airport-transfers.module.css";
import Link from "next/link";
import { useState } from "react";
import {
    Clock,
    DollarSign,
    ShieldCheck,
    Plane,
    Award,
    Users,
    Briefcase,
    ChevronDown,
    ChevronUp
} from "lucide-react";

export default function MelbourneAirportPage() {
    // FAQ State
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How Long Is The Trip From Melbourne Airport To Melbourne CBD?",
            answer: "The travel time from Melbourne Tullamarine Airport (MEL) to the CBD basically depends on traffic. In normal conditions, it takes approximately 25-35 minutes via the Tullamarine Freeway. During peak hours (morning 7-9am and evening 4-6pm), allow for 45-60 minutes."
        },
        {
            question: "Where Will My Chauffeur Meet Me? Melbourne Airport Pickup Location",
            answer: "Your chauffeur will meet you inside the terminal at the designated Chauffeur Meeting Point. They will be holding a sign with your name or company logo. For international arrivals, this is usually near the exit gates A or B."
        },
        {
            question: "How Much Does A Melbourne Airport Transfer Cost?",
            answer: "Our fixed-price airport transfers start from $110 for a luxury sedan to the CBD. Prices vary based on vehicle type and exact drop-off location. Use our Instant Quote tool above for a precise fare with no hidden costs."
        },
        {
            question: "How Much Luggage Can My Car Accommodate?",
            answer: "Our Executive Sedans (e.g. Holden Caprice, Genesis) fit 4 passengers and 2 large suitcases. Premium European Sedans (Audi/Mercedes) fit 3-4 passengers and 2 large suitcases. For more luggage, we recommend our Luxury People Movers (Mercedes V-Class) which can carry 7 passengers and 5-6 large bags."
        },
        {
            question: "Will My Chauffeur Wait If My Flight Is Delayed?",
            answer: "Yes. We monitor all incoming flights in real-time. If your flight is delayed, your pickup time is automatically adjusted, and your chauffeur will be there when you land at no extra waiting cost."
        }
    ];

    // Vehicle Tabs State
    const [activeVehicle, setActiveVehicle] = useState('Executive Sedans');

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Ideal for up to 4 passengers with light luggage. Features leather seating, climate control, and a smooth quiet ride for corporate transfers.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Top-tier luxury from Mercedes-Benz or Audi. Perfect for VIPs requiring maximum comfort, style and prestige.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'Luxury SUV',
            desc: 'Spacious and commanding presence. Audi Q7 or similar, offering extra legroom and luggage capacity for families or groups.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-driver.png' // Using placeholder
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'The gold standard for group travel. Seats up to 7 people in absolute luxury with conference style seating options.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png' // Using placeholder
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="Airport Transfers Melbourne"
                subtitle="Professional, licensed and safe drivers. An fleet of luxury vehicles. And the assurance that your ride will be waiting for you."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Reliable Melbourne Airport Transfers</h2>
                <div className={styles.textBlock}>
                    <p>
                        Travel to and from Tullamarine Airport in comfort, style, and peace of mind.
                        Whether you are travelling for business or pleasure, Auzzsi Chauffeur provides a seamless
                        airport transfer service that ensures you arrive on time and relaxed.
                        <br /><br />
                        Avoid the queue for taxis and the unpredictability of rideshare apps. With Auzzsi, your
                        professional chauffeur meets you inside the terminal, assists with your luggage, and drives
                        you directly to your destination in a pristine luxury vehicle.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Melbourne Tullamarine Airport To City Transfers Duration</h3>
                    <p>
                        A trip from Melbourne Airport (MEL) to the City (CBD) typically takes 25-35 minutes via the Tullamarine Freeway.
                        However, during peak traffic times, we recommend allowing 45-60 minutes to ensure you make your meetings or check-in on time.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Melbourne International To City Transport Costs</h3>
                    <p>
                        Why risk a running meter? Our fixed-price transfers offer complete transparency. You know the cost
                        before you ride. Prices start from just $110 for an Executive Sedan to the Melbourne CBD, offering
                        exceptional value for a premium service.
                    </p>
                    <p style={{ color: '#c5a467', fontStyle: 'italic', marginTop: '1rem' }}>
                        Click "Instant Quote" above to see exact pricing for your trip.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><DollarSign size={28} /></div>
                        <span className={styles.featureLabel}>Fixed Price<br />No Surprises</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Meet & Greet<br />Inside Terminal</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Flight Tracking<br />On Arrival</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Free Waiting<br />Time included</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Professional<br />Chauffeurs</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Licensed &<br />Insured</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>A Vehicle To Suit Every Traveller</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Whether you are travelling solo, as a couple, or with a large group, our diverse fleet ensures
                    we have the perfect vehicle for your needs. All our cars are late-model, immaculate, and strictly maintained.
                </p>

                <div className={styles.fleetTabs}>
                    {vehicles.map((v) => (
                        <button
                            key={v.category}
                            className={`${styles.tabBtn} ${activeVehicle === v.category ? styles.active : ''}`}
                            onClick={() => setActiveVehicle(v.category)}
                        >
                            {v.category}
                        </button>
                    ))}
                </div>

                <div className={styles.vehicleCard}>
                    {vehicles.filter(v => v.category === activeVehicle).map((v) => (
                        <div key={v.category} style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                            <div className={styles.vehicleImage}>
                                <img src={v.image} alt={v.name} />
                            </div>
                            <div className={styles.vehicleInfo}>
                                <h3 className={styles.vehicleTitle}>{v.name}</h3>
                                <p className={styles.vehicleDesc}>{v.desc}</p>

                                <div className={styles.vehicleStats}>
                                    <div className={styles.stat}><Users size={18} /> {v.passengers} Passengers</div>
                                    <div className={styles.stat}><Briefcase size={18} /> {v.luggage} Suitcases</div>
                                </div>

                                <Link href="/book">
                                    <button className={styles.btnGold} style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}>
                                        Book This Car
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        FAQs On Airport Transfer To & From<br /> Melbourne Tullamarine
                    </h2>

                    <div className={styles.accordion}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={styles.accordionItem}>
                                <button className={styles.accordionHeader} onClick={() => toggleFaq(idx)}>
                                    {faq.question}
                                    {openFaq === idx ? <ChevronUp size={20} color="#c5a467" /> : <ChevronDown size={20} color="#9ca3af" />}
                                </button>
                                {openFaq === idx && (
                                    <div className={styles.accordionContent}>
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT HELP SECTION */}
            <section className={styles.contactSection}>
                <div className={styles.contactImage}>
                    {/* Background Image set in CSS */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}></div>
                </div>
                <div className={styles.contactFormWrapper}>
                    <h2 className={styles.helpTitle}>We're Here To Help!</h2>
                    <p className={styles.helpSubtitle}>
                        Call our Customer care team on our 24/7 number or email us.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span> or <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>res@auzzsi.com.au</span>
                    </p>

                    <form className={styles.contactGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Name*</label>
                            <input type="text" className={styles.textInput} placeholder="Your Name" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Last Name*</label>
                            <input type="text" className={styles.textInput} placeholder="Your Last Name" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Contact Number*</label>
                            <input type="tel" className={styles.textInput} placeholder="+61..." />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Email Address*</label>
                            <input type="email" className={styles.textInput} placeholder="email@example.com" />
                        </div>
                        <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                            <label className={styles.inputLabel}>Subject</label>
                            <input type="text" className={styles.textInput} />
                        </div>
                        <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                            <label className={styles.inputLabel}>Message</label>
                            <textarea className={styles.textInput} rows={3} style={{ resize: 'none' }}></textarea>
                        </div>

                        <button className={styles.submitBtn}>Submit</button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
