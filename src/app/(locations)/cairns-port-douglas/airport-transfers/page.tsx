"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { useState } from "react";
import {
    Clock, DollarSign, ShieldCheck, Plane, Award, Users, Briefcase, ChevronDown, ChevronUp
} from "lucide-react";

export default function CairnsAirportPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "How long is the transfer from Cairns Airport to Port Douglas?",
            answer: "The scenic drive from Cairns Airport (CNS) to Port Douglas takes approximately 60 minutes via the Captain Cook Highway."
        },
        {
            question: "How far is the city from Cairns Airport?",
            answer: "Cairns CBD is only a short 10-15 minute drive from the airport."
        }
    ];

    const [activeVehicle, setActiveVehicle] = useState('Executive Sedans');
    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Comfortable sedan for airport transfers.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Luxury van for groups and families.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span>
                        <Link href="/locations">Locations</Link> <span>&gt;</span>
                        <Link href="/locations/cairns-port-douglas">Cairns & Port Douglas</Link> <span>&gt;</span>
                        Airport Transfers
                    </div>
                    <h1 className={styles.heroTitle}>Cairns & Port Douglas Airport Transfers</h1>
                    <p className={styles.heroSubtitle}>Gateway to the Great Barrier Reef.</p>
                    <div className={styles.heroButtons}>
                        <Link href="/book"><button className={styles.btnGold}>Book Now</button></Link>
                        <button className={styles.btnOutline}>Instant Quote</button>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Tropical North Queensland Transfers</h2>
                <div className={styles.textBlock}>
                    <p>
                        Enjoy the spectacular coastal drive to Port Douglas or a quick transfer to your Cairns hotel
                        with Auzzsi Chauffeur. We monitor all flights arriving at Cairns International Airport (CNS).
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><DollarSign size={28} /></div>
                        <span className={styles.featureLabel}>Fixed Price<br />Transfers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Meet & Greet<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Flight Tracking<br />Included</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Cairns Fleet</h2>
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

            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        FAQs: Cairns & Port Douglas
                    </h2>
                    <div className={styles.accordion}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={styles.accordionItem}>
                                <button className={styles.accordionHeader} onClick={() => toggleFaq(idx)}>
                                    {faq.question}
                                    {openFaq === idx ? <ChevronUp size={20} color="#c5a467" /> : <ChevronDown size={20} color="#9ca3af" />}
                                </button>
                                {openFaq === idx && <div className={styles.accordionContent}><p>{faq.answer}</p></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.contactImage}></div>
                <div className={styles.contactFormWrapper}>
                    <h2 className={styles.helpTitle}>Contact Cairns Support</h2>
                    <p className={styles.helpSubtitle}>Call us 24/7 on <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span></p>
                    <form className={styles.contactGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}><label className={styles.inputLabel}>Name*</label><input type="text" className={styles.textInput} /></div>
                        <div className={styles.inputGroup}><label className={styles.inputLabel}>Last Name*</label><input type="text" className={styles.textInput} /></div>
                        <div className={styles.inputGroup}><label className={styles.inputLabel}>Phone*</label><input type="tel" className={styles.textInput} /></div>
                        <div className={styles.inputGroup}><label className={styles.inputLabel}>Email*</label><input type="email" className={styles.textInput} /></div>
                        <div className={styles.inputGroup} style={{ gridColumn: '1/-1' }}><label className={styles.inputLabel}>Message</label><textarea className={styles.textInput} rows={3}></textarea></div>
                        <button className={styles.submitBtn}>Submit</button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
