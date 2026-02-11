"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
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
    ChevronUp,
} from "lucide-react";

export default function SydneyAirportPage() {
    // FAQ State
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How Long Is The Trip From Sydney Airport To Sydney CBD?",
            answer: "The travel time from Sydney Kingsford Smith Airport (SYD) to the CBD (Circular Quay / Wynyard) varies significantly with traffic. In normal conditions, it takes approximately 20-30 minutes. During peak hours (morning 8-10am and evening 5-7pm), please allow 45-60 minutes."
        },
        {
            question: "Where Will My Chauffeur Meet Me At Sydney Airport?",
            answer: "For International Arrivals (T1), your chauffeur will meet you inside the Arrival Hall at Meeting Point A or B, holding a sign with your name. For Domestic Arrivals (T2/T3), the meeting point is usually at the baggage carousel designated for your flight."
        },
        {
            question: "How Much Does A Sydney Airport Transfer Cost?",
            answer: "Our fixed-price airport transfers start from $120 for a luxury sedan to the Sydney CBD. Prices vary based on vehicle type and exact drop-off location. Use our Instant Quote tool above for a precise fare with no hidden costs."
        },
        {
            question: "How Much Luggage Can My Car Accommodate?",
            answer: "Our Executive Sedans accommodate up to 2 large suitcases and 4 passengers. For larger groups or excess luggage, we recommend our Mercedes V-Class People Movers, which can handle up to 7 passengers and 6 large bags."
        },
        {
            question: "Will My Chauffeur Wait If My Flight Is Delayed?",
            answer: "Yes. We monitor all incoming flights in real-time. If your flight is delayed, your pickup time is automatically adjusted, and your chauffeur will be there when you land at no extra waiting cost."
        },
        {
            question: "Planning Ahead: Airport To Hotel, Hotel To Airport, And More",
            answer: "We recommend booking your transfer at least 24 hours in advance to ensure vehicle availability, especially during peak travel seasons. However, we can often accommodate last-minute bookings depending on fleet location."
        },
        {
            question: "Popular Destinations - Sydney Airport Transfers",
            answer: "Besides the CBD, we frequently drive guests to Parramatta, North Sydney, Manly, Bondi Beach, and the Blue Mountains. We cover the entire Greater Sydney region."
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
            image: '/tile-driver.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'The gold standard for group travel. Seats up to 7 people in absolute luxury with conference style seating options.',
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
                title="Airport Transfers Sydney"
                subtitle="Premium chauffeur service to and from Sydney Kingsford Smith Airport. Reliable, luxurious, and always on time."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Reliable Sydney Airport Transfers</h2>
                <div className={styles.textBlock}>
                    <p>
                        Avoid the stress of Sydney traffic and taxi queues. Auzzsi Chauffeur provides a seamless
                        transfer experience from Sydney Airport (SYD) to the CBD, North Shore, Western Suburbs, and beyond.
                        <br /><br />
                        Whether you are arriving at Terminal 1 (International) or Terminals 2 & 3 (Domestic),
                        your professional chauffeur will track your flight and meet you inside the terminal with a name sign.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><DollarSign size={28} /></div>
                        <span className={styles.featureLabel}>Fixed Price<br />No Toll Extra</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Meet & Greet<br />Inside Terminal</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Flight Tracking<br />Global</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>60 Mins Free<br />Waiting Time</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Top Rated<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Licensed &<br />Accredited</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Sydney Fleet</h2>
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
                                        Book Now
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
                        FAQs: Sydney Airport Transfers
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
                    <h2 className={styles.helpTitle}>Contact Sydney Support</h2>
                    <p className={styles.helpSubtitle}>
                        Need help with your booking? Contact us 24/7.<br /><span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
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
