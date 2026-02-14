import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { GraduationCap, Heart, ShieldCheck, UserCheck, ChevronRight, CheckCircle, Star } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import FAQSchema from "@/components/FAQSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "International Student Transfers | Auzzie Chauffeur | Safe Airport Pickup" },
    description: "Safe and reliable airport transfers for international students Australia-wide. Meet & greet inside terminal. Transport to university accommodation.",
};

export default function StudentServicesPage() {
    const locations = [
        { city: "Sydney", link: "/sydney/international-student-transfers", desc: "USYD, UNSW, UTS & Macquarie" },
        { city: "Melbourne", link: "/melbourne/international-student-transfers", desc: "UniMelb, Monash & RMIT" },
        { city: "Brisbane", link: "/brisbane/international-student-transfers", desc: "UQ, QUT & Griffith" },
        { city: "Perth", link: "/perth/international-student-transfers", desc: "UWA, Curtin & Murdoch" },
        { city: "Gold Coast", link: "/gold-coast/international-student-transfers", desc: "Bond University & Griffith GC" },
        { city: "Adelaide", link: "/adelaide/international-student-transfers", desc: "University of Adelaide & Flinders" },
        { city: "Hobart", link: "/hobart/international-student-transfers", desc: "University of Tasmania (UTAS)" },
        { city: "Cairns", link: "/cairns-port-douglas/international-student-transfers", desc: "JCU & CQU Cairns" },
    ];

    const faqs = [
        {
            question: "How much do student airport transfers cost in Australia?",
            answer: "Student airport transfers cost $90-$150 depending on the city and university location. Sydney transfers start from $120, Melbourne from $110, and Brisbane from $105. We offer student discounts for group bookings."
        },
        {
            question: "Do you provide meet and greet for international students?",
            answer: "Yes, we provide full meet & greet service inside the arrivals terminal. Your chauffeur will hold a name sign and assist with luggage. We'll send you their photo and contact details before arrival."
        },
        {
            question: "Can you take students directly to university accommodation?",
            answer: "Absolutely. We transport students directly to university accommodation, student housing, or homestay addresses. We're familiar with all major universities and student areas across Australia."
        },
        {
            question: "Is it safe for students traveling alone?",
            answer: "Yes, safety is our priority. All chauffeurs are professionally licensed, background-checked, and experienced with international student transfers. Parents can track the journey and receive confirmation of safe arrival."
        },
        {
            question: "Do you offer group discounts for students?",
            answer: "Yes, we offer discounts for group bookings when multiple students are traveling together. Contact us for custom quotes for orientation groups or university cohorts."
        },
        {
            question: "Can parents book transfers for their children?",
            answer: "Absolutely. Parents can book and pay for transfers in advance. We'll send confirmation and driver details to both parent and student, with real-time updates during the journey."
        }
    ];

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Student Transfers", url: "/services/international-student-transfers" }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <ServiceSchema
                name="International Student Airport Transfers"
                description="Safe and reliable airport transfers for international students across Australia with meet and greet service."
                url="/services/international-student-transfers"
            />

            <Hero
                title="International Student Transfers"
                subtitle="Safe, welcoming airport pickups for students arriving in Australia."
                showStats={false}
            />

            {/* AI Overview - Quick service summary for search engines */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1f2937', fontWeight: '500' }}>
                        Safe <strong>international student airport transfers</strong> across Australia. <strong>From $90</strong> with <strong>meet & greet service</strong>, <strong>luggage assistance</strong>, and <strong>direct transport to university accommodation</strong>. Servicing all major universities including <strong>USYD</strong>, <strong>UNSW</strong>, <strong>UniMelb</strong>, <strong>UQ</strong>, and more. <strong>Group discounts available</strong>.
                    </p>
                </div>
            </section>

            {/* International student airport transfers university pickup safe reliable chauffeur */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Welcome to Australia</h2>
                <div className={styles.textBlock}>
                    <p>
                        Arriving in a new country for studies is exciting but can be daunting. Auzzsi Chauffeur provides peace of mind
                        for students and parents alike with our dedicated student transfer service.
                        <br /><br />
                        Our vetted drivers meet students inside the terminal, assist with luggage, and drive them directly to their
                        university accommodation or homestay. We cover all major Australian university cities.
                    </p>
                </div>

                {/* Key Travel Tips for Students - Addressing specific search intents */}
                <div style={{ margin: '3rem 0', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1.5rem' }}>Essential Travel Tips for New Students</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={20} color="#c5a467" /> Accommodation Office vs. Residence Drop-off
                            </h4>
                            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                                Most university accommodations (like <strong>UNSW Village</strong>, <strong>UniLodge</strong>, or <strong>Student Living</strong>) require you to pick up keys from a reception office first.
                                PLEASE check your arrival instructions! If you need to grab keys from the <strong>Welcome Centre</strong> before heading to your room (e.g., Cowper Street), let us know.
                            </p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={20} color="#c5a467" /> Missed the University Shuttle Deadline?
                            </h4>
                            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                                Many university free shuttles (like UNSW) require booking <strong>at least 7 days in advance</strong>. If you've missed this window, don't worry!
                                We accept bookings up to <strong>24 hours before arrival</strong>. We are the perfect backup plan for last-minute student travel arrangements.
                            </p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={20} color="#c5a467" /> Domestic vs. International Arrivals
                            </h4>
                            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                                <strong>Flying from Melbourne to Sydney?</strong> Ensure you book pickup for the <strong>Domestic Terminal</strong>. You clear customs in your first port of arrival (e.g., Melbourne), not Sydney.
                                Domestic arrivals are quicker—drivers typically meet you 30 mins after landing.
                            </p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={20} color="#c5a467" /> Campus Gate vs. Door-to-Door
                            </h4>
                            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                                University shuttles often drop students at a central point like <strong>Gate 8 High St</strong> or a Welcome Centre.
                                Traveling with heavy luggage? Our chauffeurs drive you <strong>directly to your specific building address</strong> or reception door, saving you a long walk across campus.
                            </p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={20} color="#c5a467" /> How much time for pickup?
                            </h4>
                            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                                <strong>International Arrivals:</strong> Book pickup <strong>45-60 mins</strong> after landing for customs.
                                <br />
                                <strong>Domestic Arrivals:</strong> Book <strong>30 mins</strong> after landing.
                                <br />
                                We track your flight number! If you're delayed, we adjust our arrival time automatically.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Student Pricing Table */}
                <section style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Student Transfer Rates</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Affordable fixed-price transfers for students. Prices are per vehicle, not per person—share with friends to save!
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#14532d', color: 'white' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>City / Route</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Vehicle</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Capacity</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>From Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Sydney Airport to USYD / UTS (City)</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Sedan</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Pax</td>
                                    <td style={{ padding: '1rem', color: '#16a34a', fontWeight: 'bold', fontSize: '1.1rem' }}>$85</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f0fdf4' }}>
                                    <td style={{ padding: '1rem' }}><strong>Melbourne Airport to UniMelb (Parkville)</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Sedan</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Pax</td>
                                    <td style={{ padding: '1rem', color: '#16a34a', fontWeight: 'bold', fontSize: '1.1rem' }}>$90</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Brisbane Airport to UQ (St Lucia)</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Sedan</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Pax</td>
                                    <td style={{ padding: '1rem', color: '#16a34a', fontWeight: 'bold', fontSize: '1.1rem' }}>$85</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f0fdf4' }}>
                                    <td style={{ padding: '1rem' }}><strong>Perth Airport to UWA (Crawley)</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Sedan</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Pax</td>
                                    <td style={{ padding: '1rem', color: '#16a34a', fontWeight: 'bold', fontSize: '1.1rem' }}>$80</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                    <td style={{ padding: '1rem' }}><strong>Adelaide Airport to North Terrace</strong></td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Sedan</td>
                                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}>3 Pax</td>
                                    <td style={{ padding: '1rem', color: '#16a34a', fontWeight: 'bold', fontSize: '1.1rem' }}>$60</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginTop: '3rem'
                }}>
                    {locations.map((loc, idx) => (
                        <Link href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><GraduationCap size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Students
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
                                    View Details <ChevronRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '3rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><UserCheck size={28} /></div>
                        <span className={styles.featureLabel}>Meet &<br />Greet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Safe<br />Journey</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>Friendly<br />Drivers</span>
                    </div>
                </div>
            </section>

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
                    title="Get a Student Quote"
                    subtitle={<>
                        Safe arrival services for international students.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>info@auzziechauffeur.com.au</span>
                    </>}
                    detailsLabel="Arrival Details (Flight, Uni, Address)"
                />
            </section>

            {/* FAQs Section */}
            <FAQSchema pairs={faqs} />
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Student Transfer FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
