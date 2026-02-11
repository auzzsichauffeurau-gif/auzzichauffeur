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


export default function PerthAirportPage() {
    // FAQ State
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How Far Apart Are the Terminals at Perth Airport?",
            answer: "Perth Airport has two separate precincts. T1 (International/Domestic) and T2 (Regional) are on one side, while T3 and T4 (Qantas/Jetstar) are on the other side, about a 15-minute drive apart. It is crucial to know your terminal, but don't worry—our chauffeurs confirm this before pickup."
        },
        {
            question: "Where Will My Chauffeur Meet Me?",
            answer: "For T1 International, meet us at the arrivals meeting point near the exit. For Domestic terminals (T1 Domestic, T2, T3, T4), we usually meet at the baggage carousel assigned to your flight. Your driver will hold a name sign."
        },
        {
            question: "How Long Is the Drive to Perth CBD?",
            answer: "The trip from Perth Airport to the CBD generally takes 20-30 minutes via Tonkin Hwy and Great Eastern Hwy, depending on traffic."
        },
        {
            question: "Do You Service FIFO Workers?",
            answer: "Yes, we provide reliable transfers for FIFO workers needing to get from T2/T3/T4 to their home or hotel efficiently after a long swing."
        },
        {
            question: "What Vehicles Are available?",
            answer: "We offer Executive Sedans for individuals, Luxury SUVs (Audi Q7) for extra luggage, and Mercedes V-Class People Movers for groups or families."
        },
        {
            question: "Is There a Surcharge for Late Night Pickups?",
            answer: "We offer fixed pricing, but some services between 11 PM and 5 AM may attract a small surcharge. This will be fully transparent in your quote."
        },
        {
            question: "Can You Pick Up from Fremantle Cruise Terminal?",
            answer: "Yes, we specialize in connecting cruise passengers from Fremantle Passenger Terminal to Perth Airport."
        }
    ];

    // Vehicle Tabs State
    const [activeVehicle, setActiveVehicle] = useState('Executive Sedans');

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Ideal for up to 4 passengers with light luggage. Features leather seating, climate control, and a smooth quiet ride.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Top-tier luxury from Mercedes-Benz or Audi. Perfect for VIPs requiring maximum comfort.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'Luxury SUV',
            desc: 'Spacious and commanding presence. Audi Q7 or similar, offering extra legroom and luggage capacity.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-driver.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'The gold standard for group travel. Seats up to 7 people in absolute luxury.',
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
                title="Airport Transfers Perth"
                subtitle="Reliable chauffeur service to and from Perth Airport (PER) T1, T2, T3 & T4."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Perth's Best Airport Transfer</h2>
                <div className={styles.textBlock}>
                    <p>
                        Whether you are flying in for a mining conference, a holiday in Margaret River, or arriving home,
                        Auzzsi Chauffeur ensures a smooth journey from Perth Airport (PER).
                        <br /><br />
                        We understand the layout of Perth's separate terminal precincts (T1/T2 vs T3/T4) and track all flights
                        globally. Your chauffeur will be waiting inside the terminal to assist with luggage and drive you
                        safely to the CBD, Fremantle, or your coastal suburb.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><DollarSign size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Rates</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Meet &<br />Greet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Flight<br />Tracking</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctual<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Professional<br />Drivers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Accredited<br />Vehicles</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Perth Fleet</h2>
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
                        Perth FAQs
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
                    <h2 className={styles.helpTitle}>Contact Perth Support</h2>
                    <p className={styles.helpSubtitle}>
                        Need help with your Perth booking? Contact us 24/7.<br /><span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
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
